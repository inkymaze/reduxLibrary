// state argument is not the application state,
// its only the state this reducer is responsible for

// reducer is called when an action is dispatched


//application state is formed by reducers
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;

}
