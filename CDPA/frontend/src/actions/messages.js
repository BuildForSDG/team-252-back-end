import { CREATE_MESSAGE, GET_MESSAGES } from '../actions/types';

// Create Message
export const createMessage = msg => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  }
}