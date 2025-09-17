# Stage 1: Build
FROM node:20-slim AS builder
WORKDIR /app

RUN npm install -g pnpm

# Copy root package.json + lockfile
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm@8.15.0
RUN pnpm install --frozen-lockfile

# Copy API workspace
COPY apps/api ./apps/api

# Build TypeScript
RUN pnpm --filter api build

# Stage 2: Production
FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/api/dist ./apps/api/dist
COPY --from=builder /app/apps/api/package.json ./apps/api/package.json

EXPOSE 4000
CMD ["node", "apps/api/dist/index.js"]
