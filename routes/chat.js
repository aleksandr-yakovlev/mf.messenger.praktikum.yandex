module.exports = function (req, res) {
  res.render("chat", {
    selected: req.params.id,
    chats: [
      {
        id: 1,
        title: "Title",
        fname: "Who",
        text: "Long message very very very very very long long long long",
      },
      {
        id: 2,
        title: "Title",
        fname: "Who",
        text: "Long message very very very very very long long long long",
      },
      {
        id: 3,
        title: "Title",
        fname: "Who",
        text: "Long message very very very very very long long long long",
      },
    ],
    messages: [
      {
        uname: "User1",
        text: "Long message very very very very very long long long long",
        timestamp: "2019-01-01",
      },
      {
        uname: "User1",
        text: "Long message very very very very very long long long long",
        timestamp: "2019-01-01",
      },
      {
        uname: "User2",
        text: "Long message very very very very very long long long long",
        timestamp: "2019-01-03",
      },
    ],
  });
};
