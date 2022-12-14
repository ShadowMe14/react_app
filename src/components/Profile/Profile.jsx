import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';


const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} 
               newPostText={props.state.newPostText}
               dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;


