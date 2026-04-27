/**
 * Notifications Module - Email, SMS, Telegram, Push Notifications
 * 
 * Responsibilities:
 * - Notification CRUD
 * - Notification templates
 * - Notification delivery orchestration
 * 
 * Do NOT:
 * - Actually send notifications (queue processors handle that)
 * - Store credentials (use environment variables)
 */

import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { PrismaModule } from '../../infrastructure/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [NotificationsController],
  providers: [NotificationsService],
  exports: [NotificationsService],
})
export class NotificationsModule {}
