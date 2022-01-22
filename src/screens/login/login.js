import React, { useState, useEffect } from "react";

import { View, ScrollView, Text, TouchableOpacity, StyleSheet, TextInput, Linking } from "react-native";

import LinearGradient from 'react-native-linear-gradient';

//Styles
import styled from "styled-components";

//Safe Area 
import { SafeArea } from "../safearea/safearea"; 

//Cards
import { Card } from "react-native-paper";

import { Colors } from "../../colors/colors";

//Navigation 
import { useNavigation } from "@react-navigation/native";

//Neomorph
import { Neomorph } from 'react-native-neomorph-shadows';

const WelcomeText = styled(Text)`
    font-size : 60px;
    margin-top : 2%;
    margin-left : 2%;
    color : ${Colors.offwhite};
    font-family : Arizonia-Regular;
`;

const LogInText = styled(Text)`
    font-size : 35px;
    margin-top : 5%;
    text-align : center;
    color : ${Colors.offwhite};
    font-family : Average-Regular;
`;

const LogCard = styled(Card)`
    height : 670px;
    width : 99%;
    margin-top : 5px;
    border-top-left-radius : 30px;
    border-top-right-radius : 30px;
    elevation : 18;
    align-self : center;
`;

const NumberText = styled(Text)`
    font-size : 40px;
    margin-top : 15px;
    margin-left : 5%;
    color : ${Colors.offwhite};
    font-family : Average-Regular;
`;

const NumberText2 = styled(Text)`
    font-size : 40px;
    margin-top : 5px;
    margin-left : 5%;
    color : ${Colors.offwhite};
    font-family : Average-Regular;
`;

const SubText = styled(Text)`
    font-size : 18px;
    margin-top : 15px;
    margin-left : 5%;
    color : ${Colors.offwhite};
    font-family : Average-Regular;
    opacity : 0.75;
`;

const PhoneInputCard = styled(Card)`
    height : 50px;
    width : 98.5%;
    align-self : center;
    margin-top : 2px;
    elevation : 8;
`;

const NineOneText = styled(Text)`
    font-size : 25px;
    color : ${Colors.offwhite};
    font-family : Average-Regular;
    margin-left : 5%;
    margin-top : 11px;
    opacity : 0.75;
`;

const PhoneInput = styled(TextInput)`
    margin-left : 5%;
    color : ${Colors.offwhite};
    font-size : 23px;
    font-family : Average-Regular;
    letter-spacing : 8px;
    background-color : transparent;
`; 

const VerifyButton = styled(TouchableOpacity)`
    height : 50px;
    width : 200px;
    border-radius : 15px;
    margin-top : 50px;
    align-self : center;
    background-color : ${Colors.luxblack};
`;

const VerifyButtonText = styled(Text)`
    font-family : Arizonia-Regular;
    font-size : 33px;
    color : ${Colors.black};
    text-align :  center;
    align-self : center;
`;

const VerificationCodeText = styled(Text)`
    font-size : 18px;
    margin-top : 18px;
    text-align : center;
    color : ${Colors.golden};
    font-family : Average-Regular;
`;

const CodeView = styled(LinearGradient)`
    height : 60px;
    width : 55px;
    border-radius : 8px;
    align-self : center;
    margin : 5px;
    margin-top : 25px;
    justify-content : center;
    align-items : center;
    opacity : 0.8;
`;

const Code = styled(TextInput)`
    height : 58px;
    width : 50px;
    border-radius : 8px;
    align-self : center;
    margin-top : 15px;
    background-color : ${Colors.offblack};
    color : ${Colors.offwhite};
    text-align : center;
    justify-content : center;
    font-size : 30px;
    font-family : Average-Regular;
`;

const FirstLineText = styled(Text)`
    font-size : 18px;
    margin-top : 18px;
    text-align : center;
    color : ${Colors.offgolden};
    font-family : Average-Regular;
`;

const SecondLineText = styled(Text)`
    font-size : 18px;
    margin-top : 18px;
    text-align : center;
    color : ${Colors.golden};
    font-family : Average-Regular;
`;

export const Login = () => {

    const navigation = useNavigation();

    const openTC = () => {
        Linking.openURL('https://entrouse-services.web.app/terms-and-conditions.html');
    }

    const openPP = () => {
        Linking.openURL('https://entrouse-services.web.app/privacy-policy.html');
    }

    const ConfirmClick = () => {
        navigation.navigate('UserDetails');
    }

    const VerifyClick = () => {
        navigation.navigate('Tab');
    }

    return (

        <View style={styles.linear}>
            
            <LinearGradient colors={[Colors.black, Colors.offblack]} style={styles.linear}>

                <ScrollView style={styles.linear}>

                    <WelcomeText >Welcome,</WelcomeText>

                    <LogInText>Log In</LogInText>

                    <LinearGradient colors={[Colors.golden, Colors.darkgolden]} style={styles.maincard}>
                        <LogCard>

                            <LinearGradient style={styles.gradient} 
                                            colors={[Colors.black , Colors.offblack, Colors.black, Colors.offblack]} 
                                            start={{x : 0.0, y : 0.0}}
                                            end={{x :1, y : 0.9}}
                            >

                                <>
                                    <NumberText>Enter Your</NumberText>
                                    <NumberText2>Mobile Number</NumberText2>

                                    <SubText>We will send you confirmation code</SubText>


                                    <LinearGradient style={styles.inputborder} 
                                                colors={[Colors.golden, Colors.black, Colors.golden]} 
                                                start={{x : 0.0, y : 0.0}}
                                                end={{x :1, y : 1}}
                                                locations={[0.2, 0.6, 1]}
                                            >
                                        <PhoneInputCard>

                                            <LinearGradient style={styles.inner} 
                                                colors={[Colors.offblack, Colors.black]} 
                                                start={{x : 0.0, y : 0.0}}
                                                end={{x :1, y : 0.9}}
                                            >

                                                <NineOneText>+91</NineOneText>

                                                <PhoneInput
                                                    style={styles.phoneInput}
                                                    //autoFocus={isConfigValid}
                                                    autoCompleteType="tel"
                                                    keyboardType="number-pad"
                                                    textContentType="telephoneNumber"
                                                    placeholder="Mobile Number"
                                                    placeholderTextColor={Colors.offgolden}
                                                    //editable={!verificationId}
                                                    //onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                                                    maxLength = {10}
                                                />

                                            </LinearGradient>

                                        </PhoneInputCard>

                                        <VerifyButton onPress={() => VerifyClick()}>

                                            <LinearGradient style={styles.button} 
                                                colors={[Colors.golden, Colors.darkgolden]} 
                                                start={{x : 0.4, y : 0}}
                                                end={{x : 0.4, y : 1}}
                                                locations={[0, 0.9]}
                                            >

                                                <VerifyButtonText>Verify</VerifyButtonText>

                                            </LinearGradient>

                                        </VerifyButton>

                                        <>

                                            <VerificationCodeText>Verification Code</VerificationCodeText>

                                                <View style={styles.row}>
                                                    <CodeView
                                                        colors={[Colors.golden, Colors.darkgolden]} 
                                                        start={{x : 0.4, y : 0}}
                                                        end={{x : 0.4, y : 1}}
                                                    >
                                                        <Code
                                                            keyboardType="number-pad"
                                                            textContentType="telephoneNumber"
                                                            maxLength={1}
                                                        />
                                                    </CodeView>
                                                    <CodeView
                                                        colors={[Colors.golden, Colors.darkgolden]} 
                                                        start={{x : 0.4, y : 0}}
                                                        end={{x : 0.4, y : 1}}
                                                    >
                                                        <Code
                                                            keyboardType="number-pad"
                                                            textContentType="telephoneNumber"
                                                            maxLength={1}
                                                        />
                                                    </CodeView>
                                                    <CodeView
                                                        colors={[Colors.golden, Colors.darkgolden]} 
                                                        start={{x : 0.4, y : 0}}
                                                        end={{x : 0.4, y : 1}}
                                                    >
                                                        <Code
                                                            keyboardType="number-pad"
                                                            textContentType="telephoneNumber"
                                                            maxLength={1}
                                                        />
                                                    </CodeView>
                                                    <CodeView
                                                        colors={[Colors.golden, Colors.darkgolden]} 
                                                        start={{x : 0.4, y : 0}}
                                                        end={{x : 0.4, y : 1}}
                                                    >
                                                        <Code
                                                            keyboardType="number-pad"
                                                            textContentType="telephoneNumber"
                                                            maxLength={1}
                                                        />
                                                    </CodeView>
                                                    <CodeView
                                                        colors={[Colors.golden, Colors.darkgolden]} 
                                                        start={{x : 0.4, y : 0}}
                                                        end={{x : 0.4, y : 1}}
                                                    >
                                                        <Code
                                                            keyboardType="number-pad"
                                                            textContentType="telephoneNumber"
                                                            maxLength={1}
                                                        />
                                                    </CodeView>
                                                    <CodeView
                                                        colors={[Colors.golden, Colors.darkgolden]} 
                                                        start={{x : 0.4, y : 0}}
                                                        end={{x : 0.4, y : 1}}
                                                    >
                                                        <Code
                                                            keyboardType="number-pad"
                                                            textContentType="telephoneNumber"
                                                            maxLength={1}
                                                        />
                                                    </CodeView>
                                                </View>

                                            <VerifyButton onPress={() => ConfirmClick()}>

                                                <LinearGradient style={styles.button} 
                                                    colors={[Colors.golden, Colors.darkgolden]} 
                                                    start={{x : 0.4, y : 0}}
                                                    end={{x : 0.4, y : 1}}
                                                    locations={[0, 0.9]}
                                                >

                                                    <VerifyButtonText>Confirm</VerifyButtonText>

                                                </LinearGradient>

                                            </VerifyButton>

                                            <FirstLineText>By creating account, you agree to our</FirstLineText>

                                            <View style={styles.terms}>

                                                <SecondLineText onPress={() => openTC()}>Terms & Conditions</SecondLineText>
                                                <FirstLineText> and </FirstLineText>
                                                <SecondLineText onPress={() => openPP()}>Privacy Policy</SecondLineText>

                                            </View>

                                        </>
                                    </LinearGradient>
                                </>

                            </LinearGradient>

                        </LogCard>
                    </LinearGradient>

                </ScrollView>

            </LinearGradient>
            
        </View>
    );

}

const styles = StyleSheet.create({

    linear : {
        height : '100%',
        width : '100%'
    },

    gradient : {
        height : '100%',
        width : '100%',
        borderTopLeftRadius : 30,
        borderTopRightRadius : 30,
    },

    inputgradient : {
        height : '100%',
        width : '100%',
    },

    inputborder : {
        height : 54,
        width : '96%',
        alignSelf : 'center',
        marginTop : 25,
    },

    inner : {
        height : '100%',
        width : '100%',
        flexDirection : 'row',
    },

    phoneInput : {
        width : '100%',
        height : '100%',
    },

    button : {
        height : '100%',
        width : '100%',
        borderRadius : 8,
        justifyContent : 'center',
    },

    row : {
        flexDirection : 'row',
        height : '100%',
        width : '100%',
        marginTop : 30,
    },

    terms : {
        flexDirection : 'row',
        height : '100%',
        width : '100%',
        alignSelf : 'center',
        justifyContent : 'center'
    },

    maincard : {
        height : '100%',
        width : '100%',
        borderTopLeftRadius : 30,
        borderTopRightRadius : 30,
    },

});