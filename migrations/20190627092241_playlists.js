
exports.up = function(knex, Promise) {
    return knex.schema.createTable("playlists", table => {
        table.increments('id')
        table.string('playlist')
        table.string('url')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('playlists')
};
