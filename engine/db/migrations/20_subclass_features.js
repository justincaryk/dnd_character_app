exports.up = knex => (
    knex.schema
        .raw(`
            create table if not exists subclass_features (
                id uuid primary key,
                name text not null,
                source varchar(10),
                level int,
                class_id uuid references classes(id),
                subclass_short_name text,
                subclass_source varchar(30),
                is_class_feature_variant boolean,
                page int,
                entries json
            );
        `)
)

exports.down = knex => (
    knex.schema.dropTable('subclass_features')
)