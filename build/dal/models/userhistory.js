'use strict';

var _sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class UserHistory extends _sequelize.Model {
    static associate({
      Project,
      Ticket
    }) {
      this.belongsTo(Project, {
        foreignKey: "projectUuid"
      });
      this.hasMany(Ticket, {
        foreignKey: "userHistoryUuid"
      });
    }

  }

  ;
  UserHistory.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    description: {
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
    projectUuid: {
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
    modelName: "UserHistory",
    tableName: "user-histories",
    timestamps: true
  });
  return UserHistory;
};