import styled from 'styled-components/native';
import Colors from './colors';

export const Main = styled.View`
    flex: 1;
    background-color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ColorText = styled.Text`
    color: ${Colors.primaryColor};
`;

export const ContentText = styled.Text`
    width: 85%;
    font-family: 'OpenSans';
    font-weight: 700;
    font-size: 17px;
    margin-bottom: 20px;
`;