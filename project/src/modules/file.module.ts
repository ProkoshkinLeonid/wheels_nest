import { Module } from "@nestjs/common"

import { FileController } from "../features/files/controllers/file.controller"
import { FileService } from "../features/files/services/file.service"

@Module({
  providers: [FileService],
  controllers: [FileController],
})
export class FileModule {}
