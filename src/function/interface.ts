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