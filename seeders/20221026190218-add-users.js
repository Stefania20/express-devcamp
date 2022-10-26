'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('users', [{
        username: 'John Doe',
        email:'john@gmail.com',
        password:'123456'
      },
      {
        username: 'Lina Doe',
        email:'Lina@gmail.com',
        password:'123'

      },
      {
        username: 'Camila Doe',
        email:'camila@gmail.com',
        password:'12352'
      }

    ],{});
    
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('users', null, {});
    
  }
};
