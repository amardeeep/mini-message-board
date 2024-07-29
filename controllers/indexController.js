const getIndex = (req, res) => {
  res.send("This is the index Page.");
};
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
  res.render("index", { title: "Mini Message Board", messages: messages });
};
module.exports = { getIndex, renderIndex };
