
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('rockstars').del()
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('rockstars').insert([
        {name: 'Jagger'},
        {name: 'Hendrix'},
        {name: 'Harry'}
      ]);
    });
};
