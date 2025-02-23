// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { QueuePoint } from './queuePoint.model';

@Injectable()
export class QueuePointService {
  private queuePointsDb: QueuePoint[] = [
    {
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
    this.queuePointsDb.push({ row, date: new Date() });
    return this.getLast();
  }
}
