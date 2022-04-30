exports.up = knex =>
  knex.schema.raw(`
            alter table public.subclass_features
                add column subclass_id uuid references public.subclasses(id); 
        `)

exports.down = knex => knex.schema.raw(``)
