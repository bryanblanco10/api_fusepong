'use strict';
import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
  class Enterprise extends Model {
    static associate({ User }) {
      this.hasOne(User, {
        foreignKey: "enterpriseUuid"
      })
    }
  };
  Enterprise.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, 
      validate: {
        notEmpty: { msg: "required field" },
        notNull: { msg: "not null field" }, 
      }
    },
    nit: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, 
      validate: {
        notEmpty: { msg: "required field" },
        notNull: { msg: "not null field" }, 
      }
    },
    phone: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique: true, 
      allowNull: false,
      validate: {
        notEmpty: { msg: "required field" },
        notNull: { msg: "not null field" },
        isEmail: { msg: "not is email"} 
      } 
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    },
    deleteAt: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Enterprise',
    tableName: "enterprises",
    timestamps: true
  });
  return Enterprise;
};