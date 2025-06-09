import {ADD_USER} from './userActionTypes';

interface User {
  image: string;
  firstname: string;
  lastname: string;
  number: number;
  email: string;
  password: string;
}

const initialState: {
  users: User[];
} = {
  users: [],
};

const userReducer = (
  state = initialState,
  action: {type: string; payload: User},
) => {
  switch (action.type) {
    case ADD_USER:
      // console.log('action', action);
      // console.log('state', state?.users);
      return {
        ...state,
        // users: state.users.push(action.payload),
        users: [...state.users, action?.payload],
      };
    default:
      return state;
  }
};

export default userReducer;
