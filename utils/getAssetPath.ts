// src/utils/getAssetPath.ts
export function getAssetPath(path: string): string {
  // Holt den Pfad aus der Umgebungsvariable (z. B. "/baz-coiffeur")
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  
  // Stellt sicher, dass keine doppelten Slashes entstehen
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  
  return `${basePath}${cleanPath}`;
}