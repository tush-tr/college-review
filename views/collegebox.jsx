const React = require("react");

const CollegeBox = ({ collegeName, collegeReview, key }) => {
  return (
    <tr className="college-review-table-row">
      <td className="collegename">
        <b>College Name: </b>
        {collegeName}
      </td>
      <td className="reviewof review-box-wrapper">
        <h4>Review: </h4>
        <br />
        <h6 className="review-heading-title">Course Curriculum</h6>
        <p className="review-heading-paragraph">{collegeReview["Course Curriculum"]}</p>
        <h6 className="review-heading-title">About faculty</h6>
        <p className="review-heading-paragraph">{collegeReview["About faculty"]}</p>
        <h6 className="review-heading-title">Campus Life</h6>
        <p className="review-heading-paragraph">{collegeReview["Campus Life"]}</p>
        <h6 className="review-heading-title">Scholarship</h6>
        <p className="review-heading-paragraph">{collegeReview["Scholarship"]}</p>
        <h6 className="review-heading-title">Placement</h6>
        <p className="review-heading-paragraph">{collegeReview["Placement"]}</p>
      </td>
    </tr>
  );
};
module.exports = CollegeBox;
