'zuitaibai's blog'

1. hexo g -d
2. 目前已实现github摧送后自动部署。gitee需要手动到项目内->服务-> Gitee Pages-> 按钮：部署|更新 搞一下。
   
   gitee的CI/CD其实也是可以搞一下的(用第三方个人实现的包)。
   ？？？刚看了下gitee官网，好像gitee可以免费CI/CD了？？todo一下。

3. 阿里云上的还没有自动部署，目前先把public下文件压包，手动往上拷贝一下子。
    

> hexo g -d

# 命令
### $ hexo new [layout] <title> 或者手动进入source中copy and edit new page
    1. 如果没有设置 layout 的话，默认使用 _config.yml 中的 default_layout 参数代替。如果标题包含空格的话，请使用引号括起来
    2. hexo new page --path about/me "About me"： 创建一个 source/about/me.md 文件，同时 Front Matter 中的 title 为 "About me"

### $ hexo g/generate 生成静态文件
    参数-d/--deploy	文件生成后立即部署网站

### $ hexo publish [layout] <filename> 发表草稿

### $ hexo server 启动服务器。
    默认情况下，访问网址为： http://localhost:4000/

### $ hexo d/deploy 部署网站
    -g/--generate	部署之前预先生成静态文件

### $ hexo render <file1> [file2] ... 渲染文件
    渲染文件

### $ hexo clean 清除缓存文件 (db.json) 和已生成的静态文件 (public)
    在某些情况（尤其是更换主题后），如果发现您对站点的更改无论如何也不生效，您可能需要运行该命令

### $ hexo list <type> 列出网站资料

### $ hexo version 显示 Hexo 版本

### $ hexo --draft 显示 source/_drafts 文件夹中的草稿文章

# 布局（Layout）
    ｜ 布局 ｜ 路径 ｜
    ｜ ---- ｜ --- ｜
    ｜ post ｜ source/_posts ｜
    ｜ page ｜ source ｜
    ｜ draft ｜ source/_drafts ｜
