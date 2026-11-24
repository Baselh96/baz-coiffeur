// src/utils/getBasePath.ts
export function getBasePath(path: string = ""): string {
  const url = process.env.NEXT_PUBLIC_BASE_URL || "";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${url}/${basePath}${path}`;
}