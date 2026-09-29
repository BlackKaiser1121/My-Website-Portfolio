export function publicPath(path: string): string {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${basePath}/${path.replace(/^\/+/, "")}`;
}

export function absolutePublicUrl(path: string, site: URL): string {
  return new URL(publicPath(path), site).toString();
}
