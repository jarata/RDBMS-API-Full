
exports.up = function(knex, Promise) {
    return knex.schema.createTable('students', function(tbl) {
        tbl.increments(); // id
        tbl.string('name', 128) // name
            .notNullable();
        tbl.integer('cohort_id') // cohort id
            .unsigned()
            .references('id')
            .inTable('cohorts');
        tbl.timestamps(true, true); // timestamps
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('students');
};
