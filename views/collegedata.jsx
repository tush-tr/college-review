var React = require('react');
const CollegeData = (props) => {
    return (
        <table>

                <tr>
                    <td className="collegename"><b>College Name: </b>{props.colleges[0]}</td>
                    <td className="reviewof"><b>Review: </b>{props.reviews[0]}</td>

                </tr>
                <tr>
                    <td className="collegename"><b>College Name: </b>{props.colleges[1]}</td>
                    <td className="reviewof"><b>Review: </b>{props.reviews[1]}</td>

                </tr>
            </table>
        
      


    );
}
module.exports = CollegeData;