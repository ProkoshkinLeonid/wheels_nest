import {Body, Controller, Get, Param, Post, Req, Res} from '@nestjs/common';
import { WheelsService } from '../services/wheels.service';
import {Wheels} from "../entities/wheels.entitiy";

@Controller("wheels")
export class WheelsController {
  constructor(private readonly wheelsService: WheelsService) {}

  @Get()
  async getAll() {
    return await this.wheelsService.findAll()
  }
  @Get(":id")
  async getOne(@Res() res, @Param('id') id) {
    console.log(await this.wheelsService.findOne(id))
    return res.status(200).json(await this.wheelsService.findOne(id))
  }

  @Post("/add")
  async add(@Body() body: { price: number; model: string, size: string, season: string, count: number, filesGuids: string[] }, @Req() req, @Res() res) {
      const result = await this.wheelsService.add(body)
      await this.wheelsService.update(result.identifiers[0].id, body.filesGuids)
      return res.status(200).json({ id: result.identifiers[0].id })
  }

  @Get("/remove/:id" )
    remove(@Param("id") id) {
      return this.wheelsService.remove(id)
    }

}
