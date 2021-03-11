const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'}
    ],
    dialogs: [
        {id: 1, name: 'Serega'},
        {id: 2, name: 'Pudra'},
        {id: 3, name: 'Denis'},
        {id: 4, name: 'Ruslan'}
    ]
}
const dialogsReducer = (state=initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return  { ...state,
                messages: [ ...state.messages, {id: 5, message: body}]
            };
        default:
            return state;
    }

}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;