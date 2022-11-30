import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: false,
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          data: json,
          isLoading: true,
        });
      });
  }
  render() {
    const { isLoading, data } = this.state;
    if (!isLoading)
      return (
        <div>
          <h1>Loading ... please wait</h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <h1> Random data fetch </h1>
        {data.map((elem) => (
          <li key={elem.id}>
            User name: {elem.username}, full name: {elem.name}, User email : {elem.email}
          </li>
        ))}
      </div>
    );
  }
}

export default App;