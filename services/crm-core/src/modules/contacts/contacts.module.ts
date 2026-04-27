/**
 * Contacts Module - Contact Management
 * 
 * Responsibilities:
 * - Contact CRUD operations
 * - Contact information management
 * - Contact grouping and tagging
 */

import { Module } from '@nestjs/common';
import { ContactsController } from './contacts.controller';
import { ContactsService } from './contacts.service';
import { PrismaModule } from '../../infrastructure/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ContactsController],
  providers: [ContactsService],
  exports: [ContactsService],
})
export class ContactsModule {}
