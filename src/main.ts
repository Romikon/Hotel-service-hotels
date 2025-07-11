import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './hotel/config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.port);
  console.log(`Application is running on: http://localhost:${config.port}`);
}
bootstrap();
