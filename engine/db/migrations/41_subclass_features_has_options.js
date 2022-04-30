exports.up = knex =>
  knex.schema.raw(`
            alter table public.subclass_features
                add column has_options boolean; 
        `)

exports.down = knex => knex.schema.raw(``)
