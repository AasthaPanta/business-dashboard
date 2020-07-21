import styled from 'styled-components';
import { midGrey, darkerGrey } from './GlobalStyle';

export const Card = styled.div`
    padding: 20px;
    background-color: ${({dark}) => dark ? darkerGrey : 'white'};
    box-shadow: 0px 3px 5px ${({dark}) => dark ? 'black' : midGrey };;
    margin-top: 20px;
    box-sizing: border-box;
    ${({height}) => height && `height: ${height}px;`}

    @media (max-width: 1200px){
        padding: 10px;
    }
`;