const express = require("express");
const router = express.Router();

router.get("/:id", (req, res) => {
  let {id: timeID} = req.params;
  timeID = timeID.includes("-") ? timeID : Number(timeID);
  const date = new Date(timeID);

  if (!date) {
    return res.status(404).json({
      msg: "Please provide a valid timestamp or date string in the URL.",
    });
  }

  res.status(200).json({
    unix: `${Math.floor(date.getTime() / 1000)}`,
    utc: `${date.toUTCString()}`,
  });
});

module.exports = router;
