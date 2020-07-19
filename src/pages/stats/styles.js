import styled from 'styled-components/native';
import Colors from '../../../styles/colors';

export const TopBar = styled.View`
    width: 100%;
    height: 50px;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    background-color: #FFF;
`;

export const StatsContent = styled.ScrollView`
    z-index: 1;
    width: 100%;
    margin-top: 80px;
    margin-bottom: 10px;
`;

export const ChartContent = styled.View`
    width: 85%;
    height: 250px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StatsList = styled.View`
    width: 85%;
    height: 230px;
    margin-bottom: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const StatsTitle = styled.Text`
    font-family: 'OpenSans';
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 15px;
`;

export const StatsLine = styled.View`
    width: 85%;
    height: 2px;
    background-color: ${Colors.grayColor};
    margin-bottom: 15px;
`;

export const StatsValues = styled.View`
     width: 88%;
     height: 30px;
     flex-direction: row;
     align-items: center;
     justify-content: space-between;
     margin-bottom: 10px;
`;

export const StatsValuesTitle = styled.Text`
    font-family: 'OpenSans';
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
`;
export const Values = styled.Text`
    font-family: 'OpenSans';
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
    margin-right: 5px;
`;