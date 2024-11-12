import {
    Controller,
    Get,
    Param,
    Post,
    Req,
    Res,
    Response,
    UploadedFile,
    UseInterceptors
} from "@nestjs/common";
import {FileInterceptor} from "@nestjs/platform-express";
import {WheelsFileService} from "../services/wheelFiles.service";
import {WheelFile} from "../entities/wheelFiles.entinty";
import { v4 as generateId } from "uuid"

@Controller("wheels/files")
export class WheelsFilesController {
    constructor(private readonly wheelsFileService: WheelsFileService) {}

    @Post('/upload')
    @UseInterceptors(FileInterceptor('file'))
    async index(
        @Req() request,
        @Res() response,
        @UploadedFile() file: Express.Multer.File & { guid: string },
    ) {
        const guid = generateId()
        const wheelFile: WheelFile = {
            wheelsId: null,
            guid: guid,
            name: Buffer.from(file.originalname, 'latin1').toString('utf8'),
            bytes: Buffer.from(file.buffer),
        }
        try {
            const result = await this.wheelsFileService.add(wheelFile);
            console.log('Файл успешно добавлен:', result);
            return response.status(200).json({ guid })
        } catch (error) {
            console.error('Ошибка при добавлении файла:', error);
            response.status(500).send({ message: 'Ошибка при добавлении файла' });
        }
    }

    @Get('/download/:guid')
    async download(@Res() response, @Param('guid') guid) {
        const arrayBufferFile = await this.wheelsFileService.findOne(guid);

        //@ts-ignore
        const buffer = Buffer.from(arrayBufferFile.bytes);
        response.header('Content-Disposition', `attachment; filename="${encodeURIComponent(arrayBufferFile.name)}"`)

        response.status(200).send(buffer);
    }

}