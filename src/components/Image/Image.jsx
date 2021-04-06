import PropTypes from 'prop-types';
import { ImageContainerStyled, ImageStyled } from './Image.styled';

const Image = ({ image, alt }) => {
    return (
        <ImageContainerStyled>
            <ImageStyled src={image} alt={alt}/>
        </ImageContainerStyled>   
    )
}

Image.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;