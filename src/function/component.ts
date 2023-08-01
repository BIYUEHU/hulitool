/*
 * @Author: Biyuehu biyuehuya@gmail.com
 * @Blog: http://imlolicon.tk
 * @Date: 2023-07-09 21:17:32
 */
// import htmlminifier from 'html-minifier';
// import CleanCSS from "clean-css";
import BeautifyJs from "js-beautify";
// import * as terser from 'terser'
import * as Base64 from 'js-base64';
import CryptoJS from 'crypto-js';
import UAParser from "ua-parser-js";
import mdui from 'mdui';
import { tips } from "./method";
import { obj, docType, lrcType, CodeHandleFunc, CodeHandleVoidFunc, CodeFormatFunc, CodeHandleTypeFunc, LockHashType, LockLockType } from './interface';

export class App {
    public static setThemeLayout = (bodyClass: DOMTokenList, themeLayout: 'light' | 'dark' | 'time' | 'auto' /* | string */): void => {
        bodyClass.remove('mdui-theme-layout-auto');
        // bodyClass.remove('mdui-theme-layout-light');
        bodyClass.remove('mdui-theme-layout-dark');
        switch (themeLayout) {
            case 'auto':
                bodyClass.add('mdui-theme-layout-auto');
                break;
            case 'dark':
                bodyClass.add('mdui-theme-layout-dark')
                break;
            case 'time':
                const hours: number = new Date().getHours();
                if (hours >= 7 && hours <= 19) {
                    bodyClass.add('mdui-theme-layout-light');
                } else {
                    bodyClass.add('mdui-theme-layout-dark');
                }
                break;
            default:
                // document.body.style.backgroundColor = themeLayout;
                // bodyClass.add(`mdui-color-${themeLayout}`);
                bodyClass.add('mdui-theme-layout-light');
                break;
        }
    }

    public static getDoc = (DocData: docType[], doctype: string): docType | undefined => {
        return DocData.find(
            dataDoc => dataDoc.type === doctype
        )
    };
}

export class DocPage {
    public static loadCom = (component: string): Promise<obj> => {
        const arrTemp = component.split('/');
        const path = arrTemp[0]
        component = arrTemp[1] ?? path;
        switch (path) {
            case 'Tool':
                return import(`@/components/doc/Tool/${component}.vue`);
            case 'Code':
                return import(`@/components/doc/Code/${component}.vue`);
            case 'Img':
                return import(`@/components/doc/Img/${component}.vue`);
            case 'Lock':
                return import(`@/components/doc/Lock/${component}.vue`);
            default:
                return import(`@/components/doc/${component}.vue`);
        }
    }
}

export class DependPage {
    public static loadCom = (component: string): Promise<obj> => {
        return import(`@/views/page/${component}.vue`);
    }
}

export class ChatCom {
    public static handler = function* (string: string): Generator {
        const array = string.split('');
        for (let element of array) {
            yield element;
        }
    }
}

export class NeteaseCom {
    public static parseLrc = (content: string): lrcType[] => {
        let result;
        const regex = /\[(\d{2}):(\d{2})\.(\d{2,3})\](.*)/g;
        const lyricList: lrcType[] = []
        while ((result = regex.exec(content)) !== null) {
            const time = result[1] + ':' + result[2] + '.' + result[3];
            const lyric = result[4];
            lyricList.push({ time, lyric })
        }
        return lyricList
    }
}

export class CodeHtmlCom {
    public static format: CodeFormatFunc = (code, tabSize = 4) => BeautifyJs.html(code, {
        indent_size: tabSize
    })
    public static zip: CodeHandleFunc = code => {
        code = code.replace(/<!--([\s\S]*?)-->|<!--/g, '');
        // code = code.replace(/<(!)?[^>]*>/g, '');
        /*         code = code.replace(/<([a-z][a-z0-9]*)\s*.*?\/>/gi, (...args) => {
                    return `<${args[1]}/>`;    
                }); */
        code = CodeJsCom.zip(code);
        code = code.replace(', ', ',');
        code = code.replace('> <', '><');
        code = code.replace('" ', '"');
        code = code.replace(', ', ',');
        code = code.replace('> <', '><');
        code = code.replace('" ', '"');
        return code;
    };
}

export class CodeCssCom {
    public static format: CodeFormatFunc = (code, tabSize = 4) => BeautifyJs.css(code, {
        indent_size: tabSize
    })

    public static zip: CodeHandleFunc = code => CodeJsCom.zip(code);

}

export class CodeJsCom {
    public static run: CodeHandleFunc = code => {
        const ifrw = <Window>(<HTMLIFrameElement>document.querySelector("iframe")).contentWindow;
        ifrw.document.open();

        code = `<script>for(let key in console){console[key]=(...params)=>document.write(params + '<br>');};try{${code}}catch(error){console.log(error)}<\/script>`;
        ifrw.document.write(code);
        ifrw.document.close();
        let result: string = ifrw.document.body.innerHTML;
        if (result.toLowerCase().includes('error')) {
            result = `<span style="color:red">${result}</span>`;
        }
        return result;
    }

    public static format: CodeFormatFunc = (code, tabSize = 4) => code = BeautifyJs(code, {
        indent_size: tabSize,
        space_in_empty_paren: true
    })

    public static zip: CodeHandleFunc = code => {
        if (code.length === 0) return '';
        code = code.replace(/( * )/g, ' ');;
        code = code.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
        code = code.replace(/;+/g, ';');
        code = code.replace(/\n/g, '');
        return code;
    }
}

export class CodeJsonCom {
    public static check: CodeHandleVoidFunc = code => {
        try {
            JSON.parse(code);
            tips('Success: A correct JSON', 'lightgreen');
        } catch (error) {
            tips(<string>error, 'red');
        }
    }

    public static format: CodeFormatFunc = (code, tabSize = 4) => CodeJsCom.format(code, tabSize)
    public static zip: CodeHandleFunc = code => {
        code = CodeJsCom.zip(code)
        code = code.replace(/\s/g, '');;
        return code;
    };
}

export class LockUnicodeCom {
    private static handlerKey = (key: string): string => {
        key = key.charCodeAt(0).toString(16);
        switch (key.length) {
            case 1:
                key = '000' + key
                break;
            case 2:
                key = '00' + key;
                break;
            case 3:
                key = '0' + key;
                break;
        }
        return key;
    }

    public static encode = (code: string, type: 0 | 1 = 0, decimal: boolean = false, all: boolean = false,): string => {
        /* ASCLL字符 */
        const ASCLL = ` !"#&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^—·abcdefghijklmnopqrstuvwxyz{|}~\n`;
        const codeArr: string[] = code.split('');
        let result = '';
        codeArr.forEach((key: string) => {
            if (type == 1) {
                result += (ASCLL.includes(key) && !all) ? key : ('&#' + key.charCodeAt(0).toString(decimal ? 10 : 16)).toUpperCase();
            } else {
                result += (ASCLL.includes(key) && !all) ? key : '\\u' + this.handlerKey(key);
            }
        });
        return result;
    }

    public static decode = (code: string/* , type: 0 | 1 = 0, decimal: boolean = false */): string => {
        code = LockTextCom.encode(code);
        code = code.replace(/\\\\u/g, '\\u');
        code = JSON.parse(`{"text": "${code}"}`).text;
        return code;
    }
}

export class LockBase64Com {
    public static encode: CodeHandleFunc = code => Base64.encode(code);
    public static decode: CodeHandleFunc = code => Base64.decode(code);
}

export class LockHtmlCom {
    public static encode: CodeHandleFunc = code => {
        if (code.length === 0) return '';
        code = code.replace(/&/g, '&amp;');
        code = code.replace(/</g, '&lt;');
        code = code.replace(/>/g, '&gt;');
        code = code.replace(/ /g, '&nbsp;');
        code = code.replace(/\'/g, '&#39;');
        code = code.replace(/\"/g, '&quot;');
        return code;
    }

    public static decode: CodeHandleFunc = code => {
        if (code.length === 0) return '';
        code = code.replace(/&amp;/g, '&');
        code = code.replace(/&lt;/g, '<');
        code = code.replace(/&gt;/g, '>');
        code = code.replace(/&nbsp;/g, ' ');
        code = code.replace(/&#39;/g, '\'');
        code = code.replace(/&quot;/g, '\"');
        return code;
    }
}

export class LockUrlCom {
    public static encode: CodeHandleFunc = code => encodeURIComponent(code);
    public static decode: CodeHandleFunc = code => decodeURIComponent(code);
}

export class LockTextCom {
    public static encode: CodeHandleFunc = code => {
        if (code.length === 0) return '';
        // code = JSON.stringify(code);
        // return code.substring(1, code.length - 2);
        code = code.replace(/\\/g, `\\\\`);
        code = code.replace(/\r/g, `\\r`);
        code = code.replace(/\n/g, `\\n`);
        code = code.replace(/\t/g, `\\t`);
        // code = code.replace(/\b/g, `\\b`);
        code = code.replace(/"/g, `\\"`);
        code = code.replace(/'/g, `\\'`);
        return code;
    }

    public static decode: CodeHandleFunc = code => {
        if (code.length === 0) return '';
        code = code.replace(/\\r/g, `\r`);
        code = code.replace(/\\n/g, `\n`);
        code = code.replace(/\\t/g, `\t`);
        code = code.replace(/\\b/g, `\b`);
        code = code.replace(/\\\\/g, `\\`);
        code = code.replace(/\\"/g, `"`);
        code = code.replace(/\\'/g, `'`);
        return code;
    }
}

export class LockHashCom {
    public static handle: CodeHandleTypeFunc<LockHashType> = (code, type, key = '') => {
        code = key.length > 0 ? (<obj>CryptoJS)['Hmac' + type](code, key).toString() : CryptoJS[type](code).toString();
        return code;
    }
}

export class LockLockCom {
    public static encode: CodeHandleTypeFunc<LockLockType> = (code, type, key = '') => {
        code = CryptoJS[type].encrypt(code, key).toString();
        return code;
    }

    public static decode: CodeHandleTypeFunc<LockLockType> = (code, type, key = '') => {
        code = CryptoJS[type].decrypt(code, key).toString(CryptoJS.enc.Utf8);
        if (code.length < 1) tips('解密失败:密钥错误!')
        return code;
    }
}

export class ToolPixivPage {
    public static showError = (element: Element, state: boolean) => {
        if (!state) {
            element.classList.value += "mdui-textfield-invalid";
        } else {
            element.classList.value.replace("mdui-textfield-invalid", '');
        }
    }

    public static showMessage = (message: string) => {
        mdui.snackbar(`${message}<a href="javascript:void(0)"
            class="mdui-snackbar-action mdui-btn mdui-ripple mdui-ripple-white">Retry</a>`)
    }
}

export const ToolUaCom = (userAgentStr: string = navigator.userAgent) => UAParser(userAgentStr);

export class ToolColorCom {
    public static randomColor = (): string => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    public static hexToRgb = (hex: string) => {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    public static rgbToHex = (r: number, g: number, b: number): string => {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
}

export class ToolTimeCom {
    public static encode = (timestamp: number): string => {
        let date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
        let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        return Y + M + D + h + m + s;
    }

    public static decode = (time: string): number => Date.parse(new Date(time).toString()) / 1000;
}

export const ToolRandomCom = (min: number = 1, max: number = 50, nums: number = 5, isrepeat: boolean = false): number[] => {
    const result = [];

    if (isrepeat) {
        for (let i = 0; i < nums; i++) {
            result.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
    } else {
        let numsArray = Array.from({ length: max - min + 1 }, (_, i) => i + min);
        for (let i = 0; i < nums; i++) {
            let index = Math.floor(Math.random() * numsArray.length);
            result.push(numsArray.splice(index, 1)[0]);
        }
    }
    return result;
} 
