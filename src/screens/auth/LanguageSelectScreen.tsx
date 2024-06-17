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
import DropDownPicker from 'react-native-dropdown-picker';

interface languageSelect {
  label: string;
  value: string;
}

const itemslanguageSelect: languageSelect[] = [
  {label: 'Dutch (Nederlands)', value: 'English'},
  {label: 'English (UK)', value: 'Nepali'},
  {label: 'German (Deutsche)', value: 'Hindi'},
  {label: 'Spanish (española)', value: 'Chinese'},
  {label: 'Japanese', value: 'Japanese'},
  {label: 'Korean', value: 'Korean'},
  {label: 'French', value: 'French'},
  {label: 'Spanish', value: 'Spanish'},
  {label: 'German', value: 'German'},
  {label: 'Italian', value: 'Italian'},
  {label: 'Russian', value: 'Russian'},
  {label: 'Arabic', value: 'Arabic'},
  {label: 'Turkish', value: 'Turkish'},
  {label: 'Portuguese', value: 'Portuguese'},
  {label: 'Dutch', value: 'Dutch'},
  {label: 'Swedish', value: 'Swedish'},
  {label: 'Danish', value: 'Danish'},
  {label: 'Finnish', value: 'Finnish'},
  {label: 'Norwegian', value: 'Norwegian'},
  {label: 'Polish', value: 'Polish'},
  {label: 'Greek', value: 'Greek'},
  {label: 'Czech', value: 'Czech'},
  {label: 'Slovak', value: 'Slovak'},
  {label: 'Hungarian', value: 'Hungarian'},
  {label: 'Bulgarian', value: 'Bulgarian'},
  {label: 'Romanian', value: 'Romanian'},
  {label: 'Ukrainian', value: 'Ukrainian'},
  {label: 'Croatian', value: 'Croatian'},
  {label: 'Serbian', value: 'Serbian'},
  {label: 'Bosnian', value: 'Bosnian'},
  {label: 'Albanian', value: 'Albanian'},
  {label: 'Macedonian', value: 'Macedonian'},
  {label: 'Slovenian', value: 'Slovenian'},
  {label: 'Montenegrin', value: 'Montenegrin'},
  {label: 'Kosovan', value: 'Kosovan'},
];

const LanguageSelectScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [openlanguageSelect, setOpenlanguageSelect] = useState<boolean>(false);
  const [valuelanguageSelect, setValuelanguageSelect] = useState<any | null>();
  //const [itemslanguageSelect, setItemslanguageSelect] = useState<languageSelect[]>([]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('AllsetScreen' as never); // Navigate to Home screen
            }}
        >
          <Icon style={styles.IconArrow} name="left" size={25} color="#000" />
        </TouchableOpacity>

        <Text style={styles.pickUpText}>Pick up</Text>

        <Text style={styles.youLanguage}>your language</Text>

        <DropDownPicker
          style={styles.languageDropdown}
          dropDownContainerStyle={styles.languageDropdownContainer}
          open={openlanguageSelect}
          value={valuelanguageSelect}
          items={itemslanguageSelect}
          setOpen={setOpenlanguageSelect}
          setValue={setValuelanguageSelect}
          selectedItemLabelStyle={{color: '#FF820D'}}
          // setItems={setItemslanguageSelect}
          placeholder={'Choose'}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignInScreen' as never); // Navigate to Home screen
          }}
          style={styles.nextButtonCircle}>
          <Icon
            style={styles.IconArrowNext}
            name="right"
            size={25}
            color="#fff"
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
  youLanguage: {
    marginLeft: width * 0.05,
    fontSize: 30,
    color: '#FF820D',
  },
  languageDropdown: {
    borderColor: '#FFF',
    marginTop: height * 0.1,
    marginLeft: width * 0.05,
    width: width * 0.9,
    height: height * 0.05,
  },
  languageDropdownContainer: {
    borderColor: '#FFF',
    width: width * 0.9,
    height: height * 0.3,
    marginLeft: width * 0.05,
    marginTop: height * 0.1,
  },
  nextButtonCircle: {
    backgroundColor: '#FF820D',
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.45,
    marginLeft: width * 0.8,
    padding: 10,
  },
  IconArrowNext: {
    color: '#fff',
  },
});

export default LanguageSelectScreen;
