var express = require("express");
var router = express.Router();
const skillController = require("../controllers/skill");

router.get("/skill/all", skillController.getAllSkills);
router.get("/skill?:id", skillController.getSkillById);
router.post("/skill", skillController.createNewSkill);

module.exports = router;
