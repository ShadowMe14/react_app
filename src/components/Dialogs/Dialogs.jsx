import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Massege from './Massege/Massege';
import { addMessageActionCreator, updataNewMessageTextActionCreator } from '../../redux/dialogs_reducer';

const Dialogs = (props) => {
  let dialogsElement = props.state.dialogs.map((d) => (
    <DialogItem
      name={d.name}
      id={d.id}
    />
  ));
  let massegesElement = props.state.masseges.map((m) => <Massege massege={m.massege} />);

  let newMessageElem = React.createRef();
  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    let text = newMessageElem.current.value;
    props.dispatch(updataNewMessageTextActionCreator(text));
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogItem}>{dialogsElement}</div>
      <div className={s.masseges}>{massegesElement}</div>
      <div>
        <div>
          <textarea
            onChange={onMessageChange}
            ref={newMessageElem}
            value={props.newMassegeText}
          />
        </div>
        <div>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
