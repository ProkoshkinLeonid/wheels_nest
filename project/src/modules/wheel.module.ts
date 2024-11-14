import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { WheelsFilesController } from "../features/wheels/controllers/wheel-file.controller"
import { WheelController } from "../features/wheels/controllers/wheel.controller"
import { WheelFile } from "../features/wheels/entities/wheel-flile.entinty"
import { Wheels } from "../features/wheels/entities/wheel.entitiy"
import { WheelsFileService } from "../features/wheels/services/wheel-file.service"
import { WheelService } from "../features/wheels/services/wheel.service"

@Module({
  imports: [TypeOrmModule.forFeature([Wheels, WheelFile])],
  providers: [WheelService, WheelsFileService],
  controllers: [WheelController, WheelsFilesController],
  exports: [TypeOrmModule],
})
export class WheelModule {}
