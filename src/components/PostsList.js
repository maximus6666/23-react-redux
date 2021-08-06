import Post from "./Post.js";
import { useSelector } from "react-redux";

const PostsList = ( ) => {
	const posts = useSelector(state => state.posts);
	return (
		(posts.map(((item, index) => <Post {...item} key={index}/>))).reverse()
	)
}

export default PostsList;
