const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerJSDoc = require("swagger-jsdoc");

const PORT = process.env.PORT || 5000;

const app = express();

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Chat APP",
            version: "1.0.0",
            description: "A Simple chat application"
        },
        servers: [
            {
                url: "http://localhost:4000"
            }
        ],
    },
    apis: ["./routes/*.js"]
}
const specs = swaggerJSDoc(options)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
dotenv.config();

app.use("/", (req, res) => {
    res.send("Hello, world!");
})

app.listen(PORT, console.log("Server is running on port " + PORT));
