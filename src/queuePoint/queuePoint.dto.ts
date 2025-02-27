import { ObjectType, Field, Int } from '@nestjs/graphql';
import { QueuePoint } from './queuePoint.entity';

@ObjectType()
export class QueuePointDto extends QueuePoint {
  @Field(() => Int)
  declare id: QueuePoint['id'];

  @Field(() => Int)
  declare row: QueuePoint['id'];

  @Field(() => Date)
  declare date: QueuePoint['date'];
}
