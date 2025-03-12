# Boot-Lynx

<p align="center">
  <img src="https://github.com/kirklin/boot-lynx/raw/master/src/assets/lynx-logo.png" alt="Boot-Lynx Logo" width="120" height="120" style="margin-bottom: 20px" />
</p>

<p align="center">
  <a href="https://github.com/kirklin/boot-lynx/blob/main/LICENSE"><img src="https://img.shields.io/github/license/kirklin/boot-lynx" alt="license"></a>
  <a href="https://github.com/kirklin/boot-lynx/releases"><img src="https://img.shields.io/github/v/release/kirklin/boot-lynx" alt="release"></a>
  <a href="https://github.com/kirklin/boot-lynx"><img src="https://img.shields.io/github/stars/kirklin/boot-lynx?style=social" alt="stars"></a>
</p>

> 一个功能齐全的Lynx应用启动模板，基于React和UnoCSS构建，使用Rspeedy加速开发。

[English](./README.md) | 简体中文

## 🌟 特性

- 🚀 **快速开发**：由Rspeedy提供支持，实现闪电般的构建速度
- ⚛️ **Lynx上的React**：使用React搭配Lynx引擎开发高效的移动应用
- 🎨 **UnoCSS集成**：原子化CSS引擎，提供高度优化的样式处理
- 📱 **二维码预览**：轻松在移动设备上测试应用
- 📦 **优化的包体积**：更小的文件体积带来更好的性能
- 🔄 **热模块替换**：开发过程中的快速刷新
- 🧩 **TypeScript支持**：类型安全的JavaScript开发

## 📦 前置条件

- Node.js >= 18
- pnpm >= 10.2.1

## 🚀 开始使用

### 安装

```bash
# 克隆仓库
git clone https://github.com/kirklin/boot-lynx.git my-lynx-app

# 进入项目目录
cd my-lynx-app

# 安装依赖
pnpm install
```

### 开发

```bash
# 启动开发服务器
pnpm dev
```

使用Lynx应用扫描终端中显示的二维码，在移动设备上预览您的应用。

### 生产构建

```bash
# 为生产环境构建应用
pnpm build
```

### 预览生产构建

```bash
# 在本地预览生产构建
pnpm preview
```

## 🧪 测试和代码检查

```bash
# 运行代码检查
pnpm lint

# 修复代码检查问题
pnpm lint:fix
```

## 🛠️ 项目结构

```
boot-lynx/
├─ src/                  # 源代码
│  ├─ assets/            # 静态资源
│  ├─ App.tsx            # 主应用组件
│  ├─ index.tsx          # 应用入口点
│  └─ globals.css        # 全局样式
├─ lynx.config.ts        # Lynx配置
├─ tsconfig.json         # TypeScript配置
├─ package.json          # 项目依赖和脚本
└─ README.md             # 项目文档
```

## 🚧 已知问题

### CSS兼容性

Lynx引擎不完全支持一些现代CSS特性：

- 不支持伪元素，如`::backdrop`
- 不识别现代颜色语法，如`rgb(255 255 255/0.65)`

**解决方案：** 使用传统的CSS语法，如`rgba(255,255,255,0.65)`。

## 📄 许可证

本项目采用MIT许可证 - 详情请查看[LICENSE](LICENSE)文件。

## 🙏 致谢

- [Lynx引擎](https://lynxjs.org/zh/index.html) - 核心引擎
- [React](https://reactjs.org/) - UI库
- [UnoCSS](https://github.com/unocss/unocss) - CSS引擎
- [Rspeedy](https://github.com/web-infra-dev/rspack) - 构建工具

---

<p align="center">由<a href="https://github.com/kirklin">Kirk Lin</a>用❤️开发</p>
