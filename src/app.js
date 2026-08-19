const express = require('express')
const app = express()
const noteModel = require('./models/notes.model')
app.use(express.json())

app.post("/notes", async (req, res) => {
    const data = req.body /* {title, description, time} */
    const now = new Date();
    noteModel.create({
        title: data.title,
        description: data.description,
        time: now.toLocaleString()
    })

    res.status(201).json({
        message: "data created successfully"
    })
})
app.get("/notes", async (req, res) => {
    const notes = await noteModel.find()
    res.status(200).json({
        message: "notes fetched successfully",
        notes
    })
})
app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id
    await noteModel.findOneAndDelete({
        _id: id
    })
    res.status(200).json({
        message: "message deleted successfully",
    })
})
app.patch('/notes/:id', async (req, res) => {
    const id = req.params.id
    const description = req.body.description
    await noteModel.findOneAndUpdate({ _id: id }, { description: description })
    const notes = await noteModel.find();
    res.status(200).json({
        message: "data successfully updated",
        notes

    })
})
module.exports = app