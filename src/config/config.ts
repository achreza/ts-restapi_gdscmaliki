import { Sequelize } from "sequelize-typescript";

import { Members } from "../models/member";
import { Events } from "../models/event";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "gdsc_maliki",
  logging: false,
  models: [Members, Events],
});

export default connection;
