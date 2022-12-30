const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet")
const swaggerUI = require("swagger-ui-express");
const swaggerFile = require('./swagger-output.json')
const home = require("./routes/main")
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
dotenv.config();
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile))

app.use(home)

app.listen(PORT, console.log("Server is running on port " + PORT));
