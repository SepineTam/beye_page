# 比翼视界 (Beye Vision)

比翼视界是一个为视障人士提供AI驱动的视觉辅助技术的项目官网。

## 项目概述

比翼视界旨在通过创新的AI技术赋能视障人士，帮助他们以全新的方式体验世界。我们的技术包括场景识别、语音交互、导航辅助和无障碍设计等功能。

## 技术栈

- **前端框架**: Next.js 14
- **样式**: Tailwind CSS
- **图标**: React Icons
- **多语言支持**: 自定义i18n实现

## 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm run start
```

## 项目结构

- `/src/app` - Next.js 应用程序目录
- `/src/components` - React 组件
- `/src/i18n` - 多语言支持文件
- `/src/contexts` - React 上下文
- `/src/images` - 图片资源

## 多语言支持

项目支持中文和英文两种语言，通过URL路径参数切换：
- 中文：`/zh`
- 英文：`/en`

## 部署

项目可以部署到Vercel平台，详细部署指南请参考 [Vercel部署指南](./vercel-deploy-guide.md)。

## 贡献指南

欢迎贡献代码或提出建议！请遵循以下步骤：

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建Pull Request

## 许可证

[MIT License](LICENSE)

## 联系我们

如有任何问题或建议，请通过项目页面的联系表单与我们联系。