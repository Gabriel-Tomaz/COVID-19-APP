import React from 'react';
import {Linking} from 'react-native';

import FooterMenu from '../../components/footerMenu';
import {Contact,ContactText, ContactLink,ContactLinkText} from './styles';
import { Main, ColorText, ContentText,ContentLogo } from '../../../styles/global';
import logoImg from '../../assets/img/logo.png';

export default function About(){

    const gitUrl = "https://github.com/Gabriel-Tomaz";
    const apiUrl = "https://covid19-brazil-api.now.sh/";

    function openLink(url){
        Linking.openURL(url);
    }

    return(
        <Main>
           <ContentLogo source={logoImg}></ContentLogo>
           <ContentText>
            O <ColorText>COVID APP</ColorText> é uma aplicação sem fins 
            lucrativos com o intuito de disseminar 
            informações sobre os casos do novo 
            Coronavírus no Brasil.
           </ContentText>
           <ContentText>
            O app foi desenvolvido com react native
            e os dados apresentados foram extraídos
            da 
            <ContactLink onPress={() => {openLink(apiUrl)}}>
                <ContactLinkText>COVID-19 Brazil API.</ContactLinkText>
               </ContactLink>
           </ContentText>
           <Contact>
               <ContactText>Desenvolvido por</ContactText>
               <ContactLink onPress={() => {openLink(gitUrl)}}>
                <ContactLinkText> Gabriel-Tomaz</ContactLinkText>
               </ContactLink>
            </Contact>
            <FooterMenu></FooterMenu>
        </Main>
    );
}