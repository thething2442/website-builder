import { Test, TestingModule } from '@nestjs/testing';
import { UserWebsitesController } from './user-websites.controller';
import { UserWebsitesService } from './user-websites.service';

describe('UserWebsitesController', () => {
  let controller: UserWebsitesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserWebsitesController],
      providers: [UserWebsitesService],
    }).compile();

    controller = module.get<UserWebsitesController>(UserWebsitesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
