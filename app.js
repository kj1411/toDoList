const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", "ejs")
app.use(express.static("public"))

var items = []

app.get("/", function (req, res) {
    var today = new Date()
    var currentDay = today.getDay()
    var options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    }
    var Day = today.toLocaleDateString("en-US", options)
    res.render("list", { kindOfDay: Day, newListItem: items })
    // res.send()
    // res.sendFile(__dirname + "index.html")
})
app.post("/", function (req, res) {
    var item = req.body.newItem
    items.push(item)
    res.redirect("/")
})

app.listen(3000, function () {
    console.log("port is working on 3000")
})