import {ADD_USER} from './userActionTypes';

interface User {
  image: string;
  firstname: string;
  lastname: string;
  number: number;
  email: string;
  password: string;
}

export const addUserAction = (parameter: User[]) => {
  console.log('parametere', parameter);
  return {
    type: ADD_USER,
    payload: parameter,
  };
};
