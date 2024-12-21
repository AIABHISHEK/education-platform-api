const express = require("express");
const { createCourse, getCourses, getCourse, updateCourse, deleteCourse } = require("../controller/courseController");
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Course:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the course
 *         description:
 *           type: string
 *           description: A brief description of the course
 *         duration:
 *           type: integer
 *           description: The duration of the course in hours
 *         instructorName:
 *           type: string
 *           description: The name of the instructor
 *         language:
 *           type: string
 *           description: The language in which the course is offered
 *         level:
 *           type: string
 *           description: The difficulty level of the course (e.g., beginner, intermediate, advanced)
 *         price:
 *           type: number
 *           format: float
 *           description: The price of the course
 *         status:
 *           type: string
 *           description: The publication status of the course (e.g., published, draft)
 *         visibility:
 *           type: string
 *           description: The visibility of the course (e.g., public, private)
 *         chapters:
 *           type: array
 *           description: A list of chapters in the course
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: The chapter id
 *               title:
 *                 type: string
 *                 description: The title of the chapter
 *               content:
 *                 type: string
 *                 description: The content of the chapter
 *               description:
 *                 type: string
 *                 description: A brief description of the chapter
 *               videoLink:
 *                 type: string
 *                 description: A link to the chapter video
 *               duration:
 *                 type: integer
 *                 description: The duration of the chapter in minutes
 *       required:
 *         - title
 *         - description
 *         - duration
 *       example:
 *         id: course123
 *         description: "Learn the basics of programming."
 *         duration: 10
 *         instructorName: "John Doe"
 *         language: "English"
 *         level: "Beginner"
 *         price: 99.99
 *         status: "Published"
 *         visibility: "Public"
 *         chapters:
 *           - id: chapter1
 *             title: "Getting Started"
 *             content: "Introduction to the course."
 *             description: "Overview of the course."
 *             videoLink: "www.youtube.com/link"
 *             duration: 15
 */


/**
 * @swagger
 * /courses:
 *   post:
 *     summary: Create a new course
 *     tags: [Courses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       201:
 *         description: Course created successfully
 */
router.post("/", createCourse);

/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Retrieve all courses
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: A list of courses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Course'
 */
router.get("/", getCourses);

/**
 * @swagger
 * /courses/{id}:
 *   get:
 *     summary: Retrieve a specific course by its id
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The id of the course
 *     responses:
 *       200:
 *         description: A specific course
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Course'
 */
router.get("/:id", getCourse);

/**
 * @swagger
 * /courses/{id}:
 *   put:
 *     summary: Update a specific course by its id
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The id of the course
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Course'
 *     responses:
 *       200:
 *         description: Course updated successfully
 */
router.put("/:id", updateCourse);

/**
 * @swagger
 * /courses/{id}:
 *   delete:
 *     summary: Delete a specific course by its id
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The id of the course
 *     responses:
 *       200:
 *         description: Course deleted successfully
 */
router.delete("/:id", deleteCourse);

module.exports = router;
