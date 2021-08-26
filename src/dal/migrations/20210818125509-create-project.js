'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('projects', {
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
      description: {
        type: Sequelize.STRING,
        allowNull: false, 
        validate: {
          notEmpty: { msg: "required field" },
          notNull: { msg: "not null field" }, 
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
      userUuid: {
        type: Sequelize.UUID,
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: "User",
          key: "uuid"
        },
        validate: {
          notEmpty: { msg: "required field" },
          notNull: { msg: "not null field" }
        }
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deleteAt: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('projects');
  }
};