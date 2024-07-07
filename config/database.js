import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// Create a connection to PostgreSQL
const sequelize = new Sequelize({
  dialect: "postgres",
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: "localhost",
  port: 5432,
});

sequelize
  .authenticate()
  .then(() =>
    console.log("Successfully creating connection to PostgreSQL database")
  )
  .catch((err) =>
    console.error("Unable to connect to PostgreSQL database:", err)
  );

export default sequelize;
