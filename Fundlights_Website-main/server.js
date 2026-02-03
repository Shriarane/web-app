const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
const distDir = path.join(__dirname, 'dist');

const mime = {
  html: 'text/html',
  js: 'text/javascript',
  css: 'text/css',
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  svg: 'image/svg+xml',
  json: 'application/json',
  txt: 'text/plain',
  ico: 'image/x-icon',
  woff: 'font/woff',
  woff2: 'font/woff2',
};

const server = http.createServer((req, res) => {
  try {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    let filePath = path.join(distDir, urlPath);

    // Prevent directory traversal
    if (!filePath.startsWith(distDir)) {
      res.statusCode = 403;
      res.end('Forbidden');
      return;
    }

    // If requesting a directory or non-existent file, serve index.html (SPA fallback)
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(distDir, 'index.html');
    }

    const ext = path.extname(filePath).slice(1);
    const contentType = mime[ext] || 'application/octet-stream';
    const data = fs.readFileSync(filePath);

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end('Server error');
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
