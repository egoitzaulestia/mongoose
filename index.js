const express = require("express");
const app = express();
const PORT = 3000;
const { dbConnection } = require("./config/config");

app.use(express.json());

app.use("/products", require("./routes/products"));

dbConnection();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
