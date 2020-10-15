import React from 'react';
import { useState,useEffect } from 'react';
import { Picker } from '@react-native-community/picker';
import {useNavigation} from '@react-navigation/native';

import api from '../../services/api';

import { Main, ColorText, ContentText, ContentLogo } from '../../../styles/global';
import { SelectContent, SearchButton,ButtonTitle } from './styles';
import logoImg from '../../assets/img/logo.png';

export default function Home(){ 
    const Navigation = useNavigation();

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

    function listStatus(){
        if (uf.UF == "") {
            alert("Selecione um Estado");
        }else{
            Navigation.navigate('Stats', {uf});
        }

        
    }

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
                    style={{width: '90%'}}
                >
                    <Picker.Item label="Selecione" value=""/>
                    {states.map((item) => (
                        <Picker.Item key={item.uid} label={item.state} value={item.uf} />
                    ))}
                </Picker>
            </SelectContent>
            <SearchButton onPress={() => {listStatus()}}>
                <ButtonTitle>Buscar</ButtonTitle>
            </SearchButton>
        </Main>
    );
}