'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('huespedes', {
      huesped_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombres: {
        type: Sequelize.STRING
      },
      apellidos: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.INTEGER
      },
      correo: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      ciudad: {
        type: Sequelize.STRING
      },
      pais: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('huespedes');
  }
};