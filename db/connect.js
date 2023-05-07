const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://eren123:eren123@nodeexpressprojects.4dprot3.mongodb.net/task-manager?retryWrites=true&w=majority";

mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to the db..."))
  .catch((err) => console.log(err));
