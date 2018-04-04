import { ADD_REMINDER, REMOVE_REMINDER } from '../actions/actionTypes';

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
        reminders: updatedReminders,
      };
    case REMOVE_REMINDER :
      const reminders2 = [...state.reminders];
      const newReminders = reminders2.filter( reminder => reminder !== action.payload );
      return {
        ...state,
        reminders: newReminders
      }
    default:
      return state;
  }
}

export default Reminder;
