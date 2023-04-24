import { View, Text, Dimensions, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import Font from '../constants/Font';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useSelector } from 'react-redux';
import { selectTheme } from '../redux/reducer';
import Spacing from '../constants/Spacing';
import FontSize from '../constants/FontSize';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigators/RootNavigator';
import { TabsStackScreenProps } from '../navigators/TabsNavigator';

const { height } = Dimensions.get("window");
type Props = NativeStackScreenProps<RootStackParamList, "Splash">;


const SplashScreen = ({ navigation }: Props) => {
    const { colors } = useTheme();
    const theme = useSelector(selectTheme);

    return (
        <SafeAreaView>
            <View style={{ position: 'absolute', flex: 1, height: height }}>
                <StatusBar style={theme.dark ? 'light' : 'dark'} />
                <View style={{ flex: 1, marginVertical: Spacing * 2 }}>
                    <ImageBackground
                        style={{
                            height: height / 2.5,
                        }}
                        resizeMode="contain"
                        source={require("../assets/welcome-img.png")}
                    />
                    <View
                        style={{
                            paddingHorizontal: Spacing * 4,
                            paddingTop: Spacing * 4,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: FontSize.xxLarge,
                                color: colors.primary,
                                fontFamily: Font["poppins-bold"],
                                textAlign: "center",
                            }}
                        >
                            Discover Your Dream Job here
                        </Text>

                        <Text
                            style={{
                                fontSize: FontSize.small,
                                color: colors.text,
                                fontFamily: Font["poppins-regular"],
                                textAlign: "center",
                                marginTop: Spacing * 2,
                            }}
                        >
                            Explore all the existing job roles based or your interest and study
                            major
                        </Text>
                    </View>
                </View>

                <SafeAreaView>
                    <View
                        style={{
                            paddingVertical: Spacing * 2,
                            paddingHorizontal: Spacing * 2,
                            paddingTop: Spacing * 6,
                            flexDirection: "row",
                            gap: 12
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Login")}
                            style={{
                                backgroundColor: colors.primary,
                                paddingVertical: Spacing * 1.5,
                                paddingHorizontal: Spacing * 2,
                                width: "48%",
                                borderRadius: Spacing,
                                shadowColor: colors.primary,
                                shadowOffset: {
                                    width: 0,
                                    height: Spacing,
                                },
                                shadowOpacity: 0.3,
                                shadowRadius: Spacing,
                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: Font["poppins-bold"],
                                    color: colors.card,
                                    fontSize: FontSize.large,
                                    textAlign: "center",
                                }}
                            >
                                Login
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Register")}
                            style={{
                                paddingVertical: Spacing * 1.5,
                                paddingHorizontal: Spacing * 2,
                                width: "48%",
                                borderRadius: Spacing,
                                borderColor: colors.border,
                                borderWidth: 1

                            }}
                        >
                            <Text
                                style={{
                                    fontFamily: Font["poppins-bold"],
                                    color: colors.text,
                                    fontSize: FontSize.large,
                                    textAlign: "center",
                                }}
                            >
                                Register
                            </Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </View>
        </SafeAreaView>
    )
}

export default SplashScreen