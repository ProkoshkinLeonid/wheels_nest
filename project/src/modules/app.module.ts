import { Module } from '@nestjs/common';
import { WheelsController } from '../controllers/wheels.controller';
import { WheelsService } from '../services/wheels.service';
import {Wheels} from "../models/wheels.entitiy";
import {TypeOrmModule} from '@nestjs/typeorm'
import {WheelsHttpModule} from "./wheels-http.module";
import {FileModule} from "./file.module";

@Module({
  imports: [AppModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'myuser',
      password: 'mypassword',
      database: 'mydb',
      entities: [Wheels],
      synchronize: true,
    }), WheelsHttpModule, FileModule],
  controllers: [WheelsController],
  providers: [WheelsService],
})
export class AppModule {}
