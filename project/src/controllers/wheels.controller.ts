import {Controller, Get, Param, Query} from '@nestjs/common';
import { WheelsService } from '../services/wheels.service';

@Controller("wheels")
export class WheelsController {
  constructor(private readonly wheelsService: WheelsService) {}

  @Get()
  getAll() {
   return this.wheelsService.findAll()
  }
  @Get(":id")
  getOne(@Param('id') id) {
    return this.wheelsService.findOne(id)
  }

}
