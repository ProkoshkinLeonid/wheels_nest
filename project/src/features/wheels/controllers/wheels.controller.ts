import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { WheelsService } from '../services/wheels.service';

@Controller("wheels")
export class WheelsController {
  constructor(private readonly wheelsService: WheelsService) {}

  @Get()
  async getAll() {
    const activeItems = await this.wheelsService.findAll()
    return activeItems.filter(item => item.isActive)
  }
  @Get(":id")
  getOne(@Param('id') id) {
    return this.wheelsService.findOne(id)
  }

  @Post("/add")
  add(@Body() wheelsBody: { price: number; name: string, description: string, count: number }) {

  }

  @Get("/remove/:id" )
    remove(@Param("id") id) {
      return this.wheelsService.remove(id)
    }

}
