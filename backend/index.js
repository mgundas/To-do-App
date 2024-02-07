const toDoRouter = require("./routes/toDo");
const express = require('express');
const app = express();

app.use("/api/v1/todo", toDoRouter)

app.use((req, res) => {
   res.status(404).json({
      success: false,
      message: "not.found"
   })
})

const PORT = 80
app.listen(PORT, () => {console.log(`Listening on ${PORT}`)});