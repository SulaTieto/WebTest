# 我的个人网站

一个现代、响应式的个人网站，使用纯 HTML、CSS 和 JavaScript 构建。

## ✨ 特性

- 🎨 现代化设计，带有渐变色和动画效果
- 📱 完全响应式，适配移动端和桌面端
- 🚀 轻量级，无需任何框架
- 💫 平滑滚动和交互动画
- 🎯 SEO 友好

## 📁 项目结构

```
my-website/
├── index.html    # 主页面
├── style.css     # 样式文件
├── script.js     # 交互脚本
└── README.md     # 说明文档
```

## 🚀 如何发布到 GitHub Pages

### 方法一：使用 GitHub 网页界面（最简单）

1. **创建 GitHub 账号**
   - 访问 https://github.com
   - 点击 "Sign up" 注册账号

2. **创建新仓库**
   - 登录后点击右上角的 "+" → "New repository"
   - 仓库名称：`my-website`（或任意名称）
   - 设置为 Public（公开）
   - 点击 "Create repository"

3. **上传文件**
   - 在仓库页面点击 "uploading an existing file"
   - 拖拽或选择 `index.html`、`style.css`、`script.js` 三个文件
   - 点击 "Commit changes"

4. **启用 GitHub Pages**
   - 进入仓库的 "Settings" 选项卡
   - 左侧菜单找到 "Pages"
   - 在 "Source" 下拉菜单中选择 "main" 分支
   - 点击 "Save"
   - 等待几分钟，页面会显示访问地址：`https://你的用户名.github.io/my-website/`

### 方法二：使用 Git 命令行

```bash
# 1. 在项目文件夹中初始化 Git
cd my-website
git init

# 2. 添加所有文件
git add .

# 3. 提交
git commit -m "Initial commit: 创建个人网站"

# 4. 连接到 GitHub 仓库（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/my-website.git

# 5. 推送到 GitHub
git branch -M main
git push -u origin main
```

然后按照方法一的第 4 步启用 GitHub Pages。

## 🎨 自定义网站

### 修改个人信息

在 `index.html` 中修改以下内容：

- **网站标题**：修改 `<title>` 和 `.logo` 中的文字
- **英雄区域文字**：修改 `<h1>` 和 `.subtitle` 中的内容
- **联系方式**：在 "联系我" 部分修改邮箱、GitHub 等信息

### 修改颜色主题

在 `style.css` 的 `:root` 部分修改：

```css
:root {
    --primary-color: #6366f1;    /* 主色调 */
    --secondary-color: #8b5cf6;  /* 辅助色 */
    /* 根据喜好修改颜色代码 */
}
```

### 添加自己的项目

在 `index.html` 的 "我的项目" 部分添加或修改 `.project-card` 元素。

## 📝 本地预览

直接双击 `index.html` 文件即可在浏览器中预览网站。

或者使用简单的 HTTP 服务器：

```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js（需要先安装 http-server）
npx http-server

# 然后在浏览器访问 http://localhost:8000
```

## 🌐 其他免费托管选项

除了 GitHub Pages，还可以使用：

- **Netlify**: https://www.netlify.com
  - 拖拽文件夹即可部署
  - 自动 HTTPS
  
- **Vercel**: https://vercel.com
  - 部署快速
  - 适合现代前端项目
  
- **Cloudflare Pages**: https://pages.cloudflare.com
  - 全球 CDN 加速
  - 免费且性能好

## 📱 浏览器兼容性

- ✅ Chrome/Edge (最新版本)
- ✅ Firefox (最新版本)
- ✅ Safari (最新版本)
- ✅ 移动端浏览器

## 📄 许可证

本项目可以自由使用和修改。

## 🎉 开始使用

1. 根据上面的说明修改个人信息
2. 选择一个托管平台（推荐 GitHub Pages）
3. 上传并发布
4. 分享你的网站链接！

祝你建站愉快！🚀
