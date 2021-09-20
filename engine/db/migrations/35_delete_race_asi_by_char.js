exports.up = knex => (
    knex.schema
        .raw(`
            create or replace function app_character.delete_all_race_asi_sel_by_character_id (character_id uuid) 
            returns boolean as $$
            begin
              delete from app_character.asi_selected as asi_sel
              where asi_sel.character_id = $1 and asi_from = 'race';
              return true;
            end
            $$ language plpgsql strict security definer;
        `)
)

exports.down = knex => (
    knex.schema.raw(``)
)
