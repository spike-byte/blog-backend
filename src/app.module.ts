import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { ContactModule } from './contact/contact.module';
import { ResumeModule } from './resume/resume.module';

@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/nest-blog-api'),
    PostModule,
    ContactModule,
    ResumeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
