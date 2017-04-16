exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('questions').del()
        .then(function() {
            // Inserts seed entries
            return knex('questions').insert([{
                    id: 1,
                    owner_name: 'thomas',
                    title: 'help with Promises',
                    description: 'I cant figure out how to add these things together but also multiply my ajax calls into the neather of the internet',
                    difficulty: 1,
                    answered: false
                },
                {
                    id: 2,
                    owner_name: 'Sean',
                    title: 'help with for loops',
                    description: 'I cant figure out how to add these things together but also multiply my ajax calls into the neather of the internet. I cant figure out how to add these things together but also multiply my ajax calls into the neather of the internet',
                    difficulty: 4,
                    answered: false
                },
                {
                    id: 3,
                    owner_name: 'Sam',
                    title: 'need help with trolling memes online',
                    description: 'I cant figure out how to troll things together but also troll my ajax calls into the neather of the internet, so everyone ever gets trolled',
                    difficulty: 3,
                    answered: false
                }
            ]);
        }).then(() => {
      return knex.raw (
        "SELECT setval('questions_id_seq', (SELECT MAX(id) FROM questions))"
      )
    });
};
