/**
 * BMC Academia - Lightweight Zero-Dependency Localhost Server
 * Built with native Node.js (no npm install required!)
 * Works on Windows, macOS, and Linux out of the box.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.txt': 'text/plain; charset=utf-8',
    '.pdf': 'application/pdf',
    '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.wasm': 'application/wasm'
};

function getSafeFilePath(urlPath) {
    // Strip query parameters or hashes
    const cleanPath = urlPath.split('?')[0].split('#')[0];
    const decodedPath = decodeURIComponent(cleanPath);
    
    // Resolve relative path and prevent directory traversal
    let relativePath = decodedPath === '/' ? 'index.html' : decodedPath.replace(/^\/+/, '');
    const absolutePath = path.resolve(ROOT_DIR, relativePath);

    if (!absolutePath.startsWith(ROOT_DIR)) {
        return null;
    }
    return absolutePath;
}

function serveStatic(req, res) {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
        res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Method Not Allowed');
        return;
    }

    const filePath = getSafeFilePath(req.url);

    if (!filePath) {
        res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Forbidden');
        return;
    }

    fs.stat(filePath, (err, stats) => {
        if (err) {
            // File not found -> Fallback to index.html for Single Page Application client-side routing
            const indexPath = path.join(ROOT_DIR, 'index.html');
            fs.readFile(indexPath, (readErr, indexData) => {
                if (readErr) {
                    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
                    res.end('404 Not Found');
                } else {
                    res.writeHead(200, {
                        'Content-Type': 'text/html; charset=utf-8',
                        'Cache-Control': 'no-cache'
                    });
                    res.end(indexData);
                }
            });
            return;
        }

        let targetPath = filePath;
        if (stats.isDirectory()) {
            targetPath = path.join(filePath, 'index.html');
        }

        fs.readFile(targetPath, (readErr, data) => {
            if (readErr) {
                res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end(`500 Internal Server Error: ${readErr.message}`);
                return;
            }

            const ext = path.extname(targetPath).toLowerCase();
            const contentType = MIME_TYPES[ext] || 'application/octet-stream';

            res.writeHead(200, {
                'Content-Type': contentType,
                'Content-Length': data.length,
                'Cache-Control': 'no-cache, must-revalidate',
                'Access-Control-Allow-Origin': '*'
            });

            if (req.method === 'HEAD') {
                res.end();
            } else {
                res.end(data);
            }
        });
    });
}

function openBrowser(url) {
    if (process.env.NO_OPEN === 'true') return;
    const platform = process.platform;
    let command = '';

    if (platform === 'win32') {
        command = `start "" "${url}"`;
    } else if (platform === 'darwin') {
        command = `open "${url}"`;
    } else {
        command = `xdg-open "${url}"`;
    }

    exec(command, (err) => {
        // Silently ignore if automated browser opening isn't supported in environment
    });
}

function startServer(port, attemptsLeft = 5) {
    const server = http.createServer(serveStatic);

    server.listen(port, () => {
        const url = `http://localhost:${port}`;
        console.log('\n======================================================');
        console.log('   🎓 BMC Academia - Localhost Server is Running!     ');
        console.log('======================================================');
        console.log(`\n  Local:   ${url}`);
        console.log(`  Network: http://127.0.0.1:${port}`);
        console.log('\n  Press Ctrl + C to stop the server.\n');

        // Automatically open in default browser
        openBrowser(url);
    });

    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE' && attemptsLeft > 0) {
            console.log(`Port ${port} is in use, trying port ${port + 1}...`);
            startServer(port + 1, attemptsLeft - 1);
        } else {
            console.error('Server error:', err);
            process.exit(1);
        }
    });

    // Graceful shutdown
    process.on('SIGINT', () => {
        console.log('\nStopping BMC Academia server...');
        server.close(() => {
            console.log('Server stopped. Goodbye!');
            process.exit(0);
        });
    });
}

startServer(DEFAULT_PORT);
