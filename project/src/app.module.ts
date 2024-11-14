import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { TypeOrmModule } from "@nestjs/typeorm"

import { WheelController } from "./features/wheels/controllers/wheel.controller"
import { WheelFile } from "./features/wheels/entities/wheel-flile.entinty"
import { Wheels } from "./features/wheels/entities/wheel.entitiy"
import { WheelService } from "./features/wheels/services/wheel.service"
import { FileModule } from "./modules/file.module"
import { WheelModule } from "./modules/wheel.module"

@Module({
  imports: [
    AppModule,
    ConfigModule.forRoot({
      envFilePath: `./config/${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "myuser",
      password: "mypassword",
      database: "mydb",
      entities: [Wheels, WheelFile],
      synchronize: true,
    }),
    WheelModule,
    FileModule,
  ],
  controllers: [WheelController],
  providers: [WheelService],
})
export class AppModule {}
