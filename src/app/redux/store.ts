export const STORE_NAME: string = 'chat';
export interface Chatstate {
    chatPartner: string[];
    newMessagesCount: number;
}

export const store: Chatstate =  {
    chatPartner: [],
    newMessagesCount: 7
}
