var React = require("react");
const FormInput = ({title,name}) => {
  return (
    <div className="input-group input-group-icon">
      <input name={name}type="text" placeholder={title}/>
    </div>
  );
};
module.exports = FormInput;
