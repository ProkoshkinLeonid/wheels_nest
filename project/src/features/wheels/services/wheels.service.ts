import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Wheels} from "../entities/wheels.entitiy";
import {WheelFile} from "../entities/wheelFiles.entinty";

@Injectable()
export class WheelsService {
  constructor(
      @InjectRepository(Wheels)
      private wheelsRepository: Repository<Wheels>,
      @InjectRepository(WheelFile)
      private wheelsFilesRepository: Repository<WheelFile>,
  ) {}

  findAll(): Promise<Wheels[]> {
    return this.wheelsRepository.find();
  }

 async findOne(id: number) {
    const files = await this.wheelsFilesRepository
        .createQueryBuilder('wheelsFile')
        .where(`wheelsFile.wheels_id = ${id}`, {id})
        .getMany()
   const card = await this.wheelsRepository.findOneBy({ id })
     return {
          ...card,
          filesGuids: files.map(file => file.guid),
     }
  }

  async add(data: { price: number; name: string, description: string, count: number, filesGuids: string[] }) {
    return await this.wheelsRepository.insert(data);
  }

  async update(wheelsId: number, filesGuids: string[]) {
    const filesToUpdate = await this.wheelsFilesRepository
        .createQueryBuilder('wheelsFile')
        .where('wheelsFile.guid IN (:...guids)', { guids: filesGuids })
        .getMany();

    const updatedFiles = await Promise.all(
        filesToUpdate.map(file =>
            this.wheelsFilesRepository.save({
              ...file,
              wheelsId: wheelsId
            })
        )
    )
  }

  async remove(id: number): Promise<void> {
    await this.wheelsRepository.delete(id);
  }
}