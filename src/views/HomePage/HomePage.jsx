import getPostsImage from 'images/home-foto.jpg';
import createPostImage from 'images/create-foto.jpg';
import URL from 'initial/url';
import Title from 'components/Title';
import Section from 'components/Section';

const HomePage = () => {
    const { POSTS, NEW_POST } = URL

    return (
        <>
            <Title
                style={{ marginBottom: '20px', fontSize: '26px' }}
                title='Welcome to us 👋!!! '
            />
            <Section
                image={getPostsImage}
                alt='The inscription "blog"'
                title='We have posts on various topics. Take a look 👇'
                children='Click me'
                url={POSTS}
            />
            <Section
                image={createPostImage}
                alt='Laptop'
                title='You can create your own post. Just try 😉 👇'
                children='Click me'
                url={NEW_POST}
            />
        </>
    )
}
    
export default HomePage;