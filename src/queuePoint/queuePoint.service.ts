import { EntityManager } from '@mikro-orm/postgresql'
import { Injectable } from '@nestjs/common'
import { QueuePoint } from './queuePoint.entity'

@Injectable()
export class QueuePointService {
  constructor(private readonly em: EntityManager) {}

  async getLast(): Promise<QueuePoint | null> {
    const [queuePoint] = await this.em.find(
      QueuePoint,
      {},
      { orderBy: { createdAt: 'DESC' }, limit: 1 },
    )

    return queuePoint
  }

  async create(row: number): Promise<QueuePoint> {
    const queuePoint = this.em.create(QueuePoint, { row })
    await this.em.persistAndFlush(queuePoint)
    return queuePoint
  }
}
