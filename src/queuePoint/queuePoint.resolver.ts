// src/user/user.resolver.ts
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QueuePointService } from './queuePoint.service';
import { QueuePoint } from './queuePoint.model';

@Resolver(() => QueuePoint)
export class QueuePointResolver {
  constructor(private queuePointService: QueuePointService) {}

  @Query(() => QueuePoint)
  getLastQueuePoint() {
    return this.queuePointService.getLast();
  }

  @Mutation(() => QueuePoint)
  createQueuePoint(@Args('row', { type: () => Int }) row: number) {
    return this.queuePointService.create(row);
  }
}
