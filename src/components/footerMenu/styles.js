import styled from 'styled-components/native';
import Colors from '../../../styles/colors';

export const MenuBody = styled.View`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: ${Colors.primaryColor};
    position: absolute;
    bottom: 0;
    z-index: 2;
`;

