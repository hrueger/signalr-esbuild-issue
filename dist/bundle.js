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

// node_modules/@microsoft/signalr/dist/cjs/Errors.js
var require_Errors = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/Errors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AggregateErrors = exports.FailedToNegotiateWithServerError = exports.FailedToStartTransportError = exports.DisabledTransportError = exports.UnsupportedTransportError = exports.AbortError = exports.TimeoutError = exports.HttpError = void 0;
    var HttpError = class extends Error {
      /** Constructs a new instance of {@link @microsoft/signalr.HttpError}.
       *
       * @param {string} errorMessage A descriptive error message.
       * @param {number} statusCode The HTTP status code represented by this error.
       */
      constructor(errorMessage, statusCode) {
        const trueProto = new.target.prototype;
        super(`${errorMessage}: Status code '${statusCode}'`);
        this.statusCode = statusCode;
        this.__proto__ = trueProto;
      }
    };
    exports.HttpError = HttpError;
    var TimeoutError = class extends Error {
      /** Constructs a new instance of {@link @microsoft/signalr.TimeoutError}.
       *
       * @param {string} errorMessage A descriptive error message.
       */
      constructor(errorMessage = "A timeout occurred.") {
        const trueProto = new.target.prototype;
        super(errorMessage);
        this.__proto__ = trueProto;
      }
    };
    exports.TimeoutError = TimeoutError;
    var AbortError = class extends Error {
      /** Constructs a new instance of {@link AbortError}.
       *
       * @param {string} errorMessage A descriptive error message.
       */
      constructor(errorMessage = "An abort occurred.") {
        const trueProto = new.target.prototype;
        super(errorMessage);
        this.__proto__ = trueProto;
      }
    };
    exports.AbortError = AbortError;
    var UnsupportedTransportError = class extends Error {
      /** Constructs a new instance of {@link @microsoft/signalr.UnsupportedTransportError}.
       *
       * @param {string} message A descriptive error message.
       * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
       */
      constructor(message, transport) {
        const trueProto = new.target.prototype;
        super(message);
        this.transport = transport;
        this.errorType = "UnsupportedTransportError";
        this.__proto__ = trueProto;
      }
    };
    exports.UnsupportedTransportError = UnsupportedTransportError;
    var DisabledTransportError = class extends Error {
      /** Constructs a new instance of {@link @microsoft/signalr.DisabledTransportError}.
       *
       * @param {string} message A descriptive error message.
       * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
       */
      constructor(message, transport) {
        const trueProto = new.target.prototype;
        super(message);
        this.transport = transport;
        this.errorType = "DisabledTransportError";
        this.__proto__ = trueProto;
      }
    };
    exports.DisabledTransportError = DisabledTransportError;
    var FailedToStartTransportError = class extends Error {
      /** Constructs a new instance of {@link @microsoft/signalr.FailedToStartTransportError}.
       *
       * @param {string} message A descriptive error message.
       * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
       */
      constructor(message, transport) {
        const trueProto = new.target.prototype;
        super(message);
        this.transport = transport;
        this.errorType = "FailedToStartTransportError";
        this.__proto__ = trueProto;
      }
    };
    exports.FailedToStartTransportError = FailedToStartTransportError;
    var FailedToNegotiateWithServerError = class extends Error {
      /** Constructs a new instance of {@link @microsoft/signalr.FailedToNegotiateWithServerError}.
       *
       * @param {string} message A descriptive error message.
       */
      constructor(message) {
        const trueProto = new.target.prototype;
        super(message);
        this.errorType = "FailedToNegotiateWithServerError";
        this.__proto__ = trueProto;
      }
    };
    exports.FailedToNegotiateWithServerError = FailedToNegotiateWithServerError;
    var AggregateErrors = class extends Error {
      /** Constructs a new instance of {@link @microsoft/signalr.AggregateErrors}.
       *
       * @param {string} message A descriptive error message.
       * @param {Error[]} innerErrors The collection of errors this error is aggregating.
       */
      constructor(message, innerErrors) {
        const trueProto = new.target.prototype;
        super(message);
        this.innerErrors = innerErrors;
        this.__proto__ = trueProto;
      }
    };
    exports.AggregateErrors = AggregateErrors;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/HttpClient.js
var require_HttpClient = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/HttpClient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HttpClient = exports.HttpResponse = void 0;
    var HttpResponse = class {
      constructor(statusCode, statusText, content) {
        this.statusCode = statusCode;
        this.statusText = statusText;
        this.content = content;
      }
    };
    exports.HttpResponse = HttpResponse;
    var HttpClient = class {
      get(url, options) {
        return this.send({
          ...options,
          method: "GET",
          url
        });
      }
      post(url, options) {
        return this.send({
          ...options,
          method: "POST",
          url
        });
      }
      delete(url, options) {
        return this.send({
          ...options,
          method: "DELETE",
          url
        });
      }
      /** Gets all cookies that apply to the specified URL.
       *
       * @param url The URL that the cookies are valid for.
       * @returns {string} A string containing all the key-value cookie pairs for the specified URL.
       */
      // @ts-ignore
      getCookieString(url) {
        return "";
      }
    };
    exports.HttpClient = HttpClient;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/ILogger.js
var require_ILogger = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/ILogger.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LogLevel = void 0;
    var LogLevel;
    (function(LogLevel2) {
      LogLevel2[LogLevel2["Trace"] = 0] = "Trace";
      LogLevel2[LogLevel2["Debug"] = 1] = "Debug";
      LogLevel2[LogLevel2["Information"] = 2] = "Information";
      LogLevel2[LogLevel2["Warning"] = 3] = "Warning";
      LogLevel2[LogLevel2["Error"] = 4] = "Error";
      LogLevel2[LogLevel2["Critical"] = 5] = "Critical";
      LogLevel2[LogLevel2["None"] = 6] = "None";
    })(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
  }
});

// node_modules/@microsoft/signalr/dist/cjs/Loggers.js
var require_Loggers = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/Loggers.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NullLogger = void 0;
    var NullLogger = class {
      constructor() {
      }
      /** @inheritDoc */
      // eslint-disable-next-line
      log(_logLevel, _message) {
      }
    };
    exports.NullLogger = NullLogger;
    NullLogger.instance = new NullLogger();
  }
});

// node_modules/@microsoft/signalr/dist/cjs/Utils.js
var require_Utils = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/Utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getGlobalThis = exports.getErrorString = exports.constructUserAgent = exports.getUserAgentHeader = exports.ConsoleLogger = exports.SubjectSubscription = exports.createLogger = exports.sendMessage = exports.isArrayBuffer = exports.formatArrayBuffer = exports.getDataDetail = exports.Platform = exports.Arg = exports.VERSION = void 0;
    var ILogger_1 = require_ILogger();
    var Loggers_1 = require_Loggers();
    exports.VERSION = "7.0.5";
    var Arg = class {
      static isRequired(val, name) {
        if (val === null || val === void 0) {
          throw new Error(`The '${name}' argument is required.`);
        }
      }
      static isNotEmpty(val, name) {
        if (!val || val.match(/^\s*$/)) {
          throw new Error(`The '${name}' argument should not be empty.`);
        }
      }
      static isIn(val, values, name) {
        if (!(val in values)) {
          throw new Error(`Unknown ${name} value: ${val}.`);
        }
      }
    };
    exports.Arg = Arg;
    var Platform = class {
      // react-native has a window but no document so we should check both
      static get isBrowser() {
        return typeof window === "object" && typeof window.document === "object";
      }
      // WebWorkers don't have a window object so the isBrowser check would fail
      static get isWebWorker() {
        return typeof self === "object" && "importScripts" in self;
      }
      // react-native has a window but no document
      static get isReactNative() {
        return typeof window === "object" && typeof window.document === "undefined";
      }
      // Node apps shouldn't have a window object, but WebWorkers don't either
      // so we need to check for both WebWorker and window
      static get isNode() {
        return !this.isBrowser && !this.isWebWorker && !this.isReactNative;
      }
    };
    exports.Platform = Platform;
    function getDataDetail(data, includeContent) {
      let detail = "";
      if (isArrayBuffer(data)) {
        detail = `Binary data of length ${data.byteLength}`;
        if (includeContent) {
          detail += `. Content: '${formatArrayBuffer(data)}'`;
        }
      } else if (typeof data === "string") {
        detail = `String data of length ${data.length}`;
        if (includeContent) {
          detail += `. Content: '${data}'`;
        }
      }
      return detail;
    }
    exports.getDataDetail = getDataDetail;
    function formatArrayBuffer(data) {
      const view = new Uint8Array(data);
      let str = "";
      view.forEach((num) => {
        const pad = num < 16 ? "0" : "";
        str += `0x${pad}${num.toString(16)} `;
      });
      return str.substr(0, str.length - 1);
    }
    exports.formatArrayBuffer = formatArrayBuffer;
    function isArrayBuffer(val) {
      return val && typeof ArrayBuffer !== "undefined" && (val instanceof ArrayBuffer || // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
      val.constructor && val.constructor.name === "ArrayBuffer");
    }
    exports.isArrayBuffer = isArrayBuffer;
    async function sendMessage(logger, transportName, httpClient, url, content, options) {
      const headers = {};
      const [name, value] = getUserAgentHeader();
      headers[name] = value;
      logger.log(ILogger_1.LogLevel.Trace, `(${transportName} transport) sending data. ${getDataDetail(content, options.logMessageContent)}.`);
      const responseType = isArrayBuffer(content) ? "arraybuffer" : "text";
      const response = await httpClient.post(url, {
        content,
        headers: { ...headers, ...options.headers },
        responseType,
        timeout: options.timeout,
        withCredentials: options.withCredentials
      });
      logger.log(ILogger_1.LogLevel.Trace, `(${transportName} transport) request complete. Response status: ${response.statusCode}.`);
    }
    exports.sendMessage = sendMessage;
    function createLogger(logger) {
      if (logger === void 0) {
        return new ConsoleLogger(ILogger_1.LogLevel.Information);
      }
      if (logger === null) {
        return Loggers_1.NullLogger.instance;
      }
      if (logger.log !== void 0) {
        return logger;
      }
      return new ConsoleLogger(logger);
    }
    exports.createLogger = createLogger;
    var SubjectSubscription = class {
      constructor(subject, observer) {
        this._subject = subject;
        this._observer = observer;
      }
      dispose() {
        const index = this._subject.observers.indexOf(this._observer);
        if (index > -1) {
          this._subject.observers.splice(index, 1);
        }
        if (this._subject.observers.length === 0 && this._subject.cancelCallback) {
          this._subject.cancelCallback().catch((_) => {
          });
        }
      }
    };
    exports.SubjectSubscription = SubjectSubscription;
    var ConsoleLogger = class {
      constructor(minimumLogLevel) {
        this._minLevel = minimumLogLevel;
        this.out = console;
      }
      log(logLevel, message) {
        if (logLevel >= this._minLevel) {
          const msg = `[${(/* @__PURE__ */ new Date()).toISOString()}] ${ILogger_1.LogLevel[logLevel]}: ${message}`;
          switch (logLevel) {
            case ILogger_1.LogLevel.Critical:
            case ILogger_1.LogLevel.Error:
              this.out.error(msg);
              break;
            case ILogger_1.LogLevel.Warning:
              this.out.warn(msg);
              break;
            case ILogger_1.LogLevel.Information:
              this.out.info(msg);
              break;
            default:
              this.out.log(msg);
              break;
          }
        }
      }
    };
    exports.ConsoleLogger = ConsoleLogger;
    function getUserAgentHeader() {
      let userAgentHeaderName = "X-SignalR-User-Agent";
      if (Platform.isNode) {
        userAgentHeaderName = "User-Agent";
      }
      return [userAgentHeaderName, constructUserAgent(exports.VERSION, getOsName(), getRuntime(), getRuntimeVersion())];
    }
    exports.getUserAgentHeader = getUserAgentHeader;
    function constructUserAgent(version, os, runtime, runtimeVersion) {
      let userAgent = "Microsoft SignalR/";
      const majorAndMinor = version.split(".");
      userAgent += `${majorAndMinor[0]}.${majorAndMinor[1]}`;
      userAgent += ` (${version}; `;
      if (os && os !== "") {
        userAgent += `${os}; `;
      } else {
        userAgent += "Unknown OS; ";
      }
      userAgent += `${runtime}`;
      if (runtimeVersion) {
        userAgent += `; ${runtimeVersion}`;
      } else {
        userAgent += "; Unknown Runtime Version";
      }
      userAgent += ")";
      return userAgent;
    }
    exports.constructUserAgent = constructUserAgent;
    function getOsName() {
      if (Platform.isNode) {
        switch (process.platform) {
          case "win32":
            return "Windows NT";
          case "darwin":
            return "macOS";
          case "linux":
            return "Linux";
          default:
            return process.platform;
        }
      } else {
        return "";
      }
    }
    function getRuntimeVersion() {
      if (Platform.isNode) {
        return process.versions.node;
      }
      return void 0;
    }
    function getRuntime() {
      if (Platform.isNode) {
        return "NodeJS";
      } else {
        return "Browser";
      }
    }
    function getErrorString(e) {
      if (e.stack) {
        return e.stack;
      } else if (e.message) {
        return e.message;
      }
      return `${e}`;
    }
    exports.getErrorString = getErrorString;
    function getGlobalThis() {
      if (typeof globalThis !== "undefined") {
        return globalThis;
      }
      if (typeof self !== "undefined") {
        return self;
      }
      if (typeof window !== "undefined") {
        return window;
      }
      if (typeof global !== "undefined") {
        return global;
      }
      throw new Error("could not find global");
    }
    exports.getGlobalThis = getGlobalThis;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/FetchHttpClient.js
var require_FetchHttpClient = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/FetchHttpClient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FetchHttpClient = void 0;
    var Errors_1 = require_Errors();
    var HttpClient_1 = require_HttpClient();
    var ILogger_1 = require_ILogger();
    var Utils_1 = require_Utils();
    var FetchHttpClient = class extends HttpClient_1.HttpClient {
      constructor(logger) {
        super();
        this._logger = logger;
        if (typeof fetch === "undefined") {
          const requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;
          this._jar = new (requireFunc("tough-cookie")).CookieJar();
          this._fetchType = requireFunc("node-fetch");
          this._fetchType = requireFunc("fetch-cookie")(this._fetchType, this._jar);
        } else {
          this._fetchType = fetch.bind(Utils_1.getGlobalThis());
        }
        if (typeof AbortController === "undefined") {
          const requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;
          this._abortControllerType = requireFunc("abort-controller");
        } else {
          this._abortControllerType = AbortController;
        }
      }
      /** @inheritDoc */
      async send(request) {
        if (request.abortSignal && request.abortSignal.aborted) {
          throw new Errors_1.AbortError();
        }
        if (!request.method) {
          throw new Error("No method defined.");
        }
        if (!request.url) {
          throw new Error("No url defined.");
        }
        const abortController = new this._abortControllerType();
        let error;
        if (request.abortSignal) {
          request.abortSignal.onabort = () => {
            abortController.abort();
            error = new Errors_1.AbortError();
          };
        }
        let timeoutId = null;
        if (request.timeout) {
          const msTimeout = request.timeout;
          timeoutId = setTimeout(() => {
            abortController.abort();
            this._logger.log(ILogger_1.LogLevel.Warning, `Timeout from HTTP request.`);
            error = new Errors_1.TimeoutError();
          }, msTimeout);
        }
        if (request.content === "") {
          request.content = void 0;
        }
        if (request.content) {
          request.headers = request.headers || {};
          if (Utils_1.isArrayBuffer(request.content)) {
            request.headers["Content-Type"] = "application/octet-stream";
          } else {
            request.headers["Content-Type"] = "text/plain;charset=UTF-8";
          }
        }
        let response;
        try {
          response = await this._fetchType(request.url, {
            body: request.content,
            cache: "no-cache",
            credentials: request.withCredentials === true ? "include" : "same-origin",
            headers: {
              "X-Requested-With": "XMLHttpRequest",
              ...request.headers
            },
            method: request.method,
            mode: "cors",
            redirect: "follow",
            signal: abortController.signal
          });
        } catch (e) {
          if (error) {
            throw error;
          }
          this._logger.log(ILogger_1.LogLevel.Warning, `Error from HTTP request. ${e}.`);
          throw e;
        } finally {
          if (timeoutId) {
            clearTimeout(timeoutId);
          }
          if (request.abortSignal) {
            request.abortSignal.onabort = null;
          }
        }
        if (!response.ok) {
          const errorMessage = await deserializeContent(response, "text");
          throw new Errors_1.HttpError(errorMessage || response.statusText, response.status);
        }
        const content = deserializeContent(response, request.responseType);
        const payload = await content;
        return new HttpClient_1.HttpResponse(response.status, response.statusText, payload);
      }
      getCookieString(url) {
        let cookies = "";
        if (Utils_1.Platform.isNode && this._jar) {
          this._jar.getCookies(url, (e, c) => cookies = c.join("; "));
        }
        return cookies;
      }
    };
    exports.FetchHttpClient = FetchHttpClient;
    function deserializeContent(response, responseType) {
      let content;
      switch (responseType) {
        case "arraybuffer":
          content = response.arrayBuffer();
          break;
        case "text":
          content = response.text();
          break;
        case "blob":
        case "document":
        case "json":
          throw new Error(`${responseType} is not supported.`);
        default:
          content = response.text();
          break;
      }
      return content;
    }
  }
});

// node_modules/@microsoft/signalr/dist/cjs/XhrHttpClient.js
var require_XhrHttpClient = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/XhrHttpClient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.XhrHttpClient = void 0;
    var Errors_1 = require_Errors();
    var HttpClient_1 = require_HttpClient();
    var ILogger_1 = require_ILogger();
    var Utils_1 = require_Utils();
    var XhrHttpClient = class extends HttpClient_1.HttpClient {
      constructor(logger) {
        super();
        this._logger = logger;
      }
      /** @inheritDoc */
      send(request) {
        if (request.abortSignal && request.abortSignal.aborted) {
          return Promise.reject(new Errors_1.AbortError());
        }
        if (!request.method) {
          return Promise.reject(new Error("No method defined."));
        }
        if (!request.url) {
          return Promise.reject(new Error("No url defined."));
        }
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.open(request.method, request.url, true);
          xhr.withCredentials = request.withCredentials === void 0 ? true : request.withCredentials;
          xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
          if (request.content === "") {
            request.content = void 0;
          }
          if (request.content) {
            if (Utils_1.isArrayBuffer(request.content)) {
              xhr.setRequestHeader("Content-Type", "application/octet-stream");
            } else {
              xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            }
          }
          const headers = request.headers;
          if (headers) {
            Object.keys(headers).forEach((header) => {
              xhr.setRequestHeader(header, headers[header]);
            });
          }
          if (request.responseType) {
            xhr.responseType = request.responseType;
          }
          if (request.abortSignal) {
            request.abortSignal.onabort = () => {
              xhr.abort();
              reject(new Errors_1.AbortError());
            };
          }
          if (request.timeout) {
            xhr.timeout = request.timeout;
          }
          xhr.onload = () => {
            if (request.abortSignal) {
              request.abortSignal.onabort = null;
            }
            if (xhr.status >= 200 && xhr.status < 300) {
              resolve(new HttpClient_1.HttpResponse(xhr.status, xhr.statusText, xhr.response || xhr.responseText));
            } else {
              reject(new Errors_1.HttpError(xhr.response || xhr.responseText || xhr.statusText, xhr.status));
            }
          };
          xhr.onerror = () => {
            this._logger.log(ILogger_1.LogLevel.Warning, `Error from HTTP request. ${xhr.status}: ${xhr.statusText}.`);
            reject(new Errors_1.HttpError(xhr.statusText, xhr.status));
          };
          xhr.ontimeout = () => {
            this._logger.log(ILogger_1.LogLevel.Warning, `Timeout from HTTP request.`);
            reject(new Errors_1.TimeoutError());
          };
          xhr.send(request.content);
        });
      }
    };
    exports.XhrHttpClient = XhrHttpClient;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/DefaultHttpClient.js
var require_DefaultHttpClient = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/DefaultHttpClient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultHttpClient = void 0;
    var Errors_1 = require_Errors();
    var FetchHttpClient_1 = require_FetchHttpClient();
    var HttpClient_1 = require_HttpClient();
    var Utils_1 = require_Utils();
    var XhrHttpClient_1 = require_XhrHttpClient();
    var DefaultHttpClient = class extends HttpClient_1.HttpClient {
      /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
      constructor(logger) {
        super();
        if (typeof fetch !== "undefined" || Utils_1.Platform.isNode) {
          this._httpClient = new FetchHttpClient_1.FetchHttpClient(logger);
        } else if (typeof XMLHttpRequest !== "undefined") {
          this._httpClient = new XhrHttpClient_1.XhrHttpClient(logger);
        } else {
          throw new Error("No usable HttpClient found.");
        }
      }
      /** @inheritDoc */
      send(request) {
        if (request.abortSignal && request.abortSignal.aborted) {
          return Promise.reject(new Errors_1.AbortError());
        }
        if (!request.method) {
          return Promise.reject(new Error("No method defined."));
        }
        if (!request.url) {
          return Promise.reject(new Error("No url defined."));
        }
        return this._httpClient.send(request);
      }
      getCookieString(url) {
        return this._httpClient.getCookieString(url);
      }
    };
    exports.DefaultHttpClient = DefaultHttpClient;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/TextMessageFormat.js
var require_TextMessageFormat = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/TextMessageFormat.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TextMessageFormat = void 0;
    var TextMessageFormat = class {
      static write(output) {
        return `${output}${TextMessageFormat.RecordSeparator}`;
      }
      static parse(input) {
        if (input[input.length - 1] !== TextMessageFormat.RecordSeparator) {
          throw new Error("Message is incomplete.");
        }
        const messages = input.split(TextMessageFormat.RecordSeparator);
        messages.pop();
        return messages;
      }
    };
    exports.TextMessageFormat = TextMessageFormat;
    TextMessageFormat.RecordSeparatorCode = 30;
    TextMessageFormat.RecordSeparator = String.fromCharCode(TextMessageFormat.RecordSeparatorCode);
  }
});

// node_modules/@microsoft/signalr/dist/cjs/HandshakeProtocol.js
var require_HandshakeProtocol = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/HandshakeProtocol.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HandshakeProtocol = void 0;
    var TextMessageFormat_1 = require_TextMessageFormat();
    var Utils_1 = require_Utils();
    var HandshakeProtocol = class {
      // Handshake request is always JSON
      writeHandshakeRequest(handshakeRequest) {
        return TextMessageFormat_1.TextMessageFormat.write(JSON.stringify(handshakeRequest));
      }
      parseHandshakeResponse(data) {
        let messageData;
        let remainingData;
        if (Utils_1.isArrayBuffer(data)) {
          const binaryData = new Uint8Array(data);
          const separatorIndex = binaryData.indexOf(TextMessageFormat_1.TextMessageFormat.RecordSeparatorCode);
          if (separatorIndex === -1) {
            throw new Error("Message is incomplete.");
          }
          const responseLength = separatorIndex + 1;
          messageData = String.fromCharCode.apply(null, Array.prototype.slice.call(binaryData.slice(0, responseLength)));
          remainingData = binaryData.byteLength > responseLength ? binaryData.slice(responseLength).buffer : null;
        } else {
          const textData = data;
          const separatorIndex = textData.indexOf(TextMessageFormat_1.TextMessageFormat.RecordSeparator);
          if (separatorIndex === -1) {
            throw new Error("Message is incomplete.");
          }
          const responseLength = separatorIndex + 1;
          messageData = textData.substring(0, responseLength);
          remainingData = textData.length > responseLength ? textData.substring(responseLength) : null;
        }
        const messages = TextMessageFormat_1.TextMessageFormat.parse(messageData);
        const response = JSON.parse(messages[0]);
        if (response.type) {
          throw new Error("Expected a handshake response from the server.");
        }
        const responseMessage = response;
        return [remainingData, responseMessage];
      }
    };
    exports.HandshakeProtocol = HandshakeProtocol;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/IHubProtocol.js
var require_IHubProtocol = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/IHubProtocol.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MessageType = void 0;
    var MessageType;
    (function(MessageType2) {
      MessageType2[MessageType2["Invocation"] = 1] = "Invocation";
      MessageType2[MessageType2["StreamItem"] = 2] = "StreamItem";
      MessageType2[MessageType2["Completion"] = 3] = "Completion";
      MessageType2[MessageType2["StreamInvocation"] = 4] = "StreamInvocation";
      MessageType2[MessageType2["CancelInvocation"] = 5] = "CancelInvocation";
      MessageType2[MessageType2["Ping"] = 6] = "Ping";
      MessageType2[MessageType2["Close"] = 7] = "Close";
    })(MessageType = exports.MessageType || (exports.MessageType = {}));
  }
});

// node_modules/@microsoft/signalr/dist/cjs/Subject.js
var require_Subject = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/Subject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Subject = void 0;
    var Utils_1 = require_Utils();
    var Subject = class {
      constructor() {
        this.observers = [];
      }
      next(item) {
        for (const observer of this.observers) {
          observer.next(item);
        }
      }
      error(err) {
        for (const observer of this.observers) {
          if (observer.error) {
            observer.error(err);
          }
        }
      }
      complete() {
        for (const observer of this.observers) {
          if (observer.complete) {
            observer.complete();
          }
        }
      }
      subscribe(observer) {
        this.observers.push(observer);
        return new Utils_1.SubjectSubscription(this, observer);
      }
    };
    exports.Subject = Subject;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/HubConnection.js
var require_HubConnection = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/HubConnection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HubConnection = exports.HubConnectionState = void 0;
    var HandshakeProtocol_1 = require_HandshakeProtocol();
    var Errors_1 = require_Errors();
    var IHubProtocol_1 = require_IHubProtocol();
    var ILogger_1 = require_ILogger();
    var Subject_1 = require_Subject();
    var Utils_1 = require_Utils();
    var DEFAULT_TIMEOUT_IN_MS = 30 * 1e3;
    var DEFAULT_PING_INTERVAL_IN_MS = 15 * 1e3;
    var HubConnectionState;
    (function(HubConnectionState2) {
      HubConnectionState2["Disconnected"] = "Disconnected";
      HubConnectionState2["Connecting"] = "Connecting";
      HubConnectionState2["Connected"] = "Connected";
      HubConnectionState2["Disconnecting"] = "Disconnecting";
      HubConnectionState2["Reconnecting"] = "Reconnecting";
    })(HubConnectionState = exports.HubConnectionState || (exports.HubConnectionState = {}));
    var HubConnection = class {
      constructor(connection2, logger, protocol, reconnectPolicy) {
        this._nextKeepAlive = 0;
        this._freezeEventListener = () => {
          this._logger.log(ILogger_1.LogLevel.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://docs.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
        };
        Utils_1.Arg.isRequired(connection2, "connection");
        Utils_1.Arg.isRequired(logger, "logger");
        Utils_1.Arg.isRequired(protocol, "protocol");
        this.serverTimeoutInMilliseconds = DEFAULT_TIMEOUT_IN_MS;
        this.keepAliveIntervalInMilliseconds = DEFAULT_PING_INTERVAL_IN_MS;
        this._logger = logger;
        this._protocol = protocol;
        this.connection = connection2;
        this._reconnectPolicy = reconnectPolicy;
        this._handshakeProtocol = new HandshakeProtocol_1.HandshakeProtocol();
        this.connection.onreceive = (data) => this._processIncomingData(data);
        this.connection.onclose = (error) => this._connectionClosed(error);
        this._callbacks = {};
        this._methods = {};
        this._closedCallbacks = [];
        this._reconnectingCallbacks = [];
        this._reconnectedCallbacks = [];
        this._invocationId = 0;
        this._receivedHandshakeResponse = false;
        this._connectionState = HubConnectionState.Disconnected;
        this._connectionStarted = false;
        this._cachedPingMessage = this._protocol.writeMessage({ type: IHubProtocol_1.MessageType.Ping });
      }
      /** @internal */
      // Using a public static factory method means we can have a private constructor and an _internal_
      // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
      // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
      // public parameter-less constructor.
      static create(connection2, logger, protocol, reconnectPolicy) {
        return new HubConnection(connection2, logger, protocol, reconnectPolicy);
      }
      /** Indicates the state of the {@link HubConnection} to the server. */
      get state() {
        return this._connectionState;
      }
      /** Represents the connection id of the {@link HubConnection} on the server. The connection id will be null when the connection is either
       *  in the disconnected state or if the negotiation step was skipped.
       */
      get connectionId() {
        return this.connection ? this.connection.connectionId || null : null;
      }
      /** Indicates the url of the {@link HubConnection} to the server. */
      get baseUrl() {
        return this.connection.baseUrl || "";
      }
      /**
       * Sets a new url for the HubConnection. Note that the url can only be changed when the connection is in either the Disconnected or
       * Reconnecting states.
       * @param {string} url The url to connect to.
       */
      set baseUrl(url) {
        if (this._connectionState !== HubConnectionState.Disconnected && this._connectionState !== HubConnectionState.Reconnecting) {
          throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
        }
        if (!url) {
          throw new Error("The HubConnection url must be a valid url.");
        }
        this.connection.baseUrl = url;
      }
      /** Starts the connection.
       *
       * @returns {Promise<void>} A Promise that resolves when the connection has been successfully established, or rejects with an error.
       */
      start() {
        this._startPromise = this._startWithStateTransitions();
        return this._startPromise;
      }
      async _startWithStateTransitions() {
        if (this._connectionState !== HubConnectionState.Disconnected) {
          return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
        }
        this._connectionState = HubConnectionState.Connecting;
        this._logger.log(ILogger_1.LogLevel.Debug, "Starting HubConnection.");
        try {
          await this._startInternal();
          if (Utils_1.Platform.isBrowser) {
            window.document.addEventListener("freeze", this._freezeEventListener);
          }
          this._connectionState = HubConnectionState.Connected;
          this._connectionStarted = true;
          this._logger.log(ILogger_1.LogLevel.Debug, "HubConnection connected successfully.");
        } catch (e) {
          this._connectionState = HubConnectionState.Disconnected;
          this._logger.log(ILogger_1.LogLevel.Debug, `HubConnection failed to start successfully because of error '${e}'.`);
          return Promise.reject(e);
        }
      }
      async _startInternal() {
        this._stopDuringStartError = void 0;
        this._receivedHandshakeResponse = false;
        const handshakePromise = new Promise((resolve, reject) => {
          this._handshakeResolver = resolve;
          this._handshakeRejecter = reject;
        });
        await this.connection.start(this._protocol.transferFormat);
        try {
          const handshakeRequest = {
            protocol: this._protocol.name,
            version: this._protocol.version
          };
          this._logger.log(ILogger_1.LogLevel.Debug, "Sending handshake request.");
          await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(handshakeRequest));
          this._logger.log(ILogger_1.LogLevel.Information, `Using HubProtocol '${this._protocol.name}'.`);
          this._cleanupTimeout();
          this._resetTimeoutPeriod();
          this._resetKeepAliveInterval();
          await handshakePromise;
          if (this._stopDuringStartError) {
            throw this._stopDuringStartError;
          }
          if (!this.connection.features.inherentKeepAlive) {
            await this._sendMessage(this._cachedPingMessage);
          }
        } catch (e) {
          this._logger.log(ILogger_1.LogLevel.Debug, `Hub handshake failed with error '${e}' during start(). Stopping HubConnection.`);
          this._cleanupTimeout();
          this._cleanupPingTimer();
          await this.connection.stop(e);
          throw e;
        }
      }
      /** Stops the connection.
       *
       * @returns {Promise<void>} A Promise that resolves when the connection has been successfully terminated, or rejects with an error.
       */
      async stop() {
        const startPromise = this._startPromise;
        this._stopPromise = this._stopInternal();
        await this._stopPromise;
        try {
          await startPromise;
        } catch (e) {
        }
      }
      _stopInternal(error) {
        if (this._connectionState === HubConnectionState.Disconnected) {
          this._logger.log(ILogger_1.LogLevel.Debug, `Call to HubConnection.stop(${error}) ignored because it is already in the disconnected state.`);
          return Promise.resolve();
        }
        if (this._connectionState === HubConnectionState.Disconnecting) {
          this._logger.log(ILogger_1.LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnecting state.`);
          return this._stopPromise;
        }
        this._connectionState = HubConnectionState.Disconnecting;
        this._logger.log(ILogger_1.LogLevel.Debug, "Stopping HubConnection.");
        if (this._reconnectDelayHandle) {
          this._logger.log(ILogger_1.LogLevel.Debug, "Connection stopped during reconnect delay. Done reconnecting.");
          clearTimeout(this._reconnectDelayHandle);
          this._reconnectDelayHandle = void 0;
          this._completeClose();
          return Promise.resolve();
        }
        this._cleanupTimeout();
        this._cleanupPingTimer();
        this._stopDuringStartError = error || new Errors_1.AbortError("The connection was stopped before the hub handshake could complete.");
        return this.connection.stop(error);
      }
      /** Invokes a streaming hub method on the server using the specified name and arguments.
       *
       * @typeparam T The type of the items returned by the server.
       * @param {string} methodName The name of the server method to invoke.
       * @param {any[]} args The arguments used to invoke the server method.
       * @returns {IStreamResult<T>} An object that yields results from the server as they are received.
       */
      stream(methodName, ...args) {
        const [streams, streamIds] = this._replaceStreamingParams(args);
        const invocationDescriptor = this._createStreamInvocation(methodName, args, streamIds);
        let promiseQueue;
        const subject = new Subject_1.Subject();
        subject.cancelCallback = () => {
          const cancelInvocation = this._createCancelInvocation(invocationDescriptor.invocationId);
          delete this._callbacks[invocationDescriptor.invocationId];
          return promiseQueue.then(() => {
            return this._sendWithProtocol(cancelInvocation);
          });
        };
        this._callbacks[invocationDescriptor.invocationId] = (invocationEvent, error) => {
          if (error) {
            subject.error(error);
            return;
          } else if (invocationEvent) {
            if (invocationEvent.type === IHubProtocol_1.MessageType.Completion) {
              if (invocationEvent.error) {
                subject.error(new Error(invocationEvent.error));
              } else {
                subject.complete();
              }
            } else {
              subject.next(invocationEvent.item);
            }
          }
        };
        promiseQueue = this._sendWithProtocol(invocationDescriptor).catch((e) => {
          subject.error(e);
          delete this._callbacks[invocationDescriptor.invocationId];
        });
        this._launchStreams(streams, promiseQueue);
        return subject;
      }
      _sendMessage(message) {
        this._resetKeepAliveInterval();
        return this.connection.send(message);
      }
      /**
       * Sends a js object to the server.
       * @param message The js object to serialize and send.
       */
      _sendWithProtocol(message) {
        return this._sendMessage(this._protocol.writeMessage(message));
      }
      /** Invokes a hub method on the server using the specified name and arguments. Does not wait for a response from the receiver.
       *
       * The Promise returned by this method resolves when the client has sent the invocation to the server. The server may still
       * be processing the invocation.
       *
       * @param {string} methodName The name of the server method to invoke.
       * @param {any[]} args The arguments used to invoke the server method.
       * @returns {Promise<void>} A Promise that resolves when the invocation has been successfully sent, or rejects with an error.
       */
      send(methodName, ...args) {
        const [streams, streamIds] = this._replaceStreamingParams(args);
        const sendPromise = this._sendWithProtocol(this._createInvocation(methodName, args, true, streamIds));
        this._launchStreams(streams, sendPromise);
        return sendPromise;
      }
      /** Invokes a hub method on the server using the specified name and arguments.
       *
       * The Promise returned by this method resolves when the server indicates it has finished invoking the method. When the promise
       * resolves, the server has finished invoking the method. If the server method returns a result, it is produced as the result of
       * resolving the Promise.
       *
       * @typeparam T The expected return type.
       * @param {string} methodName The name of the server method to invoke.
       * @param {any[]} args The arguments used to invoke the server method.
       * @returns {Promise<T>} A Promise that resolves with the result of the server method (if any), or rejects with an error.
       */
      invoke(methodName, ...args) {
        const [streams, streamIds] = this._replaceStreamingParams(args);
        const invocationDescriptor = this._createInvocation(methodName, args, false, streamIds);
        const p = new Promise((resolve, reject) => {
          this._callbacks[invocationDescriptor.invocationId] = (invocationEvent, error) => {
            if (error) {
              reject(error);
              return;
            } else if (invocationEvent) {
              if (invocationEvent.type === IHubProtocol_1.MessageType.Completion) {
                if (invocationEvent.error) {
                  reject(new Error(invocationEvent.error));
                } else {
                  resolve(invocationEvent.result);
                }
              } else {
                reject(new Error(`Unexpected message type: ${invocationEvent.type}`));
              }
            }
          };
          const promiseQueue = this._sendWithProtocol(invocationDescriptor).catch((e) => {
            reject(e);
            delete this._callbacks[invocationDescriptor.invocationId];
          });
          this._launchStreams(streams, promiseQueue);
        });
        return p;
      }
      on(methodName, newMethod) {
        if (!methodName || !newMethod) {
          return;
        }
        methodName = methodName.toLowerCase();
        if (!this._methods[methodName]) {
          this._methods[methodName] = [];
        }
        if (this._methods[methodName].indexOf(newMethod) !== -1) {
          return;
        }
        this._methods[methodName].push(newMethod);
      }
      off(methodName, method) {
        if (!methodName) {
          return;
        }
        methodName = methodName.toLowerCase();
        const handlers = this._methods[methodName];
        if (!handlers) {
          return;
        }
        if (method) {
          const removeIdx = handlers.indexOf(method);
          if (removeIdx !== -1) {
            handlers.splice(removeIdx, 1);
            if (handlers.length === 0) {
              delete this._methods[methodName];
            }
          }
        } else {
          delete this._methods[methodName];
        }
      }
      /** Registers a handler that will be invoked when the connection is closed.
       *
       * @param {Function} callback The handler that will be invoked when the connection is closed. Optionally receives a single argument containing the error that caused the connection to close (if any).
       */
      onclose(callback) {
        if (callback) {
          this._closedCallbacks.push(callback);
        }
      }
      /** Registers a handler that will be invoked when the connection starts reconnecting.
       *
       * @param {Function} callback The handler that will be invoked when the connection starts reconnecting. Optionally receives a single argument containing the error that caused the connection to start reconnecting (if any).
       */
      onreconnecting(callback) {
        if (callback) {
          this._reconnectingCallbacks.push(callback);
        }
      }
      /** Registers a handler that will be invoked when the connection successfully reconnects.
       *
       * @param {Function} callback The handler that will be invoked when the connection successfully reconnects.
       */
      onreconnected(callback) {
        if (callback) {
          this._reconnectedCallbacks.push(callback);
        }
      }
      _processIncomingData(data) {
        this._cleanupTimeout();
        if (!this._receivedHandshakeResponse) {
          data = this._processHandshakeResponse(data);
          this._receivedHandshakeResponse = true;
        }
        if (data) {
          const messages = this._protocol.parseMessages(data, this._logger);
          for (const message of messages) {
            switch (message.type) {
              case IHubProtocol_1.MessageType.Invocation:
                this._invokeClientMethod(message);
                break;
              case IHubProtocol_1.MessageType.StreamItem:
              case IHubProtocol_1.MessageType.Completion: {
                const callback = this._callbacks[message.invocationId];
                if (callback) {
                  if (message.type === IHubProtocol_1.MessageType.Completion) {
                    delete this._callbacks[message.invocationId];
                  }
                  try {
                    callback(message);
                  } catch (e) {
                    this._logger.log(ILogger_1.LogLevel.Error, `Stream callback threw error: ${Utils_1.getErrorString(e)}`);
                  }
                }
                break;
              }
              case IHubProtocol_1.MessageType.Ping:
                break;
              case IHubProtocol_1.MessageType.Close: {
                this._logger.log(ILogger_1.LogLevel.Information, "Close message received from server.");
                const error = message.error ? new Error("Server returned an error on close: " + message.error) : void 0;
                if (message.allowReconnect === true) {
                  this.connection.stop(error);
                } else {
                  this._stopPromise = this._stopInternal(error);
                }
                break;
              }
              default:
                this._logger.log(ILogger_1.LogLevel.Warning, `Invalid message type: ${message.type}.`);
                break;
            }
          }
        }
        this._resetTimeoutPeriod();
      }
      _processHandshakeResponse(data) {
        let responseMessage;
        let remainingData;
        try {
          [remainingData, responseMessage] = this._handshakeProtocol.parseHandshakeResponse(data);
        } catch (e) {
          const message = "Error parsing handshake response: " + e;
          this._logger.log(ILogger_1.LogLevel.Error, message);
          const error = new Error(message);
          this._handshakeRejecter(error);
          throw error;
        }
        if (responseMessage.error) {
          const message = "Server returned handshake error: " + responseMessage.error;
          this._logger.log(ILogger_1.LogLevel.Error, message);
          const error = new Error(message);
          this._handshakeRejecter(error);
          throw error;
        } else {
          this._logger.log(ILogger_1.LogLevel.Debug, "Server handshake complete.");
        }
        this._handshakeResolver();
        return remainingData;
      }
      _resetKeepAliveInterval() {
        if (this.connection.features.inherentKeepAlive) {
          return;
        }
        this._nextKeepAlive = (/* @__PURE__ */ new Date()).getTime() + this.keepAliveIntervalInMilliseconds;
        this._cleanupPingTimer();
      }
      _resetTimeoutPeriod() {
        if (!this.connection.features || !this.connection.features.inherentKeepAlive) {
          this._timeoutHandle = setTimeout(() => this.serverTimeout(), this.serverTimeoutInMilliseconds);
          if (this._pingServerHandle === void 0) {
            let nextPing = this._nextKeepAlive - (/* @__PURE__ */ new Date()).getTime();
            if (nextPing < 0) {
              nextPing = 0;
            }
            this._pingServerHandle = setTimeout(async () => {
              if (this._connectionState === HubConnectionState.Connected) {
                try {
                  await this._sendMessage(this._cachedPingMessage);
                } catch {
                  this._cleanupPingTimer();
                }
              }
            }, nextPing);
          }
        }
      }
      // eslint-disable-next-line @typescript-eslint/naming-convention
      serverTimeout() {
        this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
      }
      async _invokeClientMethod(invocationMessage) {
        const methodName = invocationMessage.target.toLowerCase();
        const methods = this._methods[methodName];
        if (!methods) {
          this._logger.log(ILogger_1.LogLevel.Warning, `No client method with the name '${methodName}' found.`);
          if (invocationMessage.invocationId) {
            this._logger.log(ILogger_1.LogLevel.Warning, `No result given for '${methodName}' method and invocation ID '${invocationMessage.invocationId}'.`);
            await this._sendWithProtocol(this._createCompletionMessage(invocationMessage.invocationId, "Client didn't provide a result.", null));
          }
          return;
        }
        const methodsCopy = methods.slice();
        const expectsResponse = invocationMessage.invocationId ? true : false;
        let res;
        let exception;
        let completionMessage;
        for (const m of methodsCopy) {
          try {
            const prevRes = res;
            res = await m.apply(this, invocationMessage.arguments);
            if (expectsResponse && res && prevRes) {
              this._logger.log(ILogger_1.LogLevel.Error, `Multiple results provided for '${methodName}'. Sending error to server.`);
              completionMessage = this._createCompletionMessage(invocationMessage.invocationId, `Client provided multiple results.`, null);
            }
            exception = void 0;
          } catch (e) {
            exception = e;
            this._logger.log(ILogger_1.LogLevel.Error, `A callback for the method '${methodName}' threw error '${e}'.`);
          }
        }
        if (completionMessage) {
          await this._sendWithProtocol(completionMessage);
        } else if (expectsResponse) {
          if (exception) {
            completionMessage = this._createCompletionMessage(invocationMessage.invocationId, `${exception}`, null);
          } else if (res !== void 0) {
            completionMessage = this._createCompletionMessage(invocationMessage.invocationId, null, res);
          } else {
            this._logger.log(ILogger_1.LogLevel.Warning, `No result given for '${methodName}' method and invocation ID '${invocationMessage.invocationId}'.`);
            completionMessage = this._createCompletionMessage(invocationMessage.invocationId, "Client didn't provide a result.", null);
          }
          await this._sendWithProtocol(completionMessage);
        } else {
          if (res) {
            this._logger.log(ILogger_1.LogLevel.Error, `Result given for '${methodName}' method but server is not expecting a result.`);
          }
        }
      }
      _connectionClosed(error) {
        this._logger.log(ILogger_1.LogLevel.Debug, `HubConnection.connectionClosed(${error}) called while in state ${this._connectionState}.`);
        this._stopDuringStartError = this._stopDuringStartError || error || new Errors_1.AbortError("The underlying connection was closed before the hub handshake could complete.");
        if (this._handshakeResolver) {
          this._handshakeResolver();
        }
        this._cancelCallbacksWithError(error || new Error("Invocation canceled due to the underlying connection being closed."));
        this._cleanupTimeout();
        this._cleanupPingTimer();
        if (this._connectionState === HubConnectionState.Disconnecting) {
          this._completeClose(error);
        } else if (this._connectionState === HubConnectionState.Connected && this._reconnectPolicy) {
          this._reconnect(error);
        } else if (this._connectionState === HubConnectionState.Connected) {
          this._completeClose(error);
        }
      }
      _completeClose(error) {
        if (this._connectionStarted) {
          this._connectionState = HubConnectionState.Disconnected;
          this._connectionStarted = false;
          if (Utils_1.Platform.isBrowser) {
            window.document.removeEventListener("freeze", this._freezeEventListener);
          }
          try {
            this._closedCallbacks.forEach((c) => c.apply(this, [error]));
          } catch (e) {
            this._logger.log(ILogger_1.LogLevel.Error, `An onclose callback called with error '${error}' threw error '${e}'.`);
          }
        }
      }
      async _reconnect(error) {
        const reconnectStartTime = Date.now();
        let previousReconnectAttempts = 0;
        let retryError = error !== void 0 ? error : new Error("Attempting to reconnect due to a unknown error.");
        let nextRetryDelay = this._getNextRetryDelay(previousReconnectAttempts++, 0, retryError);
        if (nextRetryDelay === null) {
          this._logger.log(ILogger_1.LogLevel.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt.");
          this._completeClose(error);
          return;
        }
        this._connectionState = HubConnectionState.Reconnecting;
        if (error) {
          this._logger.log(ILogger_1.LogLevel.Information, `Connection reconnecting because of error '${error}'.`);
        } else {
          this._logger.log(ILogger_1.LogLevel.Information, "Connection reconnecting.");
        }
        if (this._reconnectingCallbacks.length !== 0) {
          try {
            this._reconnectingCallbacks.forEach((c) => c.apply(this, [error]));
          } catch (e) {
            this._logger.log(ILogger_1.LogLevel.Error, `An onreconnecting callback called with error '${error}' threw error '${e}'.`);
          }
          if (this._connectionState !== HubConnectionState.Reconnecting) {
            this._logger.log(ILogger_1.LogLevel.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
            return;
          }
        }
        while (nextRetryDelay !== null) {
          this._logger.log(ILogger_1.LogLevel.Information, `Reconnect attempt number ${previousReconnectAttempts} will start in ${nextRetryDelay} ms.`);
          await new Promise((resolve) => {
            this._reconnectDelayHandle = setTimeout(resolve, nextRetryDelay);
          });
          this._reconnectDelayHandle = void 0;
          if (this._connectionState !== HubConnectionState.Reconnecting) {
            this._logger.log(ILogger_1.LogLevel.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
            return;
          }
          try {
            await this._startInternal();
            this._connectionState = HubConnectionState.Connected;
            this._logger.log(ILogger_1.LogLevel.Information, "HubConnection reconnected successfully.");
            if (this._reconnectedCallbacks.length !== 0) {
              try {
                this._reconnectedCallbacks.forEach((c) => c.apply(this, [this.connection.connectionId]));
              } catch (e) {
                this._logger.log(ILogger_1.LogLevel.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${e}'.`);
              }
            }
            return;
          } catch (e) {
            this._logger.log(ILogger_1.LogLevel.Information, `Reconnect attempt failed because of error '${e}'.`);
            if (this._connectionState !== HubConnectionState.Reconnecting) {
              this._logger.log(ILogger_1.LogLevel.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`);
              if (this._connectionState === HubConnectionState.Disconnecting) {
                this._completeClose();
              }
              return;
            }
            retryError = e instanceof Error ? e : new Error(e.toString());
            nextRetryDelay = this._getNextRetryDelay(previousReconnectAttempts++, Date.now() - reconnectStartTime, retryError);
          }
        }
        this._logger.log(ILogger_1.LogLevel.Information, `Reconnect retries have been exhausted after ${Date.now() - reconnectStartTime} ms and ${previousReconnectAttempts} failed attempts. Connection disconnecting.`);
        this._completeClose();
      }
      _getNextRetryDelay(previousRetryCount, elapsedMilliseconds, retryReason) {
        try {
          return this._reconnectPolicy.nextRetryDelayInMilliseconds({
            elapsedMilliseconds,
            previousRetryCount,
            retryReason
          });
        } catch (e) {
          this._logger.log(ILogger_1.LogLevel.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${previousRetryCount}, ${elapsedMilliseconds}) threw error '${e}'.`);
          return null;
        }
      }
      _cancelCallbacksWithError(error) {
        const callbacks = this._callbacks;
        this._callbacks = {};
        Object.keys(callbacks).forEach((key) => {
          const callback = callbacks[key];
          try {
            callback(null, error);
          } catch (e) {
            this._logger.log(ILogger_1.LogLevel.Error, `Stream 'error' callback called with '${error}' threw error: ${Utils_1.getErrorString(e)}`);
          }
        });
      }
      _cleanupPingTimer() {
        if (this._pingServerHandle) {
          clearTimeout(this._pingServerHandle);
          this._pingServerHandle = void 0;
        }
      }
      _cleanupTimeout() {
        if (this._timeoutHandle) {
          clearTimeout(this._timeoutHandle);
        }
      }
      _createInvocation(methodName, args, nonblocking, streamIds) {
        if (nonblocking) {
          if (streamIds.length !== 0) {
            return {
              arguments: args,
              streamIds,
              target: methodName,
              type: IHubProtocol_1.MessageType.Invocation
            };
          } else {
            return {
              arguments: args,
              target: methodName,
              type: IHubProtocol_1.MessageType.Invocation
            };
          }
        } else {
          const invocationId = this._invocationId;
          this._invocationId++;
          if (streamIds.length !== 0) {
            return {
              arguments: args,
              invocationId: invocationId.toString(),
              streamIds,
              target: methodName,
              type: IHubProtocol_1.MessageType.Invocation
            };
          } else {
            return {
              arguments: args,
              invocationId: invocationId.toString(),
              target: methodName,
              type: IHubProtocol_1.MessageType.Invocation
            };
          }
        }
      }
      _launchStreams(streams, promiseQueue) {
        if (streams.length === 0) {
          return;
        }
        if (!promiseQueue) {
          promiseQueue = Promise.resolve();
        }
        for (const streamId in streams) {
          streams[streamId].subscribe({
            complete: () => {
              promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createCompletionMessage(streamId)));
            },
            error: (err) => {
              let message;
              if (err instanceof Error) {
                message = err.message;
              } else if (err && err.toString) {
                message = err.toString();
              } else {
                message = "Unknown error";
              }
              promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createCompletionMessage(streamId, message)));
            },
            next: (item) => {
              promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createStreamItemMessage(streamId, item)));
            }
          });
        }
      }
      _replaceStreamingParams(args) {
        const streams = [];
        const streamIds = [];
        for (let i = 0; i < args.length; i++) {
          const argument = args[i];
          if (this._isObservable(argument)) {
            const streamId = this._invocationId;
            this._invocationId++;
            streams[streamId] = argument;
            streamIds.push(streamId.toString());
            args.splice(i, 1);
          }
        }
        return [streams, streamIds];
      }
      _isObservable(arg) {
        return arg && arg.subscribe && typeof arg.subscribe === "function";
      }
      _createStreamInvocation(methodName, args, streamIds) {
        const invocationId = this._invocationId;
        this._invocationId++;
        if (streamIds.length !== 0) {
          return {
            arguments: args,
            invocationId: invocationId.toString(),
            streamIds,
            target: methodName,
            type: IHubProtocol_1.MessageType.StreamInvocation
          };
        } else {
          return {
            arguments: args,
            invocationId: invocationId.toString(),
            target: methodName,
            type: IHubProtocol_1.MessageType.StreamInvocation
          };
        }
      }
      _createCancelInvocation(id) {
        return {
          invocationId: id,
          type: IHubProtocol_1.MessageType.CancelInvocation
        };
      }
      _createStreamItemMessage(id, item) {
        return {
          invocationId: id,
          item,
          type: IHubProtocol_1.MessageType.StreamItem
        };
      }
      _createCompletionMessage(id, error, result) {
        if (error) {
          return {
            error,
            invocationId: id,
            type: IHubProtocol_1.MessageType.Completion
          };
        }
        return {
          invocationId: id,
          result,
          type: IHubProtocol_1.MessageType.Completion
        };
      }
    };
    exports.HubConnection = HubConnection;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/DefaultReconnectPolicy.js
var require_DefaultReconnectPolicy = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/DefaultReconnectPolicy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultReconnectPolicy = void 0;
    var DEFAULT_RETRY_DELAYS_IN_MILLISECONDS = [0, 2e3, 1e4, 3e4, null];
    var DefaultReconnectPolicy = class {
      constructor(retryDelays) {
        this._retryDelays = retryDelays !== void 0 ? [...retryDelays, null] : DEFAULT_RETRY_DELAYS_IN_MILLISECONDS;
      }
      nextRetryDelayInMilliseconds(retryContext) {
        return this._retryDelays[retryContext.previousRetryCount];
      }
    };
    exports.DefaultReconnectPolicy = DefaultReconnectPolicy;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/HeaderNames.js
var require_HeaderNames = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/HeaderNames.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HeaderNames = void 0;
    var HeaderNames = class {
    };
    exports.HeaderNames = HeaderNames;
    HeaderNames.Authorization = "Authorization";
    HeaderNames.Cookie = "Cookie";
  }
});

// node_modules/@microsoft/signalr/dist/cjs/AccessTokenHttpClient.js
var require_AccessTokenHttpClient = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/AccessTokenHttpClient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AccessTokenHttpClient = void 0;
    var HeaderNames_1 = require_HeaderNames();
    var HttpClient_1 = require_HttpClient();
    var AccessTokenHttpClient = class extends HttpClient_1.HttpClient {
      constructor(innerClient, accessTokenFactory) {
        super();
        this._innerClient = innerClient;
        this._accessTokenFactory = accessTokenFactory;
      }
      async send(request) {
        let allowRetry = true;
        if (this._accessTokenFactory && (!this._accessToken || request.url && request.url.indexOf("/negotiate?") > 0)) {
          allowRetry = false;
          this._accessToken = await this._accessTokenFactory();
        }
        this._setAuthorizationHeader(request);
        const response = await this._innerClient.send(request);
        if (allowRetry && response.statusCode === 401 && this._accessTokenFactory) {
          this._accessToken = await this._accessTokenFactory();
          this._setAuthorizationHeader(request);
          return await this._innerClient.send(request);
        }
        return response;
      }
      _setAuthorizationHeader(request) {
        if (!request.headers) {
          request.headers = {};
        }
        if (this._accessToken) {
          request.headers[HeaderNames_1.HeaderNames.Authorization] = `Bearer ${this._accessToken}`;
        } else if (this._accessTokenFactory) {
          if (request.headers[HeaderNames_1.HeaderNames.Authorization]) {
            delete request.headers[HeaderNames_1.HeaderNames.Authorization];
          }
        }
      }
      getCookieString(url) {
        return this._innerClient.getCookieString(url);
      }
    };
    exports.AccessTokenHttpClient = AccessTokenHttpClient;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/ITransport.js
var require_ITransport = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/ITransport.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TransferFormat = exports.HttpTransportType = void 0;
    var HttpTransportType;
    (function(HttpTransportType2) {
      HttpTransportType2[HttpTransportType2["None"] = 0] = "None";
      HttpTransportType2[HttpTransportType2["WebSockets"] = 1] = "WebSockets";
      HttpTransportType2[HttpTransportType2["ServerSentEvents"] = 2] = "ServerSentEvents";
      HttpTransportType2[HttpTransportType2["LongPolling"] = 4] = "LongPolling";
    })(HttpTransportType = exports.HttpTransportType || (exports.HttpTransportType = {}));
    var TransferFormat;
    (function(TransferFormat2) {
      TransferFormat2[TransferFormat2["Text"] = 1] = "Text";
      TransferFormat2[TransferFormat2["Binary"] = 2] = "Binary";
    })(TransferFormat = exports.TransferFormat || (exports.TransferFormat = {}));
  }
});

// node_modules/@microsoft/signalr/dist/cjs/AbortController.js
var require_AbortController = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/AbortController.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AbortController = void 0;
    var AbortController2 = class {
      constructor() {
        this._isAborted = false;
        this.onabort = null;
      }
      abort() {
        if (!this._isAborted) {
          this._isAborted = true;
          if (this.onabort) {
            this.onabort();
          }
        }
      }
      get signal() {
        return this;
      }
      get aborted() {
        return this._isAborted;
      }
    };
    exports.AbortController = AbortController2;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/LongPollingTransport.js
var require_LongPollingTransport = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/LongPollingTransport.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LongPollingTransport = void 0;
    var AbortController_1 = require_AbortController();
    var Errors_1 = require_Errors();
    var ILogger_1 = require_ILogger();
    var ITransport_1 = require_ITransport();
    var Utils_1 = require_Utils();
    var LongPollingTransport = class {
      constructor(httpClient, logger, options) {
        this._httpClient = httpClient;
        this._logger = logger;
        this._pollAbort = new AbortController_1.AbortController();
        this._options = options;
        this._running = false;
        this.onreceive = null;
        this.onclose = null;
      }
      // This is an internal type, not exported from 'index' so this is really just internal.
      get pollAborted() {
        return this._pollAbort.aborted;
      }
      async connect(url, transferFormat) {
        Utils_1.Arg.isRequired(url, "url");
        Utils_1.Arg.isRequired(transferFormat, "transferFormat");
        Utils_1.Arg.isIn(transferFormat, ITransport_1.TransferFormat, "transferFormat");
        this._url = url;
        this._logger.log(ILogger_1.LogLevel.Trace, "(LongPolling transport) Connecting.");
        if (transferFormat === ITransport_1.TransferFormat.Binary && (typeof XMLHttpRequest !== "undefined" && typeof new XMLHttpRequest().responseType !== "string")) {
          throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
        }
        const [name, value] = Utils_1.getUserAgentHeader();
        const headers = { [name]: value, ...this._options.headers };
        const pollOptions = {
          abortSignal: this._pollAbort.signal,
          headers,
          timeout: 1e5,
          withCredentials: this._options.withCredentials
        };
        if (transferFormat === ITransport_1.TransferFormat.Binary) {
          pollOptions.responseType = "arraybuffer";
        }
        const pollUrl = `${url}&_=${Date.now()}`;
        this._logger.log(ILogger_1.LogLevel.Trace, `(LongPolling transport) polling: ${pollUrl}.`);
        const response = await this._httpClient.get(pollUrl, pollOptions);
        if (response.statusCode !== 200) {
          this._logger.log(ILogger_1.LogLevel.Error, `(LongPolling transport) Unexpected response code: ${response.statusCode}.`);
          this._closeError = new Errors_1.HttpError(response.statusText || "", response.statusCode);
          this._running = false;
        } else {
          this._running = true;
        }
        this._receiving = this._poll(this._url, pollOptions);
      }
      async _poll(url, pollOptions) {
        try {
          while (this._running) {
            try {
              const pollUrl = `${url}&_=${Date.now()}`;
              this._logger.log(ILogger_1.LogLevel.Trace, `(LongPolling transport) polling: ${pollUrl}.`);
              const response = await this._httpClient.get(pollUrl, pollOptions);
              if (response.statusCode === 204) {
                this._logger.log(ILogger_1.LogLevel.Information, "(LongPolling transport) Poll terminated by server.");
                this._running = false;
              } else if (response.statusCode !== 200) {
                this._logger.log(ILogger_1.LogLevel.Error, `(LongPolling transport) Unexpected response code: ${response.statusCode}.`);
                this._closeError = new Errors_1.HttpError(response.statusText || "", response.statusCode);
                this._running = false;
              } else {
                if (response.content) {
                  this._logger.log(ILogger_1.LogLevel.Trace, `(LongPolling transport) data received. ${Utils_1.getDataDetail(response.content, this._options.logMessageContent)}.`);
                  if (this.onreceive) {
                    this.onreceive(response.content);
                  }
                } else {
                  this._logger.log(ILogger_1.LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
                }
              }
            } catch (e) {
              if (!this._running) {
                this._logger.log(ILogger_1.LogLevel.Trace, `(LongPolling transport) Poll errored after shutdown: ${e.message}`);
              } else {
                if (e instanceof Errors_1.TimeoutError) {
                  this._logger.log(ILogger_1.LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
                } else {
                  this._closeError = e;
                  this._running = false;
                }
              }
            }
          }
        } finally {
          this._logger.log(ILogger_1.LogLevel.Trace, "(LongPolling transport) Polling complete.");
          if (!this.pollAborted) {
            this._raiseOnClose();
          }
        }
      }
      async send(data) {
        if (!this._running) {
          return Promise.reject(new Error("Cannot send until the transport is connected"));
        }
        return Utils_1.sendMessage(this._logger, "LongPolling", this._httpClient, this._url, data, this._options);
      }
      async stop() {
        this._logger.log(ILogger_1.LogLevel.Trace, "(LongPolling transport) Stopping polling.");
        this._running = false;
        this._pollAbort.abort();
        try {
          await this._receiving;
          this._logger.log(ILogger_1.LogLevel.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
          const headers = {};
          const [name, value] = Utils_1.getUserAgentHeader();
          headers[name] = value;
          const deleteOptions = {
            headers: { ...headers, ...this._options.headers },
            timeout: this._options.timeout,
            withCredentials: this._options.withCredentials
          };
          await this._httpClient.delete(this._url, deleteOptions);
          this._logger.log(ILogger_1.LogLevel.Trace, "(LongPolling transport) DELETE request sent.");
        } finally {
          this._logger.log(ILogger_1.LogLevel.Trace, "(LongPolling transport) Stop finished.");
          this._raiseOnClose();
        }
      }
      _raiseOnClose() {
        if (this.onclose) {
          let logMessage = "(LongPolling transport) Firing onclose event.";
          if (this._closeError) {
            logMessage += " Error: " + this._closeError;
          }
          this._logger.log(ILogger_1.LogLevel.Trace, logMessage);
          this.onclose(this._closeError);
        }
      }
    };
    exports.LongPollingTransport = LongPollingTransport;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/ServerSentEventsTransport.js
var require_ServerSentEventsTransport = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/ServerSentEventsTransport.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ServerSentEventsTransport = void 0;
    var ILogger_1 = require_ILogger();
    var ITransport_1 = require_ITransport();
    var Utils_1 = require_Utils();
    var ServerSentEventsTransport = class {
      constructor(httpClient, accessToken, logger, options) {
        this._httpClient = httpClient;
        this._accessToken = accessToken;
        this._logger = logger;
        this._options = options;
        this.onreceive = null;
        this.onclose = null;
      }
      async connect(url, transferFormat) {
        Utils_1.Arg.isRequired(url, "url");
        Utils_1.Arg.isRequired(transferFormat, "transferFormat");
        Utils_1.Arg.isIn(transferFormat, ITransport_1.TransferFormat, "transferFormat");
        this._logger.log(ILogger_1.LogLevel.Trace, "(SSE transport) Connecting.");
        this._url = url;
        if (this._accessToken) {
          url += (url.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(this._accessToken)}`;
        }
        return new Promise((resolve, reject) => {
          let opened = false;
          if (transferFormat !== ITransport_1.TransferFormat.Text) {
            reject(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
            return;
          }
          let eventSource;
          if (Utils_1.Platform.isBrowser || Utils_1.Platform.isWebWorker) {
            eventSource = new this._options.EventSource(url, { withCredentials: this._options.withCredentials });
          } else {
            const cookies = this._httpClient.getCookieString(url);
            const headers = {};
            headers.Cookie = cookies;
            const [name, value] = Utils_1.getUserAgentHeader();
            headers[name] = value;
            eventSource = new this._options.EventSource(url, { withCredentials: this._options.withCredentials, headers: { ...headers, ...this._options.headers } });
          }
          try {
            eventSource.onmessage = (e) => {
              if (this.onreceive) {
                try {
                  this._logger.log(ILogger_1.LogLevel.Trace, `(SSE transport) data received. ${Utils_1.getDataDetail(e.data, this._options.logMessageContent)}.`);
                  this.onreceive(e.data);
                } catch (error) {
                  this._close(error);
                  return;
                }
              }
            };
            eventSource.onerror = (e) => {
              if (opened) {
                this._close();
              } else {
                reject(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."));
              }
            };
            eventSource.onopen = () => {
              this._logger.log(ILogger_1.LogLevel.Information, `SSE connected to ${this._url}`);
              this._eventSource = eventSource;
              opened = true;
              resolve();
            };
          } catch (e) {
            reject(e);
            return;
          }
        });
      }
      async send(data) {
        if (!this._eventSource) {
          return Promise.reject(new Error("Cannot send until the transport is connected"));
        }
        return Utils_1.sendMessage(this._logger, "SSE", this._httpClient, this._url, data, this._options);
      }
      stop() {
        this._close();
        return Promise.resolve();
      }
      _close(e) {
        if (this._eventSource) {
          this._eventSource.close();
          this._eventSource = void 0;
          if (this.onclose) {
            this.onclose(e);
          }
        }
      }
    };
    exports.ServerSentEventsTransport = ServerSentEventsTransport;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/WebSocketTransport.js
var require_WebSocketTransport = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/WebSocketTransport.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WebSocketTransport = void 0;
    var HeaderNames_1 = require_HeaderNames();
    var ILogger_1 = require_ILogger();
    var ITransport_1 = require_ITransport();
    var Utils_1 = require_Utils();
    var WebSocketTransport = class {
      constructor(httpClient, accessTokenFactory, logger, logMessageContent, webSocketConstructor, headers) {
        this._logger = logger;
        this._accessTokenFactory = accessTokenFactory;
        this._logMessageContent = logMessageContent;
        this._webSocketConstructor = webSocketConstructor;
        this._httpClient = httpClient;
        this.onreceive = null;
        this.onclose = null;
        this._headers = headers;
      }
      async connect(url, transferFormat) {
        Utils_1.Arg.isRequired(url, "url");
        Utils_1.Arg.isRequired(transferFormat, "transferFormat");
        Utils_1.Arg.isIn(transferFormat, ITransport_1.TransferFormat, "transferFormat");
        this._logger.log(ILogger_1.LogLevel.Trace, "(WebSockets transport) Connecting.");
        let token;
        if (this._accessTokenFactory) {
          token = await this._accessTokenFactory();
        }
        return new Promise((resolve, reject) => {
          url = url.replace(/^http/, "ws");
          let webSocket;
          const cookies = this._httpClient.getCookieString(url);
          let opened = false;
          if (Utils_1.Platform.isNode || Utils_1.Platform.isReactNative) {
            const headers = {};
            const [name, value] = Utils_1.getUserAgentHeader();
            headers[name] = value;
            if (token) {
              headers[HeaderNames_1.HeaderNames.Authorization] = `Bearer ${token}`;
            }
            if (cookies) {
              headers[HeaderNames_1.HeaderNames.Cookie] = cookies;
            }
            webSocket = new this._webSocketConstructor(url, void 0, {
              headers: { ...headers, ...this._headers }
            });
          } else {
            if (token) {
              url += (url.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(token)}`;
            }
          }
          if (!webSocket) {
            webSocket = new this._webSocketConstructor(url);
          }
          if (transferFormat === ITransport_1.TransferFormat.Binary) {
            webSocket.binaryType = "arraybuffer";
          }
          webSocket.onopen = (_event) => {
            this._logger.log(ILogger_1.LogLevel.Information, `WebSocket connected to ${url}.`);
            this._webSocket = webSocket;
            opened = true;
            resolve();
          };
          webSocket.onerror = (event) => {
            let error = null;
            if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
              error = event.error;
            } else {
              error = "There was an error with the transport";
            }
            this._logger.log(ILogger_1.LogLevel.Information, `(WebSockets transport) ${error}.`);
          };
          webSocket.onmessage = (message) => {
            this._logger.log(ILogger_1.LogLevel.Trace, `(WebSockets transport) data received. ${Utils_1.getDataDetail(message.data, this._logMessageContent)}.`);
            if (this.onreceive) {
              try {
                this.onreceive(message.data);
              } catch (error) {
                this._close(error);
                return;
              }
            }
          };
          webSocket.onclose = (event) => {
            if (opened) {
              this._close(event);
            } else {
              let error = null;
              if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
                error = event.error;
              } else {
                error = "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.";
              }
              reject(new Error(error));
            }
          };
        });
      }
      send(data) {
        if (this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN) {
          this._logger.log(ILogger_1.LogLevel.Trace, `(WebSockets transport) sending data. ${Utils_1.getDataDetail(data, this._logMessageContent)}.`);
          this._webSocket.send(data);
          return Promise.resolve();
        }
        return Promise.reject("WebSocket is not in the OPEN state");
      }
      stop() {
        if (this._webSocket) {
          this._close(void 0);
        }
        return Promise.resolve();
      }
      _close(event) {
        if (this._webSocket) {
          this._webSocket.onclose = () => {
          };
          this._webSocket.onmessage = () => {
          };
          this._webSocket.onerror = () => {
          };
          this._webSocket.close();
          this._webSocket = void 0;
        }
        this._logger.log(ILogger_1.LogLevel.Trace, "(WebSockets transport) socket closed.");
        if (this.onclose) {
          if (this._isCloseEvent(event) && (event.wasClean === false || event.code !== 1e3)) {
            this.onclose(new Error(`WebSocket closed with status code: ${event.code} (${event.reason || "no reason given"}).`));
          } else if (event instanceof Error) {
            this.onclose(event);
          } else {
            this.onclose();
          }
        }
      }
      _isCloseEvent(event) {
        return event && typeof event.wasClean === "boolean" && typeof event.code === "number";
      }
    };
    exports.WebSocketTransport = WebSocketTransport;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/HttpConnection.js
var require_HttpConnection = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/HttpConnection.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TransportSendQueue = exports.HttpConnection = void 0;
    var AccessTokenHttpClient_1 = require_AccessTokenHttpClient();
    var DefaultHttpClient_1 = require_DefaultHttpClient();
    var Errors_1 = require_Errors();
    var ILogger_1 = require_ILogger();
    var ITransport_1 = require_ITransport();
    var LongPollingTransport_1 = require_LongPollingTransport();
    var ServerSentEventsTransport_1 = require_ServerSentEventsTransport();
    var Utils_1 = require_Utils();
    var WebSocketTransport_1 = require_WebSocketTransport();
    var MAX_REDIRECTS = 100;
    var HttpConnection = class {
      constructor(url, options = {}) {
        this._stopPromiseResolver = () => {
        };
        this.features = {};
        this._negotiateVersion = 1;
        Utils_1.Arg.isRequired(url, "url");
        this._logger = Utils_1.createLogger(options.logger);
        this.baseUrl = this._resolveUrl(url);
        options = options || {};
        options.logMessageContent = options.logMessageContent === void 0 ? false : options.logMessageContent;
        if (typeof options.withCredentials === "boolean" || options.withCredentials === void 0) {
          options.withCredentials = options.withCredentials === void 0 ? true : options.withCredentials;
        } else {
          throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
        }
        options.timeout = options.timeout === void 0 ? 100 * 1e3 : options.timeout;
        let webSocketModule = null;
        let eventSourceModule = null;
        if (Utils_1.Platform.isNode && typeof require !== "undefined") {
          const requireFunc = typeof __webpack_require__ === "function" ? __non_webpack_require__ : require;
          webSocketModule = requireFunc("ws");
          eventSourceModule = requireFunc("eventsource");
        }
        if (!Utils_1.Platform.isNode && typeof WebSocket !== "undefined" && !options.WebSocket) {
          options.WebSocket = WebSocket;
        } else if (Utils_1.Platform.isNode && !options.WebSocket) {
          if (webSocketModule) {
            options.WebSocket = webSocketModule;
          }
        }
        if (!Utils_1.Platform.isNode && typeof EventSource !== "undefined" && !options.EventSource) {
          options.EventSource = EventSource;
        } else if (Utils_1.Platform.isNode && !options.EventSource) {
          if (typeof eventSourceModule !== "undefined") {
            options.EventSource = eventSourceModule;
          }
        }
        this._httpClient = new AccessTokenHttpClient_1.AccessTokenHttpClient(options.httpClient || new DefaultHttpClient_1.DefaultHttpClient(this._logger), options.accessTokenFactory);
        this._connectionState = "Disconnected";
        this._connectionStarted = false;
        this._options = options;
        this.onreceive = null;
        this.onclose = null;
      }
      async start(transferFormat) {
        transferFormat = transferFormat || ITransport_1.TransferFormat.Binary;
        Utils_1.Arg.isIn(transferFormat, ITransport_1.TransferFormat, "transferFormat");
        this._logger.log(ILogger_1.LogLevel.Debug, `Starting connection with transfer format '${ITransport_1.TransferFormat[transferFormat]}'.`);
        if (this._connectionState !== "Disconnected") {
          return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
        }
        this._connectionState = "Connecting";
        this._startInternalPromise = this._startInternal(transferFormat);
        await this._startInternalPromise;
        if (this._connectionState === "Disconnecting") {
          const message = "Failed to start the HttpConnection before stop() was called.";
          this._logger.log(ILogger_1.LogLevel.Error, message);
          await this._stopPromise;
          return Promise.reject(new Errors_1.AbortError(message));
        } else if (this._connectionState !== "Connected") {
          const message = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
          this._logger.log(ILogger_1.LogLevel.Error, message);
          return Promise.reject(new Errors_1.AbortError(message));
        }
        this._connectionStarted = true;
      }
      send(data) {
        if (this._connectionState !== "Connected") {
          return Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State."));
        }
        if (!this._sendQueue) {
          this._sendQueue = new TransportSendQueue(this.transport);
        }
        return this._sendQueue.send(data);
      }
      async stop(error) {
        if (this._connectionState === "Disconnected") {
          this._logger.log(ILogger_1.LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnected state.`);
          return Promise.resolve();
        }
        if (this._connectionState === "Disconnecting") {
          this._logger.log(ILogger_1.LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnecting state.`);
          return this._stopPromise;
        }
        this._connectionState = "Disconnecting";
        this._stopPromise = new Promise((resolve) => {
          this._stopPromiseResolver = resolve;
        });
        await this._stopInternal(error);
        await this._stopPromise;
      }
      async _stopInternal(error) {
        this._stopError = error;
        try {
          await this._startInternalPromise;
        } catch (e) {
        }
        if (this.transport) {
          try {
            await this.transport.stop();
          } catch (e) {
            this._logger.log(ILogger_1.LogLevel.Error, `HttpConnection.transport.stop() threw error '${e}'.`);
            this._stopConnection();
          }
          this.transport = void 0;
        } else {
          this._logger.log(ILogger_1.LogLevel.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
        }
      }
      async _startInternal(transferFormat) {
        let url = this.baseUrl;
        this._accessTokenFactory = this._options.accessTokenFactory;
        this._httpClient._accessTokenFactory = this._accessTokenFactory;
        try {
          if (this._options.skipNegotiation) {
            if (this._options.transport === ITransport_1.HttpTransportType.WebSockets) {
              this.transport = this._constructTransport(ITransport_1.HttpTransportType.WebSockets);
              await this._startTransport(url, transferFormat);
            } else {
              throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
            }
          } else {
            let negotiateResponse = null;
            let redirects = 0;
            do {
              negotiateResponse = await this._getNegotiationResponse(url);
              if (this._connectionState === "Disconnecting" || this._connectionState === "Disconnected") {
                throw new Errors_1.AbortError("The connection was stopped during negotiation.");
              }
              if (negotiateResponse.error) {
                throw new Error(negotiateResponse.error);
              }
              if (negotiateResponse.ProtocolVersion) {
                throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
              }
              if (negotiateResponse.url) {
                url = negotiateResponse.url;
              }
              if (negotiateResponse.accessToken) {
                const accessToken = negotiateResponse.accessToken;
                this._accessTokenFactory = () => accessToken;
                this._httpClient._accessToken = accessToken;
                this._httpClient._accessTokenFactory = void 0;
              }
              redirects++;
            } while (negotiateResponse.url && redirects < MAX_REDIRECTS);
            if (redirects === MAX_REDIRECTS && negotiateResponse.url) {
              throw new Error("Negotiate redirection limit exceeded.");
            }
            await this._createTransport(url, this._options.transport, negotiateResponse, transferFormat);
          }
          if (this.transport instanceof LongPollingTransport_1.LongPollingTransport) {
            this.features.inherentKeepAlive = true;
          }
          if (this._connectionState === "Connecting") {
            this._logger.log(ILogger_1.LogLevel.Debug, "The HttpConnection connected successfully.");
            this._connectionState = "Connected";
          }
        } catch (e) {
          this._logger.log(ILogger_1.LogLevel.Error, "Failed to start the connection: " + e);
          this._connectionState = "Disconnected";
          this.transport = void 0;
          this._stopPromiseResolver();
          return Promise.reject(e);
        }
      }
      async _getNegotiationResponse(url) {
        const headers = {};
        const [name, value] = Utils_1.getUserAgentHeader();
        headers[name] = value;
        const negotiateUrl = this._resolveNegotiateUrl(url);
        this._logger.log(ILogger_1.LogLevel.Debug, `Sending negotiation request: ${negotiateUrl}.`);
        try {
          const response = await this._httpClient.post(negotiateUrl, {
            content: "",
            headers: { ...headers, ...this._options.headers },
            timeout: this._options.timeout,
            withCredentials: this._options.withCredentials
          });
          if (response.statusCode !== 200) {
            return Promise.reject(new Error(`Unexpected status code returned from negotiate '${response.statusCode}'`));
          }
          const negotiateResponse = JSON.parse(response.content);
          if (!negotiateResponse.negotiateVersion || negotiateResponse.negotiateVersion < 1) {
            negotiateResponse.connectionToken = negotiateResponse.connectionId;
          }
          return negotiateResponse;
        } catch (e) {
          let errorMessage = "Failed to complete negotiation with the server: " + e;
          if (e instanceof Errors_1.HttpError) {
            if (e.statusCode === 404) {
              errorMessage = errorMessage + " Either this is not a SignalR endpoint or there is a proxy blocking the connection.";
            }
          }
          this._logger.log(ILogger_1.LogLevel.Error, errorMessage);
          return Promise.reject(new Errors_1.FailedToNegotiateWithServerError(errorMessage));
        }
      }
      _createConnectUrl(url, connectionToken) {
        if (!connectionToken) {
          return url;
        }
        return url + (url.indexOf("?") === -1 ? "?" : "&") + `id=${connectionToken}`;
      }
      async _createTransport(url, requestedTransport, negotiateResponse, requestedTransferFormat) {
        let connectUrl = this._createConnectUrl(url, negotiateResponse.connectionToken);
        if (this._isITransport(requestedTransport)) {
          this._logger.log(ILogger_1.LogLevel.Debug, "Connection was provided an instance of ITransport, using that directly.");
          this.transport = requestedTransport;
          await this._startTransport(connectUrl, requestedTransferFormat);
          this.connectionId = negotiateResponse.connectionId;
          return;
        }
        const transportExceptions = [];
        const transports = negotiateResponse.availableTransports || [];
        let negotiate = negotiateResponse;
        for (const endpoint of transports) {
          const transportOrError = this._resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat);
          if (transportOrError instanceof Error) {
            transportExceptions.push(`${endpoint.transport} failed:`);
            transportExceptions.push(transportOrError);
          } else if (this._isITransport(transportOrError)) {
            this.transport = transportOrError;
            if (!negotiate) {
              try {
                negotiate = await this._getNegotiationResponse(url);
              } catch (ex) {
                return Promise.reject(ex);
              }
              connectUrl = this._createConnectUrl(url, negotiate.connectionToken);
            }
            try {
              await this._startTransport(connectUrl, requestedTransferFormat);
              this.connectionId = negotiate.connectionId;
              return;
            } catch (ex) {
              this._logger.log(ILogger_1.LogLevel.Error, `Failed to start the transport '${endpoint.transport}': ${ex}`);
              negotiate = void 0;
              transportExceptions.push(new Errors_1.FailedToStartTransportError(`${endpoint.transport} failed: ${ex}`, ITransport_1.HttpTransportType[endpoint.transport]));
              if (this._connectionState !== "Connecting") {
                const message = "Failed to select transport before stop() was called.";
                this._logger.log(ILogger_1.LogLevel.Debug, message);
                return Promise.reject(new Errors_1.AbortError(message));
              }
            }
          }
        }
        if (transportExceptions.length > 0) {
          return Promise.reject(new Errors_1.AggregateErrors(`Unable to connect to the server with any of the available transports. ${transportExceptions.join(" ")}`, transportExceptions));
        }
        return Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
      }
      _constructTransport(transport) {
        switch (transport) {
          case ITransport_1.HttpTransportType.WebSockets:
            if (!this._options.WebSocket) {
              throw new Error("'WebSocket' is not supported in your environment.");
            }
            return new WebSocketTransport_1.WebSocketTransport(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
          case ITransport_1.HttpTransportType.ServerSentEvents:
            if (!this._options.EventSource) {
              throw new Error("'EventSource' is not supported in your environment.");
            }
            return new ServerSentEventsTransport_1.ServerSentEventsTransport(this._httpClient, this._httpClient._accessToken, this._logger, this._options);
          case ITransport_1.HttpTransportType.LongPolling:
            return new LongPollingTransport_1.LongPollingTransport(this._httpClient, this._logger, this._options);
          default:
            throw new Error(`Unknown transport: ${transport}.`);
        }
      }
      _startTransport(url, transferFormat) {
        this.transport.onreceive = this.onreceive;
        this.transport.onclose = (e) => this._stopConnection(e);
        return this.transport.connect(url, transferFormat);
      }
      _resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat) {
        const transport = ITransport_1.HttpTransportType[endpoint.transport];
        if (transport === null || transport === void 0) {
          this._logger.log(ILogger_1.LogLevel.Debug, `Skipping transport '${endpoint.transport}' because it is not supported by this client.`);
          return new Error(`Skipping transport '${endpoint.transport}' because it is not supported by this client.`);
        } else {
          if (transportMatches(requestedTransport, transport)) {
            const transferFormats = endpoint.transferFormats.map((s) => ITransport_1.TransferFormat[s]);
            if (transferFormats.indexOf(requestedTransferFormat) >= 0) {
              if (transport === ITransport_1.HttpTransportType.WebSockets && !this._options.WebSocket || transport === ITransport_1.HttpTransportType.ServerSentEvents && !this._options.EventSource) {
                this._logger.log(ILogger_1.LogLevel.Debug, `Skipping transport '${ITransport_1.HttpTransportType[transport]}' because it is not supported in your environment.'`);
                return new Errors_1.UnsupportedTransportError(`'${ITransport_1.HttpTransportType[transport]}' is not supported in your environment.`, transport);
              } else {
                this._logger.log(ILogger_1.LogLevel.Debug, `Selecting transport '${ITransport_1.HttpTransportType[transport]}'.`);
                try {
                  return this._constructTransport(transport);
                } catch (ex) {
                  return ex;
                }
              }
            } else {
              this._logger.log(ILogger_1.LogLevel.Debug, `Skipping transport '${ITransport_1.HttpTransportType[transport]}' because it does not support the requested transfer format '${ITransport_1.TransferFormat[requestedTransferFormat]}'.`);
              return new Error(`'${ITransport_1.HttpTransportType[transport]}' does not support ${ITransport_1.TransferFormat[requestedTransferFormat]}.`);
            }
          } else {
            this._logger.log(ILogger_1.LogLevel.Debug, `Skipping transport '${ITransport_1.HttpTransportType[transport]}' because it was disabled by the client.`);
            return new Errors_1.DisabledTransportError(`'${ITransport_1.HttpTransportType[transport]}' is disabled by the client.`, transport);
          }
        }
      }
      _isITransport(transport) {
        return transport && typeof transport === "object" && "connect" in transport;
      }
      _stopConnection(error) {
        this._logger.log(ILogger_1.LogLevel.Debug, `HttpConnection.stopConnection(${error}) called while in state ${this._connectionState}.`);
        this.transport = void 0;
        error = this._stopError || error;
        this._stopError = void 0;
        if (this._connectionState === "Disconnected") {
          this._logger.log(ILogger_1.LogLevel.Debug, `Call to HttpConnection.stopConnection(${error}) was ignored because the connection is already in the disconnected state.`);
          return;
        }
        if (this._connectionState === "Connecting") {
          this._logger.log(ILogger_1.LogLevel.Warning, `Call to HttpConnection.stopConnection(${error}) was ignored because the connection is still in the connecting state.`);
          throw new Error(`HttpConnection.stopConnection(${error}) was called while the connection is still in the connecting state.`);
        }
        if (this._connectionState === "Disconnecting") {
          this._stopPromiseResolver();
        }
        if (error) {
          this._logger.log(ILogger_1.LogLevel.Error, `Connection disconnected with error '${error}'.`);
        } else {
          this._logger.log(ILogger_1.LogLevel.Information, "Connection disconnected.");
        }
        if (this._sendQueue) {
          this._sendQueue.stop().catch((e) => {
            this._logger.log(ILogger_1.LogLevel.Error, `TransportSendQueue.stop() threw error '${e}'.`);
          });
          this._sendQueue = void 0;
        }
        this.connectionId = void 0;
        this._connectionState = "Disconnected";
        if (this._connectionStarted) {
          this._connectionStarted = false;
          try {
            if (this.onclose) {
              this.onclose(error);
            }
          } catch (e) {
            this._logger.log(ILogger_1.LogLevel.Error, `HttpConnection.onclose(${error}) threw error '${e}'.`);
          }
        }
      }
      _resolveUrl(url) {
        if (url.lastIndexOf("https://", 0) === 0 || url.lastIndexOf("http://", 0) === 0) {
          return url;
        }
        if (!Utils_1.Platform.isBrowser) {
          throw new Error(`Cannot resolve '${url}'.`);
        }
        const aTag = window.document.createElement("a");
        aTag.href = url;
        this._logger.log(ILogger_1.LogLevel.Information, `Normalizing '${url}' to '${aTag.href}'.`);
        return aTag.href;
      }
      _resolveNegotiateUrl(url) {
        const index = url.indexOf("?");
        let negotiateUrl = url.substring(0, index === -1 ? url.length : index);
        if (negotiateUrl[negotiateUrl.length - 1] !== "/") {
          negotiateUrl += "/";
        }
        negotiateUrl += "negotiate";
        negotiateUrl += index === -1 ? "" : url.substring(index);
        if (negotiateUrl.indexOf("negotiateVersion") === -1) {
          negotiateUrl += index === -1 ? "?" : "&";
          negotiateUrl += "negotiateVersion=" + this._negotiateVersion;
        }
        return negotiateUrl;
      }
    };
    exports.HttpConnection = HttpConnection;
    function transportMatches(requestedTransport, actualTransport) {
      return !requestedTransport || (actualTransport & requestedTransport) !== 0;
    }
    var TransportSendQueue = class {
      constructor(_transport) {
        this._transport = _transport;
        this._buffer = [];
        this._executing = true;
        this._sendBufferedData = new PromiseSource();
        this._transportResult = new PromiseSource();
        this._sendLoopPromise = this._sendLoop();
      }
      send(data) {
        this._bufferData(data);
        if (!this._transportResult) {
          this._transportResult = new PromiseSource();
        }
        return this._transportResult.promise;
      }
      stop() {
        this._executing = false;
        this._sendBufferedData.resolve();
        return this._sendLoopPromise;
      }
      _bufferData(data) {
        if (this._buffer.length && typeof this._buffer[0] !== typeof data) {
          throw new Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof data}`);
        }
        this._buffer.push(data);
        this._sendBufferedData.resolve();
      }
      async _sendLoop() {
        while (true) {
          await this._sendBufferedData.promise;
          if (!this._executing) {
            if (this._transportResult) {
              this._transportResult.reject("Connection stopped.");
            }
            break;
          }
          this._sendBufferedData = new PromiseSource();
          const transportResult = this._transportResult;
          this._transportResult = void 0;
          const data = typeof this._buffer[0] === "string" ? this._buffer.join("") : TransportSendQueue._concatBuffers(this._buffer);
          this._buffer.length = 0;
          try {
            await this._transport.send(data);
            transportResult.resolve();
          } catch (error) {
            transportResult.reject(error);
          }
        }
      }
      static _concatBuffers(arrayBuffers) {
        const totalLength = arrayBuffers.map((b) => b.byteLength).reduce((a, b) => a + b);
        const result = new Uint8Array(totalLength);
        let offset = 0;
        for (const item of arrayBuffers) {
          result.set(new Uint8Array(item), offset);
          offset += item.byteLength;
        }
        return result.buffer;
      }
    };
    exports.TransportSendQueue = TransportSendQueue;
    var PromiseSource = class {
      constructor() {
        this.promise = new Promise((resolve, reject) => [this._resolver, this._rejecter] = [resolve, reject]);
      }
      resolve() {
        this._resolver();
      }
      reject(reason) {
        this._rejecter(reason);
      }
    };
  }
});

// node_modules/@microsoft/signalr/dist/cjs/JsonHubProtocol.js
var require_JsonHubProtocol = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/JsonHubProtocol.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JsonHubProtocol = void 0;
    var IHubProtocol_1 = require_IHubProtocol();
    var ILogger_1 = require_ILogger();
    var ITransport_1 = require_ITransport();
    var Loggers_1 = require_Loggers();
    var TextMessageFormat_1 = require_TextMessageFormat();
    var JSON_HUB_PROTOCOL_NAME = "json";
    var JsonHubProtocol = class {
      constructor() {
        this.name = JSON_HUB_PROTOCOL_NAME;
        this.version = 1;
        this.transferFormat = ITransport_1.TransferFormat.Text;
      }
      /** Creates an array of {@link @microsoft/signalr.HubMessage} objects from the specified serialized representation.
       *
       * @param {string} input A string containing the serialized representation.
       * @param {ILogger} logger A logger that will be used to log messages that occur during parsing.
       */
      parseMessages(input, logger) {
        if (typeof input !== "string") {
          throw new Error("Invalid input for JSON hub protocol. Expected a string.");
        }
        if (!input) {
          return [];
        }
        if (logger === null) {
          logger = Loggers_1.NullLogger.instance;
        }
        const messages = TextMessageFormat_1.TextMessageFormat.parse(input);
        const hubMessages = [];
        for (const message of messages) {
          const parsedMessage = JSON.parse(message);
          if (typeof parsedMessage.type !== "number") {
            throw new Error("Invalid payload.");
          }
          switch (parsedMessage.type) {
            case IHubProtocol_1.MessageType.Invocation:
              this._isInvocationMessage(parsedMessage);
              break;
            case IHubProtocol_1.MessageType.StreamItem:
              this._isStreamItemMessage(parsedMessage);
              break;
            case IHubProtocol_1.MessageType.Completion:
              this._isCompletionMessage(parsedMessage);
              break;
            case IHubProtocol_1.MessageType.Ping:
              break;
            case IHubProtocol_1.MessageType.Close:
              break;
            default:
              logger.log(ILogger_1.LogLevel.Information, "Unknown message type '" + parsedMessage.type + "' ignored.");
              continue;
          }
          hubMessages.push(parsedMessage);
        }
        return hubMessages;
      }
      /** Writes the specified {@link @microsoft/signalr.HubMessage} to a string and returns it.
       *
       * @param {HubMessage} message The message to write.
       * @returns {string} A string containing the serialized representation of the message.
       */
      writeMessage(message) {
        return TextMessageFormat_1.TextMessageFormat.write(JSON.stringify(message));
      }
      _isInvocationMessage(message) {
        this._assertNotEmptyString(message.target, "Invalid payload for Invocation message.");
        if (message.invocationId !== void 0) {
          this._assertNotEmptyString(message.invocationId, "Invalid payload for Invocation message.");
        }
      }
      _isStreamItemMessage(message) {
        this._assertNotEmptyString(message.invocationId, "Invalid payload for StreamItem message.");
        if (message.item === void 0) {
          throw new Error("Invalid payload for StreamItem message.");
        }
      }
      _isCompletionMessage(message) {
        if (message.result && message.error) {
          throw new Error("Invalid payload for Completion message.");
        }
        if (!message.result && message.error) {
          this._assertNotEmptyString(message.error, "Invalid payload for Completion message.");
        }
        this._assertNotEmptyString(message.invocationId, "Invalid payload for Completion message.");
      }
      _assertNotEmptyString(value, errorMessage) {
        if (typeof value !== "string" || value === "") {
          throw new Error(errorMessage);
        }
      }
    };
    exports.JsonHubProtocol = JsonHubProtocol;
  }
});

// node_modules/@microsoft/signalr/dist/cjs/HubConnectionBuilder.js
var require_HubConnectionBuilder = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/HubConnectionBuilder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HubConnectionBuilder = void 0;
    var DefaultReconnectPolicy_1 = require_DefaultReconnectPolicy();
    var HttpConnection_1 = require_HttpConnection();
    var HubConnection_1 = require_HubConnection();
    var ILogger_1 = require_ILogger();
    var JsonHubProtocol_1 = require_JsonHubProtocol();
    var Loggers_1 = require_Loggers();
    var Utils_1 = require_Utils();
    var LogLevelNameMapping = {
      trace: ILogger_1.LogLevel.Trace,
      debug: ILogger_1.LogLevel.Debug,
      info: ILogger_1.LogLevel.Information,
      information: ILogger_1.LogLevel.Information,
      warn: ILogger_1.LogLevel.Warning,
      warning: ILogger_1.LogLevel.Warning,
      error: ILogger_1.LogLevel.Error,
      critical: ILogger_1.LogLevel.Critical,
      none: ILogger_1.LogLevel.None
    };
    function parseLogLevel(name) {
      const mapping = LogLevelNameMapping[name.toLowerCase()];
      if (typeof mapping !== "undefined") {
        return mapping;
      } else {
        throw new Error(`Unknown log level: ${name}`);
      }
    }
    var HubConnectionBuilder = class {
      configureLogging(logging) {
        Utils_1.Arg.isRequired(logging, "logging");
        if (isLogger(logging)) {
          this.logger = logging;
        } else if (typeof logging === "string") {
          const logLevel = parseLogLevel(logging);
          this.logger = new Utils_1.ConsoleLogger(logLevel);
        } else {
          this.logger = new Utils_1.ConsoleLogger(logging);
        }
        return this;
      }
      withUrl(url, transportTypeOrOptions) {
        Utils_1.Arg.isRequired(url, "url");
        Utils_1.Arg.isNotEmpty(url, "url");
        this.url = url;
        if (typeof transportTypeOrOptions === "object") {
          this.httpConnectionOptions = { ...this.httpConnectionOptions, ...transportTypeOrOptions };
        } else {
          this.httpConnectionOptions = {
            ...this.httpConnectionOptions,
            transport: transportTypeOrOptions
          };
        }
        return this;
      }
      /** Configures the {@link @microsoft/signalr.HubConnection} to use the specified Hub Protocol.
       *
       * @param {IHubProtocol} protocol The {@link @microsoft/signalr.IHubProtocol} implementation to use.
       */
      withHubProtocol(protocol) {
        Utils_1.Arg.isRequired(protocol, "protocol");
        this.protocol = protocol;
        return this;
      }
      withAutomaticReconnect(retryDelaysOrReconnectPolicy) {
        if (this.reconnectPolicy) {
          throw new Error("A reconnectPolicy has already been set.");
        }
        if (!retryDelaysOrReconnectPolicy) {
          this.reconnectPolicy = new DefaultReconnectPolicy_1.DefaultReconnectPolicy();
        } else if (Array.isArray(retryDelaysOrReconnectPolicy)) {
          this.reconnectPolicy = new DefaultReconnectPolicy_1.DefaultReconnectPolicy(retryDelaysOrReconnectPolicy);
        } else {
          this.reconnectPolicy = retryDelaysOrReconnectPolicy;
        }
        return this;
      }
      /** Creates a {@link @microsoft/signalr.HubConnection} from the configuration options specified in this builder.
       *
       * @returns {HubConnection} The configured {@link @microsoft/signalr.HubConnection}.
       */
      build() {
        const httpConnectionOptions = this.httpConnectionOptions || {};
        if (httpConnectionOptions.logger === void 0) {
          httpConnectionOptions.logger = this.logger;
        }
        if (!this.url) {
          throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
        }
        const connection2 = new HttpConnection_1.HttpConnection(this.url, httpConnectionOptions);
        return HubConnection_1.HubConnection.create(connection2, this.logger || Loggers_1.NullLogger.instance, this.protocol || new JsonHubProtocol_1.JsonHubProtocol(), this.reconnectPolicy);
      }
    };
    exports.HubConnectionBuilder = HubConnectionBuilder;
    function isLogger(logger) {
      return logger.log !== void 0;
    }
  }
});

// node_modules/@microsoft/signalr/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/@microsoft/signalr/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VERSION = exports.Subject = exports.JsonHubProtocol = exports.NullLogger = exports.TransferFormat = exports.HttpTransportType = exports.LogLevel = exports.MessageType = exports.HubConnectionBuilder = exports.HubConnectionState = exports.HubConnection = exports.DefaultHttpClient = exports.HttpResponse = exports.HttpClient = exports.TimeoutError = exports.HttpError = exports.AbortError = void 0;
    var Errors_1 = require_Errors();
    Object.defineProperty(exports, "AbortError", { enumerable: true, get: function() {
      return Errors_1.AbortError;
    } });
    Object.defineProperty(exports, "HttpError", { enumerable: true, get: function() {
      return Errors_1.HttpError;
    } });
    Object.defineProperty(exports, "TimeoutError", { enumerable: true, get: function() {
      return Errors_1.TimeoutError;
    } });
    var HttpClient_1 = require_HttpClient();
    Object.defineProperty(exports, "HttpClient", { enumerable: true, get: function() {
      return HttpClient_1.HttpClient;
    } });
    Object.defineProperty(exports, "HttpResponse", { enumerable: true, get: function() {
      return HttpClient_1.HttpResponse;
    } });
    var DefaultHttpClient_1 = require_DefaultHttpClient();
    Object.defineProperty(exports, "DefaultHttpClient", { enumerable: true, get: function() {
      return DefaultHttpClient_1.DefaultHttpClient;
    } });
    var HubConnection_1 = require_HubConnection();
    Object.defineProperty(exports, "HubConnection", { enumerable: true, get: function() {
      return HubConnection_1.HubConnection;
    } });
    Object.defineProperty(exports, "HubConnectionState", { enumerable: true, get: function() {
      return HubConnection_1.HubConnectionState;
    } });
    var HubConnectionBuilder_1 = require_HubConnectionBuilder();
    Object.defineProperty(exports, "HubConnectionBuilder", { enumerable: true, get: function() {
      return HubConnectionBuilder_1.HubConnectionBuilder;
    } });
    var IHubProtocol_1 = require_IHubProtocol();
    Object.defineProperty(exports, "MessageType", { enumerable: true, get: function() {
      return IHubProtocol_1.MessageType;
    } });
    var ILogger_1 = require_ILogger();
    Object.defineProperty(exports, "LogLevel", { enumerable: true, get: function() {
      return ILogger_1.LogLevel;
    } });
    var ITransport_1 = require_ITransport();
    Object.defineProperty(exports, "HttpTransportType", { enumerable: true, get: function() {
      return ITransport_1.HttpTransportType;
    } });
    Object.defineProperty(exports, "TransferFormat", { enumerable: true, get: function() {
      return ITransport_1.TransferFormat;
    } });
    var Loggers_1 = require_Loggers();
    Object.defineProperty(exports, "NullLogger", { enumerable: true, get: function() {
      return Loggers_1.NullLogger;
    } });
    var JsonHubProtocol_1 = require_JsonHubProtocol();
    Object.defineProperty(exports, "JsonHubProtocol", { enumerable: true, get: function() {
      return JsonHubProtocol_1.JsonHubProtocol;
    } });
    var Subject_1 = require_Subject();
    Object.defineProperty(exports, "Subject", { enumerable: true, get: function() {
      return Subject_1.Subject;
    } });
    var Utils_1 = require_Utils();
    Object.defineProperty(exports, "VERSION", { enumerable: true, get: function() {
      return Utils_1.VERSION;
    } });
  }
});

// index.ts
var import_signalr = __toESM(require_cjs());
var connection = new import_signalr.default.HubConnectionBuilder().withUrl("/chat").build();
connection.on("send", (data) => {
  console.log(data);
});
connection.start().then(() => connection.invoke("send", "Hello"));
