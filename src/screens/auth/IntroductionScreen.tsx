import {
  View,
  Text,
  SafeAreaView,
  useColorScheme,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';

const IntroductionScreen = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.backImageContainer}>
        <ImageBackground
          source={require('../../../assets/images/intro.png')}
          style={styles.backgroundUpeerImage}></ImageBackground>

        <View style={styles.TextArea}>
          <Text style={styles.textStyle}>LOREM IPSUM</Text>
          <Text style={styles.descriptionText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Text>

          <View style={styles.horizontalLineConatiner}>
            <Text style={styles.horizontalLine}>-</Text>
            <Text style={styles.horizontalLine}>-</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.skipButton}>
              <Text style={styles.skipButtonText}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => {
                navigation.navigate('AllsetScreen' as never); // Navigate to Home screen
              }}>
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundUpeerImage: {
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    backgroundColor: '#000',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  backImageContainer: {
    backgroundColor: '#000',
    height: '80%',
    width: '100%',
  },
  TextArea: {
    height: '60%',
    backgroundColor: '#000',
  },
  textStyle: {
    marginTop: height * 0.1,
    color: '#FF820D',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',

    textDecorationStyle: 'solid',
  },
  descriptionText: {
    marginHorizontal: width * 0.1,
    marginTop: height * 0.02,
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    textDecorationStyle: 'solid',
  },
  horizontalLine: {
    marginHorizontal: width * 0.02,
    marginTop: height * 0.05,
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    textDecorationStyle: 'solid',
  },
  horizontalLineConatiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  skipButton: {
    padding: 10,
  },
  skipButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  nextButton: {
    padding: 10,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default IntroductionScreen;
