import { PrismaService } from '../../infrastructure/prisma/prisma.service';
export declare class AuthService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    login(loginDto: any): Promise<{
        message: string;
    }>;
    logout(): Promise<{
        message: string;
    }>;
    getProfile(): Promise<{
        message: string;
    }>;
}
