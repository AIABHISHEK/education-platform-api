const Quiz = require("../models/quiz");

// Create a quiz for a course
exports.createQuiz = async (req, res) => {
    try {
        const quiz = new Quiz({ ...req.body, courseId: req.params.courseId });
        await quiz.save();
        res.status(201).json(quiz);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get quizzes for a course
exports.getQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find({ courseId: req.params.courseId });
        res.json(quizzes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific quiz
exports.getQuiz = async (req, res) => {
    console.log(req.params.id);
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (!quiz) return res.status(404).json({ error: "Quiz not found" });
        res.json(quiz);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a quiz
exports.updateQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!quiz) return res.status(404).json({ error: "Quiz not found" });
        res.json(quiz);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a quiz
exports.deleteQuiz = async (req, res) => {
    try {
        const quiz = await Quiz.findByIdAndDelete(req.params.id);
        if (!quiz) return res.status(404).json({ error: "Quiz not found" });
        res.json({ message: "Quiz deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
