import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  // 接入swagger文档
  const config = new DocumentBuilder()
    .setTitle('blog-api')
    .setDescription('blog api based on nestjs')
    .setVersion('1.0')
    .addTag('spike-byte')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-blog', app, document);

  await app.listen(7788);
}
bootstrap();
