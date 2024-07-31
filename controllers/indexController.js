const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
const renderIndex = (req, res) => {
  res.render("index", { messages: messages });
};
const getForm = (req, res) => {
  res.render("form");
};

const postForm = (req, res) => {
  const messageText = req.body.messageText;
  const messageUser = req.body.userText;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
};

const getOpen = (req, res) => {
  const user = req.params.title;
  const message = req.params.message;
  const date = req.params.date;
  res.render("open", { user: user, message: message, date: date });
};

module.exports = { renderIndex, getForm, postForm, getOpen };
