import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
// import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // MongooseModule.forRoot(
    //   `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.re3ha3x.mongodb.net/nestjs-crud-app`,
    // ),
  ],
  controllers: [AppController],
  providers: [AppService],
}) 
export class AppModule {}
