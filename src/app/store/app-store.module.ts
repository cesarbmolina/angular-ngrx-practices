import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

// REDUCERS
import { userReducer } from './users/users.reducer';

// EFFECTS

@NgModule({
  imports: [
    EffectsModule.forRoot([
    ]),
    StoreModule.forRoot({
        user: userReducer
    }),
    StoreDevtoolsModule.instrument()
  ]
})
export class AppStoreModule { }
