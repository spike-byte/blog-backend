import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiProperty, ApiTags } from '@nestjs/swagger';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { IsNotEmpty } from 'class-validator';
import { InjectModel } from 'nestjs-typegoose';
import { Post as PostSchema } from './post.model';

class createPostBody {
  @ApiProperty({ description: '帖子标题', example: '帖子标题1' })
  @IsNotEmpty({ message: '标题不能为空！' })
  title: string;
  @ApiProperty({ description: '帖子描述', example: '帖子内容1' })
  @IsNotEmpty({ message: '内容不能为空！' })
  description: string;
  @ApiProperty({ description: '帖子日期' })
  dateTime: Date;
}

@Controller('posts')
@ApiTags('帖子')
export class PostController {
  // 依赖注入数据模型
  constructor(
    @InjectModel(PostSchema) private readonly postSchema: ModelType<PostSchema>,
  ) {}

  @Get()
  @ApiOperation({ summary: '获取帖子列表' })
  async index() {
    return await this.postSchema.find();
  }

  @Post()
  @ApiOperation({ summary: '创建帖子' })
  async create(@Body() createPostCon: createPostBody) {
    await this.postSchema.create(createPostCon);
    return { success: true };
  }

  @Get(':id')
  @ApiOperation({ summary: '帖子详情' })
  async detail(@Param('id') id: string) {
    return await this.postSchema.findById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: '编辑帖子' })
  async update(@Param('id') id: string, @Body() editPostCon: createPostBody) {
    await this.postSchema.findByIdAndUpdate(id, editPostCon);
    return {
      success: true,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除帖子' })
  async remove(@Param('id') id: string) {
    await this.postSchema.findByIdAndDelete(id);
    return {
      success: true,
    };
  }
}
