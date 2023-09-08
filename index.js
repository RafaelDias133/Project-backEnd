const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const conectToDb = require("./database/db");

conectToDb();
const app = express();
const port = 3000;
app.use(express.urlencoded());
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

app.listen(port, () => {
  console.log(`servidor rodando em http://localhost:${3000}`);
});
