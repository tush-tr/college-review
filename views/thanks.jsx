var React = require("react");
var DefaultLayout = require("./default");

const Thanks = ({title}) => {
  return (
    <DefaultLayout title={title}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUCpmfSKNbdP2fWdeHjQtQ3KGvQu2RPGreA&usqp=CAU" />
      Thank you for submitting your review
    </DefaultLayout>
  );
};

module.exports = Thanks;
