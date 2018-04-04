import { ADD_REMINDER } from '../actions/actionTypes';

const initialState = {
  reminders: []
}

const Reminder = (state = initialState, action) => {
  switch(action.type){
    case ADD_REMINDER :
      const reminders = [...state.reminders];
      const updatedReminders = reminders.concat(action.payload);
      return {
        ...state,
        reminders: updatedReminders
      };
    default:
      return state;
  }
}

export default Reminder;
