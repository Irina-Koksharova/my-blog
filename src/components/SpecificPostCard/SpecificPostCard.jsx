import {
    ContainertStyled,
    Titletyled,
    SubTitletyled,
    PostTextStyled,
    ListStyled,
    ListItemStyled
} from './SpecificPostCard.styled';
import Title from 'components/Title';

const SpecificPostCard = ({ post }) => {
                
    return (
        <>
            <Title
                style={{ margin: '0px 0px 10px 0px' }}
                title='This is the post, you want to view 👇'
            />
            <ContainertStyled>
                <Titletyled>Post</Titletyled>
                <SubTitletyled>{post.title}</SubTitletyled>
                <PostTextStyled>{post.body}</PostTextStyled>
                {post.comments && (
                    <>
                    <Titletyled>Comments</Titletyled>
                    <ListStyled>
                        {post.comments.map(comment =>
                            (<ListItemStyled key={comment.id}>{comment.body}</ListItemStyled>))}
                    </ListStyled></>
                )}
            </ContainertStyled>
        </>
    )
}

export default SpecificPostCard;