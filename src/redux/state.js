import profileReducer from './profile_redecer';
import dialogsReducer from './dialogs_reducer';
import sidebarReducer from './sidebar_reducer';

let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Lesha' },
        { id: 3, name: 'Vlad' },
        { id: 4, name: 'Olya' },
        { id: 5, name: 'Sasha' },
        { id: 6, name: 'Valera' },
      ],
      masseges: [
        { id: 1, massege: 'Hi!' },
        { id: 2, massege: 'How are you?' },
        { id: 3, massege: 'Ok and you?' },
        { id: 4, massege: 'Yoooo' },
        { id: 5, massege: 'Yoooo' },
        { id: 6, massege: 'Yoooo' },
      ],
      newMassegeText: 'Hello',
    },
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 9 },
        { id: 2, message: 'it is my first post!!!', likesCount: 13 },
        { id: 3, message: 'Ok!!!', likesCount: 7 },
      ],
      newPostText: 'it-kamasutra.com',
    },
    sidebar: {},
  },
  _rerenderEntireFree() {
    console.log('state changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._rerenderEntireFree = observer; //observer - патерн????...
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._rerenderEntireFree(this._state);
  },
};

export default store;
window._store = store;
