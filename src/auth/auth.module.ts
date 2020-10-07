import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      publicKey: process.env.JWT_PUBLIC_KEY.replace(/\\n/g, '\n'),
      privateKey: process.env.JWT_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
  ],
  providers: [AuthService],
})
export class AuthModule {}
