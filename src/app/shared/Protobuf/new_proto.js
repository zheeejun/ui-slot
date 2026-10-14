/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

//var $protobuf = require("protobufjs/minimal");
import * as $protobuf from 'protobufjs';

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.serverProto = (function() {

    /**
     * Namespace serverProto.
     * @exports serverProto
     * @namespace
     */
    var serverProto = {};

    /**
     * eMessageEnum enum.
     * @name serverProto.eMessageEnum
     * @enum {number}
     * @property {number} eME_S2C_INFO=0 eME_S2C_INFO value
     * @property {number} eME_C2S_LOGIN_REQUEST=1 eME_C2S_LOGIN_REQUEST value
     * @property {number} eME_S2C_LOGIN_RESULT=2 eME_S2C_LOGIN_RESULT value
     * @property {number} eME_C2S_SPIN_REQUEST=3 eME_C2S_SPIN_REQUEST value
     * @property {number} eME_S2C_SPIN_RESULT=4 eME_S2C_SPIN_RESULT value
     * @property {number} eME_C2S_OG_REQUEST=5 eME_C2S_OG_REQUEST value
     * @property {number} eME_S2C_OG_RESPONSE=6 eME_S2C_OG_RESPONSE value
     * @property {number} eME_MAX=7 eME_MAX value
     */
    serverProto.eMessageEnum = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "eME_S2C_INFO"] = 0;
        values[valuesById[1] = "eME_C2S_LOGIN_REQUEST"] = 1;
        values[valuesById[2] = "eME_S2C_LOGIN_RESULT"] = 2;
        values[valuesById[3] = "eME_C2S_SPIN_REQUEST"] = 3;
        values[valuesById[4] = "eME_S2C_SPIN_RESULT"] = 4;
        values[valuesById[5] = "eME_C2S_OG_REQUEST"] = 5;
        values[valuesById[6] = "eME_S2C_OG_RESPONSE"] = 6;
        values[valuesById[7] = "eME_MAX"] = 7;
        return values;
    })();

    serverProto.info = (function() {

        /**
         * Properties of an info.
         * @memberof serverProto
         * @interface Iinfo
         * @property {number|null} [code] info code
         * @property {string|null} [msg] info msg
         */

        /**
         * Constructs a new info.
         * @memberof serverProto
         * @classdesc Represents an info.
         * @implements Iinfo
         * @constructor
         * @param {serverProto.Iinfo=} [properties] Properties to set
         */
        function info(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * info code.
         * @member {number} code
         * @memberof serverProto.info
         * @instance
         */
        info.prototype.code = 0;

        /**
         * info msg.
         * @member {string} msg
         * @memberof serverProto.info
         * @instance
         */
        info.prototype.msg = "";

        /**
         * Creates a new info instance using the specified properties.
         * @function create
         * @memberof serverProto.info
         * @static
         * @param {serverProto.Iinfo=} [properties] Properties to set
         * @returns {serverProto.info} info instance
         */
        info.create = function create(properties) {
            return new info(properties);
        };

        /**
         * Encodes the specified info message. Does not implicitly {@link serverProto.info.verify|verify} messages.
         * @function encode
         * @memberof serverProto.info
         * @static
         * @param {serverProto.Iinfo} message info message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        info.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified info message, length delimited. Does not implicitly {@link serverProto.info.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverProto.info
         * @static
         * @param {serverProto.Iinfo} message info message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        info.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an info message from the specified reader or buffer.
         * @function decode
         * @memberof serverProto.info
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverProto.info} info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        info.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverProto.info();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.uint32();
                        break;
                    }
                case 2: {
                        message.msg = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an info message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverProto.info
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverProto.info} info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        info.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an info message.
         * @function verify
         * @memberof serverProto.info
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        info.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            return null;
        };

        /**
         * Creates an info message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverProto.info
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverProto.info} info
         */
        info.fromObject = function fromObject(object) {
            if (object instanceof $root.serverProto.info)
                return object;
            var message = new $root.serverProto.info();
            if (object.code != null)
                message.code = object.code >>> 0;
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from an info message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverProto.info
         * @static
         * @param {serverProto.info} message info
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        info.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.msg = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this info to JSON.
         * @function toJSON
         * @memberof serverProto.info
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        info.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for info
         * @function getTypeUrl
         * @memberof serverProto.info
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        info.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/serverProto.info";
        };

        /**
         * eCodeEnum enum.
         * @name serverProto.info.eCodeEnum
         * @enum {number}
         * @property {number} eCE_JP=0 eCE_JP value
         * @property {number} eCE_ERROR=1 eCE_ERROR value
         * @property {number} eCE_HISTORY_INFO=2 eCE_HISTORY_INFO value
         * @property {number} eCE_UPDATE_BALANCE=3 eCE_UPDATE_BALANCE value
         * @property {number} eCE_GAME_INFO=4 eCE_GAME_INFO value
         * @property {number} eCE_JP_WIN_DATA=7 eCE_JP_WIN_DATA value
         * @property {number} eCE_MSG=9 eCE_MSG value
         * @property {number} eCE_CASH_DROP_INFO=10 eCE_CASH_DROP_INFO value
         * @property {number} eCE_RS=11 eCE_RS value
         * @property {number} eCE_RS_NOTIFY_CENTER=12 eCE_RS_NOTIFY_CENTER value
         * @property {number} eCE_CLIENT_LOG=13 eCE_CLIENT_LOG value
         * @property {number} eCE_CHANGE_SEED=14 eCE_CHANGE_SEED value
         * @property {number} eCE_SEED_HISTORY=15 eCE_SEED_HISTORY value
         * @property {number} eCE_MAX=16 eCE_MAX value
         */
        info.eCodeEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "eCE_JP"] = 0;
            values[valuesById[1] = "eCE_ERROR"] = 1;
            values[valuesById[2] = "eCE_HISTORY_INFO"] = 2;
            values[valuesById[3] = "eCE_UPDATE_BALANCE"] = 3;
            values[valuesById[4] = "eCE_GAME_INFO"] = 4;
            values[valuesById[7] = "eCE_JP_WIN_DATA"] = 7;
            values[valuesById[9] = "eCE_MSG"] = 9;
            values[valuesById[10] = "eCE_CASH_DROP_INFO"] = 10;
            values[valuesById[11] = "eCE_RS"] = 11;
            values[valuesById[12] = "eCE_RS_NOTIFY_CENTER"] = 12;
            values[valuesById[13] = "eCE_CLIENT_LOG"] = 13;
            values[valuesById[14] = "eCE_CHANGE_SEED"] = 14;
            values[valuesById[15] = "eCE_SEED_HISTORY"] = 15;
            values[valuesById[16] = "eCE_MAX"] = 16;
            return values;
        })();

        return info;
    })();

    serverProto.login = (function() {

        /**
         * Properties of a login.
         * @memberof serverProto
         * @interface Ilogin
         * @property {string|null} [auth] login auth
         * @property {string|null} [gameId] login gameId
         */

        /**
         * Constructs a new login.
         * @memberof serverProto
         * @classdesc Represents a login.
         * @implements Ilogin
         * @constructor
         * @param {serverProto.Ilogin=} [properties] Properties to set
         */
        function login(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * login auth.
         * @member {string} auth
         * @memberof serverProto.login
         * @instance
         */
        login.prototype.auth = "";

        /**
         * login gameId.
         * @member {string} gameId
         * @memberof serverProto.login
         * @instance
         */
        login.prototype.gameId = "";

        /**
         * Creates a new login instance using the specified properties.
         * @function create
         * @memberof serverProto.login
         * @static
         * @param {serverProto.Ilogin=} [properties] Properties to set
         * @returns {serverProto.login} login instance
         */
        login.create = function create(properties) {
            return new login(properties);
        };

        /**
         * Encodes the specified login message. Does not implicitly {@link serverProto.login.verify|verify} messages.
         * @function encode
         * @memberof serverProto.login
         * @static
         * @param {serverProto.Ilogin} message login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        login.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.auth != null && Object.hasOwnProperty.call(message, "auth"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.auth);
            if (message.gameId != null && Object.hasOwnProperty.call(message, "gameId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.gameId);
            return writer;
        };

        /**
         * Encodes the specified login message, length delimited. Does not implicitly {@link serverProto.login.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverProto.login
         * @static
         * @param {serverProto.Ilogin} message login message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        login.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a login message from the specified reader or buffer.
         * @function decode
         * @memberof serverProto.login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverProto.login} login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        login.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverProto.login();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.auth = reader.string();
                        break;
                    }
                case 2: {
                        message.gameId = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a login message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverProto.login
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverProto.login} login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        login.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a login message.
         * @function verify
         * @memberof serverProto.login
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        login.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.auth != null && message.hasOwnProperty("auth"))
                if (!$util.isString(message.auth))
                    return "auth: string expected";
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                if (!$util.isString(message.gameId))
                    return "gameId: string expected";
            return null;
        };

        /**
         * Creates a login message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverProto.login
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverProto.login} login
         */
        login.fromObject = function fromObject(object) {
            if (object instanceof $root.serverProto.login)
                return object;
            var message = new $root.serverProto.login();
            if (object.auth != null)
                message.auth = String(object.auth);
            if (object.gameId != null)
                message.gameId = String(object.gameId);
            return message;
        };

        /**
         * Creates a plain object from a login message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverProto.login
         * @static
         * @param {serverProto.login} message login
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        login.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.auth = "";
                object.gameId = "";
            }
            if (message.auth != null && message.hasOwnProperty("auth"))
                object.auth = message.auth;
            if (message.gameId != null && message.hasOwnProperty("gameId"))
                object.gameId = message.gameId;
            return object;
        };

        /**
         * Converts this login to JSON.
         * @function toJSON
         * @memberof serverProto.login
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        login.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for login
         * @function getTypeUrl
         * @memberof serverProto.login
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        login.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/serverProto.login";
        };

        return login;
    })();

    serverProto.login_result = (function() {

        /**
         * Properties of a login_result.
         * @memberof serverProto
         * @interface Ilogin_result
         * @property {string|null} [errorCode] login_result errorCode
         * @property {string|null} [version] login_result version
         * @property {string|null} [currency] login_result currency
         * @property {number|Long|null} [money] login_result money
         * @property {string|null} [note] login_result note
         * @property {Array.<number|Long>|null} [betList] login_result betList
         */

        /**
         * Constructs a new login_result.
         * @memberof serverProto
         * @classdesc Represents a login_result.
         * @implements Ilogin_result
         * @constructor
         * @param {serverProto.Ilogin_result=} [properties] Properties to set
         */
        function login_result(properties) {
            this.betList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * login_result errorCode.
         * @member {string} errorCode
         * @memberof serverProto.login_result
         * @instance
         */
        login_result.prototype.errorCode = "";

        /**
         * login_result version.
         * @member {string} version
         * @memberof serverProto.login_result
         * @instance
         */
        login_result.prototype.version = "";

        /**
         * login_result currency.
         * @member {string} currency
         * @memberof serverProto.login_result
         * @instance
         */
        login_result.prototype.currency = "";

        /**
         * login_result money.
         * @member {number|Long} money
         * @memberof serverProto.login_result
         * @instance
         */
        login_result.prototype.money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * login_result note.
         * @member {string} note
         * @memberof serverProto.login_result
         * @instance
         */
        login_result.prototype.note = "";

        /**
         * login_result betList.
         * @member {Array.<number|Long>} betList
         * @memberof serverProto.login_result
         * @instance
         */
        login_result.prototype.betList = $util.emptyArray;

        /**
         * Creates a new login_result instance using the specified properties.
         * @function create
         * @memberof serverProto.login_result
         * @static
         * @param {serverProto.Ilogin_result=} [properties] Properties to set
         * @returns {serverProto.login_result} login_result instance
         */
        login_result.create = function create(properties) {
            return new login_result(properties);
        };

        /**
         * Encodes the specified login_result message. Does not implicitly {@link serverProto.login_result.verify|verify} messages.
         * @function encode
         * @memberof serverProto.login_result
         * @static
         * @param {serverProto.Ilogin_result} message login_result message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        login_result.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.errorCode);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
            if (message.currency != null && Object.hasOwnProperty.call(message, "currency"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.currency);
            if (message.money != null && Object.hasOwnProperty.call(message, "money"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.money);
            if (message.note != null && Object.hasOwnProperty.call(message, "note"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.note);
            if (message.betList != null && message.betList.length) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork();
                for (var i = 0; i < message.betList.length; ++i)
                    writer.int64(message.betList[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified login_result message, length delimited. Does not implicitly {@link serverProto.login_result.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverProto.login_result
         * @static
         * @param {serverProto.Ilogin_result} message login_result message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        login_result.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a login_result message from the specified reader or buffer.
         * @function decode
         * @memberof serverProto.login_result
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverProto.login_result} login_result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        login_result.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverProto.login_result();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.errorCode = reader.string();
                        break;
                    }
                case 2: {
                        message.version = reader.string();
                        break;
                    }
                case 3: {
                        message.currency = reader.string();
                        break;
                    }
                case 4: {
                        message.money = reader.int64();
                        break;
                    }
                case 5: {
                        message.note = reader.string();
                        break;
                    }
                case 6: {
                        if (!(message.betList && message.betList.length))
                            message.betList = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.betList.push(reader.int64());
                        } else
                            message.betList.push(reader.int64());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a login_result message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverProto.login_result
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverProto.login_result} login_result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        login_result.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a login_result message.
         * @function verify
         * @memberof serverProto.login_result
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        login_result.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                if (!$util.isString(message.errorCode))
                    return "errorCode: string expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            if (message.currency != null && message.hasOwnProperty("currency"))
                if (!$util.isString(message.currency))
                    return "currency: string expected";
            if (message.money != null && message.hasOwnProperty("money"))
                if (!$util.isInteger(message.money) && !(message.money && $util.isInteger(message.money.low) && $util.isInteger(message.money.high)))
                    return "money: integer|Long expected";
            if (message.note != null && message.hasOwnProperty("note"))
                if (!$util.isString(message.note))
                    return "note: string expected";
            if (message.betList != null && message.hasOwnProperty("betList")) {
                if (!Array.isArray(message.betList))
                    return "betList: array expected";
                for (var i = 0; i < message.betList.length; ++i)
                    if (!$util.isInteger(message.betList[i]) && !(message.betList[i] && $util.isInteger(message.betList[i].low) && $util.isInteger(message.betList[i].high)))
                        return "betList: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates a login_result message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverProto.login_result
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverProto.login_result} login_result
         */
        login_result.fromObject = function fromObject(object) {
            if (object instanceof $root.serverProto.login_result)
                return object;
            var message = new $root.serverProto.login_result();
            if (object.errorCode != null)
                message.errorCode = String(object.errorCode);
            if (object.version != null)
                message.version = String(object.version);
            if (object.currency != null)
                message.currency = String(object.currency);
            if (object.money != null)
                if ($util.Long)
                    (message.money = $util.Long.fromValue(object.money)).unsigned = false;
                else if (typeof object.money === "string")
                    message.money = parseInt(object.money, 10);
                else if (typeof object.money === "number")
                    message.money = object.money;
                else if (typeof object.money === "object")
                    message.money = new $util.LongBits(object.money.low >>> 0, object.money.high >>> 0).toNumber();
            if (object.note != null)
                message.note = String(object.note);
            if (object.betList) {
                if (!Array.isArray(object.betList))
                    throw TypeError(".serverProto.login_result.betList: array expected");
                message.betList = [];
                for (var i = 0; i < object.betList.length; ++i)
                    if ($util.Long)
                        (message.betList[i] = $util.Long.fromValue(object.betList[i])).unsigned = false;
                    else if (typeof object.betList[i] === "string")
                        message.betList[i] = parseInt(object.betList[i], 10);
                    else if (typeof object.betList[i] === "number")
                        message.betList[i] = object.betList[i];
                    else if (typeof object.betList[i] === "object")
                        message.betList[i] = new $util.LongBits(object.betList[i].low >>> 0, object.betList[i].high >>> 0).toNumber();
            }
            return message;
        };

        /**
         * Creates a plain object from a login_result message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverProto.login_result
         * @static
         * @param {serverProto.login_result} message login_result
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        login_result.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.betList = [];
            if (options.defaults) {
                object.errorCode = "";
                object.version = "";
                object.currency = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.money = options.longs === String ? "0" : 0;
                object.note = "";
            }
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                object.errorCode = message.errorCode;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.currency != null && message.hasOwnProperty("currency"))
                object.currency = message.currency;
            if (message.money != null && message.hasOwnProperty("money"))
                if (typeof message.money === "number")
                    object.money = options.longs === String ? String(message.money) : message.money;
                else
                    object.money = options.longs === String ? $util.Long.prototype.toString.call(message.money) : options.longs === Number ? new $util.LongBits(message.money.low >>> 0, message.money.high >>> 0).toNumber() : message.money;
            if (message.note != null && message.hasOwnProperty("note"))
                object.note = message.note;
            if (message.betList && message.betList.length) {
                object.betList = [];
                for (var j = 0; j < message.betList.length; ++j)
                    if (typeof message.betList[j] === "number")
                        object.betList[j] = options.longs === String ? String(message.betList[j]) : message.betList[j];
                    else
                        object.betList[j] = options.longs === String ? $util.Long.prototype.toString.call(message.betList[j]) : options.longs === Number ? new $util.LongBits(message.betList[j].low >>> 0, message.betList[j].high >>> 0).toNumber() : message.betList[j];
            }
            return object;
        };

        /**
         * Converts this login_result to JSON.
         * @function toJSON
         * @memberof serverProto.login_result
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        login_result.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for login_result
         * @function getTypeUrl
         * @memberof serverProto.login_result
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        login_result.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/serverProto.login_result";
        };

        return login_result;
    })();

    serverProto.spin = (function() {

        /**
         * Properties of a spin.
         * @memberof serverProto
         * @interface Ispin
         * @property {number|Long|null} [bet] spin bet
         * @property {string|null} [note] spin note
         */

        /**
         * Constructs a new spin.
         * @memberof serverProto
         * @classdesc Represents a spin.
         * @implements Ispin
         * @constructor
         * @param {serverProto.Ispin=} [properties] Properties to set
         */
        function spin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * spin bet.
         * @member {number|Long} bet
         * @memberof serverProto.spin
         * @instance
         */
        spin.prototype.bet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * spin note.
         * @member {string} note
         * @memberof serverProto.spin
         * @instance
         */
        spin.prototype.note = "";

        /**
         * Creates a new spin instance using the specified properties.
         * @function create
         * @memberof serverProto.spin
         * @static
         * @param {serverProto.Ispin=} [properties] Properties to set
         * @returns {serverProto.spin} spin instance
         */
        spin.create = function create(properties) {
            return new spin(properties);
        };

        /**
         * Encodes the specified spin message. Does not implicitly {@link serverProto.spin.verify|verify} messages.
         * @function encode
         * @memberof serverProto.spin
         * @static
         * @param {serverProto.Ispin} message spin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        spin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.bet != null && Object.hasOwnProperty.call(message, "bet"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.bet);
            if (message.note != null && Object.hasOwnProperty.call(message, "note"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.note);
            return writer;
        };

        /**
         * Encodes the specified spin message, length delimited. Does not implicitly {@link serverProto.spin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverProto.spin
         * @static
         * @param {serverProto.Ispin} message spin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        spin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a spin message from the specified reader or buffer.
         * @function decode
         * @memberof serverProto.spin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverProto.spin} spin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        spin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverProto.spin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.bet = reader.int64();
                        break;
                    }
                case 2: {
                        message.note = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a spin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverProto.spin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverProto.spin} spin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        spin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a spin message.
         * @function verify
         * @memberof serverProto.spin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        spin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.bet != null && message.hasOwnProperty("bet"))
                if (!$util.isInteger(message.bet) && !(message.bet && $util.isInteger(message.bet.low) && $util.isInteger(message.bet.high)))
                    return "bet: integer|Long expected";
            if (message.note != null && message.hasOwnProperty("note"))
                if (!$util.isString(message.note))
                    return "note: string expected";
            return null;
        };

        /**
         * Creates a spin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverProto.spin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverProto.spin} spin
         */
        spin.fromObject = function fromObject(object) {
            if (object instanceof $root.serverProto.spin)
                return object;
            var message = new $root.serverProto.spin();
            if (object.bet != null)
                if ($util.Long)
                    (message.bet = $util.Long.fromValue(object.bet)).unsigned = false;
                else if (typeof object.bet === "string")
                    message.bet = parseInt(object.bet, 10);
                else if (typeof object.bet === "number")
                    message.bet = object.bet;
                else if (typeof object.bet === "object")
                    message.bet = new $util.LongBits(object.bet.low >>> 0, object.bet.high >>> 0).toNumber();
            if (object.note != null)
                message.note = String(object.note);
            return message;
        };

        /**
         * Creates a plain object from a spin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverProto.spin
         * @static
         * @param {serverProto.spin} message spin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        spin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.bet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.bet = options.longs === String ? "0" : 0;
                object.note = "";
            }
            if (message.bet != null && message.hasOwnProperty("bet"))
                if (typeof message.bet === "number")
                    object.bet = options.longs === String ? String(message.bet) : message.bet;
                else
                    object.bet = options.longs === String ? $util.Long.prototype.toString.call(message.bet) : options.longs === Number ? new $util.LongBits(message.bet.low >>> 0, message.bet.high >>> 0).toNumber() : message.bet;
            if (message.note != null && message.hasOwnProperty("note"))
                object.note = message.note;
            return object;
        };

        /**
         * Converts this spin to JSON.
         * @function toJSON
         * @memberof serverProto.spin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        spin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for spin
         * @function getTypeUrl
         * @memberof serverProto.spin
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        spin.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/serverProto.spin";
        };

        return spin;
    })();

    serverProto.spin_result = (function() {

        /**
         * Properties of a spin_result.
         * @memberof serverProto
         * @interface Ispin_result
         * @property {serverProto.Iround_data|null} [mainGame] spin_result mainGame
         * @property {Array.<serverProto.Iround_data>|null} [freeGame] spin_result freeGame
         * @property {string|null} [errorCode] spin_result errorCode
         * @property {number|Long|null} [balance] spin_result balance
         * @property {string|null} [note] spin_result note
         * @property {string|null} [jp] spin_result jp
         */

        /**
         * Constructs a new spin_result.
         * @memberof serverProto
         * @classdesc Represents a spin_result.
         * @implements Ispin_result
         * @constructor
         * @param {serverProto.Ispin_result=} [properties] Properties to set
         */
        function spin_result(properties) {
            this.freeGame = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * spin_result mainGame.
         * @member {serverProto.Iround_data|null|undefined} mainGame
         * @memberof serverProto.spin_result
         * @instance
         */
        spin_result.prototype.mainGame = null;

        /**
         * spin_result freeGame.
         * @member {Array.<serverProto.Iround_data>} freeGame
         * @memberof serverProto.spin_result
         * @instance
         */
        spin_result.prototype.freeGame = $util.emptyArray;

        /**
         * spin_result errorCode.
         * @member {string} errorCode
         * @memberof serverProto.spin_result
         * @instance
         */
        spin_result.prototype.errorCode = "";

        /**
         * spin_result balance.
         * @member {number|Long} balance
         * @memberof serverProto.spin_result
         * @instance
         */
        spin_result.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * spin_result note.
         * @member {string} note
         * @memberof serverProto.spin_result
         * @instance
         */
        spin_result.prototype.note = "";

        /**
         * spin_result jp.
         * @member {string} jp
         * @memberof serverProto.spin_result
         * @instance
         */
        spin_result.prototype.jp = "";

        /**
         * Creates a new spin_result instance using the specified properties.
         * @function create
         * @memberof serverProto.spin_result
         * @static
         * @param {serverProto.Ispin_result=} [properties] Properties to set
         * @returns {serverProto.spin_result} spin_result instance
         */
        spin_result.create = function create(properties) {
            return new spin_result(properties);
        };

        /**
         * Encodes the specified spin_result message. Does not implicitly {@link serverProto.spin_result.verify|verify} messages.
         * @function encode
         * @memberof serverProto.spin_result
         * @static
         * @param {serverProto.Ispin_result} message spin_result message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        spin_result.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mainGame != null && Object.hasOwnProperty.call(message, "mainGame"))
                $root.serverProto.round_data.encode(message.mainGame, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.freeGame != null && message.freeGame.length)
                for (var i = 0; i < message.freeGame.length; ++i)
                    $root.serverProto.round_data.encode(message.freeGame[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.errorCode);
            if (message.balance != null && Object.hasOwnProperty.call(message, "balance"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.balance);
            if (message.note != null && Object.hasOwnProperty.call(message, "note"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.note);
            if (message.jp != null && Object.hasOwnProperty.call(message, "jp"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.jp);
            return writer;
        };

        /**
         * Encodes the specified spin_result message, length delimited. Does not implicitly {@link serverProto.spin_result.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverProto.spin_result
         * @static
         * @param {serverProto.Ispin_result} message spin_result message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        spin_result.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a spin_result message from the specified reader or buffer.
         * @function decode
         * @memberof serverProto.spin_result
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverProto.spin_result} spin_result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        spin_result.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverProto.spin_result();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.mainGame = $root.serverProto.round_data.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.freeGame && message.freeGame.length))
                            message.freeGame = [];
                        message.freeGame.push($root.serverProto.round_data.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.errorCode = reader.string();
                        break;
                    }
                case 4: {
                        message.balance = reader.int64();
                        break;
                    }
                case 5: {
                        message.note = reader.string();
                        break;
                    }
                case 6: {
                        message.jp = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a spin_result message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverProto.spin_result
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverProto.spin_result} spin_result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        spin_result.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a spin_result message.
         * @function verify
         * @memberof serverProto.spin_result
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        spin_result.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mainGame != null && message.hasOwnProperty("mainGame")) {
                var error = $root.serverProto.round_data.verify(message.mainGame);
                if (error)
                    return "mainGame." + error;
            }
            if (message.freeGame != null && message.hasOwnProperty("freeGame")) {
                if (!Array.isArray(message.freeGame))
                    return "freeGame: array expected";
                for (var i = 0; i < message.freeGame.length; ++i) {
                    var error = $root.serverProto.round_data.verify(message.freeGame[i]);
                    if (error)
                        return "freeGame." + error;
                }
            }
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                if (!$util.isString(message.errorCode))
                    return "errorCode: string expected";
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (!$util.isInteger(message.balance) && !(message.balance && $util.isInteger(message.balance.low) && $util.isInteger(message.balance.high)))
                    return "balance: integer|Long expected";
            if (message.note != null && message.hasOwnProperty("note"))
                if (!$util.isString(message.note))
                    return "note: string expected";
            if (message.jp != null && message.hasOwnProperty("jp"))
                if (!$util.isString(message.jp))
                    return "jp: string expected";
            return null;
        };

        /**
         * Creates a spin_result message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverProto.spin_result
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverProto.spin_result} spin_result
         */
        spin_result.fromObject = function fromObject(object) {
            if (object instanceof $root.serverProto.spin_result)
                return object;
            var message = new $root.serverProto.spin_result();
            if (object.mainGame != null) {
                if (typeof object.mainGame !== "object")
                    throw TypeError(".serverProto.spin_result.mainGame: object expected");
                message.mainGame = $root.serverProto.round_data.fromObject(object.mainGame);
            }
            if (object.freeGame) {
                if (!Array.isArray(object.freeGame))
                    throw TypeError(".serverProto.spin_result.freeGame: array expected");
                message.freeGame = [];
                for (var i = 0; i < object.freeGame.length; ++i) {
                    if (typeof object.freeGame[i] !== "object")
                        throw TypeError(".serverProto.spin_result.freeGame: object expected");
                    message.freeGame[i] = $root.serverProto.round_data.fromObject(object.freeGame[i]);
                }
            }
            if (object.errorCode != null)
                message.errorCode = String(object.errorCode);
            if (object.balance != null)
                if ($util.Long)
                    (message.balance = $util.Long.fromValue(object.balance)).unsigned = false;
                else if (typeof object.balance === "string")
                    message.balance = parseInt(object.balance, 10);
                else if (typeof object.balance === "number")
                    message.balance = object.balance;
                else if (typeof object.balance === "object")
                    message.balance = new $util.LongBits(object.balance.low >>> 0, object.balance.high >>> 0).toNumber();
            if (object.note != null)
                message.note = String(object.note);
            if (object.jp != null)
                message.jp = String(object.jp);
            return message;
        };

        /**
         * Creates a plain object from a spin_result message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverProto.spin_result
         * @static
         * @param {serverProto.spin_result} message spin_result
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        spin_result.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.freeGame = [];
            if (options.defaults) {
                object.mainGame = null;
                object.errorCode = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.balance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.balance = options.longs === String ? "0" : 0;
                object.note = "";
                object.jp = "";
            }
            if (message.mainGame != null && message.hasOwnProperty("mainGame"))
                object.mainGame = $root.serverProto.round_data.toObject(message.mainGame, options);
            if (message.freeGame && message.freeGame.length) {
                object.freeGame = [];
                for (var j = 0; j < message.freeGame.length; ++j)
                    object.freeGame[j] = $root.serverProto.round_data.toObject(message.freeGame[j], options);
            }
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                object.errorCode = message.errorCode;
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (typeof message.balance === "number")
                    object.balance = options.longs === String ? String(message.balance) : message.balance;
                else
                    object.balance = options.longs === String ? $util.Long.prototype.toString.call(message.balance) : options.longs === Number ? new $util.LongBits(message.balance.low >>> 0, message.balance.high >>> 0).toNumber() : message.balance;
            if (message.note != null && message.hasOwnProperty("note"))
                object.note = message.note;
            if (message.jp != null && message.hasOwnProperty("jp"))
                object.jp = message.jp;
            return object;
        };

        /**
         * Converts this spin_result to JSON.
         * @function toJSON
         * @memberof serverProto.spin_result
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        spin_result.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for spin_result
         * @function getTypeUrl
         * @memberof serverProto.spin_result
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        spin_result.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/serverProto.spin_result";
        };

        return spin_result;
    })();

    serverProto.reel_symbol = (function() {

        /**
         * Properties of a reel_symbol.
         * @memberof serverProto
         * @interface Ireel_symbol
         * @property {Array.<string>|null} [symbol] reel_symbol symbol
         */

        /**
         * Constructs a new reel_symbol.
         * @memberof serverProto
         * @classdesc Represents a reel_symbol.
         * @implements Ireel_symbol
         * @constructor
         * @param {serverProto.Ireel_symbol=} [properties] Properties to set
         */
        function reel_symbol(properties) {
            this.symbol = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * reel_symbol symbol.
         * @member {Array.<string>} symbol
         * @memberof serverProto.reel_symbol
         * @instance
         */
        reel_symbol.prototype.symbol = $util.emptyArray;

        /**
         * Creates a new reel_symbol instance using the specified properties.
         * @function create
         * @memberof serverProto.reel_symbol
         * @static
         * @param {serverProto.Ireel_symbol=} [properties] Properties to set
         * @returns {serverProto.reel_symbol} reel_symbol instance
         */
        reel_symbol.create = function create(properties) {
            return new reel_symbol(properties);
        };

        /**
         * Encodes the specified reel_symbol message. Does not implicitly {@link serverProto.reel_symbol.verify|verify} messages.
         * @function encode
         * @memberof serverProto.reel_symbol
         * @static
         * @param {serverProto.Ireel_symbol} message reel_symbol message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        reel_symbol.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.symbol != null && message.symbol.length)
                for (var i = 0; i < message.symbol.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.symbol[i]);
            return writer;
        };

        /**
         * Encodes the specified reel_symbol message, length delimited. Does not implicitly {@link serverProto.reel_symbol.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverProto.reel_symbol
         * @static
         * @param {serverProto.Ireel_symbol} message reel_symbol message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        reel_symbol.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a reel_symbol message from the specified reader or buffer.
         * @function decode
         * @memberof serverProto.reel_symbol
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverProto.reel_symbol} reel_symbol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        reel_symbol.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverProto.reel_symbol();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.symbol && message.symbol.length))
                            message.symbol = [];
                        message.symbol.push(reader.string());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a reel_symbol message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverProto.reel_symbol
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverProto.reel_symbol} reel_symbol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        reel_symbol.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a reel_symbol message.
         * @function verify
         * @memberof serverProto.reel_symbol
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        reel_symbol.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.symbol != null && message.hasOwnProperty("symbol")) {
                if (!Array.isArray(message.symbol))
                    return "symbol: array expected";
                for (var i = 0; i < message.symbol.length; ++i)
                    if (!$util.isString(message.symbol[i]))
                        return "symbol: string[] expected";
            }
            return null;
        };

        /**
         * Creates a reel_symbol message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverProto.reel_symbol
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverProto.reel_symbol} reel_symbol
         */
        reel_symbol.fromObject = function fromObject(object) {
            if (object instanceof $root.serverProto.reel_symbol)
                return object;
            var message = new $root.serverProto.reel_symbol();
            if (object.symbol) {
                if (!Array.isArray(object.symbol))
                    throw TypeError(".serverProto.reel_symbol.symbol: array expected");
                message.symbol = [];
                for (var i = 0; i < object.symbol.length; ++i)
                    message.symbol[i] = String(object.symbol[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a reel_symbol message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverProto.reel_symbol
         * @static
         * @param {serverProto.reel_symbol} message reel_symbol
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        reel_symbol.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.symbol = [];
            if (message.symbol && message.symbol.length) {
                object.symbol = [];
                for (var j = 0; j < message.symbol.length; ++j)
                    object.symbol[j] = message.symbol[j];
            }
            return object;
        };

        /**
         * Converts this reel_symbol to JSON.
         * @function toJSON
         * @memberof serverProto.reel_symbol
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        reel_symbol.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for reel_symbol
         * @function getTypeUrl
         * @memberof serverProto.reel_symbol
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        reel_symbol.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/serverProto.reel_symbol";
        };

        return reel_symbol;
    })();

    serverProto.reel_pos = (function() {

        /**
         * Properties of a reel_pos.
         * @memberof serverProto
         * @interface Ireel_pos
         * @property {Array.<number>|null} [posIndex] reel_pos posIndex
         */

        /**
         * Constructs a new reel_pos.
         * @memberof serverProto
         * @classdesc Represents a reel_pos.
         * @implements Ireel_pos
         * @constructor
         * @param {serverProto.Ireel_pos=} [properties] Properties to set
         */
        function reel_pos(properties) {
            this.posIndex = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * reel_pos posIndex.
         * @member {Array.<number>} posIndex
         * @memberof serverProto.reel_pos
         * @instance
         */
        reel_pos.prototype.posIndex = $util.emptyArray;

        /**
         * Creates a new reel_pos instance using the specified properties.
         * @function create
         * @memberof serverProto.reel_pos
         * @static
         * @param {serverProto.Ireel_pos=} [properties] Properties to set
         * @returns {serverProto.reel_pos} reel_pos instance
         */
        reel_pos.create = function create(properties) {
            return new reel_pos(properties);
        };

        /**
         * Encodes the specified reel_pos message. Does not implicitly {@link serverProto.reel_pos.verify|verify} messages.
         * @function encode
         * @memberof serverProto.reel_pos
         * @static
         * @param {serverProto.Ireel_pos} message reel_pos message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        reel_pos.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.posIndex != null && message.posIndex.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.posIndex.length; ++i)
                    writer.uint32(message.posIndex[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified reel_pos message, length delimited. Does not implicitly {@link serverProto.reel_pos.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverProto.reel_pos
         * @static
         * @param {serverProto.Ireel_pos} message reel_pos message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        reel_pos.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a reel_pos message from the specified reader or buffer.
         * @function decode
         * @memberof serverProto.reel_pos
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverProto.reel_pos} reel_pos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        reel_pos.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverProto.reel_pos();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.posIndex && message.posIndex.length))
                            message.posIndex = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.posIndex.push(reader.uint32());
                        } else
                            message.posIndex.push(reader.uint32());
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a reel_pos message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverProto.reel_pos
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverProto.reel_pos} reel_pos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        reel_pos.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a reel_pos message.
         * @function verify
         * @memberof serverProto.reel_pos
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        reel_pos.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.posIndex != null && message.hasOwnProperty("posIndex")) {
                if (!Array.isArray(message.posIndex))
                    return "posIndex: array expected";
                for (var i = 0; i < message.posIndex.length; ++i)
                    if (!$util.isInteger(message.posIndex[i]))
                        return "posIndex: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a reel_pos message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverProto.reel_pos
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverProto.reel_pos} reel_pos
         */
        reel_pos.fromObject = function fromObject(object) {
            if (object instanceof $root.serverProto.reel_pos)
                return object;
            var message = new $root.serverProto.reel_pos();
            if (object.posIndex) {
                if (!Array.isArray(object.posIndex))
                    throw TypeError(".serverProto.reel_pos.posIndex: array expected");
                message.posIndex = [];
                for (var i = 0; i < object.posIndex.length; ++i)
                    message.posIndex[i] = object.posIndex[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a reel_pos message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverProto.reel_pos
         * @static
         * @param {serverProto.reel_pos} message reel_pos
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        reel_pos.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.posIndex = [];
            if (message.posIndex && message.posIndex.length) {
                object.posIndex = [];
                for (var j = 0; j < message.posIndex.length; ++j)
                    object.posIndex[j] = message.posIndex[j];
            }
            return object;
        };

        /**
         * Converts this reel_pos to JSON.
         * @function toJSON
         * @memberof serverProto.reel_pos
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        reel_pos.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for reel_pos
         * @function getTypeUrl
         * @memberof serverProto.reel_pos
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        reel_pos.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/serverProto.reel_pos";
        };

        return reel_pos;
    })();

    serverProto.win_detail = (function() {

        /**
         * Properties of a win_detail.
         * @memberof serverProto
         * @interface Iwin_detail
         * @property {string|null} [symbol] win_detail symbol
         * @property {number|null} [line] win_detail line
         * @property {number|null} [qty] win_detail qty
         * @property {number|Long|null} [winScore] win_detail winScore
         */

        /**
         * Constructs a new win_detail.
         * @memberof serverProto
         * @classdesc Represents a win_detail.
         * @implements Iwin_detail
         * @constructor
         * @param {serverProto.Iwin_detail=} [properties] Properties to set
         */
        function win_detail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * win_detail symbol.
         * @member {string} symbol
         * @memberof serverProto.win_detail
         * @instance
         */
        win_detail.prototype.symbol = "";

        /**
         * win_detail line.
         * @member {number} line
         * @memberof serverProto.win_detail
         * @instance
         */
        win_detail.prototype.line = 0;

        /**
         * win_detail qty.
         * @member {number} qty
         * @memberof serverProto.win_detail
         * @instance
         */
        win_detail.prototype.qty = 0;

        /**
         * win_detail winScore.
         * @member {number|Long} winScore
         * @memberof serverProto.win_detail
         * @instance
         */
        win_detail.prototype.winScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new win_detail instance using the specified properties.
         * @function create
         * @memberof serverProto.win_detail
         * @static
         * @param {serverProto.Iwin_detail=} [properties] Properties to set
         * @returns {serverProto.win_detail} win_detail instance
         */
        win_detail.create = function create(properties) {
            return new win_detail(properties);
        };

        /**
         * Encodes the specified win_detail message. Does not implicitly {@link serverProto.win_detail.verify|verify} messages.
         * @function encode
         * @memberof serverProto.win_detail
         * @static
         * @param {serverProto.Iwin_detail} message win_detail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        win_detail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.symbol != null && Object.hasOwnProperty.call(message, "symbol"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.symbol);
            if (message.line != null && Object.hasOwnProperty.call(message, "line"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.line);
            if (message.qty != null && Object.hasOwnProperty.call(message, "qty"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.qty);
            if (message.winScore != null && Object.hasOwnProperty.call(message, "winScore"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.winScore);
            return writer;
        };

        /**
         * Encodes the specified win_detail message, length delimited. Does not implicitly {@link serverProto.win_detail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverProto.win_detail
         * @static
         * @param {serverProto.Iwin_detail} message win_detail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        win_detail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a win_detail message from the specified reader or buffer.
         * @function decode
         * @memberof serverProto.win_detail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverProto.win_detail} win_detail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        win_detail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverProto.win_detail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.symbol = reader.string();
                        break;
                    }
                case 2: {
                        message.line = reader.int32();
                        break;
                    }
                case 3: {
                        message.qty = reader.int32();
                        break;
                    }
                case 4: {
                        message.winScore = reader.int64();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a win_detail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverProto.win_detail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverProto.win_detail} win_detail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        win_detail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a win_detail message.
         * @function verify
         * @memberof serverProto.win_detail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        win_detail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                if (!$util.isString(message.symbol))
                    return "symbol: string expected";
            if (message.line != null && message.hasOwnProperty("line"))
                if (!$util.isInteger(message.line))
                    return "line: integer expected";
            if (message.qty != null && message.hasOwnProperty("qty"))
                if (!$util.isInteger(message.qty))
                    return "qty: integer expected";
            if (message.winScore != null && message.hasOwnProperty("winScore"))
                if (!$util.isInteger(message.winScore) && !(message.winScore && $util.isInteger(message.winScore.low) && $util.isInteger(message.winScore.high)))
                    return "winScore: integer|Long expected";
            return null;
        };

        /**
         * Creates a win_detail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverProto.win_detail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverProto.win_detail} win_detail
         */
        win_detail.fromObject = function fromObject(object) {
            if (object instanceof $root.serverProto.win_detail)
                return object;
            var message = new $root.serverProto.win_detail();
            if (object.symbol != null)
                message.symbol = String(object.symbol);
            if (object.line != null)
                message.line = object.line | 0;
            if (object.qty != null)
                message.qty = object.qty | 0;
            if (object.winScore != null)
                if ($util.Long)
                    (message.winScore = $util.Long.fromValue(object.winScore)).unsigned = false;
                else if (typeof object.winScore === "string")
                    message.winScore = parseInt(object.winScore, 10);
                else if (typeof object.winScore === "number")
                    message.winScore = object.winScore;
                else if (typeof object.winScore === "object")
                    message.winScore = new $util.LongBits(object.winScore.low >>> 0, object.winScore.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a win_detail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverProto.win_detail
         * @static
         * @param {serverProto.win_detail} message win_detail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        win_detail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.symbol = "";
                object.line = 0;
                object.qty = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.winScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.winScore = options.longs === String ? "0" : 0;
            }
            if (message.symbol != null && message.hasOwnProperty("symbol"))
                object.symbol = message.symbol;
            if (message.line != null && message.hasOwnProperty("line"))
                object.line = message.line;
            if (message.qty != null && message.hasOwnProperty("qty"))
                object.qty = message.qty;
            if (message.winScore != null && message.hasOwnProperty("winScore"))
                if (typeof message.winScore === "number")
                    object.winScore = options.longs === String ? String(message.winScore) : message.winScore;
                else
                    object.winScore = options.longs === String ? $util.Long.prototype.toString.call(message.winScore) : options.longs === Number ? new $util.LongBits(message.winScore.low >>> 0, message.winScore.high >>> 0).toNumber() : message.winScore;
            return object;
        };

        /**
         * Converts this win_detail to JSON.
         * @function toJSON
         * @memberof serverProto.win_detail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        win_detail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for win_detail
         * @function getTypeUrl
         * @memberof serverProto.win_detail
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        win_detail.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/serverProto.win_detail";
        };

        return win_detail;
    })();

    serverProto.plate_data = (function() {

        /**
         * Properties of a plate_data.
         * @memberof serverProto
         * @interface Iplate_data
         * @property {number|Long|null} [winScore] plate_data winScore
         * @property {Array.<serverProto.Ireel_symbol>|null} [reel] plate_data reel
         * @property {Array.<serverProto.Iwin_detail>|null} [winData] plate_data winData
         * @property {Array.<serverProto.Ireel_pos>|null} [winPos] plate_data winPos
         * @property {string|null} [event] plate_data event
         */

        /**
         * Constructs a new plate_data.
         * @memberof serverProto
         * @classdesc Represents a plate_data.
         * @implements Iplate_data
         * @constructor
         * @param {serverProto.Iplate_data=} [properties] Properties to set
         */
        function plate_data(properties) {
            this.reel = [];
            this.winData = [];
            this.winPos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * plate_data winScore.
         * @member {number|Long} winScore
         * @memberof serverProto.plate_data
         * @instance
         */
        plate_data.prototype.winScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * plate_data reel.
         * @member {Array.<serverProto.Ireel_symbol>} reel
         * @memberof serverProto.plate_data
         * @instance
         */
        plate_data.prototype.reel = $util.emptyArray;

        /**
         * plate_data winData.
         * @member {Array.<serverProto.Iwin_detail>} winData
         * @memberof serverProto.plate_data
         * @instance
         */
        plate_data.prototype.winData = $util.emptyArray;

        /**
         * plate_data winPos.
         * @member {Array.<serverProto.Ireel_pos>} winPos
         * @memberof serverProto.plate_data
         * @instance
         */
        plate_data.prototype.winPos = $util.emptyArray;

        /**
         * plate_data event.
         * @member {string} event
         * @memberof serverProto.plate_data
         * @instance
         */
        plate_data.prototype.event = "";

        /**
         * Creates a new plate_data instance using the specified properties.
         * @function create
         * @memberof serverProto.plate_data
         * @static
         * @param {serverProto.Iplate_data=} [properties] Properties to set
         * @returns {serverProto.plate_data} plate_data instance
         */
        plate_data.create = function create(properties) {
            return new plate_data(properties);
        };

        /**
         * Encodes the specified plate_data message. Does not implicitly {@link serverProto.plate_data.verify|verify} messages.
         * @function encode
         * @memberof serverProto.plate_data
         * @static
         * @param {serverProto.Iplate_data} message plate_data message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        plate_data.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.winScore != null && Object.hasOwnProperty.call(message, "winScore"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.winScore);
            if (message.reel != null && message.reel.length)
                for (var i = 0; i < message.reel.length; ++i)
                    $root.serverProto.reel_symbol.encode(message.reel[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.winData != null && message.winData.length)
                for (var i = 0; i < message.winData.length; ++i)
                    $root.serverProto.win_detail.encode(message.winData[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.winPos != null && message.winPos.length)
                for (var i = 0; i < message.winPos.length; ++i)
                    $root.serverProto.reel_pos.encode(message.winPos[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.event != null && Object.hasOwnProperty.call(message, "event"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.event);
            return writer;
        };

        /**
         * Encodes the specified plate_data message, length delimited. Does not implicitly {@link serverProto.plate_data.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverProto.plate_data
         * @static
         * @param {serverProto.Iplate_data} message plate_data message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        plate_data.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a plate_data message from the specified reader or buffer.
         * @function decode
         * @memberof serverProto.plate_data
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverProto.plate_data} plate_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        plate_data.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverProto.plate_data();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.winScore = reader.int64();
                        break;
                    }
                case 2: {
                        if (!(message.reel && message.reel.length))
                            message.reel = [];
                        message.reel.push($root.serverProto.reel_symbol.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        if (!(message.winData && message.winData.length))
                            message.winData = [];
                        message.winData.push($root.serverProto.win_detail.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        if (!(message.winPos && message.winPos.length))
                            message.winPos = [];
                        message.winPos.push($root.serverProto.reel_pos.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        message.event = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a plate_data message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverProto.plate_data
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverProto.plate_data} plate_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        plate_data.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a plate_data message.
         * @function verify
         * @memberof serverProto.plate_data
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        plate_data.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.winScore != null && message.hasOwnProperty("winScore"))
                if (!$util.isInteger(message.winScore) && !(message.winScore && $util.isInteger(message.winScore.low) && $util.isInteger(message.winScore.high)))
                    return "winScore: integer|Long expected";
            if (message.reel != null && message.hasOwnProperty("reel")) {
                if (!Array.isArray(message.reel))
                    return "reel: array expected";
                for (var i = 0; i < message.reel.length; ++i) {
                    var error = $root.serverProto.reel_symbol.verify(message.reel[i]);
                    if (error)
                        return "reel." + error;
                }
            }
            if (message.winData != null && message.hasOwnProperty("winData")) {
                if (!Array.isArray(message.winData))
                    return "winData: array expected";
                for (var i = 0; i < message.winData.length; ++i) {
                    var error = $root.serverProto.win_detail.verify(message.winData[i]);
                    if (error)
                        return "winData." + error;
                }
            }
            if (message.winPos != null && message.hasOwnProperty("winPos")) {
                if (!Array.isArray(message.winPos))
                    return "winPos: array expected";
                for (var i = 0; i < message.winPos.length; ++i) {
                    var error = $root.serverProto.reel_pos.verify(message.winPos[i]);
                    if (error)
                        return "winPos." + error;
                }
            }
            if (message.event != null && message.hasOwnProperty("event"))
                if (!$util.isString(message.event))
                    return "event: string expected";
            return null;
        };

        /**
         * Creates a plate_data message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverProto.plate_data
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverProto.plate_data} plate_data
         */
        plate_data.fromObject = function fromObject(object) {
            if (object instanceof $root.serverProto.plate_data)
                return object;
            var message = new $root.serverProto.plate_data();
            if (object.winScore != null)
                if ($util.Long)
                    (message.winScore = $util.Long.fromValue(object.winScore)).unsigned = false;
                else if (typeof object.winScore === "string")
                    message.winScore = parseInt(object.winScore, 10);
                else if (typeof object.winScore === "number")
                    message.winScore = object.winScore;
                else if (typeof object.winScore === "object")
                    message.winScore = new $util.LongBits(object.winScore.low >>> 0, object.winScore.high >>> 0).toNumber();
            if (object.reel) {
                if (!Array.isArray(object.reel))
                    throw TypeError(".serverProto.plate_data.reel: array expected");
                message.reel = [];
                for (var i = 0; i < object.reel.length; ++i) {
                    if (typeof object.reel[i] !== "object")
                        throw TypeError(".serverProto.plate_data.reel: object expected");
                    message.reel[i] = $root.serverProto.reel_symbol.fromObject(object.reel[i]);
                }
            }
            if (object.winData) {
                if (!Array.isArray(object.winData))
                    throw TypeError(".serverProto.plate_data.winData: array expected");
                message.winData = [];
                for (var i = 0; i < object.winData.length; ++i) {
                    if (typeof object.winData[i] !== "object")
                        throw TypeError(".serverProto.plate_data.winData: object expected");
                    message.winData[i] = $root.serverProto.win_detail.fromObject(object.winData[i]);
                }
            }
            if (object.winPos) {
                if (!Array.isArray(object.winPos))
                    throw TypeError(".serverProto.plate_data.winPos: array expected");
                message.winPos = [];
                for (var i = 0; i < object.winPos.length; ++i) {
                    if (typeof object.winPos[i] !== "object")
                        throw TypeError(".serverProto.plate_data.winPos: object expected");
                    message.winPos[i] = $root.serverProto.reel_pos.fromObject(object.winPos[i]);
                }
            }
            if (object.event != null)
                message.event = String(object.event);
            return message;
        };

        /**
         * Creates a plain object from a plate_data message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverProto.plate_data
         * @static
         * @param {serverProto.plate_data} message plate_data
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        plate_data.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.reel = [];
                object.winData = [];
                object.winPos = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.winScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.winScore = options.longs === String ? "0" : 0;
                object.event = "";
            }
            if (message.winScore != null && message.hasOwnProperty("winScore"))
                if (typeof message.winScore === "number")
                    object.winScore = options.longs === String ? String(message.winScore) : message.winScore;
                else
                    object.winScore = options.longs === String ? $util.Long.prototype.toString.call(message.winScore) : options.longs === Number ? new $util.LongBits(message.winScore.low >>> 0, message.winScore.high >>> 0).toNumber() : message.winScore;
            if (message.reel && message.reel.length) {
                object.reel = [];
                for (var j = 0; j < message.reel.length; ++j)
                    object.reel[j] = $root.serverProto.reel_symbol.toObject(message.reel[j], options);
            }
            if (message.winData && message.winData.length) {
                object.winData = [];
                for (var j = 0; j < message.winData.length; ++j)
                    object.winData[j] = $root.serverProto.win_detail.toObject(message.winData[j], options);
            }
            if (message.winPos && message.winPos.length) {
                object.winPos = [];
                for (var j = 0; j < message.winPos.length; ++j)
                    object.winPos[j] = $root.serverProto.reel_pos.toObject(message.winPos[j], options);
            }
            if (message.event != null && message.hasOwnProperty("event"))
                object.event = message.event;
            return object;
        };

        /**
         * Converts this plate_data to JSON.
         * @function toJSON
         * @memberof serverProto.plate_data
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        plate_data.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for plate_data
         * @function getTypeUrl
         * @memberof serverProto.plate_data
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        plate_data.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/serverProto.plate_data";
        };

        return plate_data;
    })();

    serverProto.round_data = (function() {

        /**
         * Properties of a round_data.
         * @memberof serverProto
         * @interface Iround_data
         * @property {Array.<serverProto.Iplate_data>|null} [plate] round_data plate
         */

        /**
         * Constructs a new round_data.
         * @memberof serverProto
         * @classdesc Represents a round_data.
         * @implements Iround_data
         * @constructor
         * @param {serverProto.Iround_data=} [properties] Properties to set
         */
        function round_data(properties) {
            this.plate = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * round_data plate.
         * @member {Array.<serverProto.Iplate_data>} plate
         * @memberof serverProto.round_data
         * @instance
         */
        round_data.prototype.plate = $util.emptyArray;

        /**
         * Creates a new round_data instance using the specified properties.
         * @function create
         * @memberof serverProto.round_data
         * @static
         * @param {serverProto.Iround_data=} [properties] Properties to set
         * @returns {serverProto.round_data} round_data instance
         */
        round_data.create = function create(properties) {
            return new round_data(properties);
        };

        /**
         * Encodes the specified round_data message. Does not implicitly {@link serverProto.round_data.verify|verify} messages.
         * @function encode
         * @memberof serverProto.round_data
         * @static
         * @param {serverProto.Iround_data} message round_data message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        round_data.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.plate != null && message.plate.length)
                for (var i = 0; i < message.plate.length; ++i)
                    $root.serverProto.plate_data.encode(message.plate[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified round_data message, length delimited. Does not implicitly {@link serverProto.round_data.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverProto.round_data
         * @static
         * @param {serverProto.Iround_data} message round_data message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        round_data.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a round_data message from the specified reader or buffer.
         * @function decode
         * @memberof serverProto.round_data
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverProto.round_data} round_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        round_data.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverProto.round_data();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.plate && message.plate.length))
                            message.plate = [];
                        message.plate.push($root.serverProto.plate_data.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a round_data message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverProto.round_data
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverProto.round_data} round_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        round_data.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a round_data message.
         * @function verify
         * @memberof serverProto.round_data
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        round_data.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.plate != null && message.hasOwnProperty("plate")) {
                if (!Array.isArray(message.plate))
                    return "plate: array expected";
                for (var i = 0; i < message.plate.length; ++i) {
                    var error = $root.serverProto.plate_data.verify(message.plate[i]);
                    if (error)
                        return "plate." + error;
                }
            }
            return null;
        };

        /**
         * Creates a round_data message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverProto.round_data
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverProto.round_data} round_data
         */
        round_data.fromObject = function fromObject(object) {
            if (object instanceof $root.serverProto.round_data)
                return object;
            var message = new $root.serverProto.round_data();
            if (object.plate) {
                if (!Array.isArray(object.plate))
                    throw TypeError(".serverProto.round_data.plate: array expected");
                message.plate = [];
                for (var i = 0; i < object.plate.length; ++i) {
                    if (typeof object.plate[i] !== "object")
                        throw TypeError(".serverProto.round_data.plate: object expected");
                    message.plate[i] = $root.serverProto.plate_data.fromObject(object.plate[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a round_data message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverProto.round_data
         * @static
         * @param {serverProto.round_data} message round_data
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        round_data.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.plate = [];
            if (message.plate && message.plate.length) {
                object.plate = [];
                for (var j = 0; j < message.plate.length; ++j)
                    object.plate[j] = $root.serverProto.plate_data.toObject(message.plate[j], options);
            }
            return object;
        };

        /**
         * Converts this round_data to JSON.
         * @function toJSON
         * @memberof serverProto.round_data
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        round_data.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for round_data
         * @function getTypeUrl
         * @memberof serverProto.round_data
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        round_data.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/serverProto.round_data";
        };

        return round_data;
    })();

    serverProto.original_request = (function() {

        /**
         * Properties of an original_request.
         * @memberof serverProto
         * @interface Ioriginal_request
         * @property {number|null} [code] original_request code
         * @property {string|null} [note] original_request note
         */

        /**
         * Constructs a new original_request.
         * @memberof serverProto
         * @classdesc Represents an original_request.
         * @implements Ioriginal_request
         * @constructor
         * @param {serverProto.Ioriginal_request=} [properties] Properties to set
         */
        function original_request(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * original_request code.
         * @member {number} code
         * @memberof serverProto.original_request
         * @instance
         */
        original_request.prototype.code = 0;

        /**
         * original_request note.
         * @member {string} note
         * @memberof serverProto.original_request
         * @instance
         */
        original_request.prototype.note = "";

        /**
         * Creates a new original_request instance using the specified properties.
         * @function create
         * @memberof serverProto.original_request
         * @static
         * @param {serverProto.Ioriginal_request=} [properties] Properties to set
         * @returns {serverProto.original_request} original_request instance
         */
        original_request.create = function create(properties) {
            return new original_request(properties);
        };

        /**
         * Encodes the specified original_request message. Does not implicitly {@link serverProto.original_request.verify|verify} messages.
         * @function encode
         * @memberof serverProto.original_request
         * @static
         * @param {serverProto.Ioriginal_request} message original_request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        original_request.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
            if (message.note != null && Object.hasOwnProperty.call(message, "note"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.note);
            return writer;
        };

        /**
         * Encodes the specified original_request message, length delimited. Does not implicitly {@link serverProto.original_request.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverProto.original_request
         * @static
         * @param {serverProto.Ioriginal_request} message original_request message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        original_request.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an original_request message from the specified reader or buffer.
         * @function decode
         * @memberof serverProto.original_request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverProto.original_request} original_request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        original_request.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverProto.original_request();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.uint32();
                        break;
                    }
                case 2: {
                        message.note = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an original_request message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverProto.original_request
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverProto.original_request} original_request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        original_request.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an original_request message.
         * @function verify
         * @memberof serverProto.original_request
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        original_request.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.note != null && message.hasOwnProperty("note"))
                if (!$util.isString(message.note))
                    return "note: string expected";
            return null;
        };

        /**
         * Creates an original_request message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverProto.original_request
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverProto.original_request} original_request
         */
        original_request.fromObject = function fromObject(object) {
            if (object instanceof $root.serverProto.original_request)
                return object;
            var message = new $root.serverProto.original_request();
            if (object.code != null)
                message.code = object.code >>> 0;
            if (object.note != null)
                message.note = String(object.note);
            return message;
        };

        /**
         * Creates a plain object from an original_request message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverProto.original_request
         * @static
         * @param {serverProto.original_request} message original_request
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        original_request.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.note = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.note != null && message.hasOwnProperty("note"))
                object.note = message.note;
            return object;
        };

        /**
         * Converts this original_request to JSON.
         * @function toJSON
         * @memberof serverProto.original_request
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        original_request.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for original_request
         * @function getTypeUrl
         * @memberof serverProto.original_request
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        original_request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/serverProto.original_request";
        };

        /**
         * eRequestCodeEnum enum.
         * @name serverProto.original_request.eRequestCodeEnum
         * @enum {number}
         * @property {number} eCE_GAME_LOGIN=0 eCE_GAME_LOGIN value
         * @property {number} eCE_GAME_BET=10 eCE_GAME_BET value
         * @property {number} eCE_CASHOUT=20 eCE_CASHOUT value
         * @property {number} eCE_HISTORY_INFO=40 eCE_HISTORY_INFO value
         * @property {number} eCE_HISTORY_INFO_DETAIL=41 eCE_HISTORY_INFO_DETAIL value
         * @property {number} eCE_MAX=100 eCE_MAX value
         */
        original_request.eRequestCodeEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "eCE_GAME_LOGIN"] = 0;
            values[valuesById[10] = "eCE_GAME_BET"] = 10;
            values[valuesById[20] = "eCE_CASHOUT"] = 20;
            values[valuesById[40] = "eCE_HISTORY_INFO"] = 40;
            values[valuesById[41] = "eCE_HISTORY_INFO_DETAIL"] = 41;
            values[valuesById[100] = "eCE_MAX"] = 100;
            return values;
        })();

        return original_request;
    })();

    serverProto.original_response = (function() {

        /**
         * Properties of an original_response.
         * @memberof serverProto
         * @interface Ioriginal_response
         * @property {number|null} [code] original_response code
         * @property {string|null} [note] original_response note
         * @property {string|null} [errorCode] original_response errorCode
         */

        /**
         * Constructs a new original_response.
         * @memberof serverProto
         * @classdesc Represents an original_response.
         * @implements Ioriginal_response
         * @constructor
         * @param {serverProto.Ioriginal_response=} [properties] Properties to set
         */
        function original_response(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * original_response code.
         * @member {number} code
         * @memberof serverProto.original_response
         * @instance
         */
        original_response.prototype.code = 0;

        /**
         * original_response note.
         * @member {string} note
         * @memberof serverProto.original_response
         * @instance
         */
        original_response.prototype.note = "";

        /**
         * original_response errorCode.
         * @member {string} errorCode
         * @memberof serverProto.original_response
         * @instance
         */
        original_response.prototype.errorCode = "";

        /**
         * Creates a new original_response instance using the specified properties.
         * @function create
         * @memberof serverProto.original_response
         * @static
         * @param {serverProto.Ioriginal_response=} [properties] Properties to set
         * @returns {serverProto.original_response} original_response instance
         */
        original_response.create = function create(properties) {
            return new original_response(properties);
        };

        /**
         * Encodes the specified original_response message. Does not implicitly {@link serverProto.original_response.verify|verify} messages.
         * @function encode
         * @memberof serverProto.original_response
         * @static
         * @param {serverProto.Ioriginal_response} message original_response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        original_response.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
            if (message.note != null && Object.hasOwnProperty.call(message, "note"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.note);
            if (message.errorCode != null && Object.hasOwnProperty.call(message, "errorCode"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.errorCode);
            return writer;
        };

        /**
         * Encodes the specified original_response message, length delimited. Does not implicitly {@link serverProto.original_response.verify|verify} messages.
         * @function encodeDelimited
         * @memberof serverProto.original_response
         * @static
         * @param {serverProto.Ioriginal_response} message original_response message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        original_response.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an original_response message from the specified reader or buffer.
         * @function decode
         * @memberof serverProto.original_response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {serverProto.original_response} original_response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        original_response.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.serverProto.original_response();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.uint32();
                        break;
                    }
                case 2: {
                        message.note = reader.string();
                        break;
                    }
                case 3: {
                        message.errorCode = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an original_response message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof serverProto.original_response
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {serverProto.original_response} original_response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        original_response.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an original_response message.
         * @function verify
         * @memberof serverProto.original_response
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        original_response.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                if (!$util.isInteger(message.code))
                    return "code: integer expected";
            if (message.note != null && message.hasOwnProperty("note"))
                if (!$util.isString(message.note))
                    return "note: string expected";
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                if (!$util.isString(message.errorCode))
                    return "errorCode: string expected";
            return null;
        };

        /**
         * Creates an original_response message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof serverProto.original_response
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {serverProto.original_response} original_response
         */
        original_response.fromObject = function fromObject(object) {
            if (object instanceof $root.serverProto.original_response)
                return object;
            var message = new $root.serverProto.original_response();
            if (object.code != null)
                message.code = object.code >>> 0;
            if (object.note != null)
                message.note = String(object.note);
            if (object.errorCode != null)
                message.errorCode = String(object.errorCode);
            return message;
        };

        /**
         * Creates a plain object from an original_response message. Also converts values to other types if specified.
         * @function toObject
         * @memberof serverProto.original_response
         * @static
         * @param {serverProto.original_response} message original_response
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        original_response.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.note = "";
                object.errorCode = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.note != null && message.hasOwnProperty("note"))
                object.note = message.note;
            if (message.errorCode != null && message.hasOwnProperty("errorCode"))
                object.errorCode = message.errorCode;
            return object;
        };

        /**
         * Converts this original_response to JSON.
         * @function toJSON
         * @memberof serverProto.original_response
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        original_response.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for original_response
         * @function getTypeUrl
         * @memberof serverProto.original_response
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        original_response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/serverProto.original_response";
        };

        /**
         * eResponseCodeEnum enum.
         * @name serverProto.original_response.eResponseCodeEnum
         * @enum {number}
         * @property {number} eCE_GAME_LOGIN=0 eCE_GAME_LOGIN value
         * @property {number} eCE_GAME_BET=10 eCE_GAME_BET value
         * @property {number} eCE_CASHOUT=20 eCE_CASHOUT value
         * @property {number} eCE_STAGE_UPDATE=30 eCE_STAGE_UPDATE value
         * @property {number} eCE_HISTORY_INFO=40 eCE_HISTORY_INFO value
         * @property {number} eCE_HISTORY_INFO_DETAIL=41 eCE_HISTORY_INFO_DETAIL value
         * @property {number} eCE_MAX=200 eCE_MAX value
         */
        original_response.eResponseCodeEnum = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "eCE_GAME_LOGIN"] = 0;
            values[valuesById[10] = "eCE_GAME_BET"] = 10;
            values[valuesById[20] = "eCE_CASHOUT"] = 20;
            values[valuesById[30] = "eCE_STAGE_UPDATE"] = 30;
            values[valuesById[40] = "eCE_HISTORY_INFO"] = 40;
            values[valuesById[41] = "eCE_HISTORY_INFO_DETAIL"] = 41;
            values[valuesById[200] = "eCE_MAX"] = 200;
            return values;
        })();

        return original_response;
    })();

    return serverProto;
})();

module.exports = $root;