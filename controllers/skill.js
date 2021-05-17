const Skill = require("../models/Skill");

const getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    skills !== null && res.status(200).json(skills);
    res.status(404).send("NotFound");
  } catch (error) {
    console.error(error);
    res.status(400).send("ServerError");
  }
};

const createNewSkill = async (req, res) => {
  try {
    const { name, rating } = req.body;
    const skill = new Skill({
      name,
      rating,
    });
    await skill.save();
    res.status(200).send(skill);
  } catch (error) {
    console.error(error);
    res.status(400).send("ServerError");
  }
};

const getSkillById = async (req, res) => {
  try {
    const skill = await Skill.findOne({ _id: req.query.id });
    skill !== null && res.status(200).send(skill);
    res.status(404).send("NotFound");
  } catch (error) {
    console.error(error);
    res.status(500).send("ServerError");
  }
};
module.exports = { getAllSkills, createNewSkill, getSkillById };
