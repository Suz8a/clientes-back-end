import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { CreateProspectDto } from 'src/dto/create-prospect.dto';
import { UpdateStatusDto } from 'src/dto/update-status.dto';
import { EvaluadorGuard } from 'src/guards/evaluador.guard';
import { PromotorGuard } from 'src/guards/promotor.guard';
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
  @UseGuards(PromotorGuard)
  async createProspect(@Body() createProspectDto: CreateProspectDto) {
    return this.prospectsService.create(createProspectDto);
  }

  @Patch(':id/status')
  @UseGuards(EvaluadorGuard)
  async updateProspectStatusById(
    @Param('id') id,
    @Body() { status, motivoRechazo }: UpdateStatusDto,
  ) {
    return this.prospectsService.updateStatusById(id, status, motivoRechazo);
  }
}
