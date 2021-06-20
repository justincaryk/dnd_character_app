//every seed runs every time yarn seed:run is executed, so we need to delete the data in an order that won't throw errors
exports.seed = async (knex) => {
    await knex('subclass_features')
            .del()

    await knex('class_features')
        .del()

    await knex('subclasses')
        .del()

    await knex('classes')
        .del()

    await knex('diseases')
        .del()

    await knex('conditions')
        .del()

    await knex('race_features')
        .del()

    await knex('subrace_features')
        .del()

    await knex('subraces')
        .del()

    await knex('races')
        .del()

    await knex('racial_features')
        .del()

    await knex('bgs')
        .del()

    await knex('feats')
        .del()

    await knex('spells')
        .del()

    await knex('spell_slugs')
        .del()

    await knex('equipment')
        .del()

    await knex('skills')
        .del()

    await knex('attributes')
        .del()

    await knex('languages')
        .del()

    await knex('bg_features')
        .del()
}