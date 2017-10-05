import { DECREMENT_MSG, INCREMENT_MSG, ADD_PARTNER, RESET } from '../redux/actions';
import { Chatstate, STORE_NAME } from '../redux/store';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messagesCount$: Observable<number>;

  constructor(private store: Store<Chatstate>) {
  }

  incrementMsg() {
    this.store.dispatch({ type: INCREMENT_MSG });
  }

  decrementMsg() {
    this.store.dispatch({ type: DECREMENT_MSG });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }
  ngOnInit() {
    this.messagesCount$ = this.store.select(store => {
      return store[STORE_NAME].newMessagesCount;
    });
  }

}
