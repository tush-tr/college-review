const reviewsDb = require("../utils/database");
exports.getCollegeReviews = async (req, res, next) => {
  let data = await reviewsDb.getAll();
  const params = {
    title: "College Reviews",
    data: data,
  };
  res.status(200).render("index", params);
};
exports.postSearch = async (req,res,next)=>{
  let data = await reviewsDb.getAllBy({College: req.body.college})
  const params = {
    title: "College Reviews",
    data: data,
  };
  res.status(200).render("index",params)
}