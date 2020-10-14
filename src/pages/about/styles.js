import styled from 'styled-components';
import Colors from '../../../styles/colors';

export const Contact = styled.View`
    width: 85%;
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items:flex-start;
`;

export const ContactText = styled.Text`
    font-family: 'OpenSans';
    font-weight: 700;
    font-size: 17px;
    text-align: justify;
`;

export const ContactLink = styled.TouchableOpacity``;

export const ContactLinkText = styled.Text`
    font-family: 'OpenSans';
    font-weight: 700;
    font-size: 17px;
    color: ${Colors.primaryColor};
`;
