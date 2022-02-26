var React = require("react");
const CollegeBox = require("./collegebox");
const CollegeData = ({data}) => {
    console.log(typeof(data))
  return (
    <table>
        {data.map((collegeReview)=>(<CollegeBox collegeName={collegeReview.College} collegeReview={collegeReview.Reviews} key=""/>))}
    </table>
  );
};
module.exports = CollegeData;
