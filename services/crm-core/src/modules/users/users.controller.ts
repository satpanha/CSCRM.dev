import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';

/**
 * Users Controller - Thin HTTP Layer
 */
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    // TODO: List all users
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    // TODO: Get user by ID
    return this.usersService.findOne(id);
  }

  @Post()
  async create(@Body() createUserDto: any) {
    // TODO: Create new user
    return this.usersService.create(createUserDto);
  }
}
