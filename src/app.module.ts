import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProspectsController } from './controllers/prospects.controller';

@Module({
  imports: [],
  controllers: [AppController, ProspectsController],
  providers: [AppService],
})
export class AppModule {}
