import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';

/**
 * Redis Module - Cache & Real-time Infrastructure
 * 
 * Exports:
 * - RedisService: Global cache and pub/sub access
 */
@Module({
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}
