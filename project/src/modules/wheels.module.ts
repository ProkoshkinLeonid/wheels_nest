import {Wheels} from "../models/wheels.entitiy";
import {WheelsService} from "../services/wheels.service";
import {WheelsController} from "../controllers/wheels.controller";
import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {WheelsHttpModule} from "./wheels-http.module";

@Module({
    imports: [TypeOrmModule.forFeature([Wheels])],
    providers: [WheelsService],
    controllers: [WheelsController],
})
export class WheelsModule {}