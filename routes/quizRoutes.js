const express = require("express");
const { createQuiz, getQuizzes, getQuiz, updateQuiz, deleteQuiz } = require("../controller/quizController");
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Quiz:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the quiz
 *         courseId:
 *           type: string
 *           description: The id of the associated course
 *         questions:
 *           type: array
 *           description: A list of questions in the quiz
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: The question id
 *               question:
 *                 type: string
 *                 description: The quiz question
 *               options:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: A list of options for the question
 *               correctAnswer:
 *                 type: string
 *                 description: The correct answer to the question
 *       required:
 *         - courseId
 *         - questions
 *       example:
 *         id: quiz123
 *         courseId: course123
 *         questions:
 *           - id: q1
 *             question: "What is JavaScript?"
 *             options: ["Programming Language", "Text Editor", "Database", "Web Server"]
 *             correctAnswer: "Programming Language"
 */

/**
 * @swagger
 * /quizzes/{courseId}:
 *   post:
 *     summary: Create a new quiz for a specific course
 *     tags: [Quizzes]
 *     parameters:
 *       - in: path
 *         name: courseId
 *         required: true
 *         schema:
 *           type: string
 *         description: The id of the course
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Quiz'
 *     responses:
 *       201:
 *         description: Quiz created successfully
 */
router.post("/:courseId", createQuiz);

/**
 * @swagger
 * /quizzes/{courseId}:
 *   get:
 *     summary: Retrieve all quizzes for a specific course
 *     tags: [Quizzes]
 *     parameters:
 *       - in: path
 *         name: courseId
 *         required: true
 *         schema:
 *           type: string
 *         description: The id of the course
 *     responses:
 *       200:
 *         description: A list of quizzes for the course
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Quiz'
 */
router.get("/course/:courseId", getQuizzes);

/**
 * @swagger
 * /quizzes/{id}:
 *   get:
 *     summary: Retrieve a specific quiz by its id
 *     tags: [Quizzes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The id of the quiz
 *     responses:
 *       200:
 *         description: A specific quiz
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Quiz'
 */
router.get("/:id", getQuiz);

/**
 * @swagger
 * /quizzes/{id}:
 *   put:
 *     summary: Update a specific quiz by its id
 *     tags: [Quizzes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The id of the quiz
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Quiz'
 *     responses:
 *       200:
 *         description: Quiz updated successfully
 */
router.put("/:id", updateQuiz);

/**
 * @swagger
 * /quizzes/{id}:
 *   delete:
 *     summary: Delete a specific quiz by its id
 *     tags: [Quizzes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The id of the quiz
 *     responses:
 *       200:
 *         description: Quiz deleted successfully
 */
router.delete("/:id", deleteQuiz);

module.exports = router;
