import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "texts_top_citation" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"author" varchar,
  	"further" varchar
  );
  
  ALTER TABLE "pages_blocks_hero" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_richtext" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_blocks_hero" CASCADE;
  DROP TABLE "pages_blocks_richtext" CASCADE;
  ALTER TABLE "media" RENAME COLUMN "alt" TO "name";
  ALTER TABLE "texts" ADD COLUMN "position" varchar;
  ALTER TABLE "texts" ADD COLUMN "extrainfo" varchar;
  ALTER TABLE "texts" ADD COLUMN "pdf_id" integer;
  ALTER TABLE "pages_blocks_image" ADD COLUMN "title" varchar;
  ALTER TABLE "pages_blocks_image" ADD COLUMN "description" varchar;
  ALTER TABLE "subpages_blocks_image" ADD COLUMN "title" varchar;
  ALTER TABLE "subpages_blocks_image" ADD COLUMN "description" varchar;
  ALTER TABLE "texts_top_citation" ADD CONSTRAINT "texts_top_citation_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."texts"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "texts_top_citation_order_idx" ON "texts_top_citation" USING btree ("_order");
  CREATE INDEX "texts_top_citation_parent_id_idx" ON "texts_top_citation" USING btree ("_parent_id");
  ALTER TABLE "texts" ADD CONSTRAINT "texts_pdf_id_media_id_fk" FOREIGN KEY ("pdf_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "texts_pdf_idx" ON "texts" USING btree ("pdf_id");
  ALTER TABLE "media" DROP COLUMN "title";
  ALTER TABLE "media" DROP COLUMN "description";
  ALTER TABLE "pages_blocks_image" DROP COLUMN "image_aspect_ratio";
  ALTER TABLE "subpages_blocks_image" DROP COLUMN "image_aspect_ratio";
  DROP TYPE "public"."enum_pages_blocks_image_image_aspect_ratio";
  DROP TYPE "public"."enum_subpages_blocks_image_image_aspect_ratio";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_image_image_aspect_ratio" AS ENUM('Quadrat', 'Breit', 'Hoch');
  CREATE TYPE "public"."enum_subpages_blocks_image_image_aspect_ratio" AS ENUM('Quadrat', 'Breit', 'Hoch');
  CREATE TABLE "pages_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"image_id" integer NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_richtext" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  ALTER TABLE "texts_top_citation" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "texts_top_citation" CASCADE;
  ALTER TABLE "texts" DROP CONSTRAINT "texts_pdf_id_media_id_fk";
  
  DROP INDEX "texts_pdf_idx";
  ALTER TABLE "media" ADD COLUMN "alt" varchar NOT NULL;
  ALTER TABLE "media" ADD COLUMN "title" varchar;
  ALTER TABLE "media" ADD COLUMN "description" varchar;
  ALTER TABLE "pages_blocks_image" ADD COLUMN "image_aspect_ratio" "enum_pages_blocks_image_image_aspect_ratio";
  ALTER TABLE "subpages_blocks_image" ADD COLUMN "image_aspect_ratio" "enum_subpages_blocks_image_image_aspect_ratio";
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_richtext" ADD CONSTRAINT "pages_blocks_richtext_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_blocks_hero_order_idx" ON "pages_blocks_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_parent_id_idx" ON "pages_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_path_idx" ON "pages_blocks_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_image_idx" ON "pages_blocks_hero" USING btree ("image_id");
  CREATE INDEX "pages_blocks_richtext_order_idx" ON "pages_blocks_richtext" USING btree ("_order");
  CREATE INDEX "pages_blocks_richtext_parent_id_idx" ON "pages_blocks_richtext" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_richtext_path_idx" ON "pages_blocks_richtext" USING btree ("_path");
  ALTER TABLE "media" DROP COLUMN "name";
  ALTER TABLE "texts" DROP COLUMN "position";
  ALTER TABLE "texts" DROP COLUMN "extrainfo";
  ALTER TABLE "texts" DROP COLUMN "pdf_id";
  ALTER TABLE "pages_blocks_image" DROP COLUMN "title";
  ALTER TABLE "pages_blocks_image" DROP COLUMN "description";
  ALTER TABLE "subpages_blocks_image" DROP COLUMN "title";
  ALTER TABLE "subpages_blocks_image" DROP COLUMN "description";`)
}
