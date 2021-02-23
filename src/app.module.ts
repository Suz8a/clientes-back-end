import { Module } from '@nestjs/common';
import { ProspectsController } from './controllers/prospects.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Prospect, ProspectSchema } from './schemas/prospect.schema';
import { ProspectsService } from './services/prospects.service';
import { FilesController } from './controllers/file.controller';
import { AuthController } from './controllers/auth.controller';
import { UsersService } from './services/users.service';
import { AuthService } from './services/auth.service';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI, {}),
    MongooseModule.forFeature([
      { name: Prospect.name, schema: ProspectSchema },
    ]),
  ],
  controllers: [ProspectsController, FilesController, AuthController],
  providers: [ProspectsService, UsersService, AuthService, LocalStrategy],
})
export class AppModule {}
