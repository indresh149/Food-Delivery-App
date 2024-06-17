import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  useColorScheme,
  Dimensions,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const AllsetScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        <Image
          source={require('../../../assets/icons/tick_mark.png')}
          style={styles.logo}
        />
        <Text style={styles.allSetText}>ALL SET!</Text>
        <Text style={styles.textStyle}>LOREM IPSUM</Text>
        <Text style={styles.descriptionText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>

         <TouchableOpacity 
          onPress={() => {
            navigation.navigate('LanguageSelectScreen' as never); // Navigate to Home screen
          }}

         >
        <Text style={styles.startTextStyle}>Start Now</Text>
        <Image
          source={require('../../../assets/images/big_line.png')}
          style={styles.logoLine}
        />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  logo: {
    width: width * 0.12,
    height: height * 0.065,
    marginBottom: 20,
  },
  allSetText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textStyle: {
    color: '#FF820D',
    fontSize: 16,
    marginTop: height * 0.04,
  },
  descriptionText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    marginTop: height * 0.04,
  },
  startTextStyle: {
    color: '#FF820D',
    fontSize: 16,
    marginTop: height * 0.04,
  },
  logoLine: {
    width: width * 0.2,
    height: height * 0.001,
    marginTop: height * 0.01,
  },
});

export default AllsetScreen;
