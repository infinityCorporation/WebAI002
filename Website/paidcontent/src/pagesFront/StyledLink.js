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
    justifyContent: center;
    &:hover {
        text-decoration: underline;
    }
`;

export { TitleLink };
export { SubLink };