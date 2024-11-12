import {Body, Controller, Get, Param, Post, Res} from '@nestjs/common';
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
  async getOne(@Res() res, @Param('id') id) {
    console.log(await this.wheelsService.findOne(id))
    return res.status(200).json(await this.wheelsService.findOne(id))
  }

  @Post("/add")
 async add(@Res() res, @Body() wheelsBody: { price: number; name: string, description: string, count: number, filesGuids: string[] }) {
      const result = await this.wheelsService.add(wheelsBody)
      await this.wheelsService.update(result.identifiers[0].id, wheelsBody.filesGuids)
      return res.status(200).json({ id: result.identifiers[0].id })
  }

  @Get("/remove/:id" )
    remove(@Param("id") id) {
      return this.wheelsService.remove(id)
    }

}
