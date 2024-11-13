import { Injectable } from "@nestjs/common"

@Injectable()
export class FileService {
  constructor() {} // private wheelsRepository: Repository<Wheels>, // @InjectRepository(Wheels)

  // findAll(): Promise<Wheels[]> {
  //     return this.wheelsRepository.find();
  // }
  //
  // findOne(id: number): Promise<Wheels | null> {
  //     return this.wheelsRepository.findOneBy({ id });
  // }
  //
  // async remove(id: number): Promise<void> {
  //     await this.wheelsRepository.delete(id);
  // }
}
