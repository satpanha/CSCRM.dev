import { PrismaService } from '../../infrastructure/prisma/prisma.service';
export declare class NotificationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        message: string;
    }>;
    send(sendDto: any): Promise<{
        message: string;
    }>;
}
