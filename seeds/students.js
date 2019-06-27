
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students')
      .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1, name: 'Test', cohort_id: 1},
        {id: 2, name: 'Test 2', cohort_id: 2},
        {id: 3, name: 'Test 3', cohort_id: 3}
      ]);
    });
};
