posts = [
  {
    id: 1,
    userName: "CNorDakota",
    title: "Just moved to North Dakota",
    textBody: "beautiful place to live",
    image:
      "https://img.travelawaits.com/filter:centercrop/quill/2/c/8/a/2/6/2c8a26eacc365137de9f6ec5b9d7a508c67344a7.jpg?w=800&h=800",
    timeToRead: "10mins",
    timeCreated: "9/3/2020",
  },

  {
    id: 2,
    userName: "JohnD",
    title: "Lorem",
    textBody:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSps4TJKRWy76MMf-IcnFImXaAdGE0hdR6cHA&usqp=CAU",
    timeToRead: "2hrs",
    timeCreated: "7/4/1776",
  },

  {
    id: 3,
    userName: "johnmccartney2",
    title: "I am NOT the Walrus, Stop Asking.",
    textBody:
      "I had another person ask me if I was the walrus today. The kids today have quite the imagination.",
    image:
      "https://i0.wp.com/wildfocusexpeditions.com/wp-content/uploads/2020/04/Tarris_Svalbard_05_2017_4061.jpg",
    timeToRead: "5 seconds",
    timeCreated: "2020-09-09",
  },

  {
    id: 4,
    userName: "billJones",
    title: "Good Morning",
    textBody:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. In arcu cursus euismod quis. Praesent semper feugiat nibh sed pulvinar proin gravida. Enim facilisis gravida neque convallis a cras. Sit amet est placerat in. Amet consectetur adipiscing elit ut aliquam purus sit amet. Venenatis cras sed felis eget velit. Eros in cursus turpis massa tincidunt.",
    image:
      "https://kast.com/wp-content/uploads/2020/03/helloquence-5fNmWej4tAA-unsplash-845x321.jpg",
    timeToRead: "2 minutes",
    timeCreated: "9/3/2020",
  },
  {
    id: 5,
    userName: "jimmyd200",
    title: "What the Heck is Lorem Ipsum?",
    textBody:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image: "https://bit.ly/32QKwF7",
    timeToRead: "30 Sec",
    timeCreated: "4 min",
  },
];

function getNextPostId() {
  return posts[posts.length - 1].id + 1;
}

module.exports = { posts, getNextPostId };
