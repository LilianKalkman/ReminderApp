import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeReminder } from '../actions/index';

class Reminders extends Component {

  render(){
    const reminders = this.props.reminders.map( reminder => {
      return (
        <li key={reminder} className="list-group-item">
          <div className="list-item">{reminder}</div>
          <div
            onClick={() => this.props.remove(reminder)}
            className="list-item delete-button">&times;</div>
        </li>
      )});
    return (
        <ul className="list-group col-sm-4">
          {reminders}
        </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reminders: state.reminders
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (reminder) => dispatch(removeReminder(reminder))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reminders);
