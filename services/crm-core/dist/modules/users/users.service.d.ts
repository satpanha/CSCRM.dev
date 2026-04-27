import { PrismaService } from '../../infrastructure/prisma/prisma.service';
export declare class UsersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll(): Promise<{
        message: string;
    }>;
    findOne(id: string): Promise<{
        message: string;
    }>;
    create(createUserDto: any): Promise<{
        message: string;
    }>;
}
