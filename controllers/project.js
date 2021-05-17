const Project = require("../models/Project");

const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    projects.length > 0 && res.status(200).json(projects);
    res.status(404).send({ errorCode: "NotFound" });
  } catch (error) {
    console.error(error);
    res.status(400).send({ errorCode: "ServerError" });
  }
};

const createNewProjectEntry = async (req, res) => {
  try {
    const { name, year, image, description } = req.body;
    const project = new Project({
      name,
      year,
      image,
      description,
    });
    await project.save();
    res.status(200).send(project);
  } catch (error) {
    console.error(error);
    res.status(400).send({ errorCode: "ServerError" });
  }
};

const getProjectById = async (req, res) => {
  try {
    const project = await Project.findOne({ _id: req.query.id });
    project !== null && res.status(200).send(project);
    res.status(404).send({ errorCode: "NotFound" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ errorCode: "ServerError" });
  }
};
module.exports = { getAllProjects, createNewProjectEntry, getProjectById };
