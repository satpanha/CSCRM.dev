import { PrismaService } from '../../infrastructure/prisma/prisma.service';
export declare class LeadsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        message: string;
    }>;
    findOne(id: string): Promise<{
        message: string;
    }>;
    create(createLeadDto: any): Promise<{
        message: string;
    }>;
}
