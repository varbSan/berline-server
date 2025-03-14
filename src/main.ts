import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { NextFunction } from 'express';
import 'dotenv/config';

if (!global.crypto) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports
  global.crypto = require('crypto');
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for API calls
  app.enableCors({ origin: process.env.CLIENT_URL, credentials: true });

  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log('Request Headers:', req.headers);
    next();
  });
  // Global Validation (Optional)
  app.useGlobalPipes(new ValidationPipe());

  // Start the server
  const port = process.env.PORT || 3000;
  await app.listen(port);

  Logger.log(
    `🚀 Server running on http://localhost:${port}/graphql`,
    'Bootstrap',
  );
}
void bootstrap();
