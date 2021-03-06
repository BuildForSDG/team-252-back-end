import { GET_PREDICTIONS, DELETE_PREDICTION, ADD_PREDICTION } from '../actions/types.js';

const initialState = {
  predictions: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PREDICTIONS:
      return {
        ...state,
        predictions: action.payload
      }
    case DELETE_PREDICTION:
      return {
        ...state,
        predictions: state.predictions.filter(prediction =>
          prediction.id !== action.payload)
      }
    case ADD_PREDICTION:
      return {
        ...state,
        predictions: [...state.predictions, action.payload]
      }
    default:
      return state;
  }
}