import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeReminder } from '../actions/index';
import moment from 'moment';
import './Reminders.css';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';

class Reminders extends Component {

  render(){
    const reminders = Object.keys(this.props.reminders).map( key => {
      const reminder = this.props.reminders[key];
      return (
        <CSSTransition
          key={reminder.id}
          timeout={500}
          classNames="fade">
          <li className="list-group-item">
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
        </CSSTransition>
      )});
    return (
      <div className="reminders-list">
        <TransitionGroup
          component="ul"
          className="list-group">
          {reminders}
        </TransitionGroup>
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
