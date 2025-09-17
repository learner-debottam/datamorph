# Stage 1: Build
FROM node:20-slim AS builder
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy root package.json + pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies (all workspaces)
RUN pnpm install --frozen-lockfile

# Copy web workspace
COPY apps/web ./apps/web

# Build Next.js
RUN pnpm --filter web build

# Stage 2: Production
FROM node:20-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/web/.next ./apps/web/.next
COPY --from=builder /app/apps/web/public ./apps/web/public
COPY --from=builder /app/apps/web/package.json ./apps/web/package.json
COPY --from=builder /app/apps/web/src ./apps/web/src
COPY --from=builder /app/apps/web/styles ./apps/web/styles

EXPOSE 3000
CMD ["pnpm", "--filter", "web", "start"]
