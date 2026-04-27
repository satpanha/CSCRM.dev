import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ContactsService } from './contacts.service';

/**
 * Contacts Controller - Thin HTTP Layer
 */
@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  async findAll() {
    // TODO: List all contacts
    return this.contactsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    // TODO: Get contact by ID
    return this.contactsService.findOne(id);
  }

  @Post()
  async create(@Body() createContactDto: any) {
    // TODO: Create new contact
    return this.contactsService.create(createContactDto);
  }
}
