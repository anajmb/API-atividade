const express = require('express')
const userController = require("./controller/userController")

const router = express.Router()

router.post("/User", (req, res) => {
    userController.create(req, res)
})

router.get("/User", (req, res) => {
    userController.findMany(req, res)
})

router.get("/User/:id", (req, res) => {
    userController.findUnique(req, res)
})

router.put("/User/:id", (req, res) => {
    userController.update(req, res)
})

router.delete("/User/:id", (req, res) => {
    userController.delete(req, res)
})

module.exports = router