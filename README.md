# OpsBoard

> A full-stack operations management platform built to demonstrate production-oriented Angular and TypeScript engineering.

[![CI](https://github.com/juliancrv777/opsboard/actions/workflows/ci.yml/badge.svg)](https://github.com/juliancrv777/opsboard/actions/workflows/ci.yml)
[![Container Images](https://github.com/juliancrv777/opsboard/actions/workflows/docker.yml/badge.svg)](https://github.com/juliancrv777/opsboard/actions/workflows/docker.yml)

OpsBoard centralizes projects, tasks, ownership and operational visibility in a responsive SaaS-style workspace. The repository intentionally goes beyond UI implementation: it includes reactive state architecture, a REST API, relational persistence, JWT/RBAC security, automated tests, containerization and CI quality gates.

## What this project demonstrates

- **Angular architecture:** standalone components, lazy routes, Signals, computed state, RxJS and Reactive Forms.
- **Frontend boundaries:** feature stores and repositories keep transport/state concerns out of presentation components.
- **Backend engineering:** NestJS modules, DTO validation, REST resources and Prisma/PostgreSQL persistence.
- **Security:** JWT authentication, bearer-token guards, role-based access control and resource-level authorization.
- **Quality:** unit tests for reactive state and authorization behavior, plus automated CI builds.
- **DevOps:** multi-stage Docker images, Nginx, health checks, Docker Compose and container build verification.

## Architecture

```text
Browser
   │
   ▼
Angular 20 + Nginx
   │  HttpClient / Bearer JWT
   ▼
NestJS REST API
   ├── Auth / JWT / RBAC
   ├── Projects
   ├── Tasks
   └── Health
   │
   ▼
Prisma ORM
   │
   ▼
PostgreSQL
```

Frontend feature flow:

```text
Page / Component → Signal Store → Repository → REST API
                         │
                         └→ computed derived state
```

This boundary means the UI does not know whether data comes from an in-memory adapter, HTTP or another transport.

## Core features

| Area | Capabilities |
| --- | --- |
| Authentication | Login, session restoration, JWT interceptor, auth/guest guards, logout |
| Authorization | ADMIN / MANAGER / MEMBER, role guards, project ownership and task assignment policies |
| Dashboard | Reactive metrics, workload visualization, activity feed, loading/error/empty states |
| Projects | CRUD boundary, search, status filters, pagination, progress, owners and due dates |
| Tasks | CRUD boundary, search, status/priority filters, assignees and project association |
| API | DTO validation, modular NestJS services/controllers, REST resources, health endpoint |
| Database | PostgreSQL, Prisma relations/enums/indexes, seed data |
| Delivery | Docker Compose, multi-stage images, Nginx, CI tests/builds and image validation |

## Tech stack

**Frontend:** Angular 20, TypeScript, Signals, RxJS, Reactive Forms, SCSS  
**Backend:** NestJS, TypeScript, JWT, bcrypt, class-validator  
**Data:** PostgreSQL, Prisma ORM  
**Testing:** Vitest, Jest  
**Infrastructure:** Docker, Docker Compose, Nginx, GitHub Actions

## Security model

Every protected API request must include a verified JWT. Authentication and authorization are deliberately separate:

- `JwtAuthGuard` verifies identity and attaches a typed authenticated user.
- `RolesGuard` evaluates endpoint role metadata.
- `AuthzService` enforces resource-level ownership/assignment rules.
- ADMIN and MANAGER have elevated workspace permissions.
- MEMBER mutations are constrained to resources they own or are assigned.

Production secrets are never committed. See `docs/DEPLOYMENT.md` for deployment guidance.

## Run locally

### Full stack with Docker

```bash
cp .env.example .env
docker compose up --build
```

Web: `http://localhost:8080`  
API health: `http://localhost:3000/api/health`

### Development mode

Start PostgreSQL:

```bash
docker compose up -d postgres
```

Start the API:

```bash
cd backend
cp .env.example .env
npm install
npx prisma migrate dev --name init
npm run prisma:seed
npm run start:dev
```

Start Angular from the repository root:

```bash
npm install
npm start
```

Demo account: `admin@opsboard.dev` / `OpsBoard123!`

## Tests and quality gates

```bash
npm test
cd backend && npm test
```

Pull requests run frontend tests/build, backend Prisma generation/tests/build and container-image validation. This makes compilation and covered behavior part of the merge process rather than a manual check.

## Repository structure

```text
src/app/
├── core/            # authentication, API and cross-cutting concerns
├── features/        # dashboard, projects, tasks and auth
├── layout/          # authenticated application shell
└── shared/          # reusable UI primitives

backend/
├── prisma/          # schema and seed
└── src/
    ├── auth/        # JWT, guards, roles and authorization policies
    ├── projects/    # project REST domain
    ├── tasks/       # task REST domain
    ├── health/      # database-aware health check
    └── prisma/      # database client

docs/                # architecture and deployment decisions
.github/workflows/   # application and container quality gates
```

## Engineering decisions

The project favors **Angular-native Signals** for local feature state instead of adding a state library before the domain requires one. RxJS remains at asynchronous boundaries where streams are valuable. Repositories isolate HTTP concerns so stores stay focused on state transitions and derived data.

Authorization is enforced server-side even when the UI can hide unavailable actions. Role checks alone are insufficient for multi-user data, so resource ownership/assignment policies are kept in a dedicated authorization service.

The container setup separates build and runtime stages. Angular is served by Nginx while the NestJS runtime runs as a non-root user. Health checks cover both the web server and database connectivity.

## Roadmap

- Refresh-token rotation with HttpOnly cookies
- Server-side pagination/query filtering
- Audit log and comments
- E2E browser tests
- Observability and structured logging
- Cloud deployment with managed PostgreSQL

## Author

Built by **Julian** as a portfolio project focused on Software Engineering / Frontend Engineering roles and production-oriented TypeScript development.

MIT licensed.
