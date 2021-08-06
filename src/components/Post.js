import React, { useState } from 'react';
import "../styles.css";
import commentsImg from "../icons/comment.svg";
import heart from "../icons/heart.svg";
import repostsImg from "../icons/repost.svg";
import share from "../icons/share.svg";
import verifyed from "../icons/verified.svg";
import chevron from "../icons/down-chevron.svg";
import store from '../store';
import { addLike } from '../redux/actions';

const Post = ( props ) => {
  const state = store.getState();
  const {authorId, date, content, image, likes, comments, reposts, postId } = props;
  const author = state.authors.find(item => item.id === parseInt(authorId));

  const [isLiked, setIsLiked] = useState(false);
  const [isCommented, setIsCommented] = useState(false);
  const [isReposted, setIsReposted] = useState(false);

  const likeHandle = () => {
    const currentPost = state.posts.find((item) => item.postId === parseInt(postId));
    store.dispatch(addLike(
      {
        ...currentPost,
        likes: isLiked ? likes - 1 : likes + 1,
      }
    ));
    setIsLiked(!isLiked)
  }
  
  const commentsHandle = () => {
    const currentPost = state.posts.find((item) => item.postId === parseInt(postId));
    store.dispatch(addLike(
      {
        ...currentPost,
        comments: isCommented ? comments - 1 : comments + 1,
      }
    ));
    setIsCommented(!isCommented)
  }

  const repostsHandle = () => {
    const currentPost = state.posts.find((item) => item.postId === parseInt(postId));
    store.dispatch(addLike(
      {
        ...currentPost,
        reposts: isReposted ? reposts - 1 : reposts + 1,
      }
    ));
    setIsReposted(!isReposted)
  }

	return (
    <div className="post">
      <div className="author-panel">
        <div className="author-info-block">
          <img src={author.photo} className="author-photo" alt='author'/>
          <div className="text-wrapper">
            <div className="post-info">
              <span className="author-name">{author.name}</span>
              <img src={verifyed} alt="verifyed"/>
              <span className="author-nickname">{author.nickname}</span>
              <span className="post-date">{date}</span>
            </div>
            <span className="post-content">{content}</span>
          </div>
        </div>
        <img className="chevron" src={chevron} alt="arow"/>
      </div>
      <div className="post-img-block">
        <img className="post-img" src={image} alt="post-img"/>
        <div className="icons-block">
          <div >
            <div onClick={commentsHandle} className="comments">
              <img src={commentsImg} alt="coments"/>
              <span>{comments}</span>
            </div>
          </div>
          <div >
            <div onClick={repostsHandle} className="reposts">
              <img src={repostsImg} alt="reposts"/>
              <span>{reposts}</span>
            </div>
          </div>				
          <div  >
            <div onClick={likeHandle} className="heart">
              <img src={heart} alt="heart"/>
              <span>{likes}</span>
            </div>
          </div>			
          <div className="share">
            <img src={share} alt="share"/>
          </div>		
        </div>
      </div>
    </div>
  )
}

export default Post;
