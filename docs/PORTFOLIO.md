# Portfolio presentation

## CV — compact version

**OpsBoard — Full-stack Operations Management Platform**  
Angular, TypeScript, Signals, RxJS, NestJS, PostgreSQL, Prisma, JWT, Docker, GitHub Actions

Built a full-stack operations platform with reactive Angular state architecture, REST APIs, PostgreSQL persistence, JWT authentication, role/resource authorization, automated tests and containerized CI workflows.

## CV — achievement bullets

- Architected a responsive Angular application using standalone components, lazy loading, Signals, RxJS and typed Reactive Forms.
- Built a modular NestJS REST API backed by Prisma/PostgreSQL with DTO validation and relational domain modeling.
- Implemented JWT authentication plus ADMIN/MANAGER/MEMBER RBAC and resource-level ownership policies.
- Added automated frontend/backend tests and GitHub Actions quality gates for tests, builds and Docker images.
- Containerized the web/API/database stack with multi-stage builds, Nginx and service health checks.

## Interview talking points

1. Explain why repository/store boundaries make the Angular UI easier to change and test.
2. Compare Signals for synchronous feature state with RxJS at asynchronous boundaries.
3. Explain the difference between authentication, role authorization and resource authorization.
4. Walk through User → Project → Task relationships and database indexes in Prisma.
5. Describe how CI catches behavior/build/container regressions before merge.
6. Discuss the documented production tradeoffs: token storage, server-side pagination and observability.

## LinkedIn project description

OpsBoard is a full-stack operations management platform I built to exercise production-oriented TypeScript architecture end to end. The frontend uses Angular standalone components, Signals, RxJS and Reactive Forms; the API uses NestJS with Prisma/PostgreSQL. I implemented JWT authentication, RBAC and resource-level authorization, automated frontend/backend tests, GitHub Actions quality gates, and a Dockerized Angular/Nginx + NestJS + PostgreSQL stack.
