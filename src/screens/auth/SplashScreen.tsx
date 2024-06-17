import { View, Text, SafeAreaView, StatusBar, ScrollView, useColorScheme, StyleSheet, Image, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';
  import { useNavigation } from '@react-navigation/native';
  import { NativeStackNavigationProp } from '@react-navigation/native-stack';



const SplashScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const navigation = useNavigation();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
        navigation.navigate('IntroductionScreen'as never); // Navigate to Home screen
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer
}, [navigation]);

  
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
       <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={require('../../../assets/icons/mymalla.png')} style={styles.logo} />
            </View>
        </View>
    </SafeAreaView>
  )
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    logoContainer:{
       justifyContent:'center',
       alignContent:'center',
       alignItems:'center',
       marginTop: height*1.01 ,
      
    },
    logo: {
        width: width*0.4,
        height: height*0.4,
        resizeMode: 'contain',
        

    },
});

export default SplashScreen