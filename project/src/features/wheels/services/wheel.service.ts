import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"

import { WheelFile } from "../entities/wheel-flile.entinty"
import { Wheels } from "../entities/wheel.entitiy"
import {WheelDto} from "../dto/wheel.dto";

@Injectable()
export class WheelService {
  constructor(
    @InjectRepository(Wheels)
    private wheelsRepository: Repository<Wheels>,
    @InjectRepository(WheelFile)
    private wheelsFilesRepository: Repository<WheelFile>,
  ) {}

  async findAll() {
    const allWheels = await this.wheelsRepository.find()
    const allFiles = await this.wheelsFilesRepository
      .createQueryBuilder("wheelsFile")
      .select(["wheelsFile.guid", "wheelsFile.wheelsId"])
      .where("wheelsFile.wheels_id IN (:...wheelIds)", {
        wheelIds: allWheels.map((wheel) => wheel.id),
      })
      .getMany()
    return allWheels.map((wheel) => {
      const filesGuids = allFiles
        .filter((file) => file.wheelsId === wheel.id)
        .map((file) => file.guid)
      return {
        ...wheel,
        files: filesGuids,
      }
    })
  }

  async findOne(id: number) {
    const files = await this.wheelsFilesRepository
      .createQueryBuilder("wheelsFile")
      .where(`wheelsFile.wheels_id = ${id}`, { id })
      .getMany()
    const card = await this.wheelsRepository.findOneBy({ id })
    return {
      ...card,
      filesGuids: files.map((file) => file.guid),
    }
  }

  async add(data: WheelDto) {
    return await this.wheelsRepository.insert(data)
  }

  async update(wheelsId: number, filesGuids: string[]) {
    const filesToUpdate = await this.wheelsFilesRepository
      .createQueryBuilder("wheelsFile")
      .where("wheelsFile.guid IN (:...guids)", { guids: filesGuids })
      .getMany()

    await Promise.all(
      filesToUpdate.map((file) =>
        this.wheelsFilesRepository.save({
          ...file,
          wheelsId: wheelsId,
        }),
      ),
    )
  }

  async remove(id: number): Promise<void> {
    await this.wheelsRepository.delete(id)
  }
}
