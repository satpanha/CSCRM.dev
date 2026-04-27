import { Controller, Get, Post, Body } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

/**
 * Notifications Controller - Thin HTTP Layer
 */
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get()
  async findAll() {
    // TODO: List all notifications
    return this.notificationsService.findAll();
  }

  @Post('send')
  async send(@Body() sendDto: any) {
    // TODO: Enqueue notification job
    return this.notificationsService.send(sendDto);
  }
}
