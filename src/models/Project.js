const mongoose = require("mongoose");

const { Schema } = mongoose;

/**
 * Represents a project for the portofolio
 * @param {String} name - The name of the project that is representend
 * @param {Number} year - The year of conclusion for the represented project
 * @param {String} description - A small description for the project
 * @param {String} image - A image that represents the project
 */

const projectSchema = new Schema(
  {
    name: String,
    year: Number,
    description: String,
    image: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model("Project", projectSchema);
