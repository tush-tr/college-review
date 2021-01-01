var React = require('react');
var DefaultLayout = require('./default');
var Form = require("./form");

const Reviews = (props)=>{
    return (
        <DefaultLayout title={props.title} >
            <Form/>          
        </DefaultLayout>
      );

}
module.exports = Reviews;