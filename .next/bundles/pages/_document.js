module.exports =

        __NEXT_REGISTER_PAGE('/_document', function() {
          var comp = 
      webpackJsonp([1],{

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("./node_modules/@babel/runtime/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/get-iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/get-iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/is-iterable.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/is-iterable.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/map.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/map.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/define-property.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/define-property.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/get-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/get-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/keys.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/keys.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/createClass.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("./node_modules/babel-runtime/core-js/object/define-property.js");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/slicedToArray.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__("./node_modules/babel-runtime/core-js/is-iterable.js");

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__("./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/core-js/library/fn/map.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/core-js/library/modules/es6.object.to-string.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.string.iterator.js");
__webpack_require__("./node_modules/core-js/library/modules/web.dom.iterable.js");
__webpack_require__("./node_modules/core-js/library/modules/es6.map.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.to-json.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.of.js");
__webpack_require__("./node_modules/core-js/library/modules/es7.map.from.js");
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_core.js").Map;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.map.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__("./node_modules/core-js/library/modules/_collection-strong.js");
var validate = __webpack_require__("./node_modules/core-js/library/modules/_validate-collection.js");
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__("./node_modules/core-js/library/modules/_collection.js")(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.from.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-from.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.of.js":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__("./node_modules/core-js/library/modules/_set-collection-of.js")('Map');


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.map.to-json.js":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__("./node_modules/core-js/library/modules/_export.js");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__("./node_modules/core-js/library/modules/_collection-to-json.js")('Map') });


/***/ }),

/***/ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;

var _hyphenateStyleName = __webpack_require__("./node_modules/hyphenate-style-name/index.js");

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedValue;
var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/debounce/index.js":
/***/ (function(module, exports) {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */

module.exports = function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};


/***/ }),

/***/ "./node_modules/fbjs/lib/nativeRequestAnimationFrame.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var nativeRequestAnimationFrame = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || global.oRequestAnimationFrame || global.msRequestAnimationFrame;

module.exports = nativeRequestAnimationFrame;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/fbjs/lib/requestAnimationFrame.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var emptyFunction = __webpack_require__("./node_modules/fbjs/lib/emptyFunction.js");
var nativeRequestAnimationFrame = __webpack_require__("./node_modules/fbjs/lib/nativeRequestAnimationFrame.js");

var lastTime = 0;

var requestAnimationFrame = nativeRequestAnimationFrame || function (callback) {
  var currTime = Date.now();
  var timeDelay = Math.max(0, 16 - (currTime - lastTime));
  lastTime = currTime + timeDelay;
  return global.setTimeout(function () {
    callback(Date.now());
  }, timeDelay);
};

// Works around a rare bug in Safari 6 where the first request is never invoked.
requestAnimationFrame(emptyFunction);

module.exports = requestAnimationFrame;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/fbjs/lib/setImmediate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



// setimmediate adds setImmediate to the global. We want to make sure we export
// the actual function.

__webpack_require__("./node_modules/setimmediate/setImmediate.js");
module.exports = global.setImmediate;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/htmlescape/htmlescape.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Properly escape JSON for usage as an object literal inside of a `<script>` tag.
 * JS implementation of http://golang.org/pkg/encoding/json/#HTMLEscape
 * More info: http://timelessrepo.com/json-isnt-a-javascript-subset
 */



var ESCAPE_LOOKUP = {
  '&': '\\u0026',
  '>': '\\u003e',
  '<': '\\u003c',
  '\u2028': '\\u2028',
  '\u2029': '\\u2029'
};

var ESCAPE_REGEX = /[&><\u2028\u2029]/g;

function escaper(match) {
  return ESCAPE_LOOKUP[match];
}

module.exports = function(obj) {
  return JSON.stringify(obj).replace(ESCAPE_REGEX, escaper);
};

/***/

var TERMINATORS_LOOKUP = {
  '\u2028': '\\u2028',
  '\u2029': '\\u2029'
};

var TERMINATORS_REGEX = /[\u2028\u2029]/g;

function sanitizer(match) {
  return TERMINATORS_LOOKUP[match];
}

module.exports.sanitize = function(str) {
  return str.replace(TERMINATORS_REGEX, sanitizer);
};


/***/ }),

/***/ "./node_modules/hyphenate-style-name/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function hyphenateStyleName(string) {
    return string in cache
    ? cache[string]
    : cache[string] = string
      .replace(uppercasePattern, '-$&')
      .toLowerCase()
      .replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;


/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/createPrefixer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPrefixer;

var _prefixProperty = __webpack_require__("./node_modules/inline-style-prefixer/utils/prefixProperty.js");

var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

var _prefixValue = __webpack_require__("./node_modules/inline-style-prefixer/utils/prefixValue.js");

var _prefixValue2 = _interopRequireDefault(_prefixValue);

var _addNewValuesOnly = __webpack_require__("./node_modules/inline-style-prefixer/utils/addNewValuesOnly.js");

var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);

var _isObject = __webpack_require__("./node_modules/inline-style-prefixer/utils/isObject.js");

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;

  function prefixAll(style) {
    for (var property in style) {
      var value = style[property];

      // handle nested objects
      if ((0, _isObject2.default)(value)) {
        style[property] = prefixAll(value);
        // handle array values
      } else if (Array.isArray(value)) {
        var combinedValue = [];

        for (var i = 0, len = value.length; i < len; ++i) {
          var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
          (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
        }

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (combinedValue.length > 0) {
          style[property] = combinedValue;
        }
      } else {
        var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (_processedValue) {
          style[property] = _processedValue;
        }

        style = (0, _prefixProperty2.default)(prefixMap, property, style);
      }
    }

    return style;
  }

  return prefixAll;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/crossFade.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _isPrefixedValue = __webpack_require__("./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#search=cross-fade
var prefixes = ['-webkit-', ''];
function crossFade(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/cursor.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;
var prefixes = ['-webkit-', '-moz-', ''];

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/filter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _isPrefixedValue = __webpack_require__("./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-filter-function
var prefixes = ['-webkit-', ''];
function filter(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/flex.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = {
  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
};

function flex(property, value) {
  if (property === 'display' && values.hasOwnProperty(value)) {
    return values[value];
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/flexboxIE.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;
var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end'
};
var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msFlexPreferredSize'
};

function flexboxIE(property, value, style) {
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;
var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple',
  flex: 'box',
  'inline-flex': 'inline-box'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines',
  flexGrow: 'WebkitBoxFlex'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }
    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/gradient.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _isPrefixedValue = __webpack_require__("./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
    return prefixes.map(function (prefix) {
      return value.replace(values, function (grad) {
        return prefix + grad;
      });
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/imageSet.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _isPrefixedValue = __webpack_require__("./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-image-set
var prefixes = ['-webkit-', ''];
function imageSet(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/position.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/sizing.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;
var prefixes = ['-webkit-', '-moz-', ''];

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/static/plugins/transition.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = __webpack_require__("./node_modules/css-in-js-utils/lib/hyphenateProperty.js");

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedValue = __webpack_require__("./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _capitalizeString = __webpack_require__("./node_modules/inline-style-prefixer/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap);
    // if the property is already prefixed
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
    return outputValue;
  }
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/addNewValuesOnly.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addNewValuesOnly;
function addIfNew(list, value) {
  if (list.indexOf(value) === -1) {
    list.push(value);
  }
}

function addNewValuesOnly(list, values) {
  if (Array.isArray(values)) {
    for (var i = 0, len = values.length; i < len; ++i) {
      addIfNew(list, values[i]);
    }
  } else {
    addIfNew(list, values);
  }
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/capitalizeString.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalizeString;
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/isObject.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObject;
function isObject(value) {
  return value instanceof Object && !Array.isArray(value);
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/prefixProperty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixProperty;

var _capitalizeString = __webpack_require__("./node_modules/inline-style-prefixer/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var newStyle = {};
    var requiredPrefixes = prefixProperties[property];
    var capitalizedProperty = (0, _capitalizeString2.default)(property);
    var keys = Object.keys(style);
    for (var i = 0; i < keys.length; i++) {
      var styleProperty = keys[i];
      if (styleProperty === property) {
        for (var j = 0; j < requiredPrefixes.length; j++) {
          newStyle[requiredPrefixes[j] + capitalizedProperty] = style[property];
        }
      }
      newStyle[styleProperty] = style[styleProperty];
    }
    return newStyle;
  }
  return style;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/inline-style-prefixer/utils/prefixValue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixValue;
function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData);

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    if (processedValue) {
      return processedValue;
    }
  }
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/next/dist/server/document.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NextScript = exports.Main = exports.Head = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/extends.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _htmlescape = _interopRequireDefault(__webpack_require__("./node_modules/htmlescape/htmlescape.js"));

var _server = _interopRequireDefault(__webpack_require__("./node_modules/styled-jsx/server.js"));

/* eslint-disable */
var Fragment = _react.default.Fragment || function Fragment(_ref) {
  var children = _ref.children;
  return _react.default.createElement("div", null, children);
};

var Document =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Document, _Component);

  function Document() {
    (0, _classCallCheck2.default)(this, Document);
    return (0, _possibleConstructorReturn2.default)(this, (Document.__proto__ || (0, _getPrototypeOf.default)(Document)).apply(this, arguments));
  }

  (0, _createClass2.default)(Document, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        _documentProps: this.props
      };
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("html", null, _react.default.createElement(Head, null), _react.default.createElement("body", null, _react.default.createElement(Main, null), _react.default.createElement(NextScript, null)));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref2) {
      var renderPage = _ref2.renderPage;

      var _renderPage = renderPage(),
          html = _renderPage.html,
          head = _renderPage.head,
          errorHtml = _renderPage.errorHtml,
          chunks = _renderPage.chunks,
          buildManifest = _renderPage.buildManifest;

      var styles = (0, _server.default)();
      return {
        html: html,
        head: head,
        errorHtml: errorHtml,
        chunks: chunks,
        styles: styles,
        buildManifest: buildManifest
      };
    }
  }]);
  return Document;
}(_react.Component);

exports.default = Document;
Object.defineProperty(Document, "childContextTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    _documentProps: _propTypes.default.any
  }
});

var Head =
/*#__PURE__*/
function (_Component2) {
  (0, _inherits2.default)(Head, _Component2);

  function Head() {
    (0, _classCallCheck2.default)(this, Head);
    return (0, _possibleConstructorReturn2.default)(this, (Head.__proto__ || (0, _getPrototypeOf.default)(Head)).apply(this, arguments));
  }

  (0, _createClass2.default)(Head, [{
    key: "getChunkPreloadLink",
    value: function getChunkPreloadLink(filename) {
      var _context$_documentPro = this.context._documentProps,
          __NEXT_DATA__ = _context$_documentPro.__NEXT_DATA__,
          buildManifest = _context$_documentPro.buildManifest;
      var assetPrefix = __NEXT_DATA__.assetPrefix,
          buildId = __NEXT_DATA__.buildId;
      var files = buildManifest[filename];
      return files.map(function (file) {
        return _react.default.createElement("link", {
          key: filename,
          rel: "preload",
          href: "".concat(assetPrefix, "/_next/").concat(file),
          as: "script"
        });
      });
    }
  }, {
    key: "getPreloadMainLinks",
    value: function getPreloadMainLinks() {
      var dev = this.context._documentProps.dev;

      if (dev) {
        return (0, _toConsumableArray2.default)(this.getChunkPreloadLink('manifest.js')).concat((0, _toConsumableArray2.default)(this.getChunkPreloadLink('main.js')));
      } // In the production mode, we have a single asset with all the JS content.


      return (0, _toConsumableArray2.default)(this.getChunkPreloadLink('main.js'));
    }
  }, {
    key: "getPreloadDynamicChunks",
    value: function getPreloadDynamicChunks() {
      var _context$_documentPro2 = this.context._documentProps,
          chunks = _context$_documentPro2.chunks,
          __NEXT_DATA__ = _context$_documentPro2.__NEXT_DATA__;
      var assetPrefix = __NEXT_DATA__.assetPrefix;
      return chunks.filenames.map(function (chunk) {
        return _react.default.createElement("link", {
          key: chunk,
          rel: "preload",
          href: "".concat(assetPrefix, "/_next/webpack/chunks/").concat(chunk),
          as: "script"
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _context$_documentPro3 = this.context._documentProps,
          head = _context$_documentPro3.head,
          styles = _context$_documentPro3.styles,
          __NEXT_DATA__ = _context$_documentPro3.__NEXT_DATA__;
      var page = __NEXT_DATA__.page,
          pathname = __NEXT_DATA__.pathname,
          buildId = __NEXT_DATA__.buildId,
          assetPrefix = __NEXT_DATA__.assetPrefix;
      var pagePathname = getPagePathname(pathname);
      return _react.default.createElement("head", this.props, (head || []).map(function (h, i) {
        return _react.default.cloneElement(h, {
          key: h.key || i
        });
      }), page !== '/_error' && _react.default.createElement("link", {
        rel: "preload",
        href: "".concat(assetPrefix, "/_next/").concat(buildId, "/page").concat(pagePathname),
        as: "script"
      }), _react.default.createElement("link", {
        rel: "preload",
        href: "".concat(assetPrefix, "/_next/").concat(buildId, "/page/_app.js"),
        as: "script"
      }), _react.default.createElement("link", {
        rel: "preload",
        href: "".concat(assetPrefix, "/_next/").concat(buildId, "/page/_error.js"),
        as: "script"
      }), this.getPreloadDynamicChunks(), this.getPreloadMainLinks(), styles || null, this.props.children);
    }
  }]);
  return Head;
}(_react.Component);

exports.Head = Head;
Object.defineProperty(Head, "contextTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    _documentProps: _propTypes.default.any
  }
});

var Main =
/*#__PURE__*/
function (_Component3) {
  (0, _inherits2.default)(Main, _Component3);

  function Main() {
    (0, _classCallCheck2.default)(this, Main);
    return (0, _possibleConstructorReturn2.default)(this, (Main.__proto__ || (0, _getPrototypeOf.default)(Main)).apply(this, arguments));
  }

  (0, _createClass2.default)(Main, [{
    key: "render",
    value: function render() {
      var _context$_documentPro4 = this.context._documentProps,
          html = _context$_documentPro4.html,
          errorHtml = _context$_documentPro4.errorHtml;
      return _react.default.createElement(Fragment, null, _react.default.createElement("div", {
        id: "__next",
        dangerouslySetInnerHTML: {
          __html: html
        }
      }), _react.default.createElement("div", {
        id: "__next-error",
        dangerouslySetInnerHTML: {
          __html: errorHtml
        }
      }));
    }
  }]);
  return Main;
}(_react.Component);

exports.Main = Main;
Object.defineProperty(Main, "contextTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    _documentProps: _propTypes.default.any
  }
});

var NextScript =
/*#__PURE__*/
function (_Component4) {
  (0, _inherits2.default)(NextScript, _Component4);

  function NextScript() {
    (0, _classCallCheck2.default)(this, NextScript);
    return (0, _possibleConstructorReturn2.default)(this, (NextScript.__proto__ || (0, _getPrototypeOf.default)(NextScript)).apply(this, arguments));
  }

  (0, _createClass2.default)(NextScript, [{
    key: "getChunkScript",
    value: function getChunkScript(filename) {
      var additionalProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _context$_documentPro5 = this.context._documentProps,
          __NEXT_DATA__ = _context$_documentPro5.__NEXT_DATA__,
          buildManifest = _context$_documentPro5.buildManifest;
      var assetPrefix = __NEXT_DATA__.assetPrefix,
          buildId = __NEXT_DATA__.buildId;
      var files = buildManifest[filename];
      return files.map(function (file) {
        return _react.default.createElement("script", (0, _extends2.default)({
          key: filename,
          src: "".concat(assetPrefix, "/_next/").concat(file)
        }, additionalProps));
      });
    }
  }, {
    key: "getScripts",
    value: function getScripts() {
      var dev = this.context._documentProps.dev;

      if (dev) {
        return (0, _toConsumableArray2.default)(this.getChunkScript('manifest.js')).concat((0, _toConsumableArray2.default)(this.getChunkScript('main.js')));
      } // In the production mode, we have a single asset with all the JS content.
      // So, we can load the script with async


      return (0, _toConsumableArray2.default)(this.getChunkScript('main.js', {
        async: true
      }));
    }
  }, {
    key: "getDynamicChunks",
    value: function getDynamicChunks() {
      var _context$_documentPro6 = this.context._documentProps,
          chunks = _context$_documentPro6.chunks,
          __NEXT_DATA__ = _context$_documentPro6.__NEXT_DATA__;
      var assetPrefix = __NEXT_DATA__.assetPrefix;
      return _react.default.createElement(Fragment, null, chunks.filenames.map(function (chunk) {
        return _react.default.createElement("script", {
          async: true,
          key: chunk,
          src: "".concat(assetPrefix, "/_next/webpack/chunks/").concat(chunk)
        });
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _context$_documentPro7 = this.context._documentProps,
          staticMarkup = _context$_documentPro7.staticMarkup,
          __NEXT_DATA__ = _context$_documentPro7.__NEXT_DATA__,
          chunks = _context$_documentPro7.chunks;
      var page = __NEXT_DATA__.page,
          pathname = __NEXT_DATA__.pathname,
          buildId = __NEXT_DATA__.buildId,
          assetPrefix = __NEXT_DATA__.assetPrefix;
      var pagePathname = getPagePathname(pathname);
      __NEXT_DATA__.chunks = chunks.names;
      return _react.default.createElement(Fragment, null, staticMarkup ? null : _react.default.createElement("script", {
        nonce: this.props.nonce,
        dangerouslySetInnerHTML: {
          __html: "\n          __NEXT_DATA__ = ".concat((0, _htmlescape.default)(__NEXT_DATA__), "\n          module={}\n          __NEXT_LOADED_PAGES__ = []\n          __NEXT_LOADED_CHUNKS__ = []\n\n          __NEXT_REGISTER_PAGE = function (route, fn) {\n            __NEXT_LOADED_PAGES__.push({ route: route, fn: fn })\n          }\n\n          __NEXT_REGISTER_CHUNK = function (chunkName, fn) {\n            __NEXT_LOADED_CHUNKS__.push({ chunkName: chunkName, fn: fn })\n          }\n\n          ").concat(page === '_error' && "\n          __NEXT_REGISTER_PAGE(".concat((0, _htmlescape.default)(pathname), ", function() {\n            var error = new Error('Page does not exist: ").concat((0, _htmlescape.default)(pathname), "')\n            error.statusCode = 404\n\n            return { error: error }\n          })\n          "), "\n        ")
        }
      }), page !== '/_error' && _react.default.createElement("script", {
        async: true,
        id: "__NEXT_PAGE__".concat(pathname),
        src: "".concat(assetPrefix, "/_next/").concat(buildId, "/page").concat(pagePathname)
      }), _react.default.createElement("script", {
        async: true,
        id: "__NEXT_PAGE__/_app",
        src: "".concat(assetPrefix, "/_next/").concat(buildId, "/page/_app.js")
      }), _react.default.createElement("script", {
        async: true,
        id: "__NEXT_PAGE__/_error",
        src: "".concat(assetPrefix, "/_next/").concat(buildId, "/page/_error.js")
      }), staticMarkup ? null : this.getDynamicChunks(), staticMarkup ? null : this.getScripts());
    }
  }]);
  return NextScript;
}(_react.Component);

exports.NextScript = NextScript;
Object.defineProperty(NextScript, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    nonce: _propTypes.default.string
  }
});
Object.defineProperty(NextScript, "contextTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    _documentProps: _propTypes.default.any
  }
});

function getPagePathname(pathname) {
  if (pathname === '/') {
    return '/index.js';
  }

  return "".concat(pathname, ".js");
}

/***/ }),

/***/ "./node_modules/next/document.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/server/document.js")


/***/ }),

/***/ "./node_modules/normalize-css-color/index.js":
/***/ (function(module, exports) {

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

function normalizeColor(color) {
  var match;

  if (typeof color === 'number') {
    if (color >>> 0 === color && color >= 0 && color <= 0xffffffff) {
      return color;
    }
    return null;
  }

  // Ordered based on occurrences on Facebook codebase
  if ((match = matchers.hex6.exec(color))) {
    return parseInt(match[1] + 'ff', 16) >>> 0;
  }

  if (names.hasOwnProperty(color)) {
    return names[color];
  }

  if ((match = matchers.rgb.exec(color))) {
    return (
        parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        0x000000ff // a
      ) >>> 0;
  }

  if ((match = matchers.rgba.exec(color))) {
    return (
        parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        parse1(match[4]) // a
      ) >>> 0;
  }

  if ((match = matchers.hex3.exec(color))) {
    return parseInt(
        match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        'ff', // a
        16
      ) >>> 0;
  }

  // https://drafts.csswg.org/css-color-4/#hex-notation
  if ((match = matchers.hex8.exec(color))) {
    return parseInt(match[1], 16) >>> 0;
  }

  if ((match = matchers.hex4.exec(color))) {
    return parseInt(
        match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        match[4] + match[4], // a
        16
      ) >>> 0;
  }

  if ((match = matchers.hsl.exec(color))) {
    return (
        hslToRgb(
          parse360(match[1]), // h
          parsePercentage(match[2]), // s
          parsePercentage(match[3]) // l
        ) |
        0x000000ff // a
      ) >>> 0;
  }

  if ((match = matchers.hsla.exec(color))) {
    return (
        hslToRgb(
          parse360(match[1]), // h
          parsePercentage(match[2]), // s
          parsePercentage(match[3]) // l
        ) |
        parse1(match[4]) // a
      ) >>> 0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}

function hslToRgb(h, s, l) {
  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var p = 2 * l - q;
  var r = hue2rgb(p, q, h + 1 / 3);
  var g = hue2rgb(p, q, h);
  var b = hue2rgb(p, q, h - 1 / 3);

  return (
    Math.round(r * 255) << 24 |
    Math.round(g * 255) << 16 |
    Math.round(b * 255) << 8
  );
}

// var INTEGER = '[-+]?\\d+';
var NUMBER = '[-+]?\\d*\\.?\\d+';
var PERCENTAGE = NUMBER + '%';

function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
}

function call() {
  return '\\(\\s*(' + toArray(arguments).join(')\\s*,\\s*(') + ')\\s*\\)';
}

var matchers = {
  rgb: new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER)),
  rgba: new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER)),
  hsl: new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE)),
  hsla: new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER)),
  hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#([0-9a-fA-F]{6})$/,
  hex8: /^#([0-9a-fA-F]{8})$/,
};

function parse255(str) {
  var int = parseInt(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 255) {
    return 255;
  }
  return int;
}

function parse360(str) {
  var int = parseFloat(str);
  return (((int % 360) + 360) % 360) / 360;
}

function parse1(str) {
  var num = parseFloat(str);
  if (num < 0) {
    return 0;
  }
  if (num > 1) {
    return 255;
  }
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  var int = parseFloat(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 100) {
    return 1;
  }
  return int / 100;
}

var names = {
  transparent: 0x00000000,

  // http://www.w3.org/TR/css3-color/#svg-color
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff,
};

function rgba(colorInt) {
  var r = Math.round(((colorInt & 0xff000000) >>> 24));
  var g = Math.round(((colorInt & 0x00ff0000) >>> 16));
  var b = Math.round(((colorInt & 0x0000ff00) >>> 8));
  var a = ((colorInt & 0x000000ff) >>> 0) / 255;
  return {
    r: r,
    g: g,
    b: b,
    a: a,
  };
};

normalizeColor.rgba = rgba;

module.exports = normalizeColor;


/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/AppRegistry/AppContainer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _StyleSheet = __webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js");

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _View = __webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js");

var _View2 = _interopRequireDefault(_View);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016-present, Nicolas Gallagher.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This source code is licensed under the BSD-style license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var AppContainer = function (_Component) {
  _inherits(AppContainer, _Component);

  function AppContainer() {
    var _temp, _this, _ret;

    _classCallCheck(this, AppContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { mainKey: 1 }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  AppContainer.prototype.getChildContext = function getChildContext() {
    return {
      rootTag: this.props.rootTag
    };
  };

  AppContainer.prototype.render = function render() {
    return _react2.default.createElement(
      _View2.default,
      { pointerEvents: 'box-none', style: [styles.appContainer, _StyleSheet2.default.absoluteFill] },
      _react2.default.createElement(_View2.default, {
        children: this.props.children,
        key: this.state.mainKey,
        pointerEvents: 'box-none',
        style: styles.appContainer
      })
    );
  };

  return AppContainer;
}(_react.Component);

AppContainer.childContextTypes = {
  rootTag: _propTypes.any
};
exports.default = AppContainer;
AppContainer.propTypes =  true ? {
  children: _propTypes.node,
  rootTag: _propTypes.any.isRequired
} : {};


var styles = _StyleSheet2.default.create({
  /**
   * Ensure that the application covers the whole screen.
   */
  appContainer: {
    flex: 1
  }
});

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/AppRegistry/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _unmountComponentAtNode = __webpack_require__("./node_modules/react-native-web/dist/exports/unmountComponentAtNode/index.js");

var _unmountComponentAtNode2 = _interopRequireDefault(_unmountComponentAtNode);

var _renderApplication = __webpack_require__("./node_modules/react-native-web/dist/exports/AppRegistry/renderApplication.js");

var _renderApplication2 = _interopRequireDefault(_renderApplication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright (c) 2015-present, Nicolas Gallagher.
                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                           * All rights reserved.
                                                                                                                                                           *
                                                                                                                                                           * This source code is licensed under the BSD-style license found in the
                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                           *
                                                                                                                                                           * @providesModule AppRegistry
                                                                                                                                                           * 
                                                                                                                                                           */

var emptyObject = {};
var runnables = {};

/**
 * `AppRegistry` is the JS entry point to running all React Native apps.
 */
var AppRegistry = function () {
  function AppRegistry() {
    _classCallCheck(this, AppRegistry);
  }

  AppRegistry.getAppKeys = function getAppKeys() {
    return Object.keys(runnables);
  };

  AppRegistry.getApplication = function getApplication(appKey, appParameters) {
    (0, _invariant2.default)(runnables[appKey] && runnables[appKey].getApplication, 'Application ' + appKey + ' has not been registered. ' + 'This is either due to an import error during initialization or failure to call AppRegistry.registerComponent.');

    return runnables[appKey].getApplication(appParameters);
  };

  AppRegistry.registerComponent = function registerComponent(appKey, getComponentFunc) {
    runnables[appKey] = {
      getApplication: function getApplication() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyObject,
            initialProps = _ref.initialProps;

        return (0, _renderApplication.getApplication)(getComponentFunc(), initialProps);
      },
      run: function run(_ref2) {
        var _ref2$initialProps = _ref2.initialProps,
            initialProps = _ref2$initialProps === undefined ? emptyObject : _ref2$initialProps,
            rootTag = _ref2.rootTag;
        return (0, _renderApplication2.default)(getComponentFunc(), initialProps, rootTag);
      }
    };
    return appKey;
  };

  AppRegistry.registerConfig = function registerConfig(config) {
    config.forEach(function (_ref3) {
      var appKey = _ref3.appKey,
          component = _ref3.component,
          run = _ref3.run;

      if (run) {
        AppRegistry.registerRunnable(appKey, run);
      } else {
        (0, _invariant2.default)(component, 'No component provider passed in');
        AppRegistry.registerComponent(appKey, component);
      }
    });
  };

  // TODO: fix style sheet creation when using this method


  AppRegistry.registerRunnable = function registerRunnable(appKey, run) {
    runnables[appKey] = { run: run };
    return appKey;
  };

  AppRegistry.runApplication = function runApplication(appKey, appParameters) {
    var isDevelopment = "development" !== 'production';
    var params = Object.assign({}, appParameters);
    params.rootTag = '#' + params.rootTag.id;

    console.log('Running application "' + appKey + '" with appParams: ' + JSON.stringify(params) + '. ' + ('development-level warnings are ' + (isDevelopment ? 'ON' : 'OFF') + ', ') + ('performance optimizations are ' + (isDevelopment ? 'OFF' : 'ON')));

    (0, _invariant2.default)(runnables[appKey] && runnables[appKey].run, 'Application "' + appKey + '" has not been registered. ' + 'This is either due to an import error during initialization or failure to call AppRegistry.registerComponent.');

    runnables[appKey].run(appParameters);
  };

  AppRegistry.unmountApplicationComponentAtRootTag = function unmountApplicationComponentAtRootTag(rootTag) {
    (0, _unmountComponentAtNode2.default)(rootTag);
  };

  return AppRegistry;
}();

exports.default = AppRegistry;

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/AppRegistry/renderApplication.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = renderApplication;
exports.getApplication = getApplication;

var _AppContainer = __webpack_require__("./node_modules/react-native-web/dist/exports/AppRegistry/AppContainer.js");

var _AppContainer2 = _interopRequireDefault(_AppContainer);

var _invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _hydrate = __webpack_require__("./node_modules/react-native-web/dist/modules/hydrate/index.js");

var _hydrate2 = _interopRequireDefault(_hydrate);

var _render = __webpack_require__("./node_modules/react-native-web/dist/exports/render/index.js");

var _render2 = _interopRequireDefault(_render);

var _styleResolver = __webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/styleResolver.js");

var _styleResolver2 = _interopRequireDefault(_styleResolver);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Nicolas Gallagher.
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var renderFn =  true ? _render2.default : _hydrate2.default;

function renderApplication(RootComponent, initialProps, rootTag) {
  (0, _invariant2.default)(rootTag, 'Expect to have a valid rootTag, instead got ', rootTag);

  renderFn(_react2.default.createElement(
    _AppContainer2.default,
    { rootTag: rootTag },
    _react2.default.createElement(RootComponent, initialProps)
  ), rootTag);
}

function getApplication(RootComponent, initialProps) {
  var element = _react2.default.createElement(
    _AppContainer2.default,
    { rootTag: {} },
    _react2.default.createElement(RootComponent, initialProps)
  );
  // Don't escape CSS text
  var getStyleElement = function getStyleElement() {
    var sheet = _styleResolver2.default.getStyleSheet();
    return _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: sheet.textContent }, id: sheet.id });
  };
  return { element: element, getStyleElement: getStyleElement };
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/ColorPropType/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ColorPropType
 * @noflow
 */

var isWebColor = function isWebColor(color) {
  return color === 'currentcolor' || color === 'inherit' || color.indexOf('var(') === 0;
};

var colorPropType = function colorPropType(isRequired, props, propName, componentName, location, propFullName) {
  var normalizeColor = __webpack_require__("./node_modules/normalize-css-color/index.js");
  var color = props[propName];
  if (color === undefined || color === null) {
    if (isRequired) {
      return new Error('Required ' + location + ' `' + (propFullName || propName) + '` was not specified in `' + componentName + '`.');
    }
    return;
  }

  if (typeof color === 'number') {
    // Developers should not use a number, but we are using the prop type
    // both for user provided colors and for transformed ones. This isn't ideal
    // and should be fixed but will do for now...
    return;
  }

  if (typeof color === 'string' && isWebColor(color)) {
    // Web supports additional color keywords and custom property values. Ignore them.
    return;
  }

  if (normalizeColor(color) === null) {
    return new Error('Invalid ' + location + ' `' + (propFullName || propName) + '` supplied to `' + componentName + '`: ' + color + '\n' + 'Valid color formats are\n  - \'#f0f\' (#rgb)\n  - \'#f0fc\' (#rgba)\n  - \'#ff00ff\' (#rrggbb)\n  - \'#ff00ff00\' (#rrggbbaa)\n  - \'rgb(255, 255, 255)\'\n  - \'rgba(255, 255, 255, 1.0)\'\n  - \'hsl(360, 100%, 100%)\'\n  - \'hsla(360, 100%, 100%, 1.0)\'\n  - \'transparent\'\n  - \'red\'\n  - 0xff00ff00 (0xrrggbbaa)\n');
  }
};

var ColorPropType = void 0;

if (true) {
  ColorPropType = colorPropType.bind(null, false /* isRequired */);
  ColorPropType.isRequired = colorPropType.bind(null, true /* isRequired */);
} else {
  ColorPropType = function ColorPropType() {};
}

exports.default = ColorPropType;

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/EdgeInsetsPropType/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createStrictShapeTypeChecker = __webpack_require__("./node_modules/react-native-web/dist/modules/createStrictShapeTypeChecker/index.js");

var _createStrictShapeTypeChecker2 = _interopRequireDefault(_createStrictShapeTypeChecker);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EdgeInsetsPropType
 * 
 */

var EdgeInsetsPropType = (0, _createStrictShapeTypeChecker2.default)({
  top: _propTypes.number,
  left: _propTypes.number,
  bottom: _propTypes.number,
  right: _propTypes.number
});

exports.default = EdgeInsetsPropType;

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/I18nManager/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ExecutionEnvironment = __webpack_require__("./node_modules/fbjs/lib/ExecutionEnvironment.js");

var _ExecutionEnvironment2 = _interopRequireDefault(_ExecutionEnvironment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isPreferredLanguageRTL = false; /**
                                     * Copyright (c) 2016-present, Nicolas Gallagher.
                                     * Copyright (c) 2015-present, Facebook, Inc.
                                     * All rights reserved.
                                     *
                                     * This source code is licensed under the BSD-style license found in the
                                     * LICENSE file in the root directory of this source tree.
                                     *
                                     * @providesModule I18nManager
                                     * 
                                     */

var isRTLAllowed = true;
var isRTLForced = false;

var isRTL = function isRTL() {
  if (isRTLForced) {
    return true;
  }
  return isRTLAllowed && isPreferredLanguageRTL;
};

var onChange = function onChange() {
  if (_ExecutionEnvironment2.default.canUseDOM) {
    if (document.documentElement && document.documentElement.setAttribute) {
      document.documentElement.setAttribute('dir', isRTL() ? 'rtl' : 'ltr');
    }
  }
};

var I18nManager = {
  allowRTL: function allowRTL(bool) {
    isRTLAllowed = bool;
    onChange();
  },
  forceRTL: function forceRTL(bool) {
    isRTLForced = bool;
    onChange();
  },
  setPreferredLanguageRTL: function setPreferredLanguageRTL(bool) {
    isPreferredLanguageRTL = bool;
    onChange();
  },

  get isRTL() {
    return isRTL();
  }
};

exports.default = I18nManager;

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/Image/ImageResizeMode.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var ImageResizeMode = {
  center: 'center',
  contain: 'contain',
  cover: 'cover',
  none: 'none',
  repeat: 'repeat',
  stretch: 'stretch'
};

exports.default = ImageResizeMode;

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/Image/ImageStylePropTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _BorderPropTypes = __webpack_require__("./node_modules/react-native-web/dist/modules/BorderPropTypes/index.js");

var _BorderPropTypes2 = _interopRequireDefault(_BorderPropTypes);

var _ColorPropType = __webpack_require__("./node_modules/react-native-web/dist/exports/ColorPropType/index.js");

var _ColorPropType2 = _interopRequireDefault(_ColorPropType);

var _ImageResizeMode = __webpack_require__("./node_modules/react-native-web/dist/exports/Image/ImageResizeMode.js");

var _ImageResizeMode2 = _interopRequireDefault(_ImageResizeMode);

var _LayoutPropTypes = __webpack_require__("./node_modules/react-native-web/dist/modules/LayoutPropTypes/index.js");

var _LayoutPropTypes2 = _interopRequireDefault(_LayoutPropTypes);

var _ShadowPropTypes = __webpack_require__("./node_modules/react-native-web/dist/modules/ShadowPropTypes/index.js");

var _ShadowPropTypes2 = _interopRequireDefault(_ShadowPropTypes);

var _TransformPropTypes = __webpack_require__("./node_modules/react-native-web/dist/modules/TransformPropTypes/index.js");

var _TransformPropTypes2 = _interopRequireDefault(_TransformPropTypes);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageStylePropTypes = Object.assign({}, _BorderPropTypes2.default, _LayoutPropTypes2.default, _ShadowPropTypes2.default, _TransformPropTypes2.default, {
  backgroundColor: _ColorPropType2.default,
  opacity: _propTypes.number,
  resizeMode: (0, _propTypes.oneOf)(Object.keys(_ImageResizeMode2.default)),
  /**
   * @platform unsupported
   */
  overlayColor: _propTypes.string,
  tintColor: _ColorPropType2.default,
  /**
   * @platform web
   */
  boxShadow: _propTypes.string
});

exports.default = ImageStylePropTypes;

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/ReactNativeStyleResolver.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ExecutionEnvironment = __webpack_require__("./node_modules/fbjs/lib/ExecutionEnvironment.js");

var _createReactDOMStyle = __webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/createReactDOMStyle.js");

var _createReactDOMStyle2 = _interopRequireDefault(_createReactDOMStyle);

var _flattenArray = __webpack_require__("./node_modules/react-native-web/dist/modules/flattenArray/index.js");

var _flattenArray2 = _interopRequireDefault(_flattenArray);

var _flattenStyle = __webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/flattenStyle.js");

var _flattenStyle2 = _interopRequireDefault(_flattenStyle);

var _I18nManager = __webpack_require__("./node_modules/react-native-web/dist/exports/I18nManager/index.js");

var _I18nManager2 = _interopRequireDefault(_I18nManager);

var _i18nStyle = __webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/i18nStyle.js");

var _i18nStyle2 = _interopRequireDefault(_i18nStyle);

var _prefixStyles = __webpack_require__("./node_modules/react-native-web/dist/modules/prefixStyles/index.js");

var _StyleSheetManager = __webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/StyleSheetManager.js");

var _StyleSheetManager2 = _interopRequireDefault(_StyleSheetManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright (c) 2016-present, Nicolas Gallagher.
                                                                                                                                                           * All rights reserved.
                                                                                                                                                           *
                                                                                                                                                           * This source code is licensed under the BSD-style license found in the
                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                           *
                                                                                                                                                           * WARNING: changes to this file in particular can cause significant changes to
                                                                                                                                                           * the results of render performance benchmarks.
                                                                                                                                                           *
                                                                                                                                                           * @noflow
                                                                                                                                                           */

var emptyObject = {};

var ReactNativeStyleResolver = function () {
  ReactNativeStyleResolver.prototype._init = function _init() {
    this.cache = { ltr: {}, rtl: {} };
    this.injectedCache = { ltr: {}, rtl: {} };
    this.styleSheetManager = new _StyleSheetManager2.default();
  };

  function ReactNativeStyleResolver() {
    _classCallCheck(this, ReactNativeStyleResolver);

    this._init();
  }

  ReactNativeStyleResolver.prototype.getStyleSheet = function getStyleSheet() {
    // reset state on the server so critical css is always the result
    var sheet = this.styleSheetManager.getStyleSheet();
    if (!_ExecutionEnvironment.canUseDOM) {
      this._init();
    }
    return sheet;
  };

  ReactNativeStyleResolver.prototype._injectRegisteredStyle = function _injectRegisteredStyle(id) {
    var _this = this;

    var dir = _I18nManager2.default.isRTL ? 'rtl' : 'ltr';
    if (!this.injectedCache[dir][id]) {
      var style = (0, _flattenStyle2.default)(id);
      var domStyle = (0, _createReactDOMStyle2.default)((0, _i18nStyle2.default)(style));
      Object.keys(domStyle).forEach(function (styleProp) {
        var value = domStyle[styleProp];
        if (value != null) {
          _this.styleSheetManager.injectDeclaration(styleProp, value);
        }
      });
      this.injectedCache[dir][id] = true;
    }
  };

  /**
   * Resolves a React Native style object to DOM attributes
   */


  ReactNativeStyleResolver.prototype.resolve = function resolve(style) {
    if (!style) {
      return emptyObject;
    }

    // fast and cachable
    if (typeof style === 'number') {
      this._injectRegisteredStyle(style);
      var _key = createCacheKey(style);
      return this._resolveStyleIfNeeded(style, _key);
    }

    // resolve a plain RN style object
    if (!Array.isArray(style)) {
      return this._resolveStyleIfNeeded(style);
    }

    // flatten the style array
    // cache resolved props when all styles are registered
    // otherwise fallback to resolving
    var flatArray = (0, _flattenArray2.default)(style);
    var isArrayOfNumbers = true;
    for (var i = 0; i < flatArray.length; i++) {
      var id = flatArray[i];
      if (typeof id !== 'number') {
        isArrayOfNumbers = false;
      } else {
        this._injectRegisteredStyle(id);
      }
    }
    var key = isArrayOfNumbers ? createCacheKey(flatArray.join('-')) : null;
    return this._resolveStyleIfNeeded(flatArray, key);
  };

  /**
   * Resolves a React Native style object to DOM attributes, accounting for
   * the existing styles applied to the DOM node.
   *
   * To determine the next style, some of the existing DOM state must be
   * converted back into React Native styles.
   */


  ReactNativeStyleResolver.prototype.resolveWithNode = function resolveWithNode(rnStyleNext, node) {
    var _this2 = this;

    var _getDOMStyleInfo = getDOMStyleInfo(node),
        rdomClassList = _getDOMStyleInfo.classList,
        rdomStyle = _getDOMStyleInfo.style;
    // Convert the DOM classList back into a React Native form
    // Preserves unrecognized class names.


    var _rdomClassList$reduce = rdomClassList.reduce(function (styleProps, className) {
      var _styleSheetManager$ge = _this2.styleSheetManager.getDeclaration(className),
          prop = _styleSheetManager$ge.prop,
          value = _styleSheetManager$ge.value;

      if (prop) {
        styleProps.style[prop] = value;
      } else {
        styleProps.classList.push(className);
      }
      return styleProps;
    }, { classList: [], style: {} }),
        rnClassList = _rdomClassList$reduce.classList,
        rnStyle = _rdomClassList$reduce.style;

    // Create next DOM style props from current and next RN styles


    var _resolve = this.resolve([_I18nManager2.default.isRTL ? (0, _i18nStyle2.default)(rnStyle) : rnStyle, rnStyleNext]),
        rdomClassListNext = _resolve.classList,
        rdomStyleNext = _resolve.style;

    // Final className
    // Add the current class names not managed by React Native


    var className = classListToString(rdomClassListNext.concat(rnClassList));

    // Final style
    // Next class names take priority over current inline styles
    var style = Object.assign({}, rdomStyle);
    rdomClassListNext.forEach(function (className) {
      var _styleSheetManager$ge2 = _this2.styleSheetManager.getDeclaration(className),
          prop = _styleSheetManager$ge2.prop;

      if (style[prop]) {
        style[prop] = '';
      }
    });
    // Next inline styles take priority over current inline styles
    Object.assign(style, rdomStyleNext);

    return { className: className, style: style };
  };

  /**
   * Resolves a React Native style object
   */


  ReactNativeStyleResolver.prototype._resolveStyle = function _resolveStyle(style) {
    var _this3 = this;

    var flatStyle = (0, _flattenStyle2.default)(style);
    var domStyle = (0, _createReactDOMStyle2.default)((0, _i18nStyle2.default)(flatStyle));

    var props = Object.keys(domStyle).reduce(function (props, styleProp) {
      var value = domStyle[styleProp];
      if (value != null) {
        var className = _this3.styleSheetManager.getClassName(styleProp, value);
        if (className) {
          props.classList.push(className);
        } else {
          // Certain properties and values are not transformed by 'createReactDOMStyle' as they
          // require more complex transforms into multiple CSS rules. Here we assume that StyleManager
          // can bind these styles to a className, and prevent them becoming invalid inline-styles.
          if (styleProp === 'pointerEvents' || styleProp === 'placeholderTextColor' || styleProp === 'animationName') {
            var _className = _this3.styleSheetManager.injectDeclaration(styleProp, value);
            if (_className) {
              props.classList.push(_className);
            }
          } else {
            if (!props.style) {
              props.style = {};
            }
            // 4x slower render
            props.style[styleProp] = value;
          }
        }
      }
      return props;
    }, { classList: [] });

    props.className = classListToString(props.classList);
    if (props.style) {
      props.style = (0, _prefixStyles.prefixInlineStyles)(props.style);
    }
    return props;
  };

  /**
   * Caching layer over 'resolveStyle'
   */


  ReactNativeStyleResolver.prototype._resolveStyleIfNeeded = function _resolveStyleIfNeeded(style, key) {
    if (key) {
      var dir = _I18nManager2.default.isRTL ? 'rtl' : 'ltr';
      if (!this.cache[dir][key]) {
        // slow: convert style object to props and cache
        this.cache[dir][key] = this._resolveStyle(style);
      }
      return this.cache[dir][key];
    }
    return this._resolveStyle(style);
  };

  return ReactNativeStyleResolver;
}();

/**
 * Misc helpers
 */


exports.default = ReactNativeStyleResolver;
var createCacheKey = function createCacheKey(id) {
  var prefix = 'rn';
  return prefix + '-' + id;
};

var classListToString = function classListToString(list) {
  return list.join(' ').trim();
};

/**
 * Copies classList and style data from a DOM node
 */
var hyphenPattern = /-([a-z])/g;
var toCamelCase = function toCamelCase(str) {
  return str.replace(hyphenPattern, function (m) {
    return m[1].toUpperCase();
  });
};

var getDOMStyleInfo = function getDOMStyleInfo(node) {
  var nodeStyle = node.style;
  var classList = Array.prototype.slice.call(node.classList);
  var style = {};
  // DOM style is a CSSStyleDeclaration
  // https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration
  for (var i = 0; i < nodeStyle.length; i += 1) {
    var property = nodeStyle.item(i);
    if (property) {
      // DOM style uses hyphenated prop names and may include vendor prefixes
      // Transform back into React DOM style.
      style[toCamelCase(property)] = nodeStyle.getPropertyValue(property);
    }
  }
  return { classList: classList, style: style };
};

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/StyleSheet.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _flattenStyle = __webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/flattenStyle.js");

var _flattenStyle2 = _interopRequireDefault(_flattenStyle);

var _getHairlineWidth = __webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/getHairlineWidth.js");

var _getHairlineWidth2 = _interopRequireDefault(_getHairlineWidth);

var _ReactNativePropRegistry = __webpack_require__("./node_modules/react-native-web/dist/modules/ReactNativePropRegistry/index.js");

var _ReactNativePropRegistry2 = _interopRequireDefault(_ReactNativePropRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var absoluteFillObject = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}; /**
    * Copyright (c) 2016-present, Nicolas Gallagher.
    * All rights reserved.
    *
    * This source code is licensed under the BSD-style license found in the
    * LICENSE file in the root directory of this source tree.
    *
    * @providesModule StyleSheet
    * @noflow
    */

var absoluteFill = _ReactNativePropRegistry2.default.register(absoluteFillObject);

var StyleSheet = {
  absoluteFill: absoluteFill,
  absoluteFillObject: absoluteFillObject,
  compose: function compose(style1, style2) {
    if (style1 && style2) {
      return [style1, style2];
    } else {
      return style1 || style2;
    }
  },
  create: function create(styles) {
    var result = {};
    Object.keys(styles).forEach(function (key) {
      if (true) {
        var StyleSheetValidation = __webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/StyleSheetValidation.js").default;
        StyleSheetValidation.validateStyle(key, styles);
      }
      var id = styles[key] && _ReactNativePropRegistry2.default.register(styles[key]);
      result[key] = id;
    });
    return result;
  },

  flatten: _flattenStyle2.default,
  hairlineWidth: (0, _getHairlineWidth2.default)()
};

exports.default = StyleSheet;

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/StyleSheetManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createAtomicRules = __webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/createAtomicRules.js");

var _createAtomicRules2 = _interopRequireDefault(_createAtomicRules);

var _hash = __webpack_require__("./node_modules/react-native-web/dist/vendor/hash/index.js");

var _hash2 = _interopRequireDefault(_hash);

var _initialRules = __webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/initialRules.js");

var _initialRules2 = _interopRequireDefault(_initialRules);

var _WebStyleSheet = __webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/WebStyleSheet.js");

var _WebStyleSheet2 = _interopRequireDefault(_WebStyleSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright (c) 2016-present, Nicolas Gallagher.
                                                                                                                                                           * All rights reserved.
                                                                                                                                                           *
                                                                                                                                                           * This source code is licensed under the BSD-style license found in the
                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                           *
                                                                                                                                                           * @noflow
                                                                                                                                                           */

var emptyObject = {};
var STYLE_ELEMENT_ID = 'react-native-stylesheet';

var createClassName = function createClassName(prop, value) {
  var hashed = (0, _hash2.default)(prop + normalizeValue(value));
  return  true ? 'rn-' + prop + '-' + hashed : 'rn-' + hashed;
};

var normalizeValue = function normalizeValue(value) {
  return typeof value === 'object' ? JSON.stringify(value) : value;
};

var StyleSheetManager = function () {
  function StyleSheetManager() {
    var _this = this;

    _classCallCheck(this, StyleSheetManager);

    this._cache = {
      byClassName: {},
      byProp: {}
    };

    this._sheet = new _WebStyleSheet2.default(STYLE_ELEMENT_ID);
    _initialRules2.default.forEach(function (rule) {
      _this._sheet.insertRuleOnce(rule);
    });
  }

  StyleSheetManager.prototype.getClassName = function getClassName(prop, value) {
    var val = normalizeValue(value);
    var cache = this._cache.byProp;
    return cache[prop] && cache[prop].hasOwnProperty(val) && cache[prop][val];
  };

  StyleSheetManager.prototype.getDeclaration = function getDeclaration(className) {
    var cache = this._cache.byClassName;
    return cache[className] || emptyObject;
  };

  StyleSheetManager.prototype.getStyleSheet = function getStyleSheet() {
    var cssText = this._sheet.cssText;


    return {
      id: STYLE_ELEMENT_ID,
      textContent: cssText
    };
  };

  StyleSheetManager.prototype.injectDeclaration = function injectDeclaration(prop, value) {
    var _this2 = this;

    var val = normalizeValue(value);
    var className = this.getClassName(prop, val);
    if (!className) {
      className = createClassName(prop, val);
      this._addToCache(className, prop, val);
      var rules = (0, _createAtomicRules2.default)('.' + className, prop, value);
      rules.forEach(function (rule) {
        _this2._sheet.insertRuleOnce(rule);
      });
    }
    return className;
  };

  StyleSheetManager.prototype.injectKeyframe = function injectKeyframe() {
    // return identifier;
  };

  StyleSheetManager.prototype._addToCache = function _addToCache(className, prop, value) {
    var cache = this._cache;
    if (!cache.byProp[prop]) {
      cache.byProp[prop] = {};
    }
    cache.byProp[prop][value] = className;
    cache.byClassName[className] = { prop: prop, value: value };
  };

  return StyleSheetManager;
}();

exports.default = StyleSheetManager;

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/StyleSheetValidation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ImageStylePropTypes = __webpack_require__("./node_modules/react-native-web/dist/exports/Image/ImageStylePropTypes.js");

var _ImageStylePropTypes2 = _interopRequireDefault(_ImageStylePropTypes);

var _TextInputStylePropTypes = __webpack_require__("./node_modules/react-native-web/dist/exports/TextInput/TextInputStylePropTypes.js");

var _TextInputStylePropTypes2 = _interopRequireDefault(_TextInputStylePropTypes);

var _TextStylePropTypes = __webpack_require__("./node_modules/react-native-web/dist/exports/Text/TextStylePropTypes.js");

var _TextStylePropTypes2 = _interopRequireDefault(_TextStylePropTypes);

var _ViewStylePropTypes = __webpack_require__("./node_modules/react-native-web/dist/exports/View/ViewStylePropTypes.js");

var _ViewStylePropTypes2 = _interopRequireDefault(_ViewStylePropTypes);

var _warning = __webpack_require__("./node_modules/fbjs/lib/warning.js");

var _warning2 = _interopRequireDefault(_warning);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Copyright (c) 2016-present, Nicolas Gallagher.
                                                                                                                                                           * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                           * All rights reserved.
                                                                                                                                                           *
                                                                                                                                                           * This source code is licensed under the BSD-style license found in the
                                                                                                                                                           * LICENSE file in the root directory of this source tree.
                                                                                                                                                           *
                                                                                                                                                           * @providesModule StyleSheetValidation
                                                                                                                                                           * 
                                                                                                                                                           */

// Hardcoded because this is a legit case but we don't want to load it from
// a private API. We might likely want to unify style sheet creation with how it
// is done in the DOM so this might move into React. I know what I'm doing so
// plz don't fire me.
var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var StyleSheetValidation = function () {
  function StyleSheetValidation() {
    _classCallCheck(this, StyleSheetValidation);
  }

  StyleSheetValidation.validateStyleProp = function validateStyleProp(prop, style, caller) {
    if (true) {
      var isCustomProperty = prop.indexOf('--') === 0;
      if (isCustomProperty) return;

      if (allStylePropTypes[prop] === undefined) {
        var message1 = '"' + prop + '" is not a valid style property.';
        var message2 = '\nValid style props: ' + JSON.stringify(Object.keys(allStylePropTypes).sort(), null, '  ');
        styleError(message1, style, caller, message2);
      } else {
        var error = allStylePropTypes[prop](style, prop, caller, 'prop', null, ReactPropTypesSecret);
        if (error) {
          styleError(error.message, style, caller);
        }
      }
    }
  };

  StyleSheetValidation.validateStyle = function validateStyle(name, styles) {
    if (true) {
      for (var prop in styles[name]) {
        StyleSheetValidation.validateStyleProp(prop, styles[name], 'StyleSheet ' + name);
      }
    }
  };

  StyleSheetValidation.addValidStylePropTypes = function addValidStylePropTypes(stylePropTypes) {
    for (var key in stylePropTypes) {
      allStylePropTypes[key] = stylePropTypes[key];
    }
  };

  return StyleSheetValidation;
}();

exports.default = StyleSheetValidation;


var styleError = function styleError(message1, style, caller, message2) {
  (0, _warning2.default)(false, message1 + '\n' + (caller || '<<unknown>>') + ': ' + JSON.stringify(style, null, '  ') + (message2 || ''));
};

var allStylePropTypes = {};

StyleSheetValidation.addValidStylePropTypes(_ImageStylePropTypes2.default);
StyleSheetValidation.addValidStylePropTypes(_TextStylePropTypes2.default);
StyleSheetValidation.addValidStylePropTypes(_TextInputStylePropTypes2.default);
StyleSheetValidation.addValidStylePropTypes(_ViewStylePropTypes2.default);

StyleSheetValidation.addValidStylePropTypes({
  appearance: _propTypes.string,
  borderCollapse: _propTypes.string,
  borderSpacing: (0, _propTypes.oneOf)([_propTypes.number, _propTypes.string]),
  clear: _propTypes.string,
  cursor: _propTypes.string,
  fill: _propTypes.string,
  float: (0, _propTypes.oneOf)(['left', 'none', 'right']),
  listStyle: _propTypes.string,
  pointerEvents: _propTypes.string,
  tableLayout: _propTypes.string,
  /* @private */
  MozAppearance: _propTypes.string,
  font: _propTypes.string
});

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/WebStyleSheet.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2016-present, Nicolas Gallagher.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This source code is licensed under the BSD-style license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _ExecutionEnvironment = __webpack_require__("./node_modules/fbjs/lib/ExecutionEnvironment.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebStyleSheet = function () {
  function WebStyleSheet(id) {
    _classCallCheck(this, WebStyleSheet);

    this._cssRules = [];
    this._sheet = null;
    this._textContent = '';

    var domStyleElement = void 0;

    // on the client we check for an existing style sheet before injecting
    if (_ExecutionEnvironment.canUseDOM) {
      domStyleElement = document.getElementById(id);
      if (!domStyleElement) {
        var html = '<style id="' + id + '"></style>';
        if (document.head) {
          document.head.insertAdjacentHTML('afterbegin', html);
          domStyleElement = document.getElementById(id);
        }
      }

      if (domStyleElement) {
        // $FlowFixMe
        this._sheet = domStyleElement.sheet;
        this._textContent = domStyleElement.textContent;
      }
    }
  }

  WebStyleSheet.prototype.containsRule = function containsRule(rule) {
    return this._cssRules.indexOf(rule) > -1;
  };

  WebStyleSheet.prototype.insertRuleOnce = function insertRuleOnce(rule, position) {
    // Reduce chance of duplicate rules
    if (!this.containsRule(rule)) {
      this._cssRules.push(rule);

      // Check whether a rule was part of any prerendered styles (textContent
      // doesn't include styles injected via 'insertRule')
      if (this._textContent.indexOf(rule) === -1 && this._sheet) {
        var pos = position || this._sheet.cssRules.length;
        this._sheet.insertRule(rule, pos);
      }
    }
  };

  _createClass(WebStyleSheet, [{
    key: 'cssText',
    get: function get() {
      return this._cssRules.join('\n');
    }
  }]);

  return WebStyleSheet;
}();

exports.default = WebStyleSheet;

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/createAtomicRules.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createKeyframesRules2 = __webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/createKeyframesRules.js");

var _createKeyframesRules3 = _interopRequireDefault(_createKeyframesRules2);

var _createRuleBlock7 = __webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/createRuleBlock.js");

var _createRuleBlock8 = _interopRequireDefault(_createRuleBlock7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createAtomicRules = function createAtomicRules(selector, prop, value) {
  var rules = [];

  // Handle custom properties and custom values that require additional rules
  // to be created.
  switch (prop) {
    // See #513
    case 'pointerEvents':
      {
        var _createRuleBlock3;

        var val = value;
        if (value === 'auto' || value === 'box-only') {
          val = 'auto !important';
          if (value === 'box-only') {
            var _createRuleBlock;

            var _block = (0, _createRuleBlock8.default)((_createRuleBlock = {}, _createRuleBlock[prop] = 'none', _createRuleBlock));
            rules.push(selector + ' > *{' + _block + '}');
          }
        } else if (value === 'none' || value === 'box-none') {
          val = 'none !important';
          if (value === 'box-none') {
            var _createRuleBlock2;

            var _block2 = (0, _createRuleBlock8.default)((_createRuleBlock2 = {}, _createRuleBlock2[prop] = 'auto', _createRuleBlock2));
            rules.push(selector + ' > *{' + _block2 + '}');
          }
        }
        var block = (0, _createRuleBlock8.default)((_createRuleBlock3 = {}, _createRuleBlock3[prop] = val, _createRuleBlock3));
        rules.push(selector + '{' + block + '}');
        break;
      }

    case 'placeholderTextColor':
      {
        var _block3 = (0, _createRuleBlock8.default)({ color: value, opacity: 1 });
        rules.push('@media all {' + (selector + '::-webkit-input-placeholder{' + _block3 + '}') + (selector + '::-moz-placeholder{' + _block3 + '}') + (selector + ':-ms-input-placeholder{' + _block3 + '}') + (selector + '::placeholder{' + _block3 + '}') + '}');
        break;
      }

    case 'animationName':
      {
        if (typeof value === 'string') {
          var _createRuleBlock4;

          // add a className referencing the animation
          var _block4 = (0, _createRuleBlock8.default)((_createRuleBlock4 = {}, _createRuleBlock4[prop] = value, _createRuleBlock4));
          rules.push(selector + '{' + _block4 + '}');
        } else {
          var _createRuleBlock5;

          var animationNames = [];

          // add the keyframes needed to implement each value
          value.forEach(function (keyframes) {
            if (typeof keyframes === 'string') {
              animationNames.push(keyframes);
            } else {
              var _createKeyframesRules = (0, _createKeyframesRules3.default)(keyframes),
                  identifier = _createKeyframesRules.identifier,
                  keyframesRules = _createKeyframesRules.rules;

              keyframesRules.forEach(function (rule) {
                rules.push(rule);
              });
              animationNames.push(identifier);
            }
          });

          // add a className referencing the animation identifiers
          var _block5 = (0, _createRuleBlock8.default)((_createRuleBlock5 = {}, _createRuleBlock5[prop] = animationNames.join(','), _createRuleBlock5));
          rules.push(selector + '{' + _block5 + '}');
        }

        break;
      }

    default:
      {
        var _createRuleBlock6;

        var _block6 = (0, _createRuleBlock8.default)((_createRuleBlock6 = {}, _createRuleBlock6[prop] = value, _createRuleBlock6));
        rules.push(selector + '{' + _block6 + '}');
      }
  }

  return rules;
};

exports.default = createAtomicRules;

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/createKeyframesRules.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createRuleBlock = __webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/createRuleBlock.js");

var _createRuleBlock2 = _interopRequireDefault(_createRuleBlock);

var _createReactDOMStyle = __webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/createReactDOMStyle.js");

var _createReactDOMStyle2 = _interopRequireDefault(_createReactDOMStyle);

var _i18nStyle = __webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/i18nStyle.js");

var _i18nStyle2 = _interopRequireDefault(_i18nStyle);

var _hash = __webpack_require__("./node_modules/react-native-web/dist/vendor/hash/index.js");

var _hash2 = _interopRequireDefault(_hash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hashObject = function hashObject(obj) {
  return (0, _hash2.default)(JSON.stringify(obj));
};

var createIdentifier = function createIdentifier(obj) {
  var hashed = hashObject(obj);
  return  true ? 'rn-anim-' + hashed : 'rn-' + hashed;
};

var prefixes = ['-webkit-', ''];

var makeBlock = function makeBlock(rule) {
  var domStyle = (0, _createReactDOMStyle2.default)((0, _i18nStyle2.default)(rule));
  return (0, _createRuleBlock2.default)(domStyle);
};

var makeSteps = function makeSteps(keyframes) {
  return Object.keys(keyframes).map(function (stepName) {
    var rule = keyframes[stepName];
    var block = makeBlock(rule);
    return stepName + '{' + block + '}';
  }).join('');
};

var createKeyframesRules = function createKeyframesRules(keyframes) {
  var identifier = createIdentifier(keyframes);
  var rules = prefixes.map(function (prefix) {
    return '@media all {@' + prefix + 'keyframes ' + identifier + '{' + makeSteps(keyframes) + '}}';
  });
  return { identifier: identifier, rules: rules };
};

exports.default = createKeyframesRules;

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/createReactDOMStyle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _normalizeValue = __webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/normalizeValue.js");

var _normalizeValue2 = _interopRequireDefault(_normalizeValue);

var _processColor = __webpack_require__("./node_modules/react-native-web/dist/exports/processColor/index.js");

var _processColor2 = _interopRequireDefault(_processColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2016-present, Nicolas Gallagher.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * The browser implements the CSS cascade, where the order of properties is a
 * factor in determining which styles to paint. React Native is different. It
 * gives giving precedence to the more specific style property. For example,
 * the value of `paddingTop` takes precedence over that of `padding`.
 *
 * This module creates mutally exclusive style declarations by expanding all of
 * React Native's supported shortform properties (e.g. `padding`) to their
 * longfrom equivalents.
 *
 * @noflow
 */

var emptyObject = {};
var styleShortFormProperties = {
  borderColor: ['borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'],
  borderRadius: ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'],
  borderStyle: ['borderTopStyle', 'borderRightStyle', 'borderBottomStyle', 'borderLeftStyle'],
  borderWidth: ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'],
  margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
  marginHorizontal: ['marginRight', 'marginLeft'],
  marginVertical: ['marginTop', 'marginBottom'],
  overflow: ['overflowX', 'overflowY'],
  overscrollBehavior: ['overscrollBehaviorX', 'overscrollBehaviorY'],
  padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
  paddingHorizontal: ['paddingRight', 'paddingLeft'],
  paddingVertical: ['paddingTop', 'paddingBottom'],
  textDecorationLine: ['textDecoration'],
  writingDirection: ['direction']
};

var colorProps = {
  backgroundColor: true,
  borderColor: true,
  borderTopColor: true,
  borderRightColor: true,
  borderBottomColor: true,
  borderLeftColor: true,
  color: true
};

var borderWidthProps = {
  borderWidth: true,
  borderTopWidth: true,
  borderRightWidth: true,
  borderBottomWidth: true,
  borderLeftWidth: true
};

var monospaceFontStack = 'monospace, monospace';
var systemFontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif';

var alphaSortProps = function alphaSortProps(propsArray) {
  return propsArray.sort(function (a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
};

var defaultOffset = { height: 0, width: 0 };

/**
 * Shadow
 */

// TODO: add inset and spread support
var resolveShadow = function resolveShadow(resolvedStyle, style) {
  var _ref = style.shadowOffset || defaultOffset,
      height = _ref.height,
      width = _ref.width;

  var offsetX = (0, _normalizeValue2.default)(null, width);
  var offsetY = (0, _normalizeValue2.default)(null, height);
  var blurRadius = (0, _normalizeValue2.default)(null, style.shadowRadius || 0);
  var color = (0, _processColor2.default)(style.shadowColor, style.shadowOpacity);

  if (color) {
    var boxShadow = offsetX + ' ' + offsetY + ' ' + blurRadius + ' ' + color;
    resolvedStyle.boxShadow = style.boxShadow ? style.boxShadow + ', ' + boxShadow : boxShadow;
  } else if (style.boxShadow) {
    resolvedStyle.boxShadow = style.boxShadow;
  }
};

/**
 * Text Shadow
 */

var resolveTextShadow = function resolveTextShadow(resolvedStyle, style) {
  var _ref2 = style.textShadowOffset || defaultOffset,
      height = _ref2.height,
      width = _ref2.width;

  var offsetX = (0, _normalizeValue2.default)(null, width);
  var offsetY = (0, _normalizeValue2.default)(null, height);
  var blurRadius = (0, _normalizeValue2.default)(null, style.textShadowRadius || 0);
  var color = (0, _processColor2.default)(style.textShadowColor);

  if (color) {
    resolvedStyle.textShadow = offsetX + ' ' + offsetY + ' ' + blurRadius + ' ' + color;
  }
};

/**
 * Transform
 */

// { scale: 2 } => 'scale(2)'
// { translateX: 20 } => 'translateX(20px)'
var mapTransform = function mapTransform(transform) {
  var type = Object.keys(transform)[0];
  var value = (0, _normalizeValue2.default)(type, transform[type]);
  return type + '(' + value + ')';
};

// [1,2,3,4,5,6] => 'matrix3d(1,2,3,4,5,6)'
var convertTransformMatrix = function convertTransformMatrix(transformMatrix) {
  var matrix = transformMatrix.join(',');
  return 'matrix3d(' + matrix + ')';
};

var resolveTransform = function resolveTransform(resolvedStyle, style) {
  var transform = style.transform;
  if (Array.isArray(style.transform)) {
    transform = style.transform.map(mapTransform).join(' ');
  } else if (style.transformMatrix) {
    transform = convertTransformMatrix(style.transformMatrix);
  }
  resolvedStyle.transform = transform;
};

/**
 * Reducer
 */

var createReducer = function createReducer(style, styleProps) {
  var hasResolvedShadow = false;
  var hasResolvedTextShadow = false;

  return function (resolvedStyle, prop) {
    var value = (0, _normalizeValue2.default)(prop, style[prop]);

    // Make sure the default border width is explicitly set to '0' to avoid
    // falling back to any unwanted user-agent styles.
    if (borderWidthProps[prop]) {
      value = value == null ? (0, _normalizeValue2.default)(null, 0) : value;
    }

    // Normalize color values
    if (colorProps[prop]) {
      value = (0, _processColor2.default)(value);
    }

    // Ignore everything else with a null value
    if (value == null) {
      return resolvedStyle;
    }

    switch (prop) {
      // Ignore some React Native styles
      case 'aspectRatio':
      case 'elevation':
      case 'overlayColor':
      case 'resizeMode':
      case 'tintColor':
        {
          break;
        }

      case 'display':
        {
          resolvedStyle.display = value;
          // A flex container in React Native has these defaults which should be
          // set only if there is no otherwise supplied flex style.
          if (style.display === 'flex' && style.flex == null) {
            if (style.flexShrink == null) {
              resolvedStyle.flexShrink = '0 !important';
            }
            if (style.flexBasis == null) {
              resolvedStyle.flexBasis = 'auto !important';
            }
          }
          break;
        }

      // The 'flex' property value in React Native must be a positive integer,
      // 0, or -1.
      //
      // On the web, a positive integer value for 'flex' is complicated by
      // browser differences. Although browsers render styles like 'flex:2'
      // consistently, they don't all set the same value for the resulting
      // 'flexBasis' (See #616). Expanding 'flex' in 'StyleSheet' would mean
      // setting different values for different browsers.
      //
      // This fix instead relies on the browser expanding 'flex' itself. And
      // because the 'flex' style is not being expanded the generated CSS is
      // likely to contain source order "conflicts". To avoid the browser
      // relying on source order to resolve the styles, all the longhand flex
      // property values must use '!important'.
      case 'flex':
        {
          if (value > 0) {
            resolvedStyle.flex = value;
            resolvedStyle.flexGrow = value + ' !important';
            resolvedStyle.flexShrink = '1 !important';
          } else if (value === 0) {
            resolvedStyle.flexGrow = '0 !important';
            resolvedStyle.flexShrink = '0 !important';
            resolvedStyle.flexBasis = 'auto !important';
          } else if (value === -1) {
            resolvedStyle.flexGrow = '0 !important';
            resolvedStyle.flexShrink = '1 !important';
            resolvedStyle.flexBasis = 'auto !important';
          }
          break;
        }

      case 'flexGrow':
      case 'flexShrink':
      case 'flexBasis':
        {
          if (value != null) {
            var hasImportant = ('' + value).indexOf('!important') > -1;
            resolvedStyle[prop] = hasImportant ? value : value + ' !important';
          }
          break;
        }

      case 'fontFamily':
        {
          if (value === 'System') {
            resolvedStyle.fontFamily = systemFontStack;
          } else if (value === 'monospace') {
            resolvedStyle.fontFamily = monospaceFontStack;
          } else {
            resolvedStyle.fontFamily = value;
          }
          break;
        }

      case 'shadowColor':
      case 'shadowOffset':
      case 'shadowOpacity':
      case 'shadowRadius':
        {
          if (!hasResolvedShadow) {
            resolveShadow(resolvedStyle, style);
          }
          hasResolvedShadow = true;
          break;
        }

      case 'textAlignVertical':
        {
          resolvedStyle.verticalAlign = value === 'center' ? 'middle' : value;
          break;
        }

      case 'textShadowColor':
      case 'textShadowOffset':
      case 'textShadowRadius':
        {
          if (!hasResolvedTextShadow) {
            resolveTextShadow(resolvedStyle, style);
          }
          hasResolvedTextShadow = true;
          break;
        }

      case 'transform':
      case 'transformMatrix':
        {
          resolveTransform(resolvedStyle, style);
          break;
        }

      default:
        {
          var longFormProperties = styleShortFormProperties[prop];
          if (longFormProperties) {
            longFormProperties.forEach(function (longForm, i) {
              // The value of any longform property in the original styles takes
              // precedence over the shortform's value.
              if (styleProps.indexOf(longForm) === -1) {
                resolvedStyle[longForm] = value;
              }
            });
          } else {
            resolvedStyle[prop] = value;
          }
        }
    }

    return resolvedStyle;
  };
};

var createReactDOMStyle = function createReactDOMStyle(style) {
  if (!style) {
    return emptyObject;
  }
  var styleProps = Object.keys(style);
  var sortedStyleProps = alphaSortProps(styleProps);
  var reducer = createReducer(style, styleProps);
  var resolvedStyle = sortedStyleProps.reduce(reducer, {});
  return resolvedStyle;
};

exports.default = createReactDOMStyle;

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/createRuleBlock.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _hyphenateStyleName = __webpack_require__("./node_modules/hyphenate-style-name/index.js");

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

var _mapKeyValue = __webpack_require__("./node_modules/react-native-web/dist/modules/mapKeyValue/index.js");

var _mapKeyValue2 = _interopRequireDefault(_mapKeyValue);

var _normalizeValue = __webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/normalizeValue.js");

var _normalizeValue2 = _interopRequireDefault(_normalizeValue);

var _prefixStyles = __webpack_require__("./node_modules/react-native-web/dist/modules/prefixStyles/index.js");

var _prefixStyles2 = _interopRequireDefault(_prefixStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2016-present, Nicolas Gallagher.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 */

var createDeclarationString = function createDeclarationString(prop, val) {
  var name = (0, _hyphenateStyleName2.default)(prop);
  var value = (0, _normalizeValue2.default)(prop, val);
  if (Array.isArray(val)) {
    return val.map(function (v) {
      return name + ':' + v;
    }).join(';');
  }
  return name + ':' + value;
};

/**
 * Generates valid CSS rule body from a JS object
 *
 * createRuleBlock({ width: 20, color: 'blue' });
 * // => 'color:blue;width:20px'
 */
var createRuleBlock = function createRuleBlock(style) {
  return (0, _mapKeyValue2.default)((0, _prefixStyles2.default)(style), createDeclarationString).sort().join(';');
};

exports.default = createRuleBlock;

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/flattenStyle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ReactNativePropRegistry = __webpack_require__("./node_modules/react-native-web/dist/modules/ReactNativePropRegistry/index.js");

var _ReactNativePropRegistry2 = _interopRequireDefault(_ReactNativePropRegistry);

var _invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Nicolas Gallagher.
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule flattenStyle
 * 
 */

function getStyle(style) {
  if (typeof style === 'number') {
    return _ReactNativePropRegistry2.default.getByID(style);
  }
  return style;
}

function flattenStyle(style) {
  if (!style) {
    return undefined;
  }

  if (true) {
    (0, _invariant2.default)(style !== true, 'style may be false but not true');
  }

  if (!Array.isArray(style)) {
    // $FlowFixMe
    return getStyle(style);
  }

  var result = {};
  for (var i = 0, styleLength = style.length; i < styleLength; ++i) {
    var computedStyle = flattenStyle(style[i]);
    if (computedStyle) {
      for (var key in computedStyle) {
        var value = computedStyle[key];
        result[key] = value;
      }
    }
  }
  return result;
}

exports.default = flattenStyle;

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/getHairlineWidth.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ExecutionEnvironment = __webpack_require__("./node_modules/fbjs/lib/ExecutionEnvironment.js");

var getHairlineWidth = function getHairlineWidth() {
  var hairlineWidth = 1;
  if (_ExecutionEnvironment.canUseDOM && window.devicePixelRatio && window.devicePixelRatio >= 2) {
    var body = document.body;
    if (body) {
      var node = document.createElement('div');
      node.style.border = '.5px solid transparent';
      body.appendChild(node);
      if (node.offsetHeight === 1) {
        hairlineWidth = 0.5;
      }
      body.removeChild(node);
    }
  }
  return hairlineWidth;
}; /**
    * Based on http://dieulot.net/css-retina-hairline
    * @noflow
    */

exports.default = getHairlineWidth;

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/i18nStyle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _I18nManager = __webpack_require__("./node_modules/react-native-web/dist/exports/I18nManager/index.js");

var _I18nManager2 = _interopRequireDefault(_I18nManager);

var _multiplyStyleLengthValue = __webpack_require__("./node_modules/react-native-web/dist/modules/multiplyStyleLengthValue/index.js");

var _multiplyStyleLengthValue2 = _interopRequireDefault(_multiplyStyleLengthValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2016-present, Nicolas Gallagher.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 */

var emptyObject = {};

/**
 * Map of property names to their BiDi equivalent.
 */
var PROPERTIES_TO_SWAP = {
  borderTopLeftRadius: 'borderTopRightRadius',
  borderTopRightRadius: 'borderTopLeftRadius',
  borderBottomLeftRadius: 'borderBottomRightRadius',
  borderBottomRightRadius: 'borderBottomLeftRadius',
  borderLeftColor: 'borderRightColor',
  borderLeftStyle: 'borderRightStyle',
  borderLeftWidth: 'borderRightWidth',
  borderRightColor: 'borderLeftColor',
  borderRightWidth: 'borderLeftWidth',
  borderRightStyle: 'borderLeftStyle',
  left: 'right',
  marginLeft: 'marginRight',
  marginRight: 'marginLeft',
  paddingLeft: 'paddingRight',
  paddingRight: 'paddingLeft',
  right: 'left'
};

var PROPERTIES_SWAP_LEFT_RIGHT = {
  clear: true,
  float: true,
  textAlign: true
};

/**
 * Invert the sign of a numeric-like value
 */
var additiveInverse = function additiveInverse(value) {
  return (0, _multiplyStyleLengthValue2.default)(value, -1);
};

/**
 * BiDi flip the given property.
 */
var flipProperty = function flipProperty(prop) {
  return PROPERTIES_TO_SWAP.hasOwnProperty(prop) ? PROPERTIES_TO_SWAP[prop] : prop;
};

var swapLeftRight = function swapLeftRight(value) {
  return value === 'left' ? 'right' : value === 'right' ? 'left' : value;
};

var i18nStyle = function i18nStyle(originalStyle) {
  if (!_I18nManager2.default.isRTL) {
    return originalStyle;
  }

  var style = originalStyle || emptyObject;
  var nextStyle = {};

  for (var prop in style) {
    if (!Object.prototype.hasOwnProperty.call(style, prop)) {
      continue;
    }

    var value = style[prop];

    if (PROPERTIES_TO_SWAP[prop]) {
      var newProp = flipProperty(prop);
      nextStyle[newProp] = value;
    } else if (PROPERTIES_SWAP_LEFT_RIGHT[prop]) {
      nextStyle[prop] = swapLeftRight(value);
    } else if (prop === 'textShadowOffset') {
      nextStyle[prop] = value;
      nextStyle[prop].width = additiveInverse(value.width);
    } else {
      nextStyle[prop] = style[prop];
    }
  }

  return nextStyle;
};

exports.default = i18nStyle;

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _modality = __webpack_require__("./node_modules/react-native-web/dist/modules/modality/index.js");

var _modality2 = _interopRequireDefault(_modality);

var _StyleSheet = __webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/StyleSheet.js");

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// initialize focus-ring fix
(0, _modality2.default)();

// allow component styles to be editable in React Dev Tools
if (true) {
  var _require = __webpack_require__("./node_modules/fbjs/lib/ExecutionEnvironment.js"),
      canUseDOM = _require.canUseDOM;

  if (canUseDOM && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle = _StyleSheet2.default.flatten;
  }
}

exports.default = _StyleSheet2.default;

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/initialRules.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * Copyright (c) 2016-present, Nicolas Gallagher.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

// Prevent browsers throwing parse errors, e.g., on vendor-prefixed pseudo-elements
var safeRule = function safeRule(rule) {
  return '@media all{\n' + rule + '\n}';
};

var resets = [
// minimal top-level reset
'html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}', 'body{margin:0;}',
// minimal form pseudo-element reset
'button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}', 'input::-webkit-inner-spin-button,input::-webkit-outer-spin-button,' + 'input::-webkit-search-cancel-button,input::-webkit-search-decoration,' + 'input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}'];

var reset = [safeRule(resets.join('\n'))];

exports.default = reset;

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/normalizeValue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _unitlessNumbers = __webpack_require__("./node_modules/react-native-web/dist/modules/unitlessNumbers/index.js");

var _unitlessNumbers2 = _interopRequireDefault(_unitlessNumbers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var normalizeValue = function normalizeValue(property, value) {
  if (!_unitlessNumbers2.default[property] && typeof value === 'number') {
    value = value + 'px';
  }
  return value;
}; /**
    * Copyright (c) 2016-present, Nicolas Gallagher.
    * All rights reserved.
    *
    * This source code is licensed under the BSD-style license found in the
    * LICENSE file in the root directory of this source tree.
    *
    * @noflow
    */

exports.default = normalizeValue;

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/styleResolver.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ReactNativeStyleResolver = __webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/ReactNativeStyleResolver.js");

var _ReactNativeStyleResolver2 = _interopRequireDefault(_ReactNativeStyleResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleResolver = new _ReactNativeStyleResolver2.default(); /**
                                                               * Copyright (c) 2016-present, Nicolas Gallagher.
                                                               * All rights reserved.
                                                               *
                                                               * This source code is licensed under the BSD-style license found in the
                                                               * LICENSE file in the root directory of this source tree.
                                                               *
                                                               * 
                                                               */

exports.default = styleResolver;

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/Text/TextStylePropTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ColorPropType = __webpack_require__("./node_modules/react-native-web/dist/exports/ColorPropType/index.js");

var _ColorPropType2 = _interopRequireDefault(_ColorPropType);

var _ViewStylePropTypes = __webpack_require__("./node_modules/react-native-web/dist/exports/View/ViewStylePropTypes.js");

var _ViewStylePropTypes2 = _interopRequireDefault(_ViewStylePropTypes);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numberOrString = (0, _propTypes.oneOfType)([_propTypes.number, _propTypes.string]); /**
                                                                                         * Copyright (c) 2015-present, Nicolas Gallagher.
                                                                                         * Copyright (c) 2015-present, Facebook, Inc.
                                                                                         * All rights reserved.
                                                                                         *
                                                                                         * This source code is licensed under the BSD-style license found in the
                                                                                         * LICENSE file in the root directory of this source tree.
                                                                                         *
                                                                                         * 
                                                                                         */

var ShadowOffsetPropType = (0, _propTypes.shape)({ width: _propTypes.number, height: _propTypes.number });
var TextAlignPropType = (0, _propTypes.oneOf)(['center', 'inherit', 'justify', 'justify-all', 'left', 'right']);
var WritingDirectionPropType = (0, _propTypes.oneOf)(['auto', 'ltr', 'rtl']);

var TextStylePropTypes = Object.assign({}, _ViewStylePropTypes2.default, {
  color: _ColorPropType2.default,
  fontFamily: _propTypes.string,
  fontFeatureSettings: _propTypes.string,
  fontSize: numberOrString,
  fontStyle: _propTypes.string,
  fontWeight: _propTypes.string,
  letterSpacing: numberOrString,
  lineHeight: numberOrString,
  textAlign: TextAlignPropType,
  textAlignVertical: _propTypes.string,
  textDecorationColor: _ColorPropType2.default,
  textDecorationLine: _propTypes.string,
  textDecorationStyle: _propTypes.string,
  textShadowColor: _ColorPropType2.default,
  textShadowOffset: ShadowOffsetPropType,
  textShadowRadius: _propTypes.number,
  writingDirection: WritingDirectionPropType,
  /* @platform web */
  textIndent: numberOrString,
  textOverflow: _propTypes.string,
  textRendering: (0, _propTypes.oneOf)(['auto', 'geometricPrecision', 'optimizeLegibility', 'optimizeSpeed']),
  textTransform: (0, _propTypes.oneOf)(['capitalize', 'lowercase', 'none', 'uppercase']),
  unicodeBidi: (0, _propTypes.oneOf)(['normal', 'bidi-override', 'embed', 'isolate', 'isolate-override', 'plaintext']),
  whiteSpace: _propTypes.string,
  wordWrap: _propTypes.string,
  MozOsxFontSmoothing: _propTypes.string,
  WebkitFontSmoothing: _propTypes.string
});

exports.default = TextStylePropTypes;

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/TextInput/TextInputStylePropTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _TextStylePropTypes = __webpack_require__("./node_modules/react-native-web/dist/exports/Text/TextStylePropTypes.js");

var _TextStylePropTypes2 = _interopRequireDefault(_TextStylePropTypes);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Nicolas Gallagher.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var TextInputStylePropTypes = Object.assign({}, _TextStylePropTypes2.default, {
  /* @platform web */
  resize: (0, _propTypes.oneOf)(['none', 'vertical', 'horizontal', 'both'])
});

exports.default = TextInputStylePropTypes;

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/UIManager/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _requestAnimationFrame = __webpack_require__("./node_modules/fbjs/lib/requestAnimationFrame.js");

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _setImmediate = __webpack_require__("./node_modules/fbjs/lib/setImmediate.js");

var _setImmediate2 = _interopRequireDefault(_setImmediate);

var _setValueForStyles = __webpack_require__("./node_modules/react-native-web/dist/vendor/setValueForStyles/index.js");

var _setValueForStyles2 = _interopRequireDefault(_setValueForStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getRect = function getRect(node) {
  var height = node.offsetHeight;
  var width = node.offsetWidth;
  var left = 0;
  var top = 0;
  while (node && node.nodeType === 1 /* Node.ELEMENT_NODE */) {
    left += node.offsetLeft;
    top += node.offsetTop;
    node = node.offsetParent;
  }
  return { height: height, left: left, top: top, width: width };
}; /**
    * Copyright (c) 2016-present, Nicolas Gallagher.
    * All rights reserved.
    *
    * This source code is licensed under the BSD-style license found in the
    * LICENSE file in the root directory of this source tree.
    *
    * @providesModule UIManager
    * @noflow
    */

var hasRequestedAnimationFrame = false;
var measureLayoutQueue = [];

var processLayoutQueue = function processLayoutQueue() {
  measureLayoutQueue.splice(0, 250).forEach(function (item) {
    var node = item[0],
        relativeToNativeNode = item[1],
        callback = item[2];

    var relativeNode = relativeToNativeNode || node && node.parentNode;

    if (node && relativeNode) {
      var relativeRect = getRect(relativeNode);

      var _getRect = getRect(node),
          height = _getRect.height,
          left = _getRect.left,
          top = _getRect.top,
          width = _getRect.width;

      var x = left - relativeRect.left;
      var y = top - relativeRect.top;
      callback(x, y, width, height, left, top);
    }
  });

  if (measureLayoutQueue.length > 0) {
    (0, _setImmediate2.default)(processLayoutQueue);
  }
};

var _measureLayout = function _measureLayout(node, relativeToNativeNode, callback) {
  if (!hasRequestedAnimationFrame) {
    (0, _requestAnimationFrame2.default)(function () {
      hasRequestedAnimationFrame = false;
      processLayoutQueue();
    });
  }

  hasRequestedAnimationFrame = true;
  measureLayoutQueue.push([node, relativeToNativeNode, callback]);
};

var UIManager = {
  blur: function blur(node) {
    try {
      node.blur();
    } catch (err) {}
  },
  focus: function focus(node) {
    try {
      node.focus();
    } catch (err) {}
  },
  measure: function measure(node, callback) {
    _measureLayout(node, null, callback);
  },
  measureInWindow: function measureInWindow(node, callback) {
    (0, _requestAnimationFrame2.default)(function () {
      if (node) {
        var _getRect2 = getRect(node),
            height = _getRect2.height,
            left = _getRect2.left,
            top = _getRect2.top,
            width = _getRect2.width;

        callback(left, top, width, height);
      }
    });
  },
  measureLayout: function measureLayout(node, relativeToNativeNode, onFail, onSuccess) {
    _measureLayout(node, relativeToNativeNode, onSuccess);
  },
  updateView: function updateView(node, props, component /* only needed to surpress React errors in development */) {
    for (var prop in props) {
      if (!Object.prototype.hasOwnProperty.call(props, prop)) {
        continue;
      }

      var value = props[prop];
      switch (prop) {
        case 'style':
          {
            (0, _setValueForStyles2.default)(node, value, component._reactInternalInstance);
            break;
          }
        case 'class':
        case 'className':
          {
            node.setAttribute('class', value);
            break;
          }
        case 'text':
        case 'value':
          // native platforms use `text` prop to replace text input value
          node.value = value;
          break;
        default:
          node.setAttribute(prop, value);
      }
    }
  }
};

exports.default = UIManager;

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/View/ViewPropTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _EdgeInsetsPropType = __webpack_require__("./node_modules/react-native-web/dist/exports/EdgeInsetsPropType/index.js");

var _EdgeInsetsPropType2 = _interopRequireDefault(_EdgeInsetsPropType);

var _StyleSheetPropType = __webpack_require__("./node_modules/react-native-web/dist/modules/StyleSheetPropType/index.js");

var _StyleSheetPropType2 = _interopRequireDefault(_StyleSheetPropType);

var _ViewStylePropTypes = __webpack_require__("./node_modules/react-native-web/dist/exports/View/ViewStylePropTypes.js");

var _ViewStylePropTypes2 = _interopRequireDefault(_ViewStylePropTypes);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Nicolas Gallagher.
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule ViewPropTypes
 * 
 */

var stylePropType = (0, _StyleSheetPropType2.default)(_ViewStylePropTypes2.default);

var ViewPropTypes = {
  accessibilityComponentType: _propTypes.string,
  accessibilityLabel: _propTypes.string,
  accessibilityLiveRegion: (0, _propTypes.oneOf)(['assertive', 'none', 'polite']),
  accessibilityRole: _propTypes.string,
  accessibilityTraits: (0, _propTypes.oneOfType)([_propTypes.array, _propTypes.string]),
  accessible: _propTypes.bool,
  children: _propTypes.any,
  hitSlop: _EdgeInsetsPropType2.default,
  importantForAccessibility: (0, _propTypes.oneOf)(['auto', 'no', 'no-hide-descendants', 'yes']),
  onClick: _propTypes.func,
  onClickCapture: _propTypes.func,
  onLayout: _propTypes.func,
  onMoveShouldSetResponder: _propTypes.func,
  onMoveShouldSetResponderCapture: _propTypes.func,
  onResponderGrant: _propTypes.func,
  onResponderMove: _propTypes.func,
  onResponderReject: _propTypes.func,
  onResponderRelease: _propTypes.func,
  onResponderTerminate: _propTypes.func,
  onResponderTerminationRequest: _propTypes.func,
  onStartShouldSetResponder: _propTypes.func,
  onStartShouldSetResponderCapture: _propTypes.func,
  onTouchCancel: _propTypes.func,
  onTouchCancelCapture: _propTypes.func,
  onTouchEnd: _propTypes.func,
  onTouchEndCapture: _propTypes.func,
  onTouchMove: _propTypes.func,
  onTouchMoveCapture: _propTypes.func,
  onTouchStart: _propTypes.func,
  onTouchStartCapture: _propTypes.func,
  pointerEvents: (0, _propTypes.oneOf)(['auto', 'box-none', 'box-only', 'none']),
  style: stylePropType,
  testID: _propTypes.string,
  // compatibility with React Native
  accessibilityViewIsModal: _propTypes.bool,
  collapsable: _propTypes.bool,
  needsOffscreenAlphaCompositing: _propTypes.bool,
  onAccessibilityTap: _propTypes.func,
  onMagicTap: _propTypes.func,
  removeClippedSubviews: _propTypes.bool,
  renderToHardwareTextureAndroid: _propTypes.bool,
  shouldRasterizeIOS: _propTypes.bool
};

exports.default = ViewPropTypes;

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/View/ViewStylePropTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _AnimationPropTypes = __webpack_require__("./node_modules/react-native-web/dist/modules/AnimationPropTypes/index.js");

var _AnimationPropTypes2 = _interopRequireDefault(_AnimationPropTypes);

var _BorderPropTypes = __webpack_require__("./node_modules/react-native-web/dist/modules/BorderPropTypes/index.js");

var _BorderPropTypes2 = _interopRequireDefault(_BorderPropTypes);

var _ColorPropType = __webpack_require__("./node_modules/react-native-web/dist/exports/ColorPropType/index.js");

var _ColorPropType2 = _interopRequireDefault(_ColorPropType);

var _LayoutPropTypes = __webpack_require__("./node_modules/react-native-web/dist/modules/LayoutPropTypes/index.js");

var _LayoutPropTypes2 = _interopRequireDefault(_LayoutPropTypes);

var _ShadowPropTypes = __webpack_require__("./node_modules/react-native-web/dist/modules/ShadowPropTypes/index.js");

var _ShadowPropTypes2 = _interopRequireDefault(_ShadowPropTypes);

var _TransformPropTypes = __webpack_require__("./node_modules/react-native-web/dist/modules/TransformPropTypes/index.js");

var _TransformPropTypes2 = _interopRequireDefault(_TransformPropTypes);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var overscrollBehaviorType = (0, _propTypes.oneOf)(['auto', 'contain', 'none']); /**
                                                                                  * Copyright (c) 2015-present, Nicolas Gallagher.
                                                                                  * Copyright (c) 2015-present, Facebook, Inc.
                                                                                  * All rights reserved.
                                                                                  *
                                                                                  * This source code is licensed under the BSD-style license found in the
                                                                                  * LICENSE file in the root directory of this source tree.
                                                                                  *
                                                                                  * 
                                                                                  */

var ViewStylePropTypes = Object.assign({}, _AnimationPropTypes2.default, _BorderPropTypes2.default, _LayoutPropTypes2.default, _ShadowPropTypes2.default, _TransformPropTypes2.default, {
  backgroundColor: _ColorPropType2.default,
  opacity: _propTypes.number,
  /**
   * @platform unsupported
   */
  elevation: _propTypes.number,
  /**
   * @platform web
   */
  backgroundAttachment: _propTypes.string,
  backgroundBlendMode: _propTypes.string,
  backgroundClip: _propTypes.string,
  backgroundImage: _propTypes.string,
  backgroundOrigin: (0, _propTypes.oneOf)(['border-box', 'content-box', 'padding-box']),
  backgroundPosition: _propTypes.string,
  backgroundRepeat: _propTypes.string,
  backgroundSize: _propTypes.string,
  boxShadow: _propTypes.string,
  clip: _propTypes.string,
  cursor: _propTypes.string,
  filter: _propTypes.string,
  outline: _propTypes.string,
  outlineColor: _ColorPropType2.default,
  overscrollBehavior: overscrollBehaviorType,
  overscrollBehaviorX: overscrollBehaviorType,
  overscrollBehaviorY: overscrollBehaviorType,
  perspective: (0, _propTypes.oneOfType)([_propTypes.number, _propTypes.string]),
  perspectiveOrigin: _propTypes.string,
  touchAction: _propTypes.string,
  transitionDelay: _propTypes.string,
  transitionDuration: _propTypes.string,
  transitionProperty: _propTypes.string,
  transitionTimingFunction: _propTypes.string,
  userSelect: _propTypes.string,
  willChange: _propTypes.string,
  WebkitMaskImage: _propTypes.string,
  WebkitOverflowScrolling: (0, _propTypes.oneOf)(['auto', 'touch'])
});

exports.default = ViewStylePropTypes;

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/View/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _applyLayout = __webpack_require__("./node_modules/react-native-web/dist/modules/applyLayout/index.js");

var _applyLayout2 = _interopRequireDefault(_applyLayout);

var _applyNativeMethods = __webpack_require__("./node_modules/react-native-web/dist/modules/applyNativeMethods/index.js");

var _applyNativeMethods2 = _interopRequireDefault(_applyNativeMethods);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _createElement = __webpack_require__("./node_modules/react-native-web/dist/exports/createElement/index.js");

var _createElement2 = _interopRequireDefault(_createElement);

var _invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

var _StyleSheet = __webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js");

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _ViewPropTypes = __webpack_require__("./node_modules/react-native-web/dist/exports/View/ViewPropTypes.js");

var _ViewPropTypes2 = _interopRequireDefault(_ViewPropTypes);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-present, Nicolas Gallagher.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @providesModule View
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var calculateHitSlopStyle = function calculateHitSlopStyle(hitSlop) {
  var hitStyle = {};
  for (var prop in hitSlop) {
    if (hitSlop.hasOwnProperty(prop)) {
      var value = hitSlop[prop];
      hitStyle[prop] = value > 0 ? -1 * value : 0;
    }
  }
  return hitStyle;
};

var View = function (_Component) {
  _inherits(View, _Component);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  View.prototype.render = function render() {
    var _props = this.props,
        hitSlop = _props.hitSlop,
        accessibilityViewIsModal = _props.accessibilityViewIsModal,
        collapsable = _props.collapsable,
        needsOffscreenAlphaCompositing = _props.needsOffscreenAlphaCompositing,
        onAccessibilityTap = _props.onAccessibilityTap,
        onLayout = _props.onLayout,
        onMagicTap = _props.onMagicTap,
        removeClippedSubviews = _props.removeClippedSubviews,
        renderToHardwareTextureAndroid = _props.renderToHardwareTextureAndroid,
        shouldRasterizeIOS = _props.shouldRasterizeIOS,
        otherProps = _objectWithoutProperties(_props, ['hitSlop', 'accessibilityViewIsModal', 'collapsable', 'needsOffscreenAlphaCompositing', 'onAccessibilityTap', 'onLayout', 'onMagicTap', 'removeClippedSubviews', 'renderToHardwareTextureAndroid', 'shouldRasterizeIOS']);

    if (true) {
      _react2.default.Children.toArray(this.props.children).forEach(function (item) {
        (0, _invariant2.default)(typeof item !== 'string', 'Unexpected text node: ' + item + '. A text node cannot be a child of a <View>.');
      });
    }

    var isInAParentText = this.context.isInAParentText;


    otherProps.style = _StyleSheet2.default.compose(styles.initial, _StyleSheet2.default.compose(isInAParentText && styles.inline, this.props.style));

    if (hitSlop) {
      var hitSlopStyle = calculateHitSlopStyle(hitSlop);
      var hitSlopChild = (0, _createElement2.default)('span', { style: [styles.hitSlop, hitSlopStyle] });
      otherProps.children = _react2.default.Children.toArray([hitSlopChild, otherProps.children]);
    }

    return (0, _createElement2.default)('div', otherProps);
  };

  return View;
}(_react.Component);

View.displayName = 'View';
View.contextTypes = {
  isInAParentText: _propTypes.bool
};
View.propTypes =  true ? _ViewPropTypes2.default : {};


var styles = _StyleSheet2.default.create({
  // https://github.com/facebook/css-layout#default-values
  initial: {
    alignItems: 'stretch',
    borderWidth: 0,
    borderStyle: 'solid',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0,
    position: 'relative',
    zIndex: 0,
    // fix flexbox bugs
    minHeight: 0,
    minWidth: 0
  },
  inline: {
    display: 'inline-flex'
  },
  // this zIndex-ordering positions the hitSlop above the View but behind
  // its children
  hitSlop: Object.assign({}, _StyleSheet2.default.absoluteFillObject, {
    zIndex: -1
  })
});

exports.default = (0, _applyLayout2.default)((0, _applyNativeMethods2.default)(View));

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/createElement/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

__webpack_require__("./node_modules/react-native-web/dist/modules/injectResponderEventPlugin/index.js");

var _AccessibilityUtil = __webpack_require__("./node_modules/react-native-web/dist/modules/AccessibilityUtil/index.js");

var _AccessibilityUtil2 = _interopRequireDefault(_AccessibilityUtil);

var _createDOMProps = __webpack_require__("./node_modules/react-native-web/dist/modules/createDOMProps/index.js");

var _createDOMProps2 = _interopRequireDefault(_createDOMProps);

var _normalizeNativeEvent = __webpack_require__("./node_modules/react-native-web/dist/modules/normalizeNativeEvent/index.js");

var _normalizeNativeEvent2 = _interopRequireDefault(_normalizeNativeEvent);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Ensure event handlers receive an event of the expected shape. The 'button'
 * role – for accessibility reasons and functional equivalence to the native
 * button element – must also support synthetic keyboard activation of onclick,
 * and remove event handlers when disabled.
 */
var eventHandlerNames = {
  onClick: true,
  onClickCapture: true,
  onMoveShouldSetResponder: true,
  onMoveShouldSetResponderCapture: true,
  onResponderGrant: true,
  onResponderMove: true,
  onResponderReject: true,
  onResponderRelease: true,
  onResponderTerminate: true,
  onResponderTerminationRequest: true,
  onStartShouldSetResponder: true,
  onStartShouldSetResponderCapture: true,
  onTouchCancel: true,
  onTouchCancelCapture: true,
  onTouchEnd: true,
  onTouchEndCapture: true,
  onTouchMove: true,
  onTouchMoveCapture: true,
  onTouchStart: true,
  onTouchStartCapture: true
}; /**
    * Copyright (c) 2015-present, Nicolas Gallagher.
    * All rights reserved.
    *
    * This source code is licensed under the BSD-style license found in the
    * LICENSE file in the root directory of this source tree.
    *
    * @noflow
    */

var adjustProps = function adjustProps(domProps) {
  var isButtonRole = domProps.role === 'button';
  var isDisabled = _AccessibilityUtil2.default.isDisabled(domProps);

  Object.keys(domProps).forEach(function (propName) {
    var prop = domProps[propName];
    var isEventHandler = typeof prop === 'function' && eventHandlerNames[propName];
    if (isEventHandler) {
      if (isButtonRole && isDisabled) {
        domProps[propName] = undefined;
      } else {
        // TODO: move this out of the render path
        domProps[propName] = function (e) {
          e.nativeEvent = (0, _normalizeNativeEvent2.default)(e.nativeEvent);
          return prop(e);
        };
      }
    }
  });

  // Button role should trigger 'onClick' if SPACE or ENTER keys are pressed
  if (isButtonRole && !isDisabled) {
    var onClick = domProps.onClick;

    domProps.onKeyPress = function (e) {
      if (!e.isDefaultPrevented() && (e.which === 13 || e.which === 32)) {
        e.preventDefault();
        if (onClick) {
          onClick(e);
        }
      }
    };
  }
};

var createElement = function createElement(component, props) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  // use equivalent platform elements where possible
  var accessibilityComponent = _AccessibilityUtil2.default.propsToAccessibilityComponent(props);
  var Component = accessibilityComponent || component;
  var domProps = (0, _createDOMProps2.default)(Component, props);
  adjustProps(domProps);
  return _react2.default.createElement.apply(_react2.default, [Component, domProps].concat(children));
};

exports.default = createElement;

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/findNodeHandle/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactDom = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");

exports.default = _reactDom.findDOMNode; /**
                                          * Copyright (c) 2016-present, Nicolas Gallagher.
                                          * All rights reserved.
                                          *
                                          * This source code is licensed under the BSD-style license found in the
                                          * LICENSE file in the root directory of this source tree.
                                          *
                                          * @providesModule findNodeHandle
                                          * @noflow
                                          */

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/processColor/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _normalizeCssColor = __webpack_require__("./node_modules/normalize-css-color/index.js");

var _normalizeCssColor2 = _interopRequireDefault(_normalizeCssColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var processColor = function processColor(color) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (color === undefined || color === null || opacity === 1 && typeof color === 'string' && color.charAt(0) !== '#') {
    return color;
  }

  // convert number and hex
  var int32Color = (0, _normalizeCssColor2.default)(color);
  if (int32Color === null) {
    return undefined;
  }

  // convert 0xrrggbbaa into rgba
  var rgba = _normalizeCssColor2.default.rgba(int32Color);
  rgba.a = rgba.a.toFixed(1);
  var r = rgba.r,
      g = rgba.g,
      b = rgba.b,
      a = rgba.a;

  return 'rgba(' + r + ',' + g + ',' + b + ',' + a * opacity + ')';
}; /**
    * Copyright (c) 2016-present, Nicolas Gallagher.
    * Copyright (c) 2015-present, Facebook, Inc.
    * All rights reserved.
    *
    * This source code is licensed under the BSD-style license found in the
    * LICENSE file in the root directory of this source tree.
    *
    * @providesModule processColor
    * 
    */

exports.default = processColor;

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/render/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactDom = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");

exports.default = _reactDom.render; /**
                                     * Copyright (c) 2016-present, Nicolas Gallagher.
                                     * All rights reserved.
                                     *
                                     * This source code is licensed under the BSD-style license found in the
                                     * LICENSE file in the root directory of this source tree.
                                     *
                                     * @noflow
                                     */

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/unmountComponentAtNode/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactDom = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");

exports.default = _reactDom.unmountComponentAtNode; /**
                                                     * Copyright (c) 2016-present, Nicolas Gallagher.
                                                     * All rights reserved.
                                                     *
                                                     * This source code is licensed under the BSD-style license found in the
                                                     * LICENSE file in the root directory of this source tree.
                                                     *
                                                     * @noflow
                                                     */

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/AccessibilityUtil/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isDisabled = __webpack_require__("./node_modules/react-native-web/dist/modules/AccessibilityUtil/isDisabled.js");

var _isDisabled2 = _interopRequireDefault(_isDisabled);

var _propsToAccessibilityComponent = __webpack_require__("./node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAccessibilityComponent.js");

var _propsToAccessibilityComponent2 = _interopRequireDefault(_propsToAccessibilityComponent);

var _propsToAriaRole = __webpack_require__("./node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAriaRole.js");

var _propsToAriaRole2 = _interopRequireDefault(_propsToAriaRole);

var _propsToTabIndex = __webpack_require__("./node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToTabIndex.js");

var _propsToTabIndex2 = _interopRequireDefault(_propsToTabIndex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017-present, Nicolas Gallagher.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var AccessibilityUtil = {
  isDisabled: _isDisabled2.default,
  propsToAccessibilityComponent: _propsToAccessibilityComponent2.default,
  propsToAriaRole: _propsToAriaRole2.default,
  propsToTabIndex: _propsToTabIndex2.default
};

exports.default = AccessibilityUtil;

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/AccessibilityUtil/isDisabled.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * Copyright (c) 2017-present, Nicolas Gallagher.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var isDisabled = function isDisabled(props) {
  return props.disabled || props['aria-disabled'];
};

exports.default = isDisabled;

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAccessibilityComponent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propsToAriaRole = __webpack_require__("./node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAriaRole.js");

var _propsToAriaRole2 = _interopRequireDefault(_propsToAriaRole);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var roleComponents = {
  article: 'article',
  banner: 'header',
  complementary: 'aside',
  contentinfo: 'footer',
  form: 'form',
  label: 'label',
  link: 'a',
  list: 'ul',
  listitem: 'li',
  main: 'main',
  navigation: 'nav',
  region: 'section'
}; /**
    * Copyright (c) 2017-present, Nicolas Gallagher.
    * All rights reserved.
    *
    * This source code is licensed under the BSD-style license found in the
    * LICENSE file in the root directory of this source tree.
    *
    * 
    */

var emptyObject = {};

var propsToAccessibilityComponent = function propsToAccessibilityComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyObject;

  var role = (0, _propsToAriaRole2.default)(props);
  if (role) {
    if (role === 'heading') {
      var level = props['aria-level'] || 1;
      return 'h' + level;
    }
    return roleComponents[role];
  }
};

exports.default = propsToAccessibilityComponent;

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAriaRole.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * Copyright (c) 2017-present, Nicolas Gallagher.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var accessibilityComponentTypeToRole = {
  button: 'button',
  none: 'presentation'
};

var accessibilityTraitsToRole = {
  adjustable: 'slider',
  button: 'button',
  header: 'heading',
  image: 'img',
  link: 'link',
  none: 'presentation',
  search: 'search',
  summary: 'region'
};

/**
 * Provides compatibility with React Native's "accessibilityTraits" (iOS) and
 * "accessibilityComponentType" (Android), converting them to equivalent ARIA
 * roles.
 */
var propsToAriaRole = function propsToAriaRole(_ref) {
  var accessibilityComponentType = _ref.accessibilityComponentType,
      accessibilityRole = _ref.accessibilityRole,
      accessibilityTraits = _ref.accessibilityTraits;

  if (accessibilityRole) {
    return accessibilityRole;
  }
  if (accessibilityTraits) {
    var trait = Array.isArray(accessibilityTraits) ? accessibilityTraits[0] : accessibilityTraits;
    return accessibilityTraitsToRole[trait];
  }
  if (accessibilityComponentType) {
    return accessibilityComponentTypeToRole[accessibilityComponentType];
  }
};

exports.default = propsToAriaRole;

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToTabIndex.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isDisabled = __webpack_require__("./node_modules/react-native-web/dist/modules/AccessibilityUtil/isDisabled.js");

var _isDisabled2 = _interopRequireDefault(_isDisabled);

var _propsToAriaRole = __webpack_require__("./node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAriaRole.js");

var _propsToAriaRole2 = _interopRequireDefault(_propsToAriaRole);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017-present, Nicolas Gallagher.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var propsToTabIndex = function propsToTabIndex(props) {
  var role = (0, _propsToAriaRole2.default)(props);
  var focusable = !(0, _isDisabled2.default)(props) && props.importantForAccessibility !== 'no' && props.importantForAccessibility !== 'no-hide-descendants';

  // Assume that 'link' is focusable by default (uses <a>).
  // Assume that 'button' is not (uses <div role='button'>) but must be treated as such.
  if (role === 'link') {
    if (props.accessible === false || !focusable) {
      return '-1';
    }
  } else if (role === 'button') {
    if (props.accessible !== false && focusable) {
      return '0';
    }
  } else {
    if (props.accessible === true && focusable) {
      return '0';
    }
  }
};

exports.default = propsToTabIndex;

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/AnimationPropTypes/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var AnimationPropTypes = {
  animationDelay: _propTypes.string,
  animationDirection: (0, _propTypes.oneOf)(['alternate', 'alternate-reverse', 'normal', 'reverse']),
  animationDuration: _propTypes.string,
  animationFillMode: (0, _propTypes.oneOf)(['none', 'forwards', 'backwards', 'both']),
  animationIterationCount: (0, _propTypes.oneOfType)([_propTypes.number, (0, _propTypes.oneOf)(['infinite'])]),
  animationName: (0, _propTypes.oneOfType)([_propTypes.string, (0, _propTypes.arrayOf)((0, _propTypes.oneOfType)([_propTypes.string, _propTypes.object]))]),
  animationPlayState: (0, _propTypes.oneOf)(['paused', 'running']),
  animationTimingFunction: _propTypes.string
}; /**
    * Copyright (c) 2017-present, Nicolas Gallagher.
    * All rights reserved.
    *
    * This source code is licensed under the BSD-style license found in the
    * LICENSE file in the root directory of this source tree.
    *
    * 
    */

exports.default = AnimationPropTypes;

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/BorderPropTypes/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ColorPropType = __webpack_require__("./node_modules/react-native-web/dist/exports/ColorPropType/index.js");

var _ColorPropType2 = _interopRequireDefault(_ColorPropType);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Nicolas Gallagher.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var numberOrString = (0, _propTypes.oneOfType)([_propTypes.number, _propTypes.string]);
var BorderStylePropType = (0, _propTypes.oneOf)(['solid', 'dotted', 'dashed']);

var BorderPropTypes = {
  borderColor: _ColorPropType2.default,
  borderTopColor: _ColorPropType2.default,
  borderRightColor: _ColorPropType2.default,
  borderBottomColor: _ColorPropType2.default,
  borderLeftColor: _ColorPropType2.default,
  borderRadius: numberOrString,
  borderTopLeftRadius: numberOrString,
  borderTopRightRadius: numberOrString,
  borderBottomLeftRadius: numberOrString,
  borderBottomRightRadius: numberOrString,
  borderStyle: BorderStylePropType,
  borderTopStyle: BorderStylePropType,
  borderRightStyle: BorderStylePropType,
  borderBottomStyle: BorderStylePropType,
  borderLeftStyle: BorderStylePropType
};

exports.default = BorderPropTypes;

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/LayoutPropTypes/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var OverflowPropType = (0, _propTypes.oneOf)(['auto', 'hidden', 'scroll', 'visible']); /**
                                                                                        * Copyright (c) 2015-present, Nicolas Gallagher.
                                                                                        * All rights reserved.
                                                                                        *
                                                                                        * This source code is licensed under the BSD-style license found in the
                                                                                        * LICENSE file in the root directory of this source tree.
                                                                                        *
                                                                                        * 
                                                                                        */

var hiddenOrVisible = (0, _propTypes.oneOf)(['hidden', 'visible']);
var numberOrString = (0, _propTypes.oneOfType)([_propTypes.number, _propTypes.string]);

var LayoutPropTypes = {
  alignContent: (0, _propTypes.oneOf)(['center', 'flex-end', 'flex-start', 'space-around', 'space-between', 'stretch']),
  alignItems: (0, _propTypes.oneOf)(['baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  alignSelf: (0, _propTypes.oneOf)(['auto', 'baseline', 'center', 'flex-end', 'flex-start', 'stretch']),
  backfaceVisibility: hiddenOrVisible,
  borderWidth: numberOrString,
  borderBottomWidth: numberOrString,
  borderLeftWidth: numberOrString,
  borderRightWidth: numberOrString,
  borderTopWidth: numberOrString,
  bottom: numberOrString,
  boxSizing: _propTypes.string,
  direction: (0, _propTypes.oneOf)(['inherit', 'ltr', 'rtl']),
  display: _propTypes.string,
  flex: _propTypes.number,
  flexBasis: numberOrString,
  flexDirection: (0, _propTypes.oneOf)(['column', 'column-reverse', 'row', 'row-reverse']),
  flexGrow: _propTypes.number,
  flexShrink: _propTypes.number,
  flexWrap: (0, _propTypes.oneOf)(['nowrap', 'wrap', 'wrap-reverse']),
  height: numberOrString,
  justifyContent: (0, _propTypes.oneOf)(['center', 'flex-end', 'flex-start', 'space-around', 'space-between']),
  left: numberOrString,
  margin: numberOrString,
  marginBottom: numberOrString,
  marginHorizontal: numberOrString,
  marginLeft: numberOrString,
  marginRight: numberOrString,
  marginTop: numberOrString,
  marginVertical: numberOrString,
  maxHeight: numberOrString,
  maxWidth: numberOrString,
  minHeight: numberOrString,
  minWidth: numberOrString,
  order: _propTypes.number,
  overflow: OverflowPropType,
  overflowX: OverflowPropType,
  overflowY: OverflowPropType,
  padding: numberOrString,
  paddingBottom: numberOrString,
  paddingHorizontal: numberOrString,
  paddingLeft: numberOrString,
  paddingRight: numberOrString,
  paddingTop: numberOrString,
  paddingVertical: numberOrString,
  position: (0, _propTypes.oneOf)(['absolute', 'fixed', 'relative', 'static', 'sticky']),
  right: numberOrString,
  top: numberOrString,
  visibility: hiddenOrVisible,
  width: numberOrString,
  zIndex: _propTypes.number,
  /**
   * @platform unsupported
   */
  aspectRatio: _propTypes.number,
  /**
   * @platform web
   */
  gridAutoColumns: _propTypes.string,
  gridAutoFlow: _propTypes.string,
  gridAutoRows: _propTypes.string,
  gridColumnEnd: _propTypes.string,
  gridColumnGap: _propTypes.string,
  gridColumnStart: _propTypes.string,
  gridRowEnd: _propTypes.string,
  gridRowGap: _propTypes.string,
  gridRowStart: _propTypes.string,
  gridTemplateColumns: _propTypes.string,
  gridTemplateRows: _propTypes.string,
  gridTemplateAreas: _propTypes.string
};

exports.default = LayoutPropTypes;

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/NativeMethodsMixin/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createDOMProps = __webpack_require__("./node_modules/react-native-web/dist/modules/createDOMProps/index.js");

var _createDOMProps2 = _interopRequireDefault(_createDOMProps);

var _findNodeHandle = __webpack_require__("./node_modules/react-native-web/dist/exports/findNodeHandle/index.js");

var _findNodeHandle2 = _interopRequireDefault(_findNodeHandle);

var _styleResolver = __webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/styleResolver.js");

var _styleResolver2 = _interopRequireDefault(_styleResolver);

var _UIManager = __webpack_require__("./node_modules/react-native-web/dist/exports/UIManager/index.js");

var _UIManager2 = _interopRequireDefault(_UIManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2016-present, Nicolas Gallagher.
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule NativeMethodsMixin
 * 
 */

var NativeMethodsMixin = {
  /**
   * Removes focus from an input or view. This is the opposite of `focus()`.
   */
  blur: function blur() {
    _UIManager2.default.blur((0, _findNodeHandle2.default)(this));
  },


  /**
   * Requests focus for the given input or view.
   * The exact behavior triggered will depend the type of view.
   */
  focus: function focus() {
    _UIManager2.default.focus((0, _findNodeHandle2.default)(this));
  },


  /**
   * Determines the position and dimensions of the view
   */
  measure: function measure(callback) {
    _UIManager2.default.measure((0, _findNodeHandle2.default)(this), callback);
  },


  /**
   * Determines the location of the given view in the window and returns the
   * values via an async callback. If the React root view is embedded in
   * another native view, this will give you the absolute coordinates. If
   * successful, the callback will be called be called with the following
   * arguments:
   *
   *  - x
   *  - y
   *  - width
   *  - height
   *
   * Note that these measurements are not available until after the rendering
   * has been completed.
   */
  measureInWindow: function measureInWindow(callback) {
    _UIManager2.default.measureInWindow((0, _findNodeHandle2.default)(this), callback);
  },


  /**
   * Measures the view relative to another view (usually an ancestor)
   */
  measureLayout: function measureLayout(relativeToNativeNode, onSuccess, onFail) {
    _UIManager2.default.measureLayout((0, _findNodeHandle2.default)(this), relativeToNativeNode, onFail, onSuccess);
  },


  /**
   * This function sends props straight to the underlying DOM node.
   * This works as if all styles were set as inline styles. Since a DOM node
   * may aleady be styled with class names and inline styles, we need to get
   * the initial styles from the DOM node and merge them with incoming props.
   */
  setNativeProps: function setNativeProps(nativeProps) {
    if (!nativeProps) {
      return;
    }
    var node = (0, _findNodeHandle2.default)(this);
    // Next state is determined by comparison to existing state (in the DOM).
    // Existing state has already gone through i18n transform
    var domProps = (0, _createDOMProps2.default)(null, nativeProps, function (style) {
      return _styleResolver2.default.resolveWithNode(style, node);
    });
    _UIManager2.default.updateView(node, domProps, this);
  }
};

exports.default = NativeMethodsMixin;

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/ReactNativePropRegistry/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule ReactNativePropRegistry
 * 
 */

var emptyObject = {};
var objects = {};
var prefix = 'r';
var uniqueID = 1;

var createKey = function createKey(id) {
  return prefix + '-' + id;
};

var ReactNativePropRegistry = function () {
  function ReactNativePropRegistry() {
    _classCallCheck(this, ReactNativePropRegistry);
  }

  ReactNativePropRegistry.register = function register(object) {
    var id = uniqueID++;
    if (true) {
      Object.freeze(object);
    }
    var key = createKey(id);
    objects[key] = object;
    return id;
  };

  ReactNativePropRegistry.getByID = function getByID(id) {
    if (!id) {
      // Used in the style={[condition && id]} pattern,
      // we want it to be a no-op when the value is false or null
      return emptyObject;
    }
    var key = createKey(id);
    var object = objects[key];
    if (!object) {
      console.warn('Invalid style with id `' + id + '`. Skipping ...');
      return emptyObject;
    }
    return object;
  };

  return ReactNativePropRegistry;
}();

exports.default = ReactNativePropRegistry;

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/ShadowPropTypes/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ColorPropType = __webpack_require__("./node_modules/react-native-web/dist/exports/ColorPropType/index.js");

var _ColorPropType2 = _interopRequireDefault(_ColorPropType);

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2016-present, Nicolas Gallagher.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var numberOrString = (0, _propTypes.oneOfType)([_propTypes.number, _propTypes.string]);

var ShadowPropTypes = {
  shadowColor: _ColorPropType2.default,
  shadowOffset: (0, _propTypes.shape)({
    width: numberOrString,
    height: numberOrString
  }),
  shadowOpacity: _propTypes.number,
  shadowRadius: numberOrString,
  shadowSpread: numberOrString
};

exports.default = ShadowPropTypes;

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/StyleSheetPropType/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule StyleSheetPropType
 * 
 */

function StyleSheetPropType(shape) {
  var createStrictShapeTypeChecker = __webpack_require__("./node_modules/react-native-web/dist/modules/createStrictShapeTypeChecker/index.js").default;
  var StyleSheet = __webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js").default;

  var shapePropType = createStrictShapeTypeChecker(shape);
  return function (props, propName, componentName, location) {
    var newProps = props;
    if (props[propName]) {
      // Just make a dummy prop object with only the flattened style
      newProps = {};
      var flatStyle = StyleSheet.flatten(props[propName]);
      // Remove custom properties from check
      var nextStyle = Object.keys(flatStyle).reduce(function (acc, curr) {
        if (curr.indexOf('--') !== 0) {
          acc[curr] = flatStyle[curr];
        }
        return acc;
      }, {});
      newProps[propName] = nextStyle;
    }

    for (var _len = arguments.length, rest = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
      rest[_key - 4] = arguments[_key];
    }

    return shapePropType.apply(undefined, [newProps, propName, componentName, location].concat(rest));
  };
}

exports.default = StyleSheetPropType;

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/TransformPropTypes/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var numberOrString = (0, _propTypes.oneOfType)([_propTypes.number, _propTypes.string]); /**
                                                                                         * Copyright (c) 2015-present, Facebook, Inc.
                                                                                         * All rights reserved.
                                                                                         *
                                                                                         * This source code is licensed under the BSD-style license found in the
                                                                                         * LICENSE file in the root directory of this source tree.
                                                                                         *
                                                                                         * @providesModule TransformPropTypes
                                                                                         * 
                                                                                         */

var TransformPropTypes = {
  transform: (0, _propTypes.arrayOf)((0, _propTypes.oneOfType)([(0, _propTypes.shape)({ perspective: numberOrString }), (0, _propTypes.shape)({ rotate: _propTypes.string }), (0, _propTypes.shape)({ rotateX: _propTypes.string }), (0, _propTypes.shape)({ rotateY: _propTypes.string }), (0, _propTypes.shape)({ rotateZ: _propTypes.string }), (0, _propTypes.shape)({ scale: _propTypes.number }), (0, _propTypes.shape)({ scaleX: _propTypes.number }), (0, _propTypes.shape)({ scaleY: _propTypes.number }), (0, _propTypes.shape)({ skewX: _propTypes.string }), (0, _propTypes.shape)({ skewY: _propTypes.string }), (0, _propTypes.shape)({ translateX: numberOrString }), (0, _propTypes.shape)({ translateY: numberOrString }), (0, _propTypes.shape)({ translateZ: numberOrString }), (0, _propTypes.shape)({ translate3d: _propTypes.string })])),
  transformOrigin: _propTypes.string
};

exports.default = TransformPropTypes;

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/applyLayout/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ExecutionEnvironment = __webpack_require__("./node_modules/fbjs/lib/ExecutionEnvironment.js");

var _debounce = __webpack_require__("./node_modules/debounce/index.js");

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Nicolas Gallagher.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 */

var emptyObject = {};
var registry = {};

var id = 1;
var guid = function guid() {
  return 'r-' + id++;
};

if (_ExecutionEnvironment.canUseDOM) {
  var triggerAll = function triggerAll() {
    Object.keys(registry).forEach(function (key) {
      var instance = registry[key];
      instance._handleLayout();
    });
  };

  window.addEventListener('resize', (0, _debounce2.default)(triggerAll, 16), false);
}

var safeOverride = function safeOverride(original, next) {
  if (original) {
    return function prototypeOverride() {
      original.call(this);
      next.call(this);
    };
  }
  return next;
};

var applyLayout = function applyLayout(Component) {
  var componentDidMount = Component.prototype.componentDidMount;
  var componentDidUpdate = Component.prototype.componentDidUpdate;
  var componentWillUnmount = Component.prototype.componentWillUnmount;

  Component.prototype.componentDidMount = safeOverride(componentDidMount, function componentDidMount() {
    this._layoutState = emptyObject;
    this._isMounted = true;
    this._onLayoutId = guid();
    registry[this._onLayoutId] = this;
    this._handleLayout();
  });

  Component.prototype.componentDidUpdate = safeOverride(componentDidUpdate, function componentDidUpdate() {
    this._handleLayout();
  });

  Component.prototype.componentWillUnmount = safeOverride(componentWillUnmount, function componentWillUnmount() {
    this._isMounted = false;
    delete registry[this._onLayoutId];
  });

  Component.prototype._handleLayout = function () {
    var _this = this;

    var layout = this._layoutState;
    var onLayout = this.props.onLayout;


    if (onLayout) {
      this.measure(function (x, y, width, height) {
        if (!_this._isMounted) return;

        if (layout.x !== x || layout.y !== y || layout.width !== width || layout.height !== height) {
          _this._layoutState = { x: x, y: y, width: width, height: height };
          var nativeEvent = { layout: _this._layoutState };
          onLayout({ nativeEvent: nativeEvent, timeStamp: Date.now() });
        }
      });
    }
  };
  return Component;
};

exports.default = applyLayout;

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/applyNativeMethods/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _NativeMethodsMixin = __webpack_require__("./node_modules/react-native-web/dist/modules/NativeMethodsMixin/index.js");

var _NativeMethodsMixin2 = _interopRequireDefault(_NativeMethodsMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var applyNativeMethods = function applyNativeMethods(Component) {
  Object.keys(_NativeMethodsMixin2.default).forEach(function (method) {
    if (!Component.prototype[method]) {
      Component.prototype[method] = _NativeMethodsMixin2.default[method];
    }
  });
  return Component;
}; /**
    * Copyright (c) 2015-present, Nicolas Gallagher.
    * All rights reserved.
    *
    * This source code is licensed under the BSD-style license found in the
    * LICENSE file in the root directory of this source tree.
    *
    * @noflow
    */

exports.default = applyNativeMethods;

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/createDOMProps/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _AccessibilityUtil = __webpack_require__("./node_modules/react-native-web/dist/modules/AccessibilityUtil/index.js");

var _AccessibilityUtil2 = _interopRequireDefault(_AccessibilityUtil);

var _StyleSheet = __webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js");

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _styleResolver2 = __webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/styleResolver.js");

var _styleResolver3 = _interopRequireDefault(_styleResolver2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Copyright (c) 2015-present, Nicolas Gallagher.
                                                                                                                                                                                                                              * All rights reserved.
                                                                                                                                                                                                                              *
                                                                                                                                                                                                                              * This source code is licensed under the BSD-style license found in the
                                                                                                                                                                                                                              * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                              *
                                                                                                                                                                                                                              * @noflow
                                                                                                                                                                                                                              */

var emptyObject = {};

var resetStyles = _StyleSheet2.default.create({
  ariaButton: {
    cursor: 'pointer'
  },
  button: {
    appearance: 'none',
    backgroundColor: 'transparent',
    color: 'inherit',
    font: 'inherit',
    textAlign: 'inherit'
  },
  heading: {
    font: 'inherit'
  },
  link: {
    backgroundColor: 'transparent',
    color: 'inherit',
    textDecorationLine: 'none'
  },
  list: {
    listStyle: 'none'
  }
});

var pointerEventsStyles = _StyleSheet2.default.create({
  auto: {
    pointerEvents: 'auto'
  },
  'box-none': {
    pointerEvents: 'box-none'
  },
  'box-only': {
    pointerEvents: 'box-only'
  },
  none: {
    pointerEvents: 'none'
  }
});

var defaultStyleResolver = function defaultStyleResolver(style) {
  return _styleResolver3.default.resolve(style);
};

var createDOMProps = function createDOMProps(component, props, styleResolver) {
  if (!styleResolver) {
    styleResolver = defaultStyleResolver;
  }

  if (!props) {
    props = emptyObject;
  }

  var _props = props,
      accessibilityLabel = _props.accessibilityLabel,
      accessibilityLiveRegion = _props.accessibilityLiveRegion,
      importantForAccessibility = _props.importantForAccessibility,
      placeholderTextColor = _props.placeholderTextColor,
      pointerEvents = _props.pointerEvents,
      providedStyle = _props.style,
      testID = _props.testID,
      accessible = _props.accessible,
      accessibilityComponentType = _props.accessibilityComponentType,
      accessibilityRole = _props.accessibilityRole,
      accessibilityTraits = _props.accessibilityTraits,
      domProps = _objectWithoutProperties(_props, ['accessibilityLabel', 'accessibilityLiveRegion', 'importantForAccessibility', 'placeholderTextColor', 'pointerEvents', 'style', 'testID', 'accessible', 'accessibilityComponentType', 'accessibilityRole', 'accessibilityTraits']);

  var isDisabled = _AccessibilityUtil2.default.isDisabled(props);
  var role = _AccessibilityUtil2.default.propsToAriaRole(props);
  var tabIndex = _AccessibilityUtil2.default.propsToTabIndex(props);
  var reactNativeStyle = [component === 'a' && resetStyles.link, component === 'button' && resetStyles.button, role === 'heading' && resetStyles.heading, component === 'ul' && resetStyles.list, role === 'button' && !isDisabled && resetStyles.ariaButton, pointerEvents && pointerEventsStyles[pointerEvents], providedStyle, placeholderTextColor && { placeholderTextColor: placeholderTextColor }];

  var _styleResolver = styleResolver(reactNativeStyle),
      className = _styleResolver.className,
      style = _styleResolver.style;

  if (isDisabled) {
    domProps['aria-disabled'] = true;
  }
  if (importantForAccessibility === 'no-hide-descendants') {
    domProps['aria-hidden'] = true;
  }
  if (accessibilityLabel && accessibilityLabel.constructor === String) {
    domProps['aria-label'] = accessibilityLabel;
  }
  if (accessibilityLiveRegion && accessibilityLiveRegion.constructor === String) {
    domProps['aria-live'] = accessibilityLiveRegion === 'none' ? 'off' : accessibilityLiveRegion;
  }
  if (className && className.constructor === String) {
    domProps.className = domProps.className ? domProps.className + ' ' + className : className;
  }
  if (component === 'a' && domProps.target === '_blank') {
    domProps.rel = (domProps.rel || '') + ' noopener noreferrer';
  }
  if (role && role.constructor === String && role !== 'label') {
    domProps.role = role;
  }
  if (style) {
    domProps.style = style;
  }
  if (tabIndex) {
    domProps.tabIndex = tabIndex;
  }
  if (testID && testID.constructor === String) {
    domProps['data-testid'] = testID;
  }

  return domProps;
};

exports.default = createDOMProps;

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/createStrictShapeTypeChecker/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createStrictShapeTypeChecker(shapeTypes) {
  function checkType(isRequired, props, propName, componentName, location) {
    if (!props[propName]) {
      if (isRequired) {
        (0, _invariant2.default)(false, 'Required object `' + propName + '` was not specified in `' + componentName + '`.');
      }
      return;
    }
    var propValue = props[propName];
    var propType = typeof propValue;
    var locationName = location || '(unknown)';
    if (propType !== 'object') {
      (0, _invariant2.default)(false, 'Invalid ' + locationName + ' `' + propName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
    }
    // We need to check all keys in case some are required but missing from
    // props.
    var allKeys = Object.assign({}, props[propName], shapeTypes);

    for (var _len = arguments.length, rest = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      rest[_key - 5] = arguments[_key];
    }

    for (var _key2 in allKeys) {
      var checker = shapeTypes[_key2];
      if (!checker) {
        (0, _invariant2.default)(false, 'Invalid props.' + propName + ' key `' + _key2 + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
      }
      var error = checker.apply(undefined, [propValue, _key2, componentName, location].concat(rest));
      if (error) {
        (0, _invariant2.default)(false, error.message + '\nBad object: ' + JSON.stringify(props[propName], null, '  '));
      }
    }
  }
  function chainedCheckType(props, propName, componentName, location) {
    for (var _len2 = arguments.length, rest = Array(_len2 > 4 ? _len2 - 4 : 0), _key3 = 4; _key3 < _len2; _key3++) {
      rest[_key3 - 4] = arguments[_key3];
    }

    return checkType.apply(undefined, [false, props, propName, componentName, location].concat(rest));
  }
  chainedCheckType.isRequired = checkType.bind(null, true);
  return chainedCheckType;
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule createStrictShapeTypeChecker
   * 
   */

exports.default = createStrictShapeTypeChecker;

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/flattenArray/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function flattenArray(array) {
  function flattenDown(array, result) {
    for (var i = 0; i < array.length; i++) {
      var value = array[i];

      if (Array.isArray(value)) {
        flattenDown(value, result);
      } else if (value != null && value !== false) {
        result.push(value);
      }
    }

    return result;
  }
  return flattenDown(array, []);
}

exports.default = flattenArray;

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/hydrate/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _reactDom = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");

exports.default = _reactDom.hydrate; /**
                                      * Copyright (c) 2016-present, Nicolas Gallagher.
                                      * All rights reserved.
                                      *
                                      * This source code is licensed under the BSD-style license found in the
                                      * LICENSE file in the root directory of this source tree.
                                      *
                                      * @noflow
                                      */

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/injectResponderEventPlugin/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _normalizeNativeEvent = __webpack_require__("./node_modules/react-native-web/dist/modules/normalizeNativeEvent/index.js");

var _normalizeNativeEvent2 = _interopRequireDefault(_normalizeNativeEvent);

var _reactDom = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _unstableNativeDependencies = __webpack_require__("./node_modules/react-dom/unstable-native-dependencies.js");

var _unstableNativeDependencies2 = _interopRequireDefault(_unstableNativeDependencies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EventPluginHub = _reactDom2.default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.EventPluginHub; // based on https://github.com/facebook/react/pull/4303/files

var ResponderEventPlugin = _unstableNativeDependencies2.default.ResponderEventPlugin,
    ResponderTouchHistoryStore = _unstableNativeDependencies2.default.ResponderTouchHistoryStore;


var topMouseDown = 'topMouseDown';
var topMouseMove = 'topMouseMove';
var topMouseUp = 'topMouseUp';
var topScroll = 'topScroll';
var topSelectionChange = 'topSelectionChange';
var topTouchCancel = 'topTouchCancel';
var topTouchEnd = 'topTouchEnd';
var topTouchMove = 'topTouchMove';
var topTouchStart = 'topTouchStart';

var endDependencies = [topTouchCancel, topTouchEnd, topMouseUp];
var moveDependencies = [topTouchMove, topMouseMove];
var startDependencies = [topTouchStart, topMouseDown];

/**
 * Setup ResponderEventPlugin dependencies
 */
ResponderEventPlugin.eventTypes.responderMove.dependencies = moveDependencies;
ResponderEventPlugin.eventTypes.responderEnd.dependencies = endDependencies;
ResponderEventPlugin.eventTypes.responderStart.dependencies = startDependencies;
ResponderEventPlugin.eventTypes.responderRelease.dependencies = endDependencies;
ResponderEventPlugin.eventTypes.responderTerminationRequest.dependencies = [];
ResponderEventPlugin.eventTypes.responderGrant.dependencies = [];
ResponderEventPlugin.eventTypes.responderReject.dependencies = [];
ResponderEventPlugin.eventTypes.responderTerminate.dependencies = [];
ResponderEventPlugin.eventTypes.moveShouldSetResponder.dependencies = moveDependencies;
ResponderEventPlugin.eventTypes.selectionChangeShouldSetResponder.dependencies = [topSelectionChange];
ResponderEventPlugin.eventTypes.scrollShouldSetResponder.dependencies = [topScroll];
ResponderEventPlugin.eventTypes.startShouldSetResponder.dependencies = startDependencies;

var originalRecordTouchTrack = ResponderTouchHistoryStore.recordTouchTrack;

ResponderTouchHistoryStore.recordTouchTrack = function (topLevelType, nativeEvent) {
  // Filter out mouse-move events when the mouse button is not down
  if (topLevelType === topMouseMove && !ResponderTouchHistoryStore.touchHistory.touchBank.length) {
    return;
  }

  var normalizedEvent = (0, _normalizeNativeEvent2.default)(nativeEvent);
  originalRecordTouchTrack.call(ResponderTouchHistoryStore, topLevelType, normalizedEvent);
};

EventPluginHub.injection.injectEventPluginsByName({
  ResponderEventPlugin: ResponderEventPlugin
});

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/mapKeyValue/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var hasOwnProperty = Object.prototype.hasOwnProperty;

var mapKeyValue = function mapKeyValue(obj, fn) {
  var result = [];
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key)) {
      var r = fn(key, obj[key]);
      r && result.push(r);
    }
  }
  return result;
};

exports.default = mapKeyValue;

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/modality/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ExecutionEnvironment = __webpack_require__("./node_modules/fbjs/lib/ExecutionEnvironment.js");

var modality = function modality() {
  if (!_ExecutionEnvironment.canUseDOM) {
    return;
  }

  var styleElement = void 0;
  var hadKeyboardEvent = false;
  var keyboardThrottleTimeoutID = 0;

  var proto = window.Element.prototype;
  var matches = proto.matches || proto.mozMatchesSelector || proto.msMatchesSelector || proto.webkitMatchesSelector;

  // These elements should always have a focus ring drawn, because they are
  // associated with switching to a keyboard modality.
  var keyboardModalityWhitelist = ['input:not([type])', 'input[type=text]', 'input[type=search]', 'input[type=url]', 'input[type=tel]', 'input[type=email]', 'input[type=password]', 'input[type=number]', 'input[type=date]', 'input[type=month]', 'input[type=week]', 'input[type=time]', 'input[type=datetime]', 'input[type=datetime-local]', 'textarea', '[role=textbox]'].join(',');

  /**
   * Disable the focus ring by default
   */
  var initialize = function initialize() {
    // check if the style sheet needs to be created
    var id = 'react-native-modality';
    styleElement = document.getElementById(id);
    if (!styleElement) {
      // removes focus styles by default
      var style = '<style id="' + id + '">:focus { outline: none; }</style>';
      document.head.insertAdjacentHTML('afterbegin', style);
      styleElement = document.getElementById(id);
    }
  };

  /**
   * Computes whether the given element should automatically trigger the
   * `focus-ring`.
   */
  var focusTriggersKeyboardModality = function focusTriggersKeyboardModality(el) {
    if (matches) {
      return matches.call(el, keyboardModalityWhitelist) && matches.call(el, ':not([readonly])');
    } else {
      return false;
    }
  };

  /**
   * Add the focus ring to the focused element
   */
  var addFocusRing = function addFocusRing() {
    if (styleElement) {
      styleElement.disabled = true;
    }
  };

  /**
   * Remove the focus ring
   */
  var removeFocusRing = function removeFocusRing() {
    if (styleElement) {
      styleElement.disabled = false;
    }
  };

  /**
   * On `keydown`, set `hadKeyboardEvent`, to be removed 100ms later if there
   * are no further keyboard events. The 100ms throttle handles cases where
   * focus is redirected programmatically after a keyboard event, such as
   * opening a menu or dialog.
   */
  var handleKeyDown = function handleKeyDown(e) {
    hadKeyboardEvent = true;
    if (keyboardThrottleTimeoutID !== 0) {
      clearTimeout(keyboardThrottleTimeoutID);
    }
    keyboardThrottleTimeoutID = setTimeout(function () {
      hadKeyboardEvent = false;
      keyboardThrottleTimeoutID = 0;
    }, 100);
  };

  /**
   * Display the focus-ring when the keyboard was used to focus
   */
  var handleFocus = function handleFocus(e) {
    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusRing();
    }
  };

  /**
   * Remove the focus-ring when the keyboard was used to focus
   */
  var handleBlur = function handleBlur() {
    if (!hadKeyboardEvent) {
      removeFocusRing();
    }
  };

  if (document.body && document.body.addEventListener) {
    initialize();
    document.body.addEventListener('keydown', handleKeyDown, true);
    document.body.addEventListener('focus', handleFocus, true);
    document.body.addEventListener('blur', handleBlur, true);
  }
}; /**
    * Adapts focus styles based on the user's active input modality (i.e., how
    * they are interacting with the UI right now).
    *
    * Focus styles are only relevant when using the keyboard to interact with the
    * page. If we only show the focus ring when relevant, we can avoid user
    * confusion without compromising accessibility.
    *
    * The script uses two heuristics to determine whether the keyboard is being used:
    *
    * 1. a keydown event occurred immediately before a focus event;
    * 2. a focus event happened on an element which requires keyboard interaction (e.g., a text field);
    *
    * Based on https://github.com/WICG/focus-ring
    *
    * @noflow
    */

exports.default = modality;

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/multiplyStyleLengthValue/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * Copyright (c) 2015-present, Nicolas Gallagher.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @noflow
 */

var CSS_UNIT_RE = /^[+-]?\d*(?:\.\d+)?(?:[Ee][+-]?\d+)?(%|\w*)/;

var getUnit = function getUnit(str) {
  return str.match(CSS_UNIT_RE)[1];
};

var isNumeric = function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

var multiplyStyleLengthValue = function multiplyStyleLengthValue(value, multiple) {
  if (typeof value === 'string') {
    var number = parseFloat(value) * multiple;
    var unit = getUnit(value);
    return '' + number + unit;
  } else if (isNumeric(value)) {
    return value * multiple;
  }
};

exports.default = multiplyStyleLengthValue;

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/normalizeNativeEvent/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * Copyright (c) 2015-present, Nicolas Gallagher.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var emptyArray = [];
var emptyFunction = function emptyFunction() {};

// Mobile Safari re-uses touch objects, so we copy the properties we want and normalize the identifier
var normalizeTouches = function normalizeTouches(touches) {
  if (!touches) {
    return emptyArray;
  }

  return Array.prototype.slice.call(touches).map(function (touch) {
    var identifier = touch.identifier > 20 ? touch.identifier % 20 : touch.identifier;
    var locationX = void 0,
        locationY = void 0;

    var node = touch.target;
    if (node) {
      var isElement = node.nodeType === 1 /* Node.ELEMENT_NODE */;
      if (isElement && typeof node.getBoundingClientRect === 'function') {
        var rect = node.getBoundingClientRect();
        locationX = touch.pageX - rect.left;
        locationY = touch.pageY - rect.top;
      }
    }

    return {
      _normalized: true,
      clientX: touch.clientX,
      clientY: touch.clientY,
      force: touch.force,
      locationX: locationX,
      locationY: locationY,
      identifier: identifier,
      pageX: touch.pageX,
      pageY: touch.pageY,
      radiusX: touch.radiusX,
      radiusY: touch.radiusY,
      rotationAngle: touch.rotationAngle,
      screenX: touch.screenX,
      screenY: touch.screenY,
      target: touch.target,
      // normalize the timestamp
      // https://stackoverflow.com/questions/26177087/ios-8-mobile-safari-wrong-timestamp-on-touch-events
      timestamp: Date.now()
    };
  });
};

function normalizeTouchEvent(nativeEvent) {
  var changedTouches = normalizeTouches(nativeEvent.changedTouches);
  var touches = normalizeTouches(nativeEvent.touches);

  var preventDefault = typeof nativeEvent.preventDefault === 'function' ? nativeEvent.preventDefault.bind(nativeEvent) : emptyFunction;
  var stopImmediatePropagation = typeof nativeEvent.stopImmediatePropagation === 'function' ? nativeEvent.stopImmediatePropagation.bind(nativeEvent) : emptyFunction;
  var stopPropagation = typeof nativeEvent.stopPropagation === 'function' ? nativeEvent.stopPropagation.bind(nativeEvent) : emptyFunction;

  var event = {
    _normalized: true,
    changedTouches: changedTouches,
    identifier: undefined,
    locationX: undefined,
    locationY: undefined,
    pageX: nativeEvent.pageX,
    pageY: nativeEvent.pageY,
    preventDefault: preventDefault,
    stopImmediatePropagation: stopImmediatePropagation,
    stopPropagation: stopPropagation,
    target: nativeEvent.target,
    // normalize the timestamp
    // https://stackoverflow.com/questions/26177087/ios-8-mobile-safari-wrong-timestamp-on-touch-events
    timestamp: Date.now(),
    touches: touches
  };

  if (changedTouches[0]) {
    event.identifier = changedTouches[0].identifier;
    event.pageX = changedTouches[0].pageX;
    event.pageY = changedTouches[0].pageY;
    event.locationX = changedTouches[0].locationX;
    event.locationY = changedTouches[0].locationY;
  }

  return event;
}

function normalizeMouseEvent(nativeEvent) {
  var touches = [{
    _normalized: true,
    clientX: nativeEvent.clientX,
    clientY: nativeEvent.clientY,
    force: nativeEvent.force,
    locationX: nativeEvent.clientX,
    locationY: nativeEvent.clientY,
    identifier: 0,
    pageX: nativeEvent.pageX,
    pageY: nativeEvent.pageY,
    screenX: nativeEvent.screenX,
    screenY: nativeEvent.screenY,
    target: nativeEvent.target,
    timestamp: Date.now()
  }];

  var preventDefault = typeof nativeEvent.preventDefault === 'function' ? nativeEvent.preventDefault.bind(nativeEvent) : emptyFunction;
  var stopImmediatePropagation = typeof nativeEvent.stopImmediatePropagation === 'function' ? nativeEvent.stopImmediatePropagation.bind(nativeEvent) : emptyFunction;
  var stopPropagation = typeof nativeEvent.stopPropagation === 'function' ? nativeEvent.stopPropagation.bind(nativeEvent) : emptyFunction;

  return {
    _normalized: true,
    changedTouches: touches,
    identifier: touches[0].identifier,
    locationX: nativeEvent.offsetX,
    locationY: nativeEvent.offsetY,
    pageX: nativeEvent.pageX,
    pageY: nativeEvent.pageY,
    preventDefault: preventDefault,
    stopImmediatePropagation: stopImmediatePropagation,
    stopPropagation: stopPropagation,
    target: nativeEvent.target,
    timestamp: touches[0].timestamp,
    touches: nativeEvent.type === 'mouseup' ? emptyArray : touches
  };
}

// TODO: how to best handle keyboard events?
function normalizeNativeEvent(nativeEvent) {
  if (!nativeEvent || nativeEvent._normalized) {
    return nativeEvent;
  }
  var eventType = nativeEvent.type || '';
  var mouse = eventType.indexOf('mouse') >= 0;
  if (mouse) {
    return normalizeMouseEvent(nativeEvent);
  } else {
    return normalizeTouchEvent(nativeEvent);
  }
}

exports.default = normalizeNativeEvent;

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/prefixStyles/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.prefixInlineStyles = undefined;

var _createPrefixer = __webpack_require__("./node_modules/inline-style-prefixer/static/createPrefixer.js");

var _createPrefixer2 = _interopRequireDefault(_createPrefixer);

var _static = __webpack_require__("./node_modules/react-native-web/dist/modules/prefixStyles/static.js");

var _static2 = _interopRequireDefault(_static);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Nicolas Gallagher.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

var prefixAll = (0, _createPrefixer2.default)(_static2.default);

exports.default = prefixAll;
var prefixInlineStyles = exports.prefixInlineStyles = function prefixInlineStyles(style) {
  var prefixedStyles = prefixAll(style);

  // React@15 removed undocumented support for fallback values in
  // inline-styles. Revert array values to the standard CSS value
  Object.keys(prefixedStyles).forEach(function (prop) {
    var value = prefixedStyles[prop];
    if (Array.isArray(value)) {
      prefixedStyles[prop] = value[value.length - 1];
    }
  });

  return prefixedStyles;
};

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/prefixStyles/static.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _crossFade = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/crossFade.js");

var _crossFade2 = _interopRequireDefault(_crossFade);

var _cursor = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/cursor.js");

var _cursor2 = _interopRequireDefault(_cursor);

var _filter = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/filter.js");

var _filter2 = _interopRequireDefault(_filter);

var _flex = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/flex.js");

var _flex2 = _interopRequireDefault(_flex);

var _flexboxIE = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/flexboxIE.js");

var _flexboxIE2 = _interopRequireDefault(_flexboxIE);

var _flexboxOld = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/flexboxOld.js");

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

var _gradient = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/gradient.js");

var _gradient2 = _interopRequireDefault(_gradient);

var _imageSet = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/imageSet.js");

var _imageSet2 = _interopRequireDefault(_imageSet);

var _position = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/position.js");

var _position2 = _interopRequireDefault(_position);

var _sizing = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/sizing.js");

var _sizing2 = _interopRequireDefault(_sizing);

var _transition = __webpack_require__("./node_modules/inline-style-prefixer/static/plugins/transition.js");

var _transition2 = _interopRequireDefault(_transition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var w = ['Webkit'];
var m = ['Moz'];
var ms = ['ms'];
var wm = ['Webkit', 'Moz'];
var wms = ['Webkit', 'ms'];
var wmms = ['Webkit', 'Moz', 'ms'];

exports.default = {
  plugins: [_crossFade2.default, _cursor2.default, _filter2.default, _flex2.default, _flexboxIE2.default, _flexboxOld2.default, _gradient2.default, _imageSet2.default, _position2.default, _sizing2.default, _transition2.default],
  prefixMap: {
    animation: w,
    animationDelay: w,
    animationDirection: w,
    animationFillMode: w,
    animationDuration: w,
    animationIterationCount: w,
    animationName: w,
    animationPlayState: w,
    animationTimingFunction: w,
    appearance: wm,
    userSelect: wmms,
    textEmphasisPosition: w,
    textEmphasis: w,
    textEmphasisStyle: w,
    textEmphasisColor: w,
    boxDecorationBreak: w,
    clipPath: w,
    maskImage: w,
    maskMode: w,
    maskRepeat: w,
    maskPosition: w,
    maskClip: w,
    maskOrigin: w,
    maskSize: w,
    maskComposite: w,
    mask: w,
    maskBorderSource: w,
    maskBorderMode: w,
    maskBorderSlice: w,
    maskBorderWidth: w,
    maskBorderOutset: w,
    maskBorderRepeat: w,
    maskBorder: w,
    maskType: w,
    textDecorationStyle: w,
    textDecorationSkip: w,
    textDecorationLine: w,
    textDecorationColor: w,
    filter: w,
    fontFeatureSettings: w,
    breakAfter: wmms,
    breakBefore: wmms,
    breakInside: wmms,
    columnCount: wm,
    columnFill: wm,
    columnGap: wm,
    columnRule: wm,
    columnRuleColor: wm,
    columnRuleStyle: wm,
    columnRuleWidth: wm,
    columns: wm,
    columnSpan: wm,
    columnWidth: wm,
    writingMode: wms,
    flex: wms,
    flexBasis: w,
    flexDirection: wms,
    flexGrow: w,
    flexFlow: wms,
    flexShrink: w,
    flexWrap: wms,
    alignContent: w,
    alignItems: w,
    alignSelf: w,
    justifyContent: w,
    order: w,
    transform: w,
    transformOrigin: w,
    transformOriginX: w,
    transformOriginY: w,
    backfaceVisibility: w,
    perspective: w,
    perspectiveOrigin: w,
    transformStyle: w,
    transformOriginZ: w,
    backdropFilter: w,
    fontKerning: w,
    scrollSnapType: wms,
    scrollSnapPointsX: wms,
    scrollSnapPointsY: wms,
    scrollSnapDestination: wms,
    scrollSnapCoordinate: wms,
    shapeImageThreshold: w,
    shapeImageMargin: w,
    shapeImageOutside: w,
    hyphens: wmms,
    flowInto: wms,
    flowFrom: wms,
    regionFragment: wms,
    textAlignLast: m,
    tabSize: m,
    wrapFlow: ms,
    wrapThrough: ms,
    wrapMargin: ms,
    touchAction: ms,
    gridTemplateColumns: ms,
    gridTemplateRows: ms,
    gridTemplateAreas: ms,
    gridTemplate: ms,
    gridAutoColumns: ms,
    gridAutoRows: ms,
    gridAutoFlow: ms,
    grid: ms,
    gridRowStart: ms,
    gridColumnStart: ms,
    gridRowEnd: ms,
    gridRow: ms,
    gridColumn: ms,
    gridColumnEnd: ms,
    gridColumnGap: ms,
    gridRowGap: ms,
    gridArea: ms,
    gridGap: ms,
    textSizeAdjust: wms,
    borderImage: w,
    borderImageOutset: w,
    borderImageRepeat: w,
    borderImageSlice: w,
    borderImageSource: w,
    borderImageWidth: w,
    transitionDelay: w,
    transitionDuration: w,
    transitionProperty: w,
    transitionTimingFunction: w
  }
};

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/unitlessNumbers/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var unitlessNumbers = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexOrder: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  fontWeight: true,
  gridRow: true,
  gridColumn: true,
  lineClamp: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
  // transform types
  scale: true,
  scaleX: true,
  scaleY: true,
  scaleZ: true,
  // RN properties
  shadowOpacity: true
};

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes = ['ms', 'Moz', 'O', 'Webkit'];
var prefixKey = function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
};
Object.keys(unitlessNumbers).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    unitlessNumbers[prefixKey(prefix, prop)] = unitlessNumbers[prop];
  });
});

exports.default = unitlessNumbers;

/***/ }),

/***/ "./node_modules/react-native-web/dist/vendor/dangerousStyleValue/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _unitlessNumbers = __webpack_require__("./node_modules/react-native-web/dist/modules/unitlessNumbers/index.js");

var _unitlessNumbers2 = _interopRequireDefault(_unitlessNumbers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */
function dangerousStyleValue(name, value, isCustomProperty) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901

  var isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(_unitlessNumbers2.default.hasOwnProperty(name) && _unitlessNumbers2.default[name])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return ('' + value).trim();
} /* eslint-disable */

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule dangerousStyleValue
 * From React 16.0.0
 */

exports.default = dangerousStyleValue;

/***/ }),

/***/ "./node_modules/react-native-web/dist/vendor/hash/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/* eslint-disable */

/**
 * JS Implementation of MurmurHash2
 *
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/murmurhash-js
 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
 * @see http://sites.google.com/site/murmurhash/
 *
 * @param {string} str ASCII only
 * @param {number} seed Positive integer only
 * @return {number} 32-bit positive integer hash
 */

function murmurhash2_32_gc(str, seed) {
  var l = str.length,
      h = seed ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;

    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);

    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;

    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;

  return h >>> 0;
}

var hash = function hash(str) {
  return murmurhash2_32_gc(str, 1).toString(36);
};

exports.default = hash;

/***/ }),

/***/ "./node_modules/react-native-web/dist/vendor/setValueForStyles/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dangerousStyleValue = __webpack_require__("./node_modules/react-native-web/dist/vendor/dangerousStyleValue/index.js");

var _dangerousStyleValue2 = _interopRequireDefault(_dangerousStyleValue);

var _warnValidStyle = __webpack_require__("./node_modules/react-native-web/dist/vendor/warnValidStyle/index.js");

var _warnValidStyle2 = _interopRequireDefault(_warnValidStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sets the value for multiple styles on a node.  If a value is specified as
 * '' (empty string), the corresponding style property will be unset.
 *
 * @param {DOMElement} node
 * @param {object} styles
 * @param {ReactDOMComponent} component
 */
/* eslint-disable */

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * From React 16.0.0
 */

var setValueForStyles = function setValueForStyles(node, styles, component) {
  var style = node.style;
  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }
    var isCustomProperty = styleName.indexOf('--') === 0;
    if (true) {
      if (!isCustomProperty) {
        (0, _warnValidStyle2.default)(styleName, styles[styleName], component);
      }
    }
    var styleValue = (0, _dangerousStyleValue2.default)(styleName, styles[styleName], isCustomProperty);
    if (styleName === 'float') {
      styleName = 'cssFloat';
    }
    if (isCustomProperty) {
      style.setProperty(styleName, styleValue);
    } else if (styleValue) {
      style[styleName] = styleValue;
    } else {
      style[styleName] = '';
    }
  }
};

exports.default = setValueForStyles;

/***/ }),

/***/ "./node_modules/react-native-web/dist/vendor/warnValidStyle/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/* eslint-disable */

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule warnValidStyle
 * From React 16.0.0
 */

var emptyFunction = __webpack_require__("./node_modules/fbjs/lib/emptyFunction.js");

var warnValidStyle = emptyFunction;

if (true) {
  var getComponentName = function getComponentName(instanceOrFiber) {
    if (typeof instanceOrFiber.getName === 'function') {
      // Stack reconciler
      var instance = instanceOrFiber;
      return instance.getName();
    }
    if (typeof instanceOrFiber.tag === 'number') {
      // Fiber reconciler
      var fiber = instanceOrFiber;
      var type = fiber.type;

      if (typeof type === 'string') {
        return type;
      }
      if (typeof type === 'function') {
        return type.displayName || type.name;
      }
    }
    return null;
  };

  // 'msTransform' is correct, but the other prefixes should be capitalized


  var camelizeStyleName = __webpack_require__("./node_modules/fbjs/lib/camelizeStyleName.js");
  var warning = __webpack_require__("./node_modules/fbjs/lib/warning.js");

  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

  // style values shouldn't contain a semicolon
  var badStyleValueWithSemicolonPattern = /;\s*$/;

  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;
  var warnedForInfinityValue = false;

  var warnHyphenatedStyleName = function warnHyphenatedStyleName(name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning(false, 'Unsupported style property %s. Did you mean %s?%s', name, camelizeStyleName(name), checkRenderMessage(owner));
  };

  var warnBadVendoredStyleName = function warnBadVendoredStyleName(name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner));
  };

  var warnStyleValueWithSemicolon = function warnStyleValueWithSemicolon(name, value, owner) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;
    warning(false, "Style property values shouldn't contain a semicolon.%s " + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, ''));
  };

  var warnStyleValueIsNaN = function warnStyleValueIsNaN(name, value, owner) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;
    warning(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner));
  };

  var warnStyleValueIsInfinity = function warnStyleValueIsInfinity(name, value, owner) {
    if (warnedForInfinityValue) {
      return;
    }

    warnedForInfinityValue = true;
    warning(false, '`Infinity` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner));
  };

  var checkRenderMessage = function checkRenderMessage(owner) {
    var ownerName;
    if (owner != null) {
      // Stack passes the owner manually all the way to CSSPropertyOperations.
      ownerName = getComponentName(owner);
    } else {
      // Fiber doesn't pass it but uses ReactDebugCurrentFiber to track it.
      // It is only enabled in development and tracks host components too.
      // var {getCurrentFiberOwnerName} = require('ReactDebugCurrentFiber');
      //  ownerName = getCurrentFiberOwnerName();
      // TODO: also report the stack.
    }
    if (ownerName) {
      return '\n\nCheck the render method of `' + ownerName + '`.';
    }
    return '';
  };

  warnValidStyle = function warnValidStyle(name, value, component) {
    var owner;
    if (component) {
      // TODO: this only works with Stack. Seems like we need to add unit tests?
      // owner = component._currentElement._owner;
    }
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name, owner);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name, owner);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value, owner);
    }

    if (typeof value === 'number') {
      if (isNaN(value)) {
        warnStyleValueIsNaN(name, value, owner);
      } else if (!isFinite(value)) {
        warnStyleValueIsInfinity(name, value, owner);
      }
    }
  };
}

exports.default = warnValidStyle;

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/

var isProd = process.env && "development" === 'production';
var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet = function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === undefined ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = '#' + name + '-deleted-rule____{}';

    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;

    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
  }

  (0, _createClass3.default)(StyleSheet, [{
    key: 'setOptimizeForSpeed',
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');

      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: 'isOptimizeForSpeed',
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: 'inject',
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;
      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();
        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.'); // eslint-disable-line no-console
          }
          this.flush();
          this._injected = true;
        }
        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = { cssText: rule };
          } else {
            _this._serverSheet.cssRules.push({ cssText: rule });
          }
          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: 'getSheetForTag',
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      }

      // this weirdness brought to you by firefox
      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: 'getSheet',
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }
        this._serverSheet.insertRule(rule, index);
        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();
        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        }
        // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule
        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];
        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;
        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (err) {
          if (!isProd) {
            console.warn('StyleSheet: illegal rule: \n\n' + rule + '\n\nSee https://stackoverflow.com/q/20007992 for more info'); // eslint-disable-line no-console
          }
          // In order to preserve the indices we insert a deleteRulePlaceholder
          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, 'old rule at index `' + index + '` not found');
        tag.textContent = rule;
      }
      return index;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);
        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, 'rule at index `' + index + '` not found');
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;
      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });
        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }
      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }
        return rules;
      }, []);
    }
  }, {
    key: 'makeStyleTag',
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }
      var tag = document.createElement('style');
      tag.type = 'text/css';
      tag.setAttribute('data-' + name, '');
      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }
      var head = document.head || document.getElementsByTagName('head')[0];
      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }
      return tag;
    }
  }, {
    key: 'length',
    get: function get() {
      return this._rulesCount;
    }
  }]);
  return StyleSheet;
}();

exports.default = StyleSheet;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheet: ' + message + '.');
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/server.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getIterator2 = __webpack_require__("./node_modules/babel-runtime/core-js/get-iterator.js");

var _getIterator3 = _interopRequireDefault(_getIterator2);

exports.default = flushToReact;
exports.flushToHTML = flushToHTML;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__("./node_modules/styled-jsx/dist/style.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function flushToReact() {
  var mem = (0, _style.flush)();
  var arr = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(mem), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = (0, _slicedToArray3.default)(_step.value, 2),
          id = _step$value[0],
          css = _step$value[1];

      arr.push(_react2.default.createElement('style', {
        id: '__' + id,
        // Avoid warnings upon render with a key
        key: '__' + id,
        dangerouslySetInnerHTML: {
          __html: css
        }
      }));
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

  return arr;
}

function flushToHTML() {
  var mem = (0, _style.flush)();
  var html = '';
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = (0, _getIterator3.default)(mem), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _step2$value = (0, _slicedToArray3.default)(_step2.value, 2),
          id = _step2$value[0],
          css = _step2$value[1];

      html += '<style id="__' + id + '">' + css + '</style>';
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

  return html;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _map = __webpack_require__("./node_modules/babel-runtime/core-js/map.js");

var _map2 = _interopRequireDefault(_map);

var _slicedToArray2 = __webpack_require__("./node_modules/babel-runtime/helpers/slicedToArray.js");

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _getPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/get-prototype-of.js");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

exports.flush = flush;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _stylesheetRegistry = __webpack_require__("./node_modules/styled-jsx/dist/stylesheet-registry.js");

var _stylesheetRegistry2 = _interopRequireDefault(_stylesheetRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheetRegistry = new _stylesheetRegistry2.default();

var JSXStyle = function (_Component) {
  (0, _inherits3.default)(JSXStyle, _Component);

  function JSXStyle() {
    (0, _classCallCheck3.default)(this, JSXStyle);
    return (0, _possibleConstructorReturn3.default)(this, (JSXStyle.__proto__ || (0, _getPrototypeOf2.default)(JSXStyle)).apply(this, arguments));
  }

  (0, _createClass3.default)(JSXStyle, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      styleSheetRegistry.add(this.props);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.css !== nextProps.css;
    }

    // To avoid FOUC, we process new changes
    // on `componentWillUpdate` rather than `componentDidUpdate`.

  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      styleSheetRegistry.update(this.props, nextProps);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'dynamic',
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var _tagInfo = (0, _slicedToArray3.default)(tagInfo, 2),
            baseId = _tagInfo[0],
            props = _tagInfo[1];

        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);
  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;
function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return new _map2.default(cssRules);
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("./node_modules/babel-runtime/core-js/object/keys.js");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("./node_modules/babel-runtime/helpers/createClass.js");

var _createClass3 = _interopRequireDefault(_createClass2);

var _stringHash = __webpack_require__("./node_modules/string-hash/index.js");

var _stringHash2 = _interopRequireDefault(_stringHash);

var _stylesheet = __webpack_require__("./node_modules/styled-jsx/dist/lib/stylesheet.js");

var _stylesheet2 = _interopRequireDefault(_stylesheet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/ig, '\\/style');
};

var StyleSheetRegistry = function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === undefined ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === undefined ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === undefined ? typeof window !== 'undefined' : _ref$isBrowser;

    (0, _classCallCheck3.default)(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet2.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();
    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);
      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};

    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  (0, _createClass3.default)(StyleSheetRegistry, [{
    key: 'add',
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.css);
        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);
        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = (0, _keys2.default)(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _getIdAndRules = this.getIdAndRules(props),
          styleId = _getIdAndRules.styleId,
          rules = _getIdAndRules.rules;

      // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      })
      // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });

      if (indices.length > 0) {
        this._indices[styleId] = indices;
        this._instancesCounts[styleId] = 1;
      }
    }
  }, {
    key: 'remove',
    value: function remove(props) {
      var _this2 = this;

      var _getIdAndRules2 = this.getIdAndRules(props),
          styleId = _getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, 'styleId: `' + styleId + '` not found');
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];
        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });
          delete this._indices[styleId];
        }
        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: 'update',
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: 'flush',
    value: function flush() {
      this._sheet.flush();
      this._sheet.inject();
      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};

      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: 'cssRules',
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? (0, _keys2.default)(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];
      var cssRules = this._sheet.cssRules();

      return fromServer.concat((0, _keys2.default)(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join('\n')];
      }));
    }

    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: 'createComputeId',
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return 'jsx-' + baseId;
        }
        var propsToString = String(props);
        var key = baseId + propsToString;
        // return `jsx-${hashString(`${baseId}-${propsToString}`)}`
        if (!cache[key]) {
          cache[key] = 'jsx-' + (0, _stringHash2.default)(baseId + '-' + propsToString);
        }
        return cache[key];
      };
    }

    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: 'createComputeSelector',
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;

      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }
        var idcss = id + css;
        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }
        return cache[idcss];
      };
    }
  }, {
    key: 'getIdAndRules',
    value: function getIdAndRules(props) {
      var _this4 = this;

      if (props.dynamic) {
        var styleId = this.computeId(props.styleId, props.dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(props.css) ? props.css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, props.css)]
        };
      }

      return {
        styleId: this.computeId(props.styleId),
        rules: Array.isArray(props.css) ? props.css : [props.css]
      };
    }

    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: 'selectFromServer',
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));

      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);
  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;


function invariant(condition, message) {
  if (!condition) {
    throw new Error('StyleSheetRegistry: ' + message + '.');
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/server.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/styled-jsx/dist/server.js")


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/_document.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyDocument; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document__ = __webpack_require__("./node_modules/next/document.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_document___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_document__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_native_web_dist_exports_AppRegistry__ = __webpack_require__("./node_modules/react-native-web/dist/exports/AppRegistry/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_native_web_dist_exports_AppRegistry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_native_web_dist_exports_AppRegistry__);

var _jsxFileName = "/Users/xyz/nextmw/pages/_document.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var index = 0; // Force Next-generated DOM elements to fill their parent's height.
// Not required for using of react-native-web, but helps normalize
// layout for top-level wrapping elements.

var normalizeNextElements = "\n  body > div:first-child,\n  #__next {\n    height: 100%;\n  }\n";

var MyDocument =
/*#__PURE__*/
function (_Document) {
  _inherits(MyDocument, _Document);

  function MyDocument() {
    _classCallCheck(this, MyDocument);

    return _possibleConstructorReturn(this, (MyDocument.__proto__ || Object.getPrototypeOf(MyDocument)).apply(this, arguments));
  }

  _createClass(MyDocument, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("html", {
        style: {
          height: '100%',
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["Head"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, "Next.js")), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("body", {
        style: {
          display: 'flex',
          height: '100%',
          width: '100%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["Main"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_document__["NextScript"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      })));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var renderPage, _AppRegistry$getAppli, getStyleElement, page, styles;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                renderPage = _ref.renderPage;
                __WEBPACK_IMPORTED_MODULE_3_react_native_web_dist_exports_AppRegistry___default.a.registerComponent('Main', function () {
                  return __WEBPACK_IMPORTED_MODULE_1_next_document__["Main"];
                });
                _AppRegistry$getAppli = __WEBPACK_IMPORTED_MODULE_3_react_native_web_dist_exports_AppRegistry___default.a.getApplication('Main'), getStyleElement = _AppRegistry$getAppli.getStyleElement;
                page = renderPage();
                styles = [__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("style", {
                  key: index++,
                  dangerouslySetInnerHTML: {
                    __html: normalizeNextElements
                  },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                  }
                }), getStyleElement()];
                return _context.abrupt("return", _objectSpread({}, page, {
                  styles: styles
                }));

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyDocument;
}(__WEBPACK_IMPORTED_MODULE_1_next_document___default.a);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(index, "index", "/Users/xyz/nextmw/pages/_document.js");
  reactHotLoader.register(normalizeNextElements, "normalizeNextElements", "/Users/xyz/nextmw/pages/_document.js");
  reactHotLoader.register(MyDocument, "MyDocument", "/Users/xyz/nextmw/pages/_document.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_document")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/_document.js");


/***/ })

},[1])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=_document.js.map