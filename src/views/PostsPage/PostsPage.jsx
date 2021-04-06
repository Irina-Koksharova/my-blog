import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ListStyled } from './PostsPage.styled';
import postsSelectors from 'redux/posts/posts-selectors';
import postsOperations from 'redux/posts/posts-operation';
import URL from 'initial/url';
import Title from 'components/Title';
import PostItem from 'components/PostItem';
import Button from 'components/Button';

const PostsPage = () => {
    const posts = useSelector(postsSelectors.getPosts);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(postsOperations.getAllPosts());
    }, [dispatch])

    const onButtonGoBackClick = () => {
        history.push(URL.HOME)
    }

    return (
        <>
            <Title
                style={{ marginBottom: '20px' }}
                title='Look! We are sure that you will find everything here 😉' />
            <ListStyled>
                {posts.map(({ id, title, body }) => (
                    <PostItem
                        key={id}
                        id={id}
                        title={title}
                        body={body}
                    />
                ))}
            </ListStyled>
            <Button
                onClick={onButtonGoBackClick}
                children='<<Go back to Home page'
                style={{
                    minWidth: '100px',
                    padding: '10px',
                    fontSize: '14px',
                    fontWeight: '700',
                    fontStyle: 'italic ',
                    backgroundColor: 'transparent',
                }}
                aria-label='Go back'
            />
        </>
    )
}
    
export default PostsPage;