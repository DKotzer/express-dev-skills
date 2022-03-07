let skills = [
  { skill: "MEAN", time: "4 years", proficiency: "high", index: 0 },
  { skill: "Python", time: "7 years", proficiency: "high", index: 1 },
  { skill: "AWS", time: "2 years", proficiency: "high", index: 2 },
  { skill: "Rust", time: "1 year", proficiency: "medium", index: 3 },
];

function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find((skill) => skill.id == id);
}

module.exports = {
  getAll,
  getOne,
};
