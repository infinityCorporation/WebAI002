import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TitleLink = styled(Link)`
    text-decoration: none;
    font-family: Inter;
    color: black;
    position: relative;
    left: 25px;
    top: 10px;
    justifyContent: center;
`;

const SubLink = styled(Link)`
    text-decoration: none;
    font-family: Inter;
    color: black;
    justifyContent: center;
`;

export { TitleLink };
export { SubLink };