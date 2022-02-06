import React, { useState, useEffect } from "react";

import { View, ScrollView, Text, TouchableOpacity, StyleSheet, TextInput, Image, Dimensions } from "react-native";

//Styles
import styled from "styled-components";

import { Colors } from "../../colors/colors";

//Linear Gradiemt
import LinearGradient from "react-native-linear-gradient";

//Navigation 
import { useNavigation } from "@react-navigation/native";

import { Neomorph, NeomorphBlur } from 'react-native-neomorph-shadows';

import { NeuBorderView, NeuSwitch } from 'react-native-neu-element';

//Data
import { data } from "../../data/applianceData";

//Circle List
import { CircleList } from "../../circleList/CircleList";

const mwidth = Dimensions.get('window').width;

const mheight = Dimensions.get('window').height;

let tabheight = mheight * 0.3;
let tabwidth = mwidth;

const ChooseText = styled(Text)`
    font-size : 20px;
    color : ${Colors.offwhite};
    font-family : Arizonia-Regular;
    font-weight : 700;
    text-align : center;
    marginTop : 5px;
`;

const AppImage = styled(Image)`
    height : ${mheight * 0.1}px;
    width : ${mheight * 0.2}px;
    align-self : center;
    marginTop : 15px;
`;

const AppText = styled(Text)`
    font-size : 12px;
    color : ${Colors.offwhite};
    font-family : Arizonia-Regular;
    font-weight : 700;
    text-align : center;
    marginTop : 15px;
`;

const SImage = styled(Image)`
    height : ${mheight * 0.3}px;
    width : ${mwidth * 0.4}px;
    align-self : center;
    justify-content : center;
    align-items : center;
`;

const SText =  styled(Text)`
    font-size : 20px;
    font-family : Arizonia-Regular;
    font-weight : 700;
    color : ${Colors.offwhite};
    text-align : center;
    marginTop : 0px;
`;

const BookText = styled(Text)`
    font-size : 18px;
    font-family : Arizonia-Regular;
    font-weight : 700;
    color : ${Colors.offwhite};
    text-align : center;
`;

export const UserDetails = () => {


    return (

        <View style={styles.screen}>

        </View>

    );
}

const styles = StyleSheet.create({

    screen : {
        height : "100%",
        width : "100%",
        backgroundColor : Colors.luxblack
    },

});