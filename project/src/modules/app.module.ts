import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import {FileModule} from "./file.module";
import {WheelsModule} from "./wheels.module";
import {Wheels} from "../features/wheels/entities/wheels.entitiy";
import {WheelsController} from "../features/wheels/controllers/wheels.controller";
import {WheelsService} from "../features/wheels/services/wheels.service";
import {WheelFile} from "../features/wheels/entities/wheelFiles.entinty";

@Module({
  imports: [AppModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'myuser',
      password: 'mypassword',
      database: 'mydb',
      entities: [Wheels, WheelFile],
      synchronize: true,
    }), WheelsModule, FileModule],
  controllers: [WheelsController],
  providers: [WheelsService],
})
export class AppModule {}
