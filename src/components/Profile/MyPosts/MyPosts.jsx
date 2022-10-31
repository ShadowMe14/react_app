import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updataNewPostTextActionCreator} from '../../../redux/profile_redecer';

const MyPosts = (props) => {
  let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)
  
  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch( addPostActionCreator() );
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch( updataNewPostTextActionCreator(text) );
  };
  
  return (
    <div className={s.postsBlock}>
      <h4>My posts</h4>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement}
          value={props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
        <div>
          <button>Remove</button>
        </div>
        
      </div>
        <div className={s.posts}>
          {postsElement}
        </div>
    </div>
  );
};

export default MyPosts;
