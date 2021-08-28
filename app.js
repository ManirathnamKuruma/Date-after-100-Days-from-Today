const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  let presentDate = new Date();
  const after = addDays(new Date(presentDate), 100);
  response.send(
    `${after.getDate()}/${after.getMonth() + 1}/${after.getFullYear()}`
  );
});

module.exports = app;
