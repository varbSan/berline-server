// src/user/user.resolver.ts
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QueuePointService } from './queuePoint.service';
import { QueuePointDto } from './queuePoint.dto';

@Resolver(() => QueuePointDto)
export class QueuePointResolver {
  constructor(private queuePointService: QueuePointService) {}

  @Query(() => QueuePointDto)
  getLastQueuePoint() {
    return this.queuePointService.getLast();
  }

  @Mutation(() => QueuePointDto)
  createQueuePoint(@Args('row', { type: () => Int }) row: number) {
    return this.queuePointService.create(row);
  }
}
