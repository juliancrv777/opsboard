# Deployment

OpsBoard is containerized as three services: Angular/Nginx, NestJS API and PostgreSQL.

## Required secrets

- `POSTGRES_PASSWORD`: strong database password.
- `JWT_SECRET`: long random signing secret. Never commit the production value.

## Production checklist

1. Store secrets in the deployment platform's secret manager.
2. Use managed PostgreSQL where possible and enable backups.
3. Run Prisma migrations as a release step before the API rollout.
4. Terminate TLS at the platform/load balancer and expose only HTTPS publicly.
5. Restrict database networking to the API service.
6. Set `FRONTEND_URL` to the deployed web origin.
7. Monitor `/api/health` and the web `/health` endpoint.
8. Rotate JWT/database secrets if exposure is suspected.

The compose file is intended for reproducible local/staging operation. Production infrastructure should inject secrets rather than rely on its development fallbacks.
