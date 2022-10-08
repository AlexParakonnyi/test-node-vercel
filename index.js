const express = require("express");
const home = require("./route/home");

const port = 3003;

const app = express();

app.get("/home", (req, res) => {
  res.json(home);
});
app.listen(port, () => console.log(`Server has been started on port ${port}`));
