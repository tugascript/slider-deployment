import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { config } from './config/config';
import { validationSchema } from './config/validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema,
      load: [config],
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
