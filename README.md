# DataMorph Documentation
**Transform Any Data. Anywhere. Effortlessly.**

DataMorph is an AI-powered, low-code/no-code data transformation platform.



## Development

### Requirements
- Node.js 20+
- pnpm 9+
- Python 3.10+
- Docker & Docker Compose

### Setup
```bash
pnpm install
pnpm dev


Run Services

Web (Next.js): pnpm --filter web dev

API (Fastify): pnpm --filter api dev

ML (FastAPI): uvicorn apps/ml/main:app --reload --port 5000

Worker: pnpm --filter worker dev


lsof -i :3000

COMMAND   PID   USER   ...   PORT
node      12345 user   ...   3000

kill -9 12345

Web → http://localhost:3000

API → http://localhost:4000

ML → http://localhost:5000

Worker → logs appear in console


docker system prune -af
docker builder prune -af
docker-compose build --no-cache