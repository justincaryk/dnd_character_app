exports.up = knex => (
    knex.schema
        .raw(`
            create or replace function app_character.get_spells_by_class_name(class_name varchar)
            returns setof public.spells as $$
            
            select * from public.spells t
                where to_tsvector(t.dnd_class) @@ to_tsquery($1);
            
            $$ language sql stable;
            
            grant execute on function app_character.get_spells_by_class_name(class_name varchar) TO role_minion;
        `)
)

exports.down = knex => (
    knex.schema.raw(``)
)
