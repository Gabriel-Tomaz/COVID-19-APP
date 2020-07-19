import React from 'react';
import { useState,useEffect } from 'react';
import { Picker } from '@react-native-community/picker';
import {Text} from 'react-native';

import FooterMenu from '../../components/footerMenu';
import api from '../../services/api';

import { Main,ContentLogo,ContentText, ColorText,SelectContent, Select, SearchButton,ButtonTitle } from './styles';
import logoImg from '../../assets/img/logo.png';

export default function Home(){ 
    
    const [uf, setUF] = useState({
        UF: '',
    });
    const [states, setStates] = useState([]);

    async function getStates(){
        await api.get('api/report/v1').then(response => {
            setStates(response.data.data);
        });
    }

    useEffect(() => {
        getStates();
    },[]);

    states.sort((item,itemB) => (
        (item.state > itemB.state) ? 1 : ((itemB.state > item.state) ? -1 : 0)
    ));

    return(
        <Main>
            <ContentLogo source={ logoImg }/>
            <ContentText>
                Selecione seu estado para obter informações sobre o novo <ColorText>Coronavírus</ColorText>.
            </ContentText>
            <SelectContent>
                <Picker 
                    selectedValue={uf.UF}
                    onValueChange={(itemValue, itemIndex) => setUF({UF: itemValue})}
                    style={{width: '90%'}
                }>
                    {states.map((item) => (
                        <Picker.Item key={item.uid} label={item.state} value={item.uf} />
                    ))}
                </Picker>
            </SelectContent>
            <SearchButton>
                <ButtonTitle>Buscar</ButtonTitle>
            </SearchButton>
            <FooterMenu></FooterMenu>
        </Main>
    );
}