import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  // Create a new user
  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  // Get all users
  findAll() {
    return this.prisma.user.findMany();
  }

  // Get a single user by ID
  findOne(id: any) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  // Update a user by ID
  update(id: any, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  // Delete a user by ID
  remove(id: any) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
