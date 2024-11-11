import {Controller, Get, Param, Post, Req, Res, UploadedFile, UseInterceptors} from "@nestjs/common";
import {FileService} from "../services/file.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {Observable} from "rxjs";

@Controller("file")
export class FileController {
    constructor(private readonly fileService: FileService) {}

    // @Get()
    // async getAll() {
    //     const activeItems = await this.wheelsService.findAll()
    //     return activeItems.filter(item => item.isActive)
    // }
    // @Get(":id")
    // getOne(@Param('id') id) {
    //     return this.wheelsService.findOne(id)
    // }
    //
    // @Get("/remove/:id" )
    // remove(@Param("id") id) {
    //     return this.wheelsService.remove(id)
    // }
    @Post('*')
    @UseInterceptors(FileInterceptor('file'))
    index(
        @Req() request: Request,
        @Res() response: Response,
        @UploadedFile() file: Express.Multer.File,
    ): Observable<Response> {

    }

}