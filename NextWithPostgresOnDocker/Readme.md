# Next with Postgres on Docker

## Tech Stack

1. Framework: Next.js (React, Node, TypeScript, Eslint)
1. Db: Postgres (Docker)
1. ORM: Prisma
1. Auth: NextAuth.js
1. CSS Lib: TailwindCSS

## Init project

1. `npx create-next-app@latest`
1. `npm install prisma --save-dev`
1. `npx prisma init`
1. `npm install @prisma/client @auth/prisma-adapter`
1. `npm install next-auth`
1. `npm install @next-auth/prisma-adapter`
1. `prisma generate`
1. `docker compose up`
1. `npx prisma migrate dev`
1. `npx prisma studio`
1. `npm i @nextui-org/react framer-motion`
1. `npm i react-toastify`
1. `npm i react-icons`
1. Init Google Oauth client id
    - oauth client id: <https://console.cloud.google.com/apis/credentials/oauthclient>
    - Web Application
    - Javascript origin: <http://localhost:3000> (for local development)
    - Redirect URI: <http://localhost:3000/api/auth/callback/google>
    - Copy secret to .env.local
1. `npm i axios`
1. `npm run dev`
