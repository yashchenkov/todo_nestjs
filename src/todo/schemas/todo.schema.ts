import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type TodoDocument = Todo & Document;

@Schema()
export class Todo {
    @Prop({ required: true })
    public title: string;

    @Prop()
    public description: string;

    @Prop()
    public text: string;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);