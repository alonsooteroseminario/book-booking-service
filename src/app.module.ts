import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomModule } from './room/room.module';
import { MongooseModule } from '@nestjs/mongoose';
import { environments } from './environments';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URL: Joi.string().required(),
      }),
    }),
    RoomModule,
    MongooseModule.forRoot(process.env.MONGODB_URL, {
      useNewUrlParser: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
