const express = require("express");
const router = express.Router();
const contract = require("../contractService");

router.post("/add", async (req, res) => {
  const { address } = req.body;
  try {
    const tx = await contract.addAdmin(address);
    await tx.wait();
    res.send({ message: `✅ Admin added: ${address}` });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Failed to add admin" });
  }
});

router.get("/list", async (req, res) => {
  try {
    console.log("getting list")
    const admins = await contract.getAdmins();
    console.log(admins)
    res.json(admins);
  } catch (err) {
    console.error("Error fetching admin list:", err);
    res.status(500).send("Failed to fetch admin list");
  }
});

module.exports = router;
