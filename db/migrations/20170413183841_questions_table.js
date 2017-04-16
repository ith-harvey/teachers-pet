
exports.up = function(knex) {
  return knex.schema.createTable('questions', table => {
      table.increments()
      table.string('owner_name').notNullable()
      table.string('title').notNullable()
      table.text('description').notNullable()
      table.integer('difficulty').notNullable()
      table.boolean('answered').notNullable().defaultTo(false)
      table.timestamps(true,true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('questions')

};
