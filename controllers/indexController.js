const app = require("../app");
const express = require("express");
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
const getForm = (req, res) => {
  res.render("form");
};
const postForm = (req, res) => {
  const messageText = req.body.messageText;
  const messageUser = req.body.userText;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect("/");
};

module.exports = { renderIndex, getForm, postForm };
