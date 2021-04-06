import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
    MainSectionStyled,
    SecondarySectionStyled,
    LinkStyled
} from './Section.styled';
import Image from 'components/Image';
import Title from 'components/Title';

const Section = ({ image, alt, title, children, url }) => {
    const location = useLocation();
  
    return (
        <MainSectionStyled>
            <Image image={image} alt={alt} />
            <SecondarySectionStyled>
                <Title
                    style={{ marginBottom: '20px', fontSize: '18px' }}
                    title={title}
                />
                <LinkStyled
                    to={{
                        pathname: `${url}`,
                        state: {
                            from: {
                                location,
                            },
                        },
                    }}
                    exact
                >
                    {children}
                </LinkStyled>
            </SecondarySectionStyled>
        </MainSectionStyled>
    )
}

Section.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    url: PropTypes.string.isRequired  
};

export default Section;