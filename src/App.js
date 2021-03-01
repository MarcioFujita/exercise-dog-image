import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      loading: true,
    };
    this.loadDog = this.loadDog.bind(this);
  }

  componentDidMount() {
    this.loadDog();
  }


  loadDog() {
    fetch("https://dog.ceo/api;breeds/image/random")
      .them(res => res.json())
      .them(result => this.setState({ data: result, loading: false }));
  }

  render() {
    return (
      <div>
        {this.state.loading && <h1>LOADING...</h1>}
        <button onClick={this.loadDog}>New Dog!</button>
        <div>
          <img src={this.state.data.message} alt="Random dog" />
        </div>
      </div>
    );
  }
}  

export default App;
