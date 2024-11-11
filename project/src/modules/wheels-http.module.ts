import { Module } from '@nestjs/common';
import {WheelsModule} from "./wheels.module";
import {WheelsService} from "../services/wheels.service";
import {WheelsController} from "../controllers/wheels.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Wheels} from "../models/wheels.entitiy";

@Module({
    imports: [WheelsModule, TypeOrmModule.forFeature([Wheels])],
    providers: [WheelsService],
    controllers: [WheelsController],
    exports: [TypeOrmModule]
})
export class WheelsHttpModule {}