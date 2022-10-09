const ADD_POST = 'ADD-POST';
const UPDATA_NEW_POST_TEXT = 'UPDATA-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATA_NEW_MESSAGE_TEXT = 'UPDATA-NEW-MESSAGE-TEXT';

let store = {
  _state: {
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Lesha'},
            {id: 3, name: 'Vlad'},
            {id: 4, name: 'Olya'},
            {id: 5, name: 'Sasha'},
            {id: 6, name: 'Valera'},
          ],
        masseges: [
            {id: 1, massege: 'Hi!'},
            {id: 2, massege: 'How are you?'},
            {id: 3, massege: 'Ok and you?'},
            {id: 4, massege: 'Yoooo'},
            {id: 5, massege: 'Yoooo'},
            {id: 6, massege: 'Yoooo'},
          ],
        newMassegeText: 'Hello',
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 9,},
            {id: 2, message: 'it is my first post!!!', likesCount: 13,},
            {id: 3, message: 'Ok!!!', likesCount: 7,},
          ],
        newPostText: 'it-kamasutra.com',
    }
  },
  _rerenderEntireFree () {
    console.log('state changed')
    },

  getState () {
    return this._state;
  },
  subscribe (observer) {
    this._rerenderEntireFree = observer; //observer - патерн????...
  },

  dispatch (action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 4, 
        message: this._state.profilePage.newPostText, 
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._rerenderEntireFree(this._state);
    } else if (action.type === UPDATA_NEW_POST_TEXT) {
        this._state.profilePage.newPostText = action.newText;
        this._rerenderEntireFree(this._state);
    } else if (action.type === 'ADD-MESSAGE') {
      let newMassege = {
        id: 7, massege: this._state.dialogsPage.newMassegeText, 
      };
      this._state.dialogsPage.masseges.push(newMassege);
      this._state.dialogsPage.newMassegeText = '';
      this._rerenderEntireFree(this._state);
      } else if (action.type === 'UPDATA-NEW-MESSAGE-TEXT') {
        this._state.dialogsPage.newMassegeText = action.newTextM;
        this._rerenderEntireFree(this._state);
    }
  },
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updataNewPostTextActionCreator = (text) => 
  ({type: UPDATA_NEW_POST_TEXT, newText: text})

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updataNewMessageTextActionCreator = (text) => 
  ({type: UPDATA_NEW_MESSAGE_TEXT, newTextM: text})

  export default store;
  window.store = store;

  