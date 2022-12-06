import { Injectable } from '@nestjs/common';

import { Model, Connection, HydratedDocument, QueryWithHelpers } from 'mongoose';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Todo, TodoDocument } from "./schemas/todo.schema";
import { CreateTodoDto } from './interfaces/dto/create-todo';
import { UpdateTodoDto } from './interfaces/dto/update-todo';

@Injectable()
export class TodoService {
    constructor(
        @InjectModel(Todo.name) private TodoModel: Model<TodoDocument>,
        @InjectConnection() private connection: Connection,
    ) {}

    public create(data: CreateTodoDto): Promise<TodoDocument> {
        const todo = new this.TodoModel(data);

        return todo.save();
    }

    public getAll(): Promise<TodoDocument[]> {
        return this.TodoModel.find().exec();
    }

    public update(id: string, data: UpdateTodoDto): QueryWithHelpers<HydratedDocument<TodoDocument, {}, {}> | null, HydratedDocument<TodoDocument, {}, {}>, {}, TodoDocument> {
        return this.TodoModel.findOneAndUpdate(
            { _id: id },
            data,
        );
    }

    public delete(id: string): QueryWithHelpers<HydratedDocument<TodoDocument, {}, {}> | null, HydratedDocument<TodoDocument, {}, {}>, {}, TodoDocument> {
        return this.TodoModel.findOneAndRemove({ _id: id });
    }
}