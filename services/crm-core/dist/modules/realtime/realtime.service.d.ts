import { RedisService } from '../../infrastructure/redis/redis.service';
export declare class RealtimeService {
    private readonly redis;
    constructor(redis: RedisService);
    broadcastEvent(event: string, data: any): Promise<{
        message: string;
    }>;
    getUserPresence(userId: string): Promise<{
        message: string;
    }>;
}
