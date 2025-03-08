import {
  BaseEntity,
  Entity,
  Opt,
  PrimaryKey,
  Property,
} from '@mikro-orm/postgresql';

@Entity()
export class QueuePoint extends BaseEntity {
  @PrimaryKey()
  id!: number;

  @Property()
  row!: number;

  @Property()
  createdAt: Date & Opt = new Date();
}
