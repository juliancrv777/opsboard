# Architecture

## Goals

OpsBoard is structured around explicit boundaries so UI, state, transport and persistence can evolve independently.

## Frontend

Each business feature owns its models, data adapter, state and presentation. Components consume stores; stores derive state with Angular Signals and delegate I/O to repositories. Repositories own HttpClient mapping.

This keeps pages thin and makes state logic independently testable.

## Backend

NestJS modules map to business capabilities. Controllers handle HTTP concerns, services implement application behavior, Prisma owns persistence, and authentication/authorization remain cross-cutting modules.

## Request lifecycle

1. Angular sends a request through the auth interceptor.
2. The API JWT guard verifies the bearer token.
3. RolesGuard evaluates endpoint-level role requirements when present.
4. Controllers validate DTOs through the global ValidationPipe.
5. Services enforce resource policies through AuthzService.
6. Prisma persists or queries PostgreSQL.
7. Repositories map API responses into frontend domain models.
8. Feature stores update Signals and computed state updates the UI.

## Tradeoffs

### Signals without NgRx
The current domain is intentionally small enough that Angular-native Signals provide predictable state without the ceremony of a global store. A larger cross-feature event model could justify NgRx later.

### JWT access token storage
The current portfolio implementation persists the access token client-side for a simple runnable flow. A production evolution should use short-lived access tokens plus refresh-token rotation in Secure, HttpOnly cookies.

### Client-side filtering
Project/task filtering currently demonstrates reactive UI behavior. At larger data volumes, filtering and pagination belong in API query parameters with database indexes supporting them.

### Monorepo without workspace tooling
Frontend and backend live together for discoverability and simple Docker orchestration. Nx/Turborepo would become useful when shared packages, many applications or heavier build caching justify it.
