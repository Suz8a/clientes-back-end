import { Module } from '@nestjs/common';

import { ProspectsController } from './controllers/prospects.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Prospect, ProspectSchema } from './schemas/prospect.schema';
import { ProspectsService } from './services/prospects.service';
import { FilesController } from './controllers/file.controller';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI, {}),
    MongooseModule.forFeature([
      { name: Prospect.name, schema: ProspectSchema },
    ]),
  ],
  controllers: [ProspectsController, FilesController],
  providers: [ProspectsService],
})
export class AppModule {}
