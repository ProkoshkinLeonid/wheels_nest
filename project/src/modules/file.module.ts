import {Module} from "@nestjs/common";
import {FileService} from "../features/files/services/file.service";
import {FileController} from "../features/files/controllers/file.controller";

@Module({
    providers: [FileService],
    controllers: [FileController],
})
export class FileModule {}