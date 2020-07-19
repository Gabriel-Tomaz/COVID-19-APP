import React from 'react';
import { Image } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

import Emoji from 'react-native-emoji';

import FooterMenu from '../../components/footerMenu';

import { Main,ColorText,ContentText } from '../../../styles/global';
import { TopBar,ChartContent,StatsContent,StatsList,StatsTitle,StatsLine,StatsValues,StatsValuesTitle,Values } from './styles';
import Colors from '../../../styles/colors';

import TopBarImg from '../../assets/img/logoTopBar.png';

export default function Stats(){

    const data = [493,89,7127];
    const pieData = data.map((value, index) => ({
        value,
        key: `${index}-${value}`,
        svg:{
            fill: `${Colors.primaryColor}` 
        }
    }));

    return(
        <Main>
            <TopBar>
               <Image source={TopBarImg} />
            </TopBar>
                <StatsContent contentContainerStyle={{display: 'flex', alignItems: 'center'}} showsVerticalScrollIndicator={false}>
                    <ContentText>
                        Esses são os dados sobre o <ColorText>COVID</ColorText> no seu estado.
                    </ContentText>
                    <ChartContent>
                        <PieChart style={{width: 200,height: 200,}} data={pieData} />
                    </ChartContent>
                    <StatsList>
                        <StatsTitle>Ceará</StatsTitle>
                        <StatsLine />
                        <StatsValues>
                            <StatsValuesTitle>
                                <Emoji name="mask" style={{fontSize: 20, letterSpacing:10}} />
                                Casos
                            </StatsValuesTitle>
                            <Values style={{color: Colors.primaryColor}}>144000</Values>
                        </StatsValues>
                        <StatsValues>
                            <StatsValuesTitle>
                                <Emoji name="face_with_thermometer" style={{fontSize: 20, letterSpacing:10}} />
                                Suspeitos
                            </StatsValuesTitle>
                            <Values style={{color: Colors.suspectsColor}}>493</Values>
                        </StatsValues>
                        <StatsValues>
                            <StatsValuesTitle>
                                <Emoji name="smiley" style={{fontSize: 20, letterSpacing:10}} />
                                Descartados
                            </StatsValuesTitle>
                            <Values style={{color: Colors.refusesColor}}>89</Values>
                        </StatsValues>
                        <StatsValues>
                            <StatsValuesTitle>
                                <Emoji name="skull" style={{fontSize: 20, letterSpacing:10}} />
                                Mortes
                            </StatsValuesTitle>
                            <Values style={{color: Colors.deathsColor}}>7127</Values>
                        </StatsValues>
                    </StatsList>
                </StatsContent>
            <FooterMenu />
        </Main>
    );
}