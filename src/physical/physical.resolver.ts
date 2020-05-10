import { PhysicalService } from './physical.service';
import { Resolver, Query } from '@nestjs/graphql';
import { PhysicalType } from './physical.type';

@Resolver(type => PhysicalType)
export class PhysicalResolver {
  constructor(private physicalService: PhysicalService) {}

  @Query(returns => [PhysicalType])
  getPhysicals(): Promise<PhysicalType[]> {
    return this.physicalService.getPhysicals();
  }
}
