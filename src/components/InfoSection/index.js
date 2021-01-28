import React from 'react';
import { Button } from '../ButtonElements';
import { InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap,ImgWrap,Img,Column2 } from './InfoElements';
import svg1 from '../../images/svg-1.svg';
import svg2 from '../../images/svg-2.svg';
import svg3 from '../../images/svg-3.svg';

const InfoSection = ({ id, lightBg, imgStart, topLine, lightText, darkText, headline, description, buttonLabel, img, alt, dark, primary, dark2 }) => {
    const images = {
        svg1:svg1,
        svg2:svg2,
        svg3:svg3
    }

    return (
        <>
            <InfoContainer id={id} lightBg={lightBg}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>   
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to='home' dark={dark} smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={primary} dark2={dark2}>{buttonLabel}</Button>
                                </BtnWrap>
                            
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={images[img]} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer> 
        </>
    )
}

export default InfoSection;
