'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('enterprises', {
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false 
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false, 
        validate: {
          notEmpty: { msg: "required field" },
          notNull: { msg: "not null field" }, 
        }
      },
      nit: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, 
        validate: {
          notEmpty: { msg: "required field" },
          notNull: { msg: "not null field" }, 
        }
      },
      phone: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        unique: true, 
        allowNull: false,
        validate: {
          notEmpty: { msg: "required field" },
          notNull: { msg: "not null field" },
          isEmail: { msg: "not is email"} 
        } 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deleteAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('enterprises');
  }
};