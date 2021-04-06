import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from 'components/Container';

const HomePage = lazy(() =>
  import('views/HomePage' /* webpackChunkName: "HomePage" */),
);
const PostsPage = lazy(() =>
  import('views/PostsPage' /* webpackChunkName: "PostPage" */),
);
const NewPostPage = lazy(() =>
  import('views/NewPostPage' /* webpackChunkName: "NewPostPage" */),
);

const App = () => {
   
  return (
    <Container>

      <Suspense fallback={null}>

        <Switch>

          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/posts" exact>
            <PostsPage />
          </Route>

          <Route path="/posts/new" exact>
            <NewPostPage />
          </Route>

        </Switch>
        
      </Suspense>

   </Container>
  );
};

export default App;
