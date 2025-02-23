// src/line/line.model.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class QueuePoint {
  @Field(() => Int) // Default type is String
  row: number;

  @Field(() => Date)
  date: Date;
}
