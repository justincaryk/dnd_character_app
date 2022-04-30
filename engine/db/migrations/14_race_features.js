exports.up = knex =>
  knex.schema.createTable('race_features', table => {
    table.uuid('id').unique().notNullable()
    table.uuid('race_id').unsigned().references('id').inTable('races')
    table
      .uuid('racial_feature_id')
      .unsigned()
      .references('id')
      .inTable('racial_features')
  })

exports.down = knex => knex.schema.dropTable('race_features')
