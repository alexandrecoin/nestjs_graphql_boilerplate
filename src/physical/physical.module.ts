import { Module } from '@nestjs/common';
import { PhysicalService } from './physical.service';
import { PhysicalResolver } from './physical.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Physical } from './physical.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Physical])],
  providers: [PhysicalService, PhysicalResolver]
})
export class PhysicalModule {}
