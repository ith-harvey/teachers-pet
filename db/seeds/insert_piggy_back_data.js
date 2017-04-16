
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('piggy_backers').del()
    .then(function () {
      // Inserts seed entries
      return knex('piggy_backers').insert([
        {id: 1,
        question_id: '1',
        owner_name: 'Bam Bam'
        },
        {id: 2,
        question_id: '2',
        owner_name: 'Erica'
        },
        {id: 3,
        question_id: '2',
        owner_name: 'Derelict'
        }
      ]);
    }).then(() => {
  return knex.raw (
    "SELECT setval('questions_id_seq', (SELECT MAX(id) FROM questions))"
  )
})
};
