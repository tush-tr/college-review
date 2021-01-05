var React = require('react');
var DefaultLayout = require('./default');
const Searchbar = require('./searchbar');
const CollegeData = require('./collegedata');

const App = (props) => {
    return (
        <DefaultLayout title={props.title} >

            <Searchbar />
            <CollegeData colleges={props.colleges} reviews={props.reviews} />
            



        </DefaultLayout>
    );
}

module.exports = App;