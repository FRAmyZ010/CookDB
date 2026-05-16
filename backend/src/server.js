const express = require("express");
const cors = require("cors");

const app = require("./app")
const PORT = 3000;

require("./database");

app.use(cors());
app.use(express.json());



app.listen(PORT, () => {
  console.log(`✅ SERVER IS RUNNING ON PORT ${PORT}`);
});
