import React from 'react';
import { TouchableOpacity } from 'react-native';

import { MenuBody } from './styles';
import Colors from '../../../styles/colors';

import MenuIcon from 'react-native-vector-icons/Entypo';

export default function FooterMenu(){
    return(
        <MenuBody>
            <TouchableOpacity>
                <MenuIcon name="home" size={35} color={Colors.iconsColor}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <MenuIcon name="bar-graph" size={35} color={Colors.iconsColor}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <MenuIcon name="info" size={35} color={Colors.iconsColor}/>
            </TouchableOpacity>
        </MenuBody>
    );
}