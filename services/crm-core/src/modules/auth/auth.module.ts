/**
 * Auth Module - Authentication & Authorization
 * 
 * Responsibilities:
 * - User login/logout
 * - JWT token generation and validation
 * - Session management
 * 
 * Do NOT:
 * - Call other module services directly
 * - Handle user creation (delegate to UsersModule)
 */

import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from '../../infrastructure/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
