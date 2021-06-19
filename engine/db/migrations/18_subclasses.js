exports.up = knex => (
    knex.schema
        .raw(`
            create table if not exists subclasses (
                id uuid primary key,
                name text not null,
                short_name text not null,
                subclass_features text[],
                class_id uuid references classes(id),
                subclass_table_groups json[],
                additional_spells json[],
                spellcasting_ability varchar(10),
                caster_progression varchar(10),
                cantrip_progression int[],
                spells_known_progression int[],
                source varchar (10),
                page int
            );
        `)
)

exports.down = knex => (
    knex.schema.dropTable('subclasses')
)