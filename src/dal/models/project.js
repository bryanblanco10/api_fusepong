'use strict';
import { Model } from "sequelize";

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {

    static associate({ User, UserHistory }) {
      this.belongsTo(User, {
        foreignKey: "userUuid",
        as: "user"
      });

      this.hasMany(UserHistory, {
        foreignKey: "projectUuid"
       })
    }
  };
  Project.init({
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
    description: {
      type: DataTypes.STRING,
      allowNull: false, 
      validate: {
        notEmpty: { msg: "required field" },
        notNull: { msg: "not null field" }, 
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "required field" },
        notNull: { msg: "not null field" }
      } 
    },
    userUuid: {
      type: DataTypes.UUID,
      allowNull: false,
      validate: {
        notEmpty: { msg: "required field" },
        notNull: { msg: "not null field" }
      }
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    deleteAt: {
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: "Project",
    tableName: "projects",
    timestamps: true
  });
  return Project;
};