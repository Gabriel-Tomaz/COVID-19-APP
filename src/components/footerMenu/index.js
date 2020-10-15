import React from 'react';
import { TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import { MenuBody } from './styles';
import Colors from '../../../styles/colors';

import MenuIcon from 'react-native-vector-icons/Entypo';

export default function FooterMenu(){
    const Navigation = useNavigation();

    function goToPage(page){
        Navigation.navigate(`${page}`);
    }

    return(
        <MenuBody>
            <TouchableOpacity onPress={() => goToPage("Home")}>
                <MenuIcon name="home" size={35} color={Colors.iconsColor}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => goToPage("Stats")}>
                <MenuIcon name="bar-graph" size={35} color={Colors.iconsColor}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => goToPage("About")}>
                <MenuIcon name="info" size={35} color={Colors.iconsColor}/>
            </TouchableOpacity>
        </MenuBody>
    );
}