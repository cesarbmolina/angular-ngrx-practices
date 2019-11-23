import { Action } from '@ngrx/store';

// models
import { UserInterface } from 'src/app/models/users/users.module';

export enum UserActionTypes {
  LoadUsers = '[User] Load Users',
  LoadUsersSuccess = '[User] Load Users Success',
  LoadUsersFailure = '[User] Load Users Failure',
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;
  constructor(public payload: number) {}
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LoadUsersSuccess;
  constructor(public payload: UserInterface) { }
}

export class LoadUsersFailure implements Action {
  readonly type = UserActionTypes.LoadUsersFailure;
  constructor(public payload: { error: string }) { }
}

export type UserActions = LoadUsers | LoadUsersSuccess | LoadUsersFailure;

