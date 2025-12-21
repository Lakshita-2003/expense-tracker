
const express = require("express");
const Transaction = require("../models/Transaction");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const data = await Transaction.find({ userId: req.user });
  res.json(data);
});

router.post("/", auth, async (req, res) => {
  const transaction = await Transaction.create({
    ...req.body,
    userId: req.user
  });
  res.json(transaction);
});

router.delete("/:id", auth, async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
