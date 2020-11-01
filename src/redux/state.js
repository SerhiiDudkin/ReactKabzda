let store = {
    _state:  {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 11},
                {id: 2, message: 'It\'s my first post', likesCount: 23}
            ],
            newPostText: 'It-kamasutra.com'

        },

        dialogsPage: {
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
        },

        sideBar: {}
    },
    getState() {
        return this._state
    },
    callSubscriber() {
        console.log('state changed')},
    addPost() {
        let newPost = {
            id: 5, message: this._state.profilePage.newPostText, likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this.callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this.callSubscriber(this._state);
    },
    subscribe (observer) {
        this.callSubscriber = observer;
    }
}

window.store = store;

export default store;