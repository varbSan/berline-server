import { Entity, PrimaryKey, Property } from '@mikro-orm/postgresql';

@Entity()
export class QueuePoint {
  @PrimaryKey()
  id: number;

  @Property()
  row: number;

  @Property()
  date: Date;
}
