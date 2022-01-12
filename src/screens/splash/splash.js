import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet } from 'react-native';

//Styles
import styled from "styled-components";

import LinearGradient from 'react-native-linear-gradient';

//Colors
import { Colors } from "../../colors/colors";

//Navigation
import { useNavigation } from "@react-navigation/native";

const LoadingText = styled(Text)`
    color : ${Colors.golden};
    font-size : 50px;
    align-self : center;
    text-align : center;
    margin-top : 40%;
`;

export const Splash = () => {

    const navigation = useNavigation();

    useEffect(() => {

        setTimeout(() => {
            navigation.navigate('Login');
        }, 3000);

    }, []);

    

    return(
        <View>
            <LinearGradient colors={[Colors.offblack, Colors.black]} style={styles.linear}>
                <LoadingText>Loading...</LoadingText>
            </LinearGradient>
        </View>
    );

}

const styles = StyleSheet.create({

    linear : {
        height : '100%',
        width : '100%',
    },

});