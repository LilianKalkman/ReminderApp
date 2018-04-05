import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeReminder } from '../actions/index';
import moment from 'moment';

class Reminders extends Component {

  render(){
    const reminders = Object.keys(this.props.reminders).map( key => {
      const reminder = this.props.reminders[key];
      return (
        <li key={reminder.id} className="list-group-item">
          <div className="list-item">
            <div>{reminder.text}</div>
            <div><em>{moment(new Date(reminder.duedate)).fromNow()}</em></div>
          </div>
          <div
            className="list-item delete-button"
            onClick={() => this.props.remove(reminder)}
            >
            &times;
          </div>
        </li>
      )});
    return (
      <div className="reminders-list">
        <ul className="list-group">
          {reminders}
        </ul>
      </div>
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
