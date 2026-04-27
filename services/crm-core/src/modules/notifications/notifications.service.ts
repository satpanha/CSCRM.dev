import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/prisma/prisma.service';

/**
 * Notifications Service - Business Logic Layer
 * 
 * Note: This service enqueues jobs, it does NOT send notifications directly.
 * Queue processors (telegram.processor, email.processor) handle actual sending.
 */
@Injectable()
export class NotificationsService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    // TODO: Implement findAll logic
    return { message: 'Find all notifications' };
  }

  async send(sendDto: any) {
    // TODO: Enqueue notification job (don't send directly!)
    return { message: 'Notification queued for delivery' };
  }
}
