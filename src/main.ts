import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ValidationPipe } from '@nestjs/common';
import { Logger } from '@nestjs/common';

if (!global.crypto) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-require-imports
  global.crypto = require('crypto');
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for GraphQL Playground and API calls
  app.enableCors();

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
