import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideLink = styled(Link)`
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    color: #333333;
    display: flex;
    flex-direction: row;
    margin: auto;
    border: none;
    &:hover {
        text-decoration: underline;
    }
    &:active {
        color: grey;
    }
`;

export { SideLink };