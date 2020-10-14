import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Home from './src/pages/home';
import Stats from './src/pages/stats';
import About from './src/pages/about'

export default function App(){
  return(
    <Home />
  );
}

