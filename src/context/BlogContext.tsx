import {Dispatch} from 'react';
import BlogModel from '../models/blog';
import createDataContext, {Action} from './createDataContext';

interface BlogState {
  posts: BlogModel[];
}

const addPost =
  (dispatch: Dispatch<Action<BlogState>>) =>
  (post: BlogModel, onSuccess: () => void) => {
    dispatch({type: 'add_post', payload: post});
    onSuccess();
  };

const removePost = (dispatch: Dispatch<Action<BlogState>>) => (id: number) => {
  dispatch({type: 'remove_post', payload: id});
};

const editPost = (dispatch: Dispatch<Action<BlogState>>) => (id: number, title: string, content: string, onSuccess: () => void) => {
  dispatch({type: 'edit_post', payload: {id: id, title: title, content: content}});
  onSuccess();
};

// Define your reducer
const blogReducer = (
  state: BlogState,
  action: Action<BlogState>,
): BlogState => {
  switch (action.type) {
    case 'add_post':
      const newBlog = action.payload as BlogModel;
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: Math.floor(Math.random() * 9999),
            title: newBlog.title,
            content: newBlog.content,
          },
        ],
      };
    case 'remove_post':
      const newList = state.posts.filter(
        blogPost => blogPost.id !== action.payload,
      );
      return {...state, posts: newList};
      
    case 'edit_post':
      return {...state, posts: state.posts.map((post) => {
        if(post.id == action.payload?.id) {
          return {id: post.id, title: action.payload?.title, content: action.payload?.content};
        }
        return post;
      })};
    default:
      return state;
  }
};

// Create the context and provider
const {Provider, useDataContext} = createDataContext<
  BlogState,
  {
    addPost: (post: BlogModel, onSuccess: () => void) => void;
    removePost: (id: number) => void;
    editPost: (id: number, title: string, content: string, onSuccess: () => void) => void;
  }
>(blogReducer, {addPost, removePost, editPost}, {posts: []});

// Export the Provider and a custom hook
export const BlogProvider = Provider;
export const useBlogContext = useDataContext;
