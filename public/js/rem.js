// 转换 js、px
function remSize() {
    let deviceWidth = document.documentElement.clientWidth || window.innerWidth;
    if (deviceWidth > 750) deviceWidth = 750;
    if (deviceWidth < 320) deviceWidth = 320;
    // 将 1 js = 100 px
    // html 的 font-size = 100px设计稿的宽度
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';
    document.querySelector("body").style.fontSize = 0.3 + 'rem';
}

remSize()

window.onresize = function () {
    remSize()
}