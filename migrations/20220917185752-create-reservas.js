'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reservas', {
      reservas_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      inicio_fecha: {
        type: Sequelize.DATE
      },
      fin_fecha: {
        type: Sequelize.DATE
      },
      habitacion: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'habitaciones',
          },
          key:'habitacion_numero'
        }
      },
      huesped: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'huespedes',
          },
          key:'huesped_id'
        }
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
    await queryInterface.dropTable('reservas');
  }
};