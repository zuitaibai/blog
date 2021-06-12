function fold (args, content) {
    var text = args[0] || "代码折叠|代码展开";
    var texts = text.split('|');
    let mm = hexo.render.renderSync({text: content, engine: 'markdown'});
    return `<div class="fold_hider-w">
                <div class="fold_hider">
                    <div class="hider_title">
                        <span class="hider_title_zd">${texts[0]}</span>
                        <span class="hider_title_zk">${texts[1]}</span>
                    </div>
                </div>
                <div class="fold">
                ${mm}
                </div>
            </div>`;
}
hexo.extend.tag.register('fold', fold, {ends: true, async: true});