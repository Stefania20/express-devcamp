'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bootcamps', [{
    name:"Java",
    description:"campamento de aprendizaje",
    wedsite:"holaaa",
    phone:5555,
    average_rating:452,
    average_cost:122
    },
    {
      name:"Java Avanzado",
      description:"campamento de aprendizaje",
      wedsite:"holaaaa",
      phone:6666,
      average_rating:5200,
      average_cost:12222

    }

  ],{});
  
  },

  async down (queryInterface, Sequelize) {
  
  }
};
