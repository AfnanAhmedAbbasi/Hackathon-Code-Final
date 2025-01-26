const http = require('http');
const connectToDb = require('./db/db');
const express = require('express');
const cors = require('cors');
const { body } = require("express-validator")
const app = express();
const port = process.env.PORT || 4000;
const userRoutes = require("./routes/user.routes")
const todosRoutes = require("./routes/todos.routes")


app.use(cors());
app.use(express.json());


connectToDb();


app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.use("/users", userRoutes)
app.use("/todos", todosRoutes)

module.exports = app;

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});


module.exports = app;