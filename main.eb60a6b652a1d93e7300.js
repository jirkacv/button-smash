/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NonDeclaredType */
/* unused harmony export Any */
/* unused harmony export Unit */
/* unused harmony export Option */
/* unused harmony export Array */
/* unused harmony export Tuple */
/* unused harmony export Function */
/* unused harmony export GenericParam */
/* unused harmony export Interface */
/* unused harmony export makeGeneric */
/* unused harmony export isGeneric */
/* unused harmony export getDefinition */
/* unused harmony export extendInfo */
/* unused harmony export hasInterface */
/* unused harmony export getPropertyNames */
/* unused harmony export isArray */
/* harmony export (immutable) */ __webpack_exports__["d"] = toString;
/* unused harmony export ObjectRef */
/* unused harmony export getHashCode */
/* unused harmony export hash */
/* harmony export (immutable) */ __webpack_exports__["b"] = equals;
/* unused harmony export comparePrimitives */
/* harmony export (immutable) */ __webpack_exports__["a"] = compare;
/* unused harmony export equalsRecords */
/* unused harmony export compareRecords */
/* unused harmony export equalsUnions */
/* unused harmony export compareUnions */
/* unused harmony export createDisposable */
/* unused harmony export createAtom */
/* unused harmony export createObj */
/* unused harmony export toPlainJsObj */
/* unused harmony export jsOptions */
/* unused harmony export round */
/* unused harmony export sign */
/* harmony export (immutable) */ __webpack_exports__["c"] = randomNext;
/* unused harmony export applyOperator */
/* unused harmony export unescapeDataString */
/* unused harmony export escapeDataString */
/* unused harmony export escapeUriString */
/* unused harmony export clear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Date__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Symbol__ = __webpack_require__(11);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var NonDeclaredType = function () {
    function NonDeclaredType(kind, definition, generics) {
        _classCallCheck(this, NonDeclaredType);

        this.kind = kind;
        this.definition = definition;
        this.generics = generics;
    }

    _createClass(NonDeclaredType, [{
        key: "Equals",
        value: function Equals(other) {
            if (this.kind === other.kind && this.definition === other.definition) {
                return _typeof(this.generics) === "object"
                // equalsRecords should also work for Type[] (tuples)
                ? equalsRecords(this.generics, other.generics) : this.generics === other.generics;
            }
            return false;
        }
    }]);

    return NonDeclaredType;
}();
var Any = new NonDeclaredType("Any");
var Unit = new NonDeclaredType("Unit");
function Option(t) {
    return new NonDeclaredType("Option", null, [t]);
}
function FableArray(t) {
    var isTypedArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var def = null;
    var genArg = null;
    if (isTypedArray) {
        def = t;
    } else {
        genArg = t;
    }
    return new NonDeclaredType("Array", def, [genArg]);
}

function Tuple(types) {
    return new NonDeclaredType("Tuple", null, types);
}
function FableFunction(types) {
    return new NonDeclaredType("Function", null, types);
}

function GenericParam(definition) {
    return new NonDeclaredType("GenericParam", definition);
}
function Interface(definition) {
    return new NonDeclaredType("Interface", definition);
}
function makeGeneric(typeDef, genArgs) {
    return new NonDeclaredType("GenericType", typeDef, genArgs);
}
function isGeneric(typ) {
    return typ instanceof NonDeclaredType && typ.kind === "GenericType";
}
/**
 * Returns the parent if this is a declared generic type or the argument otherwise.
 * Attention: Unlike .NET this doesn't throw an exception if type is not generic.
 */
function getDefinition(typ) {
    return isGeneric(typ) ? typ.definition : typ;
}
function extendInfo(cons, info) {
    var parent = Object.getPrototypeOf(cons.prototype);
    if (typeof parent[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection] === "function") {
        var newInfo = {};
        var parentInfo = parent[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection]();
        Object.getOwnPropertyNames(info).forEach(function (k) {
            var i = info[k];
            if ((typeof i === "undefined" ? "undefined" : _typeof(i)) === "object") {
                newInfo[k] = Array.isArray(i) ? (parentInfo[k] || []).concat(i) : Object.assign(parentInfo[k] || {}, i);
            } else {
                newInfo[k] = i;
            }
        });
        return newInfo;
    }
    return info;
}
function hasInterface(obj, interfaceName) {
    if (interfaceName === "System.Collections.Generic.IEnumerable") {
        return typeof obj[Symbol.iterator] === "function";
    } else if (typeof obj[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection] === "function") {
        var interfaces = obj[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection]().interfaces;
        return Array.isArray(interfaces) && interfaces.indexOf(interfaceName) > -1;
    }
    return false;
}
/**
 * Returns:
 * - Records: array with names of fields
 * - Classes: array with names of getters
 * - Nulls and unions: empty array
 * - JS Objects: The result of calling Object.getOwnPropertyNames
 */
function getPropertyNames(obj) {
    if (obj == null) {
        return [];
    }
    var propertyMap = typeof obj[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection] === "function" ? obj[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection]().properties || [] : obj;
    return Object.getOwnPropertyNames(propertyMap);
}
function isArray(obj) {
    return Array.isArray(obj) || ArrayBuffer.isView(obj);
}
function toString(obj) {
    var quoteStrings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    function isObject(x) {
        return x !== null && (typeof x === "undefined" ? "undefined" : _typeof(x)) === "object" && !(x instanceof Number) && !(x instanceof String) && !(x instanceof Boolean);
    }
    if (obj == null || typeof obj === "number") {
        return String(obj);
    }
    if (typeof obj === "string") {
        return quoteStrings ? JSON.stringify(obj) : obj;
    }
    if (obj instanceof Date) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__Date__["b" /* toString */])(obj);
    }
    if (typeof obj.ToString === "function") {
        return obj.ToString();
    }
    if (hasInterface(obj, "FSharpUnion")) {
        var info = obj[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection]();
        var uci = info.cases[obj.tag];
        switch (uci.length) {
            case 1:
                return uci[0];
            case 2:
                // For simplicity let's always use parens, in .NET they're ommitted in some cases
                return uci[0] + " (" + toString(obj.data, true) + ")";
            default:
                return uci[0] + " (" + obj.data.map(function (x) {
                    return toString(x, true);
                }).join(",") + ")";
        }
    }
    try {
        return JSON.stringify(obj, function (k, v) {
            return v && v[Symbol.iterator] && !Array.isArray(v) && isObject(v) ? Array.from(v) : v && typeof v.ToString === "function" ? toString(v) : v;
        });
    } catch (err) {
        // Fallback for objects with circular references
        return "{" + Object.getOwnPropertyNames(obj).map(function (k) {
            return k + ": " + String(obj[k]);
        }).join(", ") + "}";
    }
}
var ObjectRef = function () {
    function ObjectRef() {
        _classCallCheck(this, ObjectRef);
    }

    _createClass(ObjectRef, null, [{
        key: "id",
        value: function id(o) {
            if (!ObjectRef.idMap.has(o)) {
                ObjectRef.idMap.set(o, ++ObjectRef.count);
            }
            return ObjectRef.idMap.get(o);
        }
    }]);

    return ObjectRef;
}();
ObjectRef.idMap = new WeakMap();
ObjectRef.count = 0;
function getHashCode(x) {
    return ObjectRef.id(x) * 2654435761 | 0;
}
function hash(x) {
    if ((typeof x === "undefined" ? "undefined" : _typeof(x)) === _typeof(1)) {
        return x * 2654435761 | 0;
    }
    if (x != null && typeof x.GetHashCode === "function") {
        return x.GetHashCode();
    } else {
        var s = toString(x);
        var h = 5381;
        var i = 0;
        var len = s.length;
        while (i < len) {
            h = h * 33 ^ s.charCodeAt(i++);
        }
        return h;
    }
}
function equals(x, y) {
    // Optimization if they are referencially equal
    if (x === y) {
        return true;
    } else if (x == null) {
        return y == null;
    } else if (y == null) {
        return false;
    } else if ((typeof x === "undefined" ? "undefined" : _typeof(x)) !== "object" || (typeof y === "undefined" ? "undefined" : _typeof(y)) !== "object") {
        return x === y;
        // Equals override or IEquatable implementation
    } else if (typeof x.Equals === "function") {
        return x.Equals(y);
    } else if (typeof y.Equals === "function") {
        return y.Equals(x);
    } else if (Object.getPrototypeOf(x) !== Object.getPrototypeOf(y)) {
        return false;
    } else if (Array.isArray(x)) {
        if (x.length !== y.length) {
            return false;
        }
        for (var i = 0; i < x.length; i++) {
            if (!equals(x[i], y[i])) {
                return false;
            }
        }
        return true;
    } else if (ArrayBuffer.isView(x)) {
        if (x.byteLength !== y.byteLength) {
            return false;
        }
        var dv1 = new DataView(x.buffer);
        var dv2 = new DataView(y.buffer);
        for (var _i = 0; _i < x.byteLength; _i++) {
            if (dv1.getUint8(_i) !== dv2.getUint8(_i)) {
                return false;
            }
        }
        return true;
    } else if (x instanceof Date) {
        return x.getTime() === y.getTime();
    } else {
        return false;
    }
}
function comparePrimitives(x, y) {
    return x === y ? 0 : x < y ? -1 : 1;
}
function compare(x, y) {
    // Optimization if they are referencially equal
    if (x === y) {
        return 0;
    } else if (x == null) {
        return y == null ? 0 : -1;
    } else if (y == null) {
        return 1; // everything is bigger than null
    } else if ((typeof x === "undefined" ? "undefined" : _typeof(x)) !== "object" || (typeof y === "undefined" ? "undefined" : _typeof(y)) !== "object") {
        return x === y ? 0 : x < y ? -1 : 1;
        // Some types (see Long.ts) may just implement the function and not the interface
        // else if (hasInterface(x, "System.IComparable"))
    } else if (typeof x.CompareTo === "function") {
        return x.CompareTo(y);
    } else if (typeof y.CompareTo === "function") {
        return y.CompareTo(x) * -1;
    } else if (Object.getPrototypeOf(x) !== Object.getPrototypeOf(y)) {
        return -1;
    } else if (Array.isArray(x)) {
        if (x.length !== y.length) {
            return x.length < y.length ? -1 : 1;
        }
        for (var i = 0, j = 0; i < x.length; i++) {
            j = compare(x[i], y[i]);
            if (j !== 0) {
                return j;
            }
        }
        return 0;
    } else if (ArrayBuffer.isView(x)) {
        if (x.byteLength !== y.byteLength) {
            return x.byteLength < y.byteLength ? -1 : 1;
        }
        var dv1 = new DataView(x.buffer);
        var dv2 = new DataView(y.buffer);
        for (var _i2 = 0, b1 = 0, b2 = 0; _i2 < x.byteLength; _i2++) {
            b1 = dv1.getUint8(_i2), b2 = dv2.getUint8(_i2);
            if (b1 < b2) {
                return -1;
            }
            if (b1 > b2) {
                return 1;
            }
        }
        return 0;
    } else if (x instanceof Date) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__Date__["a" /* compare */])(x, y);
    } else if ((typeof x === "undefined" ? "undefined" : _typeof(x)) === "object") {
        var xhash = hash(x);
        var yhash = hash(y);
        if (xhash === yhash) {
            return equals(x, y) ? 0 : -1;
        } else {
            return xhash < yhash ? -1 : 1;
        }
    } else {
        return x < y ? -1 : 1;
    }
}
function equalsRecords(x, y) {
    // Optimization if they are referencially equal
    if (x === y) {
        return true;
    } else {
        var keys = getPropertyNames(x);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                if (!equals(x[key], y[key])) {
                    return false;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return true;
    }
}
function compareRecords(x, y) {
    // Optimization if they are referencially equal
    if (x === y) {
        return 0;
    } else {
        var keys = getPropertyNames(x);
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = keys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var key = _step2.value;

                var res = compare(x[key], y[key]);
                if (res !== 0) {
                    return res;
                }
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }

        return 0;
    }
}
function equalsUnions(x, y) {
    return x === y || x.tag === y.tag && equals(x.data, y.data);
}
function compareUnions(x, y) {
    if (x === y) {
        return 0;
    } else {
        var res = x.tag < y.tag ? -1 : x.tag > y.tag ? 1 : 0;
        return res !== 0 ? res : compare(x.data, y.data);
    }
}
function createDisposable(f) {
    return _defineProperty({
        Dispose: f
    }, __WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection, function () {
        return { interfaces: ["System.IDisposable"] };
    });
}
// tslint forbids non-arrow functions, but it's
// necessary here to use the arguments object
/* tslint:disable */
function createAtom(value) {
    var atom = value;
    return function () {
        return arguments.length === 0 ? atom : (atom = arguments[0], void 0);
    };
}
/* tslint:enable */
var CaseRules = {
    None: 0,
    LowerFirst: 1
};
function isList(o) {
    if (o != null) {
        if (typeof o[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection] === "function") {
            return o[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection]().type === "Microsoft.FSharp.Collections.FSharpList";
        }
    }
    return false;
}
function createObj(fields) {
    var caseRule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CaseRules.None;
    var casesCache = arguments[2];

    var iter = fields[Symbol.iterator]();
    var cur = iter.next();
    var o = {};
    while (!cur.done) {
        var value = cur.value;
        if (Array.isArray(value)) {
            o[value[0]] = value[1];
        } else {
            casesCache = casesCache || new Map();
            var proto = Object.getPrototypeOf(value);
            var cases = casesCache.get(proto);
            if (cases == null) {
                if (typeof proto[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection] === "function") {
                    cases = proto[__WEBPACK_IMPORTED_MODULE_1__Symbol__["a" /* default */].reflection]().cases;
                    casesCache.set(proto, cases);
                }
            }
            var caseInfo = cases != null ? cases[value.tag] : null;
            if (Array.isArray(caseInfo)) {
                var key = caseInfo[0];
                if (caseRule === CaseRules.LowerFirst) {
                    key = key[0].toLowerCase() + key.substr(1);
                }
                o[key] = caseInfo.length === 1 ? true : isList(value.data) ? createObj(value.data, caseRule, casesCache) : value.data;
            } else {
                throw new Error("Cannot infer key and value of " + value);
            }
        }
        cur = iter.next();
    }
    return o;
}
function toPlainJsObj(source) {
    if (source != null && source.constructor !== Object) {
        var target = {};
        var props = Object.getOwnPropertyNames(source);
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
            for (var _iterator3 = props[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var p = _step3.value;

                target[p] = source[p];
            }
            // Copy also properties from prototype, see #192
        } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                }
            } finally {
                if (_didIteratorError3) {
                    throw _iteratorError3;
                }
            }
        }

        var proto = Object.getPrototypeOf(source);
        if (proto != null) {
            props = Object.getOwnPropertyNames(proto);
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = props[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var _p = _step4.value;

                    var prop = Object.getOwnPropertyDescriptor(proto, _p);
                    if (prop.value) {
                        target[_p] = prop.value;
                    } else if (prop.get) {
                        target[_p] = prop.get.apply(source);
                    }
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }
        }
        return target;
    } else {
        return source;
    }
}
function jsOptions(mutator) {
    var opts = {};
    mutator(opts);
    return opts;
}
function round(value) {
    var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var m = Math.pow(10, digits);
    var n = +(digits ? value * m : value).toFixed(8);
    var i = Math.floor(n);
    var f = n - i;
    var e = 1e-8;
    var r = f > 0.5 - e && f < 0.5 + e ? i % 2 === 0 ? i : i + 1 : Math.round(n);
    return digits ? r / m : r;
}
function sign(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
}
function randomNext(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function applyOperator(x, y, operator) {
    function getMethod(obj) {
        if ((typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object") {
            var cons = Object.getPrototypeOf(obj).constructor;
            if (typeof cons[operator] === "function") {
                return cons[operator];
            }
        }
        return null;
    }
    var meth = getMethod(x);
    if (meth != null) {
        return meth(x, y);
    }
    meth = getMethod(y);
    if (meth != null) {
        return meth(x, y);
    }
    switch (operator) {
        case "op_Addition":
            return x + y;
        case "op_Subtraction":
            return x - y;
        case "op_Multiply":
            return x * y;
        case "op_Division":
            return x / y;
        case "op_Modulus":
            return x % y;
        case "op_LeftShift":
            return x << y;
        case "op_RightShift":
            return x >> y;
        case "op_BitwiseAnd":
            return x & y;
        case "op_BitwiseOr":
            return x | y;
        case "op_ExclusiveOr":
            return x ^ y;
        case "op_LogicalNot":
            return x + y;
        case "op_UnaryNegation":
            return !x;
        case "op_BooleanAnd":
            return x && y;
        case "op_BooleanOr":
            return x || y;
        default:
            return null;
    }
}
function unescapeDataString(s) {
    // https://stackoverflow.com/a/4458580/524236
    return decodeURIComponent(s.replace(/\+/g, "%20"));
}
function escapeDataString(s) {
    return encodeURIComponent(s).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
}
function escapeUriString(s) {
    return encodeURI(s);
}
// ICollection.Clear method can be called on IDictionary
// too so we need to make a runtime check (see #1120)
function clear(col) {
    if (Array.isArray(col)) {
        col.splice(0);
    } else {
        col.clear();
    }
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generator_base__ = __webpack_require__(5);

class RoughGenerator extends __WEBPACK_IMPORTED_MODULE_0__generator_base__["a" /* RoughGeneratorBase */] {
    constructor(config, surface) {
        super(config, surface);
    }
    line(x1, y1, x2, y2, options) {
        const o = this._options(options);
        return this._drawable('line', [this.lib.line(x1, y1, x2, y2, o)], o);
    }
    rectangle(x, y, width, height, options) {
        const o = this._options(options);
        const paths = [];
        if (o.fill) {
            const points = [[x, y], [x + width, y], [x + width, y + height], [x, y + height]];
            if (o.fillStyle === 'solid') {
                paths.push(this.lib.solidFillPolygon(points, o));
            }
            else {
                paths.push(this.lib.patternFillPolygon(points, o));
            }
        }
        paths.push(this.lib.rectangle(x, y, width, height, o));
        return this._drawable('rectangle', paths, o);
    }
    ellipse(x, y, width, height, options) {
        const o = this._options(options);
        const paths = [];
        if (o.fill) {
            if (o.fillStyle === 'solid') {
                const shape = this.lib.ellipse(x, y, width, height, o);
                shape.type = 'fillPath';
                paths.push(shape);
            }
            else {
                paths.push(this.lib.patternFillEllipse(x, y, width, height, o));
            }
        }
        paths.push(this.lib.ellipse(x, y, width, height, o));
        return this._drawable('ellipse', paths, o);
    }
    circle(x, y, diameter, options) {
        const ret = this.ellipse(x, y, diameter, diameter, options);
        ret.shape = 'circle';
        return ret;
    }
    linearPath(points, options) {
        const o = this._options(options);
        return this._drawable('linearPath', [this.lib.linearPath(points, false, o)], o);
    }
    arc(x, y, width, height, start, stop, closed = false, options) {
        const o = this._options(options);
        const paths = [];
        if (closed && o.fill) {
            if (o.fillStyle === 'solid') {
                const shape = this.lib.arc(x, y, width, height, start, stop, true, false, o);
                shape.type = 'fillPath';
                paths.push(shape);
            }
            else {
                paths.push(this.lib.patternFillArc(x, y, width, height, start, stop, o));
            }
        }
        paths.push(this.lib.arc(x, y, width, height, start, stop, closed, true, o));
        return this._drawable('arc', paths, o);
    }
    curve(points, options) {
        const o = this._options(options);
        return this._drawable('curve', [this.lib.curve(points, o)], o);
    }
    polygon(points, options) {
        const o = this._options(options);
        const paths = [];
        if (o.fill) {
            if (o.fillStyle === 'solid') {
                paths.push(this.lib.solidFillPolygon(points, o));
            }
            else {
                const size = this.computePolygonSize(points);
                const fillPoints = [
                    [0, 0],
                    [size[0], 0],
                    [size[0], size[1]],
                    [0, size[1]]
                ];
                const shape = this.lib.patternFillPolygon(fillPoints, o);
                shape.type = 'path2Dpattern';
                shape.size = size;
                shape.path = this.polygonPath(points);
                paths.push(shape);
            }
        }
        paths.push(this.lib.linearPath(points, true, o));
        return this._drawable('polygon', paths, o);
    }
    path(d, options) {
        const o = this._options(options);
        const paths = [];
        if (!d) {
            return this._drawable('path', paths, o);
        }
        if (o.fill) {
            if (o.fillStyle === 'solid') {
                const shape = { type: 'path2Dfill', path: d, ops: [] };
                paths.push(shape);
            }
            else {
                const size = this.computePathSize(d);
                const points = [
                    [0, 0],
                    [size[0], 0],
                    [size[0], size[1]],
                    [0, size[1]]
                ];
                const shape = this.lib.patternFillPolygon(points, o);
                shape.type = 'path2Dpattern';
                shape.size = size;
                shape.path = d;
                paths.push(shape);
            }
        }
        paths.push(this.lib.svgPath(d, o));
        return this._drawable('path', paths, o);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RoughGenerator;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__path_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fillers_filler__ = __webpack_require__(20);


class RoughRenderer {
    line(x1, y1, x2, y2, o) {
        const ops = this.doubleLine(x1, y1, x2, y2, o);
        return { type: 'path', ops };
    }
    linearPath(points, close, o) {
        const len = (points || []).length;
        if (len > 2) {
            let ops = [];
            for (let i = 0; i < (len - 1); i++) {
                ops = ops.concat(this.doubleLine(points[i][0], points[i][1], points[i + 1][0], points[i + 1][1], o));
            }
            if (close) {
                ops = ops.concat(this.doubleLine(points[len - 1][0], points[len - 1][1], points[0][0], points[0][1], o));
            }
            return { type: 'path', ops };
        }
        else if (len === 2) {
            return this.line(points[0][0], points[0][1], points[1][0], points[1][1], o);
        }
        return { type: 'path', ops: [] };
    }
    polygon(points, o) {
        return this.linearPath(points, true, o);
    }
    rectangle(x, y, width, height, o) {
        const points = [
            [x, y], [x + width, y], [x + width, y + height], [x, y + height]
        ];
        return this.polygon(points, o);
    }
    curve(points, o) {
        const o1 = this._curveWithOffset(points, 1 * (1 + o.roughness * 0.2), o);
        const o2 = this._curveWithOffset(points, 1.5 * (1 + o.roughness * 0.22), o);
        return { type: 'path', ops: o1.concat(o2) };
    }
    ellipse(x, y, width, height, o) {
        const increment = (Math.PI * 2) / o.curveStepCount;
        let rx = Math.abs(width / 2);
        let ry = Math.abs(height / 2);
        rx += this.getOffset(-rx * 0.05, rx * 0.05, o);
        ry += this.getOffset(-ry * 0.05, ry * 0.05, o);
        const o1 = this._ellipse(increment, x, y, rx, ry, 1, increment * this.getOffset(0.1, this.getOffset(0.4, 1, o), o), o);
        const o2 = this._ellipse(increment, x, y, rx, ry, 1.5, 0, o);
        return { type: 'path', ops: o1.concat(o2) };
    }
    arc(x, y, width, height, start, stop, closed, roughClosure, o) {
        const cx = x;
        const cy = y;
        let rx = Math.abs(width / 2);
        let ry = Math.abs(height / 2);
        rx += this.getOffset(-rx * 0.01, rx * 0.01, o);
        ry += this.getOffset(-ry * 0.01, ry * 0.01, o);
        let strt = start;
        let stp = stop;
        while (strt < 0) {
            strt += Math.PI * 2;
            stp += Math.PI * 2;
        }
        if ((stp - strt) > (Math.PI * 2)) {
            strt = 0;
            stp = Math.PI * 2;
        }
        const ellipseInc = (Math.PI * 2) / o.curveStepCount;
        const arcInc = Math.min(ellipseInc / 2, (stp - strt) / 2);
        const o1 = this._arc(arcInc, cx, cy, rx, ry, strt, stp, 1, o);
        const o2 = this._arc(arcInc, cx, cy, rx, ry, strt, stp, 1.5, o);
        let ops = o1.concat(o2);
        if (closed) {
            if (roughClosure) {
                ops = ops.concat(this.doubleLine(cx, cy, cx + rx * Math.cos(strt), cy + ry * Math.sin(strt), o));
                ops = ops.concat(this.doubleLine(cx, cy, cx + rx * Math.cos(stp), cy + ry * Math.sin(stp), o));
            }
            else {
                ops.push({ op: 'lineTo', data: [cx, cy] });
                ops.push({ op: 'lineTo', data: [cx + rx * Math.cos(strt), cy + ry * Math.sin(strt)] });
            }
        }
        return { type: 'path', ops };
    }
    svgPath(path, o) {
        path = (path || '').replace(/\n/g, ' ').replace(/(-\s)/g, '-').replace('/(\s\s)/g', ' ');
        let p = new __WEBPACK_IMPORTED_MODULE_0__path_js__["c" /* RoughPath */](path);
        if (o.simplification) {
            const fitter = new __WEBPACK_IMPORTED_MODULE_0__path_js__["a" /* PathFitter */](p.linearPoints, p.closed);
            const d = fitter.fit(o.simplification);
            p = new __WEBPACK_IMPORTED_MODULE_0__path_js__["c" /* RoughPath */](d);
        }
        let ops = [];
        const segments = p.segments || [];
        for (let i = 0; i < segments.length; i++) {
            const s = segments[i];
            const prev = i > 0 ? segments[i - 1] : null;
            const opList = this._processSegment(p, s, prev, o);
            if (opList && opList.length) {
                ops = ops.concat(opList);
            }
        }
        return { type: 'path', ops };
    }
    solidFillPolygon(points, o) {
        const ops = [];
        if (points.length) {
            const offset = o.maxRandomnessOffset || 0;
            const len = points.length;
            if (len > 2) {
                ops.push({ op: 'move', data: [points[0][0] + this.getOffset(-offset, offset, o), points[0][1] + this.getOffset(-offset, offset, o)] });
                for (let i = 1; i < len; i++) {
                    ops.push({ op: 'lineTo', data: [points[i][0] + this.getOffset(-offset, offset, o), points[i][1] + this.getOffset(-offset, offset, o)] });
                }
            }
        }
        return { type: 'fillPath', ops };
    }
    patternFillPolygon(points, o) {
        const filler = Object(__WEBPACK_IMPORTED_MODULE_1__fillers_filler__["a" /* getFiller */])(this, o);
        return filler.fillPolygon(points, o);
    }
    patternFillEllipse(cx, cy, width, height, o) {
        const filler = Object(__WEBPACK_IMPORTED_MODULE_1__fillers_filler__["a" /* getFiller */])(this, o);
        return filler.fillEllipse(cx, cy, width, height, o);
    }
    patternFillArc(x, y, width, height, start, stop, o) {
        const cx = x;
        const cy = y;
        let rx = Math.abs(width / 2);
        let ry = Math.abs(height / 2);
        rx += this.getOffset(-rx * 0.01, rx * 0.01, o);
        ry += this.getOffset(-ry * 0.01, ry * 0.01, o);
        let strt = start;
        let stp = stop;
        while (strt < 0) {
            strt += Math.PI * 2;
            stp += Math.PI * 2;
        }
        if ((stp - strt) > (Math.PI * 2)) {
            strt = 0;
            stp = Math.PI * 2;
        }
        const increment = (stp - strt) / o.curveStepCount;
        const points = [];
        for (let angle = strt; angle <= stp; angle = angle + increment) {
            points.push([cx + rx * Math.cos(angle), cy + ry * Math.sin(angle)]);
        }
        points.push([cx + rx * Math.cos(stp), cy + ry * Math.sin(stp)]);
        points.push([cx, cy]);
        return this.patternFillPolygon(points, o);
    }
    /// 
    getOffset(min, max, ops) {
        return ops.roughness * ((Math.random() * (max - min)) + min);
    }
    doubleLine(x1, y1, x2, y2, o) {
        const o1 = this._line(x1, y1, x2, y2, o, true, false);
        const o2 = this._line(x1, y1, x2, y2, o, true, true);
        return o1.concat(o2);
    }
    _line(x1, y1, x2, y2, o, move, overlay) {
        const lengthSq = Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2);
        let offset = o.maxRandomnessOffset || 0;
        if ((offset * offset * 100) > lengthSq) {
            offset = Math.sqrt(lengthSq) / 10;
        }
        const halfOffset = offset / 2;
        const divergePoint = 0.2 + Math.random() * 0.2;
        let midDispX = o.bowing * o.maxRandomnessOffset * (y2 - y1) / 200;
        let midDispY = o.bowing * o.maxRandomnessOffset * (x1 - x2) / 200;
        midDispX = this.getOffset(-midDispX, midDispX, o);
        midDispY = this.getOffset(-midDispY, midDispY, o);
        const ops = [];
        if (move) {
            if (overlay) {
                ops.push({
                    op: 'move', data: [
                        x1 + this.getOffset(-halfOffset, halfOffset, o),
                        y1 + this.getOffset(-halfOffset, halfOffset, o)
                    ]
                });
            }
            else {
                ops.push({
                    op: 'move', data: [
                        x1 + this.getOffset(-offset, offset, o),
                        y1 + this.getOffset(-offset, offset, o)
                    ]
                });
            }
        }
        if (overlay) {
            ops.push({
                op: 'bcurveTo', data: [
                    midDispX + x1 + (x2 - x1) * divergePoint + this.getOffset(-halfOffset, halfOffset, o),
                    midDispY + y1 + (y2 - y1) * divergePoint + this.getOffset(-halfOffset, halfOffset, o),
                    midDispX + x1 + 2 * (x2 - x1) * divergePoint + this.getOffset(-halfOffset, halfOffset, o),
                    midDispY + y1 + 2 * (y2 - y1) * divergePoint + this.getOffset(-halfOffset, halfOffset, o),
                    x2 + this.getOffset(-halfOffset, halfOffset, o),
                    y2 + this.getOffset(-halfOffset, halfOffset, o)
                ]
            });
        }
        else {
            ops.push({
                op: 'bcurveTo', data: [
                    midDispX + x1 + (x2 - x1) * divergePoint + this.getOffset(-offset, offset, o),
                    midDispY + y1 + (y2 - y1) * divergePoint + this.getOffset(-offset, offset, o),
                    midDispX + x1 + 2 * (x2 - x1) * divergePoint + this.getOffset(-offset, offset, o),
                    midDispY + y1 + 2 * (y2 - y1) * divergePoint + this.getOffset(-offset, offset, o),
                    x2 + this.getOffset(-offset, offset, o),
                    y2 + this.getOffset(-offset, offset, o)
                ]
            });
        }
        return ops;
    }
    _curve(points, closePoint, o) {
        const len = points.length;
        let ops = [];
        if (len > 3) {
            const b = [];
            const s = 1 - o.curveTightness;
            ops.push({ op: 'move', data: [points[1][0], points[1][1]] });
            for (let i = 1; (i + 2) < len; i++) {
                const cachedVertArray = points[i];
                b[0] = [cachedVertArray[0], cachedVertArray[1]];
                b[1] = [cachedVertArray[0] + (s * points[i + 1][0] - s * points[i - 1][0]) / 6, cachedVertArray[1] + (s * points[i + 1][1] - s * points[i - 1][1]) / 6];
                b[2] = [points[i + 1][0] + (s * points[i][0] - s * points[i + 2][0]) / 6, points[i + 1][1] + (s * points[i][1] - s * points[i + 2][1]) / 6];
                b[3] = [points[i + 1][0], points[i + 1][1]];
                ops.push({ op: 'bcurveTo', data: [b[1][0], b[1][1], b[2][0], b[2][1], b[3][0], b[3][1]] });
            }
            if (closePoint && closePoint.length === 2) {
                const ro = o.maxRandomnessOffset;
                ops.push({ op: 'lineTo', data: [closePoint[0] + this.getOffset(-ro, ro, o), closePoint[1] + +this.getOffset(-ro, ro, o)] });
            }
        }
        else if (len === 3) {
            ops.push({ op: 'move', data: [points[1][0], points[1][1]] });
            ops.push({
                op: 'bcurveTo', data: [
                    points[1][0], points[1][1],
                    points[2][0], points[2][1],
                    points[2][0], points[2][1]
                ]
            });
        }
        else if (len === 2) {
            ops = ops.concat(this.doubleLine(points[0][0], points[0][1], points[1][0], points[1][1], o));
        }
        return ops;
    }
    _ellipse(increment, cx, cy, rx, ry, offset, overlap, o) {
        const radOffset = this.getOffset(-0.5, 0.5, o) - (Math.PI / 2);
        const points = [];
        points.push([
            this.getOffset(-offset, offset, o) + cx + 0.9 * rx * Math.cos(radOffset - increment),
            this.getOffset(-offset, offset, o) + cy + 0.9 * ry * Math.sin(radOffset - increment)
        ]);
        for (let angle = radOffset; angle < (Math.PI * 2 + radOffset - 0.01); angle = angle + increment) {
            points.push([
                this.getOffset(-offset, offset, o) + cx + rx * Math.cos(angle),
                this.getOffset(-offset, offset, o) + cy + ry * Math.sin(angle)
            ]);
        }
        points.push([
            this.getOffset(-offset, offset, o) + cx + rx * Math.cos(radOffset + Math.PI * 2 + overlap * 0.5),
            this.getOffset(-offset, offset, o) + cy + ry * Math.sin(radOffset + Math.PI * 2 + overlap * 0.5)
        ]);
        points.push([
            this.getOffset(-offset, offset, o) + cx + 0.98 * rx * Math.cos(radOffset + overlap),
            this.getOffset(-offset, offset, o) + cy + 0.98 * ry * Math.sin(radOffset + overlap)
        ]);
        points.push([
            this.getOffset(-offset, offset, o) + cx + 0.9 * rx * Math.cos(radOffset + overlap * 0.5),
            this.getOffset(-offset, offset, o) + cy + 0.9 * ry * Math.sin(radOffset + overlap * 0.5)
        ]);
        return this._curve(points, null, o);
    }
    _curveWithOffset(points, offset, o) {
        const ps = [];
        ps.push([
            points[0][0] + this.getOffset(-offset, offset, o),
            points[0][1] + this.getOffset(-offset, offset, o),
        ]);
        ps.push([
            points[0][0] + this.getOffset(-offset, offset, o),
            points[0][1] + this.getOffset(-offset, offset, o),
        ]);
        for (let i = 1; i < points.length; i++) {
            ps.push([
                points[i][0] + this.getOffset(-offset, offset, o),
                points[i][1] + this.getOffset(-offset, offset, o),
            ]);
            if (i === (points.length - 1)) {
                ps.push([
                    points[i][0] + this.getOffset(-offset, offset, o),
                    points[i][1] + this.getOffset(-offset, offset, o),
                ]);
            }
        }
        return this._curve(ps, null, o);
    }
    _arc(increment, cx, cy, rx, ry, strt, stp, offset, o) {
        const radOffset = strt + this.getOffset(-0.1, 0.1, o);
        const points = [];
        points.push([
            this.getOffset(-offset, offset, o) + cx + 0.9 * rx * Math.cos(radOffset - increment),
            this.getOffset(-offset, offset, o) + cy + 0.9 * ry * Math.sin(radOffset - increment)
        ]);
        for (let angle = radOffset; angle <= stp; angle = angle + increment) {
            points.push([
                this.getOffset(-offset, offset, o) + cx + rx * Math.cos(angle),
                this.getOffset(-offset, offset, o) + cy + ry * Math.sin(angle)
            ]);
        }
        points.push([
            cx + rx * Math.cos(stp),
            cy + ry * Math.sin(stp)
        ]);
        points.push([
            cx + rx * Math.cos(stp),
            cy + ry * Math.sin(stp)
        ]);
        return this._curve(points, null, o);
    }
    _bezierTo(x1, y1, x2, y2, x, y, path, o) {
        const ops = [];
        const ros = [o.maxRandomnessOffset || 1, (o.maxRandomnessOffset || 1) + 0.5];
        let f = [0, 0];
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                ops.push({ op: 'move', data: [path.x, path.y] });
            }
            else {
                ops.push({ op: 'move', data: [path.x + this.getOffset(-ros[0], ros[0], o), path.y + this.getOffset(-ros[0], ros[0], o)] });
            }
            f = [x + this.getOffset(-ros[i], ros[i], o), y + this.getOffset(-ros[i], ros[i], o)];
            ops.push({
                op: 'bcurveTo', data: [
                    x1 + this.getOffset(-ros[i], ros[i], o), y1 + this.getOffset(-ros[i], ros[i], o),
                    x2 + this.getOffset(-ros[i], ros[i], o), y2 + this.getOffset(-ros[i], ros[i], o),
                    f[0], f[1]
                ]
            });
        }
        path.setPosition(f[0], f[1]);
        return ops;
    }
    _processSegment(path, seg, prevSeg, o) {
        let ops = [];
        switch (seg.key) {
            case 'M':
            case 'm': {
                const delta = seg.key === 'm';
                if (seg.data.length >= 2) {
                    let x = +seg.data[0];
                    let y = +seg.data[1];
                    if (delta) {
                        x += path.x;
                        y += path.y;
                    }
                    const ro = 1 * (o.maxRandomnessOffset || 0);
                    x = x + this.getOffset(-ro, ro, o);
                    y = y + this.getOffset(-ro, ro, o);
                    path.setPosition(x, y);
                    ops.push({ op: 'move', data: [x, y] });
                }
                break;
            }
            case 'L':
            case 'l': {
                const delta = seg.key === 'l';
                if (seg.data.length >= 2) {
                    let x = +seg.data[0];
                    let y = +seg.data[1];
                    if (delta) {
                        x += path.x;
                        y += path.y;
                    }
                    ops = ops.concat(this.doubleLine(path.x, path.y, x, y, o));
                    path.setPosition(x, y);
                }
                break;
            }
            case 'H':
            case 'h': {
                const delta = seg.key === 'h';
                if (seg.data.length) {
                    let x = +seg.data[0];
                    if (delta) {
                        x += path.x;
                    }
                    ops = ops.concat(this.doubleLine(path.x, path.y, x, path.y, o));
                    path.setPosition(x, path.y);
                }
                break;
            }
            case 'V':
            case 'v': {
                const delta = seg.key === 'v';
                if (seg.data.length) {
                    let y = +seg.data[0];
                    if (delta) {
                        y += path.y;
                    }
                    ops = ops.concat(this.doubleLine(path.x, path.y, path.x, y, o));
                    path.setPosition(path.x, y);
                }
                break;
            }
            case 'Z':
            case 'z': {
                if (path.first) {
                    ops = ops.concat(this.doubleLine(path.x, path.y, path.first[0], path.first[1], o));
                    path.setPosition(path.first[0], path.first[1]);
                    path.first = null;
                }
                break;
            }
            case 'C':
            case 'c': {
                const delta = seg.key === 'c';
                if (seg.data.length >= 6) {
                    let x1 = +seg.data[0];
                    let y1 = +seg.data[1];
                    let x2 = +seg.data[2];
                    let y2 = +seg.data[3];
                    let x = +seg.data[4];
                    let y = +seg.data[5];
                    if (delta) {
                        x1 += path.x;
                        x2 += path.x;
                        x += path.x;
                        y1 += path.y;
                        y2 += path.y;
                        y += path.y;
                    }
                    const ob = this._bezierTo(x1, y1, x2, y2, x, y, path, o);
                    ops = ops.concat(ob);
                    path.bezierReflectionPoint = [x + (x - x2), y + (y - y2)];
                }
                break;
            }
            case 'S':
            case 's': {
                const delta = seg.key === 's';
                if (seg.data.length >= 4) {
                    let x2 = +seg.data[0];
                    let y2 = +seg.data[1];
                    let x = +seg.data[2];
                    let y = +seg.data[3];
                    if (delta) {
                        x2 += path.x;
                        x += path.x;
                        y2 += path.y;
                        y += path.y;
                    }
                    let x1 = x2;
                    let y1 = y2;
                    const prevKey = prevSeg ? prevSeg.key : '';
                    let ref = null;
                    if (prevKey === 'c' || prevKey === 'C' || prevKey === 's' || prevKey === 'S') {
                        ref = path.bezierReflectionPoint;
                    }
                    if (ref) {
                        x1 = ref[0];
                        y1 = ref[1];
                    }
                    const ob = this._bezierTo(x1, y1, x2, y2, x, y, path, o);
                    ops = ops.concat(ob);
                    path.bezierReflectionPoint = [x + (x - x2), y + (y - y2)];
                }
                break;
            }
            case 'Q':
            case 'q': {
                const delta = seg.key === 'q';
                if (seg.data.length >= 4) {
                    let x1 = +seg.data[0];
                    let y1 = +seg.data[1];
                    let x = +seg.data[2];
                    let y = +seg.data[3];
                    if (delta) {
                        x1 += path.x;
                        x += path.x;
                        y1 += path.y;
                        y += path.y;
                    }
                    const offset1 = 1 * (1 + o.roughness * 0.2);
                    const offset2 = 1.5 * (1 + o.roughness * 0.22);
                    ops.push({ op: 'move', data: [path.x + this.getOffset(-offset1, offset1, o), path.y + this.getOffset(-offset1, offset1, o)] });
                    let f = [x + this.getOffset(-offset1, offset1, o), y + this.getOffset(-offset1, offset1, o)];
                    ops.push({
                        op: 'qcurveTo', data: [
                            x1 + this.getOffset(-offset1, offset1, o), y1 + this.getOffset(-offset1, offset1, o),
                            f[0], f[1]
                        ]
                    });
                    ops.push({ op: 'move', data: [path.x + this.getOffset(-offset2, offset2, o), path.y + this.getOffset(-offset2, offset2, o)] });
                    f = [x + this.getOffset(-offset2, offset2, o), y + this.getOffset(-offset2, offset2, o)];
                    ops.push({
                        op: 'qcurveTo', data: [
                            x1 + this.getOffset(-offset2, offset2, o), y1 + this.getOffset(-offset2, offset2, o),
                            f[0], f[1]
                        ]
                    });
                    path.setPosition(f[0], f[1]);
                    path.quadReflectionPoint = [x + (x - x1), y + (y - y1)];
                }
                break;
            }
            case 'T':
            case 't': {
                const delta = seg.key === 't';
                if (seg.data.length >= 2) {
                    let x = +seg.data[0];
                    let y = +seg.data[1];
                    if (delta) {
                        x += path.x;
                        y += path.y;
                    }
                    let x1 = x;
                    let y1 = y;
                    const prevKey = prevSeg ? prevSeg.key : '';
                    let ref = null;
                    if (prevKey === 'q' || prevKey === 'Q' || prevKey === 't' || prevKey === 'T') {
                        ref = path.quadReflectionPoint;
                    }
                    if (ref) {
                        x1 = ref[0];
                        y1 = ref[1];
                    }
                    const offset1 = 1 * (1 + o.roughness * 0.2);
                    const offset2 = 1.5 * (1 + o.roughness * 0.22);
                    ops.push({ op: 'move', data: [path.x + this.getOffset(-offset1, offset1, o), path.y + this.getOffset(-offset1, offset1, o)] });
                    let f = [x + this.getOffset(-offset1, offset1, o), y + this.getOffset(-offset1, offset1, o)];
                    ops.push({
                        op: 'qcurveTo', data: [
                            x1 + this.getOffset(-offset1, offset1, o), y1 + this.getOffset(-offset1, offset1, o),
                            f[0], f[1]
                        ]
                    });
                    ops.push({ op: 'move', data: [path.x + this.getOffset(-offset2, offset2, o), path.y + this.getOffset(-offset2, offset2, o)] });
                    f = [x + this.getOffset(-offset2, offset2, o), y + this.getOffset(-offset2, offset2, o)];
                    ops.push({
                        op: 'qcurveTo', data: [
                            x1 + this.getOffset(-offset2, offset2, o), y1 + this.getOffset(-offset2, offset2, o),
                            f[0], f[1]
                        ]
                    });
                    path.setPosition(f[0], f[1]);
                    path.quadReflectionPoint = [x + (x - x1), y + (y - y1)];
                }
                break;
            }
            case 'A':
            case 'a': {
                const delta = seg.key === 'a';
                if (seg.data.length >= 7) {
                    const rx = +seg.data[0];
                    const ry = +seg.data[1];
                    const angle = +seg.data[2];
                    const largeArcFlag = +seg.data[3];
                    const sweepFlag = +seg.data[4];
                    let x = +seg.data[5];
                    let y = +seg.data[6];
                    if (delta) {
                        x += path.x;
                        y += path.y;
                    }
                    if (x === path.x && y === path.y) {
                        break;
                    }
                    if (rx === 0 || ry === 0) {
                        ops = ops.concat(this.doubleLine(path.x, path.y, x, y, o));
                        path.setPosition(x, y);
                    }
                    else {
                        for (let i = 0; i < 1; i++) {
                            const arcConverter = new __WEBPACK_IMPORTED_MODULE_0__path_js__["b" /* RoughArcConverter */]([path.x, path.y], [x, y], [rx, ry], angle, largeArcFlag ? true : false, sweepFlag ? true : false);
                            let segment = arcConverter.getNextSegment();
                            while (segment) {
                                const ob = this._bezierTo(segment.cp1[0], segment.cp1[1], segment.cp2[0], segment.cp2[1], segment.to[0], segment.to[1], path, o);
                                ops = ops.concat(ob);
                                segment = arcConverter.getNextSegment();
                            }
                        }
                    }
                }
                break;
            }
            default:
                break;
        }
        return ops;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RoughRenderer;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filler_utils__ = __webpack_require__(6);

class HachureFiller {
    constructor(renderer) {
        this.renderer = renderer;
    }
    fillPolygon(points, o) {
        return this._fillPolygon(points, o);
    }
    fillEllipse(cx, cy, width, height, o) {
        return this._fillEllipse(cx, cy, width, height, o);
    }
    _fillPolygon(points, o, connectEnds = false) {
        const lines = Object(__WEBPACK_IMPORTED_MODULE_0__filler_utils__["b" /* hachureLinesForPolygon */])(points, o);
        const ops = this.renderLines(lines, o, connectEnds);
        return { type: 'fillSketch', ops };
    }
    _fillEllipse(cx, cy, width, height, o, connectEnds = false) {
        const lines = Object(__WEBPACK_IMPORTED_MODULE_0__filler_utils__["a" /* hachureLinesForEllipse */])(cx, cy, width, height, o, this.renderer);
        const ops = this.renderLines(lines, o, connectEnds);
        return { type: 'fillSketch', ops };
    }
    renderLines(lines, o, connectEnds) {
        let ops = [];
        let prevPoint = null;
        for (const line of lines) {
            ops = ops.concat(this.renderer.doubleLine(line[0][0], line[0][1], line[1][0], line[1][1], o));
            if (connectEnds && prevPoint) {
                ops = ops.concat(this.renderer.doubleLine(prevPoint[0], prevPoint[1], line[0][0], line[0][1], o));
            }
            prevPoint = line[1];
        }
        return ops;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HachureFiller;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generator_base__ = __webpack_require__(5);

class RoughGeneratorAsync extends __WEBPACK_IMPORTED_MODULE_0__generator_base__["a" /* RoughGeneratorBase */] {
    async line(x1, y1, x2, y2, options) {
        const o = this._options(options);
        return this._drawable('line', [await this.lib.line(x1, y1, x2, y2, o)], o);
    }
    async rectangle(x, y, width, height, options) {
        const o = this._options(options);
        const paths = [];
        if (o.fill) {
            const points = [[x, y], [x + width, y], [x + width, y + height], [x, y + height]];
            if (o.fillStyle === 'solid') {
                paths.push(await this.lib.solidFillPolygon(points, o));
            }
            else {
                paths.push(await this.lib.patternFillPolygon(points, o));
            }
        }
        paths.push(await this.lib.rectangle(x, y, width, height, o));
        return this._drawable('rectangle', paths, o);
    }
    async ellipse(x, y, width, height, options) {
        const o = this._options(options);
        const paths = [];
        if (o.fill) {
            if (o.fillStyle === 'solid') {
                const shape = await this.lib.ellipse(x, y, width, height, o);
                shape.type = 'fillPath';
                paths.push(shape);
            }
            else {
                paths.push(await this.lib.patternFillEllipse(x, y, width, height, o));
            }
        }
        paths.push(await this.lib.ellipse(x, y, width, height, o));
        return this._drawable('ellipse', paths, o);
    }
    async circle(x, y, diameter, options) {
        const ret = await this.ellipse(x, y, diameter, diameter, options);
        ret.shape = 'circle';
        return ret;
    }
    async linearPath(points, options) {
        const o = this._options(options);
        return this._drawable('linearPath', [await this.lib.linearPath(points, false, o)], o);
    }
    async arc(x, y, width, height, start, stop, closed = false, options) {
        const o = this._options(options);
        const paths = [];
        if (closed && o.fill) {
            if (o.fillStyle === 'solid') {
                const shape = await this.lib.arc(x, y, width, height, start, stop, true, false, o);
                shape.type = 'fillPath';
                paths.push(shape);
            }
            else {
                paths.push(await this.lib.patternFillArc(x, y, width, height, start, stop, o));
            }
        }
        paths.push(await this.lib.arc(x, y, width, height, start, stop, closed, true, o));
        return this._drawable('arc', paths, o);
    }
    async curve(points, options) {
        const o = this._options(options);
        return this._drawable('curve', [await this.lib.curve(points, o)], o);
    }
    async polygon(points, options) {
        const o = this._options(options);
        const paths = [];
        if (o.fill) {
            if (o.fillStyle === 'solid') {
                paths.push(await this.lib.solidFillPolygon(points, o));
            }
            else {
                const size = this.computePolygonSize(points);
                const fillPoints = [
                    [0, 0],
                    [size[0], 0],
                    [size[0], size[1]],
                    [0, size[1]]
                ];
                const shape = await this.lib.patternFillPolygon(fillPoints, o);
                shape.type = 'path2Dpattern';
                shape.size = size;
                shape.path = this.polygonPath(points);
                paths.push(shape);
            }
        }
        paths.push(await this.lib.linearPath(points, true, o));
        return this._drawable('polygon', paths, o);
    }
    async path(d, options) {
        const o = this._options(options);
        const paths = [];
        if (!d) {
            return this._drawable('path', paths, o);
        }
        if (o.fill) {
            if (o.fillStyle === 'solid') {
                const shape = { type: 'path2Dfill', path: d, ops: [] };
                paths.push(shape);
            }
            else {
                const size = this.computePathSize(d);
                const points = [
                    [0, 0],
                    [size[0], 0],
                    [size[0], size[1]],
                    [0, size[1]]
                ];
                const shape = await this.lib.patternFillPolygon(points, o);
                shape.type = 'path2Dpattern';
                shape.size = size;
                shape.path = d;
                paths.push(shape);
            }
        }
        paths.push(await this.lib.svgPath(d, o));
        return this._drawable('path', paths, o);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RoughGeneratorAsync;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderer_factory_js__ = __webpack_require__(18);

const hasSelf = typeof self !== 'undefined';
class RoughGeneratorBase {
    constructor(config, surface) {
        this.defaultOptions = {
            maxRandomnessOffset: 2,
            roughness: 1,
            bowing: 1,
            stroke: '#000',
            strokeWidth: 1,
            curveTightness: 0,
            curveStepCount: 9,
            fillStyle: 'hachure',
            fillWeight: -1,
            hachureAngle: -41,
            hachureGap: -1
        };
        this.config = config || {};
        this.surface = surface;
        this.renderer = Object(__WEBPACK_IMPORTED_MODULE_0__renderer_factory_js__["a" /* createRenderer */])(this.config);
        if (this.config.options) {
            this.defaultOptions = this._options(this.config.options);
        }
    }
    _options(options) {
        return options ? Object.assign({}, this.defaultOptions, options) : this.defaultOptions;
    }
    _drawable(shape, sets, options) {
        return { shape, sets: sets || [], options: options || this.defaultOptions };
    }
    get lib() {
        return this.renderer;
    }
    getCanvasSize() {
        const val = (w) => {
            if (w && typeof w === 'object') {
                if (w.baseVal && w.baseVal.value) {
                    return w.baseVal.value;
                }
            }
            return w || 100;
        };
        if (this.surface) {
            return [val(this.surface.width), val(this.surface.height)];
        }
        return [100, 100];
    }
    computePolygonSize(points) {
        if (points.length) {
            let left = points[0][0];
            let right = points[0][0];
            let top = points[0][1];
            let bottom = points[0][1];
            for (let i = 1; i < points.length; i++) {
                left = Math.min(left, points[i][0]);
                right = Math.max(right, points[i][0]);
                top = Math.min(top, points[i][1]);
                bottom = Math.max(bottom, points[i][1]);
            }
            return [(right - left), (bottom - top)];
        }
        return [0, 0];
    }
    polygonPath(points) {
        let d = '';
        if (points.length) {
            d = `M${points[0][0]},${points[0][1]}`;
            for (let i = 1; i < points.length; i++) {
                d = `${d} L${points[i][0]},${points[i][1]}`;
            }
        }
        return d;
    }
    computePathSize(d) {
        let size = [0, 0];
        if (hasSelf && self.document) {
            try {
                const ns = 'http://www.w3.org/2000/svg';
                const svg = self.document.createElementNS(ns, 'svg');
                svg.setAttribute('width', '0');
                svg.setAttribute('height', '0');
                const pathNode = self.document.createElementNS(ns, 'path');
                pathNode.setAttribute('d', d);
                svg.appendChild(pathNode);
                self.document.body.appendChild(svg);
                const bb = pathNode.getBBox();
                if (bb) {
                    size[0] = bb.width || 0;
                    size[1] = bb.height || 0;
                }
                self.document.body.removeChild(svg);
            }
            catch (err) { }
        }
        const canvasSize = this.getCanvasSize();
        if (!(size[0] * size[1])) {
            size = canvasSize;
        }
        return size;
    }
    toPaths(drawable) {
        const sets = drawable.sets || [];
        const o = drawable.options || this.defaultOptions;
        const paths = [];
        for (const drawing of sets) {
            let path = null;
            switch (drawing.type) {
                case 'path':
                    path = {
                        d: this.opsToPath(drawing),
                        stroke: o.stroke,
                        strokeWidth: o.strokeWidth,
                        fill: 'none'
                    };
                    break;
                case 'fillPath':
                    path = {
                        d: this.opsToPath(drawing),
                        stroke: 'none',
                        strokeWidth: 0,
                        fill: o.fill || 'none'
                    };
                    break;
                case 'fillSketch':
                    path = this.fillSketch(drawing, o);
                    break;
                case 'path2Dfill':
                    path = {
                        d: drawing.path || '',
                        stroke: 'none',
                        strokeWidth: 0,
                        fill: o.fill || 'none'
                    };
                    break;
                case 'path2Dpattern': {
                    const size = drawing.size;
                    const pattern = {
                        x: 0, y: 0, width: 1, height: 1,
                        viewBox: `0 0 ${Math.round(size[0])} ${Math.round(size[1])}`,
                        patternUnits: 'objectBoundingBox',
                        path: this.fillSketch(drawing, o)
                    };
                    path = {
                        d: drawing.path,
                        stroke: 'none',
                        strokeWidth: 0,
                        pattern: pattern
                    };
                    break;
                }
            }
            if (path) {
                paths.push(path);
            }
        }
        return paths;
    }
    fillSketch(drawing, o) {
        let fweight = o.fillWeight;
        if (fweight < 0) {
            fweight = o.strokeWidth / 2;
        }
        return {
            d: this.opsToPath(drawing),
            stroke: o.fill || 'none',
            strokeWidth: fweight,
            fill: 'none'
        };
    }
    opsToPath(drawing) {
        let path = '';
        for (const item of drawing.ops) {
            const data = item.data;
            switch (item.op) {
                case 'move':
                    path += `M${data[0]} ${data[1]} `;
                    break;
                case 'bcurveTo':
                    path += `C${data[0]} ${data[1]}, ${data[2]} ${data[3]}, ${data[4]} ${data[5]} `;
                    break;
                case 'qcurveTo':
                    path += `Q${data[0]} ${data[1]}, ${data[2]} ${data[3]} `;
                    break;
                case 'lineTo':
                    path += `L${data[0]} ${data[1]} `;
                    break;
            }
        }
        return path.trim();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RoughGeneratorBase;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = lineLength;
/* unused harmony export getIntersectingLines */
/* unused harmony export affine */
/* harmony export (immutable) */ __webpack_exports__["b"] = hachureLinesForPolygon;
/* harmony export (immutable) */ __webpack_exports__["a"] = hachureLinesForEllipse;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geometry__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_hachure__ = __webpack_require__(21);


function lineLength(line) {
    const p1 = line[0];
    const p2 = line[1];
    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
}
function getIntersectingLines(line, points) {
    const intersections = [];
    const s1 = new __WEBPACK_IMPORTED_MODULE_0__geometry__["a" /* Segment */]([line[0], line[1]], [line[2], line[3]]);
    for (let i = 0; i < points.length; i++) {
        const s2 = new __WEBPACK_IMPORTED_MODULE_0__geometry__["a" /* Segment */](points[i], points[(i + 1) % points.length]);
        if (s1.intersects(s2)) {
            intersections.push([s1.xi, s1.yi]);
        }
    }
    return intersections;
}
function affine(x, y, cx, cy, sinAnglePrime, cosAnglePrime, R) {
    const A = -cx * cosAnglePrime - cy * sinAnglePrime + cx;
    const B = R * (cx * sinAnglePrime - cy * cosAnglePrime) + cy;
    const C = cosAnglePrime;
    const D = sinAnglePrime;
    const E = -R * sinAnglePrime;
    const F = R * cosAnglePrime;
    return [
        A + C * x + D * y,
        B + E * x + F * y
    ];
}
function hachureLinesForPolygon(points, o) {
    const ret = [];
    if (points && points.length) {
        let left = points[0][0];
        let right = points[0][0];
        let top = points[0][1];
        let bottom = points[0][1];
        for (let i = 1; i < points.length; i++) {
            left = Math.min(left, points[i][0]);
            right = Math.max(right, points[i][0]);
            top = Math.min(top, points[i][1]);
            bottom = Math.max(bottom, points[i][1]);
        }
        const angle = o.hachureAngle;
        let gap = o.hachureGap;
        if (gap < 0) {
            gap = o.strokeWidth * 4;
        }
        gap = Math.max(gap, 0.1);
        const radPerDeg = Math.PI / 180;
        const hachureAngle = (angle % 180) * radPerDeg;
        const cosAngle = Math.cos(hachureAngle);
        const sinAngle = Math.sin(hachureAngle);
        const tanAngle = Math.tan(hachureAngle);
        const it = new __WEBPACK_IMPORTED_MODULE_1__utils_hachure__["a" /* HachureIterator */](top - 1, bottom + 1, left - 1, right + 1, gap, sinAngle, cosAngle, tanAngle);
        let rect;
        while ((rect = it.nextLine()) != null) {
            const lines = getIntersectingLines(rect, points);
            for (let i = 0; i < lines.length; i++) {
                if (i < (lines.length - 1)) {
                    const p1 = lines[i];
                    const p2 = lines[i + 1];
                    ret.push([p1, p2]);
                }
            }
        }
    }
    return ret;
}
function hachureLinesForEllipse(cx, cy, width, height, o, renderer) {
    const ret = [];
    let rx = Math.abs(width / 2);
    let ry = Math.abs(height / 2);
    rx += renderer.getOffset(-rx * 0.05, rx * 0.05, o);
    ry += renderer.getOffset(-ry * 0.05, ry * 0.05, o);
    const angle = o.hachureAngle;
    let gap = o.hachureGap;
    if (gap <= 0) {
        gap = o.strokeWidth * 4;
    }
    let fweight = o.fillWeight;
    if (fweight < 0) {
        fweight = o.strokeWidth / 2;
    }
    const radPerDeg = Math.PI / 180;
    const hachureAngle = (angle % 180) * radPerDeg;
    const tanAngle = Math.tan(hachureAngle);
    const aspectRatio = ry / rx;
    const hyp = Math.sqrt(aspectRatio * tanAngle * aspectRatio * tanAngle + 1);
    const sinAnglePrime = aspectRatio * tanAngle / hyp;
    const cosAnglePrime = 1 / hyp;
    const gapPrime = gap / ((rx * ry / Math.sqrt((ry * cosAnglePrime) * (ry * cosAnglePrime) + (rx * sinAnglePrime) * (rx * sinAnglePrime))) / rx);
    let halfLen = Math.sqrt((rx * rx) - (cx - rx + gapPrime) * (cx - rx + gapPrime));
    for (let xPos = cx - rx + gapPrime; xPos < cx + rx; xPos += gapPrime) {
        halfLen = Math.sqrt((rx * rx) - (cx - xPos) * (cx - xPos));
        const p1 = affine(xPos, cy - halfLen, cx, cy, sinAnglePrime, cosAnglePrime, aspectRatio);
        const p2 = affine(xPos, cy + halfLen, cx, cy, sinAnglePrime, cosAnglePrime, aspectRatio);
        ret.push([p1, p2]);
    }
    return ret;
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Segment {
    constructor(p1, p2) {
        this.xi = Number.MAX_VALUE;
        this.yi = Number.MAX_VALUE;
        this.px1 = p1[0];
        this.py1 = p1[1];
        this.px2 = p2[0];
        this.py2 = p2[1];
        this.a = this.py2 - this.py1;
        this.b = this.px1 - this.px2;
        this.c = this.px2 * this.py1 - this.px1 * this.py2;
        this._undefined = ((this.a === 0) && (this.b === 0) && (this.c === 0));
    }
    isUndefined() {
        return this._undefined;
    }
    intersects(otherSegment) {
        if (this.isUndefined() || otherSegment.isUndefined()) {
            return false;
        }
        let grad1 = Number.MAX_VALUE;
        let grad2 = Number.MAX_VALUE;
        let int1 = 0, int2 = 0;
        const a = this.a, b = this.b, c = this.c;
        if (Math.abs(b) > 0.00001) {
            grad1 = -a / b;
            int1 = -c / b;
        }
        if (Math.abs(otherSegment.b) > 0.00001) {
            grad2 = -otherSegment.a / otherSegment.b;
            int2 = -otherSegment.c / otherSegment.b;
        }
        if (grad1 === Number.MAX_VALUE) {
            if (grad2 === Number.MAX_VALUE) {
                if ((-c / a) !== (-otherSegment.c / otherSegment.a)) {
                    return false;
                }
                if ((this.py1 >= Math.min(otherSegment.py1, otherSegment.py2)) && (this.py1 <= Math.max(otherSegment.py1, otherSegment.py2))) {
                    this.xi = this.px1;
                    this.yi = this.py1;
                    return true;
                }
                if ((this.py2 >= Math.min(otherSegment.py1, otherSegment.py2)) && (this.py2 <= Math.max(otherSegment.py1, otherSegment.py2))) {
                    this.xi = this.px2;
                    this.yi = this.py2;
                    return true;
                }
                return false;
            }
            this.xi = this.px1;
            this.yi = (grad2 * this.xi + int2);
            if (((this.py1 - this.yi) * (this.yi - this.py2) < -0.00001) || ((otherSegment.py1 - this.yi) * (this.yi - otherSegment.py2) < -0.00001)) {
                return false;
            }
            if (Math.abs(otherSegment.a) < 0.00001) {
                if ((otherSegment.px1 - this.xi) * (this.xi - otherSegment.px2) < -0.00001) {
                    return false;
                }
                return true;
            }
            return true;
        }
        if (grad2 === Number.MAX_VALUE) {
            this.xi = otherSegment.px1;
            this.yi = grad1 * this.xi + int1;
            if (((otherSegment.py1 - this.yi) * (this.yi - otherSegment.py2) < -0.00001) || ((this.py1 - this.yi) * (this.yi - this.py2) < -0.00001)) {
                return false;
            }
            if (Math.abs(a) < 0.00001) {
                if ((this.px1 - this.xi) * (this.xi - this.px2) < -0.00001) {
                    return false;
                }
                return true;
            }
            return true;
        }
        if (grad1 === grad2) {
            if (int1 !== int2) {
                return false;
            }
            if ((this.px1 >= Math.min(otherSegment.px1, otherSegment.px2)) && (this.px1 <= Math.max(otherSegment.py1, otherSegment.py2))) {
                this.xi = this.px1;
                this.yi = this.py1;
                return true;
            }
            if ((this.px2 >= Math.min(otherSegment.px1, otherSegment.px2)) && (this.px2 <= Math.max(otherSegment.px1, otherSegment.px2))) {
                this.xi = this.px2;
                this.yi = this.py2;
                return true;
            }
            return false;
        }
        this.xi = ((int2 - int1) / (grad1 - grad2));
        this.yi = (grad1 * this.xi + int1);
        if (((this.px1 - this.xi) * (this.xi - this.px2) < -0.00001) || ((otherSegment.px1 - this.xi) * (this.xi - otherSegment.px2) < -0.00001)) {
            return false;
        }
        return true;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Segment;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderer__ = __webpack_require__(2);

const hasDocument = typeof document !== 'undefined';
class RoughCanvasBase {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
    }
    static createRenderer() {
        return new __WEBPACK_IMPORTED_MODULE_0__renderer__["a" /* RoughRenderer */]();
    }
    draw(drawable) {
        const sets = drawable.sets || [];
        const o = drawable.options || this.getDefaultOptions();
        const ctx = this.ctx;
        for (const drawing of sets) {
            switch (drawing.type) {
                case 'path':
                    ctx.save();
                    ctx.strokeStyle = o.stroke;
                    ctx.lineWidth = o.strokeWidth;
                    this._drawToContext(ctx, drawing);
                    ctx.restore();
                    break;
                case 'fillPath':
                    ctx.save();
                    ctx.fillStyle = o.fill || '';
                    this._drawToContext(ctx, drawing);
                    ctx.restore();
                    break;
                case 'fillSketch':
                    this.fillSketch(ctx, drawing, o);
                    break;
                case 'path2Dfill': {
                    this.ctx.save();
                    this.ctx.fillStyle = o.fill || '';
                    const p2d = new Path2D(drawing.path);
                    this.ctx.fill(p2d);
                    this.ctx.restore();
                    break;
                }
                case 'path2Dpattern': {
                    const doc = this.canvas.ownerDocument || (hasDocument && document);
                    if (doc) {
                        const size = drawing.size;
                        const hcanvas = doc.createElement('canvas');
                        const hcontext = hcanvas.getContext('2d');
                        const bbox = this.computeBBox(drawing.path);
                        if (bbox && (bbox.width || bbox.height)) {
                            hcanvas.width = this.canvas.width;
                            hcanvas.height = this.canvas.height;
                            hcontext.translate(bbox.x || 0, bbox.y || 0);
                        }
                        else {
                            hcanvas.width = size[0];
                            hcanvas.height = size[1];
                        }
                        this.fillSketch(hcontext, drawing, o);
                        this.ctx.save();
                        this.ctx.fillStyle = this.ctx.createPattern(hcanvas, 'repeat');
                        const p2d = new Path2D(drawing.path);
                        this.ctx.fill(p2d);
                        this.ctx.restore();
                    }
                    else {
                        console.error('Cannot render path2Dpattern. No defs/document defined.');
                    }
                    break;
                }
            }
        }
    }
    computeBBox(d) {
        if (hasDocument) {
            try {
                const ns = 'http://www.w3.org/2000/svg';
                const svg = document.createElementNS(ns, 'svg');
                svg.setAttribute('width', '0');
                svg.setAttribute('height', '0');
                const pathNode = self.document.createElementNS(ns, 'path');
                pathNode.setAttribute('d', d);
                svg.appendChild(pathNode);
                document.body.appendChild(svg);
                const bbox = pathNode.getBBox();
                document.body.removeChild(svg);
                return bbox;
            }
            catch (err) { }
        }
        return null;
    }
    fillSketch(ctx, drawing, o) {
        let fweight = o.fillWeight;
        if (fweight < 0) {
            fweight = o.strokeWidth / 2;
        }
        ctx.save();
        ctx.strokeStyle = o.fill || '';
        ctx.lineWidth = fweight;
        this._drawToContext(ctx, drawing);
        ctx.restore();
    }
    _drawToContext(ctx, drawing) {
        ctx.beginPath();
        for (const item of drawing.ops) {
            const data = item.data;
            switch (item.op) {
                case 'move':
                    ctx.moveTo(data[0], data[1]);
                    break;
                case 'bcurveTo':
                    ctx.bezierCurveTo(data[0], data[1], data[2], data[3], data[4], data[5]);
                    break;
                case 'qcurveTo':
                    ctx.quadraticCurveTo(data[0], data[1], data[2], data[3]);
                    break;
                case 'lineTo':
                    ctx.lineTo(data[0], data[1]);
                    break;
            }
        }
        if (drawing.type === 'fillPath') {
            ctx.fill();
        }
        else {
            ctx.stroke();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RoughCanvasBase;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderer__ = __webpack_require__(2);

const hasDocument = typeof document !== 'undefined';
class RoughSVGBase {
    constructor(svg) {
        this.svg = svg;
    }
    static createRenderer() {
        return new __WEBPACK_IMPORTED_MODULE_0__renderer__["a" /* RoughRenderer */]();
    }
    get defs() {
        const doc = this.svg.ownerDocument || (hasDocument && document);
        if (doc) {
            if (!this._defs) {
                const dnode = doc.createElementNS('http://www.w3.org/2000/svg', 'defs');
                if (this.svg.firstChild) {
                    this.svg.insertBefore(dnode, this.svg.firstChild);
                }
                else {
                    this.svg.appendChild(dnode);
                }
                this._defs = dnode;
            }
        }
        return this._defs || null;
    }
    draw(drawable) {
        const sets = drawable.sets || [];
        const o = drawable.options || this.getDefaultOptions();
        const doc = this.svg.ownerDocument || (hasDocument && document);
        const g = doc.createElementNS('http://www.w3.org/2000/svg', 'g');
        for (const drawing of sets) {
            let path = null;
            switch (drawing.type) {
                case 'path': {
                    path = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
                    path.setAttribute('d', this.opsToPath(drawing));
                    path.style.stroke = o.stroke;
                    path.style.strokeWidth = o.strokeWidth + '';
                    path.style.fill = 'none';
                    break;
                }
                case 'fillPath': {
                    path = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
                    path.setAttribute('d', this.opsToPath(drawing));
                    path.style.stroke = 'none';
                    path.style.strokeWidth = '0';
                    path.style.fill = o.fill || null;
                    break;
                }
                case 'fillSketch': {
                    path = this.fillSketch(doc, drawing, o);
                    break;
                }
                case 'path2Dfill': {
                    path = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
                    path.setAttribute('d', drawing.path || '');
                    path.style.stroke = 'none';
                    path.style.strokeWidth = '0';
                    path.style.fill = o.fill || null;
                    break;
                }
                case 'path2Dpattern': {
                    if (!this.defs) {
                        console.error('Cannot render path2Dpattern. No defs/document defined.');
                    }
                    else {
                        const size = drawing.size;
                        const pattern = doc.createElementNS('http://www.w3.org/2000/svg', 'pattern');
                        const id = `rough-${Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER || 999999))}`;
                        pattern.setAttribute('id', id);
                        pattern.setAttribute('x', '0');
                        pattern.setAttribute('y', '0');
                        pattern.setAttribute('width', '1');
                        pattern.setAttribute('height', '1');
                        pattern.setAttribute('height', '1');
                        pattern.setAttribute('viewBox', `0 0 ${Math.round(size[0])} ${Math.round(size[1])}`);
                        pattern.setAttribute('patternUnits', 'objectBoundingBox');
                        const patternPath = this.fillSketch(doc, drawing, o);
                        pattern.appendChild(patternPath);
                        this.defs.appendChild(pattern);
                        path = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
                        path.setAttribute('d', drawing.path || '');
                        path.style.stroke = 'none';
                        path.style.strokeWidth = '0';
                        path.style.fill = `url(#${id})`;
                    }
                    break;
                }
            }
            if (path) {
                g.appendChild(path);
            }
        }
        return g;
    }
    fillSketch(doc, drawing, o) {
        let fweight = o.fillWeight;
        if (fweight < 0) {
            fweight = o.strokeWidth / 2;
        }
        const path = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', this.opsToPath(drawing));
        path.style.stroke = o.fill || null;
        path.style.strokeWidth = fweight + '';
        path.style.fill = 'none';
        return path;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RoughSVGBase;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export map */
/* unused harmony export mapIndexed */
/* unused harmony export indexed */
/* unused harmony export addRangeInPlace */
/* unused harmony export copyTo */
/* unused harmony export partition */
/* harmony export (immutable) */ __webpack_exports__["b"] = permute;
/* unused harmony export removeInPlace */
/* unused harmony export setSlice */
/* unused harmony export sortInPlaceBy */
/* unused harmony export unzip */
/* unused harmony export unzip3 */
/* harmony export (immutable) */ __webpack_exports__["a"] = chunkBySize;
/* unused harmony export getSubArray */
/* unused harmony export fill */
/* unused harmony export splitAt */
function map(f, source, TargetCons) {
    var target = new TargetCons(source.length);
    for (var i = 0; i < source.length; i++) {
        target[i] = f(source[i]);
    }
    return target;
}
function mapIndexed(f, source, TargetCons) {
    var target = new TargetCons(source.length);
    for (var i = 0; i < source.length; i++) {
        target[i] = f(i, source[i]);
    }
    return target;
}
function indexed(source) {
    return mapIndexed(function (i, x) {
        return [i, x];
    }, source, Array);
}
function addRangeInPlace(range, xs) {
    var iter = range[Symbol.iterator]();
    var cur = iter.next();
    while (!cur.done) {
        xs.push(cur.value);
        cur = iter.next();
    }
}
function copyTo(source, sourceIndex, target, targetIndex, count) {
    while (count--) {
        target[targetIndex++] = source[sourceIndex++];
    }
}
function partition(f, xs) {
    var ys = [];
    var zs = [];
    var j = 0;
    var k = 0;
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i])) {
            ys[j++] = xs[i];
        } else {
            zs[k++] = xs[i];
        }
    }
    return [ys, zs];
}
function permute(f, xs) {
    // Keep the type of the array
    var ys = xs.map(function () {
        return null;
    });
    var checkFlags = new Array(xs.length);
    for (var i = 0; i < xs.length; i++) {
        var j = f(i);
        if (j < 0 || j >= xs.length) {
            throw new Error("Not a valid permutation");
        }
        ys[j] = xs[i];
        checkFlags[j] = 1;
    }
    for (var _i = 0; _i < xs.length; _i++) {
        if (checkFlags[_i] !== 1) {
            throw new Error("Not a valid permutation");
        }
    }
    return ys;
}
function removeInPlace(item, xs) {
    var i = xs.indexOf(item);
    if (i > -1) {
        xs.splice(i, 1);
        return true;
    }
    return false;
}
function setSlice(target, lower, upper, source) {
    var length = (upper || target.length - 1) - lower;
    if (ArrayBuffer.isView(target) && source.length <= length) {
        target.set(source, lower);
    } else {
        for (var i = lower | 0, j = 0; j <= length; i++, j++) {
            target[i] = source[j];
        }
    }
}
function sortInPlaceBy(f, xs) {
    var dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    return xs.sort(function (x, y) {
        x = f(x);
        y = f(y);
        return (x < y ? -1 : x === y ? 0 : 1) * dir;
    });
}
function unzip(xs) {
    var bs = new Array(xs.length);
    var cs = new Array(xs.length);
    for (var i = 0; i < xs.length; i++) {
        bs[i] = xs[i][0];
        cs[i] = xs[i][1];
    }
    return [bs, cs];
}
function unzip3(xs) {
    var bs = new Array(xs.length);
    var cs = new Array(xs.length);
    var ds = new Array(xs.length);
    for (var i = 0; i < xs.length; i++) {
        bs[i] = xs[i][0];
        cs[i] = xs[i][1];
        ds[i] = xs[i][2];
    }
    return [bs, cs, ds];
}
function chunkBySize(size, xs) {
    if (size < 1) {
        throw new Error("The input must be positive. parameter name: chunkSize");
    }
    if (xs.length === 0) {
        return [[]];
    }
    var result = [];
    // add each chunk to the result
    for (var x = 0; x < Math.ceil(xs.length / size); x++) {
        var start = x * size;
        var end = start + size;
        result.push(xs.slice(start, end));
    }
    return result;
}
function getSubArray(xs, startIndex, count) {
    return xs.slice(startIndex, startIndex + count);
}
function fill(target, targetIndex, count, value) {
    target.fill(value, targetIndex, targetIndex + count);
}
function splitAt(index, xs) {
    if (index < 0) {
        throw new Error("The input must be non-negative.");
    }
    if (index > xs.length) {
        throw new Error("The input sequence has an insufficient number of elements.");
    }
    return [xs.slice(0, index), xs.slice(index)];
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setType */
/* unused harmony export getType */
var types = new Map();
function setType(fullName, cons) {
    types.set(fullName, cons);
}
function getType(fullName) {
    return types.get(fullName);
}
/* harmony default export */ __webpack_exports__["a"] = ({
    reflection: Symbol("reflection")
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Some */
/* harmony export (immutable) */ __webpack_exports__["b"] = makeSome;
/* harmony export (immutable) */ __webpack_exports__["a"] = getValue;
/* unused harmony export defaultArg */
/* unused harmony export defaultArgWith */
/* unused harmony export filter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Util__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var Some = function () {
    function Some(value) {
        _classCallCheck(this, Some);

        this.value = value;
    }
    // We don't prefix it with "Some" for consistency with erased options


    _createClass(Some, [{
        key: "ToString",
        value: function ToString() {
            return Object(__WEBPACK_IMPORTED_MODULE_0__Util__["d" /* toString */])(this.value);
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            if (other == null) {
                return false;
            } else {
                return Object(__WEBPACK_IMPORTED_MODULE_0__Util__["b" /* equals */])(this.value, other instanceof Some ? other.value : other);
            }
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            if (other == null) {
                return 1;
            } else {
                return Object(__WEBPACK_IMPORTED_MODULE_0__Util__["a" /* compare */])(this.value, other instanceof Some ? other.value : other);
            }
        }
    }]);

    return Some;
}();
function makeSome(x) {
    return x == null || x instanceof Some ? new Some(x) : x;
}
function getValue(x, acceptNull) {
    if (x == null) {
        if (!acceptNull) {
            throw new Error("Option has no value");
        }
        return null;
    } else {
        return x instanceof Some ? x.value : x;
    }
}
function defaultArg(arg, defaultValue, f) {
    return arg == null ? defaultValue : f != null ? f(getValue(arg)) : getValue(arg);
}
function defaultArgWith(arg, defThunk) {
    return arg == null ? defThunk() : getValue(arg);
}
function filter(predicate, arg) {
    return arg != null ? !predicate(getValue(arg)) ? null : arg : arg;
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_fs__ = __webpack_require__(14);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "canvas", function() { return __WEBPACK_IMPORTED_MODULE_0__App_fs__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "roughCanvas", function() { return __WEBPACK_IMPORTED_MODULE_0__App_fs__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "blockedKeys", function() { return __WEBPACK_IMPORTED_MODULE_0__App_fs__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "clearingKeys", function() { return __WEBPACK_IMPORTED_MODULE_0__App_fs__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "shouldBlockKey", function() { return __WEBPACK_IMPORTED_MODULE_0__App_fs__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isClearingKey", function() { return __WEBPACK_IMPORTED_MODULE_0__App_fs__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "handleKey", function() { return __WEBPACK_IMPORTED_MODULE_0__App_fs__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "handleClick", function() { return __WEBPACK_IMPORTED_MODULE_0__App_fs__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "handleDblClick", function() { return __WEBPACK_IMPORTED_MODULE_0__App_fs__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "init", function() { return __WEBPACK_IMPORTED_MODULE_0__App_fs__["g"]; });


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return canvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return roughCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return blockedKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clearingKeys; });
/* harmony export (immutable) */ __webpack_exports__["j"] = shouldBlockKey;
/* harmony export (immutable) */ __webpack_exports__["h"] = isClearingKey;
/* harmony export (immutable) */ __webpack_exports__["f"] = handleKey;
/* harmony export (immutable) */ __webpack_exports__["d"] = handleClick;
/* harmony export (immutable) */ __webpack_exports__["e"] = handleDblClick;
/* harmony export (immutable) */ __webpack_exports__["g"] = init;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Rough_fs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_C_Users_petrnj50_nuget_packages_fable_core_1_3_8_fable_core_Seq__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_C_Users_petrnj50_nuget_packages_fable_core_1_3_8_fable_core_Util__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Drawing_fs__ = __webpack_require__(31);




var canvas = document.getElementsByTagName("canvas")[0];
var roughCanvas = Object(__WEBPACK_IMPORTED_MODULE_0__Rough_fs__["a" /* RoughCanvas */])(canvas, null);
var blockedKeys = new Int32Array([18, 27, 93]);
var clearingKeys = new Int32Array([32]);
function shouldBlockKey(e) {
  return Object(__WEBPACK_IMPORTED_MODULE_1_C_Users_petrnj50_nuget_packages_fable_core_1_3_8_fable_core_Seq__["a" /* exists */])(function ($var1) {
    return Object(__WEBPACK_IMPORTED_MODULE_2_C_Users_petrnj50_nuget_packages_fable_core_1_3_8_fable_core_Util__["b" /* equals */])(~~e.which, $var1);
  }, blockedKeys);
}
function isClearingKey(e) {
  return Object(__WEBPACK_IMPORTED_MODULE_1_C_Users_petrnj50_nuget_packages_fable_core_1_3_8_fable_core_Seq__["a" /* exists */])(function ($var2) {
    return Object(__WEBPACK_IMPORTED_MODULE_2_C_Users_petrnj50_nuget_packages_fable_core_1_3_8_fable_core_Util__["b" /* equals */])(~~e.which, $var2);
  }, clearingKeys);
}
function handleKey(e) {
  if (shouldBlockKey(e) === true) {
    e.preventDefault();
    return false;
  } else if (isClearingKey(e) === true) {
    Object(__WEBPACK_IMPORTED_MODULE_3__Drawing_fs__["a" /* clearCanvas */])(roughCanvas);
    return true;
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_3__Drawing_fs__["b" /* drawRandomShape */])(roughCanvas, null);
    return true;
  }
}
function handleClick(e) {
  Object(__WEBPACK_IMPORTED_MODULE_3__Drawing_fs__["b" /* drawRandomShape */])(roughCanvas, [~~e.x, ~~e.y]);
  return true;
}
function handleDblClick(e) {
  e.preventDefault();
  Object(__WEBPACK_IMPORTED_MODULE_3__Drawing_fs__["a" /* clearCanvas */])(roughCanvas);
  return true;
}
function init() {
  var controller = document.getElementById("controller");
  controller.onkeypress = handleKey;
  controller.onclick = handleClick;
  controller.oncontextmenu = handleDblClick;
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  var context = canvas.getContext("2d");
  context.font = "20px Comic Sans";
  context.fillText("Smash buttons to draw, press space to clear :) ", 10, 30);
}
init();

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Rough */
/* harmony export (immutable) */ __webpack_exports__["a"] = RoughCanvas;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_roughjs__ = __webpack_require__(16);

var Rough = __WEBPACK_IMPORTED_MODULE_0_roughjs__["a" /* default */];
function RoughCanvas(canvas, config) {
  return Rough.canvas.bind(Rough)(canvas, config);
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__generator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__generator_async__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__canvas_async__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__svg__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_async__ = __webpack_require__(27);






/* harmony default export */ __webpack_exports__["a"] = ({
    canvas(canvas, config) {
        if (config && config.async) {
            return new __WEBPACK_IMPORTED_MODULE_3__canvas_async__["a" /* RoughCanvasAsync */](canvas, config);
        }
        return new __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* RoughCanvas */](canvas, config);
    },
    svg(svg, config) {
        if (config && config.async) {
            return new __WEBPACK_IMPORTED_MODULE_5__svg_async__["a" /* RoughSVGAsync */](svg, config);
        }
        return new __WEBPACK_IMPORTED_MODULE_4__svg__["a" /* RoughSVG */](svg, config);
    },
    createRenderer() {
        return __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* RoughCanvas */].createRenderer();
    },
    generator(config, surface) {
        if (config && config.async) {
            return new __WEBPACK_IMPORTED_MODULE_2__generator_async__["a" /* RoughGeneratorAsync */](config, surface);
        }
        return new __WEBPACK_IMPORTED_MODULE_1__generator__["a" /* RoughGenerator */](config, surface);
    }
});


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__canvas_base__ = __webpack_require__(8);


class RoughCanvas extends __WEBPACK_IMPORTED_MODULE_1__canvas_base__["a" /* RoughCanvasBase */] {
    constructor(canvas, config) {
        super(canvas);
        this.gen = new __WEBPACK_IMPORTED_MODULE_0__generator__["a" /* RoughGenerator */](config || null, this.canvas);
    }
    get generator() {
        return this.gen;
    }
    getDefaultOptions() {
        return this.gen.defaultOptions;
    }
    line(x1, y1, x2, y2, options) {
        const d = this.gen.line(x1, y1, x2, y2, options);
        this.draw(d);
        return d;
    }
    rectangle(x, y, width, height, options) {
        const d = this.gen.rectangle(x, y, width, height, options);
        this.draw(d);
        return d;
    }
    ellipse(x, y, width, height, options) {
        const d = this.gen.ellipse(x, y, width, height, options);
        this.draw(d);
        return d;
    }
    circle(x, y, diameter, options) {
        const d = this.gen.circle(x, y, diameter, options);
        this.draw(d);
        return d;
    }
    linearPath(points, options) {
        const d = this.gen.linearPath(points, options);
        this.draw(d);
        return d;
    }
    polygon(points, options) {
        const d = this.gen.polygon(points, options);
        this.draw(d);
        return d;
    }
    arc(x, y, width, height, start, stop, closed = false, options) {
        const d = this.gen.arc(x, y, width, height, start, stop, closed, options);
        this.draw(d);
        return d;
    }
    curve(points, options) {
        const d = this.gen.curve(points, options);
        this.draw(d);
        return d;
    }
    path(d, options) {
        const drawing = this.gen.path(d, options);
        this.draw(drawing);
        return drawing;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RoughCanvas;



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createRenderer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__renderer__ = __webpack_require__(2);

const hasSelf = typeof self !== 'undefined';
const roughScript = hasSelf && self && self.document && self.document.currentScript && self.document.currentScript.src;
function createRenderer(config) {
    if (hasSelf && roughScript && self && self.workly && config.async && (!config.noWorker)) {
        const worklySource = config.worklyURL || 'https://cdn.jsdelivr.net/gh/pshihn/workly/dist/workly.min.js';
        if (worklySource) {
            const code = `importScripts('${worklySource}', '${roughScript}');\nworkly.expose(self.rough.createRenderer());`;
            const ourl = URL.createObjectURL(new Blob([code]));
            return self.workly.proxy(ourl);
        }
    }
    return new __WEBPACK_IMPORTED_MODULE_0__renderer__["a" /* RoughRenderer */]();
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function isType(token, type) {
    return token.type === type;
}
const PARAMS = {
    A: 7,
    a: 7,
    C: 6,
    c: 6,
    H: 1,
    h: 1,
    L: 2,
    l: 2,
    M: 2,
    m: 2,
    Q: 4,
    q: 4,
    S: 4,
    s: 4,
    T: 4,
    t: 2,
    V: 1,
    v: 1,
    Z: 0,
    z: 0
};
class ParsedPath {
    constructor(d) {
        this.COMMAND = 0;
        this.NUMBER = 1;
        this.EOD = 2;
        this.segments = [];
        this.parseData(d);
        this.processPoints();
    }
    tokenize(d) {
        const tokens = new Array();
        while (d !== '') {
            if (d.match(/^([ \t\r\n,]+)/)) {
                d = d.substr(RegExp.$1.length);
            }
            else if (d.match(/^([aAcChHlLmMqQsStTvVzZ])/)) {
                tokens[tokens.length] = { type: this.COMMAND, text: RegExp.$1 };
                d = d.substr(RegExp.$1.length);
            }
            else if (d.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) {
                tokens[tokens.length] = { type: this.NUMBER, text: `${parseFloat(RegExp.$1)}` };
                d = d.substr(RegExp.$1.length);
            }
            else {
                console.error('Unrecognized segment command: ' + d);
                return [];
            }
        }
        tokens[tokens.length] = { type: this.EOD, text: '' };
        return tokens;
    }
    parseData(d) {
        const tokens = this.tokenize(d);
        let index = 0;
        let token = tokens[index];
        let mode = 'BOD';
        this.segments = new Array();
        while (!isType(token, this.EOD)) {
            let param_length;
            const params = new Array();
            if (mode === 'BOD') {
                if (token.text === 'M' || token.text === 'm') {
                    index++;
                    param_length = PARAMS[token.text];
                    mode = token.text;
                }
                else {
                    this.parseData('M0,0' + d);
                    return;
                }
            }
            else {
                if (isType(token, this.NUMBER)) {
                    param_length = PARAMS[mode];
                }
                else {
                    index++;
                    param_length = PARAMS[token.text];
                    mode = token.text;
                }
            }
            if ((index + param_length) < tokens.length) {
                for (let i = index; i < index + param_length; i++) {
                    const numbeToken = tokens[i];
                    if (isType(numbeToken, this.NUMBER)) {
                        params[params.length] = +numbeToken.text;
                    }
                    else {
                        console.error('Parameter type is not a number: ' + mode + ',' + numbeToken.text);
                        return;
                    }
                }
                if (typeof PARAMS[mode] === 'number') {
                    const segment = { key: mode, data: params };
                    this.segments.push(segment);
                    index += param_length;
                    token = tokens[index];
                    if (mode === 'M')
                        mode = 'L';
                    if (mode === 'm')
                        mode = 'l';
                }
                else {
                    console.error('Unsupported segment type: ' + mode);
                    return;
                }
            }
            else {
                console.error('Path data ended before all parameters were found');
            }
        }
    }
    get closed() {
        if (typeof this._closed === 'undefined') {
            this._closed = false;
            for (const s of this.segments) {
                if (s.key.toLowerCase() === 'z') {
                    this._closed = true;
                }
            }
        }
        return this._closed;
    }
    processPoints() {
        let first = null;
        let currentPoint = [0, 0];
        for (let i = 0; i < this.segments.length; i++) {
            const s = this.segments[i];
            switch (s.key) {
                case 'M':
                case 'L':
                case 'T':
                    s.point = [s.data[0], s.data[1]];
                    break;
                case 'm':
                case 'l':
                case 't':
                    s.point = [s.data[0] + currentPoint[0], s.data[1] + currentPoint[1]];
                    break;
                case 'H':
                    s.point = [s.data[0], currentPoint[1]];
                    break;
                case 'h':
                    s.point = [s.data[0] + currentPoint[0], currentPoint[1]];
                    break;
                case 'V':
                    s.point = [currentPoint[0], s.data[0]];
                    break;
                case 'v':
                    s.point = [currentPoint[0], s.data[0] + currentPoint[1]];
                    break;
                case 'z':
                case 'Z':
                    if (first) {
                        s.point = [first[0], first[1]];
                    }
                    break;
                case 'C':
                    s.point = [s.data[4], s.data[5]];
                    break;
                case 'c':
                    s.point = [s.data[4] + currentPoint[0], s.data[5] + currentPoint[1]];
                    break;
                case 'S':
                    s.point = [s.data[2], s.data[3]];
                    break;
                case 's':
                    s.point = [s.data[2] + currentPoint[0], s.data[3] + currentPoint[1]];
                    break;
                case 'Q':
                    s.point = [s.data[2], s.data[3]];
                    break;
                case 'q':
                    s.point = [s.data[2] + currentPoint[0], s.data[3] + currentPoint[1]];
                    break;
                case 'A':
                    s.point = [s.data[5], s.data[6]];
                    break;
                case 'a':
                    s.point = [s.data[5] + currentPoint[0], s.data[6] + currentPoint[1]];
                    break;
            }
            if (s.key === 'm' || s.key === 'M') {
                first = null;
            }
            if (s.point) {
                currentPoint = s.point;
                if (!first) {
                    first = s.point;
                }
            }
            if (s.key === 'z' || s.key === 'Z') {
                first = null;
            }
        }
    }
}
class RoughPath {
    constructor(d) {
        this._position = [0, 0];
        this._first = null;
        this.bezierReflectionPoint = null;
        this.quadReflectionPoint = null;
        this.parsed = new ParsedPath(d);
    }
    get segments() {
        return this.parsed.segments;
    }
    get closed() {
        return this.parsed.closed;
    }
    get linearPoints() {
        if (!this._linearPoints) {
            const lp = [];
            let points = [];
            for (const s of this.parsed.segments) {
                const key = s.key.toLowerCase();
                if (key === 'm' || key === 'z') {
                    if (points.length) {
                        lp.push(points);
                        points = [];
                    }
                    if (key === 'z') {
                        continue;
                    }
                }
                if (s.point) {
                    points.push(s.point);
                }
            }
            if (points.length) {
                lp.push(points);
                points = [];
            }
            this._linearPoints = lp;
        }
        return this._linearPoints;
    }
    get first() {
        return this._first;
    }
    set first(v) {
        this._first = v;
    }
    setPosition(x, y) {
        this._position = [x, y];
        if (!this._first) {
            this._first = [x, y];
        }
    }
    get position() {
        return this._position;
    }
    get x() {
        return this._position[0];
    }
    get y() {
        return this._position[1];
    }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = RoughPath;

// Algorithm as described in https://www.w3.org/TR/SVG/implnote.html
// Code adapted from nsSVGPathDataParser.cpp in Mozilla 
// https://hg.mozilla.org/mozilla-central/file/17156fbebbc8/content/svg/content/src/nsSVGPathDataParser.cpp#l887
class RoughArcConverter {
    constructor(from, to, radii, angle, largeArcFlag, sweepFlag) {
        this._segIndex = 0;
        this._numSegs = 0;
        this._rx = 0;
        this._ry = 0;
        this._sinPhi = 0;
        this._cosPhi = 0;
        this._C = [0, 0];
        this._theta = 0;
        this._delta = 0;
        this._T = 0;
        this._from = from;
        if (from[0] === to[0] && from[1] === to[1]) {
            return;
        }
        const radPerDeg = Math.PI / 180;
        this._rx = Math.abs(radii[0]);
        this._ry = Math.abs(radii[1]);
        this._sinPhi = Math.sin(angle * radPerDeg);
        this._cosPhi = Math.cos(angle * radPerDeg);
        const x1dash = this._cosPhi * (from[0] - to[0]) / 2.0 + this._sinPhi * (from[1] - to[1]) / 2.0;
        const y1dash = -this._sinPhi * (from[0] - to[0]) / 2.0 + this._cosPhi * (from[1] - to[1]) / 2.0;
        let root = 0;
        const numerator = this._rx * this._rx * this._ry * this._ry - this._rx * this._rx * y1dash * y1dash - this._ry * this._ry * x1dash * x1dash;
        if (numerator < 0) {
            const s = Math.sqrt(1 - (numerator / (this._rx * this._rx * this._ry * this._ry)));
            this._rx = this._rx * s;
            this._ry = this._ry * s;
            root = 0;
        }
        else {
            root = (largeArcFlag === sweepFlag ? -1.0 : 1.0) *
                Math.sqrt(numerator / (this._rx * this._rx * y1dash * y1dash + this._ry * this._ry * x1dash * x1dash));
        }
        const cxdash = root * this._rx * y1dash / this._ry;
        const cydash = -root * this._ry * x1dash / this._rx;
        this._C = [0, 0];
        this._C[0] = this._cosPhi * cxdash - this._sinPhi * cydash + (from[0] + to[0]) / 2.0;
        this._C[1] = this._sinPhi * cxdash + this._cosPhi * cydash + (from[1] + to[1]) / 2.0;
        this._theta = this.calculateVectorAngle(1.0, 0.0, (x1dash - cxdash) / this._rx, (y1dash - cydash) / this._ry);
        let dtheta = this.calculateVectorAngle((x1dash - cxdash) / this._rx, (y1dash - cydash) / this._ry, (-x1dash - cxdash) / this._rx, (-y1dash - cydash) / this._ry);
        if ((!sweepFlag) && (dtheta > 0)) {
            dtheta -= 2 * Math.PI;
        }
        else if (sweepFlag && (dtheta < 0)) {
            dtheta += 2 * Math.PI;
        }
        this._numSegs = Math.ceil(Math.abs(dtheta / (Math.PI / 2)));
        this._delta = dtheta / this._numSegs;
        this._T = (8 / 3) * Math.sin(this._delta / 4) * Math.sin(this._delta / 4) / Math.sin(this._delta / 2);
    }
    getNextSegment() {
        if (this._segIndex === this._numSegs) {
            return null;
        }
        const cosTheta1 = Math.cos(this._theta);
        const sinTheta1 = Math.sin(this._theta);
        const theta2 = this._theta + this._delta;
        const cosTheta2 = Math.cos(theta2);
        const sinTheta2 = Math.sin(theta2);
        const to = [
            this._cosPhi * this._rx * cosTheta2 - this._sinPhi * this._ry * sinTheta2 + this._C[0],
            this._sinPhi * this._rx * cosTheta2 + this._cosPhi * this._ry * sinTheta2 + this._C[1]
        ];
        const cp1 = [
            this._from[0] + this._T * (-this._cosPhi * this._rx * sinTheta1 - this._sinPhi * this._ry * cosTheta1),
            this._from[1] + this._T * (-this._sinPhi * this._rx * sinTheta1 + this._cosPhi * this._ry * cosTheta1)
        ];
        const cp2 = [
            to[0] + this._T * (this._cosPhi * this._rx * sinTheta2 + this._sinPhi * this._ry * cosTheta2),
            to[1] + this._T * (this._sinPhi * this._rx * sinTheta2 - this._cosPhi * this._ry * cosTheta2)
        ];
        this._theta = theta2;
        this._from = [to[0], to[1]];
        this._segIndex++;
        return {
            cp1: cp1,
            cp2: cp2,
            to: to
        };
    }
    calculateVectorAngle(ux, uy, vx, vy) {
        const ta = Math.atan2(uy, ux);
        const tb = Math.atan2(vy, vx);
        if (tb >= ta)
            return tb - ta;
        return 2 * Math.PI - (ta - tb);
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = RoughArcConverter;

class PathFitter {
    constructor(sets, closed) {
        this.sets = sets;
        this.closed = closed;
    }
    fit(simplification) {
        const outSets = [];
        for (const set of this.sets) {
            const length = set.length;
            let estLength = Math.floor(simplification * length);
            if (estLength < 5) {
                if (length <= 5) {
                    continue;
                }
                estLength = 5;
            }
            outSets.push(this.reduce(set, estLength));
        }
        let d = '';
        for (const set of outSets) {
            for (let i = 0; i < set.length; i++) {
                const point = set[i];
                if (i === 0) {
                    d += 'M' + point[0] + ',' + point[1];
                }
                else {
                    d += 'L' + point[0] + ',' + point[1];
                }
            }
            if (this.closed) {
                d += 'z ';
            }
        }
        return d;
    }
    distance(p1, p2) {
        return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
    }
    reduce(set, count) {
        if (set.length <= count) {
            return set;
        }
        const points = set.slice(0);
        while (points.length > count) {
            const areas = [];
            let minArea = -1;
            let minIndex = -1;
            for (let i = 1; i < (points.length - 1); i++) {
                const a = this.distance(points[i - 1], points[i]);
                const b = this.distance(points[i], points[i + 1]);
                const c = this.distance(points[i - 1], points[i + 1]);
                const s = (a + b + c) / 2.0;
                const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
                areas.push(area);
                if ((minArea < 0) || (area < minArea)) {
                    minArea = area;
                    minIndex = i;
                }
            }
            if (minIndex > 0) {
                points.splice(minIndex, 1);
            }
            else {
                break;
            }
        }
        return points;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PathFitter;



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getFiller;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hachure_filler__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__zigzag_filler__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hatch_filler__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dot_filler__ = __webpack_require__(24);




const fillers = {};
function getFiller(renderer, o) {
    let fillerName = o.fillStyle || 'hachure';
    if (!fillers[fillerName]) {
        switch (fillerName) {
            case 'zigzag':
                if (!fillers[fillerName]) {
                    fillers[fillerName] = new __WEBPACK_IMPORTED_MODULE_1__zigzag_filler__["a" /* ZigZagFiller */](renderer);
                }
                break;
            case 'cross-hatch':
                if (!fillers[fillerName]) {
                    fillers[fillerName] = new __WEBPACK_IMPORTED_MODULE_2__hatch_filler__["a" /* HatchFiller */](renderer);
                }
                break;
            case 'dots':
                if (!fillers[fillerName]) {
                    fillers[fillerName] = new __WEBPACK_IMPORTED_MODULE_3__dot_filler__["a" /* DotFiller */](renderer);
                }
                break;
            case 'hachure':
            default:
                fillerName = 'hachure';
                if (!fillers[fillerName]) {
                    fillers[fillerName] = new __WEBPACK_IMPORTED_MODULE_0__hachure_filler__["a" /* HachureFiller */](renderer);
                }
                break;
        }
    }
    return fillers[fillerName];
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__geometry__ = __webpack_require__(7);

class HachureIterator {
    constructor(top, bottom, left, right, gap, sinAngle, cosAngle, tanAngle) {
        this.deltaX = 0;
        this.hGap = 0;
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
        this.gap = gap;
        this.sinAngle = sinAngle;
        this.tanAngle = tanAngle;
        if (Math.abs(sinAngle) < 0.0001) {
            this.pos = left + gap;
        }
        else if (Math.abs(sinAngle) > 0.9999) {
            this.pos = top + gap;
        }
        else {
            this.deltaX = (bottom - top) * Math.abs(tanAngle);
            this.pos = left - Math.abs(this.deltaX);
            this.hGap = Math.abs(gap / cosAngle);
            this.sLeft = new __WEBPACK_IMPORTED_MODULE_0__geometry__["a" /* Segment */]([left, bottom], [left, top]);
            this.sRight = new __WEBPACK_IMPORTED_MODULE_0__geometry__["a" /* Segment */]([right, bottom], [right, top]);
        }
    }
    nextLine() {
        if (Math.abs(this.sinAngle) < 0.0001) {
            if (this.pos < this.right) {
                const line = [this.pos, this.top, this.pos, this.bottom];
                this.pos += this.gap;
                return line;
            }
        }
        else if (Math.abs(this.sinAngle) > 0.9999) {
            if (this.pos < this.bottom) {
                const line = [this.left, this.pos, this.right, this.pos];
                this.pos += this.gap;
                return line;
            }
        }
        else {
            let xLower = this.pos - this.deltaX / 2;
            let xUpper = this.pos + this.deltaX / 2;
            let yLower = this.bottom;
            let yUpper = this.top;
            if (this.pos < (this.right + this.deltaX)) {
                while (((xLower < this.left) && (xUpper < this.left)) || ((xLower > this.right) && (xUpper > this.right))) {
                    this.pos += this.hGap;
                    xLower = this.pos - this.deltaX / 2;
                    xUpper = this.pos + this.deltaX / 2;
                    if (this.pos > (this.right + this.deltaX)) {
                        return null;
                    }
                }
                const s = new __WEBPACK_IMPORTED_MODULE_0__geometry__["a" /* Segment */]([xLower, yLower], [xUpper, yUpper]);
                if (this.sLeft && s.intersects(this.sLeft)) {
                    xLower = s.xi;
                    yLower = s.yi;
                }
                if (this.sRight && s.intersects(this.sRight)) {
                    xUpper = s.xi;
                    yUpper = s.yi;
                }
                if (this.tanAngle > 0) {
                    xLower = this.right - (xLower - this.left);
                    xUpper = this.right - (xUpper - this.left);
                }
                const line = [xLower, yLower, xUpper, yUpper];
                this.pos += this.hGap;
                return line;
            }
        }
        return null;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HachureIterator;



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hachure_filler__ = __webpack_require__(3);

class ZigZagFiller extends __WEBPACK_IMPORTED_MODULE_0__hachure_filler__["a" /* HachureFiller */] {
    fillPolygon(points, o) {
        return this._fillPolygon(points, o, true);
    }
    fillEllipse(cx, cy, width, height, o) {
        return this._fillEllipse(cx, cy, width, height, o, true);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ZigZagFiller;



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hachure_filler__ = __webpack_require__(3);

class HatchFiller extends __WEBPACK_IMPORTED_MODULE_0__hachure_filler__["a" /* HachureFiller */] {
    fillPolygon(points, o) {
        const set = this._fillPolygon(points, o);
        const o2 = Object.assign({}, o, { hachureAngle: o.hachureAngle + 90 });
        const set2 = this._fillPolygon(points, o2);
        set.ops = set.ops.concat(set2.ops);
        return set;
    }
    fillEllipse(cx, cy, width, height, o) {
        const set = this._fillEllipse(cx, cy, width, height, o);
        const o2 = Object.assign({}, o, { hachureAngle: o.hachureAngle + 90 });
        const set2 = this._fillEllipse(cx, cy, width, height, o2);
        set.ops = set.ops.concat(set2.ops);
        return set;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = HatchFiller;



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filler_utils__ = __webpack_require__(6);

class DotFiller {
    constructor(renderer) {
        this.renderer = renderer;
    }
    fillPolygon(points, o) {
        o = Object.assign({}, o, { curveStepCount: 4, hachureAngle: 0 });
        const lines = Object(__WEBPACK_IMPORTED_MODULE_0__filler_utils__["b" /* hachureLinesForPolygon */])(points, o);
        return this.dotsOnLines(lines, o);
    }
    fillEllipse(cx, cy, width, height, o) {
        o = Object.assign({}, o, { curveStepCount: 4, hachureAngle: 0 });
        const lines = Object(__WEBPACK_IMPORTED_MODULE_0__filler_utils__["a" /* hachureLinesForEllipse */])(cx, cy, width, height, o, this.renderer);
        return this.dotsOnLines(lines, o);
    }
    dotsOnLines(lines, o) {
        let ops = [];
        let gap = o.hachureGap;
        if (gap < 0) {
            gap = o.strokeWidth * 4;
        }
        gap = Math.max(gap, 0.1);
        let fweight = o.fillWeight;
        if (fweight < 0) {
            fweight = o.strokeWidth / 2;
        }
        for (const line of lines) {
            const length = Object(__WEBPACK_IMPORTED_MODULE_0__filler_utils__["c" /* lineLength */])(line);
            const dl = length / gap;
            const count = Math.ceil(dl) - 1;
            const alpha = Math.atan((line[1][1] - line[0][1]) / (line[1][0] - line[0][0]));
            for (let i = 0; i < count; i++) {
                const l = gap * (i + 1);
                const dy = l * Math.sin(alpha);
                const dx = l * Math.cos(alpha);
                const c = [line[0][0] - dx, line[0][1] + dy];
                const cx = this.renderer.getOffset(c[0] - gap / 4, c[0] + gap / 4, o);
                const cy = this.renderer.getOffset(c[1] - gap / 4, c[1] + gap / 4, o);
                const ellipse = this.renderer.ellipse(cx, cy, fweight, fweight, o);
                ops = ops.concat(ellipse.ops);
            }
        }
        return { type: 'fillSketch', ops };
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DotFiller;



/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generator_async__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__canvas_base__ = __webpack_require__(8);


class RoughCanvasAsync extends __WEBPACK_IMPORTED_MODULE_1__canvas_base__["a" /* RoughCanvasBase */] {
    constructor(canvas, config) {
        super(canvas);
        this.genAsync = new __WEBPACK_IMPORTED_MODULE_0__generator_async__["a" /* RoughGeneratorAsync */](config || null, this.canvas);
    }
    get generator() {
        return this.genAsync;
    }
    getDefaultOptions() {
        return this.genAsync.defaultOptions;
    }
    async line(x1, y1, x2, y2, options) {
        const d = await this.genAsync.line(x1, y1, x2, y2, options);
        this.draw(d);
        return d;
    }
    async rectangle(x, y, width, height, options) {
        const d = await this.genAsync.rectangle(x, y, width, height, options);
        this.draw(d);
        return d;
    }
    async ellipse(x, y, width, height, options) {
        const d = await this.genAsync.ellipse(x, y, width, height, options);
        this.draw(d);
        return d;
    }
    async circle(x, y, diameter, options) {
        const d = await this.genAsync.circle(x, y, diameter, options);
        this.draw(d);
        return d;
    }
    async linearPath(points, options) {
        const d = await this.genAsync.linearPath(points, options);
        this.draw(d);
        return d;
    }
    async polygon(points, options) {
        const d = await this.genAsync.polygon(points, options);
        this.draw(d);
        return d;
    }
    async arc(x, y, width, height, start, stop, closed = false, options) {
        const d = await this.genAsync.arc(x, y, width, height, start, stop, closed, options);
        this.draw(d);
        return d;
    }
    async curve(points, options) {
        const d = await this.genAsync.curve(points, options);
        this.draw(d);
        return d;
    }
    async path(d, options) {
        const drawing = await this.genAsync.path(d, options);
        this.draw(drawing);
        return drawing;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RoughCanvasAsync;



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__svg_base__ = __webpack_require__(9);


class RoughSVG extends __WEBPACK_IMPORTED_MODULE_1__svg_base__["a" /* RoughSVGBase */] {
    constructor(svg, config) {
        super(svg);
        this.gen = new __WEBPACK_IMPORTED_MODULE_0__generator__["a" /* RoughGenerator */](config || null, this.svg);
    }
    get generator() {
        return this.gen;
    }
    getDefaultOptions() {
        return this.gen.defaultOptions;
    }
    opsToPath(drawing) {
        return this.gen.opsToPath(drawing);
    }
    line(x1, y1, x2, y2, options) {
        const d = this.gen.line(x1, y1, x2, y2, options);
        return this.draw(d);
    }
    rectangle(x, y, width, height, options) {
        const d = this.gen.rectangle(x, y, width, height, options);
        return this.draw(d);
    }
    ellipse(x, y, width, height, options) {
        const d = this.gen.ellipse(x, y, width, height, options);
        return this.draw(d);
    }
    circle(x, y, diameter, options) {
        const d = this.gen.circle(x, y, diameter, options);
        return this.draw(d);
    }
    linearPath(points, options) {
        const d = this.gen.linearPath(points, options);
        return this.draw(d);
    }
    polygon(points, options) {
        const d = this.gen.polygon(points, options);
        return this.draw(d);
    }
    arc(x, y, width, height, start, stop, closed = false, options) {
        const d = this.gen.arc(x, y, width, height, start, stop, closed, options);
        return this.draw(d);
    }
    curve(points, options) {
        const d = this.gen.curve(points, options);
        return this.draw(d);
    }
    path(d, options) {
        const drawing = this.gen.path(d, options);
        return this.draw(drawing);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RoughSVG;



/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generator_async__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__svg_base__ = __webpack_require__(9);


class RoughSVGAsync extends __WEBPACK_IMPORTED_MODULE_1__svg_base__["a" /* RoughSVGBase */] {
    constructor(svg, config) {
        super(svg);
        this.genAsync = new __WEBPACK_IMPORTED_MODULE_0__generator_async__["a" /* RoughGeneratorAsync */](config || null, this.svg);
    }
    get generator() {
        return this.genAsync;
    }
    getDefaultOptions() {
        return this.genAsync.defaultOptions;
    }
    opsToPath(drawing) {
        return this.genAsync.opsToPath(drawing);
    }
    async line(x1, y1, x2, y2, options) {
        const d = await this.genAsync.line(x1, y1, x2, y2, options);
        return this.draw(d);
    }
    async rectangle(x, y, width, height, options) {
        const d = await this.genAsync.rectangle(x, y, width, height, options);
        return this.draw(d);
    }
    async ellipse(x, y, width, height, options) {
        const d = await this.genAsync.ellipse(x, y, width, height, options);
        return this.draw(d);
    }
    async circle(x, y, diameter, options) {
        const d = await this.genAsync.circle(x, y, diameter, options);
        return this.draw(d);
    }
    async linearPath(points, options) {
        const d = await this.genAsync.linearPath(points, options);
        return this.draw(d);
    }
    async polygon(points, options) {
        const d = await this.genAsync.polygon(points, options);
        return this.draw(d);
    }
    async arc(x, y, width, height, start, stop, closed = false, options) {
        const d = await this.genAsync.arc(x, y, width, height, start, stop, closed, options);
        return this.draw(d);
    }
    async curve(points, options) {
        const d = await this.genAsync.curve(points, options);
        return this.draw(d);
    }
    async path(d, options) {
        const drawing = await this.genAsync.path(d, options);
        return this.draw(drawing);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RoughSVGAsync;



/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Enumerator */
/* unused harmony export getEnumerator */
/* unused harmony export toIterator */
/* unused harmony export toList */
/* unused harmony export ofList */
/* unused harmony export ofArray */
/* unused harmony export append */
/* unused harmony export average */
/* unused harmony export averageBy */
/* unused harmony export concat */
/* unused harmony export collect */
/* unused harmony export choose */
/* unused harmony export compareWith */
/* unused harmony export delay */
/* unused harmony export empty */
/* unused harmony export enumerateWhile */
/* unused harmony export enumerateThenFinally */
/* unused harmony export enumerateUsing */
/* unused harmony export exactlyOne */
/* unused harmony export except */
/* harmony export (immutable) */ __webpack_exports__["a"] = exists;
/* unused harmony export exists2 */
/* unused harmony export filter */
/* unused harmony export where */
/* unused harmony export fold */
/* unused harmony export foldBack */
/* unused harmony export fold2 */
/* unused harmony export foldBack2 */
/* unused harmony export forAll */
/* unused harmony export forAll2 */
/* unused harmony export tryHead */
/* unused harmony export head */
/* unused harmony export initialize */
/* unused harmony export initializeInfinite */
/* unused harmony export tryItem */
/* unused harmony export item */
/* unused harmony export iterate */
/* unused harmony export iterate2 */
/* unused harmony export iterateIndexed */
/* unused harmony export iterateIndexed2 */
/* unused harmony export isEmpty */
/* unused harmony export tryLast */
/* unused harmony export last */
/* unused harmony export count */
/* unused harmony export map */
/* unused harmony export mapIndexed */
/* unused harmony export indexed */
/* unused harmony export map2 */
/* unused harmony export mapIndexed2 */
/* unused harmony export map3 */
/* unused harmony export chunkBySize */
/* unused harmony export mapFold */
/* unused harmony export mapFoldBack */
/* unused harmony export max */
/* unused harmony export maxBy */
/* unused harmony export min */
/* unused harmony export minBy */
/* unused harmony export pairwise */
/* unused harmony export permute */
/* unused harmony export rangeStep */
/* unused harmony export rangeChar */
/* unused harmony export range */
/* unused harmony export readOnly */
/* unused harmony export reduce */
/* unused harmony export reduceBack */
/* unused harmony export replicate */
/* unused harmony export reverse */
/* unused harmony export scan */
/* unused harmony export scanBack */
/* unused harmony export singleton */
/* unused harmony export skip */
/* unused harmony export skipWhile */
/* unused harmony export sortWith */
/* unused harmony export sum */
/* unused harmony export sumBy */
/* unused harmony export tail */
/* unused harmony export take */
/* unused harmony export truncate */
/* unused harmony export takeWhile */
/* unused harmony export tryFind */
/* unused harmony export find */
/* unused harmony export tryFindBack */
/* unused harmony export findBack */
/* unused harmony export tryFindIndex */
/* unused harmony export findIndex */
/* unused harmony export tryFindIndexBack */
/* unused harmony export findIndexBack */
/* unused harmony export tryPick */
/* unused harmony export pick */
/* unused harmony export unfold */
/* unused harmony export zip */
/* unused harmony export zip3 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Array__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListClass__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Option__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Util__ = __webpack_require__(0);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var Enumerator = function () {
    function Enumerator(iter) {
        _classCallCheck(this, Enumerator);

        this.iter = iter;
    }

    _createClass(Enumerator, [{
        key: "MoveNext",
        value: function MoveNext() {
            var cur = this.iter.next();
            this.current = cur.value;
            return !cur.done;
        }
    }, {
        key: "Reset",
        value: function Reset() {
            throw new Error("JS iterators cannot be reset");
        }
    }, {
        key: "Dispose",
        value: function Dispose() {
            return;
        }
    }, {
        key: "Current",
        get: function get() {
            return this.current;
        }
    }, {
        key: "get_Current",
        get: function get() {
            return this.current;
        }
    }]);

    return Enumerator;
}();
function getEnumerator(o) {
    return typeof o.GetEnumerator === "function" ? o.GetEnumerator() : new Enumerator(o[Symbol.iterator]());
}
function toIterator(en) {
    return {
        next: function next() {
            return en.MoveNext() ? { done: false, value: en.Current } : { done: true, value: null };
        }
    };
}
function __failIfNone(res) {
    if (res == null) {
        throw new Error("Seq did not contain any matching element");
    }
    return Object(__WEBPACK_IMPORTED_MODULE_2__Option__["a" /* getValue */])(res);
}
function toList(xs) {
    return foldBack(function (x, acc) {
        return new __WEBPACK_IMPORTED_MODULE_1__ListClass__["a" /* default */](x, acc);
    }, xs, new __WEBPACK_IMPORTED_MODULE_1__ListClass__["a" /* default */]());
}
function ofList(xs) {
    return delay(function () {
        return unfold(function (x) {
            return x.tail != null ? [x.head, x.tail] : null;
        }, xs);
    });
}
function ofArray(xs) {
    return delay(function () {
        return unfold(function (i) {
            return i < xs.length ? [xs[i], i + 1] : null;
        }, 0);
    });
}
function append(xs, ys) {
    return delay(function () {
        var firstDone = false;
        var i = xs[Symbol.iterator]();
        var iters = [i, null];
        return unfold(function () {
            var cur = void 0;
            if (!firstDone) {
                cur = iters[0].next();
                if (!cur.done) {
                    return [cur.value, iters];
                } else {
                    firstDone = true;
                    iters = [null, ys[Symbol.iterator]()];
                }
            }
            cur = iters[1].next();
            return !cur.done ? [cur.value, iters] : null;
        }, iters);
    });
}
function average(xs) {
    var count = 1;
    var sum = reduce(function (acc, x) {
        count++;
        return acc + x;
    }, xs);
    return sum / count;
}
function averageBy(f, xs) {
    var count = 1;
    var sum = reduce(function (acc, x) {
        count++;
        return (count === 2 ? f(acc) : acc) + f(x);
    }, xs);
    return sum / count;
}
function concat(xs) {
    return delay(function () {
        var iter = xs[Symbol.iterator]();
        var output = { value: null };
        return unfold(function (innerIter) {
            var hasFinished = false;
            while (!hasFinished) {
                if (innerIter == null) {
                    var cur = iter.next();
                    if (!cur.done) {
                        innerIter = cur.value[Symbol.iterator]();
                    } else {
                        hasFinished = true;
                    }
                } else {
                    var _cur = innerIter.next();
                    if (!_cur.done) {
                        output = { value: _cur.value };
                        hasFinished = true;
                    } else {
                        innerIter = null;
                    }
                }
            }
            return innerIter != null && output != null ? [output.value, innerIter] : null;
        }, null);
    });
}
function collect(f, xs) {
    return concat(map(f, xs));
}
function choose(f, xs) {
    return delay(function () {
        return unfold(function (iter) {
            var cur = iter.next();
            while (!cur.done) {
                var y = f(cur.value);
                if (y != null) {
                    return [Object(__WEBPACK_IMPORTED_MODULE_2__Option__["a" /* getValue */])(y), iter];
                }
                cur = iter.next();
            }
            return null;
        }, xs[Symbol.iterator]());
    });
}
function compareWith(f, xs, ys) {
    var nonZero = tryFind(function (i) {
        return i !== 0;
    }, map2(function (x, y) {
        return f(x, y);
    }, xs, ys));
    return nonZero != null ? Object(__WEBPACK_IMPORTED_MODULE_2__Option__["a" /* getValue */])(nonZero) : count(xs) - count(ys);
}
function delay(f) {
    return _defineProperty({}, Symbol.iterator, function () {
        return f()[Symbol.iterator]();
    });
}
function empty() {
    return unfold(function () {
        return void 0;
    });
}
function enumerateWhile(cond, xs) {
    return concat(unfold(function () {
        return cond() ? [xs, true] : null;
    }));
}
function enumerateThenFinally(xs, finalFn) {
    return delay(function () {
        var iter = void 0;
        try {
            iter = xs[Symbol.iterator]();
        } catch (err) {
            return void 0;
        } finally {
            finalFn();
        }
        return unfold(function (it) {
            try {
                var cur = it.next();
                return !cur.done ? [cur.value, it] : null;
            } catch (err) {
                return void 0;
            } finally {
                finalFn();
            }
        }, iter);
    });
}
function enumerateUsing(disp, work) {
    var isDisposed = false;
    var disposeOnce = function disposeOnce() {
        if (!isDisposed) {
            isDisposed = true;
            disp.Dispose();
        }
    };
    try {
        return enumerateThenFinally(work(disp), disposeOnce);
    } catch (err) {
        return void 0;
    } finally {
        disposeOnce();
    }
}
function exactlyOne(xs) {
    var iter = xs[Symbol.iterator]();
    var fst = iter.next();
    if (fst.done) {
        throw new Error("Seq was empty");
    }
    var snd = iter.next();
    if (!snd.done) {
        throw new Error("Seq had multiple items");
    }
    return fst.value;
}
function except(itemsToExclude, source) {
    var exclusionItems = Array.from(itemsToExclude);
    var testIsNotInExclusionItems = function testIsNotInExclusionItems(element) {
        return !exclusionItems.some(function (excludedItem) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__Util__["b" /* equals */])(excludedItem, element);
        });
    };
    return filter(testIsNotInExclusionItems, source);
}
function exists(f, xs) {
    var cur = void 0;
    for (var iter = xs[Symbol.iterator]();;) {
        cur = iter.next();
        if (cur.done) {
            break;
        }
        if (f(cur.value)) {
            return true;
        }
    }
    return false;
}
function exists2(f, xs, ys) {
    var cur1 = void 0;
    var cur2 = void 0;
    for (var iter1 = xs[Symbol.iterator](), iter2 = ys[Symbol.iterator]();;) {
        cur1 = iter1.next();
        cur2 = iter2.next();
        if (cur1.done || cur2.done) {
            break;
        }
        if (f(cur1.value, cur2.value)) {
            return true;
        }
    }
    return false;
}
function filter(f, xs) {
    return delay(function () {
        return unfold(function (iter) {
            var cur = iter.next();
            while (!cur.done) {
                if (f(cur.value)) {
                    return [cur.value, iter];
                }
                cur = iter.next();
            }
            return null;
        }, xs[Symbol.iterator]());
    });
}
function where(f, xs) {
    return filter(f, xs);
}
function fold(f, acc, xs) {
    if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
        return xs.reduce(f, acc);
    } else {
        var cur = void 0;
        for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
            cur = iter.next();
            if (cur.done) {
                break;
            }
            acc = f(acc, cur.value, i);
        }
        return acc;
    }
}
function foldBack(f, xs, acc) {
    var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    for (var i = arr.length - 1; i >= 0; i--) {
        acc = f(arr[i], acc, i);
    }
    return acc;
}
function fold2(f, acc, xs, ys) {
    var iter1 = xs[Symbol.iterator]();
    var iter2 = ys[Symbol.iterator]();
    var cur1 = void 0;
    var cur2 = void 0;
    for (var i = 0;; i++) {
        cur1 = iter1.next();
        cur2 = iter2.next();
        if (cur1.done || cur2.done) {
            break;
        }
        acc = f(acc, cur1.value, cur2.value, i);
    }
    return acc;
}
function foldBack2(f, xs, ys, acc) {
    var ar1 = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    var ar2 = Array.isArray(ys) || ArrayBuffer.isView(ys) ? ys : Array.from(ys);
    for (var i = ar1.length - 1; i >= 0; i--) {
        acc = f(ar1[i], ar2[i], acc, i);
    }
    return acc;
}
function forAll(f, xs) {
    return fold(function (acc, x) {
        return acc && f(x);
    }, true, xs);
}
function forAll2(f, xs, ys) {
    return fold2(function (acc, x, y) {
        return acc && f(x, y);
    }, true, xs, ys);
}
function tryHead(xs) {
    var iter = xs[Symbol.iterator]();
    var cur = iter.next();
    return cur.done ? null : Object(__WEBPACK_IMPORTED_MODULE_2__Option__["b" /* makeSome */])(cur.value);
}
function head(xs) {
    return __failIfNone(tryHead(xs));
}
function initialize(n, f) {
    return delay(function () {
        return unfold(function (i) {
            return i < n ? [f(i), i + 1] : null;
        }, 0);
    });
}
function initializeInfinite(f) {
    return delay(function () {
        return unfold(function (i) {
            return [f(i), i + 1];
        }, 0);
    });
}
function tryItem(i, xs) {
    if (i < 0) {
        return null;
    }
    if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
        return i < xs.length ? Object(__WEBPACK_IMPORTED_MODULE_2__Option__["b" /* makeSome */])(xs[i]) : null;
    }
    for (var j = 0, iter = xs[Symbol.iterator]();; j++) {
        var cur = iter.next();
        if (cur.done) {
            break;
        }
        if (j === i) {
            return Object(__WEBPACK_IMPORTED_MODULE_2__Option__["b" /* makeSome */])(cur.value);
        }
    }
    return null;
}
function item(i, xs) {
    return __failIfNone(tryItem(i, xs));
}
function iterate(f, xs) {
    fold(function (_, x) {
        return f(x);
    }, null, xs);
}
function iterate2(f, xs, ys) {
    fold2(function (_, x, y) {
        return f(x, y);
    }, null, xs, ys);
}
function iterateIndexed(f, xs) {
    fold(function (_, x, i) {
        return f(i, x);
    }, null, xs);
}
function iterateIndexed2(f, xs, ys) {
    fold2(function (_, x, y, i) {
        return f(i, x, y);
    }, null, xs, ys);
}
function isEmpty(xs) {
    var i = xs[Symbol.iterator]();
    return i.next().done;
}
function tryLast(xs) {
    try {
        return Object(__WEBPACK_IMPORTED_MODULE_2__Option__["b" /* makeSome */])(reduce(function (_, x) {
            return x;
        }, xs));
    } catch (err) {
        return null;
    }
}
function last(xs) {
    return __failIfNone(tryLast(xs));
}
// A export function 'length' method causes problems in JavaScript -- https://github.com/Microsoft/TypeScript/issues/442
function count(xs) {
    return Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.length : fold(function (acc, x) {
        return acc + 1;
    }, 0, xs);
}
function map(f, xs) {
    return delay(function () {
        return unfold(function (iter) {
            var cur = iter.next();
            return !cur.done ? [f(cur.value), iter] : null;
        }, xs[Symbol.iterator]());
    });
}
function mapIndexed(f, xs) {
    return delay(function () {
        var i = 0;
        return unfold(function (iter) {
            var cur = iter.next();
            return !cur.done ? [f(i++, cur.value), iter] : null;
        }, xs[Symbol.iterator]());
    });
}
function indexed(xs) {
    return mapIndexed(function (i, x) {
        return [i, x];
    }, xs);
}
function map2(f, xs, ys) {
    return delay(function () {
        var iter1 = xs[Symbol.iterator]();
        var iter2 = ys[Symbol.iterator]();
        return unfold(function () {
            var cur1 = iter1.next();
            var cur2 = iter2.next();
            return !cur1.done && !cur2.done ? [f(cur1.value, cur2.value), null] : null;
        });
    });
}
function mapIndexed2(f, xs, ys) {
    return delay(function () {
        var i = 0;
        var iter1 = xs[Symbol.iterator]();
        var iter2 = ys[Symbol.iterator]();
        return unfold(function () {
            var cur1 = iter1.next();
            var cur2 = iter2.next();
            return !cur1.done && !cur2.done ? [f(i++, cur1.value, cur2.value), null] : null;
        });
    });
}
function map3(f, xs, ys, zs) {
    return delay(function () {
        var iter1 = xs[Symbol.iterator]();
        var iter2 = ys[Symbol.iterator]();
        var iter3 = zs[Symbol.iterator]();
        return unfold(function () {
            var cur1 = iter1.next();
            var cur2 = iter2.next();
            var cur3 = iter3.next();
            return !cur1.done && !cur2.done && !cur3.done ? [f(cur1.value, cur2.value, cur3.value), null] : null;
        });
    });
}
function chunkBySize(size, xs) {
    var result = Object(__WEBPACK_IMPORTED_MODULE_0__Array__["a" /* chunkBySize */])(size, Array.from(xs));
    return ofArray(result);
}
function mapFold(f, acc, xs, transform) {
    var result = [];
    var r = void 0;
    var cur = void 0;
    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
        cur = iter.next();
        if (cur.done) {
            break;
        }

        var _f = f(acc, cur.value);

        var _f2 = _slicedToArray(_f, 2);

        r = _f2[0];
        acc = _f2[1];

        result.push(r);
    }
    return transform !== void 0 ? [transform(result), acc] : [result, acc];
}
function mapFoldBack(f, xs, acc, transform) {
    var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    var result = [];
    var r = void 0;
    for (var i = arr.length - 1; i >= 0; i--) {
        var _f3 = f(arr[i], acc);

        var _f4 = _slicedToArray(_f3, 2);

        r = _f4[0];
        acc = _f4[1];

        result.push(r);
    }
    return transform !== void 0 ? [transform(result), acc] : [result, acc];
}
function max(xs) {
    return reduce(function (acc, x) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__Util__["a" /* compare */])(acc, x) === 1 ? acc : x;
    }, xs);
}
function maxBy(f, xs) {
    return reduce(function (acc, x) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__Util__["a" /* compare */])(f(acc), f(x)) === 1 ? acc : x;
    }, xs);
}
function min(xs) {
    return reduce(function (acc, x) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__Util__["a" /* compare */])(acc, x) === -1 ? acc : x;
    }, xs);
}
function minBy(f, xs) {
    return reduce(function (acc, x) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__Util__["a" /* compare */])(f(acc), f(x)) === -1 ? acc : x;
    }, xs);
}
function pairwise(xs) {
    return skip(2, scan(function (last, next) {
        return [last[1], next];
    }, [0, 0], xs));
}
function permute(f, xs) {
    return ofArray(Object(__WEBPACK_IMPORTED_MODULE_0__Array__["b" /* permute */])(f, Array.from(xs)));
}
function rangeStep(first, step, last) {
    if (step === 0) {
        throw new Error("Step cannot be 0");
    }
    return delay(function () {
        return unfold(function (x) {
            return step > 0 && x <= last || step < 0 && x >= last ? [x, x + step] : null;
        }, first);
    });
}
function rangeChar(first, last) {
    return delay(function () {
        return unfold(function (x) {
            return x <= last ? [x, String.fromCharCode(x.charCodeAt(0) + 1)] : null;
        }, first);
    });
}
function range(first, last) {
    return rangeStep(first, 1, last);
}
function readOnly(xs) {
    return map(function (x) {
        return x;
    }, xs);
}
function reduce(f, xs) {
    if (Array.isArray(xs) || ArrayBuffer.isView(xs)) {
        return xs.reduce(f);
    }
    var iter = xs[Symbol.iterator]();
    var cur = iter.next();
    if (cur.done) {
        throw new Error("Seq was empty");
    }
    var acc = cur.value;
    while (true) {
        cur = iter.next();
        if (cur.done) {
            break;
        }
        acc = f(acc, cur.value);
    }
    return acc;
}
function reduceBack(f, xs) {
    var ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs : Array.from(xs);
    if (ar.length === 0) {
        throw new Error("Seq was empty");
    }
    var acc = ar[ar.length - 1];
    for (var i = ar.length - 2; i >= 0; i--) {
        acc = f(ar[i], acc, i);
    }
    return acc;
}
function replicate(n, x) {
    return initialize(n, function () {
        return x;
    });
}
function reverse(xs) {
    var ar = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : Array.from(xs);
    return ofArray(ar.reverse());
}
function scan(f, seed, xs) {
    return delay(function () {
        var iter = xs[Symbol.iterator]();
        return unfold(function (acc) {
            if (acc == null) {
                return [seed, seed];
            }
            var cur = iter.next();
            if (!cur.done) {
                acc = f(acc, cur.value);
                return [acc, acc];
            }
            return void 0;
        }, null);
    });
}
function scanBack(f, xs, seed) {
    return reverse(scan(function (acc, x) {
        return f(x, acc);
    }, seed, reverse(xs)));
}
function singleton(y) {
    return unfold(function (x) {
        return x != null ? [x, null] : null;
    }, y);
}
function skip(n, xs) {
    return _defineProperty({}, Symbol.iterator, function () {
        var iter = xs[Symbol.iterator]();
        for (var i = 1; i <= n; i++) {
            if (iter.next().done) {
                throw new Error("Seq has not enough elements");
            }
        }
        return iter;
    });
}
function skipWhile(f, xs) {
    return delay(function () {
        var hasPassed = false;
        return filter(function (x) {
            return hasPassed || (hasPassed = !f(x));
        }, xs);
    });
}
function sortWith(f, xs) {
    var ys = Array.from(xs);
    return ofArray(ys.sort(f));
}
function sum(xs) {
    return fold(function (acc, x) {
        return acc + x;
    }, 0, xs);
}
function sumBy(f, xs) {
    return fold(function (acc, x) {
        return acc + f(x);
    }, 0, xs);
}
function tail(xs) {
    var iter = xs[Symbol.iterator]();
    var cur = iter.next();
    if (cur.done) {
        throw new Error("Seq was empty");
    }
    return _defineProperty({}, Symbol.iterator, function () {
        return iter;
    });
}
function take(n, xs) {
    var truncate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    return delay(function () {
        var iter = xs[Symbol.iterator]();
        return unfold(function (i) {
            if (i < n) {
                var cur = iter.next();
                if (!cur.done) {
                    return [cur.value, i + 1];
                }
                if (!truncate) {
                    throw new Error("Seq has not enough elements");
                }
            }
            return void 0;
        }, 0);
    });
}
function truncate(n, xs) {
    return take(n, xs, true);
}
function takeWhile(f, xs) {
    return delay(function () {
        var iter = xs[Symbol.iterator]();
        return unfold(function (i) {
            var cur = iter.next();
            if (!cur.done && f(cur.value)) {
                return [cur.value, null];
            }
            return void 0;
        }, 0);
    });
}
function tryFind(f, xs, defaultValue) {
    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
        var cur = iter.next();
        if (cur.done) {
            break;
        }
        if (f(cur.value, i)) {
            return Object(__WEBPACK_IMPORTED_MODULE_2__Option__["b" /* makeSome */])(cur.value);
        }
    }
    return defaultValue === void 0 ? null : Object(__WEBPACK_IMPORTED_MODULE_2__Option__["b" /* makeSome */])(defaultValue);
}
function find(f, xs) {
    return __failIfNone(tryFind(f, xs));
}
function tryFindBack(f, xs, defaultValue) {
    var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : Array.from(xs);
    return tryFind(f, arr.reverse(), defaultValue);
}
function findBack(f, xs) {
    return __failIfNone(tryFindBack(f, xs));
}
function tryFindIndex(f, xs) {
    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
        var cur = iter.next();
        if (cur.done) {
            break;
        }
        if (f(cur.value, i)) {
            return i;
        }
    }
    return null;
}
function findIndex(f, xs) {
    return __failIfNone(tryFindIndex(f, xs));
}
function tryFindIndexBack(f, xs) {
    var arr = Array.isArray(xs) || ArrayBuffer.isView(xs) ? xs.slice(0) : Array.from(xs);
    for (var i = arr.length - 1; i >= 0; i--) {
        if (f(arr[i], i)) {
            return i;
        }
    }
    return null;
}
function findIndexBack(f, xs) {
    return __failIfNone(tryFindIndexBack(f, xs));
}
function tryPick(f, xs) {
    for (var i = 0, iter = xs[Symbol.iterator]();; i++) {
        var cur = iter.next();
        if (cur.done) {
            break;
        }
        var y = f(cur.value, i);
        if (y != null) {
            return y;
        }
    }
    return null;
}
function pick(f, xs) {
    return __failIfNone(tryPick(f, xs));
}
function unfold(f, fst) {
    return _defineProperty({}, Symbol.iterator, function () {
        // Capture a copy of the first value in the closure
        // so the sequence is restarted every time, see #1230
        var acc = fst;
        return {
            next: function next() {
                var res = f(acc);
                if (res != null) {
                    acc = res[1];
                    return { done: false, value: res[0] };
                }
                return { done: true };
            }
        };
    });
}
function zip(xs, ys) {
    return map2(function (x, y) {
        return [x, y];
    }, xs, ys);
}
function zip3(xs, ys, zs) {
    return map3(function (x, y, z) {
        return [x, y, z];
    }, xs, ys, zs);
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ofArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Util__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





// This module is split from List.ts to prevent cyclic dependencies
function ofArray(args, base) {
    var acc = base || new List();
    for (var i = args.length - 1; i >= 0; i--) {
        acc = new List(args[i], acc);
    }
    return acc;
}

var List = function () {
    function List(head, tail) {
        _classCallCheck(this, List);

        this.head = head;
        this.tail = tail;
    }

    _createClass(List, [{
        key: "ToString",
        value: function ToString() {
            return "[" + Array.from(this).map(function (x) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__Util__["d" /* toString */])(x);
            }).join("; ") + "]";
        }
    }, {
        key: "Equals",
        value: function Equals(other) {
            // Optimization if they are referencially equal
            if (this === other) {
                return true;
            } else {
                var cur1 = this;
                var cur2 = other;
                while (Object(__WEBPACK_IMPORTED_MODULE_1__Util__["b" /* equals */])(cur1.head, cur2.head)) {
                    cur1 = cur1.tail;
                    cur2 = cur2.tail;
                    if (cur1 == null) {
                        return cur2 == null;
                    }
                }
                return false;
            }
        }
    }, {
        key: "CompareTo",
        value: function CompareTo(other) {
            // Optimization if they are referencially equal
            if (this === other) {
                return 0;
            } else {
                var cur1 = this;
                var cur2 = other;
                var res = Object(__WEBPACK_IMPORTED_MODULE_1__Util__["a" /* compare */])(cur1.head, cur2.head);
                while (res === 0) {
                    cur1 = cur1.tail;
                    cur2 = cur2.tail;
                    if (cur1 == null) {
                        return cur2 == null ? 0 : -1;
                    }
                    res = Object(__WEBPACK_IMPORTED_MODULE_1__Util__["a" /* compare */])(cur1.head, cur2.head);
                }
                return res;
            }
        }
    }, {
        key: Symbol.iterator,
        value: function value() {
            var cur = this;
            return {
                next: function next() {
                    var tmp = cur;
                    cur = cur.tail;
                    return { done: tmp.tail == null, value: tmp.head };
                }
            };
        }
        //   append(ys: List<T>): List<T> {
        //     return append(this, ys);
        //   }
        //   choose<U>(f: (x: T) => U, xs: List<T>): List<U> {
        //     return choose(f, this);
        //   }
        //   collect<U>(f: (x: T) => List<U>): List<U> {
        //     return collect(f, this);
        //   }
        //   filter(f: (x: T) => boolean): List<T> {
        //     return filter(f, this);
        //   }
        //   where(f: (x: T) => boolean): List<T> {
        //     return filter(f, this);
        //   }
        //   map<U>(f: (x: T) => U): List<U> {
        //     return map(f, this);
        //   }
        //   mapIndexed<U>(f: (i: number, x: T) => U): List<U> {
        //     return mapIndexed(f, this);
        //   }
        //   partition(f: (x: T) => boolean): [List<T>, List<T>] {
        //     return partition(f, this) as [List<T>, List<T>];
        //   }
        //   reverse(): List<T> {
        //     return reverse(this);
        //   }
        //   slice(lower: number, upper: number): List<T> {
        //     return slice(lower, upper, this);
        //   }

    }, {
        key: __WEBPACK_IMPORTED_MODULE_0__Symbol__["a" /* default */].reflection,
        value: function value() {
            return {
                type: "Microsoft.FSharp.Collections.FSharpList",
                interfaces: ["System.IEquatable", "System.IComparable"]
            };
        }
    }, {
        key: "length",
        get: function get() {
            var cur = this;
            var acc = 0;
            while (cur.tail != null) {
                cur = cur.tail;
                acc++;
            }
            return acc;
        }
    }]);

    return List;
}();

/* harmony default export */ __webpack_exports__["a"] = (List);

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export offsetRegex */
/* unused harmony export padWithZeros */
/* unused harmony export offsetToString */
/* unused harmony export toHalfUTCString */
/* unused harmony export toStringWithOffset */
/* unused harmony export toStringWithKind */
/* harmony export (immutable) */ __webpack_exports__["b"] = toString;
/* unused harmony export default */
/* unused harmony export minValue */
/* unused harmony export maxValue */
/* unused harmony export parseRaw */
/* unused harmony export parse */
/* unused harmony export tryParse */
/* unused harmony export offset */
/* unused harmony export create */
/* unused harmony export now */
/* unused harmony export utcNow */
/* unused harmony export today */
/* unused harmony export isLeapYear */
/* unused harmony export daysInMonth */
/* unused harmony export toUniversalTime */
/* unused harmony export toLocalTime */
/* unused harmony export timeOfDay */
/* unused harmony export date */
/* unused harmony export day */
/* unused harmony export hour */
/* unused harmony export millisecond */
/* unused harmony export minute */
/* unused harmony export month */
/* unused harmony export second */
/* unused harmony export year */
/* unused harmony export dayOfWeek */
/* unused harmony export dayOfYear */
/* unused harmony export add */
/* unused harmony export addDays */
/* unused harmony export addHours */
/* unused harmony export addMinutes */
/* unused harmony export addSeconds */
/* unused harmony export addMilliseconds */
/* unused harmony export addYears */
/* unused harmony export addMonths */
/* unused harmony export subtract */
/* unused harmony export toLongDateString */
/* unused harmony export toShortDateString */
/* unused harmony export toLongTimeString */
/* unused harmony export toShortTimeString */
/* unused harmony export equals */
/* harmony export (immutable) */ __webpack_exports__["a"] = compare;
/* unused harmony export compareTo */
/* unused harmony export op_Addition */
/* unused harmony export op_Subtraction */
/* unused harmony export isDaylightSavingTime */
var offsetRegex = /(?:Z|[+-](\d{2}):?(\d{2})?)$/;
function padWithZeros(i, length) {
    var str = i.toString(10);
    while (str.length < length) {
        str = "0" + str;
    }
    return str;
}
function offsetToString(offset) {
    var isMinus = offset < 0;
    offset = Math.abs(offset);
    var hours = ~~(offset / 3600000);
    var minutes = offset % 3600000 / 60000;
    return (isMinus ? "-" : "+") + padWithZeros(hours, 2) + ":" + padWithZeros(minutes, 2);
}
function toHalfUTCString(date, half) {
    var str = date.toISOString();
    return half === "first" ? str.substring(0, str.indexOf("T")) : str.substring(str.indexOf("T") + 1, str.length - 1);
}
function toISOString(d, utc) {
    if (utc) {
        return d.toISOString();
    } else {
        // JS Date is always local
        var printOffset = d.kind == null ? true : d.kind === 2 /* Local */;
        return padWithZeros(d.getFullYear(), 4) + "-" + padWithZeros(d.getMonth() + 1, 2) + "-" + padWithZeros(d.getDate(), 2) + "T" + padWithZeros(d.getHours(), 2) + ":" + padWithZeros(d.getMinutes(), 2) + ":" + padWithZeros(d.getSeconds(), 2) + "." + padWithZeros(d.getMilliseconds(), 3) + (printOffset ? offsetToString(d.getTimezoneOffset() * -60000) : "");
    }
}
function toISOStringWithOffset(dateWithOffset, offset) {
    var str = dateWithOffset.toISOString();
    return str.substring(0, str.length - 1) + offsetToString(offset);
}
function toStringWithCustomFormat(date, format, utc) {
    return format.replace(/(\w)\1*/g, function (match) {
        var rep = match;
        switch (match.substring(0, 1)) {
            case "y":
                var y = utc ? date.getUTCFullYear() : date.getFullYear();
                rep = match.length < 4 ? y % 100 : y;
                break;
            case "M":
                rep = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
                break;
            case "d":
                rep = utc ? date.getUTCDate() : date.getDate();
                break;
            case "H":
                rep = utc ? date.getUTCHours() : date.getHours();
                break;
            case "h":
                var h = utc ? date.getUTCHours() : date.getHours();
                rep = h > 12 ? h % 12 : h;
                break;
            case "m":
                rep = utc ? date.getUTCMinutes() : date.getMinutes();
                break;
            case "s":
                rep = utc ? date.getUTCSeconds() : date.getSeconds();
                break;
        }
        if (rep !== match && rep < 10 && match.length > 1) {
            rep = "0" + rep;
        }
        return rep;
    });
}
function toStringWithOffset(date, format) {
    var d = new Date(date.getTime() + date.offset);
    if (!format) {
        return d.toISOString().replace(/\.\d+/, "").replace(/[A-Z]|\.\d+/g, " ") + offsetToString(date.offset);
    } else if (format.length === 1) {
        switch (format) {
            case "D":
            case "d":
                return toHalfUTCString(d, "first");
            case "T":
            case "t":
                return toHalfUTCString(d, "second");
            case "O":
            case "o":
                return toISOStringWithOffset(d, date.offset);
            default:
                throw new Error("Unrecognized Date print format");
        }
    } else {
        return toStringWithCustomFormat(d, format, true);
    }
}
function toStringWithKind(date, format) {
    var utc = date.kind === 1 /* UTC */;
    if (!format) {
        return utc ? date.toUTCString() : date.toLocaleString();
    } else if (format.length === 1) {
        switch (format) {
            case "D":
            case "d":
                return utc ? toHalfUTCString(date, "first") : date.toLocaleDateString();
            case "T":
            case "t":
                return utc ? toHalfUTCString(date, "second") : date.toLocaleTimeString();
            case "O":
            case "o":
                return toISOString(date, utc);
            default:
                throw new Error("Unrecognized Date print format");
        }
    } else {
        return toStringWithCustomFormat(date, format, utc);
    }
}
function toString(date, format) {
    return date.offset != null ? toStringWithOffset(date, format) : toStringWithKind(date, format);
}
function DateTime(value, kind) {
    kind = kind == null ? 0 /* Unspecified */ : kind;
    var d = new Date(value);
    d.kind = kind | 0;
    return d;
}
function minValue() {
    // This is "0001-01-01T00:00:00.000Z", actual JS min value is -8640000000000000
    return DateTime(-62135596800000, 0 /* Unspecified */);
}
function maxValue() {
    // This is "9999-12-31T23:59:59.999Z", actual JS max value is 8640000000000000
    return DateTime(253402300799999, 0 /* Unspecified */);
}
function parseRaw(str) {
    var date = new Date(str);
    if (isNaN(date.getTime())) {
        // Check if this is a time-only string, which JS Date parsing cannot handle (see #1045)
        if (/^(?:[01]?\d|2[0-3]):(?:[0-5]?\d)(?::[0-5]?\d(?:\.\d+)?)?(?:\s*[AaPp][Mm])?$/.test(str)) {
            var d = new Date();
            date = new Date(d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() + " " + str);
        } else {
            throw new Error("The string is not a valid Date.");
        }
    }
    return date;
}
function parse(str) {
    var detectUTC = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var date = parseRaw(str);
    var offset = offsetRegex.exec(str);
    // .NET always parses DateTime as Local if there's offset info (even "Z")
    // Newtonsoft.Json uses UTC if the offset is "Z"
    var kind = offset != null ? detectUTC && offset[0] === "Z" ? 1 /* UTC */ : 2 /* Local */ : 0 /* Unspecified */;
    return DateTime(date.getTime(), kind);
}
function tryParse(v) {
    try {
        return [true, parse(v)];
    } catch (_err) {
        return [false, minValue()];
    }
}
function offset(date) {
    var date1 = date;
    return typeof date1.offset === "number" ? date1.offset : date.kind === 1 /* UTC */
    ? 0 : date.getTimezoneOffset() * -60000;
}
function create(year, month, day) {
    var h = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var m = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var s = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var ms = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    var kind = arguments[7];

    var dateValue = kind === 1 /* UTC */
    ? Date.UTC(year, month - 1, day, h, m, s, ms) : new Date(year, month - 1, day, h, m, s, ms).getTime();
    if (isNaN(dateValue)) {
        throw new Error("The parameters describe an unrepresentable Date.");
    }
    var date = DateTime(dateValue, kind);
    if (year <= 99) {
        date.setFullYear(year, month - 1, day);
    }
    return date;
}
function now() {
    return DateTime(Date.now(), 2 /* Local */);
}
function utcNow() {
    return DateTime(Date.now(), 1 /* UTC */);
}
function today() {
    return date(now());
}
function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function daysInMonth(year, month) {
    return month === 2 ? isLeapYear(year) ? 29 : 28 : month >= 8 ? month % 2 === 0 ? 31 : 30 : month % 2 === 0 ? 30 : 31;
}
function toUniversalTime(date) {
    return date.kind === 1 /* UTC */ ? date : DateTime(date.getTime(), 1 /* UTC */);
}
function toLocalTime(date) {
    return date.kind === 2 /* Local */ ? date : DateTime(date.getTime(), 2 /* Local */);
}
function timeOfDay(d) {
    return hour(d) * 3600000 + minute(d) * 60000 + second(d) * 1000 + millisecond(d);
}
function date(d) {
    return create(year(d), month(d), day(d), 0, 0, 0, 0, d.kind);
}
function day(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCDate() : d.getDate();
}
function hour(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCHours() : d.getHours();
}
function millisecond(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCMilliseconds() : d.getMilliseconds();
}
function minute(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCMinutes() : d.getMinutes();
}
function month(d) {
    return (d.kind === 1 /* UTC */ ? d.getUTCMonth() : d.getMonth()) + 1;
}
function second(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCSeconds() : d.getSeconds();
}
function year(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCFullYear() : d.getFullYear();
}
function dayOfWeek(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCDay() : d.getDay();
}
function dayOfYear(d) {
    var _year = year(d);
    var _month = month(d);
    var _day = day(d);
    for (var i = 1; i < _month; i++) {
        _day += daysInMonth(_year, i);
    }
    return _day;
}
function add(d, ts) {
    return DateTime(d.getTime() + ts, d.kind);
}
function addDays(d, v) {
    return DateTime(d.getTime() + v * 86400000, d.kind);
}
function addHours(d, v) {
    return DateTime(d.getTime() + v * 3600000, d.kind);
}
function addMinutes(d, v) {
    return DateTime(d.getTime() + v * 60000, d.kind);
}
function addSeconds(d, v) {
    return DateTime(d.getTime() + v * 1000, d.kind);
}
function addMilliseconds(d, v) {
    return DateTime(d.getTime() + v, d.kind);
}
function addYears(d, v) {
    var newMonth = month(d);
    var newYear = year(d) + v;
    var _daysInMonth = daysInMonth(newYear, newMonth);
    var newDay = Math.min(_daysInMonth, day(d));
    return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind);
}
function addMonths(d, v) {
    var newMonth = month(d) + v;
    var newMonth_ = 0;
    var yearOffset = 0;
    if (newMonth > 12) {
        newMonth_ = newMonth % 12;
        yearOffset = Math.floor(newMonth / 12);
        newMonth = newMonth_;
    } else if (newMonth < 1) {
        newMonth_ = 12 + newMonth % 12;
        yearOffset = Math.floor(newMonth / 12) + (newMonth_ === 12 ? -1 : 0);
        newMonth = newMonth_;
    }
    var newYear = year(d) + yearOffset;
    var _daysInMonth = daysInMonth(newYear, newMonth);
    var newDay = Math.min(_daysInMonth, day(d));
    return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind);
}
function subtract(d, that) {
    return typeof that === "number" ? DateTime(d.getTime() - that, d.kind) : d.getTime() - that.getTime();
}
function toLongDateString(d) {
    return d.toDateString();
}
function toShortDateString(d) {
    return d.toLocaleDateString();
}
function toLongTimeString(d) {
    return d.toLocaleTimeString();
}
function toShortTimeString(d) {
    return d.toLocaleTimeString().replace(/:\d\d(?!:)/, "");
}
function equals(d1, d2) {
    return d1.getTime() === d2.getTime();
}
function compare(x, y) {
    var xtime = x.getTime();
    var ytime = y.getTime();
    return xtime === ytime ? 0 : xtime < ytime ? -1 : 1;
}
var compareTo = compare;
function op_Addition(x, y) {
    return add(x, y);
}
function op_Subtraction(x, y) {
    return subtract(x, y);
}
function isDaylightSavingTime(x) {
    var jan = new Date(x.getFullYear(), 0, 1);
    var jul = new Date(x.getFullYear(), 6, 1);
    return isDST(jan.getTimezoneOffset(), jul.getTimezoneOffset(), x.getTimezoneOffset());
}
function isDST(janOffset, julOffset, tOffset) {
    return Math.min(janOffset, julOffset) === tOffset;
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fillStyles */
/* unused harmony export colors */
/* harmony export (immutable) */ __webpack_exports__["a"] = clearCanvas;
/* unused harmony export getRandomPointOnCanvas */
/* unused harmony export getPoint */
/* unused harmony export getShapeSizeLimits */
/* unused harmony export getRandomSmallNumber */
/* unused harmony export getRandomStyle */
/* unused harmony export drawRectangle */
/* unused harmony export drawCircle */
/* unused harmony export drawMethods */
/* harmony export (immutable) */ __webpack_exports__["b"] = drawRandomShape;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Utils_fs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_C_Users_petrnj50_nuget_packages_fable_core_1_3_8_fable_core_Option__ = __webpack_require__(12);


var fillStyles = ["hachure", "solid", "zigzag", "cross-hatch"];
var colors = ["red", "green", "yellow", "orange", "blue", "black", "white"];
function clearCanvas(roughCanvas) {
  var context = roughCanvas.canvas.getContext("2d");
  context.clearRect(0, 0, roughCanvas.canvas.width, roughCanvas.canvas.height);
}
function getRandomPointOnCanvas(roughCanvas) {
  var x = Object(__WEBPACK_IMPORTED_MODULE_0__Utils_fs__["a" /* getRandomInteger */])(0, ~~roughCanvas.canvas.width) | 0;
  var y = Object(__WEBPACK_IMPORTED_MODULE_0__Utils_fs__["a" /* getRandomInteger */])(0, ~~roughCanvas.canvas.height) | 0;
  return [x, y];
}
function getPoint(roughCanvas, point) {
  if (point == null) {
    return getRandomPointOnCanvas(roughCanvas);
  } else {
    return Object(__WEBPACK_IMPORTED_MODULE_1_C_Users_petrnj50_nuget_packages_fable_core_1_3_8_fable_core_Option__["a" /* getValue */])(point);
  }
}
function getShapeSizeLimits(roughCanvas) {
  var width = roughCanvas.canvas.width;
  var height = roughCanvas.canvas.height;
  var maxSide = ~~Math.floor(width * 0.2) | 0;
  var minSide = ~~Math.floor(width * 0.01) | 0;
  return [minSide, maxSide];
}
function getRandomSmallNumber() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__Utils_fs__["a" /* getRandomInteger */])(1, 5);
}
function getRandomStyle() {
  var style = {};
  style.fillStyle = Object(__WEBPACK_IMPORTED_MODULE_0__Utils_fs__["b" /* getRandomItemFromArray */])(fillStyles);
  style.fill = Object(__WEBPACK_IMPORTED_MODULE_0__Utils_fs__["b" /* getRandomItemFromArray */])(colors);
  style.stroke = Object(__WEBPACK_IMPORTED_MODULE_0__Utils_fs__["b" /* getRandomItemFromArray */])(colors);
  style.strokeWidth = getRandomSmallNumber() | 0;
  style.hachureGap = getRandomSmallNumber() | 0;
  style.roughness = getRandomSmallNumber() | 0;
  style.maxRandomnessOffset = getRandomSmallNumber() | 0;
  style.simplification = getRandomSmallNumber() | 0;
  style.hachureGap = Object(__WEBPACK_IMPORTED_MODULE_0__Utils_fs__["a" /* getRandomInteger */])(3, 20) | 0;
  style.hachureAngle = Object(__WEBPACK_IMPORTED_MODULE_0__Utils_fs__["a" /* getRandomInteger */])(0, 180) | 0;
  return style;
}
function drawRectangle(roughCanvas, point) {
  var patternInput = getShapeSizeLimits(roughCanvas);
  var patternInput_1 = getPoint(roughCanvas, point);
  return roughCanvas.rectangle(patternInput_1[0], patternInput_1[1], Object(__WEBPACK_IMPORTED_MODULE_0__Utils_fs__["a" /* getRandomInteger */])(patternInput[0], patternInput[1]), Object(__WEBPACK_IMPORTED_MODULE_0__Utils_fs__["a" /* getRandomInteger */])(patternInput[0], patternInput[1]), getRandomStyle());
}
function drawCircle(roughCanvas, point) {
  var patternInput = getShapeSizeLimits(roughCanvas);
  var patternInput_1 = getPoint(roughCanvas, point);
  return roughCanvas.circle(patternInput_1[0], patternInput_1[1], Object(__WEBPACK_IMPORTED_MODULE_0__Utils_fs__["a" /* getRandomInteger */])(patternInput[0], patternInput[1]), getRandomStyle());
}
var drawMethods = [drawRectangle, drawCircle];
function drawRandomShape(roughCanvas, point) {
  var method = Object(__WEBPACK_IMPORTED_MODULE_0__Utils_fs__["b" /* getRandomItemFromArray */])(drawMethods);
  return method(roughCanvas, point);
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getRandomInteger;
/* harmony export (immutable) */ __webpack_exports__["b"] = getRandomItemFromArray;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_petrnj50_nuget_packages_fable_core_1_3_8_fable_core_Util__ = __webpack_require__(0);

function getRandomInteger(minValue, maxValue) {
  var random = {};
  return Object(__WEBPACK_IMPORTED_MODULE_0_C_Users_petrnj50_nuget_packages_fable_core_1_3_8_fable_core_Util__["c" /* randomNext */])(minValue, maxValue) | 0;
}
function getRandomItemFromArray(array) {
  var index = getRandomInteger(0, array.length) | 0;
  return array[index];
}

/***/ })
/******/ ]);