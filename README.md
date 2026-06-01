# React Vite Framework

基于 Vite + React + Ant Design + Zustand 的企业级前端框架

## 技术栈

- **构建工具**: Vite 6.x
- **前端框架**: React 18.x
- **UI 组件库**: Ant Design 5.x
- **状态管理**: Zustand 5.x
- **路由管理**: React Router 6.x
- **开发语言**: TypeScript 5.x
- **CSS 预处理器**: SCSS
- **包管理器**: pnpm

## 项目特性

- ✅ 开箱即用的企业级项目架构
- ✅ Ant Design 组件二次封装，提供统一的 API
- ✅ Zustand 状态管理，支持持久化和开发工具
- ✅ TypeScript 类型支持，提供完整的类型定义
- ✅ 路径别名配置，简化导入路径
- ✅ ESLint 代码规范
- ✅ 主题切换支持（亮色/暗色）
- ✅ 响应式布局

## 项目结构

```
react-vite-framework/
├── src/
│   ├── components/          # Ant Design 二次封装组件
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Select/
│   │   ├── Form/
│   │   ├── Table/
│   │   ├── Modal/
│   │   ├── Card/
│   │   └── DatePicker/
│   ├── stores/             # Zustand 状态管理
│   │   ├── userStore.ts    # 用户状态
│   │   ├── appStore.ts     # 应用全局状态
│   │   └── index.ts
│   ├── layouts/            # 布局组件
│   │   └── MainLayout.tsx
│   ├── pages/              # 页面组件
│   │   └── Home/
│   ├── config/             # 配置文件
│   │   └── constants.ts
│   ├── utils/              # 工具函数
│   ├── types/              # 类型定义
│   ├── App.tsx             # 根组件
│   ├── main.tsx            # 入口文件
│   └── index.css           # 全局样式
├── public/                 # 静态资源
├── index.html             # HTML 模板
├── vite.config.ts         # Vite 配置
├── tsconfig.json          # TypeScript 配置
├── eslint.config.js        # ESLint 配置
└── package.json           # 项目配置

## 快速开始

### 安装依赖

\`\`\`bash
pnpm install
\`\`\`

### 启动开发服务器

\`\`\`bash
pnpm dev
\`\`\`

### 构建生产版本

\`\`\`bash
pnpm build
\`\`\`

### 预览生产构建

\`\`\`bash
pnpm preview
\`\`\`

## 组件使用示例

### 封装后的组件

\`\`\`tsx
import { Button, Input, Select, Form, Table } from '@/components'

// 使用封装后的组件
<Button type="primary" loading={isLoading}>
  提交
</Button>

<Input label="用户名" required />

<Select label="选择" required>
  <Select.Option value="1">选项1</Select.Option>
</Select>
\`\`\`

### Zustand 状态管理

\`\`\`tsx
import { useUserStore, useAppStore } from '@/stores'

function MyComponent() {
  const { user, setUser } = useUserStore()
  const { theme, toggleTheme } = useAppStore()

  return (
    <div>
      <p>当前主题: {theme}</p>
      <button onClick={toggleTheme}>切换主题</button>
    </div>
  )
}
\`\`\`

## 路径别名

项目中已配置以下路径别名：

- `@/*` → `src/*`
- `@/components/*` → `src/components/*`
- `@/hooks/*` → `src/hooks/*`
- `@/utils/*` → `src/utils/*`
- `@/stores/*` → `src/stores/*`
- `@/layouts/*` → `src/layouts/*`
- `@/pages/*` → `src/pages/*`
- `@/config/*` → `src/config/*`
- `@/types/*` → `src/types/*`

## 环境变量

创建 `.env` 文件配置环境变量：

\`\`\`env
VITE_API_BASE_URL=/api
\`\`\`

## 开发建议

1. 组件开发优先使用封装后的组件
2. 状态管理使用 Zustand，避免过度使用 Context
3. 遵循 ESLint 规范，保持代码风格统一
4. 充分利用 TypeScript 类型检查
5. 合理拆分组件和页面

## License

MIT
