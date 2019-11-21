import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UsersInterface } from 'src/app/models/users/users.module';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/app-state.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private users$: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.users$ = this.store.select('user').subscribe(d => {
      console.log(d);
    });
  }

  onDestroy() {
    this.users$.unsubscribe();
  }



}
