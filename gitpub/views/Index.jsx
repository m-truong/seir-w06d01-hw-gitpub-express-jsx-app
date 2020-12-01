// require React npm package
const React = require("react");

// add JSX-CSS-styling by storing it into a JSX variable
const myStyle = {
  color: "red",
  backgroundColor: "white",
};

// create React Class-Component
class Index extends React.Component {
  render() {
    return (
      <div>
        <h1 style={myStyle}>Welcome to the GitPub App!</h1>
        <ul>
          {this.props.drinks.map((currDrink, index) => {
            return (
              <li
                key={index} style={{
                  backgroundColor: myStyle.backgroundColor,
                  color: myStyle.color
                }}
              >
                {currDrink.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

// export Index React class-component
module.exports = Index;
