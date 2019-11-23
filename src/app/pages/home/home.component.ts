import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UsersInterface } from 'src/app/models/users/users.module';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/app-state.interface';
import { LoadUsers } from 'src/app/store/users/users.actions';

// RepositoryService
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private users$: Subscription;

  constructor(private store: Store<AppState>, private repositoryService: RepositoryService) { }

  ngOnInit() {
    this.users$ = this.store.select('user').subscribe(d => {
      console.log(d);
      if (!d.fill && !d.load) {
        const action = new LoadUsers();
        this.store.dispatch(action);
      }
    });

    this.getServiceUser();
  }

  private getServiceUser() {
    this.repositoryService.getUsers(2).toPromise().then(users => {
      console.log(users);
    });
  }

  onDestroy() {
    this.users$.unsubscribe();
  }



}
