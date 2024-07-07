import User from "../model/User.js";

async function getAllUsers() {
  const users = await User.findAll();
  return users;
}

async function getUserById(id) {
  const user = await User.findByPk(id);
  return user;
}

async function createUser({ username, email, password }) {
  console.log(username);
  console.log(email);
  console.log(password);
  const newUser = await User.create({ username, email, password });
  return newUser;
}

async function updateUser(id, newData) {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error(`User with ${id} is not found`);
  }
  await user.update(newData);
  return user;
}

async function deleteUser(id) {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error(`User with ${id} is not found`);
  }
  await user.destroy();
  return true;
}

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
