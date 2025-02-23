import { Module } from '@nestjs/common';
import { QueuePointResolver } from './queuePoint.resolver';
import { QueuePointService } from './queuePoint.service';

@Module({
  providers: [QueuePointResolver, QueuePointService], // ✅ Ensure these are provided
})
export class QueuePointModule {}
