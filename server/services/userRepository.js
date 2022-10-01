import { pool } from "./pool.js";

export const findUserByName = async (name) => {
  const result = await pool.query("SELECT * FROM users WHERE name=?", [name]);

  if (result[0].length < 1) {
    console.log("User with this id was not found");
    return null;
  }
  return result[0][0];
};

export const getAllUsers = async () => {
  const result = await pool.query("SELECT * FROM users");

  return result[0];
};

export const storeUser = async (user) => {
  console.log(user);
  const result = await pool.query(
    "INSERT INTO users (name, password) VALUES (?, ?)",
    [user.name, user.password]
  );

  return result[0][0];
};

/*
// Not yet necessary for now
async function update(id, user) {
  const result = await query(
    `UPDATE users SET name="${user.name} WHERE id=${id}`
  );

  let message = "Error in updating user.";

  if (result.affectedRows) {
    message = "User updated successfully";
  }

  return { message };
}
*/

export const deleteUser = async (id) => {
  const result = await pool.query("DELETE FROM users WHERE id=?", [id]);

  return result[0][0];
};
