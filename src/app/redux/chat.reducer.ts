import { DECREMENT_MSG, INCREMENT_MSG, ADD_PARTNER, RESET } from './actions';
import { Chatstate, store } from './store';
import * as chatActions from './actions';

export type Action = chatActions.All;

export function chatReducer(state: Chatstate = store, action: Action) {

	let newState: Chatstate;
	switch (action.type) {
		case INCREMENT_MSG:
			newState = copyState(state);
			newState.newMessagesCount++;
			return newState;

		case DECREMENT_MSG:
			newState = copyState(state);
			newState.newMessagesCount--;
			return newState;

		case ADD_PARTNER:
			newState = copyState(state);
			newState.chatPartner.push(action.user);
			return newState;

		case RESET:
			newState = copyState(state);
			newState.chatPartner = [];
			newState.newMessagesCount = 0;
			return newState;


		default:
			return state;
	}
}

// create a copy of the state
function copyState(state): Chatstate {
	return {
		chatPartner: state.chatPartner.slice(0),
		newMessagesCount: state.newMessagesCount
	}
}
