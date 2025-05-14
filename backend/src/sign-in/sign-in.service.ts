import { Injectable } from '@nestjs/common';
import { CreateSignInDto } from './dto/create-sign-in.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { HttpException, HttpStatus } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';  // You can install jsonwebtoken to generate a token

@Injectable()
export class UserSignInService {
  constructor(private prisma: PrismaService) {}

  async login(createSignInDto: CreateSignInDto) {
    // Find the user by email
    const user = await this.prisma.user.findUnique({
      where: { email: createSignInDto.email },
    });

    // If user not found, throw a 404 error
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    // If the user doesn't have a password, throw a 400 error
    if (!user.password) {
      throw new HttpException('No password set for user', HttpStatus.BAD_REQUEST);
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(createSignInDto.password, user.password);

    // If the password is invalid, throw a 401 error
    if (!isPasswordValid) {
      throw new HttpException('Invalid password', HttpStatus.UNAUTHORIZED);
    }

    // Generate a JWT token (optional, if you want to implement token-based authentication)
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      'your_jwt_secret', // Secret key, store it securely (use .env in production)
      { expiresIn: '1h' } // Token expiration (e.g., 1 hour)
    );

    // Return the user along with the token
    return { user, token };
  }
}
