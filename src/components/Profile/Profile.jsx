import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
    <img src='https://wallpaperaccess.com/full/1131217.jpg' alt=''></img>
    <div>ava</div>
    <MyPosts />
  </div>
}

export default Profile;
