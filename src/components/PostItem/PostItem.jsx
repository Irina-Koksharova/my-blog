import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    PostContainerStyled,
    PostTitleStyled,
    PostTextStyled
} from './PostItem.styled';
import postsSelectors from 'redux/posts/posts-selectors';
import postsOperations from 'redux/posts/posts-operation';
import Button from 'components/Button';
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
        const showPost = posts.find(post => post.id === id)
        if (showPost) {
            dispatch(postsOperations.getSpecificPosts(id));
            setIsCommented(showPost)
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
            <Button
                onClick={() => onShowComments(id)}
                children='Read comments'
                aria-label='Read comments'
            />
            <Button
                onClick={() => onAddComments(id)}
                children='Add comment'
                aria-label='Add comment'
            />
            <Button
                onClick={() => onEdit(id)}
                children='Edit post'
                aria-label='Edit'
            />
            <Button
                onClick={() => onDelete(id)}
                children='Delete post'
                aria-label='Delete'
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

export default PostItem;