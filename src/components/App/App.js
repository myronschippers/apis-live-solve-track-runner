import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    form: {
      inputDistance: '',
    },
    recentRun: 0,
    longestRun: 0
  }

  submitRun = (event) => {
    event.preventDefault();
    console.log('RUN SUBMITTED');
    const newRecent = this.state.form.inputDistance;
    let longestRun = this.state.longestRun;

    // this.setState({
    //   recentRun: this.state.form.inputDistance
    // });

    if (this.state.form.inputDistance > this.state.longestRun) {
      // this.setState({
      //   longestRun: this.state.form.inputDistance
      // });
      longestRun = this.state.form.inputDistance;
    }

    this.setState({
      recentRun: newRecent,
      longestRun: longestRun,
      form: {
        inputDistance: '',
      }
    })
  }

  changeDistance = (event) => {
    console.log('CHANGE DISTANCE', event.target.value);
    this.setState({
      form: {
        ...this.state.form,
        inputDistance: parseInt(event.target.value),
      }
    }, () => {
      console.log(this.state.form.inputDistance);
    });
  }

  render() {

    return (
      <div>
        <header>
          <h1>React Track Runner</h1>
        </header>

        <form onSubmit={this.submitRun}>
          <label>
            Distance: 
            <input
              type="number"
              placeholder="Distance Run"
              onChange={this.changeDistance}
              value={this.state.form.inputDistance}
            />
          </label>
          <button>SAVE</button>
        </form>

        <h3>Recent Run: {this.state.recentRun}</h3>
        <h3>Longest Run: {this.state.longestRun}</h3>
      </div>
    );
  }
}

export default App;
