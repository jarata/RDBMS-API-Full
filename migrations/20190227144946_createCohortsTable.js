
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cohorts', function(tbl) {
        tbl.increments(); // id
        tbl.string('name', 128) // name
            .notNullable()
            .unique();
        tbl.timestamps(true, true); // timestamps
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cohorts');
};
