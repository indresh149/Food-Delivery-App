/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  GestureResponderEvent,
  TouchableOpacity,
  Image,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/screens/auth/SplashScreen';
import IntroductionScreen from './src/screens/auth/IntroductionScreen';
import AllsetScreen from './src/screens/auth/AllsetScreen';
import LanguageSelectScreen from './src/screens/auth/LanguageSelectScreen';
import SignInScreen from './src/screens/auth/SignInScreen';
import ForgetPasswordScreen from './src/screens/auth/ForgetPasswordScreen';
import SignUpScreen from './src/screens/auth/SignUpScreen';
import VerifyOtpScreen from './src/screens/auth/VerifyOtpScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/bottomTabs/HomeScreen';
import IconHome from 'react-native-vector-icons/Octicons';
import IconHeart from 'react-native-vector-icons/Feather';
import IconStar from 'react-native-vector-icons/EvilIcons';
import FavouritesScreen from './src/screens/bottomTabs/FavouritesScreen';
import CartScreen from './src/screens/bottomTabs/CartScreen';
import InvoiceScreen from './src/screens/bottomTabs/InvoiceScreen';
import StarMarkedScreen from './src/screens/bottomTabs/StarMarkedScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StoresNearYou from './src/screens/storesAndProducts/StoresNearYou';
import ParticularStore from './src/screens/storesAndProducts/ParticularStore';
import AddressScreen from './src/screens/storesAndProducts/AddressScreen';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  type CustomTabBarButtonProps = {
    children: React.ReactNode;
    onPress: (event: GestureResponderEvent) => void;
  };

  const CustomTabBarButton: React.FC<CustomTabBarButtonProps> = ({
    children,
    onPress,
  }) => (
    <TouchableOpacity style={styles.customButtonContainer} onPress={onPress}>
      <View style={styles.customButton}>{children}</View>
    </TouchableOpacity>
  );
  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 70,
          },
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarLabelStyle: {fontSize: 12, color: '#FC6C85'},
            tabBarIcon: ({focused, size}) => (
              <IconHome
                name="home"
                size={30}
                color={focused ? '#FF820D' : 'gray'}
              />
            ),
          }}
        />

        <Tab.Screen
          name="FavouriteScreen"
          component={FavouritesScreen}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarLabelStyle: {fontSize: 12, color: '#FC6C85'},
            tabBarIcon: ({focused, size}) => (
              <IconHeart
                name="heart"
                size={30}
                color={focused ? '#FF820D' : 'gray'}
              />
            ),
          }}
        />

        <Tab.Screen
          name="CartScreen"
          component={CartScreen}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarLabelStyle: {fontSize: 12, color: '#FC6C85'},
            tabBarIcon: ({focused, size}) => (
              <Image
                source={require('./assets/icons/bagImg.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#FF820D' : 'white',
                }}
              />
            ),
            tabBarButton: props => <CustomTabBarButton {...props} />,
          }}
        />

        <Tab.Screen
          name="InvoiceScreen"
          component={AddressScreen}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarLabelStyle: {fontSize: 12, color: '#FC6C85'},
            tabBarIcon: ({focused, size}) => (
              <Image
                source={require('./assets/icons/notesTab.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#FF820D' : 'gray',
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="StarMarkedScreen"
          component={StarMarkedScreen}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarLabelStyle: {fontSize: 12, color: '#FC6C85'},
            tabBarIcon: ({focused, size}) => (
              <IconStar
                name="star"
                size={30}
                color={focused ? '#FF820D' : 'gray'}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  function AuthenticatedStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="DrawerScreen"
          component={MyTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen
          name="IntroductionScreen"
          component={IntroductionScreen}
        />
        <Stack.Screen name="AllsetScreen" component={AllsetScreen} />
        <Stack.Screen
          name="LanguageSelectScreen"
          component={LanguageSelectScreen}
        />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen
          name="ForgetPasswordScreen"
          component={ForgetPasswordScreen}
        />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="VerifyOtpScreen" component={VerifyOtpScreen} />

        <Stack.Screen name="StoresNearYou" component={StoresNearYou} />
        <Stack.Screen name="ParticularStoreScreen" component={ParticularStore} />
        <Stack.Screen name="AddressScreen" component={AddressScreen} />
      </Stack.Navigator>
    );
  }

  function AuthStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen
          name="IntroductionScreen"
          component={IntroductionScreen}
        />
        <Stack.Screen name="AllsetScreen" component={AllsetScreen} />
        <Stack.Screen
          name="LanguageSelectScreen"
          component={LanguageSelectScreen}
        />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen
          name="ForgetPasswordScreen"
          component={ForgetPasswordScreen}
        />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="VerifyOtpScreen" component={VerifyOtpScreen} />
      </Stack.Navigator>
    );
  }

  //   function Navigation() {
  //   return (
  //     <NavigationContainer>
  //       {/* <Stack.Navigator screenOptions={{headerShown: false}}>
  //         <Stack.Screen name="SplashScreen" component={SplashScreen} />
  //         <Stack.Screen
  //           name="IntroductionScreen"
  //           component={IntroductionScreen}
  //         />
  //         <Stack.Screen name="AllsetScreen" component={AllsetScreen} />
  //         <Stack.Screen
  //           name="LanguageSelectScreen"
  //           component={LanguageSelectScreen}
  //         />
  //         <Stack.Screen name="SignInScreen" component={SignInScreen} />
  //         <Stack.Screen
  //           name="ForgetPasswordScreen"
  //           component={ForgetPasswordScreen}
  //         />
  //         <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
  //         <Stack.Screen name = "VerifyOtpScreen" component = {VerifyOtpScreen} />
  //       </Stack.Navigator> */}
  //        <AuthenticatedStack />
  //     </NavigationContainer>
  //   );
  // }

  function Navigation() {
    const [isUserAuthenticated, setIsUserAuth] = useState(false);

    useEffect(() => {
      async function fetchToken() {
        const storedToken = await AsyncStorage.getItem('token');

        if (storedToken) {
          setIsUserAuth(true);
        }
      }

      fetchToken();
    }, []);

    return (
      <NavigationContainer>
        {isUserAuthenticated ? <AuthenticatedStack /> : <AuthStack />}
      </NavigationContainer>
    );
  }

  function Root() {
    return <Navigation />;
  }

  return (
    <>
      <Root />
    </>
  );
}

const styles = StyleSheet.create({
  customButtonContainer: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButton: {
    paddingTop: 5,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FF820D',
  },
});

export default App;
