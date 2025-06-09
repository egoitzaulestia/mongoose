const express = require("express");
const app = express();
const PORT = 3000;
const { dbConnection } = require("./config/config");

app.use(express.json());

dbConnection();

app.use(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
