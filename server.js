import express from "express";
import bodyParser from "body-parser";
import { Sequelize } from "@sequelize/core";
import { PostgresDialect } from "@sequelize/postgres";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(bodyParser.json());

// Create a connection to PostgreSQL
const sequelize = new Sequelize({
  dialect: PostgresDialect,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
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

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export { sequelize };
