import PropTypes from 'prop-types';
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
    const { title, body, comments } = post

    return (
        <>
            <Title
                style={{ margin: '0px 0px 10px 0px' }}
                title='This is the post, you want to view 👇'
            />
            <ContainertStyled>
                <Titletyled>Post</Titletyled>
                <SubTitletyled>{title}</SubTitletyled>
                <PostTextStyled>{body}</PostTextStyled>
                {comments && (
                    <>
                        <Titletyled>Comments</Titletyled>
                        <ListStyled>
                            {comments.map(({ id, body }) =>
                                (<ListItemStyled key={id}>{body}</ListItemStyled>))}
                        </ListStyled>
                    </>
                )}
            </ContainertStyled>
        </>
    )
}
    
SpecificPostCard.propTypes = {
    post: PropTypes.object.isRequired
};

export default SpecificPostCard;