
# Pebble UI (Front-end)

Kid-friendly demo with:
- 3D GLB viewer (drag-and-drop or button loader)
- Big playful buttons (Talk, Calm, Garden, Homework)
- Auto-talk on every reply using offline Web Speech fallback
- Proxy URL field so you can point to your secure backend (no keys in browser)

## Quick Start (GitHub Pages)
1) Upload this folder (`pebble-ui`) to a **public** GitHub repo.
2) Enable GitHub Pages (Settings → Pages → Branch: main → /root).
3) Visit your site, drop your `.glb` file, and click buttons.
4) In the footer, paste your Proxy URL once your backend is deployed.

## Local Test
- Double‑click `index.html` (some browsers block module imports from `file://`).
- If you see module errors, use a local server (e.g., VS Code “Live Server”) or `python -m http.server 8080`.
