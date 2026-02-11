# DevPulse 项目说明

## 项目概述

DevPulse 是一个使用 Turborepo 管理的 Monorepo 项目，包含一个 Vite + React 19 的 Web 应用和三个共享的 npm packages。

## 技术栈

- **Turborepo** - Monorepo 管理工具
- **React 19** - 前端框架
- **Vite** - 构建工具
- **TypeScript** - 类型安全
- **ESLint** - 代码规范检查

## 项目结构

```
DevPulse/
├── apps/
│   └── web/                 # Vite + React 19 web 应用
│       ├── src/
│       │   ├── App.tsx
│       │   ├── main.tsx
│       │   └── index.css
│       ├── package.json
│       ├── tsconfig.json
│       ├── vite.config.ts
│       ├── index.html
│       └── eslint.config.js
├── packages/
│   ├── ui/                  # UI 组件包
│   │   └── src/
│   │       ├── Button.tsx
│   │       └── index.ts
│   ├── utils/               # 工具函数包
│   │   └── src/
│   │       ├── format.ts
│   │       ├── validate.ts
│   │       └── index.ts
│   └── config/              # 配置包
│       └── src/
│           ├── site.ts
│           ├── api.ts
│           └── index.ts
├── docs/                    # 项目文档
├── package.json             # 根 package.json (workspaces 配置)
├── turbo.json               # Turborepo 配置
├── .prettierrc              # Prettier 配置
└── .gitignore
```

## Packages 说明

### apps/web
主 Web 应用，使用 Vite + React 19 构建。

### packages/ui
UI 组件包，包含可复用的 React 组件。
- `Button` - 基础按钮组件，支持 primary 和 secondary 变体

### packages/utils
工具函数包，包含常用的辅助函数。
- `formatDate` - 格式化日期
- `formatBytes` - 格式化字节大小
- `isEmail` - 邮箱验证
- `isUrl` - URL 验证
- `isNotEmpty` - 非空检查

### packages/config
配置包，包含站点和 API 配置。
- `siteConfig` - 站点基本信息（名称、描述、链接等）
- `apiConfig` - API 配置（baseUrl、超时、端点等）

## 可用命令

在项目根目录执行以下命令：

| 命令 | 说明 |
|------|------|
| `npm install` | 安装所有依赖 |
| `npm run dev` | 启动开发服务器（所有 apps） |
| `npm run build` | 构建所有包 |
| `npm run lint` | 运行代码规范检查 |
| `npm run test` | 运行测试 |
| `npm run clean` | 清理构建产物 |
| `npm run format` | 格式化代码 |

## 运行项目

### 1. 安装依赖
```bash
npm install
```

### 2. 启动开发服务器
```bash
npm run dev
```

运行成功后，你会看到类似以下输出：
```
  VITE v6.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.x.x:5173/
```

### 3. 访问应用

在浏览器中打开：**http://localhost:5173/**

**注意**：
- 确保使用 `http://` 而不是 `https://`
- 默认端口是 `5173`
- 如果端口被占用，Vite 会自动选择其他端口

### 4. 调试

如果看不到页面，请：
1. 打开浏览器开发者工具（F12）
2. 查看 Console 标签页是否有错误信息
3. 查看 Network 标签页检查资源加载情况

## 单独运行 web 应用

如果只想运行 web 应用而不使用 turborepo：
```bash
cd apps/web
npm run dev
```

## 环境要求

- Node.js >= 18.0.0
- npm >= 10.9.2

## 开发指南

### 添加新的 UI 组件

1. 在 `packages/ui/src/` 中创建组件文件
2. 在 `packages/ui/src/index.ts` 中导出组件
3. 在 `apps/web` 中使用 `import { Button } from 'ui'`

### 添加新的工具函数

1. 在 `packages/utils/src/` 中创建工具函数文件
2. 在 `packages/utils/src/index.ts` 中导出函数
3. 在 `apps/web` 中使用 `import { formatDate } from 'utils'`

### 修改配置

1. 编辑 `packages/config/src/site.ts` 或 `packages/config/src/api.ts`
2. 在 `apps/web` 中使用 `import { siteConfig } from 'config'`

## Turborepo 配置

`turbo.json` 定义了任务的依赖关系和缓存策略：

- `build` - 依赖 `^build`，输出到 `.next/**`、`dist/**`
- `dev` - 禁用缓存，持久化运行
- `lint` - 依赖 `^lint`
- `test` - 依赖 `^build`
- `clean` - 禁用缓存
