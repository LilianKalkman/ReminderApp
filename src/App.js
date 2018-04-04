import React, { Component } from 'react';
import { addReminder } from './actions/index';
import { connect } from 'react-redux';
import Reminders from './components/Reminders';

class App extends Component {
  state = {
    input: ''
  }

  render() {
    return (
      <div className="App">
        <div className="title">
          Reminder Pro
        </div>
        <Reminders />
        <div className="form-inline reminder-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="I have to ... "
              onChange={(event) => this.setState({input: event.target.value})}
              />
          </div>
          <button
            className="btn btn-success"
            onClick={() => this.props.add(this.state.input)}>Add Reminder</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reminders: state.reminders
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (task => dispatch(addReminder(task)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
