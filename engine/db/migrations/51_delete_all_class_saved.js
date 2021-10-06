exports.up = knex => (
    knex.schema
        .raw(`

            create or replace function app_character.delete_all_class_fight_style (character_id uuid)
            returns boolean as $$
            begin
          
              delete from app_character.fight_style_selected fss
                where fss.character_id = $1;
                        
              return true;
            end
            $$ language plpgsql strict security definer;

            create or replace function app_character.delete_class_dependencies (character_id uuid)
            returns boolean as $$
            begin
              perform app_character.delete_all_class_asis_by_id($1);
              perform app_character.delete_all_class_skills_by_id($1);
              perform app_character.delete_all_class_spell_sels_by_character_id($1); 
              perform app_character.delete_all_class_fight_style($1);
            return true;
            end
            $$ language plpgsql strict security definer;
        `)
)

exports.down = knex => (
    knex.schema.raw(``)
)
