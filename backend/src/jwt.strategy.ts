import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKeyProvider: (req: Request, rawJwtToken: string, done: Function) => {
        // Validate JWT here, usually using jwks-rsa or your secret key
        done(null, process.env.AUTH_0_CLIENT_SECRET);  // or use jwks for dynamic key
      },
    });
  }

  async validate(payload: any) {
    // Here, you can validate the JWT payload if necessary
    return { userId: payload.sub, username: payload.name }; // or any other claims
  }
}
