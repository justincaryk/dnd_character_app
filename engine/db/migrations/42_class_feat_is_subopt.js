exports.up = knex =>
  knex.schema.raw(`
            alter table public.class_features
                add column is_suboption boolean;
        `)

exports.down = knex => knex.schema.raw(``)
