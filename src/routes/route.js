const express = require('express')

const router = express.Router()

const bookingController = require("../controller/bookingController")

router.post("/book",bookingController.createBooking)

module.exports = router;