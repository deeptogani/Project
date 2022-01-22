import React from 'react';

import { View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

//Linear Gradient
import LinearGradient from 'react-native-linear-gradient';

import styled from "styled-components"

//Colors
import { Colors } from "../../colors/colors";

export const AppDisplay = () => {
    
    return (

        <View style={styles.screen}>
            <ScrollView style={styles.screen}>



            </ScrollView>
        </View>

    );

}

const styles = StyleSheet.create({

    screen : {
        height : '100%',
        width : "100%",
        backgroundColor : Colors.luxblack
    }, 

});