import { View, Text } from 'react-native'
import React from 'react'
import { BottomTabScreenProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams, CompositeScreenProps } from "@react-navigation/native";
import { RootStackScreenProps } from './RootNavigator';
import HomeScreen from '../screens/HomeScreen';
import { AntDesign } from "@expo/vector-icons";
import DetailScreen from '../screens/DetailScreen';
import CustomBottomTabs from '../components/CustomBottomTabs';



export type TabsStackParamList = {
    Home: undefined;
    Cart: undefined;
    Payment: undefined;
    Person: undefined;
};


const TabsStack = createBottomTabNavigator<TabsStackParamList>();
export type TabsStackScreenProps<T extends keyof TabsStackParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<TabsStackParamList, T>,
        RootStackScreenProps<"TabsStack">
    >;

const TabsNavigator = () => {
    return (
        <TabsStack.Navigator screenOptions={{ tabBarShowLabel: false }}
            tabBar={(props) => <CustomBottomTabs {...props} />}
        >
            <TabsStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, tabBarIcon(props) { return <AntDesign name="home" {...props} /> }, }} />
            <TabsStack.Screen name="Cart" component={DetailScreen} options={{ headerShown: false, tabBarIcon(props) { return <AntDesign name="shoppingcart" {...props} /> }, }} />
            <TabsStack.Screen name="Payment" component={DetailScreen} options={{ headerShown: false, tabBarIcon(props) { return <AntDesign name="shoppingcart" {...props} /> }, }} />
            <TabsStack.Screen name="Person" component={DetailScreen} options={{ headerShown: false, tabBarIcon(props) { return <AntDesign name="shoppingcart" {...props} /> }, }} />
        </TabsStack.Navigator>
    )
}

export default TabsNavigator