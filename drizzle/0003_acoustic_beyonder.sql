ALTER TABLE "posts" RENAME COLUMN "user_id" TO "author_id";--> statement-breakpoint
ALTER TABLE "posts" DROP CONSTRAINT "posts_user_id_profiles_id_fk";
--> statement-breakpoint
ALTER TABLE "posts" ADD CONSTRAINT "posts_author_id_profiles_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."profiles"("id") ON DELETE no action ON UPDATE no action;