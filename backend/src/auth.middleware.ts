// src/auth/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import * as jwksRsa from 'jwks-rsa';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      secretOrKeyProvider: jwksRsa.expressJwtSecret({
        jwksUri: process.env.AUTH_0_DOMAIN + '/.well-known/jwks.json', // Auth0 JWKS URL
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
      }),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: process.env.AUTH_0_AUDIENCE,
      issuer: process.env.AUTH_0_DOMAIN,
      algorithms: ['RS256'],
    });
  }

  async validate(payload: any) {
    // Optionally validate the payload or fetch user details
    return { userId: payload.sub, username: payload.name }; // Customize based on payload data
  }
}
