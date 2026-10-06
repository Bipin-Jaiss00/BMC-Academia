#!/usr/bin/env bash
# BMC Academia - Localhost Launcher for macOS and Linux

echo "========================================================"
echo "       🎓 Starting BMC Academia Local Server..."
echo "========================================================"
echo ""

PORT=3000

# Function to open URL in default browser
open_url() {
    URL="$1"
    if command -v xdg-open > /dev/null; then
        xdg-open "$URL" > /dev/null 2>&1 &
    elif command -v open > /dev/null; then
        open "$URL" > /dev/null 2>&1 &
    fi
}

# 1. Try Node.js
if command -v node > /dev/null 2>&1; then
    echo "[OK] Node.js detected. Starting server with Node..."
    node server.js
    exit 0
fi

# 2. Try Python 3
if command -v python3 > /dev/null 2>&1; then
    echo "[OK] Python 3 detected. Starting server on http://localhost:$PORT ..."
    open_url "http://localhost:$PORT"
    python3 -m http.server "$PORT"
    exit 0
fi

# 3. Try Python
if command -v python > /dev/null 2>&1; then
    echo "[OK] Python detected. Starting server on http://localhost:$PORT ..."
    open_url "http://localhost:$PORT"
    python -m http.server "$PORT"
    exit 0
fi

# 4. Fallback: Open index.html directly
echo "[NOTE] Neither Node.js nor Python was found."
echo "Opening index.html directly in your default browser..."
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
open_url "$SCRIPT_DIR/index.html"
