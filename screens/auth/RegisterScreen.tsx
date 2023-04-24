import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/reducer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigators/RootNavigator';
import Spacing from '../../constants/Spacing';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontSize from '../../constants/FontSize';
import Font from '../../constants/Font';
import AppTextInput from '../../components/AppTextInput';
import { Ionicons } from "@expo/vector-icons";


type Props = NativeStackScreenProps<RootStackParamList, "Register">;

const RegisterScreen = ({ navigation }: Props) => {

    const { colors } = useTheme();
    const theme = useSelector(selectTheme);

    function Header() {
        return (
            <View
                style={{
                    alignItems: "center",
                }}
            >
                <Text
                    style={{
                        fontSize: FontSize.xLarge,
                        color: colors.primary,
                        fontFamily: Font["poppins-bold"],
                        marginVertical: Spacing * 3,
                    }}
                >
                    Create account
                </Text>
                <Text
                    style={{
                        fontFamily: Font["poppins-regular"],
                        fontSize: FontSize.small,
                        color: colors.primary,
                        maxWidth: "80%",
                        textAlign: "center",
                    }}
                >
                    Create an account so you can explore all the existing jobs
                </Text>
            </View>
        )
    }
    return (
        <SafeAreaView>
            <View style={{ padding: Spacing * 2 }}>
                <Header />
                <Text>RegisterScreen</Text>

                <View
                    style={{
                        marginVertical: Spacing * 3,
                    }}
                >
                    <AppTextInput placeholder="Email" />
                    <AppTextInput placeholder="Password" />
                    <AppTextInput placeholder="Confirm Password" />
                </View>

                <TouchableOpacity
                    style={{
                        padding: Spacing * 2,
                        backgroundColor: colors.primary,
                        marginVertical: Spacing * 3,
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
                            textAlign: "center",
                            fontSize: FontSize.large,
                        }}
                    >
                        Sign up
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Login")}
                    style={{
                        padding: Spacing,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: Font["poppins-semiBold"],
                            color: colors.text,
                            textAlign: "center",
                            fontSize: FontSize.small,
                        }}
                    >
                        Already have an account
                    </Text>
                </TouchableOpacity>

                <View
                    style={{
                        marginVertical: Spacing * 3,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: Font["poppins-semiBold"],
                            color: colors.primary,
                            textAlign: "center",
                            fontSize: FontSize.small,
                        }}
                    >
                        Or continue with
                    </Text>

                    <View
                        style={{
                            marginTop: Spacing,
                            flexDirection: "row",
                            justifyContent: "center",
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                padding: Spacing,
                                backgroundColor: colors.card,
                                borderRadius: Spacing / 2,
                                marginHorizontal: Spacing,
                            }}
                        >
                            <Ionicons
                                name="logo-google"
                                color={colors.text}
                                size={Spacing * 2}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                padding: Spacing,
                                backgroundColor: colors.card,
                                borderRadius: Spacing / 2,
                                marginHorizontal: Spacing,
                            }}
                        >
                            <Ionicons
                                name="logo-apple"
                                color={colors.text}
                                size={Spacing * 2}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                padding: Spacing,
                                backgroundColor: colors.card,
                                borderRadius: Spacing / 2,
                                marginHorizontal: Spacing,
                            }}
                        >
                            <Ionicons
                                name="logo-facebook"
                                color={colors.text}
                                size={Spacing * 2}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default RegisterScreen