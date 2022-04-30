exports.up = knex =>
  knex.schema.raw(`
            alter table public.subclass_features
                add column is_suboption boolean;
        `)

exports.down = knex => knex.schema.raw(``)
