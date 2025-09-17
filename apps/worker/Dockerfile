# Stage 1: Build
FROM node:20-slim AS builder
WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm@8.15.0
RUN pnpm install --frozen-lockfile

COPY apps/worker ./apps/worker

RUN pnpm --filter worker build

# Stage 2: Production
FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/worker/dist ./apps/worker/dist
COPY --from=builder /app/apps/worker/package.json ./apps/worker/package.json

EXPOSE 5001
CMD ["node", "apps/worker/dist/index.js"]
