import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSignUpDto } from './dto/create-sign-up.dto';
import * as bcrypt from 'bcryptjs';
@Injectable()
export class UserSignUpService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateSignUpDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    return this.prisma.user.create({
      data: {
        email: createUserDto.email,
        password: hashedPassword,
        
      },
    });
  }
}
