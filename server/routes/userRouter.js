import { Router } from "express";
import {
  findUserById,
  storeUser,
  deleteUser,
} from "../services/userRepository.js";

export const userRouter = Router();

userRouter.get("/:id", async (req, res, next) => {
  try {
    res.json(await findUserById(req.params.id));
  } catch (err) {
    console.error(`Error while getting user `, err.message);
    next(err);
  }
});

userRouter.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    res.json(await storeUser(req.body));
  } catch (err) {
    console.error(`Error while creating new user`, err.message);
    next(err);
  }
});

// userRouter.put("/:id", async (req, res, next) => {
//   try {
//     res.json(await update(req.params.id, req.body));
//   } catch (err) {
//     console.error(`Error while updating user `, err.message);
//     next(err);
//   }
// });

userRouter.delete("/:id", async (req, res, next) => {
  try {
    res.json(await deleteUser(req.params.id));
  } catch (err) {
    console.error(`Error while deleting user`, err.message);
    next(err);
  }
});
