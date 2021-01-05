var React = require('react');
const Form = ()=>{
    return(
        <form action="/review" method="POST" id="reviewform">
        <span className="components">
        <label for="customername">Enter your name: </label>
        <input className="inputs" type="text" name="customername" />
        </span>
        <span className="components">
        <label for="productname">College Name: </label>
        <input className="inputs" type="text" name="productname" />
        </span>
        <span className="components" id="textarea">
        <label for="reviews" id="reviewlabel">Your reviews: </label>
        <textarea className="inputs" name="reviews" id="textinput"  cols="30" rows="4"></textarea>
        </span>
        <button className="btn">Submit</button>
    </form>

    );

}
module.exports = Form;