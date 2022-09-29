import express, { json, urlencoded } from "express";
const app = express();
const port = 3000;
import { userRouter } from "./routes/userRouter.js";

app.use(json());
app.use(
  urlencoded({
    extended: true,
  })
);

app.use("/users", userRouter);

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
