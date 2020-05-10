import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Physical } from './physical.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PhysicalService {
  constructor(@InjectRepository(Physical) private physicalRepository: Repository<Physical>) {}

  async getPhysicals(): Promise<Physical[]> {
    return this.physicalRepository.find();
  }
}
