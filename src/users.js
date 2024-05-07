// Imports small array of users
// Pretend it's an API request
const users = require("./data").default;

// Fetches all users
const getUsers = () => {
  try {
    fetch(`${users}`)
    .then(response => response.text())
    .then (result => `${users}`)
    return users;
  } catch (err) {
    console.log(err)
  }
};

// Filters users by specific ID
const getUser = (id) => {
  const id = users.filter( user.id ==="id");
  return users.find((user) => user.id === id);
};

// test
// console.log(getUser(3));

module.exports = { getUsers, getUser };

