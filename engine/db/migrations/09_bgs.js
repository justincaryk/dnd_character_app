exports.up = knex =>
  knex.schema.createTable('bgs', table => {
    table.uuid('id').unique().notNullable()
    table.string('name').notNullable()
    table.text('description').notNullable()
    table.integer('number_of_extra_languages').notNullable()
    table.json('language_options')
    table.integer('number_of_tools_granted')
    table.json('tool_options')
    table.integer('number_of_skills_granted')
    table.json('skill_options')
    table
      .uuid('background_feature')
      .unsigned()
      .references('id')
      .inTable('bg_features')
    table
      .uuid('alternate_background_feature')
      .unsigned()
      .references('id')
      .inTable('bg_features')
  })

exports.down = knex => knex.schema.dropTable('bgs')
