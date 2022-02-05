import { v4 as uuidv4 } from "uuid";
let users = [];

export const getUsers = (req, res) => {
  // console.log(users);
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;
  console.log(user);
  const userWithId = { ...user, id: uuidv4() };
  users.push(userWithId);
  res.send(`User with the name of ${user.firstname} added to the database`);
};

export const getOneUser = (req, res) => {
  // How to access Params from URL
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteOneUser = (req, res) => {
  const { id } = req.params;

  // Why users = users This setting my current database = to It's new deleted value mutuating database deleteing the Element with the const {id} = req.body
  // Revisar porque el filter deletes The values here
  users = users.filter((user) => user.id !== id);
  res.send(users);
};

export const updateOneUser = (req, res) => {
  const { id } = req.params;
  const { firstname, lastname, age } = req.body;
  const userTobeUpdated = users.find((user) => user.id === id);

  if (firstname) userTobeUpdated.firstname = firstname;

  if (lastname) userTobeUpdated.lastname = lastname;

  if (age) userTobeUpdated.age = age;
  res.send(`User updated here ${userTobeUpdated.firstname}`);
};
