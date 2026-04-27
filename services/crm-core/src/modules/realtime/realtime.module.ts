/**
 * Realtime Module - WebSocket Communication
 * 
 * Responsibilities:
 * - WebSocket connection management
 * - Real-time event broadcasting
 * - Presence management
 */

import { Module } from '@nestjs/common';
import { RealtimeService } from './realtime.service';
import { RedisModule } from '../../infrastructure/redis/redis.module';

@Module({
  imports: [RedisModule],
  providers: [RealtimeService],
  exports: [RealtimeService],
})
export class RealtimeModule {}
