// import htmlminifier from 'html-minifier';
// import CleanCSS from "clean-css";
import BeautifyJs from "js-beautify";
import { tips } from "./method";
// import * as terser from 'terser'
import * as Base64 from 'js-base64';
import { lrcType, CodeHandleFunc, CodeHandleVoidFunc, CodeFormatFunc } from './interface';

export class App {
    public static setThemeLayout = (bodyClass: DOMTokenList, themeLayout: 'light' | 'dark' | 'time' | 'auto'): void => {
        bodyClass.remove('mdui-theme-layout-auto');
        bodyClass.remove('mdui-theme-layout-light');
        bodyClass.remove('mdui-theme-layout-dark');
        switch (themeLayout) {
            case 'light':
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
                bodyClass.add('mdui-theme-layout-auto');
                break;
        }
    }
}

export class DocPage {
    public static loadCom = (component: string): Promise<any> => {
        return import(`../components/doc/${component}.vue`);
    }
}

export class ChatCom {
    public static handler = function *(string: string): Generator {
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
    public static encode: CodeHandleFunc = code => {
        return code;
    }

    public static decode: CodeHandleFunc = code => {
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
        code = JSON.stringify(code);        
        return code.substring(1, code.length - 2);
    }

    public static decode: CodeHandleFunc = code => {
        console.log(code)
        if (code.length === 0) return '';
        code = code.replace(/\\r/g, `\r`);
        code = code.replace(/\\n/g, `sb`);
        code = code.replace(/\t/g, `\t`);
        code = code.replace(`\\b`, `\b`);
        code = code.replace(`\\'`, `\'`);
        code = code.replace(`\\"`, `\"`);
        code = code.replace(`\\\\`, `\\`);
        return code;
    }
}

