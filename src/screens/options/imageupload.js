import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Animated } from 'react-native';

import styled from 'styled-components';

//Colors
import { Colors } from '../../colors/colors';

import { Neomorph } from 'react-native-neomorph-shadows';

const UploadText = styled(Text)`
    font-family : Arizonia-Regular;
    font-weight : 700;
    color : ${Colors.offwhite};
    text-align : center;
    font-size : 20px;
`;

export const ImageUpload = () => {

    return (

        <View style={styles.screen}>

            <ScrollView style={styles.screen}> 

                <UploadText>Would you like to upload an Image of the appliance ?</UploadText>



            </ScrollView>

        </View>

    );

}

const styles = StyleSheet.create({

    screen : {
        height : '100%',
        width : '100%',
        backgroundColor : Colors.luxblack
    }

});