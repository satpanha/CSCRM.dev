import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { LeadsService } from './leads.service';

/**
 * Leads Controller - Thin HTTP Layer
 */
@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Get()
  async findAll() {
    // TODO: List all leads
    return this.leadsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    // TODO: Get lead by ID
    return this.leadsService.findOne(id);
  }

  @Post()
  async create(@Body() createLeadDto: any) {
    // TODO: Create new lead
    return this.leadsService.create(createLeadDto);
  }
}
