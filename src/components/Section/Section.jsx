import { MainSectionStyled, SecondarySectionStyled } from './Section.styled';
import Image from 'components/Image';
import Title from 'components/Title';
import Button from 'components/Button';

const Section = ({image, alt, title, onClick, children, ariaLabel}) => {
  
    return (
        <MainSectionStyled>
            <Image image={image} alt={alt} />
            <SecondarySectionStyled>
                <Title style={{marginBottom: '20px', fontSize: '18px'}} title={title} />
                <Button
                    onClick={onClick}
                    children={children}
                    aria-label={ariaLabel}>
                </Button>
            </SecondarySectionStyled>
        </MainSectionStyled>
    )
}

export default Section;