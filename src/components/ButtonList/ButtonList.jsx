import PropTypes from 'prop-types';
import { ListStyled, ListItemStyled } from './ButtonList.styled';
import Button from 'components/Button';

const ButtonList = ({onShow, onAdd, onEdit, onDelete}) => {
    return (
        <ListStyled>
            <ListItemStyled>
                <Button
                onClick={onShow}
                children='Read comments'
                aria-label='Read comments'
            />
            </ListItemStyled>
            <ListItemStyled>
                <Button
                onClick={onAdd}
                children='Add comment'
                aria-label='Add comment'
            />
            </ListItemStyled>
            <ListItemStyled>
                <Button
                onClick={onEdit}
                children='Edit post'
                aria-label='Edit'
            />
            </ListItemStyled>
            <ListItemStyled>
                <Button
                onClick={onDelete}
                children='Delete post'
                aria-label='Delete'
            />
            </ListItemStyled>
        </ListStyled>
    )
}

ButtonList.propTypes = {
    onShow: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};
            
export default ButtonList