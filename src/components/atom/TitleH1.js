import styled from 'styled-components';

const TitleH1 = styled.h1`
    color: #EEE;
    font-size: 3rem;
    background-color: #B40000;
    padding: 0rem 1rem;
    opacity: 0.9;
    &::last-child {
        margin-bottom: 0px;
    }

    @media screen and (max-width: 680px) {
        font-size: 2.5rem;
    }
    @media screen and (max-width: 555px) {
        font-size: 1.8rem;
    }
`;

export default TitleH1;