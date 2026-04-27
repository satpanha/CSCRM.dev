import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

/**
 * Prisma Module - Database Infrastructure
 * 
 * Exports:
 * - PrismaService: Global database access
 */
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
