import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    PostContainerStyled,
    PostTitleStyled,
    PostTextStyled
} from './PostItem.styled';
import postsSelectors from 'redux/posts/posts-selectors';
import postsOperations from 'redux/posts/posts-operation';
import ButtonList from 'components/ButtonList';
import Modal from 'components/Modal';
import PostCard from 'components/PostCard';
import CommentCard from 'components/CommentCard';
import SpecificPostCard from 'components/SpecificPostCard';

const PostItem = ({ id, title, body }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isSelectedForComment, setIsSelectedForComment] = useState(false)
    const [isCommented, setIsCommented] = useState(null)
    const [postId, setPostId] = useState(null)
    const [selectedPost, setSelectedPost] = useState(null)
    const posts = useSelector(postsSelectors.getPosts);
    const specificPost = useSelector(postsSelectors.getSpecificPost);
    const dispatch = useDispatch();

    const onShowComments = id => {
        const targetPost = posts.find(post => post.id === id)
        if (targetPost) {
            dispatch(postsOperations.getSpecificPost(id));
            setIsCommented(targetPost)
        }
    };

    const onAddComments = id => {
        setIsSelectedForComment(!isSelectedForComment)
        const targetPost = posts.find(post => post.id === id)
        setPostId(targetPost.id)
    };
    
    const onEdit = id => {
        setIsOpen(!isOpen)
        const targetPost = posts.find(post => post.id === id)
        setSelectedPost(targetPost)
    };

    const onDelete = id => {
        dispatch(postsOperations.deletePost(id));
    };

    return (
        <PostContainerStyled>
            <PostTitleStyled>{title}</PostTitleStyled>
            <PostTextStyled>{body}</PostTextStyled>
            <ButtonList
                onShow={() => onShowComments(id)}
                onAdd={() => onAddComments(id)}
                onEdit={() => onEdit(id)}
                onDelete={() => onDelete(id)}
            />
            {isOpen &&
                <Modal onClose={() => {setIsOpen(!isOpen)}}>
                <PostCard
                    selected={selectedPost}
                    onClose={() => {setIsOpen(!isOpen)}}
                />
                </Modal>}
            {isSelectedForComment &&
                <Modal onClose={() => {setIsSelectedForComment(!isSelectedForComment)}}>
                <CommentCard
                    postId={postId}
                    onClose={() => {setIsSelectedForComment(!isSelectedForComment)}}
                />
                </Modal>}
            {isCommented &&
                <Modal onClose={() => setIsCommented(null)}>
                <SpecificPostCard
                    post={specificPost}
                />
                </Modal>}
        </PostContainerStyled>
    )
}

PostItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};

export default PostItem;