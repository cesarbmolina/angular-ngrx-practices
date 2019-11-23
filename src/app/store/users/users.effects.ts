import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
// services
import { RepositoryService } from 'src/app/services/repository.service';
import { UserActionTypes, LoadUsers } from './users.actions';



@Injectable()
export class UsersEffects {

  @Effect()
  loadMovies$ = this.actions$.pipe(
    ofType(UserActionTypes.LoadUsers),
    tap((data: LoadUsers) => console.log(data.payload)),
    mergeMap((action: LoadUsers) => this.repositoryService.getUsers(action.payload)
      .pipe(
        map(user => ({ type: UserActionTypes.LoadUsersSuccess, payload: user, load: false, fill: true })),
        catchError(() => of({ type: UserActionTypes.LoadUsersFailure }))
      ))
  );


  constructor(
    private actions$: Actions,
    private repositoryService: RepositoryService,
  ) { }

}
