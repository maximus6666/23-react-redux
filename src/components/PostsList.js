import { connect } from "react-redux";
import Post from "./Post.js";

const PostsList = ( {posts} ) => {

	return (
		(posts.map(((item, index) => <Post {...item} key={index}/>))).reverse()
	)
}

function mapStateToProps(state) {
	return { 
		posts: state.posts
		}
}

export default connect(mapStateToProps)(PostsList)
