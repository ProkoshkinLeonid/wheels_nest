import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { TypeOrmModule } from "@nestjs/typeorm"

import { WheelsController } from "./features/wheels/controllers/wheels.controller"
import { WheelFile } from "./features/wheels/entities/wheelFiles.entinty"
import { Wheels } from "./features/wheels/entities/wheels.entitiy"
import { WheelsService } from "./features/wheels/services/wheels.service"
import { FileModule } from "./modules/file.module"
import { WheelsModule } from "./modules/wheels.module"

@Module({
  imports: [
    AppModule,
    ConfigModule.forRoot({
      envFilePath: `./config/${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    // TypeOrmModule.forRoot({
    //   type: "postgres",
    //   host: "localhost",
    //   port: 5432,
    //   username: "myuser",
    //   password: "mypassword",
    //   database: "mydb",
    //   entities: [Wheels, WheelFile],
    //   synchronize: true,
    // }),
    // WheelsModule,
    // FileModule,
  ],
  // controllers: [WheelsController],
  // providers: [WheelsService],
})
export class AppModule {}
