const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const adminRoutes = require("./routes/admin");
app.use("/admin", adminRoutes);

app.listen(3005, () => {
  console.log("✅ Server running on http://localhost:3005");
});
