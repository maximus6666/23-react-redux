import {React, useState} from 'react';
import store from '../store';
import {addPost} from "../redux/actions";

const PostForm = () => {
	const [authorId, setAuthorId] = useState(1);
	const [postContent, setPostContent] = useState("");
	const [postImg, setPostImg] = useState("");

  const addPostHandle = () => {
    store.dispatch(addPost(
      {
        authorId: authorId,
        content: postContent,
        image: postImg,
        date: new Date().toLocaleString()
      }
    ));
    setPostContent("");
    setPostImg("");
  }

	return(
		<div className="add-post-form">
			<select value={authorId} onChange={(event) => setAuthorId(event.target.value)}>
				<option value={1}>Anakin</option>
				<option value={2}>Kenobi</option>
				<option value={3}>Grievous</option>
			</select>
			<input value={postContent} 
						 onChange={(event) => setPostContent(event.target.value)}
						 type="text"
             placeholder="Enter post text"
      >
			</input>
			<input value={postImg} 
						 onChange={(event) => setPostImg(event.target.value)} 
						 type="text"
             placeholder="Enter post image src"
      >
			</input>
			<button 
        className="add-post-btn"
        onClick={addPostHandle}
			>Add Post
			</button>
		</div>
	)
}

export default PostForm;
