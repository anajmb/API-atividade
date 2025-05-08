const express = require('express')
const userController = require("./controller/userController")

const authenticate = require("./middleware/authMiddleware")

const router = express.Router()

router.post("/login", (req, res) => {
    userController.login(req, res)
})

router.post("/User", authenticate, (req, res) => {
    userController.create(req, res)
})

router.get("/User", authenticate, (req, res) => {
    userController.findMany(req, res)
})

router.get("/User/:id", authenticate, (req, res) => {
    userController.findUnique(req, res)
})

router.put("/User/:id", authenticate, (req, res) => {
    userController.update(req, res)
})

router.delete("/User/:id", authenticate, (req, res) => {
    userController.delete(req, res)
})

module.exports = router