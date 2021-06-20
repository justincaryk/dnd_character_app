exports.up = knex => (
    knex.schema
        .raw(`
            create table if not exists classes (
                id uuid primary key,
                name varchar (30) not null,
                source varchar (10),
                page int,
                srd boolean,
                hd_number int,
                hd_faces int,
                proficiency varchar[],
                spellcasting_ability varchar(5),
                caster_progression varchar(10),
                prepared_spells text,
                cantrip_progression int[],
                spells_known_progression int[],
                spells_known_progression_fixed int[],
                spells_known_progression_fixed_allow_lower_level boolean,
                spells_known_progression_fixed_by_level json,
                class_features text[],
                meta json,
                starting_proficiencies json,
                starting_equipment json,
                optional_feature_progression json,
                multiclassing json,
                subclass_title text
            );
        `)
)

exports.down = knex => (
    knex.schema.dropTable('classes')
)