import React from "react";

//Colors
import { Colors } from "../../colors/colors";

import { View, Image, StyleSheet, Text } from 'react-native';

import LinearGradient from "react-native-linear-gradient";

//Neomorph
import { Neomorph, NeomorphBlur } from "react-native-neomorph-shadows";

//Styles
import styled from "styled-components";

const CardImage = styled(Image)`
    height : 80px;
    width : 80px;
    align-self : center;
    justify-content : center;
`;

const CardText = styled(Text)`
    font-size : 14px;
    font-family : OpenSans;
    font-weight : 700;
    color : ${Colors.offwhite};
    text-align : center;
    marginTop : 10px;
`;

export const CCard = (props) => {

    return (

      <View style={styles.card}>

                        <Neomorph
                            style={{
                                shadowRadius: 3,
                                borderRadius: 70,
                                backgroundColor: Colors.luxblack,
                                width: 150,
                                height: 150,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            >
                            <Neomorph
                                inner
                                style={{
                                shadowRadius: 7,
                                borderRadius: 70,
                                backgroundColor: Colors.offblack,
                                width: 140,
                                height: 140,
                                justifyContent: 'center',
                                alignItems: 'center',
                                }}
                            >
                                <Neomorph
                                inner
                                style={{
                                    shadowRadius: 9,
                                    borderRadius: 70,
                                    backgroundColor: Colors.luxblack,
                                    width: 130,
                                    height: 130,
                                    justifyContent : 'center'
                                }}
                                >

                                    <CardImage source={props.app} resizeMode="contain"/>

                                </Neomorph>
                            </Neomorph>
                        </Neomorph>

                        <CardText>{props.name}</CardText>
                    </View>

    );

}

const styles = StyleSheet.create({

    card : {
      height : 200,
      marginTop : 5, 
      marginLeft : 25,
    },

});