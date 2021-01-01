var React = require('react');
const Search = () => {
    return (
        <form action="/" method="post">
        <div className="searchbox">
            <input type="text" placeholder="Enter the College Name" name="College:" />
                <button>
                    <svg width="29" height="30" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.453 0C5.134 0 0 5.134 0 11.453c0 6.319 5.134 11.453 11.453 11.453 2.5 0 4.81-.805 6.695-2.169l8.864 8.843 1.894-1.895-8.758-8.78a11.398 11.398 0 0 0 2.758-7.452C22.906 5.134 17.772 0 11.453 0zm0 1.347c5.59 0 10.106 4.516 10.106 10.106s-4.516 10.106-10.106 10.106A10.095 10.095 0 0 1 1.347 11.453c0-5.59 4.516-10.106 10.106-10.106z"
                            fill="#FFF" fill-rule="evenodd" />
                    </svg>
                </button></div>
                </form>
      


    );
}
module.exports = Search;