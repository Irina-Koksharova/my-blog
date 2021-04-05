import PropTypes from 'prop-types';
import {ButtonStyled} from './Button.styled';

const Button = ({ onClick, children, ...allyProps }) => {
  
  return (
    <ButtonStyled
      type="submit"
      onClick={onClick}
      {...allyProps}>
      {children}
    </ButtonStyled>
  );
};

Button.defaultProps = {
  onClick: () => null,
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  'aria-label': PropTypes.string.isRequired,
};

export default Button;
