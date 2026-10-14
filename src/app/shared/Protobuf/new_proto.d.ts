//import * as $protobuf from "protobufjs";
import * as $protobuf from "new_protobufjs";
import Long = require("long");
/** Namespace serverProto. */
export namespace serverProto {

    /** eMessageEnum enum. */
    enum eMessageEnum {
        eME_S2C_INFO = 0,
        eME_C2S_LOGIN_REQUEST = 1,
        eME_S2C_LOGIN_RESULT = 2,
        eME_C2S_SPIN_REQUEST = 3,
        eME_S2C_SPIN_RESULT = 4,
        eME_C2S_OG_REQUEST = 5,
        eME_S2C_OG_RESPONSE = 6,
        eME_MAX = 7
    }

    /** Properties of an info. */
    interface Iinfo {

        /** info code */
        code?: (number|null);

        /** info msg */
        msg?: (string|null);
    }

    /** Represents an info. */
    class info implements Iinfo {

        /**
         * Constructs a new info.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverProto.Iinfo);

        /** info code. */
        public code: number;

        /** info msg. */
        public msg: string;

        /**
         * Creates a new info instance using the specified properties.
         * @param [properties] Properties to set
         * @returns info instance
         */
        public static create(properties?: serverProto.Iinfo): serverProto.info;

        /**
         * Encodes the specified info message. Does not implicitly {@link serverProto.info.verify|verify} messages.
         * @param message info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverProto.Iinfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified info message, length delimited. Does not implicitly {@link serverProto.info.verify|verify} messages.
         * @param message info message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverProto.Iinfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an info message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverProto.info;

        /**
         * Decodes an info message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns info
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverProto.info;

        /**
         * Verifies an info message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an info message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns info
         */
        public static fromObject(object: { [k: string]: any }): serverProto.info;

        /**
         * Creates a plain object from an info message. Also converts values to other types if specified.
         * @param message info
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverProto.info, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this info to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for info
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace info {

        /** eCodeEnum enum. */
        enum eCodeEnum {
            eCE_JP = 0,
            eCE_ERROR = 1,
            eCE_HISTORY_INFO = 2,
            eCE_UPDATE_BALANCE = 3,
            eCE_GAME_INFO = 4,
            eCE_JP_WIN_DATA = 7,
            eCE_MSG = 9,
            eCE_CASH_DROP_INFO = 10,
            eCE_RS = 11,
            eCE_RS_NOTIFY_CENTER = 12,
            eCE_CLIENT_LOG = 13,
            eCE_CHANGE_SEED = 14,
            eCE_SEED_HISTORY = 15,
            eCE_MAX = 16,
            TOURNAMENT_INFO = 17
        }
    }

    /** Properties of a login. */
    interface Ilogin {

        /** login auth */
        auth?: (string|null);

        /** login gameId */
        gameId?: (string|null);
    }

    /** Represents a login. */
    class login implements Ilogin {

        /**
         * Constructs a new login.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverProto.Ilogin);

        /** login auth. */
        public auth: string;

        /** login gameId. */
        public gameId: string;

        /**
         * Creates a new login instance using the specified properties.
         * @param [properties] Properties to set
         * @returns login instance
         */
        public static create(properties?: serverProto.Ilogin): serverProto.login;

        /**
         * Encodes the specified login message. Does not implicitly {@link serverProto.login.verify|verify} messages.
         * @param message login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverProto.Ilogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified login message, length delimited. Does not implicitly {@link serverProto.login.verify|verify} messages.
         * @param message login message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverProto.Ilogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a login message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverProto.login;

        /**
         * Decodes a login message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns login
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverProto.login;

        /**
         * Verifies a login message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a login message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns login
         */
        public static fromObject(object: { [k: string]: any }): serverProto.login;

        /**
         * Creates a plain object from a login message. Also converts values to other types if specified.
         * @param message login
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverProto.login, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this login to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for login
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a login_result. */
    interface Ilogin_result {

        /** login_result errorCode */
        errorCode?: (string|null);

        /** login_result errorCode */
        error_code?: (string|null);

        /** login_result version */
        version?: (string|null);

        /** login_result currency */
        currency?: (string|null);

        /** login_result money */
        money?: (number|Long|null);

        /** login_result note */
        note?: (string|null);

        /** login_result betList */
        betList?: ((number|Long)[]|null);
    }

    /** Represents a login_result. */
    class login_result implements Ilogin_result {

        /**
         * Constructs a new login_result.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverProto.Ilogin_result);

        /** login_result errorCode. */
        public errorCode: string;

        /** login_result errorCode. */
        public error_code: string;

        /** login_result version. */
        public version: string;

        /** login_result currency. */
        public currency: string;

        /** login_result money. */
        public money: (number|Long);

        /** login_result note. */
        public note: string;

        /** login_result betList. */
        public betList: (number|Long)[];

        /**
         * Creates a new login_result instance using the specified properties.
         * @param [properties] Properties to set
         * @returns login_result instance
         */
        public static create(properties?: serverProto.Ilogin_result): serverProto.login_result;

        /**
         * Encodes the specified login_result message. Does not implicitly {@link serverProto.login_result.verify|verify} messages.
         * @param message login_result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverProto.Ilogin_result, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified login_result message, length delimited. Does not implicitly {@link serverProto.login_result.verify|verify} messages.
         * @param message login_result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverProto.Ilogin_result, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a login_result message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns login_result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverProto.login_result;

        /**
         * Decodes a login_result message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns login_result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverProto.login_result;

        /**
         * Verifies a login_result message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a login_result message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns login_result
         */
        public static fromObject(object: { [k: string]: any }): serverProto.login_result;

        /**
         * Creates a plain object from a login_result message. Also converts values to other types if specified.
         * @param message login_result
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverProto.login_result, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this login_result to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for login_result
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a spin. */
    interface Ispin {

        /** spin bet */
        bet?: (number|Long|null);

        /** spin note */
        note?: (string|null);
    }

    /** Represents a spin. */
    class spin implements Ispin {

        /**
         * Constructs a new spin.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverProto.Ispin);

        /** spin bet. */
        public bet: (number|Long);

        /** spin note. */
        public note: string;

        /**
         * Creates a new spin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns spin instance
         */
        public static create(properties?: serverProto.Ispin): serverProto.spin;

        /**
         * Encodes the specified spin message. Does not implicitly {@link serverProto.spin.verify|verify} messages.
         * @param message spin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverProto.Ispin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified spin message, length delimited. Does not implicitly {@link serverProto.spin.verify|verify} messages.
         * @param message spin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverProto.Ispin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a spin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns spin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverProto.spin;

        /**
         * Decodes a spin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns spin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverProto.spin;

        /**
         * Verifies a spin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a spin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns spin
         */
        public static fromObject(object: { [k: string]: any }): serverProto.spin;

        /**
         * Creates a plain object from a spin message. Also converts values to other types if specified.
         * @param message spin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverProto.spin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this spin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for spin
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a spin_result. */
    interface Ispin_result {

        /** spin_result mainGame */
        mainGame?: (serverProto.Iround_data|null);

        /** spin_result freeGame */
        freeGame?: (serverProto.Iround_data[]|null);

        /** spin_result mainGame */
        main_game?: (serverProto.Iround_data|null);

        /** spin_result freeGame */
        free_game?: (serverProto.Iround_data[]|null);


        /** spin_result errorCode */
        errorCode?: (string|null);

        /** spin_result errorCode */
        error_code?: (string|null);

        /** spin_result balance */
        balance?: (number|Long|null);

        /** spin_result note */
        note?: (string|null);

        /** spin_result jp */
        jp?: (string|null);
    }

    /** Represents a spin_result. */
    class spin_result implements Ispin_result {

        /**
         * Constructs a new spin_result.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverProto.Ispin_result);

        /** spin_result mainGame. */
        public mainGame?: (serverProto.Iround_data|null);

        /** spin_result mainGame. */
        public main_game?: (serverProto.Iround_data|null);

        /** spin_result freeGame. */
        public freeGame?: serverProto.Iround_data[];

        /** spin_result freeGame. */
        public free_game?: serverProto.Iround_data[];

        /** spin_result errorCode. */
        public errorCode: string;

        /** spin_result balance. */
        public balance: (number|Long);

        /** spin_result note. */
        public note: string;

        /** spin_result jp. */
        public jp: string;

        /**
         * Creates a new spin_result instance using the specified properties.
         * @param [properties] Properties to set
         * @returns spin_result instance
         */
        public static create(properties?: serverProto.Ispin_result): serverProto.spin_result;

        /**
         * Encodes the specified spin_result message. Does not implicitly {@link serverProto.spin_result.verify|verify} messages.
         * @param message spin_result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverProto.Ispin_result, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified spin_result message, length delimited. Does not implicitly {@link serverProto.spin_result.verify|verify} messages.
         * @param message spin_result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverProto.Ispin_result, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a spin_result message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns spin_result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverProto.spin_result;

        /**
         * Decodes a spin_result message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns spin_result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverProto.spin_result;

        /**
         * Verifies a spin_result message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a spin_result message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns spin_result
         */
        public static fromObject(object: { [k: string]: any }): serverProto.spin_result;

        /**
         * Creates a plain object from a spin_result message. Also converts values to other types if specified.
         * @param message spin_result
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverProto.spin_result, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this spin_result to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for spin_result
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a reel_symbol. */
    interface Ireel_symbol {

        /** reel_symbol symbol */
        symbol?: (string[]|null);
    }

    /** Represents a reel_symbol. */
    class reel_symbol implements Ireel_symbol {

        /**
         * Constructs a new reel_symbol.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverProto.Ireel_symbol);

        /** reel_symbol symbol. */
        public symbol: string[];

        /**
         * Creates a new reel_symbol instance using the specified properties.
         * @param [properties] Properties to set
         * @returns reel_symbol instance
         */
        public static create(properties?: serverProto.Ireel_symbol): serverProto.reel_symbol;

        /**
         * Encodes the specified reel_symbol message. Does not implicitly {@link serverProto.reel_symbol.verify|verify} messages.
         * @param message reel_symbol message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverProto.Ireel_symbol, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified reel_symbol message, length delimited. Does not implicitly {@link serverProto.reel_symbol.verify|verify} messages.
         * @param message reel_symbol message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverProto.Ireel_symbol, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a reel_symbol message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns reel_symbol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverProto.reel_symbol;

        /**
         * Decodes a reel_symbol message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns reel_symbol
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverProto.reel_symbol;

        /**
         * Verifies a reel_symbol message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a reel_symbol message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns reel_symbol
         */
        public static fromObject(object: { [k: string]: any }): serverProto.reel_symbol;

        /**
         * Creates a plain object from a reel_symbol message. Also converts values to other types if specified.
         * @param message reel_symbol
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverProto.reel_symbol, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this reel_symbol to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for reel_symbol
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a reel_pos. */
    interface Ireel_pos {

        /** reel_pos posIndex */
        posIndex?: (number[]|null);

        /** reel_pos posIndex */
        pos_index?: (number[]|null);
    }

    /** Represents a reel_pos. */
    class reel_pos implements Ireel_pos {

        /**
         * Constructs a new reel_pos.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverProto.Ireel_pos);

        /** reel_pos posIndex. */
        public posIndex: number[];

        /** reel_pos posIndex. */
        public pos_index: number[];

        /**
         * Creates a new reel_pos instance using the specified properties.
         * @param [properties] Properties to set
         * @returns reel_pos instance
         */
        public static create(properties?: serverProto.Ireel_pos): serverProto.reel_pos;

        /**
         * Encodes the specified reel_pos message. Does not implicitly {@link serverProto.reel_pos.verify|verify} messages.
         * @param message reel_pos message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverProto.Ireel_pos, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified reel_pos message, length delimited. Does not implicitly {@link serverProto.reel_pos.verify|verify} messages.
         * @param message reel_pos message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverProto.Ireel_pos, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a reel_pos message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns reel_pos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverProto.reel_pos;

        /**
         * Decodes a reel_pos message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns reel_pos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverProto.reel_pos;

        /**
         * Verifies a reel_pos message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a reel_pos message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns reel_pos
         */
        public static fromObject(object: { [k: string]: any }): serverProto.reel_pos;

        /**
         * Creates a plain object from a reel_pos message. Also converts values to other types if specified.
         * @param message reel_pos
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverProto.reel_pos, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this reel_pos to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for reel_pos
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a win_detail. */
    interface Iwin_detail {

        /** win_detail symbol */
        symbol?: (string|null);

        /** win_detail line */
        line?: (number|null);

        /** win_detail qty */
        qty?: (number|null);

        /** win_detail winScore */
        winScore?: (number|Long|null);

        /** win_detail winScore */
        win_score?: (number|Long|null);
    }

    /** Represents a win_detail. */
    class win_detail implements Iwin_detail {

        /**
         * Constructs a new win_detail.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverProto.Iwin_detail);

        /** win_detail symbol. */
        public symbol: string;

        /** win_detail line. */
        public line: number;

        /** win_detail qty. */
        public qty: number;

        /** win_detail winScore. */
        public winScore?: (number|Long);

        /** win_detail winScore. */
        public win_score?: (number|Long);

        /**
         * Creates a new win_detail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns win_detail instance
         */
        public static create(properties?: serverProto.Iwin_detail): serverProto.win_detail;

        /**
         * Encodes the specified win_detail message. Does not implicitly {@link serverProto.win_detail.verify|verify} messages.
         * @param message win_detail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverProto.Iwin_detail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified win_detail message, length delimited. Does not implicitly {@link serverProto.win_detail.verify|verify} messages.
         * @param message win_detail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverProto.Iwin_detail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a win_detail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns win_detail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverProto.win_detail;

        /**
         * Decodes a win_detail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns win_detail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverProto.win_detail;

        /**
         * Verifies a win_detail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a win_detail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns win_detail
         */
        public static fromObject(object: { [k: string]: any }): serverProto.win_detail;

        /**
         * Creates a plain object from a win_detail message. Also converts values to other types if specified.
         * @param message win_detail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverProto.win_detail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this win_detail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for win_detail
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a plate_data. */
    interface Iplate_data {

        /** plate_data winScore */
        winScore?: (number|Long|null);

        /** plate_data winScore */
        win_score?: (number|Long|null);

        /** plate_data reel */
        reel?: (serverProto.Ireel_symbol[]|null);

        /** plate_data winData */
        winData?: (serverProto.Iwin_detail[]|null);

        /** plate_data winData */
        win_data?: (serverProto.Iwin_detail[]|null);

        /** plate_data winPos */
        winPos?: (serverProto.Ireel_pos[]|null);

        /** plate_data winPos */
        win_pos?: (serverProto.Ireel_pos[]|null);

        /** plate_data event */
        event?: (string|null);
    }

    /** Represents a plate_data. */
    class plate_data implements Iplate_data {

        /**
         * Constructs a new plate_data.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverProto.Iplate_data);

        /** plate_data winScore. */
        public winScore: (number|Long);

        /** plate_data winScore. */
        public win_score: (number|Long);

        /** plate_data reel. */
        public reel: serverProto.Ireel_symbol[];

        /** plate_data winData. */
        public winData: serverProto.Iwin_detail[];

        /** plate_data winData. */
        public win_data: serverProto.Iwin_detail[];

        /** plate_data winPos. */
        public winPos: serverProto.Ireel_pos[];

        /** plate_data winPos. */
        public win_pos: serverProto.Ireel_pos[];

        /** plate_data event. */
        public event: string;

        /**
         * Creates a new plate_data instance using the specified properties.
         * @param [properties] Properties to set
         * @returns plate_data instance
         */
        public static create(properties?: serverProto.Iplate_data): serverProto.plate_data;

        /**
         * Encodes the specified plate_data message. Does not implicitly {@link serverProto.plate_data.verify|verify} messages.
         * @param message plate_data message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverProto.Iplate_data, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified plate_data message, length delimited. Does not implicitly {@link serverProto.plate_data.verify|verify} messages.
         * @param message plate_data message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverProto.Iplate_data, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a plate_data message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns plate_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverProto.plate_data;

        /**
         * Decodes a plate_data message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns plate_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverProto.plate_data;

        /**
         * Verifies a plate_data message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a plate_data message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns plate_data
         */
        public static fromObject(object: { [k: string]: any }): serverProto.plate_data;

        /**
         * Creates a plain object from a plate_data message. Also converts values to other types if specified.
         * @param message plate_data
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverProto.plate_data, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this plate_data to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for plate_data
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a round_data. */
    interface Iround_data {

        /** round_data plate */
        plate?: (serverProto.Iplate_data[]|null);
    }

    /** Represents a round_data. */
    class round_data implements Iround_data {

        /**
         * Constructs a new round_data.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverProto.Iround_data);

        /** round_data plate. */
        public plate: serverProto.Iplate_data[];

        /**
         * Creates a new round_data instance using the specified properties.
         * @param [properties] Properties to set
         * @returns round_data instance
         */
        public static create(properties?: serverProto.Iround_data): serverProto.round_data;

        /**
         * Encodes the specified round_data message. Does not implicitly {@link serverProto.round_data.verify|verify} messages.
         * @param message round_data message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverProto.Iround_data, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified round_data message, length delimited. Does not implicitly {@link serverProto.round_data.verify|verify} messages.
         * @param message round_data message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverProto.Iround_data, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a round_data message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns round_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverProto.round_data;

        /**
         * Decodes a round_data message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns round_data
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverProto.round_data;

        /**
         * Verifies a round_data message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a round_data message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns round_data
         */
        public static fromObject(object: { [k: string]: any }): serverProto.round_data;

        /**
         * Creates a plain object from a round_data message. Also converts values to other types if specified.
         * @param message round_data
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverProto.round_data, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this round_data to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for round_data
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of an original_request. */
    interface Ioriginal_request {

        /** original_request code */
        code?: (number|null);

        /** original_request note */
        note?: (string|null);
    }

    /** Represents an original_request. */
    class original_request implements Ioriginal_request {

        /**
         * Constructs a new original_request.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverProto.Ioriginal_request);

        /** original_request code. */
        public code: number;

        /** original_request note. */
        public note: string;

        /**
         * Creates a new original_request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns original_request instance
         */
        public static create(properties?: serverProto.Ioriginal_request): serverProto.original_request;

        /**
         * Encodes the specified original_request message. Does not implicitly {@link serverProto.original_request.verify|verify} messages.
         * @param message original_request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverProto.Ioriginal_request, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified original_request message, length delimited. Does not implicitly {@link serverProto.original_request.verify|verify} messages.
         * @param message original_request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverProto.Ioriginal_request, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an original_request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns original_request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverProto.original_request;

        /**
         * Decodes an original_request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns original_request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverProto.original_request;

        /**
         * Verifies an original_request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an original_request message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns original_request
         */
        public static fromObject(object: { [k: string]: any }): serverProto.original_request;

        /**
         * Creates a plain object from an original_request message. Also converts values to other types if specified.
         * @param message original_request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverProto.original_request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this original_request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for original_request
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace original_request {

        /** eRequestCodeEnum enum. */
        enum eRequestCodeEnum {
            eCE_GAME_LOGIN = 0,
            eCE_GAME_BET = 10,
            eCE_CASHOUT = 20,
            eCE_HISTORY_INFO = 40,
            eCE_HISTORY_INFO_DETAIL = 41,
            eCE_MAX = 100
        }
    }

    /** Properties of an original_response. */
    interface Ioriginal_response {

        /** original_response code */
        code?: (number|null);

        /** original_response note */
        note?: (string|null);

        /** original_response errorCode */
        errorCode?: (string|null);

        /** original_response errorCode */
        error_code?: (string|null);
    }

    /** Represents an original_response. */
    class original_response implements Ioriginal_response {

        /**
         * Constructs a new original_response.
         * @param [properties] Properties to set
         */
        constructor(properties?: serverProto.Ioriginal_response);

        /** original_response code. */
        public code: number;

        /** original_response note. */
        public note: string;

        /** original_response errorCode. */
        public errorCode?: string;

        /** original_response errorCode. */
        public error_code?: string;

        /**
         * Creates a new original_response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns original_response instance
         */
        public static create(properties?: serverProto.Ioriginal_response): serverProto.original_response;

        /**
         * Encodes the specified original_response message. Does not implicitly {@link serverProto.original_response.verify|verify} messages.
         * @param message original_response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: serverProto.Ioriginal_response, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified original_response message, length delimited. Does not implicitly {@link serverProto.original_response.verify|verify} messages.
         * @param message original_response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: serverProto.Ioriginal_response, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an original_response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns original_response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): serverProto.original_response;

        /**
         * Decodes an original_response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns original_response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): serverProto.original_response;

        /**
         * Verifies an original_response message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an original_response message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns original_response
         */
        public static fromObject(object: { [k: string]: any }): serverProto.original_response;

        /**
         * Creates a plain object from an original_response message. Also converts values to other types if specified.
         * @param message original_response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: serverProto.original_response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this original_response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for original_response
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace original_response {

        /** eResponseCodeEnum enum. */
        enum eResponseCodeEnum {
            eCE_GAME_LOGIN = 0,
            eCE_GAME_BET = 10,
            eCE_CASHOUT = 20,
            eCE_STAGE_UPDATE = 30,
            eCE_HISTORY_INFO = 40,
            eCE_HISTORY_INFO_DETAIL = 41,
            eCE_MAX = 200
        }
    }
}
