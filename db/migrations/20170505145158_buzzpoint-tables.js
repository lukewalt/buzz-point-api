
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table){
    table.increments();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
  })
  .createTable('post', function(table){
    table.increments();
    table.integer('user_id').unsigned().references('user.id');
    table.boolean('positive').notNullable();
    table.string('comment');
    table.string('image');
    table.string('lat_lng').notNullable();
    table.string('zipcode').notNullable();
    table.integer('zone').unsigned();
    table.timestamp('timestamp').notNullable().defaultTo(knex.fn.now());
  })
  .createTable('tag', function(table){
    table.increments();
    table.string('tag_name').notNullable();
    table.string('category').notNullable();
  })

};

exports.down = (knex, Promise) => knex.schema.dropTable('tag').dropTable('post').dropTable('user')
