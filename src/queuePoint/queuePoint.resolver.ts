// src/user/user.resolver.ts
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { QueuePointService } from './queuePoint.service';
import { QueuePoint } from './queuePoint.model';
import { GqlAuthGuard } from '../auth/guards/graphql-auth.guard';

@Resolver(() => QueuePoint)
export class QueuePointResolver {
  constructor(private queuePointService: QueuePointService) {}

  @Query(() => QueuePoint) // ✅ Required Query
  getLastQueuePoint() {
    return this.queuePointService.getLast();
  }

  @Mutation(() => QueuePoint)
  createQueuePoint(@Args('row', { type: () => Int }) row: number) {
    return this.queuePointService.create(row);
  }

  @UseGuards(GqlAuthGuard)
  @Query(() => String)
  getProfile() {
    return 'This is a protected profile route';
  }
}
