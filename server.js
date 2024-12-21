const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");

const swaggerDocs = require("./swagger");

const courseRoutes = require("./routes/courseRoutes");
const quizRoutes = require("./routes/quizRoutes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
// Swagger Documentation
swaggerDocs(app, PORT);
app.use(cors());
app.use(bodyParser.json());

app.use("/api/courses", courseRoutes);
app.use("/api/quizzes", quizRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
