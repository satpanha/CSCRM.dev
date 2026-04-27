import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

/**
 * Auth Controller - Thin HTTP Layer
 * 
 * Responsibilities:
 * - Parse HTTP requests
 * - Delegate to AuthService
 * - Return HTTP responses
 * 
 * Pattern: Controller never contains business logic
 */
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: any) {
    // TODO: Add login logic via service
    return this.authService.login(loginDto);
  }

  @Post('logout')
  async logout() {
    // TODO: Add logout logic via service
    return this.authService.logout();
  }

  @Get('me')
  async getProfile() {
    // TODO: Add profile retrieval via service
    return this.authService.getProfile();
  }
}
