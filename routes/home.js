const router = require("express").Router();
const {getCollegeReviews,postSearch} = require("../controllers/homeController")
router.get("/",getCollegeReviews)
router.post("/",postSearch)
module.exports = router;