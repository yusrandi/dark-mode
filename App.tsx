
import { Text, TouchableOpacity, View, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { DarkTheme, DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import { configureStore } from '@reduxjs/toolkit'
import { store } from './redux/store';
import { selectTheme, setTheme } from './redux/reducer';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootNavigator from './navigators/RootNavigator';

// Enclose all of the other components with Provider providing the store
export default function App() {

	return (
		<Provider store={store}>
			<SafeAreaProvider style={{ flex: 1 }} >
				<GestureHandlerRootView style={{ flex: 1 }}>
					<RootNavigator />
				</GestureHandlerRootView>
			</SafeAreaProvider>
		</Provider>
	);
}
