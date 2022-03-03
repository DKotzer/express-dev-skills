let skills = [
  { skill: "MEAN", time: "4 years", proficiency: "high" },
  { skill: "Python", time: "7 years", proficiency: "high" },
  { skill: "AWS", time: "2 years", proficiency: "high" },
  { skill: "Rust", time: "1 year", proficiency: "medium" },
];

//use skills array to populate skills.ejs
exports.index = function (req, res) {
  res.render("../app/views/skills.ejs", { data: skills });
};

exports.skill_create_get = function (req, res) {
  res.render("../app/views/skill.ejs", { data: skills[req.params.id] });
};
