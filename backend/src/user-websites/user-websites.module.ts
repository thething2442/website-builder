import { Module } from '@nestjs/common';
import { UserWebsitesService } from './user-websites.service';
import { UserWebsitesController } from './user-websites.controller';

@Module({
  controllers: [UserWebsitesController],
  providers: [UserWebsitesService],
})
export class UserWebsitesModule {}
