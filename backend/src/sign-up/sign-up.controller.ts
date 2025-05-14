import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSignUpDto } from './dto/create-sign-up.dto';
import { UpdateSignUpDto } from './dto/update-sign-up.dto';

@Controller('sign-up')
export class SignUpController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async create(@Body() createSignUpDto: CreateSignUpDto) {
    return this.prisma.user.create({
      data: createSignUpDto, // Assuming you are passing the CreateSignUpDto correctly
    });
  }

  @Get()
  async findAll() {
    return this.prisma.user.findMany();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSignUpDto: UpdateSignUpDto
  ) {
    return this.prisma.user.update({
      where: { id },
      data: updateSignUpDto,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
