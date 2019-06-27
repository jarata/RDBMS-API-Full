
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts')
      .truncate()
      .then(function () {
          // Inserts seed entries
          return knex('cohorts').insert([
              {id: 1, name: 'WEB16'},
              {id: 2, name: 'WEB16 Flex'},
              {id: 3, name: 'WEB16 Flex Emily'}
          ]);
      });
};
