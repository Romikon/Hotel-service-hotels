import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './hotel/config/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const appSwaggerSchema = new DocumentBuilder()
  .setTitle('Hotel Service')
  .setDescription('Hotel service API')
  .build();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, appSwaggerSchema);
  SwaggerModule.setup('api', app, document);

  await app.listen(config.port);
  console.log(`Application is running on: http://localhost:${config.port}`);
}
bootstrap();
