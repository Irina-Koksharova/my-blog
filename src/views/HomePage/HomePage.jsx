import { useDispatch } from 'react-redux';
import postsOperations from 'redux/posts/posts-operation';
import getPostsImage from 'images/home-foto.jpg';
import createPostImage from 'images/create-foto.jpg';
import Title from 'components/Title';
import Section from 'components/Section';


const HomePage = () => {
    const dispatch = useDispatch();

    return (
        <>
        <Title style={{marginBottom: '20px', fontSize: '26px'}} title='Welcome to us 👋!!! '/>
        <Section
            image={getPostsImage}
            alt='The inscription "blog"'
            title='We have posts on various topics. Take a look 👇'
            onClick={() => dispatch(postsOperations.fetchPosts())}
            children='Click me'
            ariaLabel='view all posts'
        />
        <Section
            image={createPostImage}
            alt='Laptop'
            title='You can create your own post. Just try 😉 👇'
            onClick={() => dispatch(postsOperations.createPost())}
            children='Click me'
            ariaLabel='create a new post'
            />
        </>
    )
}
    
export default HomePage;