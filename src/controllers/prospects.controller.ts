import { Controller, Get, Put, Post, Body } from '@nestjs/common';
import { CreateProspectDto } from 'src/dto/create-prospect.dto';

@Controller('prospects')
export class ProspectsController {
  @Get()
  findAll() {}

  @Get(':id')
  findOne() {}

  @Post()
  createProspect(@Body() createProspectDto: CreateProspectDto) {}

  @Put(':id/status')
  updateProspect(@Body() body) {}
}
