const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  let {id: timeID} = req.params;
  let dateID = Number(timeID);
  dateID = Number.isNaN(dateID) ? timeID : dateID;
  const date = new Date(dateID);

  if (date == "Invalid Date") {
    return res.status(404).json({error: "Invalid Date"});
  }
  res.status(200).json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

router.get("/", (req, res) => {
  const date = new Date();

  res.status(200).json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

module.exports = router;
