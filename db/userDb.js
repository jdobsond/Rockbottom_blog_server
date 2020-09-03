let users = [
  {
    id: 1,
    firstName: "Chuck",
    lastName: "Norris",
    state: "North Dakota",
    userName: "CNorDakota",
    passWord: "hello123",
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    state: "Alaska",
    userName: "JohnD",
    passWord: "1234",
  },
  {
    id: 3,
    firstName: "John",
    lastName: "McCartney",
    state: "immutable",
    userName: "johnmccartney2",
    passWord: "Incredulous",
  },
  {
    id: 4,
    firstName: "Bill",
    lastName: "Jones",
    state: "Maine",
    userName: "billJones",
    passWord: "Bill123",
  },
  {
    id: 5,
    firstName: "Jimmy",
    lastName: "Dean",
    state: "Washington",
    userName: "jimmyd200",
    passWord: "86753o9",
  },
];

function getNextUserId() {
  return users[users.length - 1].id + 1;
}

// function addNewUser(id, firstName, lastName, state)

// console.log(getNextId());

module.exports = { users, getNextUserId };
