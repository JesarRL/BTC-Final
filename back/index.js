const express = require("express");
const conectarDB = require("./config/db")

const app = express();
conectarDB()


app.use(express.json())
app.use("/api", require("./routes/routes"))

//app.get("/", (req, res) => {
// res.send("Que gran putas le pasa perro?");
//});

// servidor http://localhost:3000/ 
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});