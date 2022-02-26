const reviewsDb = require("../utils/database");

exports.reviewSubmit = async (req, res, next) => {
  const params = { title: "College Reviews" };
  res.status(200).render("reviews", params);
};
exports.postReview = async (req, res, next) => {
  const {
    studentName,
    college,
    curriculam,
    faculty,
    life,
    scholarship,
    placement,
  } = req.body;
  console.log(req.body);
  const savedReview = await reviewsDb.create({
    College: college,
    Reviews: {
      "Course Curriculum": curriculam,
      "About faculty": faculty,
      "Campus Life": life,
      Scholarship: scholarship,
      Placement: placement,
    },
    submitter: studentName,
  });
  res.status(200).redirect("/submit/thanks");
};
exports.thanksSubmit = async (req, res, next) => {
  const params = { title: "College Reviews" };
  res.status(200).render("thanks", params);
};
