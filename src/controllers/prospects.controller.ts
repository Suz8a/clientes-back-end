import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { CreateProspectDto } from 'src/dto/create-prospect.dto';
import { Prospect } from 'src/interfaces/prospect.interface';
import { ProspectsService } from 'src/services/prospects.service';

@Controller('prospects')
export class ProspectsController {
  constructor(private prospectsService: ProspectsService) {}

  @Get()
  async findAll(): Promise<Prospect[]> {
    return this.prospectsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id) {
    return this.prospectsService.findById(id);
  }

  @Post()
  async createProspect(@Body() createProspectDto: CreateProspectDto) {
    return this.prospectsService.create(createProspectDto);
  }

  @Patch(':id/status')
  async updateProspectStatusById(
    @Param('id') id,
    @Body('status') status: string,
  ) {
    return this.prospectsService.updateStatusById(id, status);
  }
}
