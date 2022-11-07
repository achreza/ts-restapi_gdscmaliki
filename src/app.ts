import express from "express";
import connection from "./config/config";
import { json, urlencoded } from "body-parser";
import memberRoutes from "./routes/member";
import eventRoutes from "./routes/event";

const app = express();

app.use(json());

app.use(urlencoded({ extended: true }));
app.use("/member", memberRoutes);
app.use("/event", eventRoutes);
//routes
require("./routes/images")(app);

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(500).json({ message: err.message });
});

connection
  .sync()
  .then(() => {
    console.log("Database Synced Successfully");
  })
  .catch((err) => {
    console.log("Database Sync Failed");
    console.log(err);
  });

app.listen(3000, () => {
  {
    console.log("Server is running on : http://localhost:3000");
  }
});
