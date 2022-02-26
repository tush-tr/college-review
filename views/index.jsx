var React = require("react");
var DefaultLayout = require("./default");
const Searchbar = require("./searchbar");
const CollegeData = require("./collegedata");

const App = ({title,data}) => {
  return (
    <DefaultLayout title={title}>
      <Searchbar />
      <CollegeData data={data} />
    </DefaultLayout>
  );
};

module.exports = App;
