import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TitleLink = styled(Link)`
    text-decoration: none;
    font-family: Helvetica, Arial, sans-serif;
    color: black;
    position: relative;
    left: 25px;
    top: 10px;
    justifyContent: center;
`;

const SubLink = styled(Link)`
    text-decoration: none;
    font-family: Helvetica, Arial, sans-serif;
    color: black;
    justify-content: center;
    &:hover {
        text-decoration: underline;
    }
`;

const SignLink = styled(Link)`
    text-decoration: none;
    font-family: Helvetica, Arial, sans-serif;
    color: black;
    justify-content: center;
    &:hover {
        background-color: #47aa74;
    }
    &:active{
        color: white;
    }
`;

export { TitleLink, SubLink };
export { SignLink };
