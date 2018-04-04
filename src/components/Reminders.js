import React, { Component } from 'react';
import { connect } from 'react-redux';

class Reminders extends Component {

  render(){
    const reminders = this.props.reminders.map( reminder => <li className="list-group-item">{reminder}</li>);
    return (
      <div className="reminders">
        <ul>
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

export default connect(mapStateToProps)(Reminders);
