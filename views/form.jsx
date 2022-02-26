var React = require("react");
const ReviewInput = require("./reviewinput");
const Form = () => {
  return (
    <form action="/submit" method="POST" id="reviewform">
      <div className="row">
        <h4>Submit your review here</h4>
        <div className="input-group input-group-icon">
          <input name="studentName" type="text" placeholder="Enter your name" />
        </div>
        <div className="input-group input-group-icon">
          <input name="college" type="text" placeholder="Enter the College Name" />
        </div>
        <span className="components" id="textarea">
          <label for="reviews" id="reviewlabel">
            Your reviews:
          </label>
          <ReviewInput name="curriculam" title="Course Curriculum" />
          <ReviewInput name="faculty" title="About faculty" />
          <ReviewInput name="life" title="Campus Life" />
          <ReviewInput name="scholarship" title="Scholarship" />
          <ReviewInput name="placement" title="Placement" />
        </span>
        <button className="btn">Submit</button>
      </div>
    </form>
  );
};

module.exports = Form;
