import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(),
    ProductsModule,
    UsersModule,
    LoginModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    {
      // Bootstraps generic validation globally
      // Based on the decorators in *.dto.ts
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ],
})
export class AppModule {}
