import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import Applications from "./src/features/applications/Applications";
import { 
  useFonts, 
  Poppins_400Regular, 
  Poppins_500Medium, 
  Poppins_600SemiBold, 
  Poppins_700Bold 
} from '@expo-google-fonts/poppins';

//yeni eklediklerim

import * as SplashScreen from "expo-splash-screen";
import {{{{}}}}

const App = () => {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular, 
    Poppins_500Medium, 
    Poppins_600SemiBold, 
    Poppins_700Bold 
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return <Applications/>
};

export default App;
