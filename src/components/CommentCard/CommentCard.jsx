import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
    FormStyled,
    LabelStyled,
    TextStyled
} from './CommentCard.styled';
import postsOperations from 'redux/posts/posts-operation';
import Button from 'components/Button';

const CommentCard = ({ postId, onClose }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitSuccessful },
    } = useForm();
    
    const dispatch = useDispatch();

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    const onFormSubmit = data => {
        dispatch(postsOperations.createComment({ ...data, postId }));
        onClose()
    };

    return (
        <FormStyled onSubmit={handleSubmit(onFormSubmit)}>
            <LabelStyled htmlFor="body">Your comment</LabelStyled>
            <TextStyled
                id="body"
                type="text"
                defaultValue="" {...register("body")}
            /> 
            <Button
                style={{
                    alignSelf: 'center',
                    minWidth: '100px',
                    padding: '10px',
                    fontSize: '14px'
                }}
                children='Post'
                aria-label='Submit'
            />
        </FormStyled>
    )
}

export default CommentCard;