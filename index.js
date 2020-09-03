let { users, getNextUserId } = require("./db/userDb");
let { posts, getNextPostId } = require("./db/blogPosts");
const express = require("express");
const { request, response } = require("express");
const e = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(4000, () => console.log("The port is running on port 4000"));

// get the full list of users
// get a user by id
// get a post by userName
// create a new user
// create a new post
// delete a post
// delete a user

app.get("/users", (request, response) => {
  try {
    response.status(200).send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete("/user", (request, response) => {
  try {
    let id = request.query.id;
    let filteredUsers = users.filter((el) => el.id != id);
    users = filteredUsers;
    response.status(200).send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.put("/user", (request, response) => {
  try {
    let id = request.query.id;
    let firstName = request.body.firstName;
    let lastName = request.body.lastName;
    let state = request.body.state;
    let userName = request.body.userName;
    let passWord = request.body.passWord;
    let tempUser = {};
    tempUser.id = id;
    tempUser.firstName = firstName;
    tempUser.lastName = lastName;
    tempUser.state = state;
    tempUser.userName = userName;
    tempUser.passWord = passWord;
    users = users.map((user) => (user.id == id ? tempUser : user));
    response.status(200).send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/user-by-id", (request, response) => {
  try {
    let id = request.query.id;
    let user = users.find((el) => el.id == id);
    response.status(200).send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/post", (request, response) => {
  try {
    let userName = request.query.userName;
    let post = posts.filter((el) => el.userName == userName);
    response.status(200).send(post);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.delete("/post", (request, response) => {
  try {
    let id = request.query.id;
    let filteredPosts = posts.filter((el) => el.id != id);
    posts = filteredPosts;
    response.status(200).send(posts);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.post("/create-user", (request, response) => {
  try {
    let id = getNextUserId();
    let firstName = request.body.firstName;
    let lastName = request.body.lastName;
    let state = request.body.state;
    let userName = request.body.userName;
    let passWord = request.body.passWord;
    users.push({
      id: id,
      firstName: firstName,
      lastName: lastName,
      state: state,
      userName: userName,
      passWord: passWord,
    });
    response.status(200).send(users);
  } catch (error) {
    response.status(500).send(error);
    console.log(error);
  }
});

app.post("/create-post", (request, response) => {
  try {
    let id = getNextPostId();
    userName = request.body.userName;
    title = request.body.title;
    textBody = request.body.textBody;
    image = request.body.image;
    timeToRead = request.body.timeToRead;
    timeCreated = request.body.timeCreated;
    posts.push({
      id: id,
      userName: userName,
      title: title,
      textBody: textBody,
      image: image,
      timeToRead: timeToRead,
      timeCreated: timeCreated,
    });
    response.status(200).send(posts);
  } catch (error) {
    response.status(500).send(error);
  }
});
