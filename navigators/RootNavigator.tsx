import { View, Text, useColorScheme } from 'react-native'
import React, { useEffect } from 'react'
import { NavigatorScreenParams, CompositeScreenProps, NavigationContainer } from "@react-navigation/native";
import TabsNavigator, { TabsStackParamList } from './TabsNavigator';
import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    NativeStackScreenProps,
    createNativeStackNavigator,
} from "@react-navigation/native-stack";
import DetailScreen from '../screens/DetailScreen';

import { useSelector, useDispatch } from 'react-redux';
import { selectTheme, setTheme } from '../redux/reducer';
import { CustomDarkTheme, CustomDefaultTheme } from '../themes/AppThemes';

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';




export type RootStackParamList = {
    TabsStack: NavigatorScreenParams<TabsStackParamList>;
    Splash: undefined
    Login: undefined
    Register: undefined
    Details: {
        id: string;
    };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;


const RootNavigator = () => {

    const theme = useSelector(selectTheme);
    const colorScheme = useColorScheme()
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(`root ${theme.dark}`);
        console.log(colorScheme);

        if (colorScheme === 'dark') {
            dispatch(setTheme(CustomDarkTheme))
        } else {
            dispatch(setTheme(CustomDefaultTheme))
        }

    }, [])

    return (
        <NavigationContainer theme={theme}>
            <BottomSheetModalProvider>
                <RootStack.Navigator initialRouteName='Splash'>
                    <RootStack.Screen
                        name="TabsStack"
                        component={TabsNavigator}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <RootStack.Screen
                        name="Details"
                        component={DetailScreen}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <RootStack.Screen
                        name="Splash"
                        component={SplashScreen}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <RootStack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <RootStack.Screen
                        name="Register"
                        component={RegisterScreen}
                        options={{
                            headerShown: false,
                        }}
                    />
                </RootStack.Navigator>
            </BottomSheetModalProvider>
        </NavigationContainer>
    )
}

export default RootNavigator