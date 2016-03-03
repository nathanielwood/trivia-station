// import { generateQuestion } from '../data/questions';
import * as types from '../actions/actionTypes';

// MOCK UP STATE
// -------------
// {
//   _id: 'question_id',
//   answered: false,
//   text: 'question text',
//   answers: ['one', 'two', 'three', 'four']
// }

export const multiChoice = (state = {}, action) => {
  switch (action.type) {
    case types.RECEIVE_QUESTION:
    case types.RECEIVE_ANSWER:
      return action.payload.question;
    case types.REQUEST_ANSWER:
      return Object.assign({}, state, { answered: true });
    case types.RESET_GAME:
      return {};
    default:
      return state;
  }
};
