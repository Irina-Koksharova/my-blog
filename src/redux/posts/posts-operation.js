import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://bloggy-api.herokuapp.com';

const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/posts');
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.status);
    }
  },
);

const createPost = createAsyncThunk(
  'posts/createPost',
  async (newPost, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/posts', newPost);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.status);
    }
  },
);

const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (postId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${postId}`);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.status);
    }
  },
);

const updatePost = createAsyncThunk(
  'posts/updatePost',
  async (data, thunkAPI) => {
    const { id, name, number } = data;
    const update = { name, number };
    if (!update) {
      return;
    }
    try {
      const action = await axios.put(`/contacts/${id}`, update);
      return action.data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.status);
    }
  },
);

const postsOperations = {
  fetchPosts,
  createPost,
  deletePost,
  updatePost,
};

export default postsOperations;