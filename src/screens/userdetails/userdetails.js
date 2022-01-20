import React, { useState, useEffect } from "react";

import { View, ScrollView, Text, TouchableOpacity, StyleSheet, TextInput, Image } from "react-native";

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

import { Neomorph } from 'react-native-neomorph-shadows';

import { NeuBorderView, NeuSwitch } from 'react-native-neu-element';

const CardImage = styled(Image)`
    height : 175px;
    width : 175px;
    align-self : center;
    justify-content : center;
`;

export const UserDetails = () => {

    const [isPressed, setIsPressed] = useState(false);
    
    const navigation = useNavigation();

    return (

        <View>

            <LinearGradient 
                colors={[Colors.black , Colors.offblack, Colors.black, Colors.offblack]} 
                start={{x : 0.0, y : 0.0}}
                end={{x :1, y : 0.9}}
                style={styles.screen}
            >

                <Neomorph
                    darkShadowColor={Colors.golden} // <- set this
                    lightShadowColor={Colors.golden} // <- this
                    style={{
                        shadowRadius: 15,
                        shadowOffset: {width: 10, height: 12},
                        shadowColor : Colors.golden,
                        borderRadius: 35,
                        backgroundColor: Colors.golden,
                        width: 200,
                        height: 200,
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin : 100,
                        opacity : 0.8
                    }}
                >
                    <LinearGradient 
                        colors={[Colors.offblack, Colors.golden]} 
                        start={{x : 0.0, y : 0.0}}
                        end={{x :1, y : 0.9}}
                        style={styles.card}
                    >

                        <LinearGradient
                            colors={[Colors.offblack, Colors.black]}
                            start={{x : 0.0, y : 0.0}}
                            end={{x : 1, y : 0.9}}
                            style={styles.inner}
                        >


                        </LinearGradient>
                    </LinearGradient>

                        
                </Neomorph>

            </LinearGradient>

        </View>

    );
}

const styles = StyleSheet.create({

    screen : {
        height : '100%',
        width : '100%',
    },

    card : {
        borderRadius : 35,
        height : '100%',
        width : '100%',
        justifyContent : 'center'  
    },

    inner : {
        height : '98%',
        width : '98%',
        borderRadius : 35,
        alignSelf : 'center',
    },

});