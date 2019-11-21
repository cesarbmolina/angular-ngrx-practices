import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

// REDUCERS


// EFFECTS

@NgModule({
  imports: [
    EffectsModule.forRoot([
    ]),
    StoreModule.forRoot({
    }),
    StoreDevtoolsModule.instrument()
  ]
})
export class AppStoreModule { }
