import mdui from 'mdui'
import { obj } from './interface';

export const copyContent = (proxy: obj, content: string) => {
    proxy.$copyText(content).then(
        copyOnSuccess,
        copyOnError
    )
}

export const copyOnSuccess = (): void => {
    mdui.snackbar("复制成功");
};

export const copyOnError = (): void => {
    mdui.snackbar("复制失败");
};

export const tips = (code: number | string, color?: string): void => {
    let message: number | string = '';
    switch (code) {
        case 1:
            message = '缺少必要参数!';
            break;
        case 2:
            message = '参数错误!';
            break;
        case 3:
            message = '接口错误';
            break;
        default:
            message = code;
    }
    if (color) message = `<span style="color:${color}">${message}</span>`;
    mdui.snackbar(message as string);
}
