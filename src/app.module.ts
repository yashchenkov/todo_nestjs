import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.UrlDB), /*вариант с указанием http://0.0.0.0:8081 так же не дает результата*/
    TodoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
