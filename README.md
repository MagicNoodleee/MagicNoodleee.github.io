# 个人学术主页

纯静态站点，零依赖、零构建。托管在 GitHub Pages。

## 目录说明

```
index.html              主页骨架 + SEO 信息（改一次就够）
paper.html              论文详情页模板，一个文件服务所有论文
assets/
  css/style.css         样式（想换主题色改 --accent）
  js/data.js         ★  你的所有内容都在这里，日常只改这个文件
  js/common.js          双语/主题/图标等共用工具，不用动
  js/main.js            主页渲染，不用动
  js/paper.js           详情页渲染，不用动
  img/                  头像、favicon
  files/                CV PDF 等文件放这里
.nojekyll               告诉 GitHub Pages 不要用 Jekyll 处理
```

## 论文详情页

每篇论文有独立地址 `paper.html?id=<slug>`，例如
`magicnoodleee.github.io/paper.html?id=quantum-reliability`。

**不需要为每篇论文单独建 HTML 文件** —— `paper.html` 是一个模板，按地址栏里的
`id` 从 `data.js` 取对应那篇来渲染。加一篇论文 = 在 `data.js` 里加一个对象，
详情页自动就有了。

详情页包含：标题、作者、出处、各种链接、摘要、BibTeX（带一键复制）、上一篇/下一篇。

`slug` 就是地址里的 id。**改 slug 会让已经分享出去的旧链接失效**，定了就别动。

## 本地预览

双击 `index.html` 即可。或者起个本地服务器（推荐，避免个别浏览器的本地文件限制）：

```bash
python3 -m http.server 4321
```

然后打开 http://localhost:4321

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库，名字必须是 `magicnoodleee.github.io`，Public，不要勾选任何初始化选项
2. 在本目录执行：

```bash
git remote add origin https://github.com/MagicNoodleee/magicnoodleee.github.io.git && git push -u origin main
```

3. 打开仓库 **Settings → Pages**，Source 选 `Deploy from a branch`，分支选 `main`、目录选 `/ (root)`，Save
4. 等 1–2 分钟，访问 https://magicnoodleee.github.io

以后每次改完内容：

```bash
git add -A && git commit -m "update" && git push
```

推上去大约 1 分钟后网站自动更新。

## 日常维护

**加一篇论文** — 打开 `assets/js/data.js`，在 `publications.items` 数组最前面复制粘贴一个 `{...}` 块，改内容即可。年份会自动分组排序，详情页自动生成。
记得给它一个没被用过的 `slug`。

**换头像** — 把照片放进 `assets/img/`，改 `profile.photo` 的路径。

**放 CV** — 把 PDF 放进 `assets/files/cv.pdf`，链接已经配好了。

**删掉某个模块** — 把它的 `items: []` 清空，或者从 `SITE.order` 数组里删掉它的名字。

**导航栏名字太长** — 给模块加一行 `navLabel: { en: "Service", zh: "服务" }`，导航栏用短的，正文标题仍用 `label`。

**换主题色** — `assets/css/style.css` 里的 `--accent`（浅色）和深色模式那一块的 `--accent`，两处都改。

**作者标记** — 在 `authors` 字符串里直接写：

| 写法 | 效果 |
|---|---|
| `**你的名字**` | 加粗高亮自己 |
| `名字*` | 通讯作者，自动出现「* 通讯作者」脚注 |
| `名字†` | 同等贡献，自动出现「† 同等贡献」脚注 |
| `**你的名字**†*` | 可以叠加 |

标记会渲染成上标。**脚注按需显示** —— 全站没有一处用到 `†` 时，那条脚注不会出现；
详情页也只显示这篇实际用到的那几条。脚注文案在 `publications.notes` 里改。

## 已内置

- 中英双语一键切换（记住选择，首次访问按浏览器语言自动判断）
- 浅色 / 深色模式（跟随系统，也可手动切换）
- 手机 / 平板 / 桌面自适应
- 打印样式：Cmd+P 直接导出成一份还算能看的 CV
- 空模块自动隐藏，导航栏自动生成
- 滚动时导航高亮当前章节
- 每篇论文的独立详情页（摘要 + BibTeX 一键复制 + 前后翻页）

## 注意

页面内容由 `data.js` 渲染，属于客户端渲染。Google 能正常抓取，但如果你非常在意 SEO，
可以把 `index.html` 里的 `<title>` / `<meta name="description">` 写扎实一点 —— 这两处是静态的。
