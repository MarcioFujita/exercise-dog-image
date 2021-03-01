import React from "react";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    this.loadDog = this.loadDog.bind(this);
  }

  componentDidMount() {
    this.loadDog();
  }


  loadDog() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(result => this.setState({ data: result }));
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.data.message.includes("terrier")) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    localStorage.setItem("dogURL", this.state.data.message);
    const dogBreed = this.state.data.message.split("/")[4];
    alert(dogBreed);
  }

  render() {
    if (this.state.data === "") return "loading...";
    return (
      <div>
        <p>Dogs!</p>
        <button onClick={this.loadDog}>New Dog!</button>
        <div>
          <img src={this.state.data.message} alt="Random dog" />
        </div>
      </div>
    );
  }
}  

export default App;
