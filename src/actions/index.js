import { ADD_REMINDER } from './actionTypes';

export const addReminder = (task) => {
  return {
    type: ADD_REMINDER,
    payload: task
  };
}
