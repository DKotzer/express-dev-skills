let skills = [
  { skill: "MEAN", time: "4 years", proficiency: "high", index: 0 },
  { skill: "Python", time: "7 years", proficiency: "high", index: 1 },
  { skill: "AWS", time: "2 years", proficiency: "high", index: 2 },
  { skill: "Rust", time: "1 year", proficiency: "medium", index: 3 },
];

//use skills array to populate skills.ejs
exports.index = function (req, res) {
  res.render("../app/views/skills.ejs", { data: skills });
};

exports.id = function (req, res) {
  //delete troubleshooting - was exports.index before
  res.render("../app/views/skill.ejs", { data: people });
};

exports.skill_make_get = function (req, res) {
  res.render("../app/views/skill.ejs", { data: skills[req.params.id] });
};

exports.skill_create_get = function (req, res) {
  res.render("../app/views/newSkill.ejs", {});
};

exports.skill_create_post = function (req, res) {
  skills.push({
    skill: req.body.skill,
    time: req.body.time,
    proficiency: req.body.proficiency,
    index: skills.length,
  });
  res.redirect("/skills");
};
// res.redirect("/skills");
// exports.skills_delete_get = function (req, res) {
//   skills.splice(req.query.id, 1);
//   res.render("../app/views/skills.ejs", { data: skills });
// };

exports.skill_delete_get = function (req, res) {
  console.log("debug: " + JSON.stringify(req.query.id));
  skills.splice(req.query.id, 1);
  // res.render("../app/views/skills.ejs", { data: skills });
  res.redirect("/skills");
};
