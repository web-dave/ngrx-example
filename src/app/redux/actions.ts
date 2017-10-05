import { Action } from '@ngrx/store';

// Action types constats
export const INCREMENT_MSG = 'INCREMENT_MSG';
export const DECREMENT_MSG = 'DECREMENT_MSG';
export const ADD_PARTNER = 'ADD_PARTNER';
export const REMOVE_PARTNER = 'REMOVE_PARTNER';
export const RESET = 'RESET';

// Action implementations
export class Addpartner implements Action { 
    readonly type = ADD_PARTNER; 
    user = ''; 
};
export class Removepartner implements Action { 
    readonly type = REMOVE_PARTNER
    user: '' 
};
export class Newmsg implements Action { readonly type = INCREMENT_MSG };
export class Readmsg implements Action { readonly type = DECREMENT_MSG };
export class Reset implements Action { readonly type = RESET };

// Provide ashortcut type
export type All = Addpartner | Removepartner| Newmsg| Readmsg | Reset;
