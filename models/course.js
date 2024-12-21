const mongoose = require("mongoose");

const chapterSchema = new mongoose.Schema({
    title: String,
    content: String,
    description: String,
    videoLink: String,
    duration: Number,
});

const courseSchema = new mongoose.Schema({
    category: String,
    chapters: [chapterSchema],
    description: String,
    duration: Number,
    instructorName: String,
    language: String,
    level: String,
    price: Number,
    status: String,
    visibility: String,
});

module.exports = mongoose.model("Course", courseSchema);
