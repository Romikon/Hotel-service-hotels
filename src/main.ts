import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';
import { config } from './config/config';

const appSwaggerSchema = new DocumentBuilder()
  .setTitle('Hotel Service')
  .setDescription('Hotel service API')
  .build();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const logger = new Logger();

  const document = SwaggerModule.createDocument(app, appSwaggerSchema);
  SwaggerModule.setup('api', app, document);

  await app.listen(config.port);
  logger.log(`Application is running on: http://localhost:${config.port}`);
}
bootstrap();
