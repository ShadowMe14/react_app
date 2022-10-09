let rerenderEntireFree = () => {
  console.log('state changed')
};

let state = {
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
}

export let addPost = () => {
          let newPost = {
            id: 4, 
            message: state.profilePage.newPostText, 
            likesCount: 0,
          };
          state.profilePage.posts.push(newPost);
          //обнуляет textarea после нажатия на button
          state.profilePage.newPostText = '';
          rerenderEntireFree();
        }

export let updataNewPostText = (newText) => {
          state.profilePage.newPostText = newText;
          rerenderEntireFree();
        }

export let addMessage = () => {
          let newMassege = {
              id: 7, massege: state.dialogsPage.newMassegeText, 
          };
          state.dialogsPage.masseges.push(newMassege);
          state.dialogsPage.newMassegeText = '';
          rerenderEntireFree();
        }

export let updataNewMessageText = (newTextM) => {
          state.dialogsPage.newMassegeText = newTextM;
          rerenderEntireFree();
}

export const subscribe = (observer) => {
  rerenderEntireFree = observer; //observer - патерн????...
}
  export default state;

  