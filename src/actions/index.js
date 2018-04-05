import { ADD_REMINDER, REMOVE_REMINDER } from './actionTypes';

export const addReminder = (task, duedate) => {
  return {
    type: ADD_REMINDER,
    payload: task,
    duedate:duedate
  };
}

export const removeReminder = (reminder) => {
  return {
    type: REMOVE_REMINDER,
    payload: reminder
  };
}
