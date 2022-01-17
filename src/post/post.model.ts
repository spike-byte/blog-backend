import { prop } from '@typegoose/typegoose';

export class Post {
  @prop()
  title: string;
  @prop()
  description: string | ImageBitmap;
  @prop()
  dateTime?: Date;
}
