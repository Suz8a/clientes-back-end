import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProspectDto } from 'src/dto/create-prospect.dto';
import { ProspectDocument, Prospect } from 'src/schemas/prospect.schema';

@Injectable()
export class ProspectsService {
  constructor(
    @InjectModel(Prospect.name) private prospectModel: Model<ProspectDocument>,
  ) {}

  async findAll(): Promise<Prospect[]> {
    return this.prospectModel.find().exec();
  }

  async findById(id: string): Promise<Prospect> {
    return this.prospectModel.findById(id).exec();
  }

  async create(createProspectDto: CreateProspectDto): Promise<Prospect> {
    const createdProspect = new this.prospectModel(createProspectDto);
    return createdProspect.save();
  }
  async updateStatusById(id: string, status: string): Promise<Prospect> {
    return this.prospectModel.updateOne(
      { _id: id, status: 'enviado' },
      { estatus: status },
    );
  }
}
