export type CodeHandleVoidFunc = (code: string) => void;
export type CodeHandleFunc = (code: string) => string;
export type CodeFormatFunc = (code: string, tabSize?: number) => string;

export declare interface CodeClass {
    format: CodeFormatFunc,
    zip: CodeHandleFunc,
    run?: CodeHandleFunc,
    check?: CodeHandleVoidFunc
}

export declare interface LockClass {
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

export interface lrcType {
    time: string,
    lyric: string
}