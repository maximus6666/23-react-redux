export const addPost = (post) => {
	return {
			type: "ADD_POST",
			payload:{...post},
	}
}

export const addLike = (currentPost) => {
	return {
		type: "ADD_LIKE",
		payload: currentPost,
	}
}
