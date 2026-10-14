import http from 'node:http';
import { createReadStream, statSync } from 'node:fs';
import { resolve, extname, sep } from 'node:path';

const root = resolve(import.meta.dirname, '../out');
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css', '.js':'text/javascript', '.txt':'text/plain', '.png':'image/png', '.jpg':'image/jpeg', '.webp':'image/webp', '.svg':'image/svg+xml', '.woff2':'font/woff2', '.mp4':'video/mp4' };
http.createServer((request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://127.0.0.1').pathname);
    let file = resolve(root, `.${pathname}`);
    if (file !== root && !file.startsWith(root + sep)) { response.writeHead(403); return response.end(); }
    if (statSync(file).isDirectory()) file = resolve(file, 'index.html');
    const stat = statSync(file);
    const headers = { 'Content-Type': types[extname(file)] || 'application/octet-stream', 'Accept-Ranges':'bytes' };
    const match = request.headers.range?.match(/^bytes=(\d+)-(\d*)$/);
    if (match) {
      const start = Number(match[1]); const end = match[2] ? Math.min(Number(match[2]), stat.size - 1) : stat.size - 1;
      if (start > end) { response.writeHead(416, { 'Content-Range':`bytes */${stat.size}` }); return response.end(); }
      response.writeHead(206, { ...headers, 'Content-Range':`bytes ${start}-${end}/${stat.size}`, 'Content-Length':end - start + 1 });
      createReadStream(file, { start, end }).pipe(response);
    } else {
      response.writeHead(200, { ...headers, 'Content-Length':stat.size });
      createReadStream(file).pipe(response);
    }
  } catch { response.writeHead(404); response.end('Not found'); }
}).listen(4317, '127.0.0.1', () => console.log('Preview: http://127.0.0.1:4317/'));
