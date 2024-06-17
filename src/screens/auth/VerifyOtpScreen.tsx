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
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import IconPerson from 'react-native-vector-icons/Ionicons';
import IconLock from 'react-native-vector-icons/Fontisto';
import AsyncStorage from '@react-native-async-storage/async-storage';

const VerifyOtpScreen = () => {
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignInScreen' as never); // Navigate to Home screen
          }}>
          <Icon style={styles.IconArrow} name="left" size={25} color="#000" />
        </TouchableOpacity>

        <View>
          <Image
            source={require('../../../assets/icons/mymalla.png')}
            style={styles.logo}
          />
        </View>

        <Text style={styles.signInText}>One time password</Text>

        <Text style={styles.descriptionText}>
          Code has been sent to your mobile number. Please enter your code.
        </Text>

        <Text style={styles.emailTextHint}>Enter your code</Text>

        <View style={styles.textInputContainer}>
          <IconPerson
            style={styles.IconArrow}
            name="person"
            size={25}
            color="#555"
          />
          <TextInput
            placeholder="eg : 123456 "
            style={styles.textInputPlace}
            onChangeText={text => console.log(text)}></TextInput>
        </View>

        <TouchableOpacity
          onPress={() => {
            AsyncStorage.setItem('token', 'true');
          }}
          style={styles.loginButton}>
          <Text style={styles.loginText}>Submit</Text>
        </TouchableOpacity>

        <View style={styles.dontHaveAccountCont}>
          <Text style={styles.dontHaveText}>Didn’t received yet?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignInScreen' as never); // Navigate to Home screen
            }}>
            <Text style={styles.createAnAcc}>Resend</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
  },
  IconArrow: {
    marginTop: height * 0.02,
    marginLeft: width * 0.02,
  },
  pickUpText: {
    marginTop: height * 0.1,
    marginLeft: width * 0.05,
    fontSize: 30,

    color: '#FF820D',
  },
  logo: {
    resizeMode: 'contain',
    width: width * 0.2,
    height: height * 0.2,

    marginLeft: width * 0.04,
  },
  signInText: {
    marginLeft: width * 0.05,
    fontSize: 25,
    color: '#000000',
  },
  descriptionText: {
    marginTop: height * 0.01,
    marginHorizontal: width * 0.05,
    fontSize: 15,
    color: '#000000',
  },
  emailTextHint: {
    marginTop: height * 0.02,
    marginLeft: width * 0.05,
    fontSize: 12,
    color: '#555555',
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    //borderColor: '#FF820D',
    //borderWidth: 1,
    marginTop: height * 0.01,
    marginLeft: width * 0.07,
    width: width * 0.9,
    height: height * 0.05,
  },
  textInputPlace: {
    marginTop: height * 0.01,
    marginLeft: width * 0.01,
    width: width * 0.8,
    height: height * 0.05,
    fontSize: 15,
    color: '#000000',
  },
  forgetPassContainer: {
    marginTop: height * 0.02,
    marginLeft: width * 0.65,
  },
  forgetText: {
    color: '#BDBDBD',
    fontSize: 12,
  },
  loginButton: {
    backgroundColor: '#FF820D',
    width: width * 0.3,
    height: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: height * 0.07,
    marginLeft: width * 0.34,
  },
  loginText: {
    color: '#fff',
    fontSize: 15,
  },
  orContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.04,
  },
  differntLogins: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: height * 0.04,
  },
  logoIcon: {
    width: width * 0.1,
    height: height * 0.05,
    resizeMode: 'contain',
    // marginLeft: width * 0.45,
    marginTop: height * 0.01,
  },
  dontHaveAccountCont: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.08,
  },
  dontHaveText: {
    color: '#000',
    fontSize: 12,
  },
  createAnAcc: {
    marginLeft: width * 0.02,
    color: '#BDBDBD',
    fontSize: 12,
  },
});

export default VerifyOtpScreen;
