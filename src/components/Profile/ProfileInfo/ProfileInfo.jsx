import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://cs.pikabu.ru/post_img/big/2013/07/09/6/1373353651_405343413.jpg" 
          alt="">
        </img>
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;

