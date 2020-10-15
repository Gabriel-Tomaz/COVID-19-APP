import styled from 'styled-components/native';
import Colors from '../../../styles/colors';

export const SelectContent = styled.View`
    width: 85%;
    height: 50px;
    border-width: 2px;
    border-radius: 4px;
    border-color: ${Colors.grayColor};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
`;

export const SearchButton = styled.TouchableOpacity`
    width: 85%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.primaryColor};
    border-width: 2px;
    border-radius: 4px;
    border-color: ${Colors.secondaryColor};
`;

export const ButtonTitle = styled.Text`
    text-transform: uppercase;
    font-size: 24px;
    font-weight: bold;
    color: ${Colors.iconsColor};
`;
