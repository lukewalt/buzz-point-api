
exports.up = function(knex, Promise) {

  return knex.schema
  .createTable('user', function(table){
    table.increments();
    table.string('user_name').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
  })
  .createTable('post', function(table){
    table.increments();
    table.integer('user_id').notNullable();
    table.boolean('positive').notNullable();
    table.string('comment');
    table.string('image');
    table.string('latitude').notNullable();
    table.string('longitude').notNullable();
    table.integer('zipcode').unsigned();
    table.string('area_name').notNullable();
    table.integer('zone').unsigned();
    table.timestamp('timestamp').notNullable().defaultTo(knex.fn.now());
  })
  .createTable('tag', function(table){
    table.increments();
    table.string('tag_name').notNullable();
    table.string('category').notNullable();
  })
  .createTable('post_tag', function(table){
    table.increments();
    table.integer('post_id').unsigned().references('post.id');
    table.integer('tag_id').unsigned().references('tag.id');
  })
};

exports.down = (knex, Promise) => knex.schema.dropTable('post_tag').dropTable('post').dropTable('tag').dropTable('user')
