import {
  Resolver,
  Mutation,
  Args,
  Int,
  Subscription,
  Query,
} from '@nestjs/graphql';
import { QueuePointService } from './queuePoint.service';
import { QueuePointType } from './queuePoint.type';
import { PubSub } from 'graphql-subscriptions/dist';

const pubSub = new PubSub();
@Resolver(() => QueuePointType)
export class QueuePointResolver {
  constructor(private queuePointService: QueuePointService) {}

  @Query(() => QueuePointType)
  getLastQueuePoint() {
    return this.queuePointService.getLast();
  }

  @Subscription(() => QueuePointType, { name: 'queuePointCreated' })
  queuePointCreated() {
    return pubSub.asyncIterableIterator('queuePointCreated');
  }

  @Mutation(() => QueuePointType)
  async createQueuePoint(@Args('row', { type: () => Int }) row: number) {
    const queuePointCreated = await this.queuePointService.create(row);
    void pubSub.publish('queuePointCreated', { queuePointCreated });
    return queuePointCreated;
  }
}
