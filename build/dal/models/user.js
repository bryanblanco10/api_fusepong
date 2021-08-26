'use strict';

var _sequelize = require("sequelize");

var _bcryptjs = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  class User extends _sequelize.Model {
    static associate({
      Project,
      Enterprise
    }) {
      this.belongsTo(Enterprise, {
        foreignKey: "enterpriseUuid"
      });
      this.hasMany(Project, {
        foreignKey: "userUuid"
      });
    }

  }

  ;
  User.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    names: {
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
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "required field"
        },
        notNull: {
          msg: "not null field"
        },
        isEmail: {
          msg: "not is email"
        }
      }
    },
    password: {
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
    enterpriseUuid: {
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
    modelName: "User",
    tableName: "users",
    timestamps: true,
    hooks: {
      beforeCreate: user => {
        const salt = (0, _bcryptjs.genSaltSync)();
        user.password = (0, _bcryptjs.hashSync)(user.password, salt);
      }
    }
  });
  return User;
};