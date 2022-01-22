import React, { useState, useEffect } from "react";

import { View, ScrollView, Text, TouchableOpacity, StyleSheet, TextInput, Image, Dimensions } from "react-native";

//Styles
import styled from "styled-components";

import { Colors } from "../../colors/colors";

//Navigation 
import { useNavigation } from "@react-navigation/native";

import { Neomorph, NeomorphBlur } from 'react-native-neomorph-shadows';

import { NeuBorderView, NeuSwitch } from 'react-native-neu-element';

const mwidth = Dimensions.get('window').width;

const mheight = Dimensions.get('window').height;

let tabheight = mheight * 0.25;
let tabwidth = mwidth * 0.9;

export const UserDetails = () => {

    return (

        <View style={styles.screen}>

                <View style={styles.tab}>

                <Neomorph
                            style={{
                                shadowRadius: 3,
                                backgroundColor: Colors.luxblack,
                                width: tabwidth,
                                height: tabheight,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            >
                            <Neomorph
                                inner
                                style={{
                                shadowRadius: 7,
                                borderRadius: 90,
                                backgroundColor: Colors.luxblack,
                                width: tabwidth,
                                height: tabheight,
                                justifyContent: 'center',
                                alignItems: 'center',
                                }}
                            >
                                <Neomorph
                                style={{
                                    shadowRadius: 7,
                                    borderRadius: 35,
                                    backgroundColor: Colors.luxblack,
                                    width: tabwidth,
                                    height: tabheight,
                                    justifyContent : 'center'
                                }}
                                >

                                </Neomorph>
                            </Neomorph>
                        </Neomorph>

                </View>

        </View>

    );
}

const styles = StyleSheet.create({

    screen : {
        height : "100%",
        width : "100%",
        backgroundColor : Colors.luxblack
    },

    tab : {
        height : tabheight, 
        width : '100%',
        borderTopLeftRadius : 150,
        borderTopRightRadius : 150,
        position : 'absolute',
        bottom : 0,
        alignSelf : 'center'
    }

});