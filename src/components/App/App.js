import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import postsOperations from 'redux/posts/posts-operation';
import Container from 'components/Container';

const HomePage = lazy(() =>
  import('views/HomePage' /* webpackChunkName: "HomePage" */),
);
const PostPage = lazy(() =>
  import('views/PostPage' /* webpackChunkName: "PostPage" */),
);


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsOperations.fetchPosts());
  }, [dispatch]);
  

  return (
    <Container>

      <Suspense fallback={null}>

        <Switch>

          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/posts" exact>
            <PostPage />
          </Route>

        </Switch>
        
      </Suspense>

   </Container>
  );
};

export default App;
