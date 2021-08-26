'use strict';

var _sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Ticket extends _sequelize.Model {
    static associate({
      UserHistory
    }) {
      this.belongsTo(UserHistory, {
        foreignKey: "userHistoryUuid",
        as: "userHistory"
      });
    }

  }

  ;
  Ticket.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    commentary: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "required field"
        },
        notNull: {
          msg: "not null field"
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "required field"
        },
        notNull: {
          msg: "not null field"
        }
      }
    },
    userHistoryUuid: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "required field"
        },
        notNull: {
          msg: "not null field"
        }
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    deleteAt: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: "Ticket",
    tableName: "tickets"
  });
  return Ticket;
};