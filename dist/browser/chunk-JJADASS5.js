import {
  ApOgHistoryDetailChickenComponent,
  ApOgHistoryDetailTopComponent,
  ApOgInputComponent,
  INPUT_TYPE_CONFIG,
  ORIGINAL_BOTTOM_PANEL_INPUT_TYPES,
  OgChickenDifficultyEnum,
  OgChickenGameStage
} from "./chunk-EESP2FZK.js";
import {
  ApIconChickenComponent
} from "./chunk-74H6U7EF.js";
import {
  ApUiTabGroupComponent
} from "./chunk-47SOIXJB.js";
import {
  ApInputBox
} from "./chunk-CYEAZPJ5.js";
import {
  ClickOutsideDirective,
  InfoCtrlService
} from "./chunk-S5BUS6WA.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-W2PA37WH.js";
import {
  ApHistoryCalenderComponent,
  ApHistoryListComponent,
  ApTabMenuTextComponent
} from "./chunk-WKKSI4JZ.js";
import {
  HistoryCtrlService
} from "./chunk-M7JP5DRR.js";
import {
  ApUiFramePageComponent,
  InfoTabGAMap
} from "./chunk-3FMKOJKK.js";
import {
  takeUntilDestroyed
} from "./chunk-COCIR4RJ.js";
import {
  AppI18nPipe
} from "./chunk-7GQKM4M3.js";
import {
  ApUiFramePopupComponent
} from "./chunk-HUKCMLYY.js";
import {
  PointerDownSoundDirective
} from "./chunk-JHJKX6RD.js";
import {
  ApToastComponent,
  MoneyTextPipe
} from "./chunk-U7TK2FIU.js";
import {
  GameIframeCtrlService,
  createApWebMessage
} from "./chunk-OW6577YR.js";
import {
  ApLoadingOverlayComponent
} from "./chunk-HM7QSC6E.js";
import {
  AppI18nService
} from "./chunk-EOSIRHLO.js";
import {
  ApButtonComponent
} from "./chunk-VX4L3GZI.js";
import {
  ApIconComponent
} from "./chunk-XOFMPJ7U.js";
import {
  AppInterfaceService,
  SpinRequest
} from "./chunk-TLQLKLDD.js";
import {
  LoggerService,
  MoneyText,
  calc,
  dec,
  decimal_default,
  require_new_proto,
  safeParse
} from "./chunk-CFCPEQLG.js";
import {
  ClientSessionService
} from "./chunk-54ITVL2G.js";
import {
  CommonModule,
  HttpClient,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-FH2ESRL7.js";
import {
  Component,
  DestroyRef,
  Injectable,
  Subject,
  __async,
  __commonJS,
  __require,
  __toESM,
  computed,
  debounceTime,
  delay,
  effect,
  inject,
  input,
  model,
  output,
  setClassMetadata,
  signal,
  timer,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-QGU3BS3L.js";

// (disabled):crypto
var require_crypto = __commonJS({
  "(disabled):crypto"() {
    "use strict";
  }
});

// node_modules/crypto-js/core.js
var require_core = __commonJS({
  "node_modules/crypto-js/core.js"(exports, module) {
    "use strict";
    (function(root, factory) {
      if (typeof exports === "object") {
        module.exports = exports = factory();
      } else if (typeof define === "function" && define.amd) {
        define([], factory);
      } else {
        root.CryptoJS = factory();
      }
    })(exports, function() {
      var CryptoJS2 = CryptoJS2 || function(Math2, undefined2) {
        var crypto;
        if (typeof window !== "undefined" && window.crypto) {
          crypto = window.crypto;
        }
        if (typeof self !== "undefined" && self.crypto) {
          crypto = self.crypto;
        }
        if (typeof globalThis !== "undefined" && globalThis.crypto) {
          crypto = globalThis.crypto;
        }
        if (!crypto && typeof window !== "undefined" && window.msCrypto) {
          crypto = window.msCrypto;
        }
        if (!crypto && typeof global !== "undefined" && global.crypto) {
          crypto = global.crypto;
        }
        if (!crypto && typeof __require === "function") {
          try {
            crypto = require_crypto();
          } catch (err) {
          }
        }
        var cryptoSecureRandomInt = function() {
          if (crypto) {
            if (typeof crypto.getRandomValues === "function") {
              try {
                return crypto.getRandomValues(new Uint32Array(1))[0];
              } catch (err) {
              }
            }
            if (typeof crypto.randomBytes === "function") {
              try {
                return crypto.randomBytes(4).readInt32LE();
              } catch (err) {
              }
            }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        };
        var create = Object.create || /* @__PURE__ */ function() {
          function F() {
          }
          return function(obj) {
            var subtype;
            F.prototype = obj;
            subtype = new F();
            F.prototype = null;
            return subtype;
          };
        }();
        var C = {};
        var C_lib = C.lib = {};
        var Base = C_lib.Base = /* @__PURE__ */ function() {
          return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function(overrides) {
              var subtype = create(this);
              if (overrides) {
                subtype.mixIn(overrides);
              }
              if (!subtype.hasOwnProperty("init") || this.init === subtype.init) {
                subtype.init = function() {
                  subtype.$super.init.apply(this, arguments);
                };
              }
              subtype.init.prototype = subtype;
              subtype.$super = this;
              return subtype;
            },
            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function() {
              var instance = this.extend();
              instance.init.apply(instance, arguments);
              return instance;
            },
            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function() {
            },
            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function(properties) {
              for (var propertyName in properties) {
                if (properties.hasOwnProperty(propertyName)) {
                  this[propertyName] = properties[propertyName];
                }
              }
              if (properties.hasOwnProperty("toString")) {
                this.toString = properties.toString;
              }
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }();
        var WordArray = C_lib.WordArray = Base.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of 32-bit words.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.create();
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
           */
          init: function(words, sigBytes) {
            words = this.words = words || [];
            if (sigBytes != undefined2) {
              this.sigBytes = sigBytes;
            } else {
              this.sigBytes = words.length * 4;
            }
          },
          /**
           * Converts this word array to a string.
           *
           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
           *
           * @return {string} The stringified word array.
           *
           * @example
           *
           *     var string = wordArray + '';
           *     var string = wordArray.toString();
           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
           */
          toString: function(encoder) {
            return (encoder || Hex).stringify(this);
          },
          /**
           * Concatenates a word array to this word array.
           *
           * @param {WordArray} wordArray The word array to append.
           *
           * @return {WordArray} This word array.
           *
           * @example
           *
           *     wordArray1.concat(wordArray2);
           */
          concat: function(wordArray) {
            var thisWords = this.words;
            var thatWords = wordArray.words;
            var thisSigBytes = this.sigBytes;
            var thatSigBytes = wordArray.sigBytes;
            this.clamp();
            if (thisSigBytes % 4) {
              for (var i = 0; i < thatSigBytes; i++) {
                var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
              }
            } else {
              for (var j = 0; j < thatSigBytes; j += 4) {
                thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
              }
            }
            this.sigBytes += thatSigBytes;
            return this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var words = this.words;
            var sigBytes = this.sigBytes;
            words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
            words.length = Math2.ceil(sigBytes / 4);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {WordArray} The clone.
           *
           * @example
           *
           *     var clone = wordArray.clone();
           */
          clone: function() {
            var clone = Base.clone.call(this);
            clone.words = this.words.slice(0);
            return clone;
          },
          /**
           * Creates a word array filled with random bytes.
           *
           * @param {number} nBytes The number of random bytes to generate.
           *
           * @return {WordArray} The random word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.random(16);
           */
          random: function(nBytes) {
            var words = [];
            for (var i = 0; i < nBytes; i += 4) {
              words.push(cryptoSecureRandomInt());
            }
            return new WordArray.init(words, nBytes);
          }
        });
        var C_enc = C.enc = {};
        var Hex = C_enc.Hex = {
          /**
           * Converts a word array to a hex string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The hex string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
           */
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var hexChars = [];
            for (var i = 0; i < sigBytes; i++) {
              var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              hexChars.push((bite >>> 4).toString(16));
              hexChars.push((bite & 15).toString(16));
            }
            return hexChars.join("");
          },
          /**
           * Converts a hex string to a word array.
           *
           * @param {string} hexStr The hex string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
           */
          parse: function(hexStr) {
            var hexStrLength = hexStr.length;
            var words = [];
            for (var i = 0; i < hexStrLength; i += 2) {
              words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
            }
            return new WordArray.init(words, hexStrLength / 2);
          }
        };
        var Latin1 = C_enc.Latin1 = {
          /**
           * Converts a word array to a Latin1 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Latin1 string.
           *
           * @static
           *
           * @example
           *
           *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
           */
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var latin1Chars = [];
            for (var i = 0; i < sigBytes; i++) {
              var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              latin1Chars.push(String.fromCharCode(bite));
            }
            return latin1Chars.join("");
          },
          /**
           * Converts a Latin1 string to a word array.
           *
           * @param {string} latin1Str The Latin1 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
           */
          parse: function(latin1Str) {
            var latin1StrLength = latin1Str.length;
            var words = [];
            for (var i = 0; i < latin1StrLength; i++) {
              words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
            }
            return new WordArray.init(words, latin1StrLength);
          }
        };
        var Utf8 = C_enc.Utf8 = {
          /**
           * Converts a word array to a UTF-8 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-8 string.
           *
           * @static
           *
           * @example
           *
           *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
           */
          stringify: function(wordArray) {
            try {
              return decodeURIComponent(escape(Latin1.stringify(wordArray)));
            } catch (e) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          /**
           * Converts a UTF-8 string to a word array.
           *
           * @param {string} utf8Str The UTF-8 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
           */
          parse: function(utf8Str) {
            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
          }
        };
        var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new WordArray.init();
            this._nDataBytes = 0;
          },
          /**
           * Adds new data to this block algorithm's buffer.
           *
           * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
           *
           * @example
           *
           *     bufferedBlockAlgorithm._append('data');
           *     bufferedBlockAlgorithm._append(wordArray);
           */
          _append: function(data) {
            if (typeof data == "string") {
              data = Utf8.parse(data);
            }
            this._data.concat(data);
            this._nDataBytes += data.sigBytes;
          },
          /**
           * Processes available data blocks.
           *
           * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
           *
           * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
           *
           * @return {WordArray} The processed data.
           *
           * @example
           *
           *     var processedData = bufferedBlockAlgorithm._process();
           *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
           */
          _process: function(doFlush) {
            var processedWords;
            var data = this._data;
            var dataWords = data.words;
            var dataSigBytes = data.sigBytes;
            var blockSize = this.blockSize;
            var blockSizeBytes = blockSize * 4;
            var nBlocksReady = dataSigBytes / blockSizeBytes;
            if (doFlush) {
              nBlocksReady = Math2.ceil(nBlocksReady);
            } else {
              nBlocksReady = Math2.max((nBlocksReady | 0) - this._minBufferSize, 0);
            }
            var nWordsReady = nBlocksReady * blockSize;
            var nBytesReady = Math2.min(nWordsReady * 4, dataSigBytes);
            if (nWordsReady) {
              for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                this._doProcessBlock(dataWords, offset);
              }
              processedWords = dataWords.splice(0, nWordsReady);
              data.sigBytes -= nBytesReady;
            }
            return new WordArray.init(processedWords, nBytesReady);
          },
          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = bufferedBlockAlgorithm.clone();
           */
          clone: function() {
            var clone = Base.clone.call(this);
            clone._data = this._data.clone();
            return clone;
          },
          _minBufferSize: 0
        });
        var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
          /**
           * Configuration options.
           */
          cfg: Base.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(cfg) {
            this.cfg = this.cfg.extend(cfg);
            this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            BufferedBlockAlgorithm.reset.call(this);
            this._doReset();
          },
          /**
           * Updates this hasher with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {Hasher} This hasher.
           *
           * @example
           *
           *     hasher.update('message');
           *     hasher.update(wordArray);
           */
          update: function(messageUpdate) {
            this._append(messageUpdate);
            this._process();
            return this;
          },
          /**
           * Finalizes the hash computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The hash.
           *
           * @example
           *
           *     var hash = hasher.finalize();
           *     var hash = hasher.finalize('message');
           *     var hash = hasher.finalize(wordArray);
           */
          finalize: function(messageUpdate) {
            if (messageUpdate) {
              this._append(messageUpdate);
            }
            var hash = this._doFinalize();
            return hash;
          },
          blockSize: 512 / 32,
          /**
           * Creates a shortcut function to a hasher's object interface.
           *
           * @param {Hasher} hasher The hasher to create a helper for.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
           */
          _createHelper: function(hasher) {
            return function(message, cfg) {
              return new hasher.init(cfg).finalize(message);
            };
          },
          /**
           * Creates a shortcut function to the HMAC's object interface.
           *
           * @param {Hasher} hasher The hasher to use in this HMAC helper.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
           */
          _createHmacHelper: function(hasher) {
            return function(message, key) {
              return new C_algo.HMAC.init(hasher, key).finalize(message);
            };
          }
        });
        var C_algo = C.algo = {};
        return C;
      }(Math);
      return CryptoJS2;
    });
  }
});

// node_modules/crypto-js/x64-core.js
var require_x64_core = __commonJS({
  "node_modules/crypto-js/x64-core.js"(exports, module) {
    "use strict";
    (function(root, factory) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      (function(undefined2) {
        var C = CryptoJS2;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var X32WordArray = C_lib.WordArray;
        var C_x64 = C.x64 = {};
        var X64Word = C_x64.Word = Base.extend({
          /**
           * Initializes a newly created 64-bit word.
           *
           * @param {number} high The high 32 bits.
           * @param {number} low The low 32 bits.
           *
           * @example
           *
           *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
           */
          init: function(high, low) {
            this.high = high;
            this.low = low;
          }
          /**
           * Bitwise NOTs this word.
           *
           * @return {X64Word} A new x64-Word object after negating.
           *
           * @example
           *
           *     var negated = x64Word.not();
           */
          // not: function () {
          // var high = ~this.high;
          // var low = ~this.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ANDs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to AND with this word.
           *
           * @return {X64Word} A new x64-Word object after ANDing.
           *
           * @example
           *
           *     var anded = x64Word.and(anotherX64Word);
           */
          // and: function (word) {
          // var high = this.high & word.high;
          // var low = this.low & word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to OR with this word.
           *
           * @return {X64Word} A new x64-Word object after ORing.
           *
           * @example
           *
           *     var ored = x64Word.or(anotherX64Word);
           */
          // or: function (word) {
          // var high = this.high | word.high;
          // var low = this.low | word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise XORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to XOR with this word.
           *
           * @return {X64Word} A new x64-Word object after XORing.
           *
           * @example
           *
           *     var xored = x64Word.xor(anotherX64Word);
           */
          // xor: function (word) {
          // var high = this.high ^ word.high;
          // var low = this.low ^ word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the left.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftL(25);
           */
          // shiftL: function (n) {
          // if (n < 32) {
          // var high = (this.high << n) | (this.low >>> (32 - n));
          // var low = this.low << n;
          // } else {
          // var high = this.low << (n - 32);
          // var low = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the right.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftR(7);
           */
          // shiftR: function (n) {
          // if (n < 32) {
          // var low = (this.low >>> n) | (this.high << (32 - n));
          // var high = this.high >>> n;
          // } else {
          // var low = this.high >>> (n - 32);
          // var high = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Rotates this word n bits to the left.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotL(25);
           */
          // rotL: function (n) {
          // return this.shiftL(n).or(this.shiftR(64 - n));
          // },
          /**
           * Rotates this word n bits to the right.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotR(7);
           */
          // rotR: function (n) {
          // return this.shiftR(n).or(this.shiftL(64 - n));
          // },
          /**
           * Adds this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to add with this word.
           *
           * @return {X64Word} A new x64-Word object after adding.
           *
           * @example
           *
           *     var added = x64Word.add(anotherX64Word);
           */
          // add: function (word) {
          // var low = (this.low + word.low) | 0;
          // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
          // var high = (this.high + word.high + carry) | 0;
          // return X64Word.create(high, low);
          // }
        });
        var X64WordArray = C_x64.WordArray = Base.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.x64.WordArray.create();
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ]);
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ], 10);
           */
          init: function(words, sigBytes) {
            words = this.words = words || [];
            if (sigBytes != undefined2) {
              this.sigBytes = sigBytes;
            } else {
              this.sigBytes = words.length * 8;
            }
          },
          /**
           * Converts this 64-bit word array to a 32-bit word array.
           *
           * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
           *
           * @example
           *
           *     var x32WordArray = x64WordArray.toX32();
           */
          toX32: function() {
            var x64Words = this.words;
            var x64WordsLength = x64Words.length;
            var x32Words = [];
            for (var i = 0; i < x64WordsLength; i++) {
              var x64Word = x64Words[i];
              x32Words.push(x64Word.high);
              x32Words.push(x64Word.low);
            }
            return X32WordArray.create(x32Words, this.sigBytes);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {X64WordArray} The clone.
           *
           * @example
           *
           *     var clone = x64WordArray.clone();
           */
          clone: function() {
            var clone = Base.clone.call(this);
            var words = clone.words = this.words.slice(0);
            var wordsLength = words.length;
            for (var i = 0; i < wordsLength; i++) {
              words[i] = words[i].clone();
            }
            return clone;
          }
        });
      })();
      return CryptoJS2;
    });
  }
});

// node_modules/crypto-js/lib-typedarrays.js
var require_lib_typedarrays = __commonJS({
  "node_modules/crypto-js/lib-typedarrays.js"(exports, module) {
    "use strict";
    (function(root, factory) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      (function() {
        if (typeof ArrayBuffer != "function") {
          return;
        }
        var C = CryptoJS2;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var superInit = WordArray.init;
        var subInit = WordArray.init = function(typedArray) {
          if (typedArray instanceof ArrayBuffer) {
            typedArray = new Uint8Array(typedArray);
          }
          if (typedArray instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray || typedArray instanceof Int16Array || typedArray instanceof Uint16Array || typedArray instanceof Int32Array || typedArray instanceof Uint32Array || typedArray instanceof Float32Array || typedArray instanceof Float64Array) {
            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
          }
          if (typedArray instanceof Uint8Array) {
            var typedArrayByteLength = typedArray.byteLength;
            var words = [];
            for (var i = 0; i < typedArrayByteLength; i++) {
              words[i >>> 2] |= typedArray[i] << 24 - i % 4 * 8;
            }
            superInit.call(this, words, typedArrayByteLength);
          } else {
            superInit.apply(this, arguments);
          }
        };
        subInit.prototype = WordArray;
      })();
      return CryptoJS2.lib.WordArray;
    });
  }
});

// node_modules/crypto-js/enc-utf16.js
var require_enc_utf16 = __commonJS({
  "node_modules/crypto-js/enc-utf16.js"(exports, module) {
    "use strict";
    (function(root, factory) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      (function() {
        var C = CryptoJS2;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
          /**
           * Converts a word array to a UTF-16 BE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 BE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
           */
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var utf16Chars = [];
            for (var i = 0; i < sigBytes; i += 2) {
              var codePoint = words[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
              utf16Chars.push(String.fromCharCode(codePoint));
            }
            return utf16Chars.join("");
          },
          /**
           * Converts a UTF-16 BE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 BE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
           */
          parse: function(utf16Str) {
            var utf16StrLength = utf16Str.length;
            var words = [];
            for (var i = 0; i < utf16StrLength; i++) {
              words[i >>> 1] |= utf16Str.charCodeAt(i) << 16 - i % 2 * 16;
            }
            return WordArray.create(words, utf16StrLength * 2);
          }
        };
        C_enc.Utf16LE = {
          /**
           * Converts a word array to a UTF-16 LE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 LE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
           */
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var utf16Chars = [];
            for (var i = 0; i < sigBytes; i += 2) {
              var codePoint = swapEndian(words[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
              utf16Chars.push(String.fromCharCode(codePoint));
            }
            return utf16Chars.join("");
          },
          /**
           * Converts a UTF-16 LE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 LE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
           */
          parse: function(utf16Str) {
            var utf16StrLength = utf16Str.length;
            var words = [];
            for (var i = 0; i < utf16StrLength; i++) {
              words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << 16 - i % 2 * 16);
            }
            return WordArray.create(words, utf16StrLength * 2);
          }
        };
        function swapEndian(word) {
          return word << 8 & 4278255360 | word >>> 8 & 16711935;
        }
      })();
      return CryptoJS2.enc.Utf16;
    });
  }
});

// node_modules/crypto-js/enc-base64.js
var require_enc_base64 = __commonJS({
  "node_modules/crypto-js/enc-base64.js"(exports, module) {
    "use strict";
    (function(root, factory) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      (function() {
        var C = CryptoJS2;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        var Base64 = C_enc.Base64 = {
          /**
           * Converts a word array to a Base64 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Base64 string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
           */
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var map = this._map;
            wordArray.clamp();
            var base64Chars = [];
            for (var i = 0; i < sigBytes; i += 3) {
              var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
              var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
              var triplet = byte1 << 16 | byte2 << 8 | byte3;
              for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
                base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 63));
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              while (base64Chars.length % 4) {
                base64Chars.push(paddingChar);
              }
            }
            return base64Chars.join("");
          },
          /**
           * Converts a Base64 string to a word array.
           *
           * @param {string} base64Str The Base64 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
           */
          parse: function(base64Str) {
            var base64StrLength = base64Str.length;
            var map = this._map;
            var reverseMap = this._reverseMap;
            if (!reverseMap) {
              reverseMap = this._reverseMap = [];
              for (var j = 0; j < map.length; j++) {
                reverseMap[map.charCodeAt(j)] = j;
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              var paddingIndex = base64Str.indexOf(paddingChar);
              if (paddingIndex !== -1) {
                base64StrLength = paddingIndex;
              }
            }
            return parseLoop(base64Str, base64StrLength, reverseMap);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function parseLoop(base64Str, base64StrLength, reverseMap) {
          var words = [];
          var nBytes = 0;
          for (var i = 0; i < base64StrLength; i++) {
            if (i % 4) {
              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
              var bitsCombined = bits1 | bits2;
              words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
              nBytes++;
            }
          }
          return WordArray.create(words, nBytes);
        }
      })();
      return CryptoJS2.enc.Base64;
    });
  }
});

// node_modules/crypto-js/enc-base64url.js
var require_enc_base64url = __commonJS({
  "node_modules/crypto-js/enc-base64url.js"(exports, module) {
    "use strict";
    (function(root, factory) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      (function() {
        var C = CryptoJS2;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        var Base64url = C_enc.Base64url = {
          /**
           * Converts a word array to a Base64url string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {string} The Base64url string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
           */
          stringify: function(wordArray, urlSafe) {
            if (urlSafe === void 0) {
              urlSafe = true;
            }
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var map = urlSafe ? this._safe_map : this._map;
            wordArray.clamp();
            var base64Chars = [];
            for (var i = 0; i < sigBytes; i += 3) {
              var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
              var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
              var triplet = byte1 << 16 | byte2 << 8 | byte3;
              for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
                base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 63));
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              while (base64Chars.length % 4) {
                base64Chars.push(paddingChar);
              }
            }
            return base64Chars.join("");
          },
          /**
           * Converts a Base64url string to a word array.
           *
           * @param {string} base64Str The Base64url string.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
           */
          parse: function(base64Str, urlSafe) {
            if (urlSafe === void 0) {
              urlSafe = true;
            }
            var base64StrLength = base64Str.length;
            var map = urlSafe ? this._safe_map : this._map;
            var reverseMap = this._reverseMap;
            if (!reverseMap) {
              reverseMap = this._reverseMap = [];
              for (var j = 0; j < map.length; j++) {
                reverseMap[map.charCodeAt(j)] = j;
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              var paddingIndex = base64Str.indexOf(paddingChar);
              if (paddingIndex !== -1) {
                base64StrLength = paddingIndex;
              }
            }
            return parseLoop(base64Str, base64StrLength, reverseMap);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function parseLoop(base64Str, base64StrLength, reverseMap) {
          var words = [];
          var nBytes = 0;
          for (var i = 0; i < base64StrLength; i++) {
            if (i % 4) {
              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
              var bitsCombined = bits1 | bits2;
              words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
              nBytes++;
            }
          }
          return WordArray.create(words, nBytes);
        }
      })();
      return CryptoJS2.enc.Base64url;
    });
  }
});

// node_modules/crypto-js/md5.js
var require_md5 = __commonJS({
  "node_modules/crypto-js/md5.js"(exports, module) {
    "use strict";
    (function(root, factory) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      (function(Math2) {
        var C = CryptoJS2;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var T = [];
        (function() {
          for (var i = 0; i < 64; i++) {
            T[i] = Math2.abs(Math2.sin(i + 1)) * 4294967296 | 0;
          }
        })();
        var MD5 = C_algo.MD5 = Hasher.extend({
          _doReset: function() {
            this._hash = new WordArray.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(M, offset) {
            for (var i = 0; i < 16; i++) {
              var offset_i = offset + i;
              var M_offset_i = M[offset_i];
              M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
            }
            var H = this._hash.words;
            var M_offset_0 = M[offset + 0];
            var M_offset_1 = M[offset + 1];
            var M_offset_2 = M[offset + 2];
            var M_offset_3 = M[offset + 3];
            var M_offset_4 = M[offset + 4];
            var M_offset_5 = M[offset + 5];
            var M_offset_6 = M[offset + 6];
            var M_offset_7 = M[offset + 7];
            var M_offset_8 = M[offset + 8];
            var M_offset_9 = M[offset + 9];
            var M_offset_10 = M[offset + 10];
            var M_offset_11 = M[offset + 11];
            var M_offset_12 = M[offset + 12];
            var M_offset_13 = M[offset + 13];
            var M_offset_14 = M[offset + 14];
            var M_offset_15 = M[offset + 15];
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            a = FF(a, b, c, d, M_offset_0, 7, T[0]);
            d = FF(d, a, b, c, M_offset_1, 12, T[1]);
            c = FF(c, d, a, b, M_offset_2, 17, T[2]);
            b = FF(b, c, d, a, M_offset_3, 22, T[3]);
            a = FF(a, b, c, d, M_offset_4, 7, T[4]);
            d = FF(d, a, b, c, M_offset_5, 12, T[5]);
            c = FF(c, d, a, b, M_offset_6, 17, T[6]);
            b = FF(b, c, d, a, M_offset_7, 22, T[7]);
            a = FF(a, b, c, d, M_offset_8, 7, T[8]);
            d = FF(d, a, b, c, M_offset_9, 12, T[9]);
            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
            a = FF(a, b, c, d, M_offset_12, 7, T[12]);
            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
            b = FF(b, c, d, a, M_offset_15, 22, T[15]);
            a = GG(a, b, c, d, M_offset_1, 5, T[16]);
            d = GG(d, a, b, c, M_offset_6, 9, T[17]);
            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
            b = GG(b, c, d, a, M_offset_0, 20, T[19]);
            a = GG(a, b, c, d, M_offset_5, 5, T[20]);
            d = GG(d, a, b, c, M_offset_10, 9, T[21]);
            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
            b = GG(b, c, d, a, M_offset_4, 20, T[23]);
            a = GG(a, b, c, d, M_offset_9, 5, T[24]);
            d = GG(d, a, b, c, M_offset_14, 9, T[25]);
            c = GG(c, d, a, b, M_offset_3, 14, T[26]);
            b = GG(b, c, d, a, M_offset_8, 20, T[27]);
            a = GG(a, b, c, d, M_offset_13, 5, T[28]);
            d = GG(d, a, b, c, M_offset_2, 9, T[29]);
            c = GG(c, d, a, b, M_offset_7, 14, T[30]);
            b = GG(b, c, d, a, M_offset_12, 20, T[31]);
            a = HH(a, b, c, d, M_offset_5, 4, T[32]);
            d = HH(d, a, b, c, M_offset_8, 11, T[33]);
            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
            a = HH(a, b, c, d, M_offset_1, 4, T[36]);
            d = HH(d, a, b, c, M_offset_4, 11, T[37]);
            c = HH(c, d, a, b, M_offset_7, 16, T[38]);
            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
            a = HH(a, b, c, d, M_offset_13, 4, T[40]);
            d = HH(d, a, b, c, M_offset_0, 11, T[41]);
            c = HH(c, d, a, b, M_offset_3, 16, T[42]);
            b = HH(b, c, d, a, M_offset_6, 23, T[43]);
            a = HH(a, b, c, d, M_offset_9, 4, T[44]);
            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
            b = HH(b, c, d, a, M_offset_2, 23, T[47]);
            a = II(a, b, c, d, M_offset_0, 6, T[48]);
            d = II(d, a, b, c, M_offset_7, 10, T[49]);
            c = II(c, d, a, b, M_offset_14, 15, T[50]);
            b = II(b, c, d, a, M_offset_5, 21, T[51]);
            a = II(a, b, c, d, M_offset_12, 6, T[52]);
            d = II(d, a, b, c, M_offset_3, 10, T[53]);
            c = II(c, d, a, b, M_offset_10, 15, T[54]);
            b = II(b, c, d, a, M_offset_1, 21, T[55]);
            a = II(a, b, c, d, M_offset_8, 6, T[56]);
            d = II(d, a, b, c, M_offset_15, 10, T[57]);
            c = II(c, d, a, b, M_offset_6, 15, T[58]);
            b = II(b, c, d, a, M_offset_13, 21, T[59]);
            a = II(a, b, c, d, M_offset_4, 6, T[60]);
            d = II(d, a, b, c, M_offset_11, 10, T[61]);
            c = II(c, d, a, b, M_offset_2, 15, T[62]);
            b = II(b, c, d, a, M_offset_9, 21, T[63]);
            H[0] = H[0] + a | 0;
            H[1] = H[1] + b | 0;
            H[2] = H[2] + c | 0;
            H[3] = H[3] + d | 0;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            var nBitsTotalH = Math2.floor(nBitsTotal / 4294967296);
            var nBitsTotalL = nBitsTotal;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 16711935 | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 4278255360;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 16711935 | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 4278255360;
            data.sigBytes = (dataWords.length + 1) * 4;
            this._process();
            var hash = this._hash;
            var H = hash.words;
            for (var i = 0; i < 4; i++) {
              var H_i = H[i];
              H[i] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
            }
            return hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        function FF(a, b, c, d, x, s, t) {
          var n = a + (b & c | ~b & d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function GG(a, b, c, d, x, s, t) {
          var n = a + (b & d | c & ~d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function HH(a, b, c, d, x, s, t) {
          var n = a + (b ^ c ^ d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function II(a, b, c, d, x, s, t) {
          var n = a + (c ^ (b | ~d)) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        C.MD5 = Hasher._createHelper(MD5);
        C.HmacMD5 = Hasher._createHmacHelper(MD5);
      })(Math);
      return CryptoJS2.MD5;
    });
  }
});

// node_modules/crypto-js/sha1.js
var require_sha1 = __commonJS({
  "node_modules/crypto-js/sha1.js"(exports, module) {
    "use strict";
    (function(root, factory) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      (function() {
        var C = CryptoJS2;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var W = [];
        var SHA1 = C_algo.SHA1 = Hasher.extend({
          _doReset: function() {
            this._hash = new WordArray.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(M, offset) {
            var H = this._hash.words;
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            var e = H[4];
            for (var i = 0; i < 80; i++) {
              if (i < 16) {
                W[i] = M[offset + i] | 0;
              } else {
                var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
                W[i] = n << 1 | n >>> 31;
              }
              var t = (a << 5 | a >>> 27) + e + W[i];
              if (i < 20) {
                t += (b & c | ~b & d) + 1518500249;
              } else if (i < 40) {
                t += (b ^ c ^ d) + 1859775393;
              } else if (i < 60) {
                t += (b & c | b & d | c & d) - 1894007588;
              } else {
                t += (b ^ c ^ d) - 899497514;
              }
              e = d;
              d = c;
              c = b << 30 | b >>> 2;
              b = a;
              a = t;
            }
            H[0] = H[0] + a | 0;
            H[1] = H[1] + b | 0;
            H[2] = H[2] + c | 0;
            H[3] = H[3] + d | 0;
            H[4] = H[4] + e | 0;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 4294967296);
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;
            this._process();
            return this._hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        C.SHA1 = Hasher._createHelper(SHA1);
        C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
      })();
      return CryptoJS2.SHA1;
    });
  }
});

// node_modules/crypto-js/sha256.js
var require_sha256 = __commonJS({
  "node_modules/crypto-js/sha256.js"(exports, module) {
    "use strict";
    (function(root, factory) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      (function(Math2) {
        var C = CryptoJS2;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var H = [];
        var K = [];
        (function() {
          function isPrime(n2) {
            var sqrtN = Math2.sqrt(n2);
            for (var factor = 2; factor <= sqrtN; factor++) {
              if (!(n2 % factor)) {
                return false;
              }
            }
            return true;
          }
          function getFractionalBits(n2) {
            return (n2 - (n2 | 0)) * 4294967296 | 0;
          }
          var n = 2;
          var nPrime = 0;
          while (nPrime < 64) {
            if (isPrime(n)) {
              if (nPrime < 8) {
                H[nPrime] = getFractionalBits(Math2.pow(n, 1 / 2));
              }
              K[nPrime] = getFractionalBits(Math2.pow(n, 1 / 3));
              nPrime++;
            }
            n++;
          }
        })();
        var W = [];
        var SHA256 = C_algo.SHA256 = Hasher.extend({
          _doReset: function() {
            this._hash = new WordArray.init(H.slice(0));
          },
          _doProcessBlock: function(M, offset) {
            var H2 = this._hash.words;
            var a = H2[0];
            var b = H2[1];
            var c = H2[2];
            var d = H2[3];
            var e = H2[4];
            var f = H2[5];
            var g = H2[6];
            var h = H2[7];
            for (var i = 0; i < 64; i++) {
              if (i < 16) {
                W[i] = M[offset + i] | 0;
              } else {
                var gamma0x = W[i - 15];
                var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
                var gamma1x = W[i - 2];
                var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
                W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
              }
              var ch = e & f ^ ~e & g;
              var maj = a & b ^ a & c ^ b & c;
              var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
              var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
              var t1 = h + sigma1 + ch + K[i] + W[i];
              var t2 = sigma0 + maj;
              h = g;
              g = f;
              f = e;
              e = d + t1 | 0;
              d = c;
              c = b;
              b = a;
              a = t1 + t2 | 0;
            }
            H2[0] = H2[0] + a | 0;
            H2[1] = H2[1] + b | 0;
            H2[2] = H2[2] + c | 0;
            H2[3] = H2[3] + d | 0;
            H2[4] = H2[4] + e | 0;
            H2[5] = H2[5] + f | 0;
            H2[6] = H2[6] + g | 0;
            H2[7] = H2[7] + h | 0;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math2.floor(nBitsTotal / 4294967296);
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;
            this._process();
            return this._hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        C.SHA256 = Hasher._createHelper(SHA256);
        C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
      })(Math);
      return CryptoJS2.SHA256;
    });
  }
});

// node_modules/crypto-js/sha224.js
var require_sha224 = __commonJS({
  "node_modules/crypto-js/sha224.js"(exports, module) {
    "use strict";
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core(), require_sha256());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./sha256"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      (function() {
        var C = CryptoJS2;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var SHA256 = C_algo.SHA256;
        var SHA224 = C_algo.SHA224 = SHA256.extend({
          _doReset: function() {
            this._hash = new WordArray.init([
              3238371032,
              914150663,
              812702999,
              4144912697,
              4290775857,
              1750603025,
              1694076839,
              3204075428
            ]);
          },
          _doFinalize: function() {
            var hash = SHA256._doFinalize.call(this);
            hash.sigBytes -= 4;
            return hash;
          }
        });
        C.SHA224 = SHA256._createHelper(SHA224);
        C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
      })();
      return CryptoJS2.SHA224;
    });
  }
});

// node_modules/crypto-js/sha512.js
var require_sha512 = __commonJS({
  "node_modules/crypto-js/sha512.js"(exports, module) {
    "use strict";
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core(), require_x64_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./x64-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      (function() {
        var C = CryptoJS2;
        var C_lib = C.lib;
        var Hasher = C_lib.Hasher;
        var C_x64 = C.x64;
        var X64Word = C_x64.Word;
        var X64WordArray = C_x64.WordArray;
        var C_algo = C.algo;
        function X64Word_create() {
          return X64Word.create.apply(X64Word, arguments);
        }
        var K = [
          X64Word_create(1116352408, 3609767458),
          X64Word_create(1899447441, 602891725),
          X64Word_create(3049323471, 3964484399),
          X64Word_create(3921009573, 2173295548),
          X64Word_create(961987163, 4081628472),
          X64Word_create(1508970993, 3053834265),
          X64Word_create(2453635748, 2937671579),
          X64Word_create(2870763221, 3664609560),
          X64Word_create(3624381080, 2734883394),
          X64Word_create(310598401, 1164996542),
          X64Word_create(607225278, 1323610764),
          X64Word_create(1426881987, 3590304994),
          X64Word_create(1925078388, 4068182383),
          X64Word_create(2162078206, 991336113),
          X64Word_create(2614888103, 633803317),
          X64Word_create(3248222580, 3479774868),
          X64Word_create(3835390401, 2666613458),
          X64Word_create(4022224774, 944711139),
          X64Word_create(264347078, 2341262773),
          X64Word_create(604807628, 2007800933),
          X64Word_create(770255983, 1495990901),
          X64Word_create(1249150122, 1856431235),
          X64Word_create(1555081692, 3175218132),
          X64Word_create(1996064986, 2198950837),
          X64Word_create(2554220882, 3999719339),
          X64Word_create(2821834349, 766784016),
          X64Word_create(2952996808, 2566594879),
          X64Word_create(3210313671, 3203337956),
          X64Word_create(3336571891, 1034457026),
          X64Word_create(3584528711, 2466948901),
          X64Word_create(113926993, 3758326383),
          X64Word_create(338241895, 168717936),
          X64Word_create(666307205, 1188179964),
          X64Word_create(773529912, 1546045734),
          X64Word_create(1294757372, 1522805485),
          X64Word_create(1396182291, 2643833823),
          X64Word_create(1695183700, 2343527390),
          X64Word_create(1986661051, 1014477480),
          X64Word_create(2177026350, 1206759142),
          X64Word_create(2456956037, 344077627),
          X64Word_create(2730485921, 1290863460),
          X64Word_create(2820302411, 3158454273),
          X64Word_create(3259730800, 3505952657),
          X64Word_create(3345764771, 106217008),
          X64Word_create(3516065817, 3606008344),
          X64Word_create(3600352804, 1432725776),
          X64Word_create(4094571909, 1467031594),
          X64Word_create(275423344, 851169720),
          X64Word_create(430227734, 3100823752),
          X64Word_create(506948616, 1363258195),
          X64Word_create(659060556, 3750685593),
          X64Word_create(883997877, 3785050280),
          X64Word_create(958139571, 3318307427),
          X64Word_create(1322822218, 3812723403),
          X64Word_create(1537002063, 2003034995),
          X64Word_create(1747873779, 3602036899),
          X64Word_create(1955562222, 1575990012),
          X64Word_create(2024104815, 1125592928),
          X64Word_create(2227730452, 2716904306),
          X64Word_create(2361852424, 442776044),
          X64Word_create(2428436474, 593698344),
          X64Word_create(2756734187, 3733110249),
          X64Word_create(3204031479, 2999351573),
          X64Word_create(3329325298, 3815920427),
          X64Word_create(3391569614, 3928383900),
          X64Word_create(3515267271, 566280711),
          X64Word_create(3940187606, 3454069534),
          X64Word_create(4118630271, 4000239992),
          X64Word_create(116418474, 1914138554),
          X64Word_create(174292421, 2731055270),
          X64Word_create(289380356, 3203993006),
          X64Word_create(460393269, 320620315),
          X64Word_create(685471733, 587496836),
          X64Word_create(852142971, 1086792851),
          X64Word_create(1017036298, 365543100),
          X64Word_create(1126000580, 2618297676),
          X64Word_create(1288033470, 3409855158),
          X64Word_create(1501505948, 4234509866),
          X64Word_create(1607167915, 987167468),
          X64Word_create(1816402316, 1246189591)
        ];
        var W = [];
        (function() {
          for (var i = 0; i < 80; i++) {
            W[i] = X64Word_create();
          }
        })();
        var SHA512 = C_algo.SHA512 = Hasher.extend({
          _doReset: function() {
            this._hash = new X64WordArray.init([
              new X64Word.init(1779033703, 4089235720),
              new X64Word.init(3144134277, 2227873595),
              new X64Word.init(1013904242, 4271175723),
              new X64Word.init(2773480762, 1595750129),
              new X64Word.init(1359893119, 2917565137),
              new X64Word.init(2600822924, 725511199),
              new X64Word.init(528734635, 4215389547),
              new X64Word.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(M, offset) {
            var H = this._hash.words;
            var H0 = H[0];
            var H1 = H[1];
            var H2 = H[2];
            var H3 = H[3];
            var H4 = H[4];
            var H5 = H[5];
            var H6 = H[6];
            var H7 = H[7];
            var H0h = H0.high;
            var H0l = H0.low;
            var H1h = H1.high;
            var H1l = H1.low;
            var H2h = H2.high;
            var H2l = H2.low;
            var H3h = H3.high;
            var H3l = H3.low;
            var H4h = H4.high;
            var H4l = H4.low;
            var H5h = H5.high;
            var H5l = H5.low;
            var H6h = H6.high;
            var H6l = H6.low;
            var H7h = H7.high;
            var H7l = H7.low;
            var ah = H0h;
            var al = H0l;
            var bh = H1h;
            var bl = H1l;
            var ch = H2h;
            var cl = H2l;
            var dh = H3h;
            var dl = H3l;
            var eh = H4h;
            var el = H4l;
            var fh = H5h;
            var fl = H5l;
            var gh = H6h;
            var gl = H6l;
            var hh = H7h;
            var hl = H7l;
            for (var i = 0; i < 80; i++) {
              var Wil;
              var Wih;
              var Wi = W[i];
              if (i < 16) {
                Wih = Wi.high = M[offset + i * 2] | 0;
                Wil = Wi.low = M[offset + i * 2 + 1] | 0;
              } else {
                var gamma0x = W[i - 15];
                var gamma0xh = gamma0x.high;
                var gamma0xl = gamma0x.low;
                var gamma0h = (gamma0xh >>> 1 | gamma0xl << 31) ^ (gamma0xh >>> 8 | gamma0xl << 24) ^ gamma0xh >>> 7;
                var gamma0l = (gamma0xl >>> 1 | gamma0xh << 31) ^ (gamma0xl >>> 8 | gamma0xh << 24) ^ (gamma0xl >>> 7 | gamma0xh << 25);
                var gamma1x = W[i - 2];
                var gamma1xh = gamma1x.high;
                var gamma1xl = gamma1x.low;
                var gamma1h = (gamma1xh >>> 19 | gamma1xl << 13) ^ (gamma1xh << 3 | gamma1xl >>> 29) ^ gamma1xh >>> 6;
                var gamma1l = (gamma1xl >>> 19 | gamma1xh << 13) ^ (gamma1xl << 3 | gamma1xh >>> 29) ^ (gamma1xl >>> 6 | gamma1xh << 26);
                var Wi7 = W[i - 7];
                var Wi7h = Wi7.high;
                var Wi7l = Wi7.low;
                var Wi16 = W[i - 16];
                var Wi16h = Wi16.high;
                var Wi16l = Wi16.low;
                Wil = gamma0l + Wi7l;
                Wih = gamma0h + Wi7h + (Wil >>> 0 < gamma0l >>> 0 ? 1 : 0);
                Wil = Wil + gamma1l;
                Wih = Wih + gamma1h + (Wil >>> 0 < gamma1l >>> 0 ? 1 : 0);
                Wil = Wil + Wi16l;
                Wih = Wih + Wi16h + (Wil >>> 0 < Wi16l >>> 0 ? 1 : 0);
                Wi.high = Wih;
                Wi.low = Wil;
              }
              var chh = eh & fh ^ ~eh & gh;
              var chl = el & fl ^ ~el & gl;
              var majh = ah & bh ^ ah & ch ^ bh & ch;
              var majl = al & bl ^ al & cl ^ bl & cl;
              var sigma0h = (ah >>> 28 | al << 4) ^ (ah << 30 | al >>> 2) ^ (ah << 25 | al >>> 7);
              var sigma0l = (al >>> 28 | ah << 4) ^ (al << 30 | ah >>> 2) ^ (al << 25 | ah >>> 7);
              var sigma1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (eh << 23 | el >>> 9);
              var sigma1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (el << 23 | eh >>> 9);
              var Ki = K[i];
              var Kih = Ki.high;
              var Kil = Ki.low;
              var t1l = hl + sigma1l;
              var t1h = hh + sigma1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);
              var t1l = t1l + chl;
              var t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);
              var t1l = t1l + Kil;
              var t1h = t1h + Kih + (t1l >>> 0 < Kil >>> 0 ? 1 : 0);
              var t1l = t1l + Wil;
              var t1h = t1h + Wih + (t1l >>> 0 < Wil >>> 0 ? 1 : 0);
              var t2l = sigma0l + majl;
              var t2h = sigma0h + majh + (t2l >>> 0 < sigma0l >>> 0 ? 1 : 0);
              hh = gh;
              hl = gl;
              gh = fh;
              gl = fl;
              fh = eh;
              fl = el;
              el = dl + t1l | 0;
              eh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;
              dh = ch;
              dl = cl;
              ch = bh;
              cl = bl;
              bh = ah;
              bl = al;
              al = t1l + t2l | 0;
              ah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;
            }
            H0l = H0.low = H0l + al;
            H0.high = H0h + ah + (H0l >>> 0 < al >>> 0 ? 1 : 0);
            H1l = H1.low = H1l + bl;
            H1.high = H1h + bh + (H1l >>> 0 < bl >>> 0 ? 1 : 0);
            H2l = H2.low = H2l + cl;
            H2.high = H2h + ch + (H2l >>> 0 < cl >>> 0 ? 1 : 0);
            H3l = H3.low = H3l + dl;
            H3.high = H3h + dh + (H3l >>> 0 < dl >>> 0 ? 1 : 0);
            H4l = H4.low = H4l + el;
            H4.high = H4h + eh + (H4l >>> 0 < el >>> 0 ? 1 : 0);
            H5l = H5.low = H5l + fl;
            H5.high = H5h + fh + (H5l >>> 0 < fl >>> 0 ? 1 : 0);
            H6l = H6.low = H6l + gl;
            H6.high = H6h + gh + (H6l >>> 0 < gl >>> 0 ? 1 : 0);
            H7l = H7.low = H7l + hl;
            H7.high = H7h + hh + (H7l >>> 0 < hl >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 128 >>> 10 << 5) + 30] = Math.floor(nBitsTotal / 4294967296);
            dataWords[(nBitsLeft + 128 >>> 10 << 5) + 31] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;
            this._process();
            var hash = this._hash.toX32();
            return hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          },
          blockSize: 1024 / 32
        });
        C.SHA512 = Hasher._createHelper(SHA512);
        C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
      })();
      return CryptoJS2.SHA512;
    });
  }
});

// node_modules/crypto-js/sha384.js
var require_sha384 = __commonJS({
  "node_modules/crypto-js/sha384.js"(exports, module) {
    "use strict";
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core(), require_x64_core(), require_sha512());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./x64-core", "./sha512"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      (function() {
        var C = CryptoJS2;
        var C_x64 = C.x64;
        var X64Word = C_x64.Word;
        var X64WordArray = C_x64.WordArray;
        var C_algo = C.algo;
        var SHA512 = C_algo.SHA512;
        var SHA384 = C_algo.SHA384 = SHA512.extend({
          _doReset: function() {
            this._hash = new X64WordArray.init([
              new X64Word.init(3418070365, 3238371032),
              new X64Word.init(1654270250, 914150663),
              new X64Word.init(2438529370, 812702999),
              new X64Word.init(355462360, 4144912697),
              new X64Word.init(1731405415, 4290775857),
              new X64Word.init(2394180231, 1750603025),
              new X64Word.init(3675008525, 1694076839),
              new X64Word.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var hash = SHA512._doFinalize.call(this);
            hash.sigBytes -= 16;
            return hash;
          }
        });
        C.SHA384 = SHA512._createHelper(SHA384);
        C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
      })();
      return CryptoJS2.SHA384;
    });
  }
});

// node_modules/crypto-js/sha3.js
var require_sha3 = __commonJS({
  "node_modules/crypto-js/sha3.js"(exports, module) {
    "use strict";
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core(), require_x64_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./x64-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      (function(Math2) {
        var C = CryptoJS2;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_x64 = C.x64;
        var X64Word = C_x64.Word;
        var C_algo = C.algo;
        var RHO_OFFSETS = [];
        var PI_INDEXES = [];
        var ROUND_CONSTANTS = [];
        (function() {
          var x = 1, y = 0;
          for (var t = 0; t < 24; t++) {
            RHO_OFFSETS[x + 5 * y] = (t + 1) * (t + 2) / 2 % 64;
            var newX = y % 5;
            var newY = (2 * x + 3 * y) % 5;
            x = newX;
            y = newY;
          }
          for (var x = 0; x < 5; x++) {
            for (var y = 0; y < 5; y++) {
              PI_INDEXES[x + 5 * y] = y + (2 * x + 3 * y) % 5 * 5;
            }
          }
          var LFSR = 1;
          for (var i = 0; i < 24; i++) {
            var roundConstantMsw = 0;
            var roundConstantLsw = 0;
            for (var j = 0; j < 7; j++) {
              if (LFSR & 1) {
                var bitPosition = (1 << j) - 1;
                if (bitPosition < 32) {
                  roundConstantLsw ^= 1 << bitPosition;
                } else {
                  roundConstantMsw ^= 1 << bitPosition - 32;
                }
              }
              if (LFSR & 128) {
                LFSR = LFSR << 1 ^ 113;
              } else {
                LFSR <<= 1;
              }
            }
            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
          }
        })();
        var T = [];
        (function() {
          for (var i = 0; i < 25; i++) {
            T[i] = X64Word.create();
          }
        })();
        var SHA3 = C_algo.SHA3 = Hasher.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: Hasher.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            var state = this._state = [];
            for (var i = 0; i < 25; i++) {
              state[i] = new X64Word.init();
            }
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(M, offset) {
            var state = this._state;
            var nBlockSizeLanes = this.blockSize / 2;
            for (var i = 0; i < nBlockSizeLanes; i++) {
              var M2i = M[offset + 2 * i];
              var M2i1 = M[offset + 2 * i + 1];
              M2i = (M2i << 8 | M2i >>> 24) & 16711935 | (M2i << 24 | M2i >>> 8) & 4278255360;
              M2i1 = (M2i1 << 8 | M2i1 >>> 24) & 16711935 | (M2i1 << 24 | M2i1 >>> 8) & 4278255360;
              var lane = state[i];
              lane.high ^= M2i1;
              lane.low ^= M2i;
            }
            for (var round = 0; round < 24; round++) {
              for (var x = 0; x < 5; x++) {
                var tMsw = 0, tLsw = 0;
                for (var y = 0; y < 5; y++) {
                  var lane = state[x + 5 * y];
                  tMsw ^= lane.high;
                  tLsw ^= lane.low;
                }
                var Tx = T[x];
                Tx.high = tMsw;
                Tx.low = tLsw;
              }
              for (var x = 0; x < 5; x++) {
                var Tx4 = T[(x + 4) % 5];
                var Tx1 = T[(x + 1) % 5];
                var Tx1Msw = Tx1.high;
                var Tx1Lsw = Tx1.low;
                var tMsw = Tx4.high ^ (Tx1Msw << 1 | Tx1Lsw >>> 31);
                var tLsw = Tx4.low ^ (Tx1Lsw << 1 | Tx1Msw >>> 31);
                for (var y = 0; y < 5; y++) {
                  var lane = state[x + 5 * y];
                  lane.high ^= tMsw;
                  lane.low ^= tLsw;
                }
              }
              for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
                var tMsw;
                var tLsw;
                var lane = state[laneIndex];
                var laneMsw = lane.high;
                var laneLsw = lane.low;
                var rhoOffset = RHO_OFFSETS[laneIndex];
                if (rhoOffset < 32) {
                  tMsw = laneMsw << rhoOffset | laneLsw >>> 32 - rhoOffset;
                  tLsw = laneLsw << rhoOffset | laneMsw >>> 32 - rhoOffset;
                } else {
                  tMsw = laneLsw << rhoOffset - 32 | laneMsw >>> 64 - rhoOffset;
                  tLsw = laneMsw << rhoOffset - 32 | laneLsw >>> 64 - rhoOffset;
                }
                var TPiLane = T[PI_INDEXES[laneIndex]];
                TPiLane.high = tMsw;
                TPiLane.low = tLsw;
              }
              var T0 = T[0];
              var state0 = state[0];
              T0.high = state0.high;
              T0.low = state0.low;
              for (var x = 0; x < 5; x++) {
                for (var y = 0; y < 5; y++) {
                  var laneIndex = x + 5 * y;
                  var lane = state[laneIndex];
                  var TLane = T[laneIndex];
                  var Tx1Lane = T[(x + 1) % 5 + 5 * y];
                  var Tx2Lane = T[(x + 2) % 5 + 5 * y];
                  lane.high = TLane.high ^ ~Tx1Lane.high & Tx2Lane.high;
                  lane.low = TLane.low ^ ~Tx1Lane.low & Tx2Lane.low;
                }
              }
              var lane = state[0];
              var roundConstant = ROUND_CONSTANTS[round];
              lane.high ^= roundConstant.high;
              lane.low ^= roundConstant.low;
            }
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            var blockSizeBits = this.blockSize * 32;
            dataWords[nBitsLeft >>> 5] |= 1 << 24 - nBitsLeft % 32;
            dataWords[(Math2.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits >>> 5) - 1] |= 128;
            data.sigBytes = dataWords.length * 4;
            this._process();
            var state = this._state;
            var outputLengthBytes = this.cfg.outputLength / 8;
            var outputLengthLanes = outputLengthBytes / 8;
            var hashWords = [];
            for (var i = 0; i < outputLengthLanes; i++) {
              var lane = state[i];
              var laneMsw = lane.high;
              var laneLsw = lane.low;
              laneMsw = (laneMsw << 8 | laneMsw >>> 24) & 16711935 | (laneMsw << 24 | laneMsw >>> 8) & 4278255360;
              laneLsw = (laneLsw << 8 | laneLsw >>> 24) & 16711935 | (laneLsw << 24 | laneLsw >>> 8) & 4278255360;
              hashWords.push(laneLsw);
              hashWords.push(laneMsw);
            }
            return new WordArray.init(hashWords, outputLengthBytes);
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            var state = clone._state = this._state.slice(0);
            for (var i = 0; i < 25; i++) {
              state[i] = state[i].clone();
            }
            return clone;
          }
        });
        C.SHA3 = Hasher._createHelper(SHA3);
        C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
      })(Math);
      return CryptoJS2.SHA3;
    });
  }
});

// node_modules/crypto-js/ripemd160.js
var require_ripemd160 = __commonJS({
  "node_modules/crypto-js/ripemd160.js"(exports, module) {
    "use strict";
    (function(root, factory) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      (function(Math2) {
        var C = CryptoJS2;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var _zl = WordArray.create([
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13
        ]);
        var _zr = WordArray.create([
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11
        ]);
        var _sl = WordArray.create([
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6
        ]);
        var _sr = WordArray.create([
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11
        ]);
        var _hl = WordArray.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
        var _hr = WordArray.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
        var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
          _doReset: function() {
            this._hash = WordArray.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(M, offset) {
            for (var i = 0; i < 16; i++) {
              var offset_i = offset + i;
              var M_offset_i = M[offset_i];
              M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
            }
            var H = this._hash.words;
            var hl = _hl.words;
            var hr = _hr.words;
            var zl = _zl.words;
            var zr = _zr.words;
            var sl = _sl.words;
            var sr = _sr.words;
            var al, bl, cl, dl, el;
            var ar, br, cr, dr, er;
            ar = al = H[0];
            br = bl = H[1];
            cr = cl = H[2];
            dr = dl = H[3];
            er = el = H[4];
            var t;
            for (var i = 0; i < 80; i += 1) {
              t = al + M[offset + zl[i]] | 0;
              if (i < 16) {
                t += f1(bl, cl, dl) + hl[0];
              } else if (i < 32) {
                t += f2(bl, cl, dl) + hl[1];
              } else if (i < 48) {
                t += f3(bl, cl, dl) + hl[2];
              } else if (i < 64) {
                t += f4(bl, cl, dl) + hl[3];
              } else {
                t += f5(bl, cl, dl) + hl[4];
              }
              t = t | 0;
              t = rotl(t, sl[i]);
              t = t + el | 0;
              al = el;
              el = dl;
              dl = rotl(cl, 10);
              cl = bl;
              bl = t;
              t = ar + M[offset + zr[i]] | 0;
              if (i < 16) {
                t += f5(br, cr, dr) + hr[0];
              } else if (i < 32) {
                t += f4(br, cr, dr) + hr[1];
              } else if (i < 48) {
                t += f3(br, cr, dr) + hr[2];
              } else if (i < 64) {
                t += f2(br, cr, dr) + hr[3];
              } else {
                t += f1(br, cr, dr) + hr[4];
              }
              t = t | 0;
              t = rotl(t, sr[i]);
              t = t + er | 0;
              ar = er;
              er = dr;
              dr = rotl(cr, 10);
              cr = br;
              br = t;
            }
            t = H[1] + cl + dr | 0;
            H[1] = H[2] + dl + er | 0;
            H[2] = H[3] + el + ar | 0;
            H[3] = H[4] + al + br | 0;
            H[4] = H[0] + bl + cr | 0;
            H[0] = t;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotal << 8 | nBitsTotal >>> 24) & 16711935 | (nBitsTotal << 24 | nBitsTotal >>> 8) & 4278255360;
            data.sigBytes = (dataWords.length + 1) * 4;
            this._process();
            var hash = this._hash;
            var H = hash.words;
            for (var i = 0; i < 5; i++) {
              var H_i = H[i];
              H[i] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
            }
            return hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        function f1(x, y, z) {
          return x ^ y ^ z;
        }
        function f2(x, y, z) {
          return x & y | ~x & z;
        }
        function f3(x, y, z) {
          return (x | ~y) ^ z;
        }
        function f4(x, y, z) {
          return x & z | y & ~z;
        }
        function f5(x, y, z) {
          return x ^ (y | ~z);
        }
        function rotl(x, n) {
          return x << n | x >>> 32 - n;
        }
        C.RIPEMD160 = Hasher._createHelper(RIPEMD160);
        C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
      })(Math);
      return CryptoJS2.RIPEMD160;
    });
  }
});

// node_modules/crypto-js/hmac.js
var require_hmac = __commonJS({
  "node_modules/crypto-js/hmac.js"(exports, module) {
    "use strict";
    (function(root, factory) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      (function() {
        var C = CryptoJS2;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var C_enc = C.enc;
        var Utf8 = C_enc.Utf8;
        var C_algo = C.algo;
        var HMAC = C_algo.HMAC = Base.extend({
          /**
           * Initializes a newly created HMAC.
           *
           * @param {Hasher} hasher The hash algorithm to use.
           * @param {WordArray|string} key The secret key.
           *
           * @example
           *
           *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
           */
          init: function(hasher, key) {
            hasher = this._hasher = new hasher.init();
            if (typeof key == "string") {
              key = Utf8.parse(key);
            }
            var hasherBlockSize = hasher.blockSize;
            var hasherBlockSizeBytes = hasherBlockSize * 4;
            if (key.sigBytes > hasherBlockSizeBytes) {
              key = hasher.finalize(key);
            }
            key.clamp();
            var oKey = this._oKey = key.clone();
            var iKey = this._iKey = key.clone();
            var oKeyWords = oKey.words;
            var iKeyWords = iKey.words;
            for (var i = 0; i < hasherBlockSize; i++) {
              oKeyWords[i] ^= 1549556828;
              iKeyWords[i] ^= 909522486;
            }
            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;
            this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var hasher = this._hasher;
            hasher.reset();
            hasher.update(this._iKey);
          },
          /**
           * Updates this HMAC with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {HMAC} This HMAC instance.
           *
           * @example
           *
           *     hmacHasher.update('message');
           *     hmacHasher.update(wordArray);
           */
          update: function(messageUpdate) {
            this._hasher.update(messageUpdate);
            return this;
          },
          /**
           * Finalizes the HMAC computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The HMAC.
           *
           * @example
           *
           *     var hmac = hmacHasher.finalize();
           *     var hmac = hmacHasher.finalize('message');
           *     var hmac = hmacHasher.finalize(wordArray);
           */
          finalize: function(messageUpdate) {
            var hasher = this._hasher;
            var innerHash = hasher.finalize(messageUpdate);
            hasher.reset();
            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
            return hmac;
          }
        });
      })();
    });
  }
});

// node_modules/crypto-js/pbkdf2.js
var require_pbkdf2 = __commonJS({
  "node_modules/crypto-js/pbkdf2.js"(exports, module) {
    "use strict";
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core(), require_sha256(), require_hmac());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./sha256", "./hmac"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      (function() {
        var C = CryptoJS2;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var SHA256 = C_algo.SHA256;
        var HMAC = C_algo.HMAC;
        var PBKDF2 = C_algo.PBKDF2 = Base.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA256
           * @property {number} iterations The number of iterations to perform. Default: 250000
           */
          cfg: Base.extend({
            keySize: 128 / 32,
            hasher: SHA256,
            iterations: 25e4
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.PBKDF2.create();
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
           */
          init: function(cfg) {
            this.cfg = this.cfg.extend(cfg);
          },
          /**
           * Computes the Password-Based Key Derivation Function 2.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(password, salt) {
            var cfg = this.cfg;
            var hmac = HMAC.create(cfg.hasher, password);
            var derivedKey = WordArray.create();
            var blockIndex = WordArray.create([1]);
            var derivedKeyWords = derivedKey.words;
            var blockIndexWords = blockIndex.words;
            var keySize = cfg.keySize;
            var iterations = cfg.iterations;
            while (derivedKeyWords.length < keySize) {
              var block = hmac.update(salt).finalize(blockIndex);
              hmac.reset();
              var blockWords = block.words;
              var blockWordsLength = blockWords.length;
              var intermediate = block;
              for (var i = 1; i < iterations; i++) {
                intermediate = hmac.finalize(intermediate);
                hmac.reset();
                var intermediateWords = intermediate.words;
                for (var j = 0; j < blockWordsLength; j++) {
                  blockWords[j] ^= intermediateWords[j];
                }
              }
              derivedKey.concat(block);
              blockIndexWords[0]++;
            }
            derivedKey.sigBytes = keySize * 4;
            return derivedKey;
          }
        });
        C.PBKDF2 = function(password, salt, cfg) {
          return PBKDF2.create(cfg).compute(password, salt);
        };
      })();
      return CryptoJS2.PBKDF2;
    });
  }
});

// node_modules/crypto-js/evpkdf.js
var require_evpkdf = __commonJS({
  "node_modules/crypto-js/evpkdf.js"(exports, module) {
    "use strict";
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core(), require_sha1(), require_hmac());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./sha1", "./hmac"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      (function() {
        var C = CryptoJS2;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var MD5 = C_algo.MD5;
        var EvpKDF = C_algo.EvpKDF = Base.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: Base.extend({
            keySize: 128 / 32,
            hasher: MD5,
            iterations: 1
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.EvpKDF.create();
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
           */
          init: function(cfg) {
            this.cfg = this.cfg.extend(cfg);
          },
          /**
           * Derives a key from a password.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(password, salt) {
            var block;
            var cfg = this.cfg;
            var hasher = cfg.hasher.create();
            var derivedKey = WordArray.create();
            var derivedKeyWords = derivedKey.words;
            var keySize = cfg.keySize;
            var iterations = cfg.iterations;
            while (derivedKeyWords.length < keySize) {
              if (block) {
                hasher.update(block);
              }
              block = hasher.update(password).finalize(salt);
              hasher.reset();
              for (var i = 1; i < iterations; i++) {
                block = hasher.finalize(block);
                hasher.reset();
              }
              derivedKey.concat(block);
            }
            derivedKey.sigBytes = keySize * 4;
            return derivedKey;
          }
        });
        C.EvpKDF = function(password, salt, cfg) {
          return EvpKDF.create(cfg).compute(password, salt);
        };
      })();
      return CryptoJS2.EvpKDF;
    });
  }
});

// node_modules/crypto-js/cipher-core.js
var require_cipher_core = __commonJS({
  "node_modules/crypto-js/cipher-core.js"(exports, module) {
    "use strict";
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core(), require_evpkdf());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./evpkdf"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      CryptoJS2.lib.Cipher || function(undefined2) {
        var C = CryptoJS2;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
        var C_enc = C.enc;
        var Utf8 = C_enc.Utf8;
        var Base64 = C_enc.Base64;
        var C_algo = C.algo;
        var EvpKDF = C_algo.EvpKDF;
        var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: Base.extend(),
          /**
           * Creates this cipher in encryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
           */
          createEncryptor: function(key, cfg) {
            return this.create(this._ENC_XFORM_MODE, key, cfg);
          },
          /**
           * Creates this cipher in decryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
           */
          createDecryptor: function(key, cfg) {
            return this.create(this._DEC_XFORM_MODE, key, cfg);
          },
          /**
           * Initializes a newly created cipher.
           *
           * @param {number} xformMode Either the encryption or decryption transormation mode constant.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
           */
          init: function(xformMode, key, cfg) {
            this.cfg = this.cfg.extend(cfg);
            this._xformMode = xformMode;
            this._key = key;
            this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            BufferedBlockAlgorithm.reset.call(this);
            this._doReset();
          },
          /**
           * Adds data to be encrypted or decrypted.
           *
           * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
           *
           * @return {WordArray} The data after processing.
           *
           * @example
           *
           *     var encrypted = cipher.process('data');
           *     var encrypted = cipher.process(wordArray);
           */
          process: function(dataUpdate) {
            this._append(dataUpdate);
            return this._process();
          },
          /**
           * Finalizes the encryption or decryption process.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
           *
           * @return {WordArray} The data after final processing.
           *
           * @example
           *
           *     var encrypted = cipher.finalize();
           *     var encrypted = cipher.finalize('data');
           *     var encrypted = cipher.finalize(wordArray);
           */
          finalize: function(dataUpdate) {
            if (dataUpdate) {
              this._append(dataUpdate);
            }
            var finalProcessedData = this._doFinalize();
            return finalProcessedData;
          },
          keySize: 128 / 32,
          ivSize: 128 / 32,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          /**
           * Creates shortcut functions to a cipher's object interface.
           *
           * @param {Cipher} cipher The cipher to create a helper for.
           *
           * @return {Object} An object with encrypt and decrypt shortcut functions.
           *
           * @static
           *
           * @example
           *
           *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
           */
          _createHelper: /* @__PURE__ */ function() {
            function selectCipherStrategy(key) {
              if (typeof key == "string") {
                return PasswordBasedCipher;
              } else {
                return SerializableCipher;
              }
            }
            return function(cipher) {
              return {
                encrypt: function(message, key, cfg) {
                  return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
                },
                decrypt: function(ciphertext, key, cfg) {
                  return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
                }
              };
            };
          }()
        });
        var StreamCipher = C_lib.StreamCipher = Cipher.extend({
          _doFinalize: function() {
            var finalProcessedBlocks = this._process(true);
            return finalProcessedBlocks;
          },
          blockSize: 1
        });
        var C_mode = C.mode = {};
        var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
          /**
           * Creates this mode for encryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
           */
          createEncryptor: function(cipher, iv) {
            return this.Encryptor.create(cipher, iv);
          },
          /**
           * Creates this mode for decryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
           */
          createDecryptor: function(cipher, iv) {
            return this.Decryptor.create(cipher, iv);
          },
          /**
           * Initializes a newly created mode.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
           */
          init: function(cipher, iv) {
            this._cipher = cipher;
            this._iv = iv;
          }
        });
        var CBC = C_mode.CBC = function() {
          var CBC2 = BlockCipherMode.extend();
          CBC2.Encryptor = CBC2.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(words, offset) {
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              xorBlock.call(this, words, offset, blockSize);
              cipher.encryptBlock(words, offset);
              this._prevBlock = words.slice(offset, offset + blockSize);
            }
          });
          CBC2.Decryptor = CBC2.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(words, offset) {
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              var thisBlock = words.slice(offset, offset + blockSize);
              cipher.decryptBlock(words, offset);
              xorBlock.call(this, words, offset, blockSize);
              this._prevBlock = thisBlock;
            }
          });
          function xorBlock(words, offset, blockSize) {
            var block;
            var iv = this._iv;
            if (iv) {
              block = iv;
              this._iv = undefined2;
            } else {
              block = this._prevBlock;
            }
            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= block[i];
            }
          }
          return CBC2;
        }();
        var C_pad = C.pad = {};
        var Pkcs7 = C_pad.Pkcs7 = {
          /**
           * Pads data using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to pad.
           * @param {number} blockSize The multiple that the data should be padded to.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
           */
          pad: function(data, blockSize) {
            var blockSizeBytes = blockSize * 4;
            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
            var paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes;
            var paddingWords = [];
            for (var i = 0; i < nPaddingBytes; i += 4) {
              paddingWords.push(paddingWord);
            }
            var padding = WordArray.create(paddingWords, nPaddingBytes);
            data.concat(padding);
          },
          /**
           * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to unpad.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.unpad(wordArray);
           */
          unpad: function(data) {
            var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
            data.sigBytes -= nPaddingBytes;
          }
        };
        var BlockCipher = C_lib.BlockCipher = Cipher.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: Cipher.cfg.extend({
            mode: CBC,
            padding: Pkcs7
          }),
          reset: function() {
            var modeCreator;
            Cipher.reset.call(this);
            var cfg = this.cfg;
            var iv = cfg.iv;
            var mode = cfg.mode;
            if (this._xformMode == this._ENC_XFORM_MODE) {
              modeCreator = mode.createEncryptor;
            } else {
              modeCreator = mode.createDecryptor;
              this._minBufferSize = 1;
            }
            if (this._mode && this._mode.__creator == modeCreator) {
              this._mode.init(this, iv && iv.words);
            } else {
              this._mode = modeCreator.call(mode, this, iv && iv.words);
              this._mode.__creator = modeCreator;
            }
          },
          _doProcessBlock: function(words, offset) {
            this._mode.processBlock(words, offset);
          },
          _doFinalize: function() {
            var finalProcessedBlocks;
            var padding = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
              padding.pad(this._data, this.blockSize);
              finalProcessedBlocks = this._process(true);
            } else {
              finalProcessedBlocks = this._process(true);
              padding.unpad(finalProcessedBlocks);
            }
            return finalProcessedBlocks;
          },
          blockSize: 128 / 32
        });
        var CipherParams = C_lib.CipherParams = Base.extend({
          /**
           * Initializes a newly created cipher params object.
           *
           * @param {Object} cipherParams An object with any of the possible cipher parameters.
           *
           * @example
           *
           *     var cipherParams = CryptoJS.lib.CipherParams.create({
           *         ciphertext: ciphertextWordArray,
           *         key: keyWordArray,
           *         iv: ivWordArray,
           *         salt: saltWordArray,
           *         algorithm: CryptoJS.algo.AES,
           *         mode: CryptoJS.mode.CBC,
           *         padding: CryptoJS.pad.PKCS7,
           *         blockSize: 4,
           *         formatter: CryptoJS.format.OpenSSL
           *     });
           */
          init: function(cipherParams) {
            this.mixIn(cipherParams);
          },
          /**
           * Converts this cipher params object to a string.
           *
           * @param {Format} formatter (Optional) The formatting strategy to use.
           *
           * @return {string} The stringified cipher params.
           *
           * @throws Error If neither the formatter nor the default formatter is set.
           *
           * @example
           *
           *     var string = cipherParams + '';
           *     var string = cipherParams.toString();
           *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
           */
          toString: function(formatter) {
            return (formatter || this.formatter).stringify(this);
          }
        });
        var C_format = C.format = {};
        var OpenSSLFormatter = C_format.OpenSSL = {
          /**
           * Converts a cipher params object to an OpenSSL-compatible string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The OpenSSL-compatible string.
           *
           * @static
           *
           * @example
           *
           *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
           */
          stringify: function(cipherParams) {
            var wordArray;
            var ciphertext = cipherParams.ciphertext;
            var salt = cipherParams.salt;
            if (salt) {
              wordArray = WordArray.create([1398893684, 1701076831]).concat(salt).concat(ciphertext);
            } else {
              wordArray = ciphertext;
            }
            return wordArray.toString(Base64);
          },
          /**
           * Converts an OpenSSL-compatible string to a cipher params object.
           *
           * @param {string} openSSLStr The OpenSSL-compatible string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
           */
          parse: function(openSSLStr) {
            var salt;
            var ciphertext = Base64.parse(openSSLStr);
            var ciphertextWords = ciphertext.words;
            if (ciphertextWords[0] == 1398893684 && ciphertextWords[1] == 1701076831) {
              salt = WordArray.create(ciphertextWords.slice(2, 4));
              ciphertextWords.splice(0, 4);
              ciphertext.sigBytes -= 16;
            }
            return CipherParams.create({ ciphertext, salt });
          }
        };
        var SerializableCipher = C_lib.SerializableCipher = Base.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: Base.extend({
            format: OpenSSLFormatter
          }),
          /**
           * Encrypts a message.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(cipher, message, key, cfg) {
            cfg = this.cfg.extend(cfg);
            var encryptor = cipher.createEncryptor(key, cfg);
            var ciphertext = encryptor.finalize(message);
            var cipherCfg = encryptor.cfg;
            return CipherParams.create({
              ciphertext,
              key,
              iv: cipherCfg.iv,
              algorithm: cipher,
              mode: cipherCfg.mode,
              padding: cipherCfg.padding,
              blockSize: cipher.blockSize,
              formatter: cfg.format
            });
          },
          /**
           * Decrypts serialized ciphertext.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(cipher, ciphertext, key, cfg) {
            cfg = this.cfg.extend(cfg);
            ciphertext = this._parse(ciphertext, cfg.format);
            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);
            return plaintext;
          },
          /**
           * Converts serialized ciphertext to CipherParams,
           * else assumed CipherParams already and returns ciphertext unchanged.
           *
           * @param {CipherParams|string} ciphertext The ciphertext.
           * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
           *
           * @return {CipherParams} The unserialized ciphertext.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
           */
          _parse: function(ciphertext, format) {
            if (typeof ciphertext == "string") {
              return format.parse(ciphertext, this);
            } else {
              return ciphertext;
            }
          }
        });
        var C_kdf = C.kdf = {};
        var OpenSSLKdf = C_kdf.OpenSSL = {
          /**
           * Derives a key and IV from a password.
           *
           * @param {string} password The password to derive from.
           * @param {number} keySize The size in words of the key to generate.
           * @param {number} ivSize The size in words of the IV to generate.
           * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
           *
           * @return {CipherParams} A cipher params object with the key, IV, and salt.
           *
           * @static
           *
           * @example
           *
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
           */
          execute: function(password, keySize, ivSize, salt, hasher) {
            if (!salt) {
              salt = WordArray.random(64 / 8);
            }
            if (!hasher) {
              var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);
            } else {
              var key = EvpKDF.create({ keySize: keySize + ivSize, hasher }).compute(password, salt);
            }
            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
            key.sigBytes = keySize * 4;
            return CipherParams.create({ key, iv, salt });
          }
        };
        var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: SerializableCipher.cfg.extend({
            kdf: OpenSSLKdf
          }),
          /**
           * Encrypts a message using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(cipher, message, password, cfg) {
            cfg = this.cfg.extend(cfg);
            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, cfg.salt, cfg.hasher);
            cfg.iv = derivedParams.iv;
            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);
            ciphertext.mixIn(derivedParams);
            return ciphertext;
          },
          /**
           * Decrypts serialized ciphertext using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(cipher, ciphertext, password, cfg) {
            cfg = this.cfg.extend(cfg);
            ciphertext = this._parse(ciphertext, cfg.format);
            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt, cfg.hasher);
            cfg.iv = derivedParams.iv;
            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);
            return plaintext;
          }
        });
      }();
    });
  }
});

// node_modules/crypto-js/mode-cfb.js
var require_mode_cfb = __commonJS({
  "node_modules/crypto-js/mode-cfb.js"(exports, module) {
    "use strict";
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      CryptoJS2.mode.CFB = function() {
        var CFB = CryptoJS2.lib.BlockCipherMode.extend();
        CFB.Encryptor = CFB.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
            this._prevBlock = words.slice(offset, offset + blockSize);
          }
        });
        CFB.Decryptor = CFB.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var thisBlock = words.slice(offset, offset + blockSize);
            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
            this._prevBlock = thisBlock;
          }
        });
        function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
          var keystream;
          var iv = this._iv;
          if (iv) {
            keystream = iv.slice(0);
            this._iv = void 0;
          } else {
            keystream = this._prevBlock;
          }
          cipher.encryptBlock(keystream, 0);
          for (var i = 0; i < blockSize; i++) {
            words[offset + i] ^= keystream[i];
          }
        }
        return CFB;
      }();
      return CryptoJS2.mode.CFB;
    });
  }
});

// node_modules/crypto-js/mode-ctr.js
var require_mode_ctr = __commonJS({
  "node_modules/crypto-js/mode-ctr.js"(exports, module) {
    "use strict";
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      CryptoJS2.mode.CTR = function() {
        var CTR = CryptoJS2.lib.BlockCipherMode.extend();
        var Encryptor = CTR.Encryptor = CTR.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var counter = this._counter;
            if (iv) {
              counter = this._counter = iv.slice(0);
              this._iv = void 0;
            }
            var keystream = counter.slice(0);
            cipher.encryptBlock(keystream, 0);
            counter[blockSize - 1] = counter[blockSize - 1] + 1 | 0;
            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= keystream[i];
            }
          }
        });
        CTR.Decryptor = Encryptor;
        return CTR;
      }();
      return CryptoJS2.mode.CTR;
    });
  }
});

// node_modules/crypto-js/mode-ctr-gladman.js
var require_mode_ctr_gladman = __commonJS({
  "node_modules/crypto-js/mode-ctr-gladman.js"(exports, module) {
    "use strict";
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      CryptoJS2.mode.CTRGladman = function() {
        var CTRGladman = CryptoJS2.lib.BlockCipherMode.extend();
        function incWord(word) {
          if ((word >> 24 & 255) === 255) {
            var b1 = word >> 16 & 255;
            var b2 = word >> 8 & 255;
            var b3 = word & 255;
            if (b1 === 255) {
              b1 = 0;
              if (b2 === 255) {
                b2 = 0;
                if (b3 === 255) {
                  b3 = 0;
                } else {
                  ++b3;
                }
              } else {
                ++b2;
              }
            } else {
              ++b1;
            }
            word = 0;
            word += b1 << 16;
            word += b2 << 8;
            word += b3;
          } else {
            word += 1 << 24;
          }
          return word;
        }
        function incCounter(counter) {
          if ((counter[0] = incWord(counter[0])) === 0) {
            counter[1] = incWord(counter[1]);
          }
          return counter;
        }
        var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var counter = this._counter;
            if (iv) {
              counter = this._counter = iv.slice(0);
              this._iv = void 0;
            }
            incCounter(counter);
            var keystream = counter.slice(0);
            cipher.encryptBlock(keystream, 0);
            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= keystream[i];
            }
          }
        });
        CTRGladman.Decryptor = Encryptor;
        return CTRGladman;
      }();
      return CryptoJS2.mode.CTRGladman;
    });
  }
});

// node_modules/crypto-js/mode-ofb.js
var require_mode_ofb = __commonJS({
  "node_modules/crypto-js/mode-ofb.js"(exports, module) {
    "use strict";
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      CryptoJS2.mode.OFB = function() {
        var OFB = CryptoJS2.lib.BlockCipherMode.extend();
        var Encryptor = OFB.Encryptor = OFB.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var keystream = this._keystream;
            if (iv) {
              keystream = this._keystream = iv.slice(0);
              this._iv = void 0;
            }
            cipher.encryptBlock(keystream, 0);
            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= keystream[i];
            }
          }
        });
        OFB.Decryptor = Encryptor;
        return OFB;
      }();
      return CryptoJS2.mode.OFB;
    });
  }
});

// node_modules/crypto-js/mode-ecb.js
var require_mode_ecb = __commonJS({
  "node_modules/crypto-js/mode-ecb.js"(exports, module) {
    "use strict";
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      CryptoJS2.mode.ECB = function() {
        var ECB = CryptoJS2.lib.BlockCipherMode.extend();
        ECB.Encryptor = ECB.extend({
          processBlock: function(words, offset) {
            this._cipher.encryptBlock(words, offset);
          }
        });
        ECB.Decryptor = ECB.extend({
          processBlock: function(words, offset) {
            this._cipher.decryptBlock(words, offset);
          }
        });
        return ECB;
      }();
      return CryptoJS2.mode.ECB;
    });
  }
});

// node_modules/crypto-js/pad-ansix923.js
var require_pad_ansix923 = __commonJS({
  "node_modules/crypto-js/pad-ansix923.js"(exports, module) {
    "use strict";
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      CryptoJS2.pad.AnsiX923 = {
        pad: function(data, blockSize) {
          var dataSigBytes = data.sigBytes;
          var blockSizeBytes = blockSize * 4;
          var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;
          var lastBytePos = dataSigBytes + nPaddingBytes - 1;
          data.clamp();
          data.words[lastBytePos >>> 2] |= nPaddingBytes << 24 - lastBytePos % 4 * 8;
          data.sigBytes += nPaddingBytes;
        },
        unpad: function(data) {
          var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
          data.sigBytes -= nPaddingBytes;
        }
      };
      return CryptoJS2.pad.Ansix923;
    });
  }
});

// node_modules/crypto-js/pad-iso10126.js
var require_pad_iso10126 = __commonJS({
  "node_modules/crypto-js/pad-iso10126.js"(exports, module) {
    "use strict";
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      CryptoJS2.pad.Iso10126 = {
        pad: function(data, blockSize) {
          var blockSizeBytes = blockSize * 4;
          var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
          data.concat(CryptoJS2.lib.WordArray.random(nPaddingBytes - 1)).concat(CryptoJS2.lib.WordArray.create([nPaddingBytes << 24], 1));
        },
        unpad: function(data) {
          var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
          data.sigBytes -= nPaddingBytes;
        }
      };
      return CryptoJS2.pad.Iso10126;
    });
  }
});

// node_modules/crypto-js/pad-iso97971.js
var require_pad_iso97971 = __commonJS({
  "node_modules/crypto-js/pad-iso97971.js"(exports, module) {
    "use strict";
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      CryptoJS2.pad.Iso97971 = {
        pad: function(data, blockSize) {
          data.concat(CryptoJS2.lib.WordArray.create([2147483648], 1));
          CryptoJS2.pad.ZeroPadding.pad(data, blockSize);
        },
        unpad: function(data) {
          CryptoJS2.pad.ZeroPadding.unpad(data);
          data.sigBytes--;
        }
      };
      return CryptoJS2.pad.Iso97971;
    });
  }
});

// node_modules/crypto-js/pad-zeropadding.js
var require_pad_zeropadding = __commonJS({
  "node_modules/crypto-js/pad-zeropadding.js"(exports, module) {
    "use strict";
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      CryptoJS2.pad.ZeroPadding = {
        pad: function(data, blockSize) {
          var blockSizeBytes = blockSize * 4;
          data.clamp();
          data.sigBytes += blockSizeBytes - (data.sigBytes % blockSizeBytes || blockSizeBytes);
        },
        unpad: function(data) {
          var dataWords = data.words;
          var i = data.sigBytes - 1;
          for (var i = data.sigBytes - 1; i >= 0; i--) {
            if (dataWords[i >>> 2] >>> 24 - i % 4 * 8 & 255) {
              data.sigBytes = i + 1;
              break;
            }
          }
        }
      };
      return CryptoJS2.pad.ZeroPadding;
    });
  }
});

// node_modules/crypto-js/pad-nopadding.js
var require_pad_nopadding = __commonJS({
  "node_modules/crypto-js/pad-nopadding.js"(exports, module) {
    "use strict";
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      CryptoJS2.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      };
      return CryptoJS2.pad.NoPadding;
    });
  }
});

// node_modules/crypto-js/format-hex.js
var require_format_hex = __commonJS({
  "node_modules/crypto-js/format-hex.js"(exports, module) {
    "use strict";
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      (function(undefined2) {
        var C = CryptoJS2;
        var C_lib = C.lib;
        var CipherParams = C_lib.CipherParams;
        var C_enc = C.enc;
        var Hex = C_enc.Hex;
        var C_format = C.format;
        var HexFormatter = C_format.Hex = {
          /**
           * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The hexadecimally encoded string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
           */
          stringify: function(cipherParams) {
            return cipherParams.ciphertext.toString(Hex);
          },
          /**
           * Converts a hexadecimally encoded ciphertext string to a cipher params object.
           *
           * @param {string} input The hexadecimally encoded string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
           */
          parse: function(input2) {
            var ciphertext = Hex.parse(input2);
            return CipherParams.create({ ciphertext });
          }
        };
      })();
      return CryptoJS2.format.Hex;
    });
  }
});

// node_modules/crypto-js/aes.js
var require_aes = __commonJS({
  "node_modules/crypto-js/aes.js"(exports, module) {
    "use strict";
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      (function() {
        var C = CryptoJS2;
        var C_lib = C.lib;
        var BlockCipher = C_lib.BlockCipher;
        var C_algo = C.algo;
        var SBOX = [];
        var INV_SBOX = [];
        var SUB_MIX_0 = [];
        var SUB_MIX_1 = [];
        var SUB_MIX_2 = [];
        var SUB_MIX_3 = [];
        var INV_SUB_MIX_0 = [];
        var INV_SUB_MIX_1 = [];
        var INV_SUB_MIX_2 = [];
        var INV_SUB_MIX_3 = [];
        (function() {
          var d = [];
          for (var i = 0; i < 256; i++) {
            if (i < 128) {
              d[i] = i << 1;
            } else {
              d[i] = i << 1 ^ 283;
            }
          }
          var x = 0;
          var xi = 0;
          for (var i = 0; i < 256; i++) {
            var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
            sx = sx >>> 8 ^ sx & 255 ^ 99;
            SBOX[x] = sx;
            INV_SBOX[sx] = x;
            var x2 = d[x];
            var x4 = d[x2];
            var x8 = d[x4];
            var t = d[sx] * 257 ^ sx * 16843008;
            SUB_MIX_0[x] = t << 24 | t >>> 8;
            SUB_MIX_1[x] = t << 16 | t >>> 16;
            SUB_MIX_2[x] = t << 8 | t >>> 24;
            SUB_MIX_3[x] = t;
            var t = x8 * 16843009 ^ x4 * 65537 ^ x2 * 257 ^ x * 16843008;
            INV_SUB_MIX_0[sx] = t << 24 | t >>> 8;
            INV_SUB_MIX_1[sx] = t << 16 | t >>> 16;
            INV_SUB_MIX_2[sx] = t << 8 | t >>> 24;
            INV_SUB_MIX_3[sx] = t;
            if (!x) {
              x = xi = 1;
            } else {
              x = x2 ^ d[d[d[x8 ^ x2]]];
              xi ^= d[d[xi]];
            }
          }
        })();
        var RCON = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
        var AES = C_algo.AES = BlockCipher.extend({
          _doReset: function() {
            var t;
            if (this._nRounds && this._keyPriorReset === this._key) {
              return;
            }
            var key = this._keyPriorReset = this._key;
            var keyWords = key.words;
            var keySize = key.sigBytes / 4;
            var nRounds = this._nRounds = keySize + 6;
            var ksRows = (nRounds + 1) * 4;
            var keySchedule = this._keySchedule = [];
            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
              if (ksRow < keySize) {
                keySchedule[ksRow] = keyWords[ksRow];
              } else {
                t = keySchedule[ksRow - 1];
                if (!(ksRow % keySize)) {
                  t = t << 8 | t >>> 24;
                  t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 255] << 16 | SBOX[t >>> 8 & 255] << 8 | SBOX[t & 255];
                  t ^= RCON[ksRow / keySize | 0] << 24;
                } else if (keySize > 6 && ksRow % keySize == 4) {
                  t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 255] << 16 | SBOX[t >>> 8 & 255] << 8 | SBOX[t & 255];
                }
                keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
              }
            }
            var invKeySchedule = this._invKeySchedule = [];
            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
              var ksRow = ksRows - invKsRow;
              if (invKsRow % 4) {
                var t = keySchedule[ksRow];
              } else {
                var t = keySchedule[ksRow - 4];
              }
              if (invKsRow < 4 || ksRow <= 4) {
                invKeySchedule[invKsRow] = t;
              } else {
                invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[t >>> 16 & 255]] ^ INV_SUB_MIX_2[SBOX[t >>> 8 & 255]] ^ INV_SUB_MIX_3[SBOX[t & 255]];
              }
            }
          },
          encryptBlock: function(M, offset) {
            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
          },
          decryptBlock: function(M, offset) {
            var t = M[offset + 1];
            M[offset + 1] = M[offset + 3];
            M[offset + 3] = t;
            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);
            var t = M[offset + 1];
            M[offset + 1] = M[offset + 3];
            M[offset + 3] = t;
          },
          _doCryptBlock: function(M, offset, keySchedule, SUB_MIX_02, SUB_MIX_12, SUB_MIX_22, SUB_MIX_32, SBOX2) {
            var nRounds = this._nRounds;
            var s0 = M[offset] ^ keySchedule[0];
            var s1 = M[offset + 1] ^ keySchedule[1];
            var s2 = M[offset + 2] ^ keySchedule[2];
            var s3 = M[offset + 3] ^ keySchedule[3];
            var ksRow = 4;
            for (var round = 1; round < nRounds; round++) {
              var t0 = SUB_MIX_02[s0 >>> 24] ^ SUB_MIX_12[s1 >>> 16 & 255] ^ SUB_MIX_22[s2 >>> 8 & 255] ^ SUB_MIX_32[s3 & 255] ^ keySchedule[ksRow++];
              var t1 = SUB_MIX_02[s1 >>> 24] ^ SUB_MIX_12[s2 >>> 16 & 255] ^ SUB_MIX_22[s3 >>> 8 & 255] ^ SUB_MIX_32[s0 & 255] ^ keySchedule[ksRow++];
              var t2 = SUB_MIX_02[s2 >>> 24] ^ SUB_MIX_12[s3 >>> 16 & 255] ^ SUB_MIX_22[s0 >>> 8 & 255] ^ SUB_MIX_32[s1 & 255] ^ keySchedule[ksRow++];
              var t3 = SUB_MIX_02[s3 >>> 24] ^ SUB_MIX_12[s0 >>> 16 & 255] ^ SUB_MIX_22[s1 >>> 8 & 255] ^ SUB_MIX_32[s2 & 255] ^ keySchedule[ksRow++];
              s0 = t0;
              s1 = t1;
              s2 = t2;
              s3 = t3;
            }
            var t0 = (SBOX2[s0 >>> 24] << 24 | SBOX2[s1 >>> 16 & 255] << 16 | SBOX2[s2 >>> 8 & 255] << 8 | SBOX2[s3 & 255]) ^ keySchedule[ksRow++];
            var t1 = (SBOX2[s1 >>> 24] << 24 | SBOX2[s2 >>> 16 & 255] << 16 | SBOX2[s3 >>> 8 & 255] << 8 | SBOX2[s0 & 255]) ^ keySchedule[ksRow++];
            var t2 = (SBOX2[s2 >>> 24] << 24 | SBOX2[s3 >>> 16 & 255] << 16 | SBOX2[s0 >>> 8 & 255] << 8 | SBOX2[s1 & 255]) ^ keySchedule[ksRow++];
            var t3 = (SBOX2[s3 >>> 24] << 24 | SBOX2[s0 >>> 16 & 255] << 16 | SBOX2[s1 >>> 8 & 255] << 8 | SBOX2[s2 & 255]) ^ keySchedule[ksRow++];
            M[offset] = t0;
            M[offset + 1] = t1;
            M[offset + 2] = t2;
            M[offset + 3] = t3;
          },
          keySize: 256 / 32
        });
        C.AES = BlockCipher._createHelper(AES);
      })();
      return CryptoJS2.AES;
    });
  }
});

// node_modules/crypto-js/tripledes.js
var require_tripledes = __commonJS({
  "node_modules/crypto-js/tripledes.js"(exports, module) {
    "use strict";
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      (function() {
        var C = CryptoJS2;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var BlockCipher = C_lib.BlockCipher;
        var C_algo = C.algo;
        var PC1 = [
          57,
          49,
          41,
          33,
          25,
          17,
          9,
          1,
          58,
          50,
          42,
          34,
          26,
          18,
          10,
          2,
          59,
          51,
          43,
          35,
          27,
          19,
          11,
          3,
          60,
          52,
          44,
          36,
          63,
          55,
          47,
          39,
          31,
          23,
          15,
          7,
          62,
          54,
          46,
          38,
          30,
          22,
          14,
          6,
          61,
          53,
          45,
          37,
          29,
          21,
          13,
          5,
          28,
          20,
          12,
          4
        ];
        var PC2 = [
          14,
          17,
          11,
          24,
          1,
          5,
          3,
          28,
          15,
          6,
          21,
          10,
          23,
          19,
          12,
          4,
          26,
          8,
          16,
          7,
          27,
          20,
          13,
          2,
          41,
          52,
          31,
          37,
          47,
          55,
          30,
          40,
          51,
          45,
          33,
          48,
          44,
          49,
          39,
          56,
          34,
          53,
          46,
          42,
          50,
          36,
          29,
          32
        ];
        var BIT_SHIFTS = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
        var SBOX_P = [
          {
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378
          },
          {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672
          },
          {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792
          },
          {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464
          },
          {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040
          },
          {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656
          },
          {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577
          },
          {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848
          }
        ];
        var SBOX_MASK = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ];
        var DES = C_algo.DES = BlockCipher.extend({
          _doReset: function() {
            var key = this._key;
            var keyWords = key.words;
            var keyBits = [];
            for (var i = 0; i < 56; i++) {
              var keyBitPos = PC1[i] - 1;
              keyBits[i] = keyWords[keyBitPos >>> 5] >>> 31 - keyBitPos % 32 & 1;
            }
            var subKeys = this._subKeys = [];
            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
              var subKey = subKeys[nSubKey] = [];
              var bitShift = BIT_SHIFTS[nSubKey];
              for (var i = 0; i < 24; i++) {
                subKey[i / 6 | 0] |= keyBits[(PC2[i] - 1 + bitShift) % 28] << 31 - i % 6;
                subKey[4 + (i / 6 | 0)] |= keyBits[28 + (PC2[i + 24] - 1 + bitShift) % 28] << 31 - i % 6;
              }
              subKey[0] = subKey[0] << 1 | subKey[0] >>> 31;
              for (var i = 1; i < 7; i++) {
                subKey[i] = subKey[i] >>> (i - 1) * 4 + 3;
              }
              subKey[7] = subKey[7] << 5 | subKey[7] >>> 27;
            }
            var invSubKeys = this._invSubKeys = [];
            for (var i = 0; i < 16; i++) {
              invSubKeys[i] = subKeys[15 - i];
            }
          },
          encryptBlock: function(M, offset) {
            this._doCryptBlock(M, offset, this._subKeys);
          },
          decryptBlock: function(M, offset) {
            this._doCryptBlock(M, offset, this._invSubKeys);
          },
          _doCryptBlock: function(M, offset, subKeys) {
            this._lBlock = M[offset];
            this._rBlock = M[offset + 1];
            exchangeLR.call(this, 4, 252645135);
            exchangeLR.call(this, 16, 65535);
            exchangeRL.call(this, 2, 858993459);
            exchangeRL.call(this, 8, 16711935);
            exchangeLR.call(this, 1, 1431655765);
            for (var round = 0; round < 16; round++) {
              var subKey = subKeys[round];
              var lBlock = this._lBlock;
              var rBlock = this._rBlock;
              var f = 0;
              for (var i = 0; i < 8; i++) {
                f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
              }
              this._lBlock = rBlock;
              this._rBlock = lBlock ^ f;
            }
            var t = this._lBlock;
            this._lBlock = this._rBlock;
            this._rBlock = t;
            exchangeLR.call(this, 1, 1431655765);
            exchangeRL.call(this, 8, 16711935);
            exchangeRL.call(this, 2, 858993459);
            exchangeLR.call(this, 16, 65535);
            exchangeLR.call(this, 4, 252645135);
            M[offset] = this._lBlock;
            M[offset + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function exchangeLR(offset, mask) {
          var t = (this._lBlock >>> offset ^ this._rBlock) & mask;
          this._rBlock ^= t;
          this._lBlock ^= t << offset;
        }
        function exchangeRL(offset, mask) {
          var t = (this._rBlock >>> offset ^ this._lBlock) & mask;
          this._lBlock ^= t;
          this._rBlock ^= t << offset;
        }
        C.DES = BlockCipher._createHelper(DES);
        var TripleDES = C_algo.TripleDES = BlockCipher.extend({
          _doReset: function() {
            var key = this._key;
            var keyWords = key.words;
            if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            }
            var key1 = keyWords.slice(0, 2);
            var key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
            var key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);
            this._des1 = DES.createEncryptor(WordArray.create(key1));
            this._des2 = DES.createEncryptor(WordArray.create(key2));
            this._des3 = DES.createEncryptor(WordArray.create(key3));
          },
          encryptBlock: function(M, offset) {
            this._des1.encryptBlock(M, offset);
            this._des2.decryptBlock(M, offset);
            this._des3.encryptBlock(M, offset);
          },
          decryptBlock: function(M, offset) {
            this._des3.decryptBlock(M, offset);
            this._des2.encryptBlock(M, offset);
            this._des1.decryptBlock(M, offset);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        C.TripleDES = BlockCipher._createHelper(TripleDES);
      })();
      return CryptoJS2.TripleDES;
    });
  }
});

// node_modules/crypto-js/rc4.js
var require_rc4 = __commonJS({
  "node_modules/crypto-js/rc4.js"(exports, module) {
    "use strict";
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      (function() {
        var C = CryptoJS2;
        var C_lib = C.lib;
        var StreamCipher = C_lib.StreamCipher;
        var C_algo = C.algo;
        var RC4 = C_algo.RC4 = StreamCipher.extend({
          _doReset: function() {
            var key = this._key;
            var keyWords = key.words;
            var keySigBytes = key.sigBytes;
            var S = this._S = [];
            for (var i = 0; i < 256; i++) {
              S[i] = i;
            }
            for (var i = 0, j = 0; i < 256; i++) {
              var keyByteIndex = i % keySigBytes;
              var keyByte = keyWords[keyByteIndex >>> 2] >>> 24 - keyByteIndex % 4 * 8 & 255;
              j = (j + S[i] + keyByte) % 256;
              var t = S[i];
              S[i] = S[j];
              S[j] = t;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(M, offset) {
            M[offset] ^= generateKeystreamWord.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function generateKeystreamWord() {
          var S = this._S;
          var i = this._i;
          var j = this._j;
          var keystreamWord = 0;
          for (var n = 0; n < 4; n++) {
            i = (i + 1) % 256;
            j = (j + S[i]) % 256;
            var t = S[i];
            S[i] = S[j];
            S[j] = t;
            keystreamWord |= S[(S[i] + S[j]) % 256] << 24 - n * 8;
          }
          this._i = i;
          this._j = j;
          return keystreamWord;
        }
        C.RC4 = StreamCipher._createHelper(RC4);
        var RC4Drop = C_algo.RC4Drop = RC4.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: RC4.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            RC4._doReset.call(this);
            for (var i = this.cfg.drop; i > 0; i--) {
              generateKeystreamWord.call(this);
            }
          }
        });
        C.RC4Drop = StreamCipher._createHelper(RC4Drop);
      })();
      return CryptoJS2.RC4;
    });
  }
});

// node_modules/crypto-js/rabbit.js
var require_rabbit = __commonJS({
  "node_modules/crypto-js/rabbit.js"(exports, module) {
    "use strict";
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      (function() {
        var C = CryptoJS2;
        var C_lib = C.lib;
        var StreamCipher = C_lib.StreamCipher;
        var C_algo = C.algo;
        var S = [];
        var C_ = [];
        var G = [];
        var Rabbit = C_algo.Rabbit = StreamCipher.extend({
          _doReset: function() {
            var K = this._key.words;
            var iv = this.cfg.iv;
            for (var i = 0; i < 4; i++) {
              K[i] = (K[i] << 8 | K[i] >>> 24) & 16711935 | (K[i] << 24 | K[i] >>> 8) & 4278255360;
            }
            var X = this._X = [
              K[0],
              K[3] << 16 | K[2] >>> 16,
              K[1],
              K[0] << 16 | K[3] >>> 16,
              K[2],
              K[1] << 16 | K[0] >>> 16,
              K[3],
              K[2] << 16 | K[1] >>> 16
            ];
            var C2 = this._C = [
              K[2] << 16 | K[2] >>> 16,
              K[0] & 4294901760 | K[1] & 65535,
              K[3] << 16 | K[3] >>> 16,
              K[1] & 4294901760 | K[2] & 65535,
              K[0] << 16 | K[0] >>> 16,
              K[2] & 4294901760 | K[3] & 65535,
              K[1] << 16 | K[1] >>> 16,
              K[3] & 4294901760 | K[0] & 65535
            ];
            this._b = 0;
            for (var i = 0; i < 4; i++) {
              nextState.call(this);
            }
            for (var i = 0; i < 8; i++) {
              C2[i] ^= X[i + 4 & 7];
            }
            if (iv) {
              var IV = iv.words;
              var IV_0 = IV[0];
              var IV_1 = IV[1];
              var i0 = (IV_0 << 8 | IV_0 >>> 24) & 16711935 | (IV_0 << 24 | IV_0 >>> 8) & 4278255360;
              var i2 = (IV_1 << 8 | IV_1 >>> 24) & 16711935 | (IV_1 << 24 | IV_1 >>> 8) & 4278255360;
              var i1 = i0 >>> 16 | i2 & 4294901760;
              var i3 = i2 << 16 | i0 & 65535;
              C2[0] ^= i0;
              C2[1] ^= i1;
              C2[2] ^= i2;
              C2[3] ^= i3;
              C2[4] ^= i0;
              C2[5] ^= i1;
              C2[6] ^= i2;
              C2[7] ^= i3;
              for (var i = 0; i < 4; i++) {
                nextState.call(this);
              }
            }
          },
          _doProcessBlock: function(M, offset) {
            var X = this._X;
            nextState.call(this);
            S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
            S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
            S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
            S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
            for (var i = 0; i < 4; i++) {
              S[i] = (S[i] << 8 | S[i] >>> 24) & 16711935 | (S[i] << 24 | S[i] >>> 8) & 4278255360;
              M[offset + i] ^= S[i];
            }
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function nextState() {
          var X = this._X;
          var C2 = this._C;
          for (var i = 0; i < 8; i++) {
            C_[i] = C2[i];
          }
          C2[0] = C2[0] + 1295307597 + this._b | 0;
          C2[1] = C2[1] + 3545052371 + (C2[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
          C2[2] = C2[2] + 886263092 + (C2[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
          C2[3] = C2[3] + 1295307597 + (C2[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
          C2[4] = C2[4] + 3545052371 + (C2[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
          C2[5] = C2[5] + 886263092 + (C2[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
          C2[6] = C2[6] + 1295307597 + (C2[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
          C2[7] = C2[7] + 3545052371 + (C2[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
          this._b = C2[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
          for (var i = 0; i < 8; i++) {
            var gx = X[i] + C2[i];
            var ga = gx & 65535;
            var gb = gx >>> 16;
            var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
            var gl = ((gx & 4294901760) * gx | 0) + ((gx & 65535) * gx | 0);
            G[i] = gh ^ gl;
          }
          X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
          X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
          X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
          X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
          X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
          X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
          X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
          X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
        }
        C.Rabbit = StreamCipher._createHelper(Rabbit);
      })();
      return CryptoJS2.Rabbit;
    });
  }
});

// node_modules/crypto-js/rabbit-legacy.js
var require_rabbit_legacy = __commonJS({
  "node_modules/crypto-js/rabbit-legacy.js"(exports, module) {
    "use strict";
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      (function() {
        var C = CryptoJS2;
        var C_lib = C.lib;
        var StreamCipher = C_lib.StreamCipher;
        var C_algo = C.algo;
        var S = [];
        var C_ = [];
        var G = [];
        var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
          _doReset: function() {
            var K = this._key.words;
            var iv = this.cfg.iv;
            var X = this._X = [
              K[0],
              K[3] << 16 | K[2] >>> 16,
              K[1],
              K[0] << 16 | K[3] >>> 16,
              K[2],
              K[1] << 16 | K[0] >>> 16,
              K[3],
              K[2] << 16 | K[1] >>> 16
            ];
            var C2 = this._C = [
              K[2] << 16 | K[2] >>> 16,
              K[0] & 4294901760 | K[1] & 65535,
              K[3] << 16 | K[3] >>> 16,
              K[1] & 4294901760 | K[2] & 65535,
              K[0] << 16 | K[0] >>> 16,
              K[2] & 4294901760 | K[3] & 65535,
              K[1] << 16 | K[1] >>> 16,
              K[3] & 4294901760 | K[0] & 65535
            ];
            this._b = 0;
            for (var i = 0; i < 4; i++) {
              nextState.call(this);
            }
            for (var i = 0; i < 8; i++) {
              C2[i] ^= X[i + 4 & 7];
            }
            if (iv) {
              var IV = iv.words;
              var IV_0 = IV[0];
              var IV_1 = IV[1];
              var i0 = (IV_0 << 8 | IV_0 >>> 24) & 16711935 | (IV_0 << 24 | IV_0 >>> 8) & 4278255360;
              var i2 = (IV_1 << 8 | IV_1 >>> 24) & 16711935 | (IV_1 << 24 | IV_1 >>> 8) & 4278255360;
              var i1 = i0 >>> 16 | i2 & 4294901760;
              var i3 = i2 << 16 | i0 & 65535;
              C2[0] ^= i0;
              C2[1] ^= i1;
              C2[2] ^= i2;
              C2[3] ^= i3;
              C2[4] ^= i0;
              C2[5] ^= i1;
              C2[6] ^= i2;
              C2[7] ^= i3;
              for (var i = 0; i < 4; i++) {
                nextState.call(this);
              }
            }
          },
          _doProcessBlock: function(M, offset) {
            var X = this._X;
            nextState.call(this);
            S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
            S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
            S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
            S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
            for (var i = 0; i < 4; i++) {
              S[i] = (S[i] << 8 | S[i] >>> 24) & 16711935 | (S[i] << 24 | S[i] >>> 8) & 4278255360;
              M[offset + i] ^= S[i];
            }
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function nextState() {
          var X = this._X;
          var C2 = this._C;
          for (var i = 0; i < 8; i++) {
            C_[i] = C2[i];
          }
          C2[0] = C2[0] + 1295307597 + this._b | 0;
          C2[1] = C2[1] + 3545052371 + (C2[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
          C2[2] = C2[2] + 886263092 + (C2[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
          C2[3] = C2[3] + 1295307597 + (C2[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
          C2[4] = C2[4] + 3545052371 + (C2[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
          C2[5] = C2[5] + 886263092 + (C2[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
          C2[6] = C2[6] + 1295307597 + (C2[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
          C2[7] = C2[7] + 3545052371 + (C2[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
          this._b = C2[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
          for (var i = 0; i < 8; i++) {
            var gx = X[i] + C2[i];
            var ga = gx & 65535;
            var gb = gx >>> 16;
            var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
            var gl = ((gx & 4294901760) * gx | 0) + ((gx & 65535) * gx | 0);
            G[i] = gh ^ gl;
          }
          X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
          X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
          X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
          X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
          X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
          X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
          X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
          X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
        }
        C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
      })();
      return CryptoJS2.RabbitLegacy;
    });
  }
});

// node_modules/crypto-js/blowfish.js
var require_blowfish = __commonJS({
  "node_modules/crypto-js/blowfish.js"(exports, module) {
    "use strict";
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      (function() {
        var C = CryptoJS2;
        var C_lib = C.lib;
        var BlockCipher = C_lib.BlockCipher;
        var C_algo = C.algo;
        const N = 16;
        const ORIG_P = [
          608135816,
          2242054355,
          320440878,
          57701188,
          2752067618,
          698298832,
          137296536,
          3964562569,
          1160258022,
          953160567,
          3193202383,
          887688300,
          3232508343,
          3380367581,
          1065670069,
          3041331479,
          2450970073,
          2306472731
        ];
        const ORIG_S = [
          [
            3509652390,
            2564797868,
            805139163,
            3491422135,
            3101798381,
            1780907670,
            3128725573,
            4046225305,
            614570311,
            3012652279,
            134345442,
            2240740374,
            1667834072,
            1901547113,
            2757295779,
            4103290238,
            227898511,
            1921955416,
            1904987480,
            2182433518,
            2069144605,
            3260701109,
            2620446009,
            720527379,
            3318853667,
            677414384,
            3393288472,
            3101374703,
            2390351024,
            1614419982,
            1822297739,
            2954791486,
            3608508353,
            3174124327,
            2024746970,
            1432378464,
            3864339955,
            2857741204,
            1464375394,
            1676153920,
            1439316330,
            715854006,
            3033291828,
            289532110,
            2706671279,
            2087905683,
            3018724369,
            1668267050,
            732546397,
            1947742710,
            3462151702,
            2609353502,
            2950085171,
            1814351708,
            2050118529,
            680887927,
            999245976,
            1800124847,
            3300911131,
            1713906067,
            1641548236,
            4213287313,
            1216130144,
            1575780402,
            4018429277,
            3917837745,
            3693486850,
            3949271944,
            596196993,
            3549867205,
            258830323,
            2213823033,
            772490370,
            2760122372,
            1774776394,
            2652871518,
            566650946,
            4142492826,
            1728879713,
            2882767088,
            1783734482,
            3629395816,
            2517608232,
            2874225571,
            1861159788,
            326777828,
            3124490320,
            2130389656,
            2716951837,
            967770486,
            1724537150,
            2185432712,
            2364442137,
            1164943284,
            2105845187,
            998989502,
            3765401048,
            2244026483,
            1075463327,
            1455516326,
            1322494562,
            910128902,
            469688178,
            1117454909,
            936433444,
            3490320968,
            3675253459,
            1240580251,
            122909385,
            2157517691,
            634681816,
            4142456567,
            3825094682,
            3061402683,
            2540495037,
            79693498,
            3249098678,
            1084186820,
            1583128258,
            426386531,
            1761308591,
            1047286709,
            322548459,
            995290223,
            1845252383,
            2603652396,
            3431023940,
            2942221577,
            3202600964,
            3727903485,
            1712269319,
            422464435,
            3234572375,
            1170764815,
            3523960633,
            3117677531,
            1434042557,
            442511882,
            3600875718,
            1076654713,
            1738483198,
            4213154764,
            2393238008,
            3677496056,
            1014306527,
            4251020053,
            793779912,
            2902807211,
            842905082,
            4246964064,
            1395751752,
            1040244610,
            2656851899,
            3396308128,
            445077038,
            3742853595,
            3577915638,
            679411651,
            2892444358,
            2354009459,
            1767581616,
            3150600392,
            3791627101,
            3102740896,
            284835224,
            4246832056,
            1258075500,
            768725851,
            2589189241,
            3069724005,
            3532540348,
            1274779536,
            3789419226,
            2764799539,
            1660621633,
            3471099624,
            4011903706,
            913787905,
            3497959166,
            737222580,
            2514213453,
            2928710040,
            3937242737,
            1804850592,
            3499020752,
            2949064160,
            2386320175,
            2390070455,
            2415321851,
            4061277028,
            2290661394,
            2416832540,
            1336762016,
            1754252060,
            3520065937,
            3014181293,
            791618072,
            3188594551,
            3933548030,
            2332172193,
            3852520463,
            3043980520,
            413987798,
            3465142937,
            3030929376,
            4245938359,
            2093235073,
            3534596313,
            375366246,
            2157278981,
            2479649556,
            555357303,
            3870105701,
            2008414854,
            3344188149,
            4221384143,
            3956125452,
            2067696032,
            3594591187,
            2921233993,
            2428461,
            544322398,
            577241275,
            1471733935,
            610547355,
            4027169054,
            1432588573,
            1507829418,
            2025931657,
            3646575487,
            545086370,
            48609733,
            2200306550,
            1653985193,
            298326376,
            1316178497,
            3007786442,
            2064951626,
            458293330,
            2589141269,
            3591329599,
            3164325604,
            727753846,
            2179363840,
            146436021,
            1461446943,
            4069977195,
            705550613,
            3059967265,
            3887724982,
            4281599278,
            3313849956,
            1404054877,
            2845806497,
            146425753,
            1854211946
          ],
          [
            1266315497,
            3048417604,
            3681880366,
            3289982499,
            290971e4,
            1235738493,
            2632868024,
            2414719590,
            3970600049,
            1771706367,
            1449415276,
            3266420449,
            422970021,
            1963543593,
            2690192192,
            3826793022,
            1062508698,
            1531092325,
            1804592342,
            2583117782,
            2714934279,
            4024971509,
            1294809318,
            4028980673,
            1289560198,
            2221992742,
            1669523910,
            35572830,
            157838143,
            1052438473,
            1016535060,
            1802137761,
            1753167236,
            1386275462,
            3080475397,
            2857371447,
            1040679964,
            2145300060,
            2390574316,
            1461121720,
            2956646967,
            4031777805,
            4028374788,
            33600511,
            2920084762,
            1018524850,
            629373528,
            3691585981,
            3515945977,
            2091462646,
            2486323059,
            586499841,
            988145025,
            935516892,
            3367335476,
            2599673255,
            2839830854,
            265290510,
            3972581182,
            2759138881,
            3795373465,
            1005194799,
            847297441,
            406762289,
            1314163512,
            1332590856,
            1866599683,
            4127851711,
            750260880,
            613907577,
            1450815602,
            3165620655,
            3734664991,
            3650291728,
            3012275730,
            3704569646,
            1427272223,
            778793252,
            1343938022,
            2676280711,
            2052605720,
            1946737175,
            3164576444,
            3914038668,
            3967478842,
            3682934266,
            1661551462,
            3294938066,
            4011595847,
            840292616,
            3712170807,
            616741398,
            312560963,
            711312465,
            1351876610,
            322626781,
            1910503582,
            271666773,
            2175563734,
            1594956187,
            70604529,
            3617834859,
            1007753275,
            1495573769,
            4069517037,
            2549218298,
            2663038764,
            504708206,
            2263041392,
            3941167025,
            2249088522,
            1514023603,
            1998579484,
            1312622330,
            694541497,
            2582060303,
            2151582166,
            1382467621,
            776784248,
            2618340202,
            3323268794,
            2497899128,
            2784771155,
            503983604,
            4076293799,
            907881277,
            423175695,
            432175456,
            1378068232,
            4145222326,
            3954048622,
            3938656102,
            3820766613,
            2793130115,
            2977904593,
            26017576,
            3274890735,
            3194772133,
            1700274565,
            1756076034,
            4006520079,
            3677328699,
            720338349,
            1533947780,
            354530856,
            688349552,
            3973924725,
            1637815568,
            332179504,
            3949051286,
            53804574,
            2852348879,
            3044236432,
            1282449977,
            3583942155,
            3416972820,
            4006381244,
            1617046695,
            2628476075,
            3002303598,
            1686838959,
            431878346,
            2686675385,
            1700445008,
            1080580658,
            1009431731,
            832498133,
            3223435511,
            2605976345,
            2271191193,
            2516031870,
            1648197032,
            4164389018,
            2548247927,
            300782431,
            375919233,
            238389289,
            3353747414,
            2531188641,
            2019080857,
            1475708069,
            455242339,
            2609103871,
            448939670,
            3451063019,
            1395535956,
            2413381860,
            1841049896,
            1491858159,
            885456874,
            4264095073,
            4001119347,
            1565136089,
            3898914787,
            1108368660,
            540939232,
            1173283510,
            2745871338,
            3681308437,
            4207628240,
            3343053890,
            4016749493,
            1699691293,
            1103962373,
            3625875870,
            2256883143,
            3830138730,
            1031889488,
            3479347698,
            1535977030,
            4236805024,
            3251091107,
            2132092099,
            1774941330,
            1199868427,
            1452454533,
            157007616,
            2904115357,
            342012276,
            595725824,
            1480756522,
            206960106,
            497939518,
            591360097,
            863170706,
            2375253569,
            3596610801,
            1814182875,
            2094937945,
            3421402208,
            1082520231,
            3463918190,
            2785509508,
            435703966,
            3908032597,
            1641649973,
            2842273706,
            3305899714,
            1510255612,
            2148256476,
            2655287854,
            3276092548,
            4258621189,
            236887753,
            3681803219,
            274041037,
            1734335097,
            3815195456,
            3317970021,
            1899903192,
            1026095262,
            4050517792,
            356393447,
            2410691914,
            3873677099,
            3682840055
          ],
          [
            3913112168,
            2491498743,
            4132185628,
            2489919796,
            1091903735,
            1979897079,
            3170134830,
            3567386728,
            3557303409,
            857797738,
            1136121015,
            1342202287,
            507115054,
            2535736646,
            337727348,
            3213592640,
            1301675037,
            2528481711,
            1895095763,
            1721773893,
            3216771564,
            62756741,
            2142006736,
            835421444,
            2531993523,
            1442658625,
            3659876326,
            2882144922,
            676362277,
            1392781812,
            170690266,
            3921047035,
            1759253602,
            3611846912,
            1745797284,
            664899054,
            1329594018,
            3901205900,
            3045908486,
            2062866102,
            2865634940,
            3543621612,
            3464012697,
            1080764994,
            553557557,
            3656615353,
            3996768171,
            991055499,
            499776247,
            1265440854,
            648242737,
            3940784050,
            980351604,
            3713745714,
            1749149687,
            3396870395,
            4211799374,
            3640570775,
            1161844396,
            3125318951,
            1431517754,
            545492359,
            4268468663,
            3499529547,
            1437099964,
            2702547544,
            3433638243,
            2581715763,
            2787789398,
            1060185593,
            1593081372,
            2418618748,
            4260947970,
            69676912,
            2159744348,
            86519011,
            2512459080,
            3838209314,
            1220612927,
            3339683548,
            133810670,
            1090789135,
            1078426020,
            1569222167,
            845107691,
            3583754449,
            4072456591,
            1091646820,
            628848692,
            1613405280,
            3757631651,
            526609435,
            236106946,
            48312990,
            2942717905,
            3402727701,
            1797494240,
            859738849,
            992217954,
            4005476642,
            2243076622,
            3870952857,
            3732016268,
            765654824,
            3490871365,
            2511836413,
            1685915746,
            3888969200,
            1414112111,
            2273134842,
            3281911079,
            4080962846,
            172450625,
            2569994100,
            980381355,
            4109958455,
            2819808352,
            2716589560,
            2568741196,
            3681446669,
            3329971472,
            1835478071,
            660984891,
            3704678404,
            4045999559,
            3422617507,
            3040415634,
            1762651403,
            1719377915,
            3470491036,
            2693910283,
            3642056355,
            3138596744,
            1364962596,
            2073328063,
            1983633131,
            926494387,
            3423689081,
            2150032023,
            4096667949,
            1749200295,
            3328846651,
            309677260,
            2016342300,
            1779581495,
            3079819751,
            111262694,
            1274766160,
            443224088,
            298511866,
            1025883608,
            3806446537,
            1145181785,
            168956806,
            3641502830,
            3584813610,
            1689216846,
            3666258015,
            3200248200,
            1692713982,
            2646376535,
            4042768518,
            1618508792,
            1610833997,
            3523052358,
            4130873264,
            2001055236,
            3610705100,
            2202168115,
            4028541809,
            2961195399,
            1006657119,
            2006996926,
            3186142756,
            1430667929,
            3210227297,
            1314452623,
            4074634658,
            4101304120,
            2273951170,
            1399257539,
            3367210612,
            3027628629,
            1190975929,
            2062231137,
            2333990788,
            2221543033,
            2438960610,
            1181637006,
            548689776,
            2362791313,
            3372408396,
            3104550113,
            3145860560,
            296247880,
            1970579870,
            3078560182,
            3769228297,
            1714227617,
            3291629107,
            3898220290,
            166772364,
            1251581989,
            493813264,
            448347421,
            195405023,
            2709975567,
            677966185,
            3703036547,
            1463355134,
            2715995803,
            1338867538,
            1343315457,
            2802222074,
            2684532164,
            233230375,
            2599980071,
            2000651841,
            3277868038,
            1638401717,
            4028070440,
            3237316320,
            6314154,
            819756386,
            300326615,
            590932579,
            1405279636,
            3267499572,
            3150704214,
            2428286686,
            3959192993,
            3461946742,
            1862657033,
            1266418056,
            963775037,
            2089974820,
            2263052895,
            1917689273,
            448879540,
            3550394620,
            3981727096,
            150775221,
            3627908307,
            1303187396,
            508620638,
            2975983352,
            2726630617,
            1817252668,
            1876281319,
            1457606340,
            908771278,
            3720792119,
            3617206836,
            2455994898,
            1729034894,
            1080033504
          ],
          [
            976866871,
            3556439503,
            2881648439,
            1522871579,
            1555064734,
            1336096578,
            3548522304,
            2579274686,
            3574697629,
            3205460757,
            3593280638,
            3338716283,
            3079412587,
            564236357,
            2993598910,
            1781952180,
            1464380207,
            3163844217,
            3332601554,
            1699332808,
            1393555694,
            1183702653,
            3581086237,
            1288719814,
            691649499,
            2847557200,
            2895455976,
            3193889540,
            2717570544,
            1781354906,
            1676643554,
            2592534050,
            3230253752,
            1126444790,
            2770207658,
            2633158820,
            2210423226,
            2615765581,
            2414155088,
            3127139286,
            673620729,
            2805611233,
            1269405062,
            4015350505,
            3341807571,
            4149409754,
            1057255273,
            2012875353,
            2162469141,
            2276492801,
            2601117357,
            993977747,
            3918593370,
            2654263191,
            753973209,
            36408145,
            2530585658,
            25011837,
            3520020182,
            2088578344,
            530523599,
            2918365339,
            1524020338,
            1518925132,
            3760827505,
            3759777254,
            1202760957,
            3985898139,
            3906192525,
            674977740,
            4174734889,
            2031300136,
            2019492241,
            3983892565,
            4153806404,
            3822280332,
            352677332,
            2297720250,
            60907813,
            90501309,
            3286998549,
            1016092578,
            2535922412,
            2839152426,
            457141659,
            509813237,
            4120667899,
            652014361,
            1966332200,
            2975202805,
            55981186,
            2327461051,
            676427537,
            3255491064,
            2882294119,
            3433927263,
            1307055953,
            942726286,
            933058658,
            2468411793,
            3933900994,
            4215176142,
            1361170020,
            2001714738,
            2830558078,
            3274259782,
            1222529897,
            1679025792,
            2729314320,
            3714953764,
            1770335741,
            151462246,
            3013232138,
            1682292957,
            1483529935,
            471910574,
            1539241949,
            458788160,
            3436315007,
            1807016891,
            3718408830,
            978976581,
            1043663428,
            3165965781,
            1927990952,
            4200891579,
            2372276910,
            3208408903,
            3533431907,
            1412390302,
            2931980059,
            4132332400,
            1947078029,
            3881505623,
            4168226417,
            2941484381,
            1077988104,
            1320477388,
            886195818,
            18198404,
            3786409e3,
            2509781533,
            112762804,
            3463356488,
            1866414978,
            891333506,
            18488651,
            661792760,
            1628790961,
            3885187036,
            3141171499,
            876946877,
            2693282273,
            1372485963,
            791857591,
            2686433993,
            3759982718,
            3167212022,
            3472953795,
            2716379847,
            445679433,
            3561995674,
            3504004811,
            3574258232,
            54117162,
            3331405415,
            2381918588,
            3769707343,
            4154350007,
            1140177722,
            4074052095,
            668550556,
            3214352940,
            367459370,
            261225585,
            2610173221,
            4209349473,
            3468074219,
            3265815641,
            314222801,
            3066103646,
            3808782860,
            282218597,
            3406013506,
            3773591054,
            379116347,
            1285071038,
            846784868,
            2669647154,
            3771962079,
            3550491691,
            2305946142,
            453669953,
            1268987020,
            3317592352,
            3279303384,
            3744833421,
            2610507566,
            3859509063,
            266596637,
            3847019092,
            517658769,
            3462560207,
            3443424879,
            370717030,
            4247526661,
            2224018117,
            4143653529,
            4112773975,
            2788324899,
            2477274417,
            1456262402,
            2901442914,
            1517677493,
            1846949527,
            2295493580,
            3734397586,
            2176403920,
            1280348187,
            1908823572,
            3871786941,
            846861322,
            1172426758,
            3287448474,
            3383383037,
            1655181056,
            3139813346,
            901632758,
            1897031941,
            2986607138,
            3066810236,
            3447102507,
            1393639104,
            373351379,
            950779232,
            625454576,
            3124240540,
            4148612726,
            2007998917,
            544563296,
            2244738638,
            2330496472,
            2058025392,
            1291430526,
            424198748,
            50039436,
            29584100,
            3605783033,
            2429876329,
            2791104160,
            1057563949,
            3255363231,
            3075367218,
            3463963227,
            1469046755,
            985887462
          ]
        ];
        var BLOWFISH_CTX = {
          pbox: [],
          sbox: []
        };
        function F(ctx, x) {
          let a = x >> 24 & 255;
          let b = x >> 16 & 255;
          let c = x >> 8 & 255;
          let d = x & 255;
          let y = ctx.sbox[0][a] + ctx.sbox[1][b];
          y = y ^ ctx.sbox[2][c];
          y = y + ctx.sbox[3][d];
          return y;
        }
        function BlowFish_Encrypt(ctx, left, right) {
          let Xl = left;
          let Xr = right;
          let temp;
          for (let i = 0; i < N; ++i) {
            Xl = Xl ^ ctx.pbox[i];
            Xr = F(ctx, Xl) ^ Xr;
            temp = Xl;
            Xl = Xr;
            Xr = temp;
          }
          temp = Xl;
          Xl = Xr;
          Xr = temp;
          Xr = Xr ^ ctx.pbox[N];
          Xl = Xl ^ ctx.pbox[N + 1];
          return { left: Xl, right: Xr };
        }
        function BlowFish_Decrypt(ctx, left, right) {
          let Xl = left;
          let Xr = right;
          let temp;
          for (let i = N + 1; i > 1; --i) {
            Xl = Xl ^ ctx.pbox[i];
            Xr = F(ctx, Xl) ^ Xr;
            temp = Xl;
            Xl = Xr;
            Xr = temp;
          }
          temp = Xl;
          Xl = Xr;
          Xr = temp;
          Xr = Xr ^ ctx.pbox[1];
          Xl = Xl ^ ctx.pbox[0];
          return { left: Xl, right: Xr };
        }
        function BlowFishInit(ctx, key, keysize) {
          for (let Row = 0; Row < 4; Row++) {
            ctx.sbox[Row] = [];
            for (let Col = 0; Col < 256; Col++) {
              ctx.sbox[Row][Col] = ORIG_S[Row][Col];
            }
          }
          let keyIndex = 0;
          for (let index = 0; index < N + 2; index++) {
            ctx.pbox[index] = ORIG_P[index] ^ key[keyIndex];
            keyIndex++;
            if (keyIndex >= keysize) {
              keyIndex = 0;
            }
          }
          let Data1 = 0;
          let Data2 = 0;
          let res = 0;
          for (let i = 0; i < N + 2; i += 2) {
            res = BlowFish_Encrypt(ctx, Data1, Data2);
            Data1 = res.left;
            Data2 = res.right;
            ctx.pbox[i] = Data1;
            ctx.pbox[i + 1] = Data2;
          }
          for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 256; j += 2) {
              res = BlowFish_Encrypt(ctx, Data1, Data2);
              Data1 = res.left;
              Data2 = res.right;
              ctx.sbox[i][j] = Data1;
              ctx.sbox[i][j + 1] = Data2;
            }
          }
          return true;
        }
        var Blowfish = C_algo.Blowfish = BlockCipher.extend({
          _doReset: function() {
            if (this._keyPriorReset === this._key) {
              return;
            }
            var key = this._keyPriorReset = this._key;
            var keyWords = key.words;
            var keySize = key.sigBytes / 4;
            BlowFishInit(BLOWFISH_CTX, keyWords, keySize);
          },
          encryptBlock: function(M, offset) {
            var res = BlowFish_Encrypt(BLOWFISH_CTX, M[offset], M[offset + 1]);
            M[offset] = res.left;
            M[offset + 1] = res.right;
          },
          decryptBlock: function(M, offset) {
            var res = BlowFish_Decrypt(BLOWFISH_CTX, M[offset], M[offset + 1]);
            M[offset] = res.left;
            M[offset + 1] = res.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        C.Blowfish = BlockCipher._createHelper(Blowfish);
      })();
      return CryptoJS2.Blowfish;
    });
  }
});

// node_modules/crypto-js/index.js
var require_crypto_js = __commonJS({
  "node_modules/crypto-js/index.js"(exports, module) {
    "use strict";
    (function(root, factory, undef) {
      if (typeof exports === "object") {
        module.exports = exports = factory(require_core(), require_x64_core(), require_lib_typedarrays(), require_enc_utf16(), require_enc_base64(), require_enc_base64url(), require_md5(), require_sha1(), require_sha256(), require_sha224(), require_sha512(), require_sha384(), require_sha3(), require_ripemd160(), require_hmac(), require_pbkdf2(), require_evpkdf(), require_cipher_core(), require_mode_cfb(), require_mode_ctr(), require_mode_ctr_gladman(), require_mode_ofb(), require_mode_ecb(), require_pad_ansix923(), require_pad_iso10126(), require_pad_iso97971(), require_pad_zeropadding(), require_pad_nopadding(), require_format_hex(), require_aes(), require_tripledes(), require_rc4(), require_rabbit(), require_rabbit_legacy(), require_blowfish());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./x64-core", "./lib-typedarrays", "./enc-utf16", "./enc-base64", "./enc-base64url", "./md5", "./sha1", "./sha256", "./sha224", "./sha512", "./sha384", "./sha3", "./ripemd160", "./hmac", "./pbkdf2", "./evpkdf", "./cipher-core", "./mode-cfb", "./mode-ctr", "./mode-ctr-gladman", "./mode-ofb", "./mode-ecb", "./pad-ansix923", "./pad-iso10126", "./pad-iso97971", "./pad-zeropadding", "./pad-nopadding", "./format-hex", "./aes", "./tripledes", "./rc4", "./rabbit", "./rabbit-legacy", "./blowfish"], factory);
      } else {
        root.CryptoJS = factory(root.CryptoJS);
      }
    })(exports, function(CryptoJS2) {
      return CryptoJS2;
    });
  }
});

// src/app/services/og-wallet/og-wallet.service.ts
var import_new_proto = __toESM(require_new_proto());
var OgWalletService = class _OgWalletService {
  api = inject(AppInterfaceService);
  session = inject(ClientSessionService);
  logger = inject(LoggerService);
  http = inject(HttpClient);
  /** 貨幣符號對應圖示檔名的對照表, 對應 CDN 上 system/Info/CurrencyIconTable.json */
  _currencyIconTable = signal(null);
  /** 貨幣圖示的遠端網址, 若查無對應圖示則為 null */
  currencyIconUrl = computed(() => {
    const symbol = this.api.currencySymbol();
    const iconName = symbol ? this._currencyIconTable()?.[symbol] : null;
    return iconName ? `${this.session.assetUrl}/system/Info/currency_icon/${iconName}.png` : null;
  });
  /** 使用者目前的餘額 (實際server回傳的, 給service判斷用的) */
  balance = signal(0);
  /** 顯示給玩家看的餘額 (顯示在UI上的, 讓其他component參考的)*/
  _displayBalance = signal(0);
  /** 顯示給玩家看的餘額 (顯示在UI上的, 讓其他component參考的)*/
  displayBalance = this._displayBalance.asReadonly();
  /** 使用者目前的下注金額 */
  _betAmount = signal(0);
  /** 使用者目前的下注金額 */
  betAmount = this._betAmount.asReadonly();
  /** 使用者目前的下注階層 */
  _betLevel = signal([]);
  /** 使用者目前的下注階層 */
  betLevel = this._betLevel.asReadonly();
  /** 使用者目前的下注間隔 */
  betInterval = computed(() => {
    const bet = this._betAmount();
    const level = this.betLevel().find((l) => bet >= l.min && bet <= l.max);
    return level?.interval ?? 0;
  });
  _rtp = signal("");
  /** 使用者目前的RTP */
  rtp = this._rtp.asReadonly();
  _decimalPlaces = signal(3);
  /** Server指定的金額小數位數 */
  decimalPlaces = this._decimalPlaces.asReadonly();
  /** 使用者目前的最小下注金額 */
  minBet = computed(() => {
    const levels = this.betLevel();
    if (levels.length === 0)
      return 0;
    return levels[0].min;
  });
  /** 允許的種子字元模式 (僅允許英文字母和數字) */
  seedAllowedCharacterPattern = /^[A-Za-z0-9]$/;
  // OG遊戲的serverSeedHash, clientSeed, nonce, 這些值會在登入時由server傳給client, 並且在每次下注時都要帶回給server
  serverSeedHash = signal("");
  nextServerSeedHash = signal("");
  clientSeed = signal("");
  nextClientSeed = signal("");
  nonce = signal(0);
  /** Fairness UI 顯示目前使用中的種子配對資料 */
  activeServerSeedHash = this.serverSeedHash.asReadonly();
  activeClientSeed = this.clientSeed.asReadonly();
  activeNonce = this.nonce.asReadonly();
  displayedNextServerSeedHash = this.nextServerSeedHash.asReadonly();
  /** Fairness UI 顯示下一個要使用的clientSeed */
  displayedNextClientSeed = this.nextClientSeed.asReadonly();
  /** Sever回傳的spin event 結構 */
  spinResultEventSubject = new Subject();
  /** Sever回傳的spin event 結構 */
  get spinResultEvent$() {
    return this.spinResultEventSubject.asObservable();
  }
  seedChangedSubject = new Subject();
  get seedChanged$() {
    return this.seedChangedSubject.asObservable();
  }
  constructor() {
    effect(() => {
      const result = this.api.loginResult();
      untracked(() => {
        if (result)
          this.onLoginResult(result);
      });
    });
    this.api.spinResult$.subscribe((result) => {
      this.onSpinResult(result);
    });
    this.api.changedSeed$.pipe(delay(1e3)).subscribe((result) => {
      this.onChangeClientSeedResult(result);
    });
    this.fetchCurrencyIconTable();
  }
  /** 從CDN讀取貨幣符號對應圖示檔名的對照表 */
  fetchCurrencyIconTable() {
    const url = `${this.session.assetUrl}/system/Info/CurrencyIconTable.json`;
    this.http.get(url).subscribe({
      next: (table) => {
        this._currencyIconTable.set(table);
      },
      error: () => {
        this._currencyIconTable.set(null);
      }
    });
  }
  onLoginResult(result) {
    this.balance.set(calc.s2c(result?.note?.balance || 0));
    this._displayBalance.set(this.balance());
    const betLevel = result?.note?.bet_level;
    this.processBetLevel(betLevel);
    this._betAmount.set(this.minBet());
    this._rtp.set(result?.note?.game_rtp || "");
    this._decimalPlaces.set(result?.note?.decimalplaces ?? 3);
    this.serverSeedHash.set(result?.note?.active_server_seed_hash || "");
    this.clientSeed.set(result?.note?.active_client_seed || "");
    this.nonce.set(result?.note?.active_nonce || 0);
    this.nextServerSeedHash.set(result?.note?.next_server_seed_hash || "");
    this.nextClientSeed.set(this.generateRandomString(16));
  }
  processBetLevel(stringArray) {
    if (!stringArray)
      return;
    const betLevel = stringArray.map((entry) => {
      const [range, interval] = entry.split(",");
      const [min, max] = range.split("-");
      return { min: calc.s2c(Number(min)), max: calc.s2c(Number(max)), interval: calc.s2c(Number(interval)) };
    });
    betLevel.sort((a, b) => a.min - b.min);
    this._betLevel.set(betLevel);
  }
  /** 設定顯示給玩家看的餘額 */
  setDisplayBalance(value) {
    this._displayBalance.set(value);
  }
  /** 設定顯示給玩家看的餘額為目前的餘額 */
  setFinalBalance() {
    this._displayBalance.set(this.balance());
  }
  /** 設定下注金額, 如果不合法會自動修正成合法的下注金額 */
  setBet(value) {
    if (isNaN(value) || value < 0) {
      value = 0;
    }
    let bet = value;
    if (!this.isValidBet(bet)) {
      const corrected = this.correctBet(bet);
      if (corrected === null) {
        this._betAmount.set(this._betAmount());
        return false;
      }
      bet = corrected;
    }
    this._betAmount.set(bet);
    return true;
  }
  /** 檢查下注金額是否合法 */
  isValidBet(value) {
    return this.betLevel().some((level) => value >= level.min && value <= level.max && new decimal_default(value).mod(level.interval).isZero());
  }
  /** 依照最接近的betLevel, 將value修正成合法的下注金額(捨去interval餘數並限制在min-max內) */
  correctBet(value) {
    const levels = this.betLevel();
    if (levels.length === 0)
      return null;
    const level = levels.find((l) => value >= l.min && value <= l.max) ?? (value < levels[0].min ? levels[0] : levels[levels.length - 1]);
    const clamped = decimal_default.min(decimal_default.max(value, level.min), level.max);
    const steps = clamped.div(level.interval).floor();
    return decimal_default.max(steps.mul(level.interval), level.min).toNumber();
  }
  /** 發送下注請求
   * @param gameString 帶入遊戲下注資訊
   * @param inputBet 覆蓋目前 BetAmount
   */
  sendSpinRequest(note, inputBet) {
    try {
      const bet = inputBet ?? this._betAmount();
      const spinData = import_new_proto.serverProto.spin.create();
      spinData.bet = Math.floor(calc.c2s(bet ?? 0));
      note.game_rtp = this.rtp();
      note.server_seed_hash = this.serverSeedHash();
      note.client_seed = this.clientSeed();
      note.nonce = this.nonce();
      this.logger.ogLog("sendSpinRequest note:", note);
      spinData.note = JSON.stringify(note);
      const spin = new SpinRequest();
      spin.data = spinData;
      this.api.sendPack(spin.pack);
      return true;
    } catch (error) {
      this.logger.ogLog("sendSpinRequest error:", error);
      return false;
    }
  }
  onSpinResult(result) {
    this.balance.set(calc.s2c(result.data.balance || 0));
    let eventString = "{}";
    const plates = result.data.mainGame?.plate;
    if (plates && plates.length > 0) {
      eventString = plates[0].event || "{}";
    } else {
      return;
    }
    const event = safeParse(eventString);
    this.nonce.set(event.nonce);
    timer(50).subscribe(() => this.spinResultEventSubject.next(event));
  }
  /** 把nextClientSeed設為新的clientSeed */
  changeClientSeed(seed) {
    if (seed.length < 1 || seed.length > 64) {
      this.logger.ogLog("changeClientSeed error: seed length must be 1~64");
      return;
    }
    this.api.sendInfoMsgNostringify("ChangeSeed", seed);
  }
  /** 處理更換種子(ChangeSeed)結果, 更新目前使用中的種子配對, 並重新產生下一組nextClientSeed */
  onChangeClientSeedResult(result) {
    if (result.error) {
      this.logger.ogLog("onChangeClientSeedResult error:", result.error);
      return;
    }
    this.nextClientSeed.set(this.generateRandomString(16));
    this.serverSeedHash.set(result.active_server_seed_hash);
    this.clientSeed.set(result.active_client_seed);
    this.nonce.set(result.active_nonce);
    this.nextServerSeedHash.set(result.next_server_seed_hash);
    this.seedChangedSubject.next(result);
  }
  //產生英數隨機字串.
  generateRandomString(length) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }
  static \u0275fac = function OgWalletService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OgWalletService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OgWalletService, factory: _OgWalletService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OgWalletService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/components/ap-og-input-bet/ap-og-input-bet.component.ts
var ApOgInputBetComponent = class _ApOgInputBetComponent {
  // Services
  appI18n = inject(AppI18nService);
  // Inputs
  value = input(0);
  betLevel = input([]);
  disabled = input(false);
  label = input(void 0);
  placeholder = input(void 0);
  currencyImage = input(null);
  // signal
  /** 目前的BetString, 因為對於input box而言, 1跟1.0是不同的字串, 為了觸發正確的更新, 必須使用字串 */
  betString = signal("0");
  /** 當Bet數值改變時觸發, 會控制在最小與最大下注金額之間 */
  betChanged = output();
  constructor() {
    effect(() => {
      const value = this.value();
      this.betString.set(this.formatBet(value));
    });
  }
  ngOnInit() {
  }
  /** 計算最終的 disabled 狀態 */
  computedDisabled = computed(() => {
    if (this.disabled()) {
      return true;
    }
    if (!this.betLevel() || this.betLevel().length === 0) {
      return true;
    }
    return false;
  });
  /** 計算最小下注金額 */
  minBet = computed(() => {
    const levels = this.betLevel();
    if (levels.length === 0)
      return 0;
    return levels[0].min;
  });
  /** 計算最大下注金額 */
  maxBet = computed(() => {
    const levels = this.betLevel();
    if (levels.length === 0)
      return 0;
    return levels[levels.length - 1].max;
  });
  /** Bet的間隔 */
  interval = computed(() => {
    const bet = this.bet();
    const level = this.betLevel().find((l) => bet >= l.min && bet <= l.max);
    return level?.interval ?? 0;
  });
  /** 小數點位數 */
  decimalPlaces = computed(() => {
    const interval = this.interval();
    return interval > 0 ? Math.max(0, -Math.floor(Math.log10(interval))) : 0;
  });
  /** 目前的BetString轉數字bet, */
  bet = computed(() => {
    const betString = this.betString();
    const bet = this.correctBet(parseFloat(betString)) ?? this.minBet();
    return bet;
  });
  inputLabel = computed(() => this.label() ?? this.appI18n.instant("og_bet_info_betAmount", "Bet Amount"));
  rawInputPlaceholder = computed(() => this.placeholder() ?? "0.000");
  halfLabel = computed(() => this.appI18n.instant("og_bet_info_half", "1/2"));
  doubleLabel = computed(() => this.appI18n.instant("og_bet_info_2x", "2x"));
  maxLabel = computed(() => this.appI18n.instant("og_bet_info_max", "Max"));
  onBlur(value) {
    const numericValue = Number(value);
    const correctedValue = this.correctBet(numericValue);
    this.betString.set(this.formatBet(correctedValue || this.minBet()));
    this.betChanged.emit(this.bet());
  }
  onHalfBet() {
    const bet = this.bet() / 2;
    const correctedValue = this.correctBet(bet);
    this.betString.set(this.formatBet(correctedValue || this.minBet()));
    this.betChanged.emit(this.bet());
  }
  onDoubleBet() {
    const bet = this.bet() * 2;
    const correctedValue = this.correctBet(bet);
    this.betString.set(this.formatBet(correctedValue || this.minBet()));
    this.betChanged.emit(this.bet());
  }
  onMaxBet() {
    this.betString.set(this.formatBet(this.maxBet()));
    this.betChanged.emit(this.bet());
  }
  onInputChanged(value) {
    this.betString.set(value);
  }
  onIncreased(value) {
    this.betString.set(value);
    this.betChanged.emit(this.bet());
  }
  onDecreased(value) {
    this.betString.set(value);
    this.betChanged.emit(this.bet());
  }
  /** 找出value所屬的betLevel */
  findLevel(value) {
    return this.betLevel().find((l) => value >= l.min && value <= l.max) ?? null;
  }
  correctBet(value) {
    if (isNaN(Number(value)) || Number(value) <= 0) {
      return this.minBet();
    }
    if (value < this.minBet()) {
      return this.minBet();
    }
    if (value > this.maxBet()) {
      return this.maxBet();
    }
    if (this.betLevel().length === 0)
      return null;
    const level = this.findLevel(value);
    if (!level)
      return null;
    return new decimal_default(value).div(level.interval).floor().mul(level.interval).toNumber();
  }
  /** 依照value自己所屬betLevel的interval, 格式化成正確的小數位數字串 */
  formatBet(value) {
    const level = this.findLevel(value) ?? this.betLevel()[0];
    const interval = level?.interval ?? 0;
    const decimalPlaces = interval > 0 ? Math.max(0, -Math.floor(Math.log10(interval))) : 0;
    return value.toFixed(decimalPlaces);
  }
  static \u0275fac = function ApOgInputBetComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApOgInputBetComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApOgInputBetComponent, selectors: [["ap-og-input-bet"]], inputs: { value: [1, "value"], betLevel: [1, "betLevel"], disabled: [1, "disabled"], label: [1, "label"], placeholder: [1, "placeholder"], currencyImage: [1, "currencyImage"] }, outputs: { betChanged: "betChanged" }, decls: 6, vars: 12, consts: [[1, "grid", "grid-cols-18", "gap-2", "items-end"], ["type", "number", 1, "col-span-9", "min-w-0", 3, "blur", "increase", "decrease", "onInput", "accentColor", "label", "currencyImage", "value", "disabled", "step"], [1, "col-span-9", "grid", "grid-cols-[max-content_max-content_minmax(0,1fr)]", "gap-1.5"], ["accentColor", "slate", 1, "[&>button]:px-2.5", "[&>button_.ap-button-label]:whitespace-nowrap", 3, "clicked", "label", "disabled"], ["accentColor", "slate", 1, "w-full", "[&>button]:w-full", "[&>button_.ap-button-label]:whitespace-nowrap", 3, "clicked", "label", "disabled"]], template: function ApOgInputBetComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "ap-input-box", 1);
      \u0275\u0275listener("blur", function ApOgInputBetComponent_Template_ap_input_box_blur_1_listener($event) {
        return ctx.onBlur($event);
      })("increase", function ApOgInputBetComponent_Template_ap_input_box_increase_1_listener($event) {
        return ctx.onIncreased($event);
      })("decrease", function ApOgInputBetComponent_Template_ap_input_box_decrease_1_listener($event) {
        return ctx.onDecreased($event);
      })("onInput", function ApOgInputBetComponent_Template_ap_input_box_onInput_1_listener($event) {
        return ctx.onInputChanged($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 2)(3, "ap-button", 3);
      \u0275\u0275listener("clicked", function ApOgInputBetComponent_Template_ap_button_clicked_3_listener() {
        return ctx.onHalfBet();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ap-button", 3);
      \u0275\u0275listener("clicked", function ApOgInputBetComponent_Template_ap_button_clicked_4_listener() {
        return ctx.onDoubleBet();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "ap-button", 4);
      \u0275\u0275listener("clicked", function ApOgInputBetComponent_Template_ap_button_clicked_5_listener() {
        return ctx.onMaxBet();
      });
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("accentColor", "slate")("label", ctx.inputLabel())("currencyImage", ctx.currencyImage())("value", ctx.betString())("disabled", ctx.computedDisabled())("step", ctx.interval());
      \u0275\u0275advance(2);
      \u0275\u0275property("label", ctx.halfLabel())("disabled", ctx.computedDisabled());
      \u0275\u0275advance();
      \u0275\u0275property("label", ctx.doubleLabel())("disabled", ctx.computedDisabled());
      \u0275\u0275advance();
      \u0275\u0275property("label", ctx.maxLabel())("disabled", ctx.computedDisabled());
    }
  }, dependencies: [ApInputBox, ApButtonComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=ap-og-input-bet.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApOgInputBetComponent, [{
    type: Component,
    args: [{ selector: "ap-og-input-bet", standalone: true, imports: [ApInputBox, ApButtonComponent], template: `<div class="grid grid-cols-18 gap-2 items-end">
  <ap-input-box
    class="col-span-9 min-w-0"
    type="number"
    [accentColor]="'slate'"
    [label]="inputLabel()"
    [currencyImage]="currencyImage()"
    [value]="betString()"
    [disabled]="computedDisabled()"
    [step]="interval()"
    (blur)="onBlur($event)"
    (increase)="onIncreased($event)"
    (decrease)="onDecreased($event)"
    (onInput)="onInputChanged($event)"
  />
  <div
    class="col-span-9 grid grid-cols-[max-content_max-content_minmax(0,1fr)] gap-1.5"
  >
    <ap-button
      class="[&>button]:px-2.5 [&>button_.ap-button-label]:whitespace-nowrap"
      [label]="halfLabel()"
      accentColor="slate"
      [disabled]="computedDisabled()"
      (clicked)="onHalfBet()"
    />
    <ap-button
      class="[&>button]:px-2.5 [&>button_.ap-button-label]:whitespace-nowrap"
      [label]="doubleLabel()"
      accentColor="slate"
      [disabled]="computedDisabled()"
      (clicked)="onDoubleBet()"
    />
    <ap-button
      class="w-full [&>button]:w-full [&>button_.ap-button-label]:whitespace-nowrap"
      [label]="maxLabel()"
      accentColor="slate"
      [disabled]="computedDisabled()"
      (clicked)="onMaxBet()"
    />
  </div>
</div>
`, styles: ["/* src/app/components/ap-og-input-bet/ap-og-input-bet.component.css */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=ap-og-input-bet.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApOgInputBetComponent, { className: "ApOgInputBetComponent", filePath: "src/app/components/ap-og-input-bet/ap-og-input-bet.component.ts", lineNumber: 16 });
})();

// src/app/components/ap-info-guide-og/ap-info-guide-og.component.ts
function ApInfoGuideOGComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "ap-og-input-bet", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.previewBetValue())("betLevel", ctx_r0.previewBetLevel())("currencyImage", ctx_r0.currencyImage() || "assets/images/currency/img_coin_DEMO.svg");
  }
}
function ApInfoGuideOGComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "ap-og-input", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("type", ctx_r0.imageType())("tabItems", ctx_r0.previewTabItems())("value", ctx_r0.previewValue())("selectedTab", ctx_r0.previewSelectedTab());
  }
}
function ApInfoGuideOGComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.getItem2());
  }
}
var INPUT_PREVIEW_CONFIG = {
  modeTab: {
    value: "manual",
    selectedTab: "manual"
  },
  onWin: {
    tabItems: [
      { id: "reset", label: { key: "og_autobet_reset", fallback: "Reset" } },
      {
        id: "increase by",
        label: { key: "og_autobet_add", fallback: "Increase by:" }
      }
    ],
    value: "0.0",
    selectedTab: "increase by"
  },
  onLoss: {
    tabItems: [
      { id: "reset", label: { key: "og_autobet_reset", fallback: "Reset" } },
      {
        id: "increase by",
        label: { key: "og_autobet_add", fallback: "Increase by:" }
      }
    ],
    value: "0.0",
    selectedTab: "increase by"
  },
  difficulty: {
    value: "easy"
  },
  autoCashOut: {
    value: "5"
  }
};
var ApInfoGuideOGComponent = class _ApInfoGuideOGComponent {
  appI18n = inject(AppI18nService);
  title = input("Title");
  getItem1 = input("Item 1");
  getItem2 = input("Item 2");
  variant = input("default");
  image = input(null);
  currencyImage = input(null);
  isBetAmount = computed(() => this.image() === "betAmount");
  imageType = computed(() => {
    const img = this.image();
    return img && ORIGINAL_BOTTOM_PANEL_INPUT_TYPES.has(img) ? img : void 0;
  });
  imageUrl = computed(() => {
    const img = this.image();
    return img && !this.isBetAmount() && !ORIGINAL_BOTTOM_PANEL_INPUT_TYPES.has(img) ? img : void 0;
  });
  previewBetLevel = computed(() => [
    { min: 0.1, max: 100, interval: 0.1 }
  ]);
  previewBetValue = computed(() => 1);
  previewConfig = computed(() => {
    const type = this.imageType();
    return (type && INPUT_PREVIEW_CONFIG[type]) ?? {};
  });
  previewTabItems = computed(() => {
    const previewTabs = this.previewConfig().tabItems;
    if (previewTabs) {
      return previewTabs.map((tab) => ({
        id: tab.id,
        label: this.appI18n.instant(tab.label.key, tab.label.fallback)
      }));
    }
    const type = this.imageType();
    const options = type ? INPUT_TYPE_CONFIG[type].options : null;
    return (options ?? []).map((option) => ({
      id: option.value,
      label: option.labelKey ? this.appI18n.instant(option.labelKey, option.label) : option.label
    }));
  });
  previewValue = computed(() => {
    return this.previewConfig().value ?? "0.1";
  });
  previewSelectedTab = computed(() => {
    return this.previewConfig().selectedTab ?? "";
  });
  static \u0275fac = function ApInfoGuideOGComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApInfoGuideOGComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApInfoGuideOGComponent, selectors: [["ap-info-guide-og"]], inputs: { title: [1, "title"], getItem1: [1, "getItem1"], getItem2: [1, "getItem2"], variant: [1, "variant"], image: [1, "image"], currencyImage: [1, "currencyImage"] }, decls: 11, vars: 4, consts: [[1, "flex-col", "items-start", "gap-4", "p-4"], [1, "flex-shrink-0"], [1, "bg-zinc-950", "rounded-md", "p-2"], [1, "flex-1", "pt-1"], [1, "text-slate-400", "mb-1", "uppercase"], [1, "space-y-2", "list-none", "text-slate-300"], [1, "mx-auto", "block", 3, "value", "betLevel", "currencyImage"], [1, "mx-auto", 3, "type", "tabItems", "value", "selectedTab"]], template: function ApInfoGuideOGComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275conditionalCreate(2, ApInfoGuideOGComponent_Conditional_2_Template, 2, 3, "div", 2)(3, ApInfoGuideOGComponent_Conditional_3_Template, 2, 4, "div", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "h4", 4);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "ul", 5)(8, "li");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(10, ApInfoGuideOGComponent_Conditional_10_Template, 2, 1, "li");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isBetAmount() ? 2 : ctx.imageType() ? 3 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.title(), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.getItem1());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.getItem2() ? 10 : -1);
    }
  }, dependencies: [CommonModule, ApOgInputComponent, ApOgInputBetComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApInfoGuideOGComponent, [{
    type: Component,
    args: [{ selector: "ap-info-guide-og", imports: [CommonModule, ApOgInputComponent, ApOgInputBetComponent], template: `<div class="flex-col items-start gap-4 p-4">
  <div class="flex-shrink-0">
    @if (isBetAmount()) {
      <div class="bg-zinc-950 rounded-md p-2">
        <ap-og-input-bet
          class="mx-auto block"
          [value]="previewBetValue()"
          [betLevel]="previewBetLevel()"
          [currencyImage]="currencyImage() || 'assets/images/currency/img_coin_DEMO.svg'"
        />
      </div>
    } @else if (imageType()) {
      <div class="bg-zinc-950 rounded-md p-2">
        <ap-og-input
          class="mx-auto"
          [type]="imageType()!"
          [tabItems]="previewTabItems()"
          [value]="previewValue()"
          [selectedTab]="previewSelectedTab()"
        />
      </div>
    }
  </div>
  <div class="flex-1 pt-1">
    <h4 class="text-slate-400 mb-1 uppercase">
      {{ title() }}
    </h4>
    <ul class="space-y-2 list-none text-slate-300">
      <li>{{ getItem1() }}</li>
      @if (getItem2()) {
        <li>{{ getItem2() }}</li>
      }
    </ul>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApInfoGuideOGComponent, { className: "ApInfoGuideOGComponent", filePath: "src/app/components/ap-info-guide-og/ap-info-guide-og.component.ts", lineNumber: 69 });
})();

// src/app/pages/info-og/info-og.data.ts
var featureItems = [
  {
    descriptionKey: "info_feature_0",
    descriptionFallback: "Each difficulty level features a different maximum number of stages, multiplier progression, and maximum payout multiplier. Easy, Normal, Hard, and Expert have a maximum of 28, 24, 20, and 16 stages respectively, with maximum payout multipliers of 23.24x, 2,487.69x, 20,000.00x, and 181,060.88x respectively."
  },
  {
    descriptionKey: "info_feature_1",
    descriptionFallback: "Place your bet and tap Bet to start the game. Tap Go to move the Chicken forward. Each successful move increases the current multiplier. After each successful move, you may choose to Cash Out and collect the current payout or continue playing for a chance to win a higher multiplier. If the Chicken is defeated before Cash Out, the game ends without a payout. Reach the finish line to win the highest multiplier available for the selected difficulty."
  },
  {
    descriptionKey: "info_feature_2",
    descriptionFallback: "During the game, the Chicken may randomly perform a Dash, allowing it to move forward 2 or 3 spaces randomly in a single action. A Dash increases the current multiplier, and never results in defeat."
  },
  {
    descriptionKey: "info_feature_3",
    descriptionFallback: "Landing on or passing a Wheel Symbol space collects the Wheel Symbol to Wheel above the Chicken. When collecting the Wheel Symbols, the Wheel may upgrade randomly. The collection progress will reset if the game is not played for 72 hours."
  },
  {
    descriptionKey: "info_feature_4",
    descriptionFallback: "Collecting the Wheel Symbols may randomly trigger the Wheel Bonus. Multiple Wheel Bonuses can be triggered during a single game. Wheel Bonus prizes are awarded immediately and are retained even if the Chicken is defeated later in the game."
  }
];
var guideItems = [
  /* Common */
  {
    imageType: "modeTab",
    titleKey: "og_guide_0",
    titleFallback: "Mode Switch",
    item1Key: "og_guide_1",
    item1Fallback: "Tap to switch automatic or manual betting mode."
  },
  {
    imageType: "betAmount",
    titleKey: "og_guide_2",
    titleFallback: "Bet Amount",
    item1Key: "og_guide_3",
    item1Fallback: "Tap to increase or decrease the bet amount."
  },
  {
    imageType: "difficulty",
    titleKey: "og_guide_4",
    titleFallback: "Difficulty",
    item1Key: "og_guide_5",
    item1Fallback: "Set the number of automatic bets, the default is unlimited."
  },
  {
    imageType: "totalProfit",
    titleKey: "og_guide_6",
    titleFallback: "Total Profit",
    item1Key: "og_guide_7",
    item1Fallback: "Set the number of automatic bets, the default is unlimited."
  },
  /* Auto Spin */
  {
    imageType: "autoCashOut",
    titleKey: "og_guide_8",
    titleFallback: "Auto Cash Out",
    item1Key: "og_guide_9",
    item1Fallback: "Automatically cash out when the target is reached."
  },
  {
    imageType: "numberOfBets",
    titleKey: "og_guide_10",
    titleFallback: "Number of Bets",
    item1Key: "og_guide_11",
    item1Fallback: "Set the number of automatic bets, the default is unlimited."
  },
  {
    imageType: "onWin",
    titleKey: "og_guide_12",
    titleFallback: "On Win",
    item1Key: "og_guide_13",
    item1Fallback: "Reset: When the game wins, reset the bet amount back to the original setting.",
    item2Key: "og_guide_14",
    item2Fallback: "Increase by(%): When the game wins points, increase the bet amount by the set percentage."
  },
  {
    imageType: "onLoss",
    titleKey: "og_guide_15",
    titleFallback: "On Loss",
    item1Key: "og_guide_16",
    item1Fallback: "Reset: When the game loses points, reset the bet amount back to the original setting.",
    item2Key: "og_guide_17",
    item2Fallback: "Increase by(%): When the game loses points, the bet amount increased by the set percentage."
  },
  {
    imageType: "stopProfit",
    titleKey: "og_guide_18",
    titleFallback: "Stop on Profit",
    item1Key: "og_guide_19",
    item1Fallback: "Stop automatic betting when the game progresses and the profit reaches the set target."
  },
  {
    imageType: "stopLoss",
    titleKey: "og_guide_20",
    titleFallback: "Stop on Loss",
    item1Key: "og_guide_21",
    item1Fallback: "Stop automatic betting when the game progresses and the loss reaches the set limit."
  },
  {
    imageType: "",
    titleKey: "og_guide_22",
    titleFallback: "Note",
    item1Key: "og_guide_23",
    item1Fallback: "If the network connection fails or the game is abnormal, all bonuses will be invalid. When the network is disconnected, the game results will be automatically settled."
  }
];

// src/app/pages/info-og/info-og.component.ts
var _forTrack0 = ($index, $item) => $item.descriptionKey;
var _forTrack1 = ($index, $item) => $item.titleKey;
function InfoOgComponent_Conditional_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "ul", 7)(2, "li");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getFeatureDescription(item_r1), " ");
  }
}
function InfoOgComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275repeaterCreate(2, InfoOgComponent_Conditional_4_For_3_Template, 4, 1, "section", 6, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.featureItems());
  }
}
function InfoOgComponent_Conditional_5_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-info-guide-og", 8);
    \u0275\u0275pipe(1, "appI18n");
    \u0275\u0275pipe(2, "appI18n");
    \u0275\u0275pipe(3, "appI18n");
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("image", item_r3.imageType)("currencyImage", ctx_r1.currencyImage())("title", \u0275\u0275pipeBind2(1, 5, item_r3.titleKey, item_r3.titleFallback))("getItem1", \u0275\u0275pipeBind2(2, 8, item_r3.item1Key, item_r3.item1Fallback))("getItem2", item_r3.item2Key ? \u0275\u0275pipeBind2(3, 11, item_r3.item2Key, item_r3.item2Fallback) : "");
  }
}
function InfoOgComponent_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.gameVersion(), " ");
  }
}
function InfoOgComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275repeaterCreate(2, InfoOgComponent_Conditional_5_For_3_Template, 4, 14, "ap-info-guide-og", 8, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, InfoOgComponent_Conditional_5_Conditional_4_Template, 2, 1, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.guideItems());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.gameVersion() ? 4 : -1);
  }
}
var InfoOgComponent = class _InfoOgComponent {
  appI18n = inject(AppI18nService);
  info = inject(InfoCtrlService);
  game = inject(GameIframeCtrlService);
  session = inject(ClientSessionService);
  wallet = inject(OgWalletService);
  /** info feature的版本是看system info的版本 */
  version = computed(() => this.session.version().sys);
  header = computed(() => this.appI18n.instant("info") ?? "Info");
  activedTab = signal("Feature");
  hideTurboGuide = input(false);
  hideAutoplay = input(false);
  hideNoteItem2 = input(false);
  close = output();
  currencyImage = computed(() => this.wallet.currencyIconUrl());
  tabs = computed(() => [
    {
      id: "Feature",
      label: this.appI18n.instant("feature") ?? "Feature"
    },
    {
      id: "Guide",
      label: this.appI18n.instant("guide") ?? "Guide"
    }
  ]);
  featureItems = computed(() => featureItems);
  guideItems = computed(() => guideItems);
  getFeatureDescription(item) {
    return this.appI18n.instantGame(item.descriptionKey, this.appI18n.instant(item.descriptionKey, item.descriptionFallback));
  }
  changeTab(tabId) {
    this.activedTab.set(tabId);
    const gaName = InfoTabGAMap[tabId] ?? `info_tab_${tabId}`;
  }
  gameVersion = computed(() => {
    return this.game.gameVersion() ?? "";
  });
  static \u0275fac = function InfoOgComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InfoOgComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InfoOgComponent, selectors: [["info-og"]], inputs: { hideTurboGuide: [1, "hideTurboGuide"], hideAutoplay: [1, "hideAutoplay"], hideNoteItem2: [1, "hideNoteItem2"] }, outputs: { close: "close" }, decls: 6, vars: 5, consts: [[3, "close", "header"], [1, "relative", "z-sticky", "flex", "h-full", "flex-col"], [3, "tabChange", "tabs", "selectedTab", "accentColor"], [1, "min-h-0", "flex-1", "overflow-y-auto", "pt-12"], [1, "page-container"], [1, "page-content"], [1, "px-4"], [1, "list-space", "list-none", "text-slate-400"], [1, "pointer-events-none", 3, "image", "currencyImage", "title", "getItem1", "getItem2"], [1, "mt-4", "block", "text-center", "text-xs", "text-zinc-400"]], template: function InfoOgComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ap-ui-frame-page", 0);
      \u0275\u0275listener("close", function InfoOgComponent_Template_ap_ui_frame_page_close_0_listener() {
        return ctx.close.emit();
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "ap-tab-menu-text", 2);
      \u0275\u0275listener("tabChange", function InfoOgComponent_Template_ap_tab_menu_text_tabChange_2_listener($event) {
        return ctx.changeTab($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 3);
      \u0275\u0275conditionalCreate(4, InfoOgComponent_Conditional_4_Template, 4, 0, "div", 4)(5, InfoOgComponent_Conditional_5_Template, 5, 1, "div", 4);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275property("header", ctx.header());
      \u0275\u0275advance(2);
      \u0275\u0275property("tabs", ctx.tabs())("selectedTab", ctx.activedTab())("accentColor", "slate");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.activedTab() === "Feature" ? 4 : ctx.activedTab() === "Guide" ? 5 : -1);
    }
  }, dependencies: [
    CommonModule,
    ApUiFramePageComponent,
    ApTabMenuTextComponent,
    ApInfoGuideOGComponent,
    AppI18nPipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfoOgComponent, [{
    type: Component,
    args: [{ selector: "info-og", imports: [
      CommonModule,
      ApUiFramePageComponent,
      ApTabMenuTextComponent,
      ApInfoGuideOGComponent,
      AppI18nPipe
    ], template: `<ap-ui-frame-page
  [header]="header()"
  (close)="close.emit()"
>
  <div class="relative z-sticky flex h-full flex-col">
    <ap-tab-menu-text
      [tabs]="tabs()"
      [selectedTab]="activedTab()"
      [accentColor]="'slate'"
      (tabChange)="changeTab($event)"
    />
    <div class="min-h-0 flex-1 overflow-y-auto pt-12">
      @if (activedTab() === "Feature") {
        <div class="page-container">
          <div class="page-content">
            @for (item of featureItems(); track item.descriptionKey) {
              <section class="px-4">
                <ul class="list-space list-none text-slate-400">
                  <li>
                    {{ getFeatureDescription(item) }}
                  </li>
                </ul>
              </section>
            }
          </div>
        </div>
      } @else if (activedTab() === "Guide") {
        <div class="page-container">
          <div class="page-content">
            @for (item of guideItems(); track item.titleKey) {
              <ap-info-guide-og
                class="pointer-events-none"
                [image]="item.imageType"
                [currencyImage]="currencyImage()"
                [title]="item.titleKey | appI18n: item.titleFallback"
                [getItem1]="item.item1Key | appI18n: item.item1Fallback"
                [getItem2]="
                  item.item2Key
                    ? (item.item2Key | appI18n: item.item2Fallback)
                    : ''
                "
              />
            }
          </div>
          @if (gameVersion()) {
            <div class="mt-4 block text-center text-xs text-zinc-400">
              {{ gameVersion() }}
            </div>
          }
        </div>
      }
    </div>
  </div>
</ap-ui-frame-page>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InfoOgComponent, { className: "InfoOgComponent", filePath: "src/app/pages/info-og/info-og.component.ts", lineNumber: 34 });
})();

// src/app/pages/history-detail-og/history-detail-og.component.ts
function HistoryDetailOGComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-loading-overlay", 5);
  }
}
function HistoryDetailOGComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-og-history-detail-chicken", 7);
    \u0275\u0275listener("seedClicked", function HistoryDetailOGComponent_Conditional_6_Template_ap_og_history_detail_chicken_seedClicked_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickSeed());
    })("verifyClicked", function HistoryDetailOGComponent_Conditional_6_Template_ap_og_history_detail_chicken_verifyClicked_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickVerify($event));
    })("provableClicked", function HistoryDetailOGComponent_Conditional_6_Template_ap_og_history_detail_chicken_provableClicked_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickProvable());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("eventString", ctx_r1.eventString())("seed", ctx_r1.seed())("isDetailThemeDark", ctx_r1.isDetailThemeDark())("isWin", ctx_r1.isWin());
  }
}
var HistoryDetailOGComponent = class _HistoryDetailOGComponent {
  iframe = null;
  i18n = inject(AppI18nService);
  api = inject(AppInterfaceService);
  historyCtrl = inject(HistoryCtrlService);
  logger = inject(LoggerService);
  destroyRef = inject(DestroyRef);
  // List Labels
  winColumnLabel = this.i18n.computed("history_win", "WIN");
  normalGamelabel = this.i18n.computed("history_normal_game", "Normal Spin");
  freeGameLabel = this.i18n.computed("buyfeature_bf_title", this.i18n.instant("history_free_game"));
  /** game 30011 該局的實際紀錄資料，由外部（history list/detail server 回應）帶入 */
  /** 轉圈遮蓋 */
  isLoading = signal(true);
  item = input(null);
  ticket = computed(() => this.item()?.transaction || "N/A");
  currency = computed(() => this.item()?.currency || "");
  currentBalance = computed(() => this.balanceList()[this.currentRound()] ?? null);
  currentWin = computed(() => this.winList()[this.currentRound()] ?? 0);
  /** 計算舊的餘額 */
  balanceOld = computed(() => {
    let balance = this.currentBalance();
    if (balance === null)
      return null;
    if (this.currentRound() === 0)
      balance = balance + this.bet();
    return new decimal_default(balance).minus(this.currentWin()).toNumber();
  });
  /** 計算新的餘額 */
  balanceNew = computed(() => this.currentBalance());
  balanceList = signal([]);
  line = computed(() => {
    return null;
  });
  bet = computed(() => {
    return this.item().bet || 0;
  });
  displayBet = computed(() => {
    if (this.currentRound() === 0)
      return this.bet();
    return 0;
  });
  baseBet = computed(() => new decimal_default(this.bet()).div(this.bfRate()).toNumber());
  /* Win column */
  win = computed(() => this.currentWin());
  /** Win column 顯示的文字 */
  winText = computed(() => {
    const win = this.win();
    if (win === 0)
      return "--";
    return MoneyText.format(win);
  });
  winList = signal([]);
  // Win column
  isWin = computed(() => !!this.item()?.isWin);
  isDetailThemeDark = computed(() => this.item()?.detailTheme === "dark");
  replay = output();
  share = output();
  bfRate = signal(1);
  eventString = signal("{}");
  seed = signal({
    server_seed: "",
    server_seed_hash: "",
    client_seed: ""
  });
  showPlateSelector = signal(false);
  /** 當前 round，從 0 開始 */
  currentRound = signal(0);
  /** 有FG就是從1~XX */
  maxRound = signal(0);
  showRoundSelector = computed(() => this.item()?.isStarred || false);
  roundSelectorDisabled = computed(() => this.isLoading() || this.maxRound() <= 1);
  /** 顯示當前 round 的數字，例如 "Round (1/3)" */
  roundNumberText = computed(() => {
    if (this.currentRound() <= 0)
      return "";
    return ` (${this.currentRound()}/${this.maxRound()})`;
  });
  copyTransaction = output();
  /** 將公平性視窗的開啟需求交由 history-list-og 顯示在歷史頁最上層。 */
  fairnessRequested = output();
  ngOnInit() {
    this.historyCtrl.spinDetail$.pipe(takeUntilDestroyed(this.destroyRef), debounceTime(500)).subscribe((detail) => {
      const mgPlate = detail.result.main_game?.plate;
      if (mgPlate && mgPlate.length > 0) {
        this.eventString.set(mgPlate[0]?.event || "{}");
      }
      const seed = detail.seed;
      if (seed) {
        this.seed.set(seed);
      }
      this.balanceList.set(detail.balanceList);
      this.winList.set(detail.winList);
      this.isLoading.set(false);
    });
    this.historyCtrl.getHistoryDetail(this.item() || null);
    this.api.changedSeed$.subscribe((seed) => {
      this.historyCtrl.getHistoryDetail(this.item() || null);
    });
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
  }
  clickCopyTransaction(item, event) {
    return __async(this, null, function* () {
      this.copyTransaction.emit(item.transaction);
    });
  }
  /** ap-select的選項 先放入Normal Game, 再根據 maxRound 產生 roundOptions，並在 label 顯示 XxxxGame + 數字 */
  roundOptions = computed(() => {
    const options = [];
    options.push({
      value: "0",
      label: this.normalGamelabel(),
      content: [this.currency() + dec.comma(this.winList()[0])]
    });
    for (let i = 1; i <= this.maxRound(); i++) {
      options.push({
        value: i.toString(),
        label: this.freeGameLabel() + " " + i,
        content: [this.currency() + dec.comma(this.winList()[i])]
      });
    }
    return options;
  });
  /** 給ap-select使用的 */
  selectRound(value) {
    const index = parseInt(value, 10);
    if (isNaN(index))
      return;
    this.currentRound.set(index);
    this.sendMessage(createApWebMessage("ChangeHistoryPageIndex", { pageIndex: index }));
  }
  /** 控制 replay 按鈕顯示 */
  showReplayButtons = computed(() => {
    if (this.historyCtrl.forceReplayDisplayed())
      return true;
    return this.api.loginResult()?.note?.history_replay === 1 && this.item()?.replay;
  });
  /** 控制 share 按鈕顯示 */
  showShareButtons = computed(() => {
    if (this.historyCtrl.forceShareDisplayed())
      return true;
    return this.api.loginResult()?.note?.history_replay === 1 && this.item()?.replay;
  });
  isPreRoundEnabled = computed(() => this.currentRound() > 0);
  clickPreRound() {
    const pre = this.currentRound() - 1;
    if (pre < 0)
      return;
    this.currentRound.set(pre);
    this.sendMessage(createApWebMessage("ChangeHistoryPageIndex", {
      pageIndex: this.currentRound()
    }));
  }
  isNextRoundEnabled = computed(() => this.maxRound() > this.currentRound());
  clickNextRound() {
    const next = this.currentRound() + 1;
    const nextRound = next > this.maxRound() ? 0 : next;
    this.currentRound.set(nextRound);
    this.sendMessage(createApWebMessage("ChangeHistoryPageIndex", {
      pageIndex: this.currentRound()
    }));
  }
  isLocalOrigin() {
    const origin = window.location.origin;
    return origin.includes("localhost") || origin.includes("192.168");
  }
  sendMessage(message) {
    if (this.iframe?.contentWindow) {
      const targetOrigin = this.isLocalOrigin() ? "*" : window.location.origin;
      this.iframe.contentWindow.postMessage(message, targetOrigin);
    }
  }
  processHistoryDetailLoaded(data) {
    this.isLoading.set(false);
    const spinResult = data.spinResult;
    this.maxRound.set(spinResult.free_game?.length || 0);
  }
  clickSeed() {
    this.fairnessRequested.emit({
      view: "fairness",
      selectedTab: "seeds",
      seedData: null
    });
  }
  clickVerify(seedData) {
    this.fairnessRequested.emit({
      view: "fairness",
      selectedTab: "verify",
      seedData
    });
  }
  clickProvable() {
    this.fairnessRequested.emit({
      view: "provable",
      selectedTab: "seeds",
      seedData: null
    });
  }
  static \u0275fac = function HistoryDetailOGComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HistoryDetailOGComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HistoryDetailOGComponent, selectors: [["history-detail-og"]], inputs: { item: [1, "item"] }, outputs: { replay: "replay", share: "share", copyTransaction: "copyTransaction", fairnessRequested: "fairnessRequested" }, decls: 7, vars: 8, consts: [[1, "flex", "size-full", "flex-col", "mx-auto", "bg-zinc-900"], [1, "shrink-0", "px-3", "sm:px-6", "w-full", "max-w-4xl", "mx-auto", "sm:mt-2"], [3, "ticketCopyClicked", "roundSelected", "isDetailThemeDark", "ticket", "balanceNew", "balanceOld", "bet", "isWin", "win"], [1, "flex-1", "relative", "overflow-hidden", "overflow-y-auto"], [1, "px-3", "sm:px-6", "w-full", "max-w-4xl", "mx-auto", "pt-4", "pb-4"], [1, "absolute", "inset-0"], [3, "eventString", "seed", "isDetailThemeDark", "isWin"], [3, "seedClicked", "verifyClicked", "provableClicked", "eventString", "seed", "isDetailThemeDark", "isWin"]], template: function HistoryDetailOGComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "ap-og-history-detail-top", 2);
      \u0275\u0275listener("ticketCopyClicked", function HistoryDetailOGComponent_Template_ap_og_history_detail_top_ticketCopyClicked_2_listener($event) {
        return ctx.item() && ctx.clickCopyTransaction(ctx.item(), $event);
      })("roundSelected", function HistoryDetailOGComponent_Template_ap_og_history_detail_top_roundSelected_2_listener($event) {
        return ctx.selectRound($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275conditionalCreate(5, HistoryDetailOGComponent_Conditional_5_Template, 1, 0, "ap-loading-overlay", 5)(6, HistoryDetailOGComponent_Conditional_6_Template, 1, 4, "ap-og-history-detail-chicken", 6);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("isDetailThemeDark", ctx.isDetailThemeDark())("ticket", ctx.ticket())("balanceNew", ctx.balanceNew())("balanceOld", ctx.balanceOld())("bet", ctx.displayBet())("isWin", ctx.isWin())("win", ctx.win());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.isLoading() ? 5 : 6);
    }
  }, dependencies: [CommonModule, ApOgHistoryDetailChickenComponent, ApOgHistoryDetailTopComponent, ApLoadingOverlayComponent], encapsulation: 2, data: { animation: [
    trigger("fadeOut", [
      transition(":leave", [animate("300ms ease-in", style({ opacity: 0 }))])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoryDetailOGComponent, [{
    type: Component,
    args: [{ selector: "history-detail-og", imports: [CommonModule, ApOgHistoryDetailChickenComponent, ApOgHistoryDetailTopComponent, ApLoadingOverlayComponent], animations: [
      trigger("fadeOut", [
        transition(":leave", [animate("300ms ease-in", style({ opacity: 0 }))])
      ])
    ], template: '<div class="flex size-full flex-col mx-auto bg-zinc-900">\n  <!-- Header + Top Bar: unified card -->\n  <div class="shrink-0 px-3 sm:px-6 w-full max-w-4xl mx-auto sm:mt-2">\n    <ap-og-history-detail-top\n      [isDetailThemeDark]="isDetailThemeDark()"\n      [ticket]="ticket()"\n      [balanceNew]="balanceNew()"\n      [balanceOld]="balanceOld()"\n      [bet]="displayBet()"\n      [isWin]="isWin()"\n      [win]="win()"\n      (ticketCopyClicked)="item() && clickCopyTransaction(item()!, $event)"\n      (roundSelected)="selectRound($event)"\n    />\n  </div>\n\n  <!-- Main Content: Default variant - Reel and Win Details -->\n  <div class="flex-1 relative overflow-hidden overflow-y-auto">\n    <div class="px-3 sm:px-6 w-full max-w-4xl mx-auto pt-4 pb-4">\n      @if (isLoading()) {\n        <ap-loading-overlay class="absolute inset-0"/>\n      }\n      @else {\n        <ap-og-history-detail-chicken\n          [eventString]="eventString()"\n          [seed]="seed()"\n          [isDetailThemeDark]="isDetailThemeDark()"\n          [isWin]="isWin()"\n          (seedClicked)="clickSeed()"\n          (verifyClicked)="clickVerify($event)"\n          (provableClicked)="clickProvable()"\n        />        \n      }\n    </div>\n  </div>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HistoryDetailOGComponent, { className: "HistoryDetailOGComponent", filePath: "src/app/pages/history-detail-og/history-detail-og.component.ts", lineNumber: 42 });
})();

// src/app/components/ap-og-provably-fair/ap-og-provably-fair-desc.component.ts
var ApOgProvablyFairDescComponent = class _ApOgProvablyFairDescComponent {
  static \u0275fac = function ApOgProvablyFairDescComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApOgProvablyFairDescComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApOgProvablyFairDescComponent, selectors: [["ap-og-provably-fair-desc"]], decls: 29, vars: 12, consts: [[1, "block", "flex", "flex-col", "justify-center", "items-center", "space-y-2", "bg-zinc-800/50", "rounded-lg", "text-slate-400", "py-2"], [1, "grid", "grid-cols-18", "gap-2", "px-2", "py-2", "justify-center", "items-start", "text-center"], [1, "col-span-5", "flex", "flex-col", "items-center", "space-y-1"], ["name", "document-text", 1, "info-icon"], ["name", "plus", 1, "info-icon"], [1, "col-span-6", "flex", "flex-col", "items-center", "space-y-1"], ["name", "user", 1, "info-icon"], ["name", "window", 1, "info-icon"], ["name", "pause", 1, "info-icon"], [1, "flex-col", "px-2", "text-center"], [1, "font-semibold"], [1, "break-all"], ["name", "arrow-down", 1, "info-icon"], [1, "flex-col", "w-full"], [1, "text-center"]], template: function ApOgProvablyFairDescComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "ap-icon", 3);
      \u0275\u0275elementStart(4, "h5");
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "appI18n");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(7, "ap-icon", 4);
      \u0275\u0275elementStart(8, "div", 5);
      \u0275\u0275element(9, "ap-icon", 6);
      \u0275\u0275elementStart(10, "h5");
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "appI18n");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(13, "ap-icon", 4);
      \u0275\u0275elementStart(14, "div", 2);
      \u0275\u0275element(15, "ap-icon", 7);
      \u0275\u0275elementStart(16, "h5");
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "appI18n");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(19, "ap-icon", 8);
      \u0275\u0275elementStart(20, "div", 9)(21, "h5", 10);
      \u0275\u0275text(22, "HMAC-SHA256");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "h6", 11);
      \u0275\u0275text(24, " 3cd958419808919ac4755426d47d7b8c5e456cfb4e2abe7c8eae781a9faed500 ");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(25, "ap-icon", 12);
      \u0275\u0275elementStart(26, "div", 13)(27, "p", 14);
      \u0275\u0275text(28, "53.2");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 3, "og_fair_serverSeed", "Server Seed"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(12, 6, "g_fair_clientSeed", "Client Seed"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 9, "og_fair_nonce", "Nonce"));
    }
  }, dependencies: [ApIconComponent, AppI18nPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApOgProvablyFairDescComponent, [{
    type: Component,
    args: [{ selector: "ap-og-provably-fair-desc", imports: [ApIconComponent, AppI18nPipe], template: '<div\n  class="block flex flex-col justify-center items-center space-y-2 bg-zinc-800/50 rounded-lg text-slate-400 py-2"\n>\n  <div\n    class="grid grid-cols-18 gap-2 px-2 py-2 justify-center items-start text-center"\n  >\n    <div class="col-span-5 flex flex-col items-center space-y-1">\n      <ap-icon name="document-text" class="info-icon" />\n      <h5>{{ "og_fair_serverSeed" | appI18n: "Server Seed" }}</h5>\n    </div>\n    <ap-icon name="plus" class="info-icon" />\n    <div class="col-span-6 flex flex-col items-center space-y-1">\n      <ap-icon name="user" class="info-icon" />\n      <h5>{{ "g_fair_clientSeed" | appI18n: "Client Seed" }}</h5>\n    </div>\n    <ap-icon name="plus" class="info-icon" />\n    <div class="col-span-5 flex flex-col items-center space-y-1">\n      <ap-icon name="window" class="info-icon" />\n      <h5>{{ "og_fair_nonce" | appI18n: "Nonce" }}</h5>\n    </div>\n  </div>\n  <ap-icon name="pause" class="info-icon" />\n  <div class="flex-col px-2 text-center">\n    <h5 class="font-semibold">HMAC-SHA256</h5>\n    <h6 class="break-all">\n      3cd958419808919ac4755426d47d7b8c5e456cfb4e2abe7c8eae781a9faed500\n    </h6>\n  </div>\n  <ap-icon name="arrow-down" class="info-icon" />\n  <div class="flex-col w-full">\n    <p class="text-center">53.2</p>\n  </div>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApOgProvablyFairDescComponent, { className: "ApOgProvablyFairDescComponent", filePath: "src/app/components/ap-og-provably-fair/ap-og-provably-fair-desc.component.ts", lineNumber: 10 });
})();

// src/app/components/ap-og-provably-fair/ap-og-provably-fair.data.ts
var fairnessItems = [
  {
    titleKey: "fairness_info_16",
    titleFallback: "Bet History",
    item1Key: "fairness_info_17",
    item1Fallback: "Open the bet that you want to verify from history."
  },
  {
    titleKey: "fairness_info_18",
    titleFallback: "Confirm Seeds",
    item1Key: "fairness_info_19",
    item1Fallback: "Server Seed, Client Seed and Nonce can be copied."
  },
  {
    titleKey: "fairness_info_20",
    titleFallback: "Verify Bet",
    item1Key: "fairness_info_21",
    item1Fallback: 'Scroll down and click on "Verify Bet", all the details will automatically input and evaluate whether the bet complies with Fairness.'
  },
  {
    titleKey: "fairness_info_22",
    titleFallback: "Result",
    item1Key: "fairness_info_23",
    item1Fallback: "You will see the bet info you need for a verification (game name, client and Server seed, and nonce) and how your bet looks like and what the outcome is."
  },
  {
    titleKey: "fairness_info_24",
    titleFallback: "Change Server Seed",
    item1Key: "fairness_info_25",
    item1Fallback: 'Simply click on "Change" and you will be given a new random server seed.'
  }
];

// src/app/components/ap-og-provably-fair/ap-og-provably-fair.component.ts
var _forTrack02 = ($index, $item) => $item.titleKey;
function ApOgProvablyFairComponent_For_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-info-guide-og", 13);
    \u0275\u0275pipe(1, "appI18n");
    \u0275\u0275pipe(2, "appI18n");
    \u0275\u0275pipe(3, "appI18n");
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275property("title", \u0275\u0275pipeBind2(1, 3, item_r1.titleKey, item_r1.titleFallback))("getItem1", \u0275\u0275pipeBind2(2, 6, item_r1.item1Key, item_r1.item1Fallback))("getItem2", item_r1.item2Key ? \u0275\u0275pipeBind2(3, 9, item_r1.item2Key, item_r1.item2Fallback) : "");
  }
}
var ApOgProvablyFairComponent = class _ApOgProvablyFairComponent {
  fairnessItems = fairnessItems;
  static \u0275fac = function ApOgProvablyFairComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApOgProvablyFairComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApOgProvablyFairComponent, selectors: [["ap-og-provably-fair"]], decls: 68, vars: 64, consts: [[1, "h-full", "overflow-y-auto", "p-4", "space-y-4", "text-slate-300"], [1, "flex", "justify-center"], ["name", "shield", 1, "relative", "size-16", "text-emerald-400"], [1, "space-y-2"], [1, "text-slate-300", "text-center"], [1, "rounded-lg", "bg-zinc-900", "px-4", "py-4"], [1, "text-slate-400"], [1, "pl-3", 2, "border-left", "3px solid #62748e"], [1, "text-slate-300"], [1, "text-slate-400", "space-y-2"], [1, "list-decimal", "pl-5", "space-y-2", "mt-1"], [1, "rounded-lg", "bg-zinc-900", "px-4", "py-4", "space-y-8"], [1, "block", "w-full", "origin-top", "scale-95"], [1, "pointer-events-none", 3, "title", "getItem1", "getItem2"]], template: function ApOgProvablyFairComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "ap-icon", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "section", 3)(4, "h2", 4);
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "appI18n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5)(8, "p", 6);
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "appI18n");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "section", 3)(12, "h2", 4);
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "appI18n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 5)(16, "div", 7)(17, "p", 6)(18, "label", 8);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "appI18n");
      \u0275\u0275elementEnd();
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "appI18n");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(23, "div", 5)(24, "div", 7)(25, "div", 9)(26, "h5", 8);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "appI18n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "ul", 10)(30, "li");
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "appI18n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "li");
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "appI18n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "li");
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "appI18n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "li");
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "appI18n");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(42, "div", 11)(43, "div", 7)(44, "div", 9)(45, "label", 8);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "appI18n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "ul", 10)(49, "li");
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "appI18n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "li");
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "appI18n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "li");
      \u0275\u0275text(56);
      \u0275\u0275pipe(57, "appI18n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "li");
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "appI18n");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(61, "ap-og-provably-fair-desc", 12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "h2", 4);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "appI18n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 5);
      \u0275\u0275repeaterCreate(66, ApOgProvablyFairComponent_For_67_Template, 4, 12, "ap-info-guide-og", 13, _forTrack02);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 16, "fairness_info_0", "Provably Fair - 100% FAIR GAME"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 19, "fairness_info_1", "Provably Fair Games is an encryption technology to ensure fairness and verifiable for game outcomes. This mechanism are often used in online gambling and random number generation games to build player's trust in the game operators."), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 22, "fairness_info_2", "How does it works?"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(20, 25, "fairness_info_3", "Quick Instructions :"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(22, 28, "fairness_info_4", "By ensuring the randomness and fairness of the game, it allows players to verify the results after the outcome to prevent game operators from cheating. This mechanism is widely used in online gambling and other games that require random number generation to improve the transparency and credibility."), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(28, 31, "fairness_info_5", "More Information :"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(32, 34, "fairness_info_6", "Round result is generated from two independent participants of the round: game operator and the bettor."), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(35, 37, "fairness_info_7", 'Operator is generating server seed (random 64 symbols). Hashed version of this server seed is available publicly before round starts. (In user menu, check "Provably Fairness Settings" and then "Active server seed hashed")'), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(38, 40, "fairness_info_8", "Client seed is generated on the side of each player and when round starts are participating in generating round result."), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(41, 43, "fairness_info_9", "When round starts, game merges server seed with a client seed. From merged symbols is generated HMAC-SHA-256 hash, and from this hash the game result is produced."), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(47, 46, "fairness_info_10", "What is the Seed :"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(51, 49, "fairness_info_11", "Server Seed: Generated randomly in 64-bit string by server."), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(54, 52, "fairness_info_12", "Server Seed Hash: Use Server Seed to calculate through SHA-256."), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(57, 55, "fairness_info_13", "Client Seed: 64-bit string provided by client."), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(60, 58, "fairness_info_14", "Nonce : The number of times this combination of Server Seed and Client Seed has been used."), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(64, 61, "fairness_info_15", "How to check?"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.fairnessItems);
    }
  }, dependencies: [
    ApIconComponent,
    AppI18nPipe,
    ApInfoGuideOGComponent,
    ApOgProvablyFairDescComponent
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApOgProvablyFairComponent, [{
    type: Component,
    args: [{ selector: "ap-og-provably-fair", imports: [
      ApIconComponent,
      AppI18nPipe,
      ApInfoGuideOGComponent,
      ApOgProvablyFairDescComponent
    ], template: `<div
  class="h-full overflow-y-auto p-4 space-y-4 text-slate-300"
>
  <div class="flex justify-center">
    <ap-icon
      name="shield"
      class="relative size-16 text-emerald-400"
    />
  </div>
  <section class="space-y-2">
    <h2 class="text-slate-300 text-center">
      {{ "fairness_info_0" | appI18n: "Provably Fair - 100% FAIR GAME" }}
    </h2>
    <div class="rounded-lg bg-zinc-900 px-4 py-4">
      <p class="text-slate-400">
        {{
          "fairness_info_1"
            | appI18n
            : "Provably Fair Games is an encryption technology to ensure fairness and verifiable for game outcomes. This mechanism are often used in online gambling and random number generation games to build player's trust in the game operators."
        }}
      </p>
    </div>
  </section>
  <section class="space-y-2">
    <h2 class="text-slate-300 text-center">
      {{ "fairness_info_2" | appI18n: "How does it works?" }}
    </h2>
    <div class="rounded-lg bg-zinc-900 px-4 py-4">
      <div class="pl-3" style="border-left: 3px solid #62748e">
        <p class="text-slate-400">
          <label class="text-slate-300"
            >{{ "fairness_info_3" | appI18n: "Quick Instructions :" }}
          </label>
          {{
            "fairness_info_4"
              | appI18n
                : "By ensuring the randomness and fairness of the game, it allows players to verify the results after the outcome to prevent game operators from cheating. This mechanism is widely used in online gambling and other games that require random number generation to improve the transparency and credibility."
          }}
        </p>
      </div>
    </div>

    <div class="rounded-lg bg-zinc-900 px-4 py-4">
      <div class="pl-3" style="border-left: 3px solid #62748e">
        <div class="text-slate-400 space-y-2">
          <h5 class="text-slate-300">
            {{ "fairness_info_5" | appI18n: "More Information :" }}
          </h5>
          <ul class="list-decimal pl-5 space-y-2 mt-1">
            <li>
              {{
                "fairness_info_6"
                  | appI18n
                    : "Round result is generated from two independent participants of the round: game operator and the bettor."
              }}
            </li>
            <li>
              {{
                "fairness_info_7"
                  | appI18n
                    : 'Operator is generating server seed (random 64 symbols). Hashed version of this server seed is available publicly before round starts. (In user menu, check "Provably Fairness Settings" and then "Active server seed hashed")'
              }}
            </li>
            <li>
              {{
                "fairness_info_8"
                  | appI18n
                    : "Client seed is generated on the side of each player and when round starts are participating in generating round result."
              }}
            </li>
            <li>
              {{
                "fairness_info_9"
                  | appI18n
                    : "When round starts, game merges server seed with a client seed. From merged symbols is generated HMAC-SHA-256 hash, and from this hash the game result is produced."
              }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="rounded-lg bg-zinc-900 px-4 py-4 space-y-8">
      <div class="pl-3" style="border-left: 3px solid #62748e">
        <div class="text-slate-400 space-y-2">
          <label class="text-slate-300"
            >{{ "fairness_info_10" | appI18n: "What is the Seed :" }}
          </label>
          <ul class="list-decimal pl-5 space-y-2 mt-1">
            <li>
              {{
                "fairness_info_11"
                  | appI18n
                    : "Server Seed: Generated randomly in 64-bit string by server."
              }}
            </li>
            <li>
              {{
                "fairness_info_12"
                  | appI18n
                    : "Server Seed Hash: Use Server Seed to calculate through SHA-256."
              }}
            </li>
            <li>
              {{
                "fairness_info_13"
                  | appI18n
                    : "Client Seed: 64-bit string provided by client."
              }}
            </li>
            <li>
              {{
                "fairness_info_14"
                  | appI18n
                    : "Nonce : The number of times this combination of Server Seed and Client Seed has been used."
              }}
            </li>
          </ul>
        </div>
      </div>
      <ap-og-provably-fair-desc class="block w-full origin-top scale-95" />
    </div>
  </section>

  <h2 class="text-slate-300 text-center">
    {{ "fairness_info_15" | appI18n: "How to check?" }}
  </h2>
  <div class="rounded-lg bg-zinc-900 px-4 py-4">
    @for (item of fairnessItems; track item.titleKey) {
      <ap-info-guide-og
        class="pointer-events-none"
        [title]="item.titleKey | appI18n: item.titleFallback"
        [getItem1]="item.item1Key | appI18n: item.item1Fallback"
        [getItem2]="
          item.item2Key ? (item.item2Key | appI18n: item.item2Fallback) : ''
        "
      />
    }
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApOgProvablyFairComponent, { className: "ApOgProvablyFairComponent", filePath: "src/app/components/ap-og-provably-fair/ap-og-provably-fair.component.ts", lineNumber: 18 });
})();

// src/app/pages/og-fairness-seed/og-fairness-seed.component.ts
var OgFairnessSeedComponent = class _OgFairnessSeedComponent {
  appI18n = inject(AppI18nService);
  wallet = inject(OgWalletService);
  isLoading = signal(false);
  /** 複製成功的提示訊息 */
  copyToastMessage = this.appI18n.computed("og_fair_copy", "Copied");
  toastPosition = signal({
    top: 0,
    left: 0
  });
  /** 允許的種子字元模式 (僅允許英文字母和數字) */
  seedPattern = this.wallet.seedAllowedCharacterPattern;
  // 目前Seed相關資料
  activeServerSeedHash = computed(() => this.wallet.activeServerSeedHash());
  activeClientSeed = computed(() => this.wallet.activeClientSeed());
  activeNonce = computed(() => Math.floor(this.wallet.activeNonce()).toString());
  nextServerSeedHash = computed(() => this.wallet.displayedNextServerSeedHash());
  nextClientSeed = signal(this.wallet.displayedNextClientSeed());
  invaildClientSeed = computed(() => {
    return this.nextClientSeed().length < 1 || this.nextClientSeed().length > 64;
  });
  clickChangeClientSeed() {
    this.wallet.changeClientSeed(this.nextClientSeed());
    this.nextClientSeed.set(this.wallet.displayedNextClientSeed());
    this.isLoading.set(true);
    const sub = this.wallet.seedChanged$.subscribe(() => {
      this.isLoading.set(false);
      sub.unsubscribe();
    });
  }
  copyTransaction(transaction) {
    return __async(this, null, function* () {
      try {
        yield navigator.clipboard.writeText(transaction);
      } catch {
      }
    });
  }
  positionToastAtButton(event) {
    const button = event.target.closest("button");
    if (!button)
      return;
    const buttonRect = button.getBoundingClientRect();
    this.toastPosition.set({
      left: buttonRect.left + buttonRect.width / 2,
      top: buttonRect.top
    });
  }
  static \u0275fac = function OgFairnessSeedComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OgFairnessSeedComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OgFairnessSeedComponent, selectors: [["og-fairness-seed"]], decls: 19, vars: 60, consts: [["copyToast", ""], [1, "relative", "h-full", "flex-col", "p-4", "space-y-4", "overflow-auto"], [1, "fixed", "z-toast", "-translate-x-1/2", "-translate-y-full", "pb-2", 3, "accentColor", "message"], [1, "flex-col", "flex", "space-y-2"], ["inputType", "text", 3, "click", "pressed", "currencyImage", "maxLength", "label", "placeholder", "disabled", "actionIcon", "actionValue"], [1, "flex-col", "space-y-4"], [1, "text-center", "text-slate-300"], ["inputType", "alnum", 3, "valueChange", "pressed", "currencyImage", "maxLength", "label", "value", "disabled", "actionIcon", "actionLabel", "actionDisabled"], ["inputType", "alnum", 3, "click", "pressed", "currencyImage", "maxLength", "label", "placeholder", "actionIcon", "actionValue"]], template: function OgFairnessSeedComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1);
      \u0275\u0275element(1, "ap-toast", 2, 0);
      \u0275\u0275elementStart(3, "div", 3)(4, "ap-og-input", 4);
      \u0275\u0275pipe(5, "appI18n");
      \u0275\u0275listener("click", function OgFairnessSeedComponent_Template_ap_og_input_click_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.positionToastAtButton($event));
      })("pressed", function OgFairnessSeedComponent_Template_ap_og_input_pressed_4_listener($event) {
        \u0275\u0275restoreView(_r1);
        const copyToast_r2 = \u0275\u0275reference(2);
        ctx.copyTransaction($event);
        return \u0275\u0275resetView(copyToast_r2.show());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "ap-og-input", 4);
      \u0275\u0275pipe(7, "appI18n");
      \u0275\u0275listener("click", function OgFairnessSeedComponent_Template_ap_og_input_click_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.positionToastAtButton($event));
      })("pressed", function OgFairnessSeedComponent_Template_ap_og_input_pressed_6_listener($event) {
        \u0275\u0275restoreView(_r1);
        const copyToast_r2 = \u0275\u0275reference(2);
        ctx.copyTransaction($event);
        return \u0275\u0275resetView(copyToast_r2.show());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "ap-og-input", 4);
      \u0275\u0275pipe(9, "appI18n");
      \u0275\u0275listener("click", function OgFairnessSeedComponent_Template_ap_og_input_click_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.positionToastAtButton($event));
      })("pressed", function OgFairnessSeedComponent_Template_ap_og_input_pressed_8_listener($event) {
        \u0275\u0275restoreView(_r1);
        const copyToast_r2 = \u0275\u0275reference(2);
        ctx.copyTransaction($event);
        return \u0275\u0275resetView(copyToast_r2.show());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 5)(11, "h2", 6);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 3)(14, "ap-og-input", 7);
      \u0275\u0275pipe(15, "appI18n");
      \u0275\u0275pipe(16, "appI18n");
      \u0275\u0275listener("valueChange", function OgFairnessSeedComponent_Template_ap_og_input_valueChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.nextClientSeed.set($event));
      })("pressed", function OgFairnessSeedComponent_Template_ap_og_input_pressed_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clickChangeClientSeed());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "ap-og-input", 8);
      \u0275\u0275pipe(18, "appI18n");
      \u0275\u0275listener("click", function OgFairnessSeedComponent_Template_ap_og_input_click_17_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.positionToastAtButton($event));
      })("pressed", function OgFairnessSeedComponent_Template_ap_og_input_pressed_17_listener($event) {
        \u0275\u0275restoreView(_r1);
        const copyToast_r2 = \u0275\u0275reference(2);
        ctx.copyTransaction($event);
        return \u0275\u0275resetView(copyToast_r2.show());
      });
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275styleProp("left", ctx.toastPosition().left, "px")("top", ctx.toastPosition().top, "px");
      \u0275\u0275property("accentColor", "slate")("message", ctx.copyToastMessage());
      \u0275\u0275advance(3);
      \u0275\u0275property("currencyImage", false)("maxLength", 64)("label", \u0275\u0275pipeBind2(5, 42, "og_fair_activeClientSeed", "Active Client Seed"))("placeholder", ctx.activeClientSeed())("disabled", true)("actionIcon", "copy")("actionValue", ctx.activeClientSeed());
      \u0275\u0275advance(2);
      \u0275\u0275property("currencyImage", false)("maxLength", 64)("label", \u0275\u0275pipeBind2(7, 45, "og_fair_activeServerSeed", "Active Server Seed(Hashed)"))("placeholder", ctx.activeServerSeedHash())("disabled", true)("actionIcon", "copy")("actionValue", ctx.activeServerSeedHash());
      \u0275\u0275advance(2);
      \u0275\u0275property("currencyImage", false)("maxLength", 64)("label", \u0275\u0275pipeBind2(9, 48, "og_fair_totalBets", "Total bets made with pair"))("placeholder", ctx.activeNonce())("disabled", true)("actionIcon", "copy")("actionValue", ctx.activeNonce());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", ctx.appI18n.instant("og_fair_rotateSeed", "Rotate Seed Pair"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("currencyImage", false)("maxLength", 64)("label", \u0275\u0275pipeBind2(15, 51, "og_fair_newClientSeed", "New Client Seed"))("value", ctx.nextClientSeed())("disabled", ctx.isLoading())("actionIcon", ctx.isLoading() ? "loading" : null)("actionLabel", ctx.isLoading() ? null : \u0275\u0275pipeBind2(16, 54, "og_fair_change", "Change"))("actionDisabled", ctx.invaildClientSeed() || ctx.isLoading());
      \u0275\u0275advance(3);
      \u0275\u0275property("currencyImage", false)("maxLength", 64)("label", \u0275\u0275pipeBind2(18, 57, "og_fair_nextServerSeed", "Next Server Seed(Hashed)"))("placeholder", ctx.nextServerSeedHash())("actionIcon", "copy")("actionValue", ctx.nextServerSeedHash());
    }
  }, dependencies: [CommonModule, AppI18nPipe, ApOgInputComponent, ApToastComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OgFairnessSeedComponent, [{
    type: Component,
    args: [{ selector: "og-fairness-seed", imports: [CommonModule, AppI18nPipe, ApOgInputComponent, ApToastComponent], template: `<div class="relative h-full flex-col p-4 space-y-4 overflow-auto">
  <ap-toast
    #copyToast
    class="fixed z-toast -translate-x-1/2 -translate-y-full pb-2"
    [style.left.px]="toastPosition().left"
    [style.top.px]="toastPosition().top"
    [accentColor]="'slate'"
    [message]="copyToastMessage()"
  />
  <div class="flex-col flex space-y-2">
    <ap-og-input
      inputType="text"
      [currencyImage]="false"
      [maxLength]="64"
      [label]="
        'og_fair_activeClientSeed' | appI18n: 'Active Client Seed'
      "
      [placeholder]="activeClientSeed()"
      [disabled]="true"
      [actionIcon]="'copy'"
      [actionValue]="activeClientSeed()"
      (click)="positionToastAtButton($event)"
      (pressed)="copyTransaction($event); copyToast.show()"
    />
    <ap-og-input
      inputType="text"
      [currencyImage]="false"
      [maxLength]="64"
      [label]="
        'og_fair_activeServerSeed'
          | appI18n: 'Active Server Seed(Hashed)'
      "
      [placeholder]="activeServerSeedHash()"
      [disabled]="true"
      [actionIcon]="'copy'"
      [actionValue]="activeServerSeedHash()"
      (click)="positionToastAtButton($event)"
      (pressed)="copyTransaction($event); copyToast.show()"
    />
    <ap-og-input
      inputType="text"
      [currencyImage]="false"
      [maxLength]="64"
      [label]="
        'og_fair_totalBets' | appI18n: 'Total bets made with pair'
      "
      [placeholder]="activeNonce()"
      [disabled]="true"
      [actionIcon]="'copy'"
      [actionValue]="activeNonce()"
      (click)="positionToastAtButton($event)"
      (pressed)="copyTransaction($event); copyToast.show()"
    />
  </div>
  <!-- \u66F4\u63DB\u7A2E\u5B50 -->
  <div class="flex-col space-y-4">
    <h2 class="text-center text-slate-300">
      {{
        appI18n.instant("og_fair_rotateSeed", "Rotate Seed Pair")
      }}
    </h2>
    <div class="flex-col flex space-y-2">
      <ap-og-input
        inputType="alnum"
        [currencyImage]="false"
        [maxLength]="64"
        [label]="
          'og_fair_newClientSeed' | appI18n: 'New Client Seed'
        "
        [value]="nextClientSeed()"
        [disabled]="isLoading()"
        [actionIcon]="isLoading() ? 'loading' : null"
        [actionLabel]="isLoading() ? null : 'og_fair_change' | appI18n: 'Change'"
        [actionDisabled]="invaildClientSeed() || isLoading()"
        (valueChange)="nextClientSeed.set($event)"
        (pressed)="clickChangeClientSeed();"
      />
      <ap-og-input
        inputType="alnum"
        [currencyImage]="false"
        [maxLength]="64"
        [label]="
          'og_fair_nextServerSeed'
            | appI18n: 'Next Server Seed(Hashed)'
        "
        [placeholder]="nextServerSeedHash()"
        [actionIcon]="'copy'"
        [actionValue]="nextServerSeedHash()"
        (click)="positionToastAtButton($event)"
        (pressed)="copyTransaction($event); copyToast.show()"
      />
    </div>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OgFairnessSeedComponent, { className: "OgFairnessSeedComponent", filePath: "src/app/pages/og-fairness-seed/og-fairness-seed.component.ts", lineNumber: 14 });
})();

// src/app/components/ap-og-fairness-verify-chicken/chickenRoadFormula.ts
var import_crypto_js = __toESM(require_crypto_js());
var LEVEL_COUNT = [28, 24, 20, 16];
var WHEEL_SYMBOL_POS = [
  [1, 3, 5, 6, 8, 10, 11, 12, 15, 18, 21, 24, 28],
  [1, 3, 5, 7, 10, 13, 16, 19, 22, 24],
  [2, 4, 5, 7, 11, 14, 17, 20],
  [1, 3, 5, 7, 10, 13, 16]
];
var PASS_PROBABILITY = [
  [
    "0.972245313",
    "0.980582524",
    "0.954988517",
    "0.963636364",
    "0.941339972",
    "0.936065124",
    "0.937984496",
    "0.915837384",
    "0.920529801",
    "0.904979003",
    "0.902355805",
    "0.90114894",
    "0.908675799",
    "0.904958678",
    "0.896778896",
    "0.902356902",
    "0.902735562",
    "0.899264107",
    "0.905472637",
    "0.90744921",
    "0.906199736",
    "0.911985019",
    "0.912820513",
    "0.910003458",
    "0.87568306",
    "0.858147714",
    "0.706125828",
    "0.519378962"
  ],
  [
    "0.910044802",
    "0.892561983",
    "0.871226276",
    "0.985611511",
    "0.880389297",
    "0.876404494",
    "0.860382619",
    "0.864978903",
    "0.855595668",
    "0.849993878",
    "0.841558442",
    "0.833333333",
    "0.820771998",
    "0.81186686",
    "0.799768519",
    "0.679841373",
    "0.669656992",
    "0.60292714",
    "0.678997254",
    "0.567381974",
    "0.594691169",
    "0.38540357",
    "0.556347829",
    "0.257067864"
  ],
  [
    "0.757575758",
    "0.745801898",
    "0.791855204",
    "0.744131045",
    "0.768247773",
    "0.760956175",
    "0.751507469",
    "0.736725664",
    "0.722044728",
    "0.705749718",
    "0.687066766",
    "0.666494446",
    "0.642916459",
    "0.618427049",
    "0.583328339",
    "0.545433745",
    "0.513425602",
    "0.255672456",
    "0.295802142",
    "0.393938608"
  ],
  [
    "0.504488179",
    "0.597560976",
    "0.788043459",
    "0.444683136",
    "0.631520097",
    "0.651039363",
    "0.37488265",
    "0.516535298",
    "0.645289695",
    "0.522197724",
    "0.547103052",
    "0.23076895",
    "0.528570351",
    "0.315314992",
    "0.316666423",
    "0.287081525"
  ]
];
var WHEEL_TRIGGERED = [
  [9900, 100],
  [9900, 100],
  [9900, 100],
  [9900, 100]
];
var WHEEL_MULTIPLIER_VALUE = [
  [1, 3, 5, 8, 10, 30, 50, 100, 1e3, 1e4],
  [1, 3, 5, 8, 30, 50, 100, 500, 1e3, 1e4],
  [1, 3, 5, 8, 50, 100, 500, 1e3, 3e3, 1e4],
  [1, 3, 5, 8, 100, 500, 1e3, 3e3, 5e3, 1e4]
];
var WHEEL_MULTIPLIER_WEIGHT = [
  [64500, 35e3, 354, 100, 20, 10, 8, 5, 2, 1],
  [64500, 35e3, 354, 100, 20, 10, 8, 5, 2, 1],
  [64500, 35e3, 354, 100, 20, 10, 8, 5, 2, 1],
  [64500, 35e3, 354, 100, 20, 10, 8, 5, 2, 1]
];
var DASH_NUMBER_VALUE = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3]
];
var DASH_NUMBER_WEIGHT = [
  [18, 1, 1],
  [13, 1, 1],
  [8, 1, 1],
  [12, 1, 1]
];
var SUPPORTED_RTP = [96, 99];
var DIFFICULTY_RATES = [
  [1.01, 1.03, 1.06, 1.1, 1.15, 1.21, 1.29, 1.39, 1.51, 1.65, 1.81, 1.99, 2.19, 2.42, 2.68, 2.97, 3.29, 3.64, 4.02, 4.43, 4.87, 5.34, 5.85, 6.41, 7.32, 8.53, 12.08, 23.24],
  [1.08, 1.21, 1.37, 1.39, 1.56, 1.78, 2.05, 2.37, 2.77, 3.24, 3.85, 4.62, 5.61, 6.91, 8.64, 12.69, 18.95, 31.43, 46.27, 81.55, 137.13, 355.79, 639.51, 2487.69],
  [1.32, 1.75, 2.21, 2.95, 3.82, 5.02, 6.66, 9.04, 12.52, 17.74, 25.8, 38.71, 60.21, 97.34, 166.87, 305.94, 595.86, 2330.56, 7878.78, 2e4],
  [1.96, 3.28, 4.14, 9.31, 14.72, 22.61, 60.29, 116.72, 180.88, 346.36, 633.08, 2743.35, 5190.11, 16460.08, 51979.24, 181060.9]
];
function parseDecimal(s) {
  const dot = s.indexOf(".");
  if (dot < 0)
    return { num: BigInt(s), den: 1n };
  const decimals = s.length - dot - 1;
  return { num: BigInt(s.replace(".", "")), den: 10n ** BigInt(decimals) };
}
var STAGE = {
  WheelTrigger: 0,
  // trigger wheel symbol
  WheelMultiplier: 1,
  // every wheel multiplier
  DashNumber: 2,
  // dash number
  CrashPoint: 3
  // crash point
};
function getStageHex(serverSeed, clientSeed, nonce, stage) {
  let hex = "";
  for (let cnt = stage * 4; cnt < stage * 4 + 4; cnt++) {
    hex += import_crypto_js.default.HmacSHA256(`${clientSeed}:${nonce}:${cnt}`, serverSeed).toString(import_crypto_js.default.enc.Hex);
  }
  return hex;
}
var TWO_POW_32 = 4294967296n;
function get4ByteRaw(hex, index) {
  return BigInt("0x" + hex.substring(index * 8, index * 8 + 8));
}
function hexToWeight(hex, index, scale) {
  return Number(get4ByteRaw(hex, index) * BigInt(scale) >> 32n);
}
function isLessThan(hex, index, prob) {
  return get4ByteRaw(hex, index) * prob.den < prob.num * TWO_POW_32;
}
function getWeightRangeIndex(weights, weight) {
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += weights[i];
    if (weight < sum)
      return i;
  }
  return weights.length - 1;
}
function sumWeights(weights) {
  return weights.reduce((a, b) => a + b, 0);
}
function getWheelMultipliers(triggerHex, multiplierHex, difficulty) {
  const levelCount = LEVEL_COUNT[difficulty];
  const triggerWeights = WHEEL_TRIGGERED[difficulty];
  const multiplierWeights = WHEEL_MULTIPLIER_WEIGHT[difficulty];
  const multipliers = new Array(levelCount).fill(0);
  let symbolIndex = 0;
  let triggeredIndex = 0;
  for (const pos of WHEEL_SYMBOL_POS[difficulty]) {
    if (pos < 1 || pos > levelCount)
      continue;
    const triggerWeight = hexToWeight(triggerHex, symbolIndex, sumWeights(triggerWeights));
    symbolIndex++;
    if (getWeightRangeIndex(triggerWeights, triggerWeight) !== 1)
      continue;
    const multiplierWeight = hexToWeight(multiplierHex, triggeredIndex, sumWeights(multiplierWeights));
    triggeredIndex++;
    multipliers[pos - 1] = WHEEL_MULTIPLIER_VALUE[difficulty][getWeightRangeIndex(multiplierWeights, multiplierWeight)];
  }
  return multipliers;
}
function getDashNumber(dashHex, level, difficulty) {
  const weights = DASH_NUMBER_WEIGHT[difficulty];
  const weight = hexToWeight(dashHex, level - 1, sumWeights(weights));
  return DASH_NUMBER_VALUE[difficulty][getWeightRangeIndex(weights, weight)];
}
function getPassProbability(difficulty, fromLevel, toLevel) {
  let prob = { num: 1n, den: 1n };
  for (let level = fromLevel; level <= toLevel; level++) {
    const p = parseDecimal(PASS_PROBABILITY[difficulty][level - 1]);
    prob = { num: prob.num * p.num, den: prob.den * p.den };
  }
  return prob;
}
function calcSpinResult(params) {
  const { rtp, serverSeed, clientSeed, nonce, difficulty } = params;
  if (!SUPPORTED_RTP.includes(rtp)) {
    throw new Error(`unsupported rtp: ${rtp} (only ${SUPPORTED_RTP.join(", ")})`);
  }
  if (typeof serverSeed !== "string" || serverSeed.length === 0) {
    throw new Error("serverSeed is required");
  }
  if (typeof clientSeed !== "string" || clientSeed.length === 0) {
    throw new Error("clientSeed is required");
  }
  if (!Number.isInteger(nonce) || nonce < 0) {
    throw new Error(`invalid nonce: ${nonce} (must be an integer >= 0)`);
  }
  if (!Number.isInteger(difficulty) || difficulty < 0 || difficulty >= LEVEL_COUNT.length) {
    throw new Error(`invalid difficulty: ${difficulty} (must be 0 ~ ${LEVEL_COUNT.length - 1})`);
  }
  const levelCount = LEVEL_COUNT[difficulty];
  const multipliers = getWheelMultipliers(getStageHex(serverSeed, clientSeed, nonce, STAGE.WheelTrigger), getStageHex(serverSeed, clientSeed, nonce, STAGE.WheelMultiplier), difficulty);
  const dashHex = getStageHex(serverSeed, clientSeed, nonce, STAGE.DashNumber);
  const crashHex = getStageHex(serverSeed, clientSeed, nonce, STAGE.CrashPoint);
  const wheel = [];
  const rtpProb = parseDecimal(String(rtp));
  if (!isLessThan(crashHex, 0, { num: rtpProb.num, den: rtpProb.den * 100n })) {
    return { wheel, death: 1 };
  }
  let current = 0;
  let crashIndex = 1;
  while (current < levelCount) {
    const target = Math.min(current + getDashNumber(dashHex, current + 1, difficulty), levelCount);
    const passed = isLessThan(crashHex, crashIndex, getPassProbability(difficulty, current + 1, target));
    crashIndex++;
    if (!passed) {
      return { wheel, death: current + 1 };
    }
    for (let level = current + 1; level <= target; level++) {
      if (multipliers[level - 1] > 0) {
        wheel.push({ step: level, multiplier: String(multipliers[level - 1]) });
      }
    }
    current = target;
  }
  const result = { wheel, death: levelCount + 1 };
  return result;
}

// src/ap-components-lib/ap-button-custom/ap-button-custom.component.ts
var _c0 = ["*"];
function ApButtonCustomComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "ap-icon", 4);
    \u0275\u0275elementStart(2, "span", 5);
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.iconSizeClass);
  }
}
function ApButtonCustomComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.iconSizeClass);
    \u0275\u0275property("name", ctx_r0.icon());
  }
}
function ApButtonCustomComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label());
  }
}
function ApButtonCustomComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-icon", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.iconSizeClass);
    \u0275\u0275property("name", ctx_r0.icon());
  }
}
var ApButtonCustomComponent = class _ApButtonCustomComponent {
  label = input("");
  icon = input("");
  iconPos = input("left");
  /** 顯示的色碼 */
  colorCode = input("#000000");
  disabled = input(false);
  loading = input(false);
  link = input(false);
  type = input("button");
  size = input("medium");
  rounded = input(false);
  raised = input(false);
  text = input(false);
  outlined = input(false);
  /** 受到Disable保護的Click */
  clicked = output();
  get buttonClasses() {
    const classes = [
      "inline-flex",
      "items-center",
      "justify-center",
      "gap-2",
      "font-semibold",
      "border",
      "outline-none",
      "px-2",
      "py-2"
    ];
    if (this.size() === "mini") {
      classes.push("text-xs");
    } else if (this.size() === "small") {
      classes.push("text-base");
    } else if (this.size() === "large") {
      classes.push("text-lg");
    } else {
      classes.push("text-md");
    }
    const isIconOnly = this.isIconOnly;
    if (isIconOnly) {
      classes.length = 0;
      classes.push("inline-flex", "items-center", "justify-center", this.rounded() ? "rounded-full" : "rounded-md", "border", "aspect-square");
      if (this.size() === "mini") {
        classes.push("w-6", "h-6");
      } else if (this.size() === "small") {
        classes.push("w-8", "h-8");
      } else if (this.size() === "large") {
        classes.push("w-12", "h-12");
      } else {
        classes.push("w-10", "h-10");
      }
    } else if (this.rounded()) {
      classes.push("rounded-full");
    } else {
      classes.push("rounded-md");
    }
    if (this.text()) {
      classes.push("bg-transparent", "border-transparent", "ap-btn-variant-text");
    } else if (this.outlined()) {
      classes.push("bg-transparent", "ap-btn-variant-outlined");
    } else {
      classes.push("ap-btn-variant-filled");
      if (this.raised()) {
        classes.push("shadow-lg");
      }
    }
    if (this.disabled() || this.loading()) {
      classes.push("opacity-60", "cursor-not-allowed");
    } else {
      classes.push("cursor-pointer");
    }
    return classes.join(" ");
  }
  get buttonStyle() {
    const color = this.colorCode();
    const vars = {
      "--ap-btn-color": color,
      "--ap-btn-color-hover": this.adjustColorBrightness(color, 0.15),
      "--ap-btn-color-active": this.adjustColorBrightness(color, -0.15)
    };
    return vars;
  }
  /** amount: -1~1，正值提高亮度、負值降低亮度 */
  adjustColorBrightness(hex, amount) {
    const normalized = hex.replace("#", "");
    const full = normalized.length === 3 ? normalized.split("").map((c) => c + c).join("") : normalized;
    const bigint = parseInt(full, 16);
    if (Number.isNaN(bigint)) {
      return hex;
    }
    const r = bigint >> 16 & 255;
    const g = bigint >> 8 & 255;
    const b = bigint & 255;
    const adjust = (channel) => amount >= 0 ? channel + (255 - channel) * amount : channel * (1 + amount);
    const toHex = (channel) => Math.round(Math.max(0, Math.min(255, adjust(channel)))).toString(16).padStart(2, "0");
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }
  get iconSizeClass() {
    if (this.size() === "large")
      return "size-7";
    if (this.size() === "mini")
      return "size-3";
    return "size-5";
  }
  get isIconOnly() {
    return !!this.icon() && !this.label();
  }
  handleClick(event) {
    if (!this.disabled() && !this.loading()) {
      this.clicked.emit(event);
    }
  }
  static \u0275fac = function ApButtonCustomComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApButtonCustomComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApButtonCustomComponent, selectors: [["ap-button-custom"]], inputs: { label: [1, "label"], icon: [1, "icon"], iconPos: [1, "iconPos"], colorCode: [1, "colorCode"], disabled: [1, "disabled"], loading: [1, "loading"], link: [1, "link"], type: [1, "type"], size: [1, "size"], rounded: [1, "rounded"], raised: [1, "raised"], text: [1, "text"], outlined: [1, "outlined"] }, outputs: { clicked: "clicked" }, ngContentSelectors: _c0, decls: 6, vars: 9, consts: [[1, "relative", "w-full", 3, "click", "type", "disabled", "ngStyle"], ["role", "status", 1, "flex", "items-center", "justify-center", "gap-2"], [3, "name", "class"], [1, "ap-button-custom-label"], ["name", "loading"], [1, "sr-only"], [3, "name"]], template: function ApButtonCustomComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function ApButtonCustomComponent_Template_button_click_0_listener($event) {
        return ctx.handleClick($event);
      });
      \u0275\u0275conditionalCreate(1, ApButtonCustomComponent_Conditional_1_Template, 4, 2, "div", 1);
      \u0275\u0275conditionalCreate(2, ApButtonCustomComponent_Conditional_2_Template, 1, 3, "ap-icon", 2);
      \u0275\u0275conditionalCreate(3, ApButtonCustomComponent_Conditional_3_Template, 2, 1, "div", 3);
      \u0275\u0275conditionalCreate(4, ApButtonCustomComponent_Conditional_4_Template, 1, 3, "ap-icon", 2);
      \u0275\u0275projection(5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275classMap(ctx.buttonClasses);
      \u0275\u0275property("type", ctx.type())("disabled", ctx.disabled() || ctx.loading())("ngStyle", ctx.buttonStyle);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.icon() && ctx.iconPos() === "left" && !ctx.loading() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.label() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.icon() && ctx.iconPos() === "right" && !ctx.loading() ? 4 : -1);
    }
  }, dependencies: [CommonModule, NgStyle, ApIconComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n}\n.hidden[_nghost-%COMP%] {\n  display: none;\n}\nbutton[_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n  appearance: none;\n  border-style: solid;\n  border-width: 1px;\n}\nbutton.ap-btn-variant-filled[_ngcontent-%COMP%] {\n  background-color: var(--ap-btn-color);\n  border-color: var(--ap-btn-color);\n  color: #ffffff;\n}\nbutton.ap-btn-variant-filled[_ngcontent-%COMP%]:not(:disabled):hover {\n  background-color: var(--ap-btn-color-hover);\n  border-color: var(--ap-btn-color-hover);\n}\nbutton.ap-btn-variant-filled[_ngcontent-%COMP%]:not(:disabled):active {\n  background-color: var(--ap-btn-color-active);\n  border-color: var(--ap-btn-color-active);\n}\nbutton.ap-btn-variant-outlined[_ngcontent-%COMP%] {\n  color: var(--ap-btn-color);\n  border-color: var(--ap-btn-color);\n}\nbutton.ap-btn-variant-outlined[_ngcontent-%COMP%]:not(:disabled):hover {\n  color: var(--ap-btn-color-hover);\n  border-color: var(--ap-btn-color-hover);\n}\nbutton.ap-btn-variant-outlined[_ngcontent-%COMP%]:not(:disabled):active {\n  color: var(--ap-btn-color-active);\n  border-color: var(--ap-btn-color-active);\n}\nbutton.ap-btn-variant-text[_ngcontent-%COMP%] {\n  color: var(--ap-btn-color);\n}\nbutton.ap-btn-variant-text[_ngcontent-%COMP%]:not(:disabled):hover {\n  color: var(--ap-btn-color-hover);\n}\nbutton.ap-btn-variant-text[_ngcontent-%COMP%]:not(:disabled):active {\n  color: var(--ap-btn-color-active);\n}\n/*# sourceMappingURL=ap-button-custom.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApButtonCustomComponent, [{
    type: Component,
    args: [{ selector: "ap-button-custom", imports: [CommonModule, ApIconComponent], template: `<button
  [type]="type()"
  [disabled]="disabled() || loading()"
  [class]="buttonClasses"
  [ngStyle]="buttonStyle"
  (click)="handleClick($event)"
  class="relative w-full"
>
  @if (loading()) {
  <div
    role="status"
    class="flex items-center justify-center gap-2"
  >
    <ap-icon name="loading" [class]="iconSizeClass" />
    <span class="sr-only">Loading...</span>
  </div>
  } @if (icon() && iconPos() === 'left' && !loading()) {
  <ap-icon [name]="icon()" [class]="iconSizeClass" />
  } @if (label()) {
  <div class="ap-button-custom-label">{{ label() }}</div>
  } @if (icon() && iconPos() === 'right' && !loading()) {
  <ap-icon [name]="icon()" [class]="iconSizeClass" />
  }

  <ng-content></ng-content>
</button>
`, styles: ["/* src/ap-components-lib/ap-button-custom/ap-button-custom.component.css */\n:host {\n  display: inline-block;\n}\n:host(.hidden) {\n  display: none;\n}\nbutton {\n  -webkit-appearance: none;\n  appearance: none;\n  border-style: solid;\n  border-width: 1px;\n}\nbutton.ap-btn-variant-filled {\n  background-color: var(--ap-btn-color);\n  border-color: var(--ap-btn-color);\n  color: #ffffff;\n}\nbutton.ap-btn-variant-filled:not(:disabled):hover {\n  background-color: var(--ap-btn-color-hover);\n  border-color: var(--ap-btn-color-hover);\n}\nbutton.ap-btn-variant-filled:not(:disabled):active {\n  background-color: var(--ap-btn-color-active);\n  border-color: var(--ap-btn-color-active);\n}\nbutton.ap-btn-variant-outlined {\n  color: var(--ap-btn-color);\n  border-color: var(--ap-btn-color);\n}\nbutton.ap-btn-variant-outlined:not(:disabled):hover {\n  color: var(--ap-btn-color-hover);\n  border-color: var(--ap-btn-color-hover);\n}\nbutton.ap-btn-variant-outlined:not(:disabled):active {\n  color: var(--ap-btn-color-active);\n  border-color: var(--ap-btn-color-active);\n}\nbutton.ap-btn-variant-text {\n  color: var(--ap-btn-color);\n}\nbutton.ap-btn-variant-text:not(:disabled):hover {\n  color: var(--ap-btn-color-hover);\n}\nbutton.ap-btn-variant-text:not(:disabled):active {\n  color: var(--ap-btn-color-active);\n}\n/*# sourceMappingURL=ap-button-custom.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApButtonCustomComponent, { className: "ApButtonCustomComponent", filePath: "src/ap-components-lib/ap-button-custom/ap-button-custom.component.ts", lineNumber: 11 });
})();

// src/app/components/ap-og-fairness-verify-chicken/ap-og-fairness-verify-chicken.component.ts
var _c02 = ["scrollContainer"];
function ApOgFairnessVerifyChickenComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "h5", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "appI18n");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, "og_fair_resultEmpty", "Please enter more information to verify the results."), " ");
  }
}
var ApOgFairnessVerifyChickenComponent = class _ApOgFairnessVerifyChickenComponent {
  appI18n = inject(AppI18nService);
  seedPattern = /^[A-Za-z0-9]$/;
  verifyColorCode = input("#DB3737");
  scrollContainer = viewChild("scrollContainer");
  initialSeedData = input(null);
  provableClicked = output();
  maxPointByDifficulty = {
    easy: 28,
    medium: 24,
    hard: 20,
    expert: 16
  };
  invalidInput = computed(() => {
    return this.verifyClientSeed().length < 1 || this.verifyClientSeed().length > 64 || this.verifyServerSeed().length !== 64 || isNaN(Number(this.verifyNonce()));
  });
  wheelResult = signal(null);
  deathPoint = signal(null);
  maxMultiplier = computed(() => {
    if (this.deathPoint() === null)
      return 0;
    const difficulty = OgChickenDifficultyEnum[this.verifyDifficulty()];
    const deathIndex = this.deathPoint() - 1;
    return DIFFICULTY_RATES[difficulty][deathIndex - 1] ?? 0;
  });
  /** ex: 1, 3, 5 */
  displayedBonusPoint = computed(() => {
    if (this.invalidInput())
      return "--";
    if (!this.wheelResult())
      return "--";
    else if (this.wheelResult().length === 0)
      return "--";
    return this.wheelResult().map((w) => w.step).join(", ");
  });
  /** ex: 1, 10, 1000 */
  displayedBonusMultiplier = computed(() => {
    if (this.invalidInput())
      return "--";
    if (!this.wheelResult())
      return "--";
    else if (this.wheelResult().length === 0)
      return "--";
    return this.wheelResult().map((w) => w.multiplier).join("x, ") + "x";
  });
  /** ex: 6 */
  displayedDeadPoint = computed(() => {
    if (this.invalidInput())
      return "--";
    if (this.deathPoint() === null)
      return "--";
    if (this.deathPoint() > this.maxPointByDifficulty[this.verifyDifficulty()])
      return "--";
    return this.deathPoint().toString();
  });
  /** ex: 23.24 */
  displayedMaxMultiplier = computed(() => {
    if (this.invalidInput())
      return "--";
    if (this.maxMultiplier() === 0)
      return "--";
    return this.maxMultiplier().toFixed(2) + "x";
  });
  /** 玩家可自行輸入的驗證欄位 */
  verifyClientSeed = signal("");
  verifyServerSeed = signal("");
  verifyServerSeedHashedText = signal("");
  verifyNonce = signal("");
  verifyDifficulty = signal("easy");
  /** RTP不會顯示在畫面上, 由程式自動帶入 */
  initialRtp = input("96");
  /** 預期 RTP (float) */
  verifyRtp = signal("");
  ngAfterViewInit() {
    const seedData = this.initialSeedData();
    this.verifyClientSeed.set(seedData?.clientSeed ?? "");
    this.verifyServerSeed.set(seedData?.serverSeed ?? "");
    this.verifyServerSeedHashedText.set(seedData?.serverSeedHashed ?? "");
    this.verifyNonce.set(seedData?.nonce ?? "");
    this.verifyDifficulty.set(seedData?.difficulty ?? "easy");
    this.verifyRtp.set(seedData?.rtp ?? this.initialRtp());
    if (seedData?.serverSeed && seedData.serverSeed.length > 0) {
      this.clickVerify();
    }
  }
  setDiplayedResult(result) {
    this.wheelResult.set(result.wheel);
    this.deathPoint.set(result.death);
  }
  changeVerifyClientSeed(value) {
    this.wheelResult.set(null);
    this.deathPoint.set(null);
    this.verifyClientSeed.set(value);
  }
  changeVerifyServerSeed(value) {
    this.wheelResult.set(null);
    this.deathPoint.set(null);
    this.verifyServerSeed.set(value);
  }
  changeVerifyServerSeedHashed(value) {
    this.wheelResult.set(null);
    this.deathPoint.set(null);
    this.verifyServerSeedHashedText.set(value);
  }
  changeVerifyNonce(value) {
    this.wheelResult.set(null);
    this.deathPoint.set(null);
    this.verifyNonce.set(value);
  }
  changeVerifyDifficulty(value) {
    this.wheelResult.set(null);
    this.deathPoint.set(null);
    this.verifyDifficulty.set(value);
  }
  clickVerify() {
    const input2 = {
      rtp: Number(this.verifyRtp()),
      clientSeed: this.verifyClientSeed(),
      serverSeed: this.verifyServerSeed(),
      nonce: Math.floor(Number(this.verifyNonce())),
      difficulty: OgChickenDifficultyEnum[this.verifyDifficulty()]
    };
    const result = calcSpinResult(input2);
    this.setDiplayedResult(result);
    this.scrollContainer()?.nativeElement.scrollTo({ top: 0, behavior: "smooth" });
  }
  clickProvable() {
    this.provableClicked.emit();
  }
  static \u0275fac = function ApOgFairnessVerifyChickenComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApOgFairnessVerifyChickenComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApOgFairnessVerifyChickenComponent, selectors: [["ap-og-fairness-verify-chicken"]], viewQuery: function ApOgFairnessVerifyChickenComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.scrollContainer, _c02, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance();
    }
  }, inputs: { verifyColorCode: [1, "verifyColorCode"], initialSeedData: [1, "initialSeedData"], initialRtp: [1, "initialRtp"] }, outputs: { provableClicked: "provableClicked" }, decls: 24, vars: 63, consts: [["scrollContainer", ""], [1, "relative", "h-full", "overflow-auto", "p-4"], [1, "relative", "bg-zinc-900", "p-4", "rounded-lg", 2, "border", "1px solid #3f3f46"], [1, "flex", "flex-col", "space-y-2"], ["inputType", "text", 3, "currencyImage", "value", "label", "disabled"], ["inputType", "text", 3, "currencyImage", "maxLength", "value", "label", "disabled"], [1, "absolute", "p-2", "inset-0", "flex", "items-center", "justify-center", "rounded-lg", "popup-overlay"], [1, "flex-col", "flex", "space-y-2", "mt-4"], ["inputType", "text", 3, "currencyImage", "label", "placeholder", "disabled"], [3, "onInput", "label", "currencyImage", "maxLength", "allowedCharacterPattern", "accentColor", "value"], ["inputType", "text", 3, "valueChange", "currencyImage", "allowedCharacterPattern", "maxLength", "label", "value"], ["type", "nonce", 3, "valueChange", "currencyImage", "maxLength", "value"], ["type", "difficulty", 3, "valueChange", "currencyImage", "label", "value"], [1, "mt-6", 3, "clicked", "rounded", "icon", "disabled", "label", "colorCode"], [1, "mt-4", "mx-auto", "cursor-pointer", "text-zinc-400", "underline", 3, "click"], [1, "text-center", "stroke-black", "tracking-wide", "text-shadow-lg"]], template: function ApOgFairnessVerifyChickenComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1, 0)(2, "div", 2)(3, "div", 3);
      \u0275\u0275element(4, "ap-og-input", 4)(5, "ap-og-input", 4)(6, "ap-og-input", 4)(7, "ap-og-input", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, ApOgFairnessVerifyChickenComponent_Conditional_8_Template, 4, 4, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7);
      \u0275\u0275element(10, "ap-og-input", 8);
      \u0275\u0275pipe(11, "appI18n");
      \u0275\u0275elementStart(12, "ap-input-box", 9);
      \u0275\u0275pipe(13, "appI18n");
      \u0275\u0275listener("onInput", function ApOgFairnessVerifyChickenComponent_Template_ap_input_box_onInput_12_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.changeVerifyClientSeed($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "ap-og-input", 10);
      \u0275\u0275pipe(15, "appI18n");
      \u0275\u0275listener("valueChange", function ApOgFairnessVerifyChickenComponent_Template_ap_og_input_valueChange_14_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.changeVerifyServerSeed($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "ap-og-input", 11);
      \u0275\u0275listener("valueChange", function ApOgFairnessVerifyChickenComponent_Template_ap_og_input_valueChange_16_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.changeVerifyNonce($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "ap-og-input", 12);
      \u0275\u0275pipe(18, "appI18n");
      \u0275\u0275listener("valueChange", function ApOgFairnessVerifyChickenComponent_Template_ap_og_input_valueChange_17_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.changeVerifyDifficulty($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "ap-button-custom", 13);
      \u0275\u0275pipe(20, "appI18n");
      \u0275\u0275listener("clicked", function ApOgFairnessVerifyChickenComponent_Template_ap_button_custom_clicked_19_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clickVerify());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 14);
      \u0275\u0275listener("click", function ApOgFairnessVerifyChickenComponent_Template_button_click_21_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.clickProvable());
      });
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "appI18n");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("currencyImage", false)("value", ctx.displayedBonusPoint())("label", ctx.appI18n.gameStr("history_event_2") ?? "Bonus Point")("disabled", true);
      \u0275\u0275advance();
      \u0275\u0275property("currencyImage", false)("value", ctx.displayedBonusMultiplier())("label", ctx.appI18n.gameStr("history_event_3") ?? "Bonus Multiplier")("disabled", true);
      \u0275\u0275advance();
      \u0275\u0275property("currencyImage", false)("value", ctx.displayedDeadPoint())("label", ctx.appI18n.gameStr("history_event_4") ?? "Death Point")("disabled", true);
      \u0275\u0275advance();
      \u0275\u0275property("currencyImage", false)("maxLength", 64)("value", ctx.displayedMaxMultiplier())("label", ctx.appI18n.gameStr("history_event_5") ?? "Max Multiplier")("disabled", true);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.invalidInput() ? 8 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("currencyImage", false)("label", \u0275\u0275pipeBind2(11, 45, "og_fair_gameList", "Game"))("placeholder", ctx.appI18n.gameStr("game_title") ?? "Chicken Rush")("disabled", true);
      \u0275\u0275advance(2);
      \u0275\u0275property("label", \u0275\u0275pipeBind2(13, 48, "og_fair_clientSeed", "Client Seed"))("currencyImage", false)("maxLength", 64)("allowedCharacterPattern", ctx.seedPattern)("accentColor", "slate")("value", ctx.verifyClientSeed());
      \u0275\u0275advance(2);
      \u0275\u0275property("currencyImage", false)("allowedCharacterPattern", ctx.seedPattern)("maxLength", 64)("label", \u0275\u0275pipeBind2(15, 51, "og_fair_serverSeed", "Server Seed"))("value", ctx.verifyServerSeed());
      \u0275\u0275advance(2);
      \u0275\u0275property("currencyImage", false)("maxLength", 64)("value", ctx.verifyNonce());
      \u0275\u0275advance();
      \u0275\u0275property("currencyImage", false)("label", \u0275\u0275pipeBind2(18, 54, "og_guide_4", "Difficulty"))("value", ctx.verifyDifficulty());
      \u0275\u0275advance(2);
      \u0275\u0275property("rounded", false)("icon", "shield")("disabled", ctx.invalidInput())("label", \u0275\u0275pipeBind2(20, 57, "og_fair_verify", "Verify"))("colorCode", ctx.verifyColorCode());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(23, 60, "og_fair_viewInfo", "What is Provable Fairness?"), " ");
    }
  }, dependencies: [CommonModule, AppI18nPipe, ApOgInputComponent, ApInputBox, ApButtonCustomComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApOgFairnessVerifyChickenComponent, [{
    type: Component,
    args: [{ selector: "ap-og-fairness-verify-chicken", imports: [CommonModule, AppI18nPipe, ApOgInputComponent, ApInputBox, ApButtonCustomComponent], template: `<div class="relative h-full overflow-auto p-4" #scrollContainer>
  <!-- \u5F9E\u6B77\u53F2\u7D00\u9304\u958B\u555F\uFF1A\u986F\u793A\u8A72\u5C40\u5BE6\u969B\u7D50\u679C -->
  <div
    class="relative bg-zinc-900 p-4 rounded-lg"
    style="border: 1px solid #3f3f46"
  >
    <div class="flex flex-col space-y-2">
      <ap-og-input
        inputType="text"
        [currencyImage]="false"
        [value]="displayedBonusPoint()"
        [label]="appI18n.gameStr('history_event_2') ?? 'Bonus Point'"
        [disabled]="true"
      />
      <ap-og-input
        inputType="text"
        [currencyImage]="false"
        [value]="displayedBonusMultiplier()"
        [label]="appI18n.gameStr('history_event_3') ?? 'Bonus Multiplier'"
        [disabled]="true"
      />
      <ap-og-input
        inputType="text"
        [currencyImage]="false"
        [value]="displayedDeadPoint()"
        [label]="appI18n.gameStr('history_event_4') ?? 'Death Point'"
        [disabled]="true"
      />
      <ap-og-input
        inputType="text"
        [currencyImage]="false"
        [maxLength]="64"
        [value]="displayedMaxMultiplier()"
        [label]="appI18n.gameStr('history_event_5') ?? 'Max Multiplier'"
        [disabled]="true"
      />
    </div>
    @if (invalidInput()) {
      <div
        class="absolute p-2 inset-0 flex items-center justify-center rounded-lg popup-overlay"
      >
        <h5 class="text-center stroke-black tracking-wide text-shadow-lg">
          {{
            "og_fair_resultEmpty"
              | appI18n: "Please enter more information to verify the results."
          }}
        </h5>
      </div>
    }
  </div>

  <!-- \u9A57\u8B49\u5340\u584A\uFF1A\u5F9E\u9078\u55AE\u76F4\u63A5\u958B\u555F\u6642\uFF0C\u53EA\u6709\u9019\u500B\u641C\u5C0B\u8868\u55AE\uFF0C\u6C92\u6709\u4E0A\u65B9\u6B77\u53F2\u7D00\u9304 -->
  <div class="flex-col flex space-y-2 mt-4">
    <ap-og-input
      inputType="text"
      [currencyImage]="false"
      [label]="'og_fair_gameList' | appI18n: 'Game'"
      [placeholder]="appI18n.gameStr('game_title') ?? 'Chicken Rush'"
      [disabled]="true"
    />
    <ap-input-box
      [label]="'og_fair_clientSeed' | appI18n: 'Client Seed'"
      [currencyImage]="false"
      [maxLength]="64"
      [allowedCharacterPattern]="seedPattern"
      [accentColor]="'slate'"
      [value]="verifyClientSeed()"
      (onInput)="changeVerifyClientSeed($event)"
    />
    <ap-og-input
      inputType="text"
      [currencyImage]="false"
      [allowedCharacterPattern]="seedPattern"
      [maxLength]="64"
      [label]="'og_fair_serverSeed' | appI18n: 'Server Seed'"
      [value]="verifyServerSeed()"
      (valueChange)="changeVerifyServerSeed($event)"
    />
    <ap-og-input
      type="nonce"
      [currencyImage]="false"
      [maxLength]="64"
      [value]="verifyNonce()"
      (valueChange)="changeVerifyNonce($event)"
    />
    <ap-og-input
      type="difficulty"
      [currencyImage]="false"
      [label]="'og_guide_4' | appI18n: 'Difficulty'"
      [value]="verifyDifficulty()"
      (valueChange)="changeVerifyDifficulty($event)"
    />
    <ap-button-custom
      [rounded]="false"
      [icon]="'shield'"
      [disabled]="invalidInput()"
      [label]="'og_fair_verify' | appI18n: 'Verify'"
      class="mt-6"
      [colorCode]="verifyColorCode()"
      (clicked)="clickVerify()"
    ></ap-button-custom>
    <button
      class="mt-4 mx-auto cursor-pointer text-zinc-400 underline"
      (click)="clickProvable()"
    >
      {{ "og_fair_viewInfo" | appI18n: "What is Provable Fairness?" }}
    </button>
  </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApOgFairnessVerifyChickenComponent, { className: "ApOgFairnessVerifyChickenComponent", filePath: "src/app/components/ap-og-fairness-verify-chicken/ap-og-fairness-verify-chicken.component.ts", lineNumber: 17 });
})();

// src/app/pages/og-fairness/og-fairness.component.ts
function OgFairnessComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-og-provably-fair", 10);
  }
}
var OgFairnessComponent = class _OgFairnessComponent {
  appI18n = inject(AppI18nService);
  wallet = inject(OgWalletService);
  // inputs
  initialView = input("fairness");
  initialSelectedTab = input("seeds");
  initialSeedData = input(null);
  // outputs
  close = output();
  /** 畫面有分fairness與provable兩種頁面 */
  currentView = signal("fairness");
  /** fairness頁面有 seeds 跟 verify 兩個分頁 */
  selectedTab = signal("seeds");
  /** fairness頁面分頁名稱 seeds | verify */
  tabs = computed(() => [
    { id: "seeds", label: this.appI18n.instant("og_fair_seeds", "Seeds") },
    { id: "verify", label: this.appI18n.instant("og_fair_verify", "Verify") }
  ]);
  /** 讀取玩家登入時的 RTP */
  rtp = computed(() => this.wallet.rtp());
  ngOnInit() {
    this.currentView.set(this.initialView());
    this.selectedTab.set(this.initialSelectedTab());
  }
  selectTab(tabId) {
    this.selectedTab.set(tabId);
  }
  clickProvable() {
    this.currentView.set("provable");
  }
  static \u0275fac = function OgFairnessComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OgFairnessComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OgFairnessComponent, selectors: [["og-fairness"]], inputs: { initialView: [1, "initialView"], initialSelectedTab: [1, "initialSelectedTab"], initialSeedData: [1, "initialSeedData"] }, outputs: { close: "close" }, decls: 12, vars: 14, consts: [[1, "fixed", "inset-0", "grid", "place-items-center"], [1, "absolute", "inset-0", "popup-overlay", "fade-out"], [1, "relative", "w-full", "md:w-md"], [1, "relative", 3, "back", "close", "header", "enableBack"], [1, "relative", "px-4", "pt-4"], [1, "rounded-lg", 2, "border", "1px solid #62748e"], [3, "tabChange", "accentColor", "tabs", "selectedTab"], [1, "h-128", "overflow-y-auto", "space-y-6"], [3, "hidden"], [3, "provableClicked", "hidden", "initialRtp", "initialSeedData"], [1, "absolute", "inset-0", "bg-zinc-800", "rounded-b-xl"]], template: function OgFairnessComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "ap-ui-frame-popup", 3);
      \u0275\u0275pipe(4, "appI18n");
      \u0275\u0275listener("back", function OgFairnessComponent_Template_ap_ui_frame_popup_back_3_listener() {
        return ctx.currentView.set("fairness");
      })("close", function OgFairnessComponent_Template_ap_ui_frame_popup_close_3_listener() {
        return ctx.close.emit();
      });
      \u0275\u0275elementStart(5, "div", 4)(6, "div", 5)(7, "ap-ui-tab-group", 6);
      \u0275\u0275listener("tabChange", function OgFairnessComponent_Template_ap_ui_tab_group_tabChange_7_listener($event) {
        return ctx.selectTab($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 7);
      \u0275\u0275element(9, "og-fairness-seed", 8);
      \u0275\u0275elementStart(10, "ap-og-fairness-verify-chicken", 9);
      \u0275\u0275listener("provableClicked", function OgFairnessComponent_Template_ap_og_fairness_verify_chicken_provableClicked_10_listener() {
        return ctx.clickProvable();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(11, OgFairnessComponent_Conditional_11_Template, 1, 0, "ap-og-provably-fair", 10);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275classProp("provable-actions", ctx.currentView() === "provable");
      \u0275\u0275property("header", \u0275\u0275pipeBind1(4, 12, "og_topList_fairness"))("enableBack", ctx.currentView() === "provable");
      \u0275\u0275advance(4);
      \u0275\u0275property("accentColor", "slate")("tabs", ctx.tabs())("selectedTab", ctx.selectedTab());
      \u0275\u0275advance(2);
      \u0275\u0275property("hidden", ctx.selectedTab() !== "seeds");
      \u0275\u0275advance();
      \u0275\u0275property("hidden", ctx.selectedTab() !== "verify")("initialRtp", ctx.rtp())("initialSeedData", ctx.initialSeedData());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.currentView() === "provable" ? 11 : -1);
    }
  }, dependencies: [CommonModule, ApUiFramePopupComponent, ApUiTabGroupComponent, ApOgProvablyFairComponent, OgFairnessSeedComponent, ApOgFairnessVerifyChickenComponent, AppI18nPipe], styles: ["\n\n[_nghost-%COMP%]     ap-ui-frame-popup.provable-actions > div > ap-button:last-of-type {\n  left: 0.75rem;\n  right: auto;\n}\n/*# sourceMappingURL=og-fairness.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OgFairnessComponent, [{
    type: Component,
    args: [{ selector: "og-fairness", imports: [CommonModule, ApUiFramePopupComponent, ApUiTabGroupComponent, ApOgProvablyFairComponent, OgFairnessSeedComponent, ApOgFairnessVerifyChickenComponent, AppI18nPipe], template: `<div class="fixed inset-0 grid place-items-center">
  <div class="absolute inset-0 popup-overlay fade-out"></div>
  <div class="relative w-full md:w-md">
    <ap-ui-frame-popup
      class="relative"
      [class.provable-actions]="currentView() === 'provable'"
      [header]="'og_topList_fairness' | appI18n"
      [enableBack]="currentView() === 'provable'"
      (back)="currentView.set('fairness')"
      (close)="close.emit()"
    >
      <div class="relative px-4 pt-4">
        <div class="rounded-lg" style="border: 1px solid #62748e">
          <ap-ui-tab-group
            [accentColor]="'slate'"
            [tabs]="tabs()"
            [selectedTab]="selectedTab()"
            (tabChange)="selectTab($event)"
          />
        </div>          
      </div>
      <div class="h-128 overflow-y-auto space-y-6">
          <og-fairness-seed  
            [hidden]="selectedTab() !== 'seeds'"
          />
          <ap-og-fairness-verify-chicken
            [hidden]="selectedTab() !== 'verify'"
            [initialRtp]="rtp()"
            [initialSeedData]="initialSeedData()"
            (provableClicked)="clickProvable()"
          />
      </div>
      <!-- Provably Fair -->
      @if (currentView() === 'provable') {
        <ap-og-provably-fair class="absolute inset-0 bg-zinc-800 rounded-b-xl"/>
      }
    </ap-ui-frame-popup>
  </div>
</div>
`, styles: ["/* angular:styles/component:css;453fbd9085e02d96e1edc8389e8479288ae454302956246d0daa9a7a694df2e7;/Users/jessielin/ui_korokke/src/app/pages/og-fairness/og-fairness.component.ts */\n:host ::ng-deep ap-ui-frame-popup.provable-actions > div > ap-button:last-of-type {\n  left: 0.75rem;\n  right: auto;\n}\n/*# sourceMappingURL=og-fairness.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OgFairnessComponent, { className: "OgFairnessComponent", filePath: "src/app/pages/og-fairness/og-fairness.component.ts", lineNumber: 29 });
})();

// src/app/pages/history-list-og/history-list-og.component.ts
function HistoryListOGComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 14);
  }
}
function HistoryListOGComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div", 15);
    \u0275\u0275elementStart(1, "ap-history-calender", 16);
    \u0275\u0275listener("clickOutside", function HistoryListOGComponent_Conditional_6_Template_ap_history_calender_clickOutside_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCalendar.set(false));
    })("onConfirm", function HistoryListOGComponent_Conditional_6_Template_ap_history_calender_onConfirm_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDateRangeConfirm($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("accentColor", "slate")("maxDayRange", 7)("startDayBeforeRestriction", 90)("startDayAfterRestriction", 0);
  }
}
function HistoryListOGComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ap-loading-overlay", 6);
  }
}
function HistoryListOGComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 11);
  }
}
function HistoryListOGComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "history-detail-og", 17);
    \u0275\u0275listener("copyTransaction", function HistoryListOGComponent_Conditional_31_Template_history_detail_og_copyTransaction_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyTransaction($event));
    })("fairnessRequested", function HistoryListOGComponent_Conditional_31_Template_history_detail_og_fairnessRequested_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openFairness($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("item", ctx_r1.detailItem());
  }
}
function HistoryListOGComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "ap-ui-frame-popup", 18);
    \u0275\u0275listener("close", function HistoryListOGComponent_Conditional_32_Template_ap_ui_frame_popup_close_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissCopyNotification());
    });
    \u0275\u0275elementStart(2, "div", 19);
    \u0275\u0275element(3, "ap-icon", 20);
    \u0275\u0275elementStart(4, "h5", 21);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 22);
    \u0275\u0275elementStart(7, "h4", 23);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "appI18n");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 24)(11, "ap-button", 25);
    \u0275\u0275pipe(12, "appI18n");
    \u0275\u0275listener("clicked", function HistoryListOGComponent_Conditional_32_Template_ap_button_clicked_11_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissCopyNotification());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("header", ctx_r1.popupHeader());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.copiedTransaction());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 6, "copy_transaction_item", "Transaction ID copied successfully."), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind2(12, 9, "Confirm_Btn", "Confirm"))("accentColor", "slate")("size", "large");
  }
}
function HistoryListOGComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "og-fairness", 26);
    \u0275\u0275listener("close", function HistoryListOGComponent_Conditional_33_Template_og_fairness_close_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeFairness());
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("initialView", ctx_r1.fairnessInitialView())("initialSelectedTab", ctx_r1.fairnessInitialTab())("initialSeedData", ctx_r1.fairnessInitialSeedData());
  }
}
var HistoryListOGComponent = class _HistoryListOGComponent {
  appI18n = inject(AppI18nService);
  session = inject(ClientSessionService);
  wallet = inject(OgWalletService);
  history = inject(HistoryCtrlService);
  destroyRef = inject(DestroyRef);
  header = this.appI18n.computed("history_history", "History");
  close = output();
  isLoading = signal(true);
  showCalendar = signal(false);
  winLabelState = signal("winlose");
  selectedDateRange = signal(this.getTodayRange());
  isDetail = signal(false);
  detailItem = signal(null);
  isLoadingMore = signal(false);
  showCopyNotification = signal(false);
  copiedTransaction = signal("");
  /** 公平性視窗由歷史列表層管理，確保 overlay 能覆蓋列表、明細與頁首。 */
  showFairness = signal(false);
  fairnessInitialView = signal("fairness");
  fairnessInitialTab = signal("seeds");
  fairnessInitialSeedData = signal(null);
  popupHeader = this.appI18n.computed("message", "Message");
  batchSize = 20;
  cashList = signal([]);
  /** 取得錢包的最大投注額 */
  maxBet = computed(() => {
    const levels = this.wallet.betLevel();
    if (levels.length === 0)
      return 0;
    return levels[levels.length - 1].max;
  });
  totalCount = signal(0);
  totalBet = signal(0);
  totalWin = signal(0);
  cashTotalCount = signal(0);
  cashFirstIndex = signal(0);
  isLoadMoreRequest = false;
  ngAfterViewInit() {
    this.history.historyList$.pipe(debounceTime(500), takeUntilDestroyed(this.destroyRef)).subscribe((response) => {
      this.onHistoryListResponse(response);
    });
    this.loadCashHistoryList();
  }
  /** 載入 Cash 錢包歷史記錄 */
  loadCashHistoryList() {
    this.isLoading.set(true);
    const range = this.selectedDateRange();
    const startDate = range?.from || /* @__PURE__ */ new Date();
    const endDate = range?.to || /* @__PURE__ */ new Date();
    const filterType = this.winLabelState();
    this.cashFirstIndex.set(0);
    this.isLoadMoreRequest = false;
    this.history.getCashHistoryList(filterType, startDate, endDate, 0, this.batchSize);
  }
  /** 載入更多 Cash 記錄 */
  loadMoreCash() {
    if (this.isLoadingMore() || this.isLoading())
      return;
    if (this.cashList().length >= this.cashTotalCount())
      return;
    this.isLoadingMore.set(true);
    this.isLoadMoreRequest = true;
    const range = this.selectedDateRange();
    const startDate = range?.from || /* @__PURE__ */ new Date();
    const endDate = range?.to || /* @__PURE__ */ new Date();
    const filterType = this.winLabelState();
    this.history.getCashHistoryList(filterType, startDate, endDate, this.cashFirstIndex(), this.batchSize);
  }
  /** 接收 Cash history list的回應 */
  onHistoryListResponse(response) {
    this.cashTotalCount.set(response.total_count);
    if (this.isLoadMoreRequest) {
      this.cashList.update((list) => [...list, ...response.items]);
      this.cashFirstIndex.update((index) => index + response.items.length);
      this.isLoadingMore.set(false);
      return;
    }
    this.totalCount.set(response.total_count);
    this.totalBet.set(response.total_bet);
    this.totalWin.set(response.total_win);
    this.cashList.set(response.items);
    this.cashFirstIndex.set(response.items.length);
    this.isLoading.set(false);
  }
  onWinLabelClick(state) {
    this.winLabelState.set(state);
    this.loadCashHistoryList();
  }
  showDetail(item) {
    this.detailItem.set(item);
    this.isDetail.set(true);
  }
  onScrollNearEnd() {
    this.loadMoreCash();
  }
  copyTransaction(transaction) {
    return __async(this, null, function* () {
      try {
        yield navigator.clipboard.writeText(transaction);
      } catch {
      }
      this.copiedTransaction.set(transaction);
      this.showCopyNotification.set(true);
    });
  }
  dismissCopyNotification() {
    this.showCopyNotification.set(false);
  }
  /** 套用明細傳入的初始狀態後，再顯示最上層公平性視窗。 */
  openFairness(request) {
    this.fairnessInitialView.set(request.view);
    this.fairnessInitialTab.set(request.selectedTab);
    this.fairnessInitialSeedData.set(request.seedData);
    this.showFairness.set(true);
  }
  closeFairness() {
    this.showFairness.set(false);
  }
  historyDateRange = computed(() => {
    const list = this.cashList();
    const range = this.selectedDateRange();
    if (range?.from && range?.to) {
      const fromStr = range.from.toLocaleDateString(this.session.locale);
      const toStr = range.to.toLocaleDateString(this.session.locale);
      return fromStr === toStr ? fromStr : `${fromStr} ~ ${toStr}`;
    }
    if (list.length === 0)
      return "-";
    const sortedByDate = [...list].sort((a, b) => {
      const dateA = this.parseItemDateTime(a.date, a.time);
      const dateB = this.parseItemDateTime(b.date, b.time);
      return dateA.getTime() - dateB.getTime();
    });
    const oldest = sortedByDate[0];
    const newest = sortedByDate[sortedByDate.length - 1];
    return `${oldest.date} - ${newest.date}`;
  });
  onDateRangeConfirm(localRange) {
    if (!localRange.from || !localRange.to) {
      return;
    }
    const utcRange = this.history.getUtcDateRange(localRange.from, localRange.to);
    this.selectedDateRange.set({
      from: utcRange.from,
      to: utcRange.to,
      type: localRange.type
    });
    this.showCalendar.set(false);
    this.loadCashHistoryList();
  }
  parseItemDateTime(date, time) {
    const isoString = `${(date || "").trim()}T${(time || "").trim()}`;
    const parsed = new Date(isoString);
    return isNaN(parsed.getTime()) ? new Date(date) : parsed;
  }
  getTodayRange() {
    const range = this.history.getTodayRange();
    return { from: range.from, to: range.to, type: "today" };
  }
  toHistoryListItem(item) {
    return {
      date: item.date,
      time: item.time,
      type: "C",
      rewardType: "Normal Game",
      buyFeatureMode: "",
      transaction: item.transaction,
      currency: item.currency,
      bet: item.bet,
      win: item.win,
      replay: false,
      isWin: item.isWin,
      maxPayout: item.maxPayout || this.isMaxBet(item.bet),
      detailTheme: item.detailTheme
    };
  }
  /** 最大下注額 */
  isMaxBet(bet) {
    const maxBet = this.maxBet();
    return maxBet > 0 && Math.abs(bet - maxBet) < 1e-9;
  }
  static \u0275fac = function HistoryListOGComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HistoryListOGComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HistoryListOGComponent, selectors: [["history-list-og"]], outputs: { close: "close" }, decls: 34, vars: 35, consts: [[3, "close", "back", "header", "enableBack"], ["class", "relative z-sticky", "style", "pointer-events: auto", 4, "ngIf"], [1, "relative", "flex", "flex-col", "h-full"], [1, "relative", "flex-1", "pt-12", "overflow-hidden", "flex", "flex-col"], [1, "relative", "flex-1", "bg-zinc-900", "lg:px-40"], [3, "detail", "winLoseLabelClick", "scrollNearEnd", "openCalendar", "copyTransaction", "accentColor", "showTypeColumn", "showOtherColumn", "list", "historyDateRange", "isLoadingMore"], [1, "absolute", "inset-0", "popup-overlay", "z-overlay"], [1, "shrink-0", "bg-zinc-950", 2, "border-top", "1px solid rgb(113, 113, 123, 0.8)"], [1, "grid", "grid-cols-3", "gap-2", "px-2", "md:px-20", "py-2", "text-zinc-400", "uppercase"], [1, "mb-1", "text-center", "flex", "justify-center"], [1, "flex", "justify-center", "text-zinc-100"], [1, "absolute", "inset-0", "z-overlay"], [1, "absolute", "inset-0", "z-overlay", "popup-overlay", "flex", "items-center", "justify-center", "fade-out"], [1, "fixed", "inset-0", "z-modal", 3, "initialView", "initialSelectedTab", "initialSeedData"], [1, "relative", "z-sticky", 2, "pointer-events", "auto"], [1, "absolute", "inset-0", "sm:hidden", "popup-overlay", "z-overlay", "overflow-y-auto"], ["clickOutside", "", 1, "history-list-calendar", "absolute", "top-20", "z-modal", "p-1", "sm:z-dropdown", 3, "clickOutside", "onConfirm", "accentColor", "maxDayRange", "startDayBeforeRestriction", "startDayAfterRestriction"], [1, "flex-1", 3, "copyTransaction", "fairnessRequested", "item"], [3, "close", "header"], [1, "p-4", "text-center", "space-y-4", "text-slate-400"], ["name", "copy", 1, "card-icon"], [1, "block", "w-full", "text-center", "italic", "-mt-4"], [1, "h-px", "w-full", "divider-gradient-slate", "opacity-80"], [1, "text-zinc-300"], [1, "flex", "justify-center", "gap-6", "p-6"], [1, "w-[50%]", 3, "clicked", "label", "accentColor", "size"], [1, "fixed", "inset-0", "z-modal", 3, "close", "initialView", "initialSelectedTab", "initialSeedData"]], template: function HistoryListOGComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ap-ui-frame-page", 0);
      \u0275\u0275listener("close", function HistoryListOGComponent_Template_ap_ui_frame_page_close_0_listener() {
        return ctx.close.emit();
      })("back", function HistoryListOGComponent_Template_ap_ui_frame_page_back_0_listener() {
        return ctx.isDetail.set(false);
      });
      \u0275\u0275template(1, HistoryListOGComponent_div_1_Template, 1, 0, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "ap-history-list", 5);
      \u0275\u0275listener("detail", function HistoryListOGComponent_Template_ap_history_list_detail_5_listener($event) {
        return ctx.showDetail($event);
      })("winLoseLabelClick", function HistoryListOGComponent_Template_ap_history_list_winLoseLabelClick_5_listener($event) {
        return ctx.onWinLabelClick($event);
      })("scrollNearEnd", function HistoryListOGComponent_Template_ap_history_list_scrollNearEnd_5_listener() {
        return ctx.onScrollNearEnd();
      })("openCalendar", function HistoryListOGComponent_Template_ap_history_list_openCalendar_5_listener() {
        return ctx.showCalendar.set(true);
      })("copyTransaction", function HistoryListOGComponent_Template_ap_history_list_copyTransaction_5_listener($event) {
        return ctx.copyTransaction($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, HistoryListOGComponent_Conditional_6_Template, 2, 4);
      \u0275\u0275conditionalCreate(7, HistoryListOGComponent_Conditional_7_Template, 1, 0, "ap-loading-overlay", 6);
      \u0275\u0275elementStart(8, "div", 7)(9, "div", 8)(10, "div")(11, "th", 9);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "appI18n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "td", 10);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div")(17, "th", 9);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "appI18n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "td", 10);
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "moneyText");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div")(24, "th", 9);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "appI18n");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "td", 10);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "moneyText");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(30, HistoryListOGComponent_Conditional_30_Template, 1, 0, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(31, HistoryListOGComponent_Conditional_31_Template, 2, 1, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(32, HistoryListOGComponent_Conditional_32_Template, 13, 12, "div", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(33, HistoryListOGComponent_Conditional_33_Template, 1, 3, "og-fairness", 13);
    }
    if (rf & 2) {
      \u0275\u0275property("header", ctx.header())("@fadeOut", void 0)("enableBack", ctx.isDetail());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isDetail());
      \u0275\u0275advance(4);
      \u0275\u0275property("accentColor", "slate")("showTypeColumn", false)("showOtherColumn", false)("list", ctx.cashList())("historyDateRange", ctx.historyDateRange())("isLoadingMore", ctx.isLoadingMore());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showCalendar() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isLoading() ? 7 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 22, "history_transaction", "Transaction"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.totalCount(), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(19, 25, "history_total_bet_amount", "Total Bet"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 28, ctx.totalBet()), " ");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 30, "history_total_win_amount", "Total Win"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 33, ctx.totalWin()), " ");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isLoading() ? 30 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.isDetail() ? 31 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showCopyNotification() ? 32 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.showFairness() ? 33 : -1);
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    ApUiFramePageComponent,
    ApHistoryListComponent,
    ApHistoryCalenderComponent,
    ClickOutsideDirective,
    AppI18nPipe,
    ApButtonComponent,
    MoneyTextPipe,
    ApIconComponent,
    ApUiFramePopupComponent,
    HistoryDetailOGComponent,
    ApLoadingOverlayComponent,
    OgFairnessComponent
  ], styles: ["\n\n.history-list-calendar[_ngcontent-%COMP%] {\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 1rem;\n  overflow-y: auto;\n}\n@media (min-width: 640px) {\n  .history-list-calendar[_ngcontent-%COMP%] {\n    left: 5rem;\n    transform: none;\n    bottom: auto;\n    overflow-y: visible;\n  }\n}\n/*# sourceMappingURL=history-list-og.component.css.map */"], data: { animation: [
    trigger("fadeOut", [
      transition(":leave", [animate("300ms ease-in", style({ opacity: 0 }))])
    ]),
    trigger("fadeIn", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("300ms ease-out", style({ opacity: 1 }))
      ])
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HistoryListOGComponent, [{
    type: Component,
    args: [{ selector: "history-list-og", imports: [
      CommonModule,
      ApUiFramePageComponent,
      ApHistoryListComponent,
      ApHistoryCalenderComponent,
      ClickOutsideDirective,
      AppI18nPipe,
      ApButtonComponent,
      MoneyTextPipe,
      ApIconComponent,
      ApUiFramePopupComponent,
      HistoryDetailOGComponent,
      ApLoadingOverlayComponent,
      OgFairnessComponent
    ], animations: [
      trigger("fadeOut", [
        transition(":leave", [animate("300ms ease-in", style({ opacity: 0 }))])
      ]),
      trigger("fadeIn", [
        transition(":enter", [
          style({ opacity: 0 }),
          animate("300ms ease-out", style({ opacity: 1 }))
        ])
      ])
    ], template: `<ap-ui-frame-page
  [header]="header()"
  @fadeOut
  (close)="close.emit()"
  [enableBack]="isDetail()"
  (back)="isDetail.set(false)"
>
  <div
    *ngIf="!isDetail()"
    class="relative z-sticky"
    style="pointer-events: auto"
  ></div>

  <div class="relative flex flex-col h-full">
    <!-- List -->
    <div class="relative flex-1 pt-12 overflow-hidden flex flex-col">
      <div class="relative flex-1 bg-zinc-900 lg:px-40">
        <ap-history-list
          [accentColor]="'slate'"
          [showTypeColumn]="false"
          [showOtherColumn]="false"
          [list]="cashList()"
          [historyDateRange]="historyDateRange()"
          [isLoadingMore]="isLoadingMore()"
          (detail)="showDetail($event)"
          (winLoseLabelClick)="onWinLabelClick($event)"
          (scrollNearEnd)="onScrollNearEnd()"
          (openCalendar)="showCalendar.set(true)"
          (copyTransaction)="copyTransaction($event)"
        />
      </div>

      @if (showCalendar()) {
        <div class="absolute inset-0 sm:hidden popup-overlay z-overlay overflow-y-auto"></div>
        <ap-history-calender
          [accentColor]="'slate'"
          class="history-list-calendar absolute top-20 z-modal p-1 sm:z-dropdown"
          [maxDayRange]="7"
          [startDayBeforeRestriction]="90"
          [startDayAfterRestriction]="0"
          clickOutside
          (clickOutside)="showCalendar.set(false)"
          (onConfirm)="onDateRangeConfirm($event)"
        />
      }

      @if (isLoading()) {
        <ap-loading-overlay
          class="absolute inset-0 popup-overlay z-overlay"
        />
      }
      <!-- Bottom Info Table -->
      <div
        class="shrink-0 bg-zinc-950"
        style="border-top: 1px solid rgb(113, 113, 123, 0.8)"
      >
        <div
          class="grid grid-cols-3 gap-2 px-2 md:px-20 py-2 text-zinc-400 uppercase"
        >
          <div>
            <th class="mb-1 text-center flex justify-center">
              {{ "history_transaction" | appI18n: "Transaction" }}
            </th>
            <td class="flex justify-center text-zinc-100">
              {{ totalCount() }}
            </td>
          </div>
          <div>
            <th class="mb-1 text-center flex justify-center">
              {{ "history_total_bet_amount" | appI18n: "Total Bet" }}
            </th>
            <td class="flex justify-center text-zinc-100">
              {{ totalBet() | moneyText }}
            </td>
          </div>
          <div>
            <th class="mb-1 text-center flex justify-center">
              {{ "history_total_win_amount" | appI18n: "Total Win" }}
            </th>
            <td class="flex justify-center text-zinc-100">
              {{ totalWin() | moneyText }}
            </td>
          </div>
        </div>
      </div>

      @if (isLoading()) {
        <!-- \u7528\u4F86\u906E\u4F4Ftab\u7684loading\u64CD\u4F5C -->
        <div class="absolute inset-0 z-overlay"></div>
      }
    </div>

    @if (isDetail()) {
      <div class="absolute inset-0 z-overlay">
        <!-- Detail \u53EA\u9001\u51FA\u516C\u5E73\u6027\u958B\u555F\u9700\u6C42\uFF0C\u7531\u672C\u5C64\u8CA0\u8CAC\u986F\u793A overlay\u3002 -->
        <history-detail-og
          class="flex-1"
          [item]="detailItem()"
          (copyTransaction)="copyTransaction($event)"
          (fairnessRequested)="openFairness($event)"
        />
      </div>
    }
  </div>
  @if (showCopyNotification()) {
    <div
      class="absolute inset-0 z-overlay popup-overlay flex items-center justify-center fade-out"
    >
      <ap-ui-frame-popup [header]="popupHeader()" (close)="dismissCopyNotification()">
        <div class="p-4 text-center space-y-4 text-slate-400">
          <ap-icon name="copy" class="card-icon" />
          <h5 class="block w-full text-center italic -mt-4">{{
            copiedTransaction()
          }}</h5>
          <div class="h-px w-full divider-gradient-slate opacity-80"></div>
          <h4 class="text-zinc-300">
            {{
              "copy_transaction_item"
                | appI18n: "Transaction ID copied successfully."
            }}
          </h4>
        </div>
        <div class="flex justify-center gap-6 p-6">
          <ap-button
            [label]="'Confirm_Btn' | appI18n: 'Confirm'"
            [accentColor]="'slate'"
            [size]="'large'"
            class="w-[50%]"
            (clicked)="dismissCopyNotification()"
          />
        </div>
      </ap-ui-frame-popup>
    </div>
  }
</ap-ui-frame-page>

<!-- \u653E\u5728 history frame \u5916\u5C64\u4E26\u4F7F\u7528 z-modal\uFF0C\u78BA\u4FDD\u516C\u5E73\u6027\u8996\u7A97\u986F\u793A\u5728\u6700\u4E0A\u65B9\u3002 -->
@if (showFairness()) {
  <og-fairness
    class="fixed inset-0 z-modal"
    [initialView]="fairnessInitialView()"
    [initialSelectedTab]="fairnessInitialTab()"
    [initialSeedData]="fairnessInitialSeedData()"
    (close)="closeFairness()"
  />
}
`, styles: ["/* src/app/pages/history-list-og/history-list-og.component.css */\n.history-list-calendar {\n  left: 50%;\n  transform: translateX(-50%);\n  bottom: 1rem;\n  overflow-y: auto;\n}\n@media (min-width: 640px) {\n  .history-list-calendar {\n    left: 5rem;\n    transform: none;\n    bottom: auto;\n    overflow-y: visible;\n  }\n}\n/*# sourceMappingURL=history-list-og.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HistoryListOGComponent, { className: "HistoryListOGComponent", filePath: "src/app/pages/history-list-og/history-list-og.component.ts", lineNumber: 52 });
})();

// src/app/pages/og-panel-popup/og-panel-popup.component.ts
function OgPanelPopupComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275elementStart(2, "ap-ui-frame-popup", 2);
    \u0275\u0275listener("close", function OgPanelPopupComponent_Conditional_0_Template_ap_ui_frame_popup_close_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275element(4, "ap-icon", 4)(5, "div", 5)(6, "h4", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 7)(8, "ap-button", 8);
    \u0275\u0275listener("click", function OgPanelPopupComponent_Conditional_0_Template_ap_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onConfirm());
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("header", ctx_r1.displayHeader())("size", "mobile")("enableClose", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("name", ctx_r1.displayIconName());
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", ctx_r1.displayDescription(), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(2);
    \u0275\u0275property("size", "large")("accentColor", "slate")("label", ctx_r1.displayConfirmText());
  }
}
var OgPanelPopupComponent = class _OgPanelPopupComponent {
  appI18n = inject(AppI18nService);
  header = input();
  description = input();
  confirmText = input();
  isVisible = model(false);
  mode = input("insufficient");
  displayHeader = computed(() => this.header() ?? this.appI18n.instant("replay_message_title", "MESSAGE"));
  /** 根據不同模式顯示不同圖示 */
  displayIconName = computed(() => {
    if (this.mode() === "exit") {
      return "arrow-right-start-on-rectangle";
    }
    return "insufficient";
  });
  /** 根據不同模式顯示不同描述 */
  displayDescription = computed(() => {
    if (this.mode() === "exit") {
      return this.description() ?? this.appI18n.instant("confirm_to_leave_the_game", "Confirm to exit?");
    }
    return this.description() ?? this.appI18n.instant("not_enough_bet", "Insufficient balance");
  });
  displayConfirmText = computed(() => this.confirmText() ?? this.appI18n.instant("OK", "OK"));
  close = output();
  confirm = output();
  constructor() {
  }
  onCancel() {
    this.isVisible.set(false);
    this.close.emit();
  }
  onConfirm() {
    this.isVisible.set(false);
    this.confirm.emit(this.mode());
  }
  static \u0275fac = function OgPanelPopupComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OgPanelPopupComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OgPanelPopupComponent, selectors: [["og-panel-popup"]], inputs: { header: [1, "header"], description: [1, "description"], confirmText: [1, "confirmText"], isVisible: [1, "isVisible"], mode: [1, "mode"] }, outputs: { isVisible: "isVisibleChange", close: "close", confirm: "confirm" }, decls: 1, vars: 1, consts: [[1, "fixed", "inset-0", "z-overlay", "grid", "place-items-center"], [1, "absolute", "inset-0", "popup-overlay", "fade-out"], [1, "w-11/12", "md:w-3/4", "lg:w-1/2", 3, "close", "header", "size", "enableClose"], [1, "p-4", "text-center", "space-y-4"], [1, "text-slate-400", "popup-icon", "mx-auto", 3, "name"], [1, "h-px", "divider-gradient-slate", "opacity-80"], [1, "text-zinc-300", 3, "innerHTML"], [1, "flex", "justify-center", "p-6"], [1, "w-[50%]", 3, "click", "size", "accentColor", "label"]], template: function OgPanelPopupComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, OgPanelPopupComponent_Conditional_0_Template, 9, 8, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.isVisible() ? 0 : -1);
    }
  }, dependencies: [ApButtonComponent, ApUiFramePopupComponent, ApIconComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OgPanelPopupComponent, [{
    type: Component,
    args: [{ standalone: true, selector: "og-panel-popup", imports: [ApButtonComponent, ApUiFramePopupComponent, ApIconComponent], template: `@if (isVisible()) {
  <div class="fixed inset-0 z-overlay grid place-items-center">
    <div class="absolute inset-0 popup-overlay fade-out"></div>
    <ap-ui-frame-popup
      [header]="displayHeader()"
      [size]="'mobile'"
      [enableClose]="false"
      class="w-11/12 md:w-3/4 lg:w-1/2"
      (close)="onCancel()"
    >
      <div class="p-4 text-center space-y-4">
        <ap-icon
          [name]="displayIconName()"
          class="text-slate-400 popup-icon mx-auto"
        />
        <div class="h-px divider-gradient-slate opacity-80"></div>
        <h4 class="text-zinc-300" [innerHTML]="displayDescription()"></h4>
      </div>

      <div class="flex justify-center p-6">
        <ap-button
          class="w-[50%]"
          [size]="'large'"
          [accentColor]="'slate'"
          [label]="displayConfirmText()"
          (click)="onConfirm()"
        />
      </div>
    </ap-ui-frame-popup>
  </div>
}
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OgPanelPopupComponent, { className: "OgPanelPopupComponent", filePath: "src/app/pages/og-panel-popup/og-panel-popup.component.ts", lineNumber: 14 });
})();

// src/app/pages/og-panel/og-panel.component.ts
function OgPanelComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-og-input-bet", 5);
    \u0275\u0275listener("betChanged", function OgPanelComponent_ng_template_0_Template_ap_og_input_bet_betChanged_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputBetChanged($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "ap-og-input", 6);
    \u0275\u0275listener("valueChange", function OgPanelComponent_ng_template_0_Template_ap_og_input_valueChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDifficultyChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r2.displayBet())("betLevel", ctx_r2.betLevel())("disabled", ctx_r2.isInputBetDisabled())("currencyImage", ctx_r2.currencyImage());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.difficultyString())("disabled", ctx_r2.isInputDifficultyDisabled());
  }
}
function OgPanelComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-og-input-bet", 7);
    \u0275\u0275listener("betChanged", function OgPanelComponent_ng_template_2_Template_ap_og_input_bet_betChanged_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputBetChanged($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "ap-og-input", 6);
    \u0275\u0275listener("valueChange", function OgPanelComponent_ng_template_2_Template_ap_og_input_valueChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDifficultyChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ap-og-input", 8);
    \u0275\u0275pipe(3, "appI18n");
    \u0275\u0275listener("valueChange", function OgPanelComponent_ng_template_2_Template_ap_og_input_valueChange_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onAutoCashOutStepChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ap-og-input", 9);
    \u0275\u0275listener("valueChange", function OgPanelComponent_ng_template_2_Template_ap_og_input_valueChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onNumberOfBetsChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ap-og-input", 10);
    \u0275\u0275listener("selectedTabChange", function OgPanelComponent_ng_template_2_Template_ap_og_input_selectedTabChange_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onWinSettingTabChange($event));
    })("valueChange", function OgPanelComponent_ng_template_2_Template_ap_og_input_valueChange_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onWinAmountChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ap-og-input", 11);
    \u0275\u0275listener("selectedTabChange", function OgPanelComponent_ng_template_2_Template_ap_og_input_selectedTabChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onLossSettingTabChange($event));
    })("valueChange", function OgPanelComponent_ng_template_2_Template_ap_og_input_valueChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onLossAmountChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ap-og-input", 12);
    \u0275\u0275listener("valueChange", function OgPanelComponent_ng_template_2_Template_ap_og_input_valueChange_7_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onStopProfitAmountChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ap-og-input", 13);
    \u0275\u0275listener("valueChange", function OgPanelComponent_ng_template_2_Template_ap_og_input_valueChange_8_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onStopLossAmountChange($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r2.displayBet())("disabled", ctx_r2.isInputBetDisabled())("betLevel", ctx_r2.betLevel())("currencyImage", ctx_r2.currencyImage());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.difficultyString())("disabled", ctx_r2.isInputDifficultyDisabled());
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind2(3, 30, "og_guide_8", "Auto Cash Out"))("value", ctx_r2.autoCashOutStepString())("min", 1)("max", ctx_r2.maxAutoCashOutStep())("disabled", ctx_r2.isAutoRunning() || ctx_r2.isPanelBusy());
    \u0275\u0275advance(2);
    \u0275\u0275property("infinity", true)("value", ctx_r2.numberOfBetsString())("min", 0)("step", 1)("disabled", ctx_r2.isAutoRunning() || ctx_r2.isPanelBusy());
    \u0275\u0275advance();
    \u0275\u0275property("selectedTab", ctx_r2.onWinSettingTab())("value", ctx_r2.onWinAmountString())("disabled", ctx_r2.isAutoRunning() || ctx_r2.isPanelBusy())("valueDisabled", ctx_r2.onWinSettingTab() === "reset");
    \u0275\u0275advance();
    \u0275\u0275property("selectedTab", ctx_r2.onLossSettingTab())("value", ctx_r2.onLossAmountString())("disabled", ctx_r2.isAutoRunning() || ctx_r2.isPanelBusy())("valueDisabled", ctx_r2.onLossSettingTab() === "reset");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.stopProfitAmountString())("step", ctx_r2.stopAmountStep())("disabled", ctx_r2.isAutoRunning() || ctx_r2.isPanelBusy());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.stopLossAmountString())("step", ctx_r2.stopAmountStep())("disabled", ctx_r2.isAutoRunning() || ctx_r2.isPanelBusy());
  }
}
function OgPanelComponent_Conditional_4_Conditional_2_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275element(1, "ap-icon-chicken", 24);
    \u0275\u0275elementEnd();
  }
}
function OgPanelComponent_Conditional_4_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button-custom", 19);
    \u0275\u0275pipe(1, "appI18n");
    \u0275\u0275listener("clicked", function OgPanelComponent_Conditional_4_Conditional_2_Conditional_4_Template_ap_button_custom_clicked_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onBet());
    });
    \u0275\u0275conditionalCreate(2, OgPanelComponent_Conditional_4_Conditional_2_Conditional_4_Conditional_2_Template, 2, 0, "span", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("chicken-feedback-active", ctx_r2.isPanelBusy());
    \u0275\u0275property("label", \u0275\u0275pipeBind2(1, 6, "og_bet_info_betting", "Bet"))("colorCode", ctx_r2.colorTheme())("disabled", ctx_r2.isBetButtonDisabled());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isPanelBusy() ? 2 : -1);
  }
}
function OgPanelComponent_Conditional_4_Conditional_2_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275element(1, "ap-icon-chicken", 24);
    \u0275\u0275elementEnd();
  }
}
function OgPanelComponent_Conditional_4_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button-custom", 19);
    \u0275\u0275listener("clicked", function OgPanelComponent_Conditional_4_Conditional_2_Conditional_5_Template_ap_button_custom_clicked_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onGo());
    });
    \u0275\u0275conditionalCreate(1, OgPanelComponent_Conditional_4_Conditional_2_Conditional_5_Conditional_1_Template, 2, 0, "span", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("chicken-feedback-active", ctx_r2.isPanelBusy());
    \u0275\u0275property("label", ctx_r2.appI18n.gameStr("bet_btn_go") ?? ctx_r2.appI18n.instant("bet_btn_go", "Go"))("colorCode", ctx_r2.colorTheme())("disabled", ctx_r2.isPanelBusy());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isPanelBusy() ? 1 : -1);
  }
}
function OgPanelComponent_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16);
    \u0275\u0275elementContainer(2, 17);
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275conditionalCreate(4, OgPanelComponent_Conditional_4_Conditional_2_Conditional_4_Template, 3, 9, "ap-button-custom", 18)(5, OgPanelComponent_Conditional_4_Conditional_2_Conditional_5_Template, 2, 6, "ap-button-custom", 18);
    \u0275\u0275elementStart(6, "ap-button-custom", 19);
    \u0275\u0275pipe(7, "appI18n");
    \u0275\u0275listener("clicked", function OgPanelComponent_Conditional_4_Conditional_2_Template_ap_button_custom_clicked_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onCashout());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 20);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "appI18n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 21);
    \u0275\u0275element(12, "ap-input-box", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    const manualContent_r9 = \u0275\u0275reference(1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", manualContent_r9);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.gameState() === "ready" ? 4 : 5);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind2(7, 9, "og_bet_info_cash", "Cashout"))("colorCode", ctx_r2.colorTheme())("disabled", ctx_r2.isCashoutDisabled());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(10, 12, "og_guide_6", "Total Profit"), " (", ctx_r2.totalRateString(), "x) ");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r2.totalProfitString())("disabled", true);
  }
}
function OgPanelComponent_Conditional_4_Conditional_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "appI18n");
    \u0275\u0275element(3, "ap-icon-chicken", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "og_autobet_finishBet", "Finishing Bet"), " ");
  }
}
function OgPanelComponent_Conditional_4_Conditional_3_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "appI18n");
    \u0275\u0275element(3, "ap-icon-chicken", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "og_autobet_autoEnd", "Stop Autobet"), " ");
  }
}
function OgPanelComponent_Conditional_4_Conditional_3_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275element(1, "ap-icon-chicken", 28);
    \u0275\u0275elementEnd();
  }
}
function OgPanelComponent_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 25);
    \u0275\u0275elementContainer(2, 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 26)(4, "ap-button-custom", 19);
    \u0275\u0275pipe(5, "appI18n");
    \u0275\u0275pipe(6, "appI18n");
    \u0275\u0275pipe(7, "appI18n");
    \u0275\u0275listener("clicked", function OgPanelComponent_Conditional_4_Conditional_3_Template_ap_button_custom_clicked_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onStartAuto());
    });
    \u0275\u0275conditionalCreate(8, OgPanelComponent_Conditional_4_Conditional_3_Conditional_8_Template, 4, 4, "span", 27)(9, OgPanelComponent_Conditional_4_Conditional_3_Conditional_9_Template, 4, 4, "span", 27)(10, OgPanelComponent_Conditional_4_Conditional_3_Conditional_10_Template, 2, 0, "span", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    const autoFields_r11 = \u0275\u0275reference(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", autoFields_r11);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("auto-bet-loading", ctx_r2.isAutoRunning())("chicken-feedback-active", ctx_r2.isAutoRunning() || ctx_r2.isPanelBusyFeedbackVisible() || ctx_r2.isAutoStopRequested() || ctx_r2.isAutoStopFeedbackVisible());
    \u0275\u0275property("label", ctx_r2.isAutoStopRequested() ? \u0275\u0275pipeBind2(5, 9, "og_autobet_finishBet", "Finishing Bet") : ctx_r2.isAutoRunning() ? \u0275\u0275pipeBind2(6, 12, "og_autobet_autoEnd", "Stop Autobet") : \u0275\u0275pipeBind2(7, 15, "og_autobet_autoStart", "Start Autobet"))("colorCode", ctx_r2.colorTheme())("disabled", ctx_r2.isAutoStopRequested() || ctx_r2.isAutoStopFeedbackVisible());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.isAutoStopRequested() || ctx_r2.isAutoStopFeedbackVisible() ? 8 : ctx_r2.isAutoRunning() ? 9 : ctx_r2.isPanelBusyFeedbackVisible() ? 10 : -1);
  }
}
function OgPanelComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "ap-og-input", 14);
    \u0275\u0275listener("tabChange", function OgPanelComponent_Conditional_4_Template_ap_og_input_tabChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTabChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, OgPanelComponent_Conditional_4_Conditional_2_Template, 13, 15, "div", 15)(3, OgPanelComponent_Conditional_4_Conditional_3_Template, 11, 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("selectedTab", ctx_r2.activeTab())("disabled", ctx_r2.isModeTabDisabled());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.activeTab() === "manual" ? 2 : 3);
  }
}
function OgPanelComponent_Conditional_5_Conditional_3_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275element(1, "ap-icon-chicken", 35);
    \u0275\u0275elementEnd();
  }
}
function OgPanelComponent_Conditional_5_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button-custom", 34);
    \u0275\u0275pipe(1, "appI18n");
    \u0275\u0275listener("clicked", function OgPanelComponent_Conditional_5_Conditional_3_Conditional_1_Template_ap_button_custom_clicked_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onBet());
    });
    \u0275\u0275conditionalCreate(2, OgPanelComponent_Conditional_5_Conditional_3_Conditional_1_Conditional_2_Template, 2, 0, "span", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("chicken-feedback-active", ctx_r2.isPanelBusy());
    \u0275\u0275property("label", \u0275\u0275pipeBind2(1, 7, "og_bet_info_betting", "Bet"))("colorCode", ctx_r2.colorTheme())("size", "large")("disabled", ctx_r2.isBetButtonDisabled());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isPanelBusy() ? 2 : -1);
  }
}
function OgPanelComponent_Conditional_5_Conditional_3_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275element(1, "ap-icon-chicken", 35);
    \u0275\u0275elementEnd();
  }
}
function OgPanelComponent_Conditional_5_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button-custom", 34);
    \u0275\u0275listener("clicked", function OgPanelComponent_Conditional_5_Conditional_3_Conditional_2_Template_ap_button_custom_clicked_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onGo());
    });
    \u0275\u0275conditionalCreate(1, OgPanelComponent_Conditional_5_Conditional_3_Conditional_2_Conditional_1_Template, 2, 0, "span", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("chicken-feedback-active", ctx_r2.isPanelBusy());
    \u0275\u0275property("label", ctx_r2.appI18n.gameStr("bet_btn_go") ?? ctx_r2.appI18n.instant("bet_btn_go", "Go"))("colorCode", ctx_r2.colorTheme())("size", "large")("disabled", ctx_r2.isPanelBusy());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.isPanelBusy() ? 1 : -1);
  }
}
function OgPanelComponent_Conditional_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275conditionalCreate(1, OgPanelComponent_Conditional_5_Conditional_3_Conditional_1_Template, 3, 10, "ap-button-custom", 33)(2, OgPanelComponent_Conditional_5_Conditional_3_Conditional_2_Template, 2, 7, "ap-button-custom", 33);
    \u0275\u0275elementStart(3, "ap-button-custom", 34);
    \u0275\u0275pipe(4, "appI18n");
    \u0275\u0275listener("clicked", function OgPanelComponent_Conditional_5_Conditional_3_Template_ap_button_custom_clicked_3_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onCashout());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainer(5, 17);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    const manualContent_r9 = \u0275\u0275reference(1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.gameState() === "ready" ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind2(4, 6, "og_bet_info_cash", "Cashout"))("colorCode", ctx_r2.colorTheme())("size", "large")("disabled", ctx_r2.isCashoutDisabled());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", manualContent_r9);
  }
}
function OgPanelComponent_Conditional_5_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "appI18n");
    \u0275\u0275element(3, "ap-icon-chicken", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "og_autobet_finishBet", "Finishing Bet"), " ");
  }
}
function OgPanelComponent_Conditional_5_Conditional_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "appI18n");
    \u0275\u0275element(3, "ap-icon-chicken", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "og_autobet_autoEnd", "Stop Autobet"), " ");
  }
}
function OgPanelComponent_Conditional_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ap-button-custom", 36);
    \u0275\u0275pipe(1, "appI18n");
    \u0275\u0275pipe(2, "appI18n");
    \u0275\u0275pipe(3, "appI18n");
    \u0275\u0275listener("clicked", function OgPanelComponent_Conditional_5_Conditional_4_Template_ap_button_custom_clicked_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onStartAuto());
    });
    \u0275\u0275conditionalCreate(4, OgPanelComponent_Conditional_5_Conditional_4_Conditional_4_Template, 4, 4, "span", 37)(5, OgPanelComponent_Conditional_5_Conditional_4_Conditional_5_Template, 4, 4, "span", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainer(6, 17);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    const autoFields_r11 = \u0275\u0275reference(3);
    \u0275\u0275classProp("auto-bet-loading", ctx_r2.isAutoRunning())("chicken-feedback-active", ctx_r2.isAutoRunning() || ctx_r2.isPanelBusyFeedbackVisible() || ctx_r2.isAutoStopRequested() || ctx_r2.isAutoStopFeedbackVisible());
    \u0275\u0275property("iconPos", "right")("label", ctx_r2.isAutoStopRequested() ? \u0275\u0275pipeBind2(1, 11, "og_autobet_finishBet", "Finishing Bet") : ctx_r2.isAutoRunning() ? \u0275\u0275pipeBind2(2, 14, "og_autobet_autoEnd", "Stop Autobet") : \u0275\u0275pipeBind2(3, 17, "og_autobet_autoStart", "Start Autobet"))("size", "large")("colorCode", ctx_r2.colorTheme())("disabled", ctx_r2.isPanelBusy() && !ctx_r2.isAutoRunning() || ctx_r2.isAutoStopRequested() || ctx_r2.isAutoStopFeedbackVisible());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.isAutoStopRequested() || ctx_r2.isAutoStopFeedbackVisible() ? 4 : ctx_r2.isAutoRunning() ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", autoFields_r11);
  }
}
function OgPanelComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 29)(2, "div", 16);
    \u0275\u0275conditionalCreate(3, OgPanelComponent_Conditional_5_Conditional_3_Template, 6, 9)(4, OgPanelComponent_Conditional_5_Conditional_4_Template, 7, 20);
    \u0275\u0275elementStart(5, "div", 30);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "appI18n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 31);
    \u0275\u0275element(9, "ap-input-box", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ap-og-input", 32);
    \u0275\u0275listener("tabChange", function OgPanelComponent_Conditional_5_Template_ap_og_input_tabChange_10_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onTabChange($event));
    });
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.activeTab() === "manual" ? 3 : 4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(7, 7, "og_guide_6", "Total Profit"), " (", ctx_r2.totalRateString(), "x) ");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r2.totalProfitString())("disabled", true);
    \u0275\u0275advance();
    \u0275\u0275property("selectedTab", ctx_r2.activeTab())("disabled", ctx_r2.isModeTabDisabled());
  }
}
var PANEL_BUSY_FEEDBACK_DURATION_MS = 1e3;
var AUTO_STOP_FEEDBACK_DURATION_MS = 1500;
var AUTO_SPIN_CONTINUE_DELAY_MS = 50;
var AUTO_CASH_OUT_STEP_MAX_BY_DIFFICULTY = {
  [OgChickenDifficultyEnum.easy]: 28,
  [OgChickenDifficultyEnum.medium]: 24,
  [OgChickenDifficultyEnum.hard]: 20,
  [OgChickenDifficultyEnum.expert]: 16
};
var OgPanelComponent = class _OgPanelComponent {
  // Services
  appI18n = inject(AppI18nService);
  wallet = inject(OgWalletService);
  destroyRef = inject(DestroyRef);
  logger = inject(LoggerService);
  game = inject(GameIframeCtrlService);
  // Panel Inputs
  variant = input("desktop");
  // Panel Outputs
  autoRunningChange = output();
  gameStateChange = output();
  // Panel Signals
  isPanelBusy = signal(false);
  isPanelBusyFeedbackVisible = signal(false);
  isAutoRunning = signal(false);
  isAutoStopRequested = signal(false);
  isAutoStopFeedbackVisible = signal(false);
  isInputBetDisabled = computed(() => {
    return this.isPanelBusy() || this.isAutoRunning() || this.gameState() === "playing";
  });
  isInputDifficultyDisabled = computed(() => {
    return this.isPanelBusy() || this.isAutoRunning() || this.gameState() === "playing";
  });
  isModeTabDisabled = computed(() => {
    return this.isPanelBusy() || this.isAutoRunning() || this.gameState() === "playing";
  });
  /** 是否超過可用餘額 */
  isBetAmountOverBalance = computed(() => {
    return this.displayBet() > this.displayBalance();
  });
  /** 當下注區忙碌或投注金額超過可用餘額時禁用投注按鈕 */
  isBetButtonDisabled = computed(() => {
    return this.isPanelBusy() || this.isBetAmountOverBalance();
  });
  /** 是否顯示餘額不足彈窗 */
  showInsufficientBalancePopup = signal(false);
  activeTab = signal("manual");
  onWinSettingTab = signal("reset");
  onLossSettingTab = signal("reset");
  /** 當前顯示的餘額 */
  displayBalance = computed(() => this.wallet.displayBalance());
  /** 當前顯示的下注金額 */
  displayBet = signal(this.wallet.betAmount());
  betLevel = computed(() => this.wallet.betLevel());
  /** 難度設定 */
  difficulty = signal(0);
  difficultyString = computed(() => {
    return OgChickenDifficultyEnum[this.difficulty()];
  });
  /** 自動投注相關設定：提現步數與最大值 */
  autoCashOutStep = signal(1);
  maxAutoCashOutStep = computed(() => {
    return AUTO_CASH_OUT_STEP_MAX_BY_DIFFICULTY[this.difficulty()];
  });
  autoCashOutStepString = computed(() => {
    return this.autoCashOutStep().toString();
  });
  /** 自動投注的注數 */
  numberOfBets = signal(0);
  numberOfBetsString = computed(() => {
    return this.numberOfBets().toString();
  });
  /** 達到的盈利目標 */
  stopProfitAmount = signal(0);
  stopProfitAmountString = signal(this.formatStopAmount(0));
  /** 停利 / 停損數值，用於自動投注停止判斷 */
  stopLossAmount = signal(0);
  stopLossAmountString = signal(this.formatStopAmount(0));
  stopAmountStep = computed(() => {
    const decimalPlaces = this.wallet.decimalPlaces();
    return (1 / 10 ** decimalPlaces).toFixed(decimalPlaces);
  });
  /** 贏分時增加的金額 */
  onWinAmount = signal(0);
  onWinAmountString = computed(() => {
    return this.onWinAmount().toString();
  });
  /** 輸分時增加的金額 */
  onLossAmount = signal(0);
  onLossAmountString = computed(() => {
    return this.onLossAmount().toString();
  });
  /** 目前盈利 */
  totalProfit = signal(0);
  totalProfitString = computed(() => {
    return MoneyText.format(this.totalProfit(), { addSymbol: false });
  });
  /** 目前倍率 */
  totalRate = signal(0);
  totalRateString = computed(() => {
    return this.totalRate().toString();
  });
  currencyImage = computed(() => this.wallet.currencyIconUrl() ?? "assets/images/currency/img_coin_DEMO.svg");
  // Game Signals：遊戲流程狀態與小雞位置相關資料
  gameState = signal("ready");
  /** 0: 第一次Go, 1: 第二次之後的Go */
  gameStage = signal(OgChickenGameStage.firstGo);
  gameEvent = signal(null);
  chickenLocation = signal(0);
  isCashoutDisabled = computed(() => {
    return this.isPanelBusy() || this.gameState() !== "playing" || this.gameStage() === OgChickenGameStage.firstGo;
  });
  panelBusyFeedbackTimer;
  autoStopFeedbackTimer;
  autoSpinContinueTimer;
  autoBetsRemaining = null;
  autoInitialBetAmount = 0;
  autoCurrentRoundBetAmount = 0;
  autoTotalProfit = 0;
  isStopProfitAmountEdited = false;
  isStopLossAmountEdited = false;
  colorTheme = signal("#DB3737");
  constructor() {
    effect(() => {
      this.gameStateChange.emit(this.gameState());
    });
    effect(() => {
      this.wallet.decimalPlaces();
      if (!this.isStopProfitAmountEdited) {
        this.stopProfitAmountString.set(this.formatStopAmount(this.stopProfitAmount()));
      }
      if (!this.isStopLossAmountEdited) {
        this.stopLossAmountString.set(this.formatStopAmount(this.stopLossAmount()));
      }
    });
    this.destroyRef.onDestroy(() => {
      if (this.panelBusyFeedbackTimer) {
        clearTimeout(this.panelBusyFeedbackTimer);
      }
      if (this.autoStopFeedbackTimer) {
        clearTimeout(this.autoStopFeedbackTimer);
      }
      this.clearAutoSpinContinueTimer();
    });
  }
  ngOnInit() {
    this.wallet.spinResultEvent$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event) => {
      this.onSpinResultEvent(event);
    });
    this.game.readyForSpin$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.onReadyForSpin();
    });
    this.game.balanceAdded$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((message) => {
      this.onBalanceAdded(message.amount);
    });
    this.game.InGamePopupOpened$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((message) => {
      this.onInGamePopupOpened(message);
    });
  }
  /**
   * @param bet 使用者輸入介面得到的下注金額 是控制在最小與最大下注金額之間
   */
  onInputBetChanged(bet) {
    this.displayBet.set(bet);
    if (this.isBetAmountOverBalance()) {
      this.showInsufficientBalancePopup.set(true);
    }
    if (isNaN(bet) || bet <= 0) {
      this.wallet.setBet(this.wallet.minBet());
    } else {
      this.wallet.setBet(bet);
    }
  }
  /** 讓cocos在贏分時可以增加目前顯示的餘額 */
  onBalanceAdded(amount) {
    const newBalance = new decimal_default(this.displayBalance()).add(amount).toNumber();
    this.wallet.setDisplayBalance(newBalance);
  }
  onInsufficientBalancePopupConfirm() {
    this.showInsufficientBalancePopup.set(false);
    this.wallet.setBet(this.displayBalance());
    this.displayBet.set(this.wallet.betAmount());
  }
  // 難度變更
  onDifficultyChange(value) {
    this.difficulty.set(OgChickenDifficultyEnum[value]);
    this.autoCashOutStep.set(this.clampAutoCashOutStep(this.autoCashOutStep()));
    this.game.sendCommand("difficulty", this.difficulty());
  }
  // 自動提現步數變更
  onAutoCashOutStepChange(value) {
    this.autoCashOutStep.set(this.clampAutoCashOutStep(Number(value)));
  }
  // 自動投注注數變更
  onNumberOfBetsChange(value) {
    this.numberOfBets.set(this.clampWholeNumber(Number(value)));
  }
  // 贏分時增加的金額變更
  onWinSettingTabChange(value) {
    if (value === "reset" || value === "increase by") {
      this.onWinSettingTab.set(value);
      if (value === "reset") {
        this.onWinAmount.set(0);
      }
    }
  }
  // 虧損設定標籤變更
  onLossSettingTabChange(value) {
    if (value === "reset" || value === "increase by") {
      this.onLossSettingTab.set(value);
      if (value === "reset") {
        this.onLossAmount.set(0);
      }
    }
  }
  // 贏分時增加的金額變更
  onWinAmountChange(value) {
    const amount = Number(value);
    if (!Number.isNaN(amount)) {
      this.onWinAmount.set(amount);
    }
  }
  // 輸分時增加的金額變更
  onLossAmountChange(value) {
    const amount = Number(value);
    if (!Number.isNaN(amount)) {
      this.onLossAmount.set(amount);
    }
  }
  // 停止獲利金額變更
  onStopProfitAmountChange(value) {
    this.isStopProfitAmountEdited = true;
    this.stopProfitAmountString.set(value);
    this.setStopProfitAmount(value);
  }
  // 停止虧損金額變更
  onStopLossAmountChange(value) {
    this.isStopLossAmountEdited = true;
    this.stopLossAmountString.set(value);
    this.setStopLossAmount(value);
  }
  // 投注方式變更
  onTabChange(value) {
    if (this.isModeTabDisabled()) {
      return;
    }
    if (value === "manual" || value === "auto") {
      this.activeTab.set(value);
    }
  }
  // 接收來自遊戲的結果事件，儲存後續處理用
  onSpinResultEvent(event) {
    this.gameEvent.set(event);
  }
  onReadyForSpin() {
    let currentStepScore = 0;
    let isGameFinished = false;
    const event = this.gameEvent();
    const steps = event?.steps ?? [];
    if (event && steps.length > 0) {
      const lastStep = steps[steps.length - 1];
      const stepRate = Number(lastStep.step_rate.split("_")[0]);
      const stepScore = calc.s2c(Number(lastStep.step_rate.split("_")[1]));
      currentStepScore = event.finish ? calc.s2c(event.total_score) : stepScore;
      this.totalRate.set(stepRate);
      this.totalProfit.set(stepScore);
      this.logger.ogLog(`\u5C0F\u96DE\u5F9E${lastStep.begin}\u79FB\u52D5\u5230${lastStep.end}, \u79FB\u52D5\u4E86${lastStep.move}\u6B65, \u500D\u7387:${stepRate}, \u5206\u6578:${stepScore}`);
      this.logger.ogLog(event);
      this.chickenLocation.set(lastStep.end);
      if (event.finish) {
        isGameFinished = true;
        this.wallet.setFinalBalance();
        this.chickenLocation.set(0);
        this.logger.ogLog(`\u672C\u5C40\u5DF2\u7D50\u7B97, \u7E3D\u5206:${currentStepScore}, \u6B7B\u4EA1:${event.dead ?? "\u7121"}`);
        this.totalRate.set(0);
        this.totalProfit.set(0);
        this.gameState.set("ready");
      }
    }
    this.isPanelBusy.set(false);
    if (this.isAutoRunning()) {
      this.queueNextAutoSpinStep(isGameFinished, currentStepScore);
    }
  }
  /** 處理遊戲內彈窗開啟事件 */
  onInGamePopupOpened(message) {
    const event = this.gameEvent();
    const steps = event?.steps ?? [];
    if (event && steps.length > 0) {
      const lastStep = steps[steps.length - 1];
      const stepRate = Number(lastStep.step_rate.split("_")[0]);
      const stepScore = calc.s2c(Number(lastStep.step_rate.split("_")[1]));
      this.totalRate.set(stepRate);
      this.totalProfit.set(stepScore);
    }
  }
  // 投注進行狀態
  startPanelBusy() {
    this.isPanelBusy.set(true);
    this.isPanelBusyFeedbackVisible.set(true);
    if (this.panelBusyFeedbackTimer) {
      clearTimeout(this.panelBusyFeedbackTimer);
    }
    this.panelBusyFeedbackTimer = setTimeout(() => {
      this.isPanelBusyFeedbackVisible.set(false);
      this.panelBusyFeedbackTimer = void 0;
    }, PANEL_BUSY_FEEDBACK_DURATION_MS);
  }
  // 將數值限制在合法的自動提現步數範圍內
  clampAutoCashOutStep(value) {
    if (Number.isNaN(value)) {
      return 1;
    }
    return Math.min(Math.max(Math.floor(value), 1), this.maxAutoCashOutStep());
  }
  // 將數值限制為整數且不小於0
  clampWholeNumber(value) {
    if (Number.isNaN(value)) {
      return 0;
    }
    return Math.max(Math.floor(value), 0);
  }
  // 將數值格式化為指定小數位數的字串
  formatStopAmount(value) {
    return value.toFixed(this.wallet.decimalPlaces());
  }
  // 將停止獲利金額設定為合法的數值
  setStopProfitAmount(value) {
    const amount = Number(value);
    if (!Number.isNaN(amount)) {
      this.stopProfitAmount.set(amount);
    }
  }
  // 將停止虧損金額設定為合法的數值
  setStopLossAmount(value) {
    const amount = Number(value);
    if (!Number.isNaN(amount)) {
      this.stopLossAmount.set(amount);
    }
  }
  // 當使用者按下投注按鈕時，將遊戲狀態設為playing，並將遊戲階段設為firstGo，然後發送bet 指令給遊戲
  onBet() {
    if (this.isBetButtonDisabled()) {
      return;
    }
    this.wallet.setDisplayBalance(new decimal_default(this.displayBalance()).sub(this.displayBet()).toNumber());
    this.gameState.set("playing");
    this.gameStage.set(OgChickenGameStage.firstGo);
    this.game.sendCommand("bet");
  }
  // 當使用者按下Go按鈕時，將遊戲狀態設為playing，並將遊戲階段設為afterFirstGo，然後發送 go 指令給遊戲
  onGo() {
    const gameRequest = {
      risk: this.difficulty(),
      start: this.chickenLocation(),
      end: this.chickenLocation() + 1,
      finish: false
    };
    const gameString = JSON.stringify(gameRequest);
    const didSendSpinRequest = this.wallet.sendSpinRequest({
      game_stage: this.gameStage(),
      game: gameString
    });
    if (!didSendSpinRequest) {
      return;
    }
    this.startPanelBusy();
    this.gameStage.set(OgChickenGameStage.afterFirstGo);
    this.game.sendCommand("go");
  }
  // 當使用者按下Cashout按鈕時，將遊戲狀態設為playing，並將遊戲階段設為afterFirstGo，然後發送 cashout 指令給遊戲
  onCashout() {
    const gameRequest = {
      risk: this.difficulty(),
      start: this.chickenLocation(),
      end: this.chickenLocation(),
      finish: true
    };
    const gameString = JSON.stringify(gameRequest);
    const didSendSpinRequest = this.wallet.sendSpinRequest({
      game_stage: OgChickenGameStage.afterFirstGo,
      game: gameString
    });
    if (!didSendSpinRequest) {
      return;
    }
    this.startPanelBusy();
    this.game.sendCommand("cashout");
  }
  // 當使用者按下自動提現按鈕時，將遊戲狀態設為playing，並將遊戲階段設為afterFirstGo，然後發送 cashout 指令給遊戲
  onStartAuto() {
    if (this.isAutoRunning()) {
      this.requestAutoStop();
      return;
    }
    if (this.isPanelBusy() || this.gameState() !== "ready") {
      return;
    }
    if (this.isBetAmountOverBalance()) {
      this.showInsufficientBalancePopup.set(true);
      return;
    }
    const betCount = this.numberOfBets();
    this.autoBetsRemaining = betCount > 0 ? betCount : null;
    this.autoInitialBetAmount = this.displayBet();
    this.autoTotalProfit = 0;
    this.isAutoStopRequested.set(false);
    this.isAutoRunning.set(true);
    this.autoRunningChange.emit(true);
    this.startAutoRound();
  }
  // 當使用者按下停止自動投注按鈕時，將isAutoStopRequested設為true，表示使用者請求停止自動投注
  startAutoRound() {
    if (!this.isAutoRunning()) {
      return;
    }
    if (this.isBetAmountOverBalance()) {
      this.showInsufficientBalancePopup.set(true);
      this.stopAutoSpin();
      return;
    }
    this.autoCurrentRoundBetAmount = this.displayBet();
    this.gameState.set("playing");
    this.gameStage.set(OgChickenGameStage.firstGo);
    this.chickenLocation.set(0);
    this.totalRate.set(0);
    this.totalProfit.set(0);
    this.game.sendCommand("bet");
    this.sendAutoGo();
  }
  // 排程下一步的自動投注，根據是否遊戲已結束和當前步數的分數來決定是否繼續自動投注
  queueNextAutoSpinStep(isGameFinished, currentStepScore) {
    this.clearAutoSpinContinueTimer();
    this.autoSpinContinueTimer = setTimeout(() => {
      this.autoSpinContinueTimer = void 0;
      this.continueAutoSpin(isGameFinished, currentStepScore);
    }, AUTO_SPIN_CONTINUE_DELAY_MS);
  }
  // 清除自動投注的計時器，避免重複排程
  continueAutoSpin(isGameFinished, currentStepScore) {
    if (!this.isAutoRunning()) {
      return;
    }
    if (isGameFinished) {
      this.completeAutoRound(currentStepScore);
      if (!this.isAutoRunning()) {
        return;
      }
      this.startAutoRound();
      return;
    }
    if (this.chickenLocation() >= this.autoCashOutStep()) {
      this.sendAutoCashout();
      return;
    }
    this.sendAutoGo();
  }
  // 完成當前輪的自動投注，計算本輪的盈利，並根據盈利情況調整下注金額，如果達到設定的停止條件，則停止自動投注
  completeAutoRound(finalScore) {
    const roundProfit = finalScore - this.autoCurrentRoundBetAmount;
    this.autoTotalProfit += roundProfit;
    if (this.autoBetsRemaining !== null) {
      this.autoBetsRemaining -= 1;
      if (this.autoBetsRemaining <= 0) {
        this.stopAutoSpin();
        return;
      }
    }
    if (this.isAutoStopRequested()) {
      this.stopAutoSpin();
      return;
    }
    if (this.stopProfitAmount() > 0 && this.autoTotalProfit >= this.stopProfitAmount()) {
      this.stopAutoSpin();
      return;
    }
    if (this.stopLossAmount() > 0 && this.autoTotalProfit <= -this.stopLossAmount()) {
      this.stopAutoSpin();
      return;
    }
    this.applyAutoBetAdjustment(roundProfit);
  }
  // 根據本輪的盈利情況，調整下注金額，如果設定為重置，則將下注金額設為初始值；如果設定為增加，則將下注金額增加指定的百分比
  applyAutoBetAdjustment(roundProfit) {
    if (roundProfit > 0) {
      this.applyAutoBetSetting(this.onWinSettingTab(), this.onWinAmount());
      return;
    }
    if (roundProfit < 0) {
      this.applyAutoBetSetting(this.onLossSettingTab(), this.onLossAmount());
    }
  }
  // 根據設定調整下注金額，如果設定為重置，則將下注金額設為初始值；如果設定為增加，則將下注金額增加指定的百分比
  applyAutoBetSetting(setting, amountPercent) {
    if (setting === "reset") {
      this.wallet.setBet(this.autoInitialBetAmount);
      return;
    }
    const nextBet = new decimal_default(this.autoCurrentRoundBetAmount).mul(new decimal_default(1).add(new decimal_default(amountPercent).div(100))).toNumber();
    this.wallet.setBet(nextBet);
  }
  // 發送自動Go指令給遊戲
  sendAutoGo() {
    this.sendGameRequest(false, "go");
    this.gameStage.set(OgChickenGameStage.afterFirstGo);
  }
  // 發送自動提現指令給遊戲
  sendAutoCashout() {
    this.sendGameRequest(true, "cashout");
  }
  // 發送遊戲請求給遊戲，包含是否結束遊戲和指令類型，並根據是否成功發送請求來決定是否停止自動投注
  sendGameRequest(finish, command) {
    const gameRequest = {
      risk: this.difficulty(),
      start: this.chickenLocation(),
      end: finish ? this.chickenLocation() : this.chickenLocation() + 1,
      finish
    };
    const didSendSpinRequest = this.wallet.sendSpinRequest({
      game_stage: finish ? OgChickenGameStage.afterFirstGo : this.gameStage(),
      game: JSON.stringify(gameRequest)
    });
    if (!didSendSpinRequest) {
      this.stopAutoSpin();
      return;
    }
    this.startPanelBusy();
    this.game.sendCommand(command);
  }
  // 請求停止自動投注，將isAutoStopRequested設為true
  requestAutoStop() {
    this.isAutoStopRequested.set(true);
  }
  // 停止自動投注，清除計時器，重置狀態，並顯示停止提示
  stopAutoSpin() {
    this.clearAutoSpinContinueTimer();
    this.autoBetsRemaining = null;
    this.isAutoStopRequested.set(false);
    this.isAutoRunning.set(false);
    this.autoRunningChange.emit(false);
    this.isPanelBusy.set(false);
    if (this.autoStopFeedbackTimer) {
      clearTimeout(this.autoStopFeedbackTimer);
    }
    this.isAutoStopFeedbackVisible.set(true);
    this.autoStopFeedbackTimer = setTimeout(() => {
      this.isAutoStopFeedbackVisible.set(false);
      this.autoStopFeedbackTimer = void 0;
    }, AUTO_STOP_FEEDBACK_DURATION_MS);
  }
  // 清除自動投注的計時器
  clearAutoSpinContinueTimer() {
    if (this.autoSpinContinueTimer) {
      clearTimeout(this.autoSpinContinueTimer);
      this.autoSpinContinueTimer = void 0;
    }
  }
  static \u0275fac = function OgPanelComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OgPanelComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OgPanelComponent, selectors: [["og-panel"]], inputs: { variant: [1, "variant"] }, outputs: { autoRunningChange: "autoRunningChange", gameStateChange: "gameStateChange" }, decls: 7, vars: 3, consts: [["manualContent", ""], ["autoFields", ""], [1, "flex", "h-full", "min-h-0", "flex-col", "overflow-hidden", "bg-zinc-900", "p-4"], [1, "flex", "h-full", "min-h-0", "flex-col", "overflow-y-auto", "bg-zinc-900"], [3, "confirm", "isVisible", "mode"], [3, "betChanged", "value", "betLevel", "disabled", "currencyImage"], ["type", "difficulty", 3, "valueChange", "value", "disabled"], [3, "betChanged", "value", "disabled", "betLevel", "currencyImage"], ["type", "autoCashOut", 3, "valueChange", "label", "value", "min", "max", "disabled"], ["type", "numberOfBets", 3, "valueChange", "infinity", "value", "min", "step", "disabled"], ["type", "onWin", 3, "selectedTabChange", "valueChange", "selectedTab", "value", "disabled", "valueDisabled"], ["type", "onLoss", 3, "selectedTabChange", "valueChange", "selectedTab", "value", "disabled", "valueDisabled"], ["type", "stopProfit", 3, "valueChange", "value", "step", "disabled"], ["type", "stopLoss", 3, "valueChange", "value", "step", "disabled"], ["type", "modeTab", 1, "block", "w-full", "shrink-0", "[&>div]:max-w-none", "[&>div]:mx-0", 3, "tabChange", "selectedTab", "disabled"], [1, "flex-1", "min-h-0", "overflow-y-auto", "pt-4"], [1, "flex", "flex-col", "gap-4"], [3, "ngTemplateOutlet"], ["appPointerDownSound", "", "data-no-click-sound", "", 1, "w-full", 3, "label", "colorCode", "chicken-feedback-active", "disabled"], ["appPointerDownSound", "", "data-no-click-sound", "", 1, "w-full", 3, "clicked", "label", "colorCode", "disabled"], [1, "mb-1", "block", "text-zinc-300", "pt-4"], [1, "flex", "items-center", "gap-1"], ["type", "number", "accentColor", "slate", 1, "min-w-0", "flex-1", 3, "value", "disabled"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center"], [1, "size-5", "chicken-busy-loop"], [1, "flex", "flex-col", "gap-4", "pb-4"], [1, "shrink-0", "bg-zinc-900", "pt-4"], [1, "text-base", "font-semibold", "gap-2", "absolute", "inset-0", "flex", "items-center", "justify-center"], [1, "size-4", "chicken-busy-loop"], [1, "flex-1", "min-h-0", "overflow-y-auto", "p-4"], [1, "block", "text-zinc-300", "pt-2"], [1, "flex", "items-center", "-mt-3"], ["type", "modeTab", 1, "block", "w-full", "shrink-0", "[&>div]:mx-0", "[&>div]:max-w-none", 3, "tabChange", "selectedTab", "disabled"], ["appPointerDownSound", "", "data-no-click-sound", "", 1, "w-full", 3, "label", "colorCode", "size", "chicken-feedback-active", "disabled"], ["appPointerDownSound", "", "data-no-click-sound", "", 1, "w-full", 3, "clicked", "label", "colorCode", "size", "disabled"], [1, "size-6", "chicken-busy-loop"], ["appPointerDownSound", "", "data-no-click-sound", "", 1, "w-full", 3, "clicked", "iconPos", "label", "size", "colorCode", "disabled"], [1, "text-lg", "font-semibold", "gap-2", "absolute", "inset-0", "flex", "items-center", "justify-center"]], template: function OgPanelComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275template(0, OgPanelComponent_ng_template_0_Template, 2, 6, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(2, OgPanelComponent_ng_template_2_Template, 9, 33, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275conditionalCreate(4, OgPanelComponent_Conditional_4_Template, 4, 3, "div", 2)(5, OgPanelComponent_Conditional_5_Template, 11, 10, "div", 3);
      \u0275\u0275elementStart(6, "og-panel-popup", 4);
      \u0275\u0275listener("confirm", function OgPanelComponent_Template_og_panel_popup_confirm_6_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onInsufficientBalancePopupConfirm());
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.variant() === "desktop" ? 4 : 5);
      \u0275\u0275advance(2);
      \u0275\u0275property("isVisible", ctx.showInsufficientBalancePopup())("mode", "insufficient");
    }
  }, dependencies: [CommonModule, NgTemplateOutlet, ApInputBox, PointerDownSoundDirective, ApOgInputComponent, ApOgInputBetComponent, AppI18nPipe, ApIconChickenComponent, OgPanelPopupComponent, ApButtonCustomComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  min-height: 0;\n}\n[_nghost-%COMP%]     .manual-bet-loading button ap-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_manual-bet-bob 400ms ease-in-out 1;\n  transform-origin: center;\n}\n[_nghost-%COMP%]     .manual-bet-loading button ap-icon svg {\n  animation: manual-bet-pulse 320ms ease-in-out 1;\n  transform-origin: center;\n  opacity: 0.6;\n}\n@keyframes _ngcontent-%COMP%_manual-bet-bob {\n  0% {\n    transform: rotate(0deg) scale(1);\n  }\n  50% {\n    transform: rotate(10deg) scale(1.4);\n  }\n  100% {\n    transform: rotate(0deg) scale(1.2);\n  }\n}\n[_nghost-%COMP%]     .auto-bet-loading button ap-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_auto-bet-bob 750ms ease-in-out infinite;\n  transform-origin: center;\n}\n[_nghost-%COMP%]     .auto-bet-loading button ap-icon svg {\n  animation: auto-bet-pulse 400ms ease-out infinite;\n  transform-origin: center;\n  opacity: 1;\n}\n@keyframes _ngcontent-%COMP%_auto-bet-bob {\n  0% {\n    transform: rotate(0deg) scale(1);\n  }\n  50% {\n    transform: rotate(10deg) scale(1.3);\n  }\n  100% {\n    transform: rotate(0deg) scale(1);\n  }\n}\nap-icon-chicken.chicken-bet-pulse[_ngcontent-%COMP%] {\n  transform-origin: center;\n  animation: _ngcontent-%COMP%_chicken-bet-pulse 1s ease-in-out infinite;\n}\nap-icon-chicken.chicken-busy-loop[_ngcontent-%COMP%] {\n  transform-origin: center;\n  animation: _ngcontent-%COMP%_chicken-busy-loop 900ms ease-in-out infinite;\n  opacity: 1;\n}\n@keyframes _ngcontent-%COMP%_chicken-busy-loop {\n  0%, 100% {\n    transform: translateY(0) rotate(0deg) scale(1);\n  }\n  25% {\n    transform: translateY(-15%) rotate(-8deg) scale(1.15);\n  }\n  50% {\n    transform: translateY(0) rotate(0deg) scale(1.3);\n  }\n  75% {\n    transform: translateY(-15%) rotate(8deg) scale(1.15);\n  }\n}\n[_nghost-%COMP%]     ap-button-custom.chicken-feedback-active button {\n  position: relative;\n}\n[_nghost-%COMP%]     ap-button-custom.chicken-feedback-active .ap-button-custom-label {\n  visibility: hidden;\n}\n@keyframes _ngcontent-%COMP%_chicken-bet-pulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.3);\n  }\n}\n/*# sourceMappingURL=og-panel.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OgPanelComponent, [{
    type: Component,
    args: [{ selector: "og-panel", imports: [CommonModule, ApInputBox, PointerDownSoundDirective, ApOgInputComponent, ApOgInputBetComponent, AppI18nPipe, ApIconChickenComponent, OgPanelPopupComponent, ApButtonCustomComponent], template: `<ng-template #manualContent>
  <ap-og-input-bet
    [value]="displayBet()"
    [betLevel]="betLevel()"
    [disabled]="isInputBetDisabled()"
    [currencyImage]="currencyImage()"
    (betChanged)="onInputBetChanged($event)"
  />

  <ap-og-input
    type="difficulty"
    [value]="difficultyString()"
    [disabled]="isInputDifficultyDisabled()"
    (valueChange)="onDifficultyChange($event)"
  />
</ng-template>

<ng-template #autoFields>
  <ap-og-input-bet
    [value]="displayBet()"
    [disabled]="isInputBetDisabled()"
    [betLevel]="betLevel()"
    [currencyImage]="currencyImage()"
    (betChanged)="onInputBetChanged($event)"
  />

  <ap-og-input
    type="difficulty"
    [value]="difficultyString()"
    [disabled]="isInputDifficultyDisabled()"
    (valueChange)="onDifficultyChange($event)"
  />

  <ap-og-input
    type="autoCashOut"
    [label]="'og_guide_8' | appI18n: 'Auto Cash Out'"
    [value]="autoCashOutStepString()"
    [min]="1"
    [max]="maxAutoCashOutStep()"
    [disabled]="isAutoRunning() || isPanelBusy()"
    (valueChange)="onAutoCashOutStepChange($event)"
  />

  <ap-og-input
    type="numberOfBets"
    [infinity]="true"
    [value]="numberOfBetsString()"
    [min]="0"
    [step]="1"
    [disabled]="isAutoRunning() || isPanelBusy()"
    (valueChange)="onNumberOfBetsChange($event)"
  />

  <ap-og-input
    type="onWin"
    [selectedTab]="onWinSettingTab()"
    [value]="onWinAmountString()"
    [disabled]="isAutoRunning() || isPanelBusy()"
    [valueDisabled]="onWinSettingTab() === 'reset'"
    (selectedTabChange)="onWinSettingTabChange($event)"
    (valueChange)="onWinAmountChange($event)"
  />
  <ap-og-input
    type="onLoss"
    [selectedTab]="onLossSettingTab()"
    [value]="onLossAmountString()"
    [disabled]="isAutoRunning() || isPanelBusy()"
    [valueDisabled]="onLossSettingTab() === 'reset'"
    (selectedTabChange)="onLossSettingTabChange($event)"
    (valueChange)="onLossAmountChange($event)"
  />
  <ap-og-input
    type="stopProfit"
    [value]="stopProfitAmountString()"
    [step]="stopAmountStep()"
    [disabled]="isAutoRunning() || isPanelBusy()"
    (valueChange)="onStopProfitAmountChange($event)"
  />
  <ap-og-input
    type="stopLoss"
    [value]="stopLossAmountString()"
    [step]="stopAmountStep()"
    [disabled]="isAutoRunning() || isPanelBusy()"
    (valueChange)="onStopLossAmountChange($event)"
  />
</ng-template>

<!-- Desktop -->
@if (variant() === "desktop") {
  <div class="flex h-full min-h-0 flex-col overflow-hidden bg-zinc-900 p-4">
    <ap-og-input
      type="modeTab"
      class="block w-full shrink-0 [&>div]:max-w-none [&>div]:mx-0"
      [selectedTab]="activeTab()"
      [disabled]="isModeTabDisabled()"
      (tabChange)="onTabChange($event)"
    />

    @if (activeTab() === "manual") {
      <div class="flex-1 min-h-0 overflow-y-auto pt-4">
        <div class="flex flex-col gap-4">
          <ng-container [ngTemplateOutlet]="manualContent" />
          <div class="flex flex-col gap-4">
            @if (gameState() === "ready") {
              <ap-button-custom
                appPointerDownSound
                data-no-click-sound
                [label]="'og_bet_info_betting' | appI18n: 'Bet'"
                [colorCode]="colorTheme()"
                class="w-full"
                [class.chicken-feedback-active]="isPanelBusy()"
                [disabled]="isBetButtonDisabled()"
                (clicked)="onBet()"
              >
                @if (isPanelBusy()) {
                  <span
                    class="absolute inset-0 flex items-center justify-center"
                  >
                    <ap-icon-chicken class="size-5 chicken-busy-loop" />
                  </span>
                }
              </ap-button-custom>
            } @else {
              <ap-button-custom
                appPointerDownSound
                data-no-click-sound
                [label]="
                  appI18n.gameStr('bet_btn_go') ??
                  appI18n.instant('bet_btn_go', 'Go')
                "
                [colorCode]="colorTheme()"
                class="w-full"
                [class.chicken-feedback-active]="isPanelBusy()"
                [disabled]="isPanelBusy()"
                (clicked)="onGo()"
              >
                @if (isPanelBusy()) {
                  <span
                    class="absolute inset-0 flex items-center justify-center"
                  >
                    <ap-icon-chicken class="size-5 chicken-busy-loop" />
                  </span>
                }
              </ap-button-custom>
            }
            <ap-button-custom
              appPointerDownSound
              data-no-click-sound
              [label]="'og_bet_info_cash' | appI18n: 'Cashout'"
              [colorCode]="colorTheme()"
              class="w-full"
              [disabled]="isCashoutDisabled()"
              (clicked)="onCashout()"
            />
          </div>
        </div>
        <!--  Total Profit -->
        <div class="mb-1 block text-zinc-300 pt-4">
          {{ "og_guide_6" | appI18n: "Total Profit" }} ({{
            totalRateString()
          }}x)
        </div>
        <div class="flex items-center gap-1">
          <ap-input-box
            class="min-w-0 flex-1"
            type="number"
            [value]="totalProfitString()"
            [disabled]="true"
            accentColor="slate"
          />
        </div>
      </div>
    } @else {
      <div class="flex-1 min-h-0 overflow-y-auto pt-4">
        <div class="flex flex-col gap-4 pb-4">
          <ng-container [ngTemplateOutlet]="autoFields" />
        </div>
      </div>

      <div class="shrink-0 bg-zinc-900 pt-4">
        <ap-button-custom
          appPointerDownSound
          data-no-click-sound
          [class.auto-bet-loading]="isAutoRunning()"
          [class.chicken-feedback-active]="
            isAutoRunning() ||
            isPanelBusyFeedbackVisible() ||
            isAutoStopRequested() ||
            isAutoStopFeedbackVisible()
          "
          [label]="
            isAutoStopRequested()
              ? ('og_autobet_finishBet' | appI18n: 'Finishing Bet')
              : isAutoRunning()
                ? ('og_autobet_autoEnd' | appI18n: 'Stop Autobet')
                : ('og_autobet_autoStart' | appI18n: 'Start Autobet')
          "
          [colorCode]="colorTheme()"
          class="w-full"
          [disabled]="isAutoStopRequested() || isAutoStopFeedbackVisible()"
          (clicked)="onStartAuto()"
        >
          @if (isAutoStopRequested() || isAutoStopFeedbackVisible()) {
            <span
              class="text-base font-semibold gap-2 absolute inset-0 flex items-center justify-center"
            >
              {{ "og_autobet_finishBet" | appI18n: "Finishing Bet" }}
              <ap-icon-chicken class="size-4 chicken-busy-loop" />
            </span>
          } @else if (isAutoRunning()) {
            <span
              class="text-base font-semibold gap-2 absolute inset-0 flex items-center justify-center"
            >
              {{ "og_autobet_autoEnd" | appI18n: "Stop Autobet" }}
              <ap-icon-chicken class="size-4 chicken-busy-loop" />
            </span>
          } @else if (isPanelBusyFeedbackVisible()) {
            <span class="absolute inset-0 flex items-center justify-center">
              <ap-icon-chicken class="size-4 chicken-busy-loop" />
            </span>
          }
        </ap-button-custom>
      </div>
    }
  </div>
  <!-- Mobile -->
} @else {
  <div class="flex h-full min-h-0 flex-col overflow-y-auto bg-zinc-900">
    <div class="flex-1 min-h-0 overflow-y-auto p-4">
      <div class="flex flex-col gap-4">
        @if (activeTab() === "manual") {
          <div class="flex flex-col gap-4">
            @if (gameState() === "ready") {
              <ap-button-custom
                appPointerDownSound
                data-no-click-sound
                [label]="'og_bet_info_betting' | appI18n: 'Bet'"
                [colorCode]="colorTheme()"
                [size]="'large'"
                class="w-full"
                [class.chicken-feedback-active]="isPanelBusy()"
                [disabled]="isBetButtonDisabled()"
                (clicked)="onBet()"
              >
                @if (isPanelBusy()) {
                  <span
                    class="absolute inset-0 flex items-center justify-center"
                  >
                    <ap-icon-chicken class="size-6 chicken-busy-loop" />
                  </span>
                }
              </ap-button-custom>
            } @else {
              <ap-button-custom
                appPointerDownSound
                data-no-click-sound
                [label]="
                  appI18n.gameStr('bet_btn_go') ??
                  appI18n.instant('bet_btn_go', 'Go')
                "
                [colorCode]="colorTheme()"
                [size]="'large'"
                class="w-full"
                [class.chicken-feedback-active]="isPanelBusy()"
                [disabled]="isPanelBusy()"
                (clicked)="onGo()"
              >
                @if (isPanelBusy()) {
                  <span
                    class="absolute inset-0 flex items-center justify-center"
                  >
                    <ap-icon-chicken class="size-6 chicken-busy-loop" />
                  </span>
                }
              </ap-button-custom>
            }
            <ap-button-custom
              appPointerDownSound
              data-no-click-sound
              [label]="'og_bet_info_cash' | appI18n: 'Cashout'"
              [colorCode]="colorTheme()"
              [size]="'large'"
              class="w-full"
              [disabled]="isCashoutDisabled()"
              (clicked)="onCashout()"
            />
          </div>
          <ng-container [ngTemplateOutlet]="manualContent" />
        } @else {
          <ap-button-custom
            appPointerDownSound
            data-no-click-sound
            [class.auto-bet-loading]="isAutoRunning()"
            [class.chicken-feedback-active]="
              isAutoRunning() ||
              isPanelBusyFeedbackVisible() ||
              isAutoStopRequested() ||
              isAutoStopFeedbackVisible()
            "
            [iconPos]="'right'"
            [label]="
              isAutoStopRequested()
                ? ('og_autobet_finishBet' | appI18n: 'Finishing Bet')
                : isAutoRunning()
                  ? ('og_autobet_autoEnd' | appI18n: 'Stop Autobet')
                  : ('og_autobet_autoStart' | appI18n: 'Start Autobet')
            "
            [size]="'large'"
            [colorCode]="colorTheme()"
            class="w-full"
            [disabled]="
              (isPanelBusy() && !isAutoRunning()) ||
              isAutoStopRequested() ||
              isAutoStopFeedbackVisible()
            "
            (clicked)="onStartAuto()"
          >
            @if (isAutoStopRequested() || isAutoStopFeedbackVisible()) {
              <span
                class="text-lg font-semibold gap-2 absolute inset-0 flex items-center justify-center"
              >
                {{ "og_autobet_finishBet" | appI18n: "Finishing Bet" }}
                <ap-icon-chicken class="size-5 chicken-busy-loop" />
              </span>
            } @else if (isAutoRunning()) {
              <span
                class="text-lg font-semibold gap-2 absolute inset-0 flex items-center justify-center"
              >
                {{ "og_autobet_autoEnd" | appI18n: "Stop Autobet" }}
                <ap-icon-chicken class="size-5 chicken-busy-loop" />
              </span>
            }
          </ap-button-custom>
          <ng-container [ngTemplateOutlet]="autoFields" />
        }
        <!--  Total Profit -->
        <div class="block text-zinc-300 pt-2">
          {{ "og_guide_6" | appI18n: "Total Profit" }} ({{
            totalRateString()
          }}x)
        </div>
        <div class="flex items-center -mt-3">
          <ap-input-box
            class="min-w-0 flex-1"
            type="number"
            [value]="totalProfitString()"
            [disabled]="true"
            accentColor="slate"
          />
        </div>
        <ap-og-input
          type="modeTab"
          class="block w-full shrink-0 [&>div]:mx-0 [&>div]:max-w-none"
          [selectedTab]="activeTab()"
          [disabled]="isModeTabDisabled()"
          (tabChange)="onTabChange($event)"
        />
      </div>
    </div>
  </div>
}
<og-panel-popup
  [isVisible]="showInsufficientBalancePopup()"
  [mode]="'insufficient'"
  (confirm)="onInsufficientBalancePopupConfirm()"
/>
`, styles: ["/* src/app/pages/og-panel/og-panel.component.css */\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n  min-height: 0;\n}\n:host ::ng-deep .manual-bet-loading button ap-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  animation: manual-bet-bob 400ms ease-in-out 1;\n  transform-origin: center;\n}\n:host ::ng-deep .manual-bet-loading button ap-icon svg {\n  animation: manual-bet-pulse 320ms ease-in-out 1;\n  transform-origin: center;\n  opacity: 0.6;\n}\n@keyframes manual-bet-bob {\n  0% {\n    transform: rotate(0deg) scale(1);\n  }\n  50% {\n    transform: rotate(10deg) scale(1.4);\n  }\n  100% {\n    transform: rotate(0deg) scale(1.2);\n  }\n}\n:host ::ng-deep .auto-bet-loading button ap-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  animation: auto-bet-bob 750ms ease-in-out infinite;\n  transform-origin: center;\n}\n:host ::ng-deep .auto-bet-loading button ap-icon svg {\n  animation: auto-bet-pulse 400ms ease-out infinite;\n  transform-origin: center;\n  opacity: 1;\n}\n@keyframes auto-bet-bob {\n  0% {\n    transform: rotate(0deg) scale(1);\n  }\n  50% {\n    transform: rotate(10deg) scale(1.3);\n  }\n  100% {\n    transform: rotate(0deg) scale(1);\n  }\n}\nap-icon-chicken.chicken-bet-pulse {\n  transform-origin: center;\n  animation: chicken-bet-pulse 1s ease-in-out infinite;\n}\nap-icon-chicken.chicken-busy-loop {\n  transform-origin: center;\n  animation: chicken-busy-loop 900ms ease-in-out infinite;\n  opacity: 1;\n}\n@keyframes chicken-busy-loop {\n  0%, 100% {\n    transform: translateY(0) rotate(0deg) scale(1);\n  }\n  25% {\n    transform: translateY(-15%) rotate(-8deg) scale(1.15);\n  }\n  50% {\n    transform: translateY(0) rotate(0deg) scale(1.3);\n  }\n  75% {\n    transform: translateY(-15%) rotate(8deg) scale(1.15);\n  }\n}\n:host ::ng-deep ap-button-custom.chicken-feedback-active button {\n  position: relative;\n}\n:host ::ng-deep ap-button-custom.chicken-feedback-active .ap-button-custom-label {\n  visibility: hidden;\n}\n@keyframes chicken-bet-pulse {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.3);\n  }\n}\n/*# sourceMappingURL=og-panel.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OgPanelComponent, { className: "OgPanelComponent", filePath: "src/app/pages/og-panel/og-panel.component.ts", lineNumber: 38 });
})();

export {
  OgWalletService,
  InfoOgComponent,
  OgFairnessComponent,
  HistoryListOGComponent,
  OgPanelComponent
};
/*! Bundled license information:

crypto-js/ripemd160.js:
  (** @preserve
  	(c) 2012 by Cédric Mesnil. All rights reserved.
  
  	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
  
  	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
  	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
  
  	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  	*)

crypto-js/mode-ctr-gladman.js:
  (** @preserve
   * Counter block mode compatible with  Dr Brian Gladman fileenc.c
   * derived from CryptoJS.mode.CTR
   * Jan Hruby jhruby.web@gmail.com
   *)
*/
//# sourceMappingURL=chunk-JJADASS5.js.map
