import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Massege from './Massege/Massege';
import { addMessageActionCreator, updataNewMessageTextActionCreator } from '../../redux/state';

/*const addMessageActionCreator = () => {
  return {
    type: 'ADD-MESSAGE'
  }
}
const updataNewMessageTextActionCreator = (text) => {
  return {
    type: 'UPDATA-NEW-MESSAGE-TEXT', newTextM: text
  }
}*/

const Dialogs = (props) => {

  let dialogsElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
  let massegesElement = props.state.masseges.map(m => <Massege massege={m.massege} />)
  
  let newMessageElem = React.createRef();
  let addMessage = () => {
    props.dispatch( addMessageActionCreator() );
  };

  let onMessageChange = () => {
    let text = newMessageElem.current.value;
    props.dispatch( updataNewMessageTextActionCreator(text) );
  };
  
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItem}>
        {dialogsElement}
      </div>
      <div>
        <div className={s.masseges}>
          {massegesElement}
        </div>
        <div>
          <textarea onChange={onMessageChange} ref={newMessageElem}
          value={props.newMassegeText}/>
          <button onClick={addMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
