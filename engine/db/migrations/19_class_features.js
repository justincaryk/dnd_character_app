exports.up = knex => (
    knex.schema
        .raw(`
            create table if not exists class_features (
                id uuid primary key,
                name text,
                class_id uuid references classes(id),
                source text,
                is_class_feature_variant boolean,
                page int,
                class_source text,
                level int,
                entries json
            );
        `)
)

exports.down = knex => (
    knex.schema.dropTable('class_features')
)