/**
 * Leads Module - Sales Pipeline Management
 * 
 * Responsibilities:
 * - Lead CRUD operations
 * - Lead status tracking
 * - Lead assignment
 */

import { Module } from '@nestjs/common';
import { LeadsController } from './leads.controller';
import { LeadsService } from './leads.service';
import { PrismaModule } from '../../infrastructure/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LeadsController],
  providers: [LeadsService],
  exports: [LeadsService],
})
export class LeadsModule {}
