import React from 'react';
import { useState } from 'react';
import { Picker } from '@react-native-community/picker';

import FooterMenu from '../../components/footerMenu';

import { Main,ContentLogo,ContentText, ColorText,SelectContent, Select, SearchButton,ButtonTitle } from './styles';
import logoImg from '../../assets/img/logo.png';

export default function Home(){ 
    const [uf, setUF] = useState({
        UF: '',
    });

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
                    <Picker.Item label="Selecione" value=" " />
                    <Picker.Item label="Ceará" value="CE" />
                    <Picker.Item label="Paraíba" value="PB" />
                </Picker>
            </SelectContent>
            <SearchButton>
                <ButtonTitle>Buscar</ButtonTitle>
            </SearchButton>
            <FooterMenu></FooterMenu>
        </Main>
    );
}