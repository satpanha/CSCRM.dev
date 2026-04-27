import { PrismaService } from '../../infrastructure/prisma/prisma.service';
export declare class ContactsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        message: string;
    }>;
    findOne(id: string): Promise<{
        message: string;
    }>;
    create(createContactDto: any): Promise<{
        message: string;
    }>;
}
