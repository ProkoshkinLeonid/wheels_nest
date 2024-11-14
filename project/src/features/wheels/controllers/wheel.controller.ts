import { Body, Controller, Get, Param, Post, Res } from "@nestjs/common"

import { WheelDto } from "../dto/wheel.dto"
import { WheelService } from "../services/wheel.service"

@Controller("wheels")
export class WheelController {
  constructor(private readonly wheelsService: WheelService) {}

  @Get()
  async getAll() {
    return await this.wheelsService.findAll()
  }
  @Get(":id")
  async getOne(@Res() res, @Param("id") id) {
    return res.status(200).json(await this.wheelsService.findOne(id))
  }

  @Post("/add")
  async add(
    @Body()
    body: WheelDto,
    @Res() res,
  ) {
    const result = await this.wheelsService.add(body)
    await this.wheelsService.update(result.identifiers[0].id, body.filesGuids)
    return res.status(200).json({ id: result.identifiers[0].id })
  }

  @Get("/remove/:id")
  remove(@Param("id") id) {
    return this.wheelsService.remove(id)
  }
}
