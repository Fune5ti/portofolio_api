const mongoose = require("mongoose");

const { Schema } = mongoose;

/**
 * Represents a skill for the portofolio
 * @param {String} name - The name of the skill that is representend
 * @param {Number} rating - The proeficiency for the represented skill
 */

const skillSchema = new Schema(
  {
    name: String,
    rating: Number,
  },
  { versionKey: false }
);

module.exports = mongoose.model("Skill", skillSchema);
