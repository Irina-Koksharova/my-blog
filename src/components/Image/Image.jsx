import {ImageContainerStyled, ImageStyled} from './Image.styled';

const Image = ({ image, alt }) => {
    return (
        <ImageContainerStyled>
            <ImageStyled src={image} alt={alt}/>
        </ImageContainerStyled>   
    )
}

export default Image;