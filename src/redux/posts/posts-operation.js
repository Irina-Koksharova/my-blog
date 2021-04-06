import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://bloggy-api.herokuapp.com';

const getAllPosts = createAsyncThunk(
  'posts/getAllPosts',
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

const updatePost = createAsyncThunk(
  'posts/updatePost',
  async (data, thunkAPI) => {
    const { id, title, body } = data;
    const update = { title, body };
    if (!update) {
      return;
    }
    try {
      const action = await axios.put(`/posts/${id}`, update);
      return action.data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.status);
    }
  },
);

const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (postId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/posts/${postId}`);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.status);
    }
  },
);

const getSpecificPost = createAsyncThunk(
  'posts/getSpecificPost',
  async (id, thunkAPI) => {
    try {
      const action = await axios.get(`/posts/${id}?_embed=comments`);
      return action.data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.status);
    }
  },
);

const createComment = createAsyncThunk(
  'comments/createComment',
  async (newComment, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/comments', newComment);
      return data;
    } catch ({ response }) {
      return rejectWithValue(response.status);
    }
  },
);

const postsOperations = {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
  getSpecificPost,
  createComment
};

export default postsOperations;