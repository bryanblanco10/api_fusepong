'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false 
      },
      names: {
        type: Sequelize.STRING,
        allowNull: false, 
        validate: {
          notEmpty: { msg: "required field" },
          notNull: { msg: "not null field" }, 
        }
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
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "required field" },
          notNull: { msg: "not null field" }
        }
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: { msg: "required field" },
          notNull: { msg: "not null field" }
        } 
      },
      enterpriseUuid: {
        type: Sequelize.UUID,
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: "Enterprise",
          key: "uuid"
        },
        validate: {
          notEmpty: { msg: "required field" },
          notNull: { msg: "not null field" }
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
    await queryInterface.dropTable('users');
  }
};