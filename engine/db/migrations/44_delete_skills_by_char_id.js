exports.up = knex => (
    knex.schema
        .raw(`
          create or replace function app_character.delete_all_class_skills_by_id(character_id uuid)
          returns boolean as $$
          begin
            delete from app_character.skills_selected as skill_sel
              where skill_sel.character_id = $1
              and granted_by_starting_prof = true
              or granting_class_feat_id <> null
              or granting_subcclass_feat_id <> null;
        
            return true;
          end
          $$ language plpgsql strict security definer;
        `)
)

exports.down = knex => (
    knex.schema.raw(``)
)
