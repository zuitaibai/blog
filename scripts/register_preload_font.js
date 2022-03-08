hexo.extend.injector.register('head_end', () => {
    let url_for = hexo.extend.helper.get('url_for').bind(hexo);
    return `\n
        <link rel="preload" href="${url_for('/assets/font/tyzXingShu.eot')}" as="font" type="application/vnd.ms-fontobject" crossorigin="anonymous">
        <link rel="preload" href="${url_for('/assets/font/tyzXingShu.woff2')}" as="font" type="font/woff2" crossorigin="anonymous">
        <link rel="preload" href="${url_for('/assets/font/tyzXingShu.woff')}" as="font" type="font/woff" crossorigin="anonymous">
        <link rel="preload" href="${url_for('/assets/font/tyzXingShu.ttf')}" as="font" type="font/ttf" crossorigin="anonymous">
        <link rel="preload" href="${url_for('/assets/font/tyzXingShu.svg')}" as="font" type="image/svg+xml" crossorigin="anonymous">
    `;
});