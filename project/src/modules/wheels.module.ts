import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Wheels} from "../features/wheels/entities/wheels.entitiy";
import {WheelsService} from "../features/wheels/services/wheels.service";
import {WheelsController} from "../features/wheels/controllers/wheels.controller";
import {WheelsFilesController} from "../features/wheels/controllers/wheelFiles.controller";
import {WheelFile} from "../features/wheels/entities/wheelFiles.entinty";
import {WheelsFileService} from "../features/wheels/services/wheelFiles.service";

@Module({
    imports: [TypeOrmModule.forFeature([Wheels, WheelFile])],
    providers: [WheelsService, WheelsFileService],
    controllers: [WheelsController, WheelsFilesController],
    exports: [TypeOrmModule]
})
export class WheelsModule {}