import React from 'react';

import { View, TouchableOpacity, ScrollView, Image, Text, StyleSheet } from 'react-native';

import styled from 'styled-components';

//Colors
import { Colors } from '../../colors/colors';

export const CategoryDisplay = () => {

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
        backgroundColor : Colors.luxblack,
    },

});