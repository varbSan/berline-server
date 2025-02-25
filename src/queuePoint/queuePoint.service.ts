// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { QueuePoint } from './queuePoint.entity';

@Injectable()
export class QueuePointService {
  private queuePointsDb: QueuePoint[] = [
    {
      id: 1,
      row: 10,
      date: new Date(),
    },
  ];

  getLast(): QueuePoint {
    return this.queuePointsDb.sort(
      (a, b) => b.date.getTime() - a.date.getTime(),
    )[0];
  }

  create(row: number): QueuePoint {
    this.queuePointsDb.push({ id: 1, row, date: new Date() });
    return this.getLast();
  }
}
