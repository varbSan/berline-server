import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class QueuePoint {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  row: number;

  @Field(() => Date)
  date: Date;
}
