import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserSignInService } from './sign-in.service';
import { CreateSignInDto } from './dto/create-sign-in.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('sign-in')
export class SignInController {
  constructor(
    private readonly signInService: UserSignInService, // Inject the signInService
    private readonly prisma: PrismaService, // Inject the PrismaService
  ) {}

  @Post()
  async create(@Body() createSignInDto: CreateSignInDto) {
    // Use PrismaService to create the user or handle the logic in UserSignInService
    return this.signInService.login(createSignInDto);  // This is calling the login method
  }

 
}
