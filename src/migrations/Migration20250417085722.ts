import { Migration } from '@mikro-orm/migrations';

export class Migration20250417085722 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "queue_point" ("id" serial primary key, "row" int not null, "created_at" timestamptz not null);`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "queue_point" cascade;`);
  }

}
