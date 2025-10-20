/// <reference types="vite/client" />
declare module "*.css";

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ANTHROPIC_API_KEY: string;
  // 你可以继续添加其他 VITE_ 前缀的环境变量
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
