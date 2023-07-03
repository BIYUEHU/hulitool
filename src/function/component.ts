// import htmlminifier from 'html-minifier';
// import CleanCSS from "clean-css";
import BeautifyJs from "js-beautify";
import { tips } from "./method";
// import * as terser from 'terser'
import * as Base64 from 'js-base64';

export class CodeHtmlCom {
    public static format = (code: string, tabSize: number = 4) => BeautifyJs.html(code, {
        indent_size: tabSize
    })
    public static zip = (code: string) => code;
}

export class CodeCssCom {
    public static format = (code: string, tabSize: number = 4) => BeautifyJs.css(code, {
        indent_size: tabSize
    })

    public static zip = (code: string) => code;

}

export class CodeJsCom {
    public static run = (code: string): string => {
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

    public static format = (code: string, tabSize: number = 4) => code = BeautifyJs(code, {
        indent_size: tabSize,
        space_in_empty_paren: true
    })
}

export class CodeJsonCom {
    public static check = (code: string): void => {
        try {
            JSON.parse(code);
            tips('Success: A correct JSON', 'lightgreen');
        } catch (error) {
            tips(<string>error, 'red');
        }
    }

    public static format = (code: string, tabSize: number = 4) => CodeJsCom.format(code, tabSize)
}

export class LockUnicodeCom {
    public static encode = (code: string) => {
        return code;
    }

    public static decode = (code: string) => {
        return code;
    }
}

export class LockBase64Com {
    public static encode = (code: string) => Base64.encode(code);
    public static decode = (code: string) => Base64.decode(code);
}

export class LockHtmlCom {
    public static encode = (code: string) => {
		let result = '';
		if(code.length === 0) return '';
		result = code.replace(/&/g,'&amp;');
		result = result.replace(/</g,'&lt;');
		result = result.replace(/>/g,'&gt;');
		result = result.replace(/ /g,'&nbsp;');
		result = result.replace(/\'/g,'&#39;');
		result= result.replace(/\"/g,'&quot;');
        
		return result;
	}

	public static decode = (code: string) => {
		let result = '';
		if(code.length === 0) return '';
		result = code.replace(/&amp;/g, '&');
		result = result.replace(/&lt;/g,'<');
		result = result.replace(/&gt;/g,'>');
		result = result.replace(/&nbsp;/g,' ');
		result = result.replace(/&#39;/g,'\'');
		result = result.replace(/&quot;/g,'\"');
		return result;
	}
}

export class LockUrlCom {
    public static encode = (code: string): string => encodeURIComponent(code);
    public static decode = (code: string): string => decodeURIComponent(code);
}

export class LockTextCom {
    public static encode = (code: string) => {
        return code;
    }

    public static decode = (code: string) => {
        return code;
    }
}

