import { Field, Int, ObjectType } from '@nestjs/graphql'
import { QueuePoint } from './queuePoint.entity'

@ObjectType()
export class QueuePointType extends QueuePoint {
  @Field(() => Int)
  declare id: QueuePoint['id']

  @Field(() => Int)
  declare row: QueuePoint['row']

  @Field(() => Date)
  declare createdAt: QueuePoint['createdAt']
}
