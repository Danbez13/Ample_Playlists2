
exports.up = function(knex, Promise) {
    return knex.schema.createTable("music", table => {
        table.increments('id')
        table.integer('playlist_id')
        table.string('song')
        table.string('artist')
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('music')
};
