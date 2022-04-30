exports.up = knex =>
  knex.schema.raw(`
            alter table app_character."character"
            add column current_level INTEGER default 1
            constraint valid_number
              check(current_level < 21 and current_level > 0);
        `)

exports.down = knex => knex.schema.raw(``)
