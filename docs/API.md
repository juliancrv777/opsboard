# REST API

Base path: `/api`

## Authentication

### POST /auth/login
Validates credentials and returns an access token plus the authenticated user.

Protected resources use:

```text
Authorization: Bearer <access-token>
```

## Projects

- `GET /projects` — list projects with owner and task count.
- `POST /projects` — create a project; ADMIN or MANAGER.
- `PUT /projects/:id` — update according to role/ownership policy.
- `DELETE /projects/:id` — delete according to role/ownership policy.

## Tasks

- `GET /tasks` — list tasks with project and assignee.
- `POST /tasks` — create according to assignment policy.
- `PUT /tasks/:id` — update according to role/assignee policy.
- `DELETE /tasks/:id` — delete according to role/assignee policy.

## Users\n\n- `GET /users` — list authenticated workspace members for team, owner and assignee selection.\n\n## Health

### GET /health
Returns healthy only after a database query succeeds. Intended for container/orchestrator health checks.

## Validation

The global NestJS ValidationPipe enables whitelist mode, rejects unknown properties and transforms supported values. Invalid DTOs receive 4xx responses before reaching application services.
