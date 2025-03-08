import { Migration } from '@mikro-orm/migrations';

export class Migration20250308101814 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table "queue_point" rename column "date" to "created_at";`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table "queue_point" rename column "created_at" to "date";`);
  }

}
