/// <reference types="vite/client" />

type ImportMetaEnv = Record<string, never>

type ImportMeta = {
    readonly env: ImportMetaEnv;
}
