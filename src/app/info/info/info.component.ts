import { DECREMENT_MSG, INCREMENT_MSG, ADD_PARTNER, RESET } from '../../redux/actions';
import { Chatstate, STORE_NAME } from '../../redux/store';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  messagesCount$: Observable<number>;

  constructor(private store: Store<Chatstate>) {}


  ngOnInit() {
    this.messagesCount$ = this.store.select(store => {
      return store[STORE_NAME].newMessagesCount;
    });
  }

}
