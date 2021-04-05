import { createSlice } from '@reduxjs/toolkit';
import postsOperations from './posts-operation';

const {
  fetchPosts,
  createPost,
  deletePost,
  updatePost,
} = postsOperations;

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: {
    [fetchPosts.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [fetchPosts.fulfilled](state, { payload }) {
      state.items = payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchPosts.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [createPost.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [createPost.fulfilled](state, { payload }) {
      state.items = [...state.items, payload];
      state.isLoading = false;
      state.error = null;
    },
    [createPost.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [deletePost.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [deletePost.fulfilled](state, { meta }) {
      state.items = state.items.filter(({ id }) => id !== meta.arg);
      state.isSelected = null;
      state.isLoading = false;
      state.error = null;
    },
    [deletePost.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [updatePost.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [updatePost.fulfilled](state, { payload }) {
      state.items = state.items.map(item =>
        item.id === payload.id ? payload : item,
      );
      state.isLoading = false;
      state.error = null;
    },
    [updatePost.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default postsSlice;