const getPosts = state => state.posts.allPosts;
const getSpecificPost = state => state.posts.specificPost;

const postsSelectors = {
  getPosts,
  getSpecificPost
};

export default postsSelectors;

