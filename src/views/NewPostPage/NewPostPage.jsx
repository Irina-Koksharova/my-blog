import { useHistory } from 'react-router-dom';
import URL from 'initial/url';
import Title from 'components/Title';
import PostCard from 'components/PostCard';
import Button from 'components/Button';

const NewPostPage = () => {
    const history = useHistory();

    const onButtonGoBackClick = () => {
        history.push(URL.POSTS)
    }

    return (
        <>
            <Title
                style={{ marginBottom: '20px' }}
                title='We will be grateful for your post 😍!' />
            <PostCard />
            <Button
                onClick={onButtonGoBackClick}
                children='<<I want to see my post'
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

export default NewPostPage;