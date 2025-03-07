# Vercel 部署指南

本指南将帮助你将 beye-vision Next.js 项目部署到 Vercel 平台。

## 准备工作

1. 确保你有一个 [GitHub](https://github.com/) 账号
2. 确保你有一个 [Vercel](https://vercel.com/) 账号
3. 确保你的项目代码已经推送到 GitHub 仓库

## 部署步骤

### 1. 将项目推送到 GitHub

如果你的项目还没有推送到 GitHub，请按照以下步骤操作：

```bash
# 如果仓库尚未初始化
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit"

# 添加远程仓库（替换 YOUR_USERNAME 和 YOUR_REPO_NAME）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 推送到 GitHub
git push -u origin main
```

### 2. 在 Vercel 上导入项目

1. 登录 [Vercel 控制台](https://vercel.com/dashboard)
2. 点击 "New Project" 按钮
3. 在 "Import Git Repository" 部分，选择你的 GitHub 账号并找到你的项目仓库
4. 点击 "Import" 按钮

### 3. 配置部署设置

Vercel 会自动检测这是一个 Next.js 项目，并为你预填充大部分配置。确认以下设置：

- **Framework Preset**: Next.js
- **Build Command**: `npm run build` (默认)
- **Output Directory**: `.next` (默认)
- **Install Command**: `npm install` (默认)

### 4. 环境变量设置（如需要）

如果你的项目需要环境变量，可以在 "Environment Variables" 部分添加。目前看起来你的项目不需要特殊的环境变量。

### 5. 完成部署

1. 点击 "Deploy" 按钮
2. Vercel 将开始构建和部署你的项目
3. 部署完成后，你将获得一个 Vercel 生成的域名（例如：`beye-vision.vercel.app`）

## 项目特殊配置说明

你的项目已经包含了一些特殊配置，这些配置与 Vercel 部署兼容：

1. **next.config.js** 中的 `output: 'standalone'` 配置适用于生产环境部署
2. **images** 配置中的 `unoptimized: true` 和 `remotePatterns` 设置已经配置好
3. **redirects** 配置将根路径重定向到 `/zh` 路径

## 自动部署

一旦设置完成，每次你推送更改到 GitHub 仓库的主分支，Vercel 将自动重新部署你的应用。

## 自定义域名（可选）

如果你想使用自定义域名：

1. 在 Vercel 项目控制台中，点击 "Settings" > "Domains"
2. 添加你的自定义域名
3. 按照 Vercel 提供的说明配置 DNS 设置

## 部署预览（可选）

Vercel 会为每个 Pull Request 创建一个预览部署，这样你可以在合并到主分支之前测试更改。

## 故障排除

如果部署过程中遇到问题：

1. 检查 Vercel 构建日志以获取详细错误信息
2. 确保你的项目在本地可以成功构建（`npm run build`）
3. 检查 `package.json` 中的依赖项是否正确
4. 确保 `next.config.js` 配置正确

如有更多问题，请参考 [Vercel 文档](https://vercel.com/docs) 或联系 Vercel 支持。