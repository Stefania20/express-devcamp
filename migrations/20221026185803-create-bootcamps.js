'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('bootcamps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull:false,
        type: Sequelize.STRING
      },
      description: {
        allowNull:false,
        type: Sequelize.STRING
      },
      wedsite: {
        allowNull:false,
        type: Sequelize.STRING
      },
      phone: {
        allowNull:false,
        type: Sequelize.STRING
      },
      average_rating: {
        allowNull:false,
        type: Sequelize.DOUBLE
      },
      average_cost: {
        allowNull:false,
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('bootcamps');
  }
};