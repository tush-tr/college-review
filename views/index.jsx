var React = require('react');
var DefaultLayout = require('./default');
const Searchbar = require('./searchbar');

const App = (props)=>{
    return (
        <DefaultLayout title={props.title} >

            <Searchbar />
        
        </DefaultLayout>
      );
}

module.exports = App;