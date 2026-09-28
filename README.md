# OpsBoard

Modern operations management platform built with Angular and TypeScript.

> Portfolio project focused on production-oriented frontend architecture, maintainability, testing and real-world engineering practices.

## Vision

OpsBoard is a collaborative workspace for teams to manage projects, tasks, members and operational metrics from one place.

## Planned capabilities

- Authentication and authorization (RBAC)
- Project and task management
- Dashboard and operational metrics
- Search, filters, sorting and pagination
- Reactive Forms with validation
- Angular Signals and RxJS
- Route guards and HTTP interceptors
- REST API integration
- Responsive and accessible UI
- Unit/integration tests
- CI/CD, Docker and deployment

## Architecture

The frontend follows a feature-oriented structure:

```text
src/app/
├── core/       # singleton services, auth, guards and interceptors
├── shared/     # reusable presentational components, pipes and directives
└── features/   # business capabilities loaded by route
```

## Engineering roadmap

1. Angular foundation and architecture
2. Application shell and design system
3. Authentication, guards and interceptors
4. Dashboard and state management
5. Projects and tasks
6. REST API and PostgreSQL backend
7. Role-based access control
8. Automated tests
9. Docker and CI/CD
10. Production deployment and documentation

## Status

🚧 Active development.

## Author

**Julian** — Software Engineer / Frontend Engineer


## Full-stack local development

### Database
```bash
docker compose up -d postgres
```

### API
```bash
cd backend
cp .env.example .env
npm install
npx prisma migrate dev --name init
npm run prisma:seed
npm run start:dev
```

### Frontend
```bash
npm install
npm start
```

The Angular application runs at `http://localhost:4200` and consumes the NestJS API at `http://localhost:3000/api`.

Demo account: `admin@opsboard.dev` / `OpsBoard123!`.


## Run the full stack with Docker

```bash
cp .env.example .env
docker compose up --build
```

- Web: `http://localhost:8080`
- API health: `http://localhost:3000/api/health`
- Web health: `http://localhost:8080/health`

See `docs/DEPLOYMENT.md` for production configuration and secret-management guidance.
