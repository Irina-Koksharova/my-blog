import { useDispatch } from 'react-redux';
import postsOperations from 'redux/posts/posts-operation';
import Title from 'components/Title';
import Button from 'components/Button';

const HomePage = () => {
    const dispatch = useDispatch();

    return (
        <>
            <Title title='All posts' />
            <Button
                onClick={() => dispatch(postsOperations.createPost())}
                children='Create a new post'
                aria-label='Create a new post'>
            </Button>
        </>
    )
}
    
export default HomePage;