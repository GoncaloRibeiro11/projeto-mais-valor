const http = require("http");
const fs = require("fs");
const path = require("path");
const os = require("os");

const root = __dirname;
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "0.0.0.0";

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".sql": "text/plain; charset=utf-8"
};

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);

  if (url.pathname === "/schema-view") {
    fs.readFile(path.join(root, "supabase", "schema.sql"), "utf8", (error, sql) => {
      if (error) {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Not found");
        return;
      }

      const escaped = sql.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(`<!doctype html><html><body><pre id="schema">${escaped}</pre></body></html>`);
    });
    return;
  }

  const requestedPath = url.pathname === "/" ? "/index.html" : url.pathname;
  const pathname = decodeURIComponent(requestedPath === "/schema.txt" ? "/supabase/schema.sql" : requestedPath);
  const filePath = path.normalize(path.join(root, pathname));

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    res.writeHead(200, { "Content-Type": types[path.extname(filePath)] || "application/octet-stream" });
    res.end(data);
  });
});

server.listen(port, host, () => {
  console.log(`Projeto Mais Valor pronto neste PC: http://127.0.0.1:${port}`);

  const networkUrls = Object.values(os.networkInterfaces())
    .flat()
    .filter((address) => address && address.family === "IPv4" && !address.internal)
    .map((address) => `http://${address.address}:${port}`);

  for (const url of networkUrls) {
    console.log(`Acesso na rede: ${url}`);
  }
});
