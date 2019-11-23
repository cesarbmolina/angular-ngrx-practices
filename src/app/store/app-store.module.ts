import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


// REDUCERS
import { userReducer } from './users/users.reducer';
import { UsersEffects } from './users/users.effects';

// EFFECTS
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    EffectsModule.forRoot([
      UsersEffects
    ]),
    StoreModule.forRoot({
        user: userReducer
    }),
    StoreDevtoolsModule.instrument()
  ]
})
export class AppStoreModule { }
