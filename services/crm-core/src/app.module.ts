import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Infrastructure
import { PrismaModule } from './infrastructure/prisma/prisma.module';
import { RedisModule } from './infrastructure/redis/redis.module';

// Feature Modules
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { LeadsModule } from './modules/leads/leads.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { RealtimeModule } from './modules/realtime/realtime.module';

/**
 * AppModule - Root Module
 * Imports:
 * 1. Infrastructure modules (Prisma, Redis)
 * 2. Feature modules (Auth, Users, Leads, Contacts, Notifications, Realtime)
 */
@Module({
  imports: [
    // Infrastructure
    PrismaModule,
    RedisModule,
    // Feature Modules
    AuthModule,
    UsersModule,
    LeadsModule,
    ContactsModule,
    NotificationsModule,
    RealtimeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
