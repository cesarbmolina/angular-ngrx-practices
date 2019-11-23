import { Action } from '@ngrx/store';
import { UserActions, UserActionTypes } from './users.actions';
import { UsersInterface, UserInterface } from 'src/app/models/users/users.module';


export const usersFeatureKey = 'users';

export const initialState: UsersInterface = {
  load: false,
  fill: false,
  user: null,
  error: ''
};

export function userReducer(state = initialState, action: UserActions): UsersInterface {
  switch (action.type) {
    case UserActionTypes.LoadUsers:
      return { ...state, load: true, fill: false };
    case UserActionTypes.LoadUsersSuccess:
      return { ...state, load: false, fill: true, user: action.payload };
    case UserActionTypes.LoadUsersFailure:
      return { ...state, load: false, fill: true, error: 'Failure User' };

    default:
      return state;
  }
}
