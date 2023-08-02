export type CodeHandleFunc = (code: string) => string;
export type CodeHandleVoidFunc = (code: string) => void;
export type CodeHandleTypeFunc<T> = (code: string, type: T, key: string) => string;
export type CodeFormatFunc = (code: string, tabSize?: number) => string;
export type LockHashType = 'MD5' | 'SHA1' | 'SHA224' | 'SHA256' | 'SHA384' | 'SHA512' | 'SHA3' | 'RIPEMD160';
export type LockLockType = 'AES' | 'DES' | 'Rabbit' | 'RC4' | 'RC4Drop' | 'TripleDES';

export interface CodeClass {
    format: CodeFormatFunc,
    zip: CodeHandleFunc,
    run?: CodeHandleFunc,
    check?: CodeHandleVoidFunc
}

export interface LockClass {
    encode: CodeHandleFunc,
    decode: CodeHandleFunc
}

export interface obj {
    [keyname: string]: any
}

export interface statType {
    total: number,
    day: number
}

export interface resType extends obj {
    code: number,
    message?: string,
    data?: string | number | boolean | null | any[] | obj,
    // data?: any,
}

export interface docType {
    // id: number,
    type: string,
    name: string,
    descr?: string,
    component: string,
    http?: string,
    auto?: boolean,
    page?: boolean,
    origin?: {
        from: string,
        doc: string,
        stat: string
    }
}

export interface navType extends navContentType {
    content?: navContentType
}

export interface navContentType {
    path: string,
    icon?: string,
    name: string,
    color?: string
}

export interface biliComponentData {
    tag: string[]
    color: string[]
}

export interface neteaseData {
    type: 'netease',
    title: string,
    author: string,
    songid: number,
    link: string,
    pic: string,
    url: string,
    lrc: string
}

export interface tiebaData {
    title: string,
    content: string,
    group: string,
    time: string,
    url: string
}

export interface mcskinData {
    skin: string,
    cape: string | null,
    avatar: string | null
}

export interface lrcType {
    time: string,
    lyric: string
}

export interface toolUaType {
    ua: string,
    browser: {
        name: string,
        version: string,
        major: string
    },
    engine: {
        name: string,
        version: string
    },
    os: {
        name: string,
        version: string
    }
}

export interface toolColorType {
    r: number,
    g: number,
    b: number
}

export interface seimgData {
    pid: number,
    uid: number,
    title: string,
    author: string,
    r18: boolean,
    tags: string[],
    width: number,
    hieght: number,
    type: 'jpg' | 'jpeg' | 'png' | 'gif',
    url: string
}

export interface WebpageParams {
    key: string,
    value: string,
    must: boolean,
    type: string | 'string' | 'number' | 'boolean',
    note: string
}

export interface WebpageData {
    name: string,
    descr: string,
    author: string,
    url: string,
    api: string,
    params: WebpageParams[]
}