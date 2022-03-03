const express = require("express");

// Use the router module of express
const router = express.Router();

const indexCtrl = require("../controllers/index");
router.get("/", indexCtrl.index);

// export the router object so we can use it in server.js
module.exports = router;
