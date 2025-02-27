import { Module } from '@nestjs/common';
import { QueuePointResolver } from './queuePoint.resolver';
import { QueuePointService } from './queuePoint.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { QueuePoint } from './queuePoint.entity';

@Module({
  imports: [MikroOrmModule.forFeature([QueuePoint])],
  providers: [QueuePointResolver, QueuePointService],
})
export class QueuePointModule {}
