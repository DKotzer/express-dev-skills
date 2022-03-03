const express = require("express");

// Use the router module of express
const router = express.Router();

const skillsCtrl = require("../controllers/skills");

// index
router.get("/skills", skillsCtrl.index);

router.get("/skills/:id", skillsCtrl.skill_create_get);
// router.get("/", peopleCtrl.person_create_get);

module.exports = router;

// person_create_get;

// exports.person_create_post = function (req, res) {
//   people.push({ firstName: req.body.firstName, lastName: req.body.lastName });
//   res.status(201).render("../app/views/people.ejs", { data: people });
// };
