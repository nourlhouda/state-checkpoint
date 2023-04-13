import React, { Component } from "react";
import "./img/pic.jpg";

class App extends Component {
  state = {
    Person: {
      fullName: "Nour Elhouda Jawedi",
      bio: "I am a web developer",
      imgSrc: "./img/pic.jpg",
      profession: "Web Developer",
    },
    shows: true,
    timeSinceMount: 0,
  };

  toggleShows = () => {
    console.log(this.state.shows);
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        timeSinceMount: this.state.timeSinceMount + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }


  render() {
    const { fullName, bio, imgSrc, profession } = this.state.Person;
    const { shows } = this.state;

    return (
      <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
        <button
          onClick={this.toggleShows}
          style={{
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
          }}
        >
          Toggle Shows
        </button>
        {shows ? (
          <div
            style={{
              marginTop: "20px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            <h1>{fullName}</h1>
            <img src={imgSrc} alt={fullName} />
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        ) : null}
        <div>
        Time since mount: {this.state.timeSinceMount} seconds
      </div>
      </div>
    );
  }
}

export default App;
