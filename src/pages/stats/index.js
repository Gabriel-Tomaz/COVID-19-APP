import React from 'react';
import { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { PieChart } from 'react-native-svg-charts';

import Emoji from 'react-native-emoji';

import FooterMenu from '../../components/footerMenu';
import api from '../../services/api';

import { Main,ColorText,ContentText } from '../../../styles/global';
import { TopBar,ChartContent,StatsContent,StatsList,StatsTitle,StatsLine,StatsValues,StatsValuesTitle,Values } from './styles';
import Colors from '../../../styles/colors';

import TopBarImg from '../../assets/img/logoTopBar.png';

export default function Stats(){
    const [state, setState] = useState('ce');
    const [cases, setCases] = useState([]);



    //Retornando dados da API 
    async function getCases(){
        await api.get('api/report/v1/brazil/uf/' + state).then(response => {
            setCases(response.data);
        });
    }

    useEffect(() => {
        getCases();
    },[]);

    const setColor = (index) => {
        if (index == 0) {
            return Colors.primaryColor;
        }
        else if(index == 1){
            return Colors.suspectsColor
        }
        else if(index == 2){
            return Colors.refusesColor
        }
        else if(index == 3){
            return Colors.deathsColor
        }
    }

    const data = [cases.cases, cases.suspects, cases.refuses, cases.deaths];
    const pieData = data.map((value, index) => ({

        value,
        key: `${index}-${value}`,
        svg:{
            fill: setColor(index),
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
                        <StatsTitle>{cases.state}</StatsTitle>
                        <StatsLine />
                        <StatsValues>
                            <StatsValuesTitle>
                                <Emoji name="mask" style={{fontSize: 20, letterSpacing:10}} />
                                Casos
                            </StatsValuesTitle>
                            <Values style={{color: Colors.primaryColor}}>{cases.cases}</Values>
                        </StatsValues>
                        <StatsValues>
                            <StatsValuesTitle>
                                <Emoji name="face_with_thermometer" style={{fontSize: 20, letterSpacing:10}} />
                                Suspeitos
                            </StatsValuesTitle>
                            <Values style={{color: Colors.suspectsColor}}>{cases.suspects}</Values>
                        </StatsValues>
                        <StatsValues>
                            <StatsValuesTitle>
                                <Emoji name="smiley" style={{fontSize: 20, letterSpacing:10}} />
                                Descartados
                            </StatsValuesTitle>
                            <Values style={{color: Colors.refusesColor}}>{cases.refuses}</Values>
                        </StatsValues>
                        <StatsValues>
                            <StatsValuesTitle>
                                <Emoji name="skull" style={{fontSize: 20, letterSpacing:10}} />
                                Mortes
                            </StatsValuesTitle>
                            <Values style={{color: Colors.deathsColor}}>{cases.deaths}</Values>
                        </StatsValues>
                    </StatsList>
                </StatsContent>
            <FooterMenu />
        </Main>
    );
}