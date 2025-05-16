import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserWebsitesService } from './user-websites.service';
import { CreateUserWebsiteDto } from './dto/create-user-website.dto';
import { UpdateUserWebsiteDto } from './dto/update-user-website.dto';

@Controller('user-websites')
export class UserWebsitesController {
  constructor(private readonly userWebsitesService: UserWebsitesService) {}

  @Post()
  create(@Body() createUserWebsiteDto: CreateUserWebsiteDto) {
    return this.userWebsitesService.create(createUserWebsiteDto);
  }

  @Get()
  findAll() {
    return this.userWebsitesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userWebsitesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserWebsiteDto: UpdateUserWebsiteDto) {
    return this.userWebsitesService.update(+id, updateUserWebsiteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userWebsitesService.remove(+id);
  }
}
