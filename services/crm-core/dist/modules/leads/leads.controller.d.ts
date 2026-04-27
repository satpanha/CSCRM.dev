import { LeadsService } from './leads.service';
export declare class LeadsController {
    private readonly leadsService;
    constructor(leadsService: LeadsService);
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
