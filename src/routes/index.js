var express = require("express");
var router = express.Router();
const skillController = require("../controllers/skill");
const projectController = require("../controllers/project");
// Skill routes
router.get("/skill/all", skillController.getAllSkills);
router.get("/skill?:id", skillController.getSkillById);
router.post("/skill", skillController.createNewSkill);

// Project routes
router.get("/project/all", projectController.getAllProjects);
router.get("/project?:id", projectController.getProjectById);
router.post("/project", projectController.createNewProjectEntry);

module.exports = router;
