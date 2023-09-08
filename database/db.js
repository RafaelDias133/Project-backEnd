const mongoose = require("mongoose");

const conectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://ADIMIN123:sudoh4k3rs@cluster0.d4uao5p.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("mongoDB Atlas conectado"))
    .catch((err) => console.log(err));
};

module.exports = conectToDb;
