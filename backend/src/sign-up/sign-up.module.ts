import { Module } from '@nestjs/common';
import { UserSignUpService } from './sign-up.service';
import { SignUpController } from './sign-up.controller';

@Module({
  controllers: [SignUpController],
  providers: [UserSignUpService],
})
export class SignUpModule {}