FROM node:alpine as base

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN corepack enable pnpm

RUN rm -rf node_modules && pnpm install

COPY . .

RUN pnpm build

CMD ["node", "dist/index.js"]
