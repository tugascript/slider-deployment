import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { static as expressStatic } from 'express';
import { join } from 'path';
import helmet from 'helmet';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.use(expressStatic(join(__dirname, '..', 'client')));
  app.use(helmet());
  await app.listen(configService.get<number>('port'));
}
bootstrap();
