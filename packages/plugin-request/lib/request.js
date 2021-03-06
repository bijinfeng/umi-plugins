"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.useRequest = useRequest;
Object.defineProperty(exports, "UseRequestProvider", {
  enumerable: true,
  get: function get() {
    return _useRequest().UseRequestProvider;
  },
});
exports.request = exports.ErrorShowType = void 0;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function _react() {
    return data;
  };

  return data;
}

function _umiRequest() {
  const data = require("umi-request");

  _umiRequest = function _umiRequest() {
    return data;
  };

  return data;
}

function _umi() {
  const data = require("umi");

  _umi = function _umi() {
    return data;
  };

  return data;
}

function _useRequest() {
  const data = _interopRequireWildcard(require("@ahooksjs/use-request"));

  _useRequest = function _useRequest() {
    return data;
  };

  return data;
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };
  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function useRequest(service, options = {}) {
  return (0, _useRequest().default)(
    service,
    _objectSpread(
      {
        /*FRS*/
        formatResult: (res) =>
          res === null || res === void 0 ? void 0 : res.data,
        /*FRE*/
        requestMethod: (requestOptions) => {
          if (typeof requestOptions === "string") {
            return request(requestOptions);
          }

          if (typeof requestOptions === "object") {
            const url = requestOptions.url,
              rest = _objectWithoutProperties(requestOptions, ["url"]);

            return request(url, rest);
          }

          throw new Error("request options error");
        },
      },
      options
    )
  );
}

let ErrorShowType;
exports.ErrorShowType = ErrorShowType;

(function (ErrorShowType) {
  ErrorShowType[(ErrorShowType["SILENT"] = 0)] = "SILENT";
  ErrorShowType[(ErrorShowType["WARN_MESSAGE"] = 1)] = "WARN_MESSAGE";
  ErrorShowType[(ErrorShowType["ERROR_MESSAGE"] = 2)] = "ERROR_MESSAGE";
  ErrorShowType[(ErrorShowType["NOTIFICATION"] = 4)] = "NOTIFICATION";
  ErrorShowType[(ErrorShowType["REDIRECT"] = 9)] = "REDIRECT";
})(ErrorShowType || (exports.ErrorShowType = ErrorShowType = {}));

const DEFAULT_ERROR_PAGE = "/exception";
let requestMethodInstance;

const getRequestMethod = () => {
  var _requestConfig$errorC;

  if (requestMethodInstance) {
    // request method 已经示例化
    return requestMethodInstance;
  } // runtime 配置可能应为依赖顺序的问题在模块初始化的时候无法获取，所以需要封装一层在异步调用后初始化相关方法
  // 当用户的 app.ts 中依赖了该文件的情况下就该模块的初始化时间就会被提前，无法获取到运行时配置

  const requestConfig = _umi().plugin.applyPlugins({
    key: "request",
    type: _umi().ApplyPluginsType.modify,
    initialValue: {},
  });

  const errorAdaptor =
    ((_requestConfig$errorC = requestConfig.errorConfig) === null ||
    _requestConfig$errorC === void 0
      ? void 0
      : _requestConfig$errorC.adaptor) || ((resData) => resData);

  requestMethodInstance = (0, _umiRequest().extend)(
    _objectSpread(
      {
        errorHandler: (error) => {
          var _error$request, _error$request$option, _errorInfo4;

          // @ts-ignore
          if (
            error === null || error === void 0
              ? void 0
              : (_error$request = error.request) === null ||
                _error$request === void 0
              ? void 0
              : (_error$request$option = _error$request.options) === null ||
                _error$request$option === void 0
              ? void 0
              : _error$request$option.skipErrorHandler
          ) {
            throw error;
          }

          let errorInfo;

          if (error.name === "ResponseError" && error.data && error.request) {
            var _errorInfo;

            const ctx = {
              req: error.request,
              res: error.response,
            };
            errorInfo = errorAdaptor(error.data, ctx);
            error.message =
              ((_errorInfo = errorInfo) === null || _errorInfo === void 0
                ? void 0
                : _errorInfo.errorMessage) || error.message;
            error.data = error.data;
            error.info = errorInfo;
          }

          errorInfo = error.info;

          if (errorInfo) {
            var _errorInfo2, _errorInfo3, _requestConfig$errorC2;

            const errorMessage =
              (_errorInfo2 = errorInfo) === null || _errorInfo2 === void 0
                ? void 0
                : _errorInfo2.errorMessage;
            const errorCode =
              (_errorInfo3 = errorInfo) === null || _errorInfo3 === void 0
                ? void 0
                : _errorInfo3.errorCode;
            const errorPage =
              ((_requestConfig$errorC2 = requestConfig.errorConfig) === null ||
              _requestConfig$errorC2 === void 0
                ? void 0
                : _requestConfig$errorC2.errorPage) || DEFAULT_ERROR_PAGE;

            switch (
              (_errorInfo4 = errorInfo) === null || _errorInfo4 === void 0
                ? void 0
                : _errorInfo4.showType
            ) {
              case ErrorShowType.SILENT:
                // do nothing
                break;

              case ErrorShowType.WARN_MESSAGE:
                // message.warn(errorMessage);
                break;

              case ErrorShowType.ERROR_MESSAGE:
                // message.error(errorMessage);
                break;

              case ErrorShowType.NOTIFICATION:
                // notification.open({
                //   message: errorMessage,
                // });
                break;

              case ErrorShowType.REDIRECT:
                // @ts-ignore
                _umi().history.push({
                  pathname: errorPage,
                  query: {
                    errorCode,
                    errorMessage,
                  },
                }); // redirect to error page

                break;

              default:
                // message.error(errorMessage);
                break;
            }
          } else {
            // message.error(error.message || 'Request error, please retry.');
          }

          throw error;
        },
      },
      requestConfig
    )
  ); // 中间件统一错误处理
  // 后端返回格式 { success: boolean, data: any }
  // 按照项目具体情况修改该部分逻辑

  requestMethodInstance.use(
    /*#__PURE__*/ (function () {
      var _ref = _asyncToGenerator(function* (ctx, next) {
        var _req$options;

        yield next();
        const req = ctx.req,
          res = ctx.res; // @ts-ignore

        if (
          (_req$options = req.options) === null || _req$options === void 0
            ? void 0
            : _req$options.skipErrorHandler
        ) {
          return;
        }

        const options = req.options;
        const getResponse = options.getResponse;
        const resData = getResponse ? res.data : res;
        const errorInfo = errorAdaptor(resData, ctx);

        if (errorInfo.success === false) {
          // 抛出错误到 errorHandler 中处理
          const error = new Error(errorInfo.errorMessage);
          error.name = "BizError";
          error.data = resData;
          error.info = errorInfo;
          throw error;
        }
      });

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    })()
  ); // Add user custom middlewares

  const customMiddlewares = requestConfig.middlewares || [];
  customMiddlewares.forEach((mw) => {
    requestMethodInstance.use(mw);
  }); // Add user custom interceptors

  const requestInterceptors = requestConfig.requestInterceptors || [];
  const responseInterceptors = requestConfig.responseInterceptors || [];
  requestInterceptors.map((ri) => {
    requestMethodInstance.interceptors.request.use(ri);
  });
  responseInterceptors.map((ri) => {
    requestMethodInstance.interceptors.response.use(ri);
  });
  return requestMethodInstance;
};

const request = (url, options) => {
  const requestMethod = getRequestMethod();
  return requestMethod(url, options);
};

exports.request = request;
