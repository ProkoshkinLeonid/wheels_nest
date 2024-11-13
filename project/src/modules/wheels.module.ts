import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { WheelsFilesController } from "../features/wheels/controllers/wheelFiles.controller"
import { WheelsController } from "../features/wheels/controllers/wheels.controller"
import { WheelFile } from "../features/wheels/entities/wheelFiles.entinty"
import { Wheels } from "../features/wheels/entities/wheels.entitiy"
import { WheelsFileService } from "../features/wheels/services/wheelFiles.service"
import { WheelsService } from "../features/wheels/services/wheels.service"

@Module({
  imports: [TypeOrmModule.forFeature([Wheels, WheelFile])],
  providers: [WheelsService, WheelsFileService],
  controllers: [WheelsController, WheelsFilesController],
  exports: [TypeOrmModule],
})
export class WheelsModule {}
