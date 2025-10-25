import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_blocks_image_image_aspect_ratio" AS ENUM('Quadrat', 'Breit', 'Hoch');
  CREATE TYPE "public"."enum_subpages_blocks_image_image_aspect_ratio" AS ENUM('Quadrat', 'Breit', 'Hoch');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "texts_blocks_richtext" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"content" jsonb NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "texts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"subtitle" varchar,
  	"author" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "pages_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"image_id" integer NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "pages_blocks_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"image_aspect_ratio" "enum_pages_blocks_image_image_aspect_ratio",
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
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"texts_id" integer
  );
  
  CREATE TABLE "subpages_blocks_image" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"image_aspect_ratio" "enum_subpages_blocks_image_image_aspect_ratio",
  	"block_name" varchar
  );
  
  CREATE TABLE "subpages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"parent_page_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"texts_id" integer,
  	"pages_id" integer,
  	"subpages_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "homepage_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar,
  	"image_id" integer NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE "homepage_news" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"date" varchar,
  	"titel" varchar,
  	"involved" varchar,
  	"location" varchar
  );
  
  CREATE TABLE "homepage" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "nav_links_nav_items_subpage_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"years" varchar,
  	"link" varchar
  );
  
  CREATE TABLE "nav_links_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"years" varchar,
  	"link" varchar
  );
  
  CREATE TABLE "nav_links" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_nav" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"link" varchar
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer NOT NULL,
  	"copyright_notice" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "exhibition_exhib_years_exhibitions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar NOT NULL,
  	"katalog" boolean
  );
  
  CREATE TABLE "exhibition_exhib_years" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" varchar NOT NULL
  );
  
  CREATE TABLE "exhibition" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "exhibpart_year_exhib_part_exhibitions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar NOT NULL,
  	"katalog" boolean
  );
  
  CREATE TABLE "exhibpart_year_exhib_part" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" varchar NOT NULL
  );
  
  CREATE TABLE "exhibpart" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "acquis_acquisition_events" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "acquis" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "cv_cv_events" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"year" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "cv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "contact" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"contact_details_name" varchar NOT NULL,
  	"contact_details_address" varchar NOT NULL,
  	"contact_details_email" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "texts_blocks_richtext" ADD CONSTRAINT "texts_blocks_richtext_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."texts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_hero" ADD CONSTRAINT "pages_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_image" ADD CONSTRAINT "pages_blocks_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_blocks_image" ADD CONSTRAINT "pages_blocks_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_blocks_richtext" ADD CONSTRAINT "pages_blocks_richtext_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_texts_fk" FOREIGN KEY ("texts_id") REFERENCES "public"."texts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "subpages_blocks_image" ADD CONSTRAINT "subpages_blocks_image_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "subpages_blocks_image" ADD CONSTRAINT "subpages_blocks_image_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."subpages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "subpages" ADD CONSTRAINT "subpages_parent_page_id_pages_id_fk" FOREIGN KEY ("parent_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_texts_fk" FOREIGN KEY ("texts_id") REFERENCES "public"."texts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_subpages_fk" FOREIGN KEY ("subpages_id") REFERENCES "public"."subpages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_blocks_hero" ADD CONSTRAINT "homepage_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "homepage_blocks_hero" ADD CONSTRAINT "homepage_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "homepage_news" ADD CONSTRAINT "homepage_news_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."homepage"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "nav_links_nav_items_subpage_links" ADD CONSTRAINT "nav_links_nav_items_subpage_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."nav_links_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "nav_links_nav_items" ADD CONSTRAINT "nav_links_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."nav_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_nav" ADD CONSTRAINT "footer_nav_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer" ADD CONSTRAINT "footer_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "exhibition_exhib_years_exhibitions" ADD CONSTRAINT "exhibition_exhib_years_exhibitions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."exhibition_exhib_years"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "exhibition_exhib_years" ADD CONSTRAINT "exhibition_exhib_years_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."exhibition"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "exhibpart_year_exhib_part_exhibitions" ADD CONSTRAINT "exhibpart_year_exhib_part_exhibitions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."exhibpart_year_exhib_part"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "exhibpart_year_exhib_part" ADD CONSTRAINT "exhibpart_year_exhib_part_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."exhibpart"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "acquis_acquisition_events" ADD CONSTRAINT "acquis_acquisition_events_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."acquis"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cv_cv_events" ADD CONSTRAINT "cv_cv_events_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cv"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "texts_blocks_richtext_order_idx" ON "texts_blocks_richtext" USING btree ("_order");
  CREATE INDEX "texts_blocks_richtext_parent_id_idx" ON "texts_blocks_richtext" USING btree ("_parent_id");
  CREATE INDEX "texts_blocks_richtext_path_idx" ON "texts_blocks_richtext" USING btree ("_path");
  CREATE INDEX "texts_updated_at_idx" ON "texts" USING btree ("updated_at");
  CREATE INDEX "texts_created_at_idx" ON "texts" USING btree ("created_at");
  CREATE INDEX "pages_blocks_hero_order_idx" ON "pages_blocks_hero" USING btree ("_order");
  CREATE INDEX "pages_blocks_hero_parent_id_idx" ON "pages_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_hero_path_idx" ON "pages_blocks_hero" USING btree ("_path");
  CREATE INDEX "pages_blocks_hero_image_idx" ON "pages_blocks_hero" USING btree ("image_id");
  CREATE INDEX "pages_blocks_image_order_idx" ON "pages_blocks_image" USING btree ("_order");
  CREATE INDEX "pages_blocks_image_parent_id_idx" ON "pages_blocks_image" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_image_path_idx" ON "pages_blocks_image" USING btree ("_path");
  CREATE INDEX "pages_blocks_image_image_idx" ON "pages_blocks_image" USING btree ("image_id");
  CREATE INDEX "pages_blocks_richtext_order_idx" ON "pages_blocks_richtext" USING btree ("_order");
  CREATE INDEX "pages_blocks_richtext_parent_id_idx" ON "pages_blocks_richtext" USING btree ("_parent_id");
  CREATE INDEX "pages_blocks_richtext_path_idx" ON "pages_blocks_richtext" USING btree ("_path");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_texts_id_idx" ON "pages_rels" USING btree ("texts_id");
  CREATE INDEX "subpages_blocks_image_order_idx" ON "subpages_blocks_image" USING btree ("_order");
  CREATE INDEX "subpages_blocks_image_parent_id_idx" ON "subpages_blocks_image" USING btree ("_parent_id");
  CREATE INDEX "subpages_blocks_image_path_idx" ON "subpages_blocks_image" USING btree ("_path");
  CREATE INDEX "subpages_blocks_image_image_idx" ON "subpages_blocks_image" USING btree ("image_id");
  CREATE INDEX "subpages_parent_page_idx" ON "subpages" USING btree ("parent_page_id");
  CREATE INDEX "subpages_updated_at_idx" ON "subpages" USING btree ("updated_at");
  CREATE INDEX "subpages_created_at_idx" ON "subpages" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_texts_id_idx" ON "payload_locked_documents_rels" USING btree ("texts_id");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_subpages_id_idx" ON "payload_locked_documents_rels" USING btree ("subpages_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "homepage_blocks_hero_order_idx" ON "homepage_blocks_hero" USING btree ("_order");
  CREATE INDEX "homepage_blocks_hero_parent_id_idx" ON "homepage_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX "homepage_blocks_hero_path_idx" ON "homepage_blocks_hero" USING btree ("_path");
  CREATE INDEX "homepage_blocks_hero_image_idx" ON "homepage_blocks_hero" USING btree ("image_id");
  CREATE INDEX "homepage_news_order_idx" ON "homepage_news" USING btree ("_order");
  CREATE INDEX "homepage_news_parent_id_idx" ON "homepage_news" USING btree ("_parent_id");
  CREATE INDEX "nav_links_nav_items_subpage_links_order_idx" ON "nav_links_nav_items_subpage_links" USING btree ("_order");
  CREATE INDEX "nav_links_nav_items_subpage_links_parent_id_idx" ON "nav_links_nav_items_subpage_links" USING btree ("_parent_id");
  CREATE INDEX "nav_links_nav_items_order_idx" ON "nav_links_nav_items" USING btree ("_order");
  CREATE INDEX "nav_links_nav_items_parent_id_idx" ON "nav_links_nav_items" USING btree ("_parent_id");
  CREATE INDEX "footer_nav_order_idx" ON "footer_nav" USING btree ("_order");
  CREATE INDEX "footer_nav_parent_id_idx" ON "footer_nav" USING btree ("_parent_id");
  CREATE INDEX "footer_logo_idx" ON "footer" USING btree ("logo_id");
  CREATE INDEX "exhibition_exhib_years_exhibitions_order_idx" ON "exhibition_exhib_years_exhibitions" USING btree ("_order");
  CREATE INDEX "exhibition_exhib_years_exhibitions_parent_id_idx" ON "exhibition_exhib_years_exhibitions" USING btree ("_parent_id");
  CREATE INDEX "exhibition_exhib_years_order_idx" ON "exhibition_exhib_years" USING btree ("_order");
  CREATE INDEX "exhibition_exhib_years_parent_id_idx" ON "exhibition_exhib_years" USING btree ("_parent_id");
  CREATE INDEX "exhibpart_year_exhib_part_exhibitions_order_idx" ON "exhibpart_year_exhib_part_exhibitions" USING btree ("_order");
  CREATE INDEX "exhibpart_year_exhib_part_exhibitions_parent_id_idx" ON "exhibpart_year_exhib_part_exhibitions" USING btree ("_parent_id");
  CREATE INDEX "exhibpart_year_exhib_part_order_idx" ON "exhibpart_year_exhib_part" USING btree ("_order");
  CREATE INDEX "exhibpart_year_exhib_part_parent_id_idx" ON "exhibpart_year_exhib_part" USING btree ("_parent_id");
  CREATE INDEX "acquis_acquisition_events_order_idx" ON "acquis_acquisition_events" USING btree ("_order");
  CREATE INDEX "acquis_acquisition_events_parent_id_idx" ON "acquis_acquisition_events" USING btree ("_parent_id");
  CREATE INDEX "cv_cv_events_order_idx" ON "cv_cv_events" USING btree ("_order");
  CREATE INDEX "cv_cv_events_parent_id_idx" ON "cv_cv_events" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "texts_blocks_richtext" CASCADE;
  DROP TABLE "texts" CASCADE;
  DROP TABLE "pages_blocks_hero" CASCADE;
  DROP TABLE "pages_blocks_image" CASCADE;
  DROP TABLE "pages_blocks_richtext" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "subpages_blocks_image" CASCADE;
  DROP TABLE "subpages" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "homepage_blocks_hero" CASCADE;
  DROP TABLE "homepage_news" CASCADE;
  DROP TABLE "homepage" CASCADE;
  DROP TABLE "nav_links_nav_items_subpage_links" CASCADE;
  DROP TABLE "nav_links_nav_items" CASCADE;
  DROP TABLE "nav_links" CASCADE;
  DROP TABLE "footer_nav" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "exhibition_exhib_years_exhibitions" CASCADE;
  DROP TABLE "exhibition_exhib_years" CASCADE;
  DROP TABLE "exhibition" CASCADE;
  DROP TABLE "exhibpart_year_exhib_part_exhibitions" CASCADE;
  DROP TABLE "exhibpart_year_exhib_part" CASCADE;
  DROP TABLE "exhibpart" CASCADE;
  DROP TABLE "acquis_acquisition_events" CASCADE;
  DROP TABLE "acquis" CASCADE;
  DROP TABLE "cv_cv_events" CASCADE;
  DROP TABLE "cv" CASCADE;
  DROP TABLE "contact" CASCADE;
  DROP TYPE "public"."enum_pages_blocks_image_image_aspect_ratio";
  DROP TYPE "public"."enum_subpages_blocks_image_image_aspect_ratio";`)
}
