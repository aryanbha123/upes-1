# Bloggy: MERN Blog App

> A small full-stack blog app: write a post in a React form, store it in MongoDB through an Express API, and list every post.

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

## About

Bloggy is a learning project built around a minimal create-and-list flow. The frontend is a React 19 + TypeScript app built with Vite and styled with Tailwind CSS v4. The backend is an Express server that saves blog posts to MongoDB with Mongoose.

## Features

- **Create a post**: a form with a title and content field posts to the API and shows a success or failure alert.
- **List posts**: fetches every post and shows its title, content and creation time.
- **Timestamps**: the Mongoose `Blog` model records `createdAt` and `updatedAt` automatically.
- **Health check**: a `/health` endpoint reports the service name, version and current time.
- **Docker setup** for the frontend dev server (`Dockerfile` + `docker-compose.yml`).

## Tech Stack

| Layer | Tools |
|---|---|
| Frontend | React 19, TypeScript, Vite, React Router 7, Axios, Tailwind CSS 4, React Compiler (Babel preset) |
| Backend | Node.js (ES modules), Express, Mongoose, CORS |
| Database | MongoDB |
| Tooling | ESLint, nodemon, Docker Compose |

## Project Structure

```
upes-1/
├── backend/
│   ├── index.js          # Express app and routes
│   ├── config.js         # PORT and MongoDB connection string
│   └── model/Blog.js     # Mongoose Blog schema
└── frontend/
    ├── src/
    │   ├── App.tsx       # routes: /, /create-blog, /list-blogs
    │   ├── compoents/    # HomePage, BlogPage (create form), BlogList
    │   ├── shared/       # Header
    │   ├── config.ts     # BASE_URL of the API
    │   └── ApiRoutes.ts
    ├── Dockerfile
    └── docker-compose.yml
```

## Getting Started

### Prerequisites

- Node.js 18+
- A MongoDB database (local or Atlas)

### Backend

```bash
cd backend
npm install
npm install express        # express is listed in the root package.json, not backend/
npx nodemon index.js       # or: npm run dev, with nodemon installed globally
```

The API listens on `http://localhost:3000`. The port and the MongoDB connection string (`PORT`, `MONGO_URI`) are set in `backend/config.js`. Point `MONGO_URI` at your own database, ideally by reading it from an environment variable instead of committing it.

### Frontend

```bash
cd frontend
npm install
npm run dev        # Vite dev server on port 6000
```

The frontend calls the API at `BASE_URL` in `frontend/src/config.ts` (`http://localhost:3000` by default).

Other scripts: `npm run build`, `npm run lint`, `npm run preview`.

### With Docker (frontend only)

```bash
cd frontend
docker compose up --build
```

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/create-blog` | Create a post. Body: `{ "title": string, "content": string }` |
| `GET` | `/get-blogs` | Return all posts as `{ data: Blog[] }` |
| `GET` | `/health` | Service name, version and current timestamp |

## Author

**Aryan Bhandari**: [GitHub](https://github.com/aryanbha123)
