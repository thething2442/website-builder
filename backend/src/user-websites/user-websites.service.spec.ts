import { Test, TestingModule } from '@nestjs/testing';
import { UserWebsitesService } from './user-websites.service';

describe('UserWebsitesService', () => {
  let service: UserWebsitesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserWebsitesService],
    }).compile();

    service = module.get<UserWebsitesService>(UserWebsitesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
