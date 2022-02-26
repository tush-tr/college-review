const React = require("react");

const CollegeBox = ({ collegeName, collegeReview, key }) => {
  return (
    <tr>
      <td className="collegename">
        <b>College Name: </b>
        {collegeName}
      </td>
      <td className="reviewof">
        <h4>Review: </h4>
        <br />
        <h6>Course Curriculum</h6>
        <p>{collegeReview["Course Curriculum"]}</p>
        <h6>About faculty</h6>
        <p>{collegeReview["About faculty"]}</p>
        <h6>Campus Life</h6>
        <p>{collegeReview["Campus Life"]}</p>
        <h6>Scholarship</h6>
        <p>{collegeReview["Scholarship"]}</p>
        <h6>Placement</h6>
        <p>{collegeReview["Placement"]}</p>
      </td>
    </tr>
  );
};
module.exports = CollegeBox;
