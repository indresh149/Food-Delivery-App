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
  ScrollView,
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
import {Checkbox} from 'react-native-paper';
import IconPerson from 'react-native-vector-icons/Ionicons';
import IconLock from 'react-native-vector-icons/Fontisto';

const SignUpScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [checked, setChecked] = React.useState(false);

  return (
    <ScrollView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LanguageSelectScreen' as never); // Navigate to Home screen
          }}>
          <Icon style={styles.IconArrow} name="left" size={25} color="#000" />
        </TouchableOpacity>

        <View>
          <Image
            source={require('../../../assets/icons/mymalla.png')}
            style={styles.logo}
          />
        </View>

        <Text style={styles.signInText}>Sign up</Text>

        <Text style={styles.descriptionText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>

        <Text style={styles.emailTextHint}>Your first and last name</Text>

        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="eg : john Doe"
            style={styles.textInputPlace}
            onChangeText={text => console.log(text)}></TextInput>
        </View>

        <Text style={[styles.emailTextHint, {marginTop: height * 0.03}]}>
          Enter your email address
        </Text>

        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="eg : john@gmail.com"
            style={styles.textInputPlace}
            onChangeText={text => console.log(text)}></TextInput>
        </View>

        <Text style={[styles.emailTextHint, {marginTop: height * 0.03}]}>
          Enter your mobile number
        </Text>

        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="eg : 9865854596"
            style={styles.textInputPlace}
            onChangeText={text => console.log(text)}></TextInput>
        </View>

        <Text style={[styles.emailTextHint, {marginTop: height * 0.03}]}>
          Password
        </Text>

        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="eg : ******** "
            style={styles.textInputPlace}
            onChangeText={text => console.log(text)}></TextInput>
        </View>

        <View style={styles.checkBox}>
          <Checkbox
          color='#000'
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />

          <Text style={styles.iagreeText}>I agree to </Text>
          <Text style={styles.termsAnd}>Terms & Conditions</Text>
          <Text style={styles.iagreeText}> and </Text>
          <Text style={styles.termsAnd}>Privacy policy</Text>
        </View>

       

        <TouchableOpacity 
        onPress={() => {
          navigation.navigate('VerifyOtpScreen' as never); // Navigate to Home screen
        }}
        style={styles.SignUpButton}>
          <Text style={styles.loginText}>Create An Account</Text>
        </TouchableOpacity>

        <View style={styles.orContainer}>
          <Text>-</Text>
          <Text>OR</Text>
          <Text>-</Text>
        </View>

        <View style={styles.differntLogins}>
          <TouchableOpacity>
            <Image
              source={require('../../../assets/icons/fbIcon.png')}
              style={styles.logoIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('../../../assets/icons/googleIcon.png')}
              style={styles.logoIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('../../../assets/icons/linkedInIcon.png')}
              style={styles.logoIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.dontHaveAccountCont}>
          <Text style={styles.dontHaveText}>Already Registered?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignInScreen' as never); // Navigate to Home screen
            }}>
            <Text style={styles.createAnAcc}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    marginBottom: height * 0.3,
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
  SignUpButton: {
    backgroundColor: '#FF820D',
    width: width * 0.6,
    height: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: height * 0.04,
    marginLeft: width * 0.18,
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
    marginTop: height * 0.04,
   
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
  checkBox: {
    flexDirection: 'row',
    marginTop: height * 0.02,
    marginLeft: width * 0.1,
  },
  iagreeText: {
    marginTop: height * 0.015,
    color: '#000',
    fontSize: 12,
  },
  termsAnd: {
    marginTop: height * 0.015,
    color: '#BDBDBD',
    fontSize: 12,
  },
});

export default SignUpScreen;
