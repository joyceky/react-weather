import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

  // console.log('Action recieved by Weather Reducer: ', action);

  switch (action.type) {
    case FETCH_WEATHER:
      // not mutating our state here, just returning a new instance
      // NEVER MUTATE YOUR STATE
      // Two lines below are identical, just using the spread operator (es6)
      // return state.concat([action.payload.data]);
      return [ action.payload.data, ...state ]
  }

  return state;
}
