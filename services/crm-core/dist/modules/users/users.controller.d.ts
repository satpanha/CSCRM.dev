import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
