import { MikroOrmModule } from '@mikro-orm/nestjs'
import { Module } from '@nestjs/common'
import { QueuePoint } from './queuePoint.entity'
import { QueuePointResolver } from './queuePoint.resolver'
import { QueuePointService } from './queuePoint.service'

@Module({
  imports: [MikroOrmModule.forFeature([QueuePoint])],
  providers: [QueuePointResolver, QueuePointService],
})
export class QueuePointModule {}
