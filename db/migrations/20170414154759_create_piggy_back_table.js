exports.up = function(knex) {
  return knex.schema.createTable('piggy_backers', table => {
      table.increments()
      table.integer('question_id')
      table.string('owner_name').notNullable()
      table.timestamps(true,true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('piggy_backers')
};
