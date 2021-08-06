import generalImg from "../img/general.jpg";
import kenobiImg from "../img/kenobi.jpg";
import postImg from "../img/postImg.jpg"

const date = new Date();
const initialState = {
  posts: [
    {
      postId:1,
      authorId: 1,
      content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      image:"https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",
      date: date.toLocaleString(),
      likes: 128,
      comments: 10,
      reposts: 51,
    },
    {
      postId:2,
      authorId: 2,
      content: "Hello there...",
      image: postImg,
      date: date.toLocaleString(),
      likes: 256,
      comments: 22,
      reposts: 66,
    },

  ],
  authors:[
    {
      id: 1,
      name: "Anakin Skywalker",
      photo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",
      nickname: "@dart_vader"
    },
    {
      id: 3,
      name: "General Grievous",
      photo: generalImg,
      nickname: "@gen_gr"
    },
    {
      id: 2,
      name: "Obi-Wan Kenobi",
      photo: kenobiImg,
      nickname: "@master_K"
    }

  ],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload]
      }
    case "ADD_LIKE":
      const index = state.posts.findIndex((item) => item.postId === action.payload.postId);
      return {
        ...state,
        posts: state.posts.map((item, i, arr) => {
          arr[index].likes = action.payload.likes;
          arr[index].comments = action.payload.comments;
          arr[index].reposts = action.payload.reposts;

          return item
        })
      }

    default:return state;
  }
}
