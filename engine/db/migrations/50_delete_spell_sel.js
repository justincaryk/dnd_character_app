exports.up = knex => (
    knex.schema
        .raw(`
          app_character.delete_all_class_spell_sels_by_character_id (character_id uuid)
          returns boolean as $$
          begin
            delete from app_character.spell_selected ss
              where ss.character_id = $1
              and ss.spell_sel_from = 'class';
                    
            return true;
          end
          $$ language plpgsql strict security definer;
        `)
)

exports.down = knex => (
    knex.schema.raw(``)
)
