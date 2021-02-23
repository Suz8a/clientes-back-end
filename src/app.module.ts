import { Module } from '@nestjs/common';
import { ProspectsController } from './controllers/prospects.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Prospect, ProspectSchema } from './schemas/prospect.schema';
import { ProspectsService } from './services/prospects.service';
import { FilesController } from './controllers/file.controller';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { UsersService } from './services/users.service';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthService } from './services/auth.service';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI, {}),
    MongooseModule.forFeature([
      { name: Prospect.name, schema: ProspectSchema },
    ]),
  ],
  controllers: [ProspectsController, FilesController, LocalAuthGuard],
  providers: [ProspectsService, UsersService, LocalStrategy, AuthService],
})
export class AppModule {}
