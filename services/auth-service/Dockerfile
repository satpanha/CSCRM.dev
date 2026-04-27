FROM node:20-alpine AS deps
WORKDIR /app
COPY ./services/auth-service/package*.json ./
RUN npm config set fetch-timeout 120000 && npm config set fetch-retry-mintimeout 20000 && npm config set fetch-retry-maxtimeout 120000 && npm ci

FROM node:20-alpine AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY ./services/auth-service . 
COPY ./prisma ./prisma
RUN npx prisma generate
RUN npm run build

FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY ./services/auth-service/package*.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules/@prisma ./node_modules/@prisma
COPY ./prisma ./prisma
EXPOSE 3000
CMD ["node", "dist/main"]
