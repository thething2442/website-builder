import { Module } from '@nestjs/common';
import { SignUpModule } from './sign-up/sign-up.module';
import { PrismaModule } from './prisma/prisma.module';
import { SignInModule } from './sign-in/sign-in.module';
import { UserModule } from './user/user.module';
import { JwtStrategy } from './jwt.strategy';
import { UserWebsitesModule } from './user-websites/user-websites.module';
@Module({
  imports: [SignUpModule,PrismaModule, SignInModule, UserModule, UserWebsitesModule],
  controllers: [],
  providers: [JwtStrategy],
})
export class AppModule {}
