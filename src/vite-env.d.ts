/// <reference types="vite/client" />
//interface ImportMeta เพิ่ม property glob เพื่อให้ TypeScript รู้จัก import.meta.glob
interface ImportMeta {
  glob: typeof import("vite").glob;
}