import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";
import User from "./User.js";

const Job = sequelize.define(
  "Job",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    timestamps: true,
    createdAt: "created_at",
    updatedAt: false,
  }
);

User.hasMany(Job, { foreignKey: "user_id", onDelete: "CASCADE" });
Job.belongsTo(User, { foreignKey: "user_id" });

export default Job;
