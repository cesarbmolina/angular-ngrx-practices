import { Action } from '@ngrx/store';
import { UserActions, UserActionTypes } from './users.actions';
import { UsersInterface } from 'src/app/models/users/users.module';


export const usersFeatureKey = 'users';

export const initialState: UsersInterface = {
  load: false,
  fill: false
};

export function reducer(state = initialState, action: UserActions): UsersInterface {
  switch (action.type) {
    case UserActionTypes.LoadUsers:
      return { ...state, load: true, fill: false };
    case UserActionTypes.LoadUsersSuccess:
      return { ...state, load: false, fill: true };

    default:
      return state;
  }
}
