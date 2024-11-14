import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common"
import { FileInterceptor } from "@nestjs/platform-express"
import { v4 as generateId } from "uuid"

import { WheelFile } from "../entities/wheel-flile.entinty"
import { WheelsFileService } from "../services/wheel-file.service"

@Controller("wheels/files")
export class WheelsFilesController {
  constructor(private readonly wheelsFileService: WheelsFileService) {}

  @Post("/upload")
  @UseInterceptors(FileInterceptor("file"))
  async index(
    @Res() response,
    @UploadedFile() file: Express.Multer.File & { guid: string },
  ) {
    const guid = generateId()
    const wheelFile: WheelFile = {
      wheelsId: null,
      guid: guid,
      name: Buffer.from(file.originalname, "latin1").toString("utf8"),
      bytes: Buffer.from(file.buffer),
    }
    try {
      await this.wheelsFileService.add(wheelFile)
      return response.status(200).json({ guid })
    } catch (error) {
      response.status(500).send({ message: "Ошибка при добавлении файла" })
    }
  }

  @Get("/download/:guid")
  async download(@Res() response, @Param("guid") guid) {
    const arrayBufferFile = await this.wheelsFileService.findOne(guid)

    const buffer = Buffer.from(arrayBufferFile.bytes)
    response.header(
      "Content-Disposition",
      `attachment; filename="${encodeURIComponent(arrayBufferFile.name)}"`,
    )

    response.status(200).send(buffer)
  }
}
