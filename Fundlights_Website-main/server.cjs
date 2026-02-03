const http = require('http');
const fs = require('fs');
const path = require('path');

const { sendDemoRequestEmail } = require('./src/server/acsEmail.cjs');

function loadDotEnvIfPresent() {
  try {
    const envPath = path.join(__dirname, '.env');
    if (!fs.existsSync(envPath)) return;

    const contents = fs.readFileSync(envPath, 'utf8');
    for (const rawLine of contents.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line || line.startsWith('#')) continue;
      const idx = line.indexOf('=');
      if (idx === -1) continue;
      const key = line.slice(0, idx).trim();
      let value = line.slice(idx + 1).trim();
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      if (process.env[key] === undefined) process.env[key] = value;
    }
  } catch (err) {
    console.warn('Warning: failed to load .env file', err);
  }
}

loadDotEnvIfPresent();

function makeRequestId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

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
    const requestId = makeRequestId();
    res.setHeader('X-Request-Id', requestId);

    // Minimal CORS for local dev (Vite dev server calling this backend)
    const origin = req.headers.origin;
    if (origin) {
      res.setHeader('Access-Control-Allow-Origin', origin);
      res.setHeader('Vary', 'Origin');
    } else {
      res.setHeader('Access-Control-Allow-Origin', '*');
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Expose-Headers', 'X-Request-Id');

    if (req.method === 'OPTIONS') {
      res.writeHead(204);
      res.end();
      return;
    }

    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    let filePath = path.join(distDir, urlPath);

    // Prevent directory traversal
    if (!filePath.startsWith(distDir)) {
      res.statusCode = 403;
      res.end('Forbidden');
      return;
    }

    if (req.method === 'POST' && req.url === '/api/request-demo') {
      console.log(`[${requestId}] /api/request-demo hit`);
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
        if (body.length > 1024 * 1024) req.socket.destroy();
      });

      req.on('end', async () => {
        try {
          let payload;
          try {
            payload = JSON.parse(body || '{}');
          } catch (parseErr) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(
              JSON.stringify({
                ok: false,
                error: 'Invalid JSON body',
                details: parseErr && parseErr.message ? String(parseErr.message) : String(parseErr),
                requestId,
              }),
            );
            return;
          }

          const companyName = String(payload.companyName || '').trim();
          const fullName = String(payload.fullName || '').trim();
          const email = String(payload.email || '').trim();
          const phone = String(payload.phone || '').trim();
          const employeeCount = String(payload.employeeCount || '').trim();
          const message = payload.message === undefined ? '' : String(payload.message || '').trim();

          const errors = [];
          if (!companyName) errors.push('companyName is required');
          if (!fullName) errors.push('fullName is required');
          if (!email || !/^\S+@\S+\.\S+$/.test(email)) errors.push('valid email is required');
          if (!phone) errors.push('phone is required');
          if (!employeeCount) errors.push('employeeCount is required');

          if (errors.length > 0) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ ok: false, error: 'Invalid request', details: errors, requestId }));
            return;
          }

          const data = {
            companyName,
            fullName,
            email,
            phone,
            employeeCount,
            message,
          };

          const result = await sendDemoRequestEmail(data);
          console.log(`[${requestId}] /api/request-demo email sent`, result);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ ok: true, result, requestId }));
        } catch (err) {
          console.error(`[${requestId}] Failed to handle /api/request-demo`, err);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(
            JSON.stringify({
              ok: false,
              error: 'Failed to send demo request',
              details: err && err.message ? String(err.message) : String(err),
              requestId,
            }),
          );
        }
      });

      return;
    }

    if (req.method === 'POST' && req.url === '/api/test-email') {
      console.log(`[${requestId}] /api/test-email hit`);
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
        if (body.length > 1024 * 1024) req.socket.destroy();
      });

      req.on('end', async () => {
        try {
          const payload = JSON.parse(body || '{}');
          const data = {
            companyName: payload.companyName || 'FundLights (Test)',
            fullName: payload.fullName || 'Website Test User',
            email: payload.email || 'test@example.com',
            phone: payload.phone || '+0',
            employeeCount: payload.employeeCount || '1-50',
            message: payload.message || 'This is a test email from /api/test-email',
          };

          const result = await sendDemoRequestEmail(data);
          console.log(`[${requestId}] /api/test-email email sent`, result);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ ok: true, result, requestId }));
        } catch (err) {
          console.error(`[${requestId}] Failed to handle /api/test-email`, err);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(
            JSON.stringify({
              ok: false,
              error: 'Failed to send test email',
              details: err && err.message ? String(err.message) : String(err),
              requestId,
            }),
          );
        }
      });

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
