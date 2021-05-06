import React from 'react';
import "../styles.css";
import comments from "../icons/comment.svg";
import heart from "../icons/heart.svg";
import reposts from "../icons/repost.svg";
import share from "../icons/share.svg";
import verifyed from "../icons/verified.svg";
import chevron from "../icons/down-chevron.svg";
import store from '../store'

const Post = ( props ) => {

  const state = store.getState();
  const {authorId, date, content, image } = props;
  const author = state.authors.find(item => item.id === parseInt(authorId));
  
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
          <div className="comments">
            <img src={comments} alt="coments"/>
            <span>482</span>
          </div>
          <div className="reposts">
            <img src={reposts} alt="reposts"/>
            <span>125</span>
          </div>				
          <div className="heart">
            <img src={heart} alt="heart"/>
            <span>345</span>
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
