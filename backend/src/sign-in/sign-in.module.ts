import { Module } from '@nestjs/common';
import { UserSignInService } from './sign-in.service';
import { SignInController } from './sign-in.controller';

@Module({
  controllers: [SignInController],
  providers: [UserSignInService],
})
export class SignInModule {}
