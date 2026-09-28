import { PrismaClient, ProjectStatus, TaskPriority, TaskStatus, UserRole } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('OpsBoard123!', 12);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@opsboard.dev' },
    update: { name: 'Julian Carvalho', role: UserRole.ADMIN, passwordHash },
    create: { name: 'Julian Carvalho', email: 'admin@opsboard.dev', passwordHash, role: UserRole.ADMIN },
  });
  const manager = await prisma.user.upsert({
    where: { email: 'marina@opsboard.dev' },
    update: { name: 'Marina Costa', role: UserRole.MANAGER },
    create: { name: 'Marina Costa', email: 'marina@opsboard.dev', passwordHash, role: UserRole.MANAGER },
  });
  const member = await prisma.user.upsert({
    where: { email: 'lucas@opsboard.dev' },
    update: { name: 'Lucas Rocha', role: UserRole.MEMBER },
    create: { name: 'Lucas Rocha', email: 'lucas@opsboard.dev', passwordHash, role: UserRole.MEMBER },
  });

  const projects = [
    { id: 'demo-project-platform', name: 'Platform Reliability', description: 'Improve operational resilience, health checks and production observability.', status: ProjectStatus.ACTIVE, dueDate: new Date('2026-11-14'), progress: 68, ownerId: admin.id },
    { id: 'demo-project-onboarding', name: 'Customer Onboarding', description: 'Streamline onboarding workflows and reduce time-to-value for new customers.', status: ProjectStatus.ACTIVE, dueDate: new Date('2026-10-30'), progress: 42, ownerId: manager.id },
    { id: 'demo-project-analytics', name: 'Operations Analytics', description: 'Deliver a consolidated operational metrics and reporting experience.', status: ProjectStatus.PLANNING, dueDate: new Date('2026-12-12'), progress: 18, ownerId: manager.id },
    { id: 'demo-project-mobile', name: 'Mobile Workflow Audit', description: 'Review responsive workflows and accessibility across core operational journeys.', status: ProjectStatus.COMPLETED, dueDate: new Date('2026-09-20'), progress: 100, ownerId: admin.id },
  ];
  for (const project of projects) await prisma.project.upsert({ where: { id: project.id }, update: project, create: project });

  const tasks = [
    { id: 'demo-task-health', title: 'Harden production health checks', status: TaskStatus.DONE, priority: TaskPriority.HIGH, dueDate: new Date('2026-10-03'), projectId: projects[0].id, assigneeId: admin.id },
    { id: 'demo-task-alerts', title: 'Define alerting thresholds', status: TaskStatus.IN_PROGRESS, priority: TaskPriority.URGENT, dueDate: new Date('2026-10-08'), projectId: projects[0].id, assigneeId: member.id },
    { id: 'demo-task-onboarding', title: 'Map onboarding friction points', status: TaskStatus.REVIEW, priority: TaskPriority.HIGH, dueDate: new Date('2026-10-05'), projectId: projects[1].id, assigneeId: manager.id },
    { id: 'demo-task-template', title: 'Create implementation checklist', status: TaskStatus.TODO, priority: TaskPriority.MEDIUM, dueDate: new Date('2026-10-12'), projectId: projects[1].id, assigneeId: member.id },
    { id: 'demo-task-kpis', title: 'Define operations KPI model', status: TaskStatus.IN_PROGRESS, priority: TaskPriority.HIGH, dueDate: new Date('2026-10-18'), projectId: projects[2].id, assigneeId: manager.id },
    { id: 'demo-task-a11y', title: 'Complete responsive accessibility audit', status: TaskStatus.DONE, priority: TaskPriority.MEDIUM, dueDate: new Date('2026-09-18'), projectId: projects[3].id, assigneeId: admin.id },
  ];
  for (const task of tasks) await prisma.task.upsert({ where: { id: task.id }, update: task, create: task });
}

main().finally(() => prisma.$disconnect());
