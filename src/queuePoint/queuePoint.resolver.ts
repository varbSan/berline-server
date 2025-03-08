import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QueuePointService } from './queuePoint.service';
import { QueuePointType } from './queuePoint.type';

@Resolver(() => QueuePointType)
export class QueuePointResolver {
  constructor(private queuePointService: QueuePointService) {}

  @Query(() => QueuePointType)
  getLastQueuePoint() {
    return this.queuePointService.getLast();
  }

  @Mutation(() => QueuePointType)
  createQueuePoint(@Args('row', { type: () => Int }) row: number) {
    return this.queuePointService.create(row);
  }
}
