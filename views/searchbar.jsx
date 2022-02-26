var React = require("react");
const Search = () => {
  return (
    <form action="/" method="post">
      <div className="Card">
        <div className="CardInner">
          <div className="container">

            <button className="Icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#657789"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-search"
              >
                <circle cx={11} cy={11} r={8} />
                <line x1={21} y1={21} x2="16.65" y2="16.65" />
              </svg>
            </button>
            <div className="InputContainer">
              <input placeholder="Search for your college" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
module.exports = Search;
