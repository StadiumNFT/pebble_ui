
# Pebble Proxy (Backend)

Keeps your API key **off** the front-end. Deploy this, then paste the URL into the Pebble UI footer.

## Quick Start (Local)
1) `npm install`
2) Create `.env` from `.env.example` and add your key.
3) `npm start` → http://localhost:8080
4) In the UI, set Proxy URL to your local address while testing.

## Deploy (Render / Railway / Fly / Heroku / Vercel)
- Create a new service from this folder/repo.
- Add environment variable `OPENAI_API_KEY`.
- Deploy. You’ll get a URL like `https://pebble-proxy.onrender.com`.
- Paste that into the UI footer (Proxy URL) and save.
