import mdui from 'mdui';

export const test = () => {
    console.log('test');
};

export const copyOnSuccess = () => {
    mdui.snackbar("复制成功");
};

export const copyOnError = () => {
    mdui.snackbar("复制失败");
};