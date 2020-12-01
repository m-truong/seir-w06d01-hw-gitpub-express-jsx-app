// require React npm package
const React = require("react");

// add JSX-CSS-styling by storing it into a JSX variable
const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
};

// create React Class-Component
class Index extends React.Component {
  render() {
    return (
      <div>
        <h1 style={myStyle}>Welcome to the GitPub App!</h1>
      </div>
    );
  }
}

// export Index React class-component
module.exports = Index;
