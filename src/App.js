import React, { Component } from 'react';
import { addReminder } from './actions/index';
import { connect } from 'react-redux';
import Reminders from './components/Reminders';

class App extends Component {
  state = {
    input: '',
    dueDate: ''
  }

  render() {
    // const currentDate = Date.now();
    // console.log(currentDate, this.state.dueDate);
    // if(currentDate >= this.props.reminders.duedate){
    //   window.alert('Reminder!!!');
    // }
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
            <input
              type="datetime-local"
              className="form-control"
              onChange={(event) => this.setState({dueDate: event.target.value})}/>
          </div>
          <button
            className="btn btn-success"
            onClick={() => this.props.add(this.state.input, this.state.dueDate)}>Add Reminder</button>
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
    add: (task, date) => dispatch(addReminder(task, date))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
