import { Injectable } from '@nestjs/common';
import { CreateUserWebsiteDto } from './dto/create-user-website.dto';
import { UpdateUserWebsiteDto } from './dto/update-user-website.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserWebsitesService {
  constructor(private prisma: PrismaService) {}

  create(createUserWebsiteDto: CreateUserWebsiteDto) {
    return this.prisma.websiteData.create({
      data: createUserWebsiteDto,
    });
  }

  findAll() {
    return this.prisma.websiteData.findMany();
  }

  findOne(id: string) {
    return this.prisma.websiteData.findUnique({
      where: { id },
    });
  }

  update(id: string, updateUserWebsiteDto: UpdateUserWebsiteDto) {
    return this.prisma.websiteData.update({
      where: { id },
      data: updateUserWebsiteDto,
    });
  }

  remove(id: string) {
    return this.prisma.websiteData.delete({
      where: { id },
    });
  }
}
