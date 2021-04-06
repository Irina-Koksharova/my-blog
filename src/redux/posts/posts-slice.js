import { createSlice } from '@reduxjs/toolkit';
import postsOperations from './posts-operation';

const {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  getSpecificPost,
  createComment
} = postsOperations;

const initialState = {
  allPosts: [],
  specificPost: {},
  isLoading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: {
    [getAllPosts.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [getAllPosts.fulfilled](state, { payload }) {
      state.allPosts = payload;
      state.isLoading = false;
      state.error = null;
    },
    [getAllPosts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [createPost.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [createPost.fulfilled](state, { payload }) {
      state.allPosts = [...state.allPosts, payload];
      state.isLoading = false;
      state.error = null;
    },
    [createPost.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [updatePost.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [updatePost.fulfilled](state, { payload }) {
      state.allPosts = state.allPosts.map(item =>
        item.id === payload.id
          ? {
            ...item,
            title: payload.title,
            body: payload.body
          } : item,
      );
      state.isLoading = false;
      state.error = null;
    },
    [updatePost.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [deletePost.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [deletePost.fulfilled](state, { meta }) {
      state.allPosts = state.allPosts.filter(({ id }) => id !== meta.arg);
      state.isSelected = null;
      state.isLoading = false;
      state.error = null;
    },
    [deletePost.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [getSpecificPost.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [getSpecificPost.fulfilled](state, { payload }) {
      state.specificPost = payload;
      state.isLoading = false;
      state.error = null;
    },
    [getSpecificPost.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [createComment.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [createComment.fulfilled](state, { payload }) {
      state.allPosts = state.allPosts.map(item =>
        item.id === payload.postId
          ? item?.comments
            ? {
              ...item,
              comments: [...item.comments, payload],
            }
            : { ...item, comments: [payload] }
          : item
      );
      state.isLoading = false;
      state.error = null;
    },
    [createComment.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default postsSlice;