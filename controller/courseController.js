const Course = require("../models/course");

// Create a course
exports.createCourse = async (req, res) => {
    try {
        const course = new Course(req.body);
        await course.save();
        res.status(201).json(course);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};

// Get all courses
exports.getCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific course
exports.getCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({ error: "Course not found" });
        res.json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a course
exports.updateCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!course) return res.status(404).json({ error: "Course not found" });
        res.json(course);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a course
exports.deleteCourse = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);
        if (!course) return res.status(404).json({ error: "Course not found" });
        res.json({ message: "Course deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
