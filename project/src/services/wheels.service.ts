import {Injectable} from '@nestjs/common';
import {Wheels} from "../models/wheels.entitiy";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class WheelsService {
  constructor(
      @InjectRepository(Wheels)
      private wheelsRepository: Repository<Wheels>,
  ) {}

  findAll(): Promise<Wheels[]> {
    return this.wheelsRepository.find();
  }

  findOne(id: number): Promise<Wheels | null> {
    return this.wheelsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.wheelsRepository.delete(id);
  }
}