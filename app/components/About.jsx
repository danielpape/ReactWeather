var React = require('react');
var {Link} = require('react-router');

var About = (props)=>{
  return(
    <div>
      <h1 className="text-center">About</h1>
        <p>This is the first app written in React by Daniel Pape.</p>
        <p>You can find the GitHub repository <Link to="https://github.com/danielpape/ReactWeather">here</Link></p>
        <p>The app uses React, Babel, Foundation, jQuery, Axios and uses data provided by Open Weather Map.</p>
    </div>
  )
};

module.exports = About;
