import express, { json, urlencoded } from "express";
import cors from "cors";

const app = express();
const port = 3000;
import { usersController } from "./routes/usersController.js";

app.use(json());
app.use(
  urlencoded({
    extended: true,
  })
);

app.use("/users", usersController);

app.use(cors());
// app.use(
//   cors({
//     origin: "*",
//     methods: ["GET", "POST", "DELETE", "UPDATE", "PUT"],
//   })
// );

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
