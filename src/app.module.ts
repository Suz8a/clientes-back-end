import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
  controllers: [AppController, ProspectsController, FilesController],
  providers: [AppService, ProspectsService],
})
export class AppModule {}
