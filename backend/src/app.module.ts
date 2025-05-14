import { Module } from '@nestjs/common';
import { SignUpModule } from './sign-up/sign-up.module';
import { PrismaModule } from './prisma/prisma.module';
import { SignInModule } from './sign-in/sign-in.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [SignUpModule,PrismaModule, SignInModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
