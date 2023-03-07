import styled from 'styled-components'
import { Link } from 'react-router-dom';

const FrontButton = styled(Link)`
    text-decoration: none;
    border: 1px solid darkgrey;
    font-family: Arial, Helvetica, sans-serif;
    color: #333333;
    background-color: white;
    display: flex;
    width: 90%;
    height: 50px;
    padding-left: 10px;
    justify-content: left;
    margin-top: 6px;
    margin-bottom: 6px;
    &:hover {
        text-decoration: underline;
        background-color: lightgrey;
    }
    &:active {
        text-decoration: underline;
        color: black;
        background-color: grey;
    }
`

export { FrontButton };