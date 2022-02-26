const router = require("express").Router();
const {reviewSubmit,postReview,thanksSubmit} = require("../controllers/reviewController")
router.get("/submit",reviewSubmit)
router.get("/submit/thanks",thanksSubmit)
router.post("/submit",postReview)
module.exports = router;