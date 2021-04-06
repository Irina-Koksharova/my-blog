import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
    FormStyled,
    LabelStyled,
    InputStyled,
    TextStyled
} from './PostCard.styled';
import postsOperations from 'redux/posts/posts-operation';
import Button from 'components/Button';

const PostCard = ({ selected = null, onClose }) => {
    const {
        register,
        setValue,
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

    useEffect(() => {
        const setInputValues = () => {
            return Object.entries(selected).forEach(prop =>
                setValue(prop[0], prop[1]),
            );
        };
        if (selected) {
            setInputValues(selected);
        }
    }, [selected, setValue]);
        
    const onFormSubmit = data => {
        if (selected) {
            dispatch(postsOperations.updatePost(data))
            onClose()
        } else {
            dispatch(postsOperations.createPost(data));
        }
    };
        
    return (
        <FormStyled onSubmit={handleSubmit(onFormSubmit)}>
            <LabelStyled htmlFor="title">Title</LabelStyled>
            <InputStyled
                id="title"
                type="text"
                defaultValue="" {...register("title")}
                autoComplete='off'
            />

            <LabelStyled htmlFor="body">Your post</LabelStyled>
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

export default PostCard;