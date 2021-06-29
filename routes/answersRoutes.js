const express = require("express")
const router = express.Router()
const {
   
} = require("../controllers/answerController")

 



router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router