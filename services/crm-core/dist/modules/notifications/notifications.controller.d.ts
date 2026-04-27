import { NotificationsService } from './notifications.service';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    findAll(): Promise<{
        message: string;
    }>;
    send(sendDto: any): Promise<{
        message: string;
    }>;
}
