const express = require("express");
const app = express();
const PORT = 3000;

app.use(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
