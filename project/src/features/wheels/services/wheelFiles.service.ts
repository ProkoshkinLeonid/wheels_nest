import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {WheelFile} from "../entities/wheelFiles.entinty";
import {Wheels} from "../entities/wheels.entitiy";

@Injectable()
export class WheelsFileService {
    constructor(
        @InjectRepository(WheelFile)
        private wheelsFilesRepository: Repository<WheelFile>,
    ) {}

    async add(data: {
        wheelsId: number | null,
        guid: string,
        name: string,
        bytes: Buffer,
    }) {
        return await this.wheelsFilesRepository.insert(data);
    }

    findOne(guid: string): Promise<WheelFile | null> {
        return this.wheelsFilesRepository.findOneBy({ guid });
    }
}