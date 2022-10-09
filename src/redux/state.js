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
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 4, 
        message: this._state.profilePage.newPostText, 
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      //обнуляет textarea после нажатия на button
      this._state.profilePage.newPostText = '';
      this._rerenderEntireFree(this._state);
    } else if (action.type === 'UPDATA-NEW-POST-TEXT') {
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

  /* перенесено в dispatch
  addMessage () {
    let newMassege = {
        id: 7, massege: this._state.dialogsPage.newMassegeText, 
    };
    this._state.dialogsPage.masseges.push(newMassege);
    this._state.dialogsPage.newMassegeText = '';
    this._rerenderEntireFree(this._state);
  },
  updataNewMessageText (newTextM) {
    this._state.dialogsPage.newMassegeText = newTextM;
    this._rerenderEntireFree(this._state);
  },*/
  
}

  export default store;
  window.store = store;

  