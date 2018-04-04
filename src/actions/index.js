import { ADD_REMINDER, REMOVE_REMINDER } from './actionTypes';

export const addReminder = (task) => {
  return {
    type: ADD_REMINDER,
    payload: task
  };
}

export const removeReminder = (reminder) => {
  return {
    type: REMOVE_REMINDER,
    payload: reminder
  };
}
