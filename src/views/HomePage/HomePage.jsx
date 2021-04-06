import getPostsImage from 'images/home-foto.jpg';
import createPostImage from 'images/create-foto.jpg';
import Title from 'components/Title';
import Section from 'components/Section';


const HomePage = () => {

    return (
        <>
        <Title style={{marginBottom: '20px', fontSize: '26px'}} title='Welcome to us 👋!!! '/>
        <Section
            image={getPostsImage}
            alt='The inscription "blog"'
            title='We have posts on various topics. Take a look 👇'
            children='Click me'
            url='/posts'
        />
        <Section
            image={createPostImage}
            alt='Laptop'
            title='You can create your own post. Just try 😉 👇'
            children='Click me'
            url='/posts/new'
            />
        </>
    )
}
    
export default HomePage;