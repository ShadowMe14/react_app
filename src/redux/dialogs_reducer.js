const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATA_NEW_MESSAGE_TEXT = 'UPDATA-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMassege = {
        id: 7,
        massege: state.newMassegeText,
      };
      state.masseges.push(newMassege);
      state.newMassegeText = '';
      return state;
    case UPDATA_NEW_MESSAGE_TEXT:
      state.newMassegeText = action.newTextM;
      return state;
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updataNewMessageTextActionCreator = (text) => ({
  type: UPDATA_NEW_MESSAGE_TEXT,
  newTextM: text,
});

export default dialogsReducer;
