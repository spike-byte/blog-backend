import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { PostController } from './post.controller';
import { Post } from './post.model';

@Module({
  imports: [TypegooseModule.forFeature([Post])],
  controllers: [PostController],
})
export class PostModule {}
