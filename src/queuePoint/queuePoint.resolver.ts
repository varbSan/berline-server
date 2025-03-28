import {
  Args,
  Int,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql'
import { PubSub } from 'graphql-subscriptions/dist'
import { QueuePointService } from './queuePoint.service'
import { QueuePointType } from './queuePoint.type'

const pubSub = new PubSub()
@Resolver(() => QueuePointType)
export class QueuePointResolver {
  constructor(private readonly queuePointService: QueuePointService) {}

  @Query(() => QueuePointType)
  async getLastQueuePoint() {
    return this.queuePointService.getLast()
  }

  @Subscription(() => QueuePointType, { name: 'queuePointCreated' })
  queuePointCreated() {
    return pubSub.asyncIterableIterator('queuePointCreated')
  }

  @Mutation(() => QueuePointType)
  async createQueuePoint(@Args('row', { type: () => Int }) row: number) {
    const queuePointCreated = await this.queuePointService.create(row)
    void pubSub.publish('queuePointCreated', { queuePointCreated })
    return queuePointCreated
  }
}
