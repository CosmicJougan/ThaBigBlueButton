import { Router } from "express";
import cors from "cors";
import {
  findUserByName,
  getAllUsers,
  storeUser,
  deleteUser,
} from "../services/userRepository.js";

export const usersController = Router();

usersController.use(cors());

usersController.get("/:name", async (req, res, next) => {
  try {
    res.set("Access-Control-Allow-Origin", "*");
    res.json(await findUserByName(req.params.name));
  } catch (err) {
    console.error(`Error while getting user `, err.message);
    next(err);
  }
});

usersController.get("/", async (req, res, next) => {
  try {
    res.set("Access-Control-Allow-Origin", "*");
    res.json(await getAllUsers());
  } catch (err) {
    console.error(`Error while getting users `, err.message);
    next(err);
  }
});

usersController.post("/", async (req, res, next) => {
  try {
    res.set("Access-Control-Allow-Origin", "*");
    console.log(req.body);
    res.json(await storeUser(req.body));
  } catch (err) {
    console.error(`Error while creating new user`, err.message);
    next(err);
  }
});

// usersController.put("/:id", async (req, res, next) => {
//   try {
//     res.json(await update(req.params.id, req.body));
//   } catch (err) {
//     console.error(`Error while updating user `, err.message);
//     next(err);
//   }
// });

usersController.delete("/:id", async (req, res, next) => {
  try {
    res.set("Access-Control-Allow-Origin", "*");
    res.json(await deleteUser(req.params.id));
  } catch (err) {
    console.error(`Error while deleting user`, err.message);
    next(err);
  }
});
