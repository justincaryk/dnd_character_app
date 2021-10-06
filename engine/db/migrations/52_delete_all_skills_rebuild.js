exports.up = knex => (
    knex.schema
        .raw(`
            create or replace function app_character.delete_all_class_skills_by_id(character_id uuid)
            returns boolean as $$
            begin
            delete from app_character.skills_selected as ss
              where ss.character_id = $1
              and ss.granted_by_starting_prof = true 
              or ss.granting_class_feat_id is not null
              or ss.granting_subcclass_feat_id is not null;
                    
            return true; 
            end
            $$ language plpgsql strict security definer;
        `)
)

exports.down = knex => (
    knex.schema.raw(``)
)
