/**
 * Users Module - User Management
 * 
 * Responsibilities:
 * - User CRUD operations
 * - User profile management
 * - Role/permission management
 * 
 * Do NOT:
 * - Handle authentication (delegate to AuthModule)
 * - Call other module services directly
 */

import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaModule } from '../../infrastructure/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
