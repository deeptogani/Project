import React from "react";

//Colors
import { Colors } from "../../colors/colors";

import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';

//Neomorph
import { Neomorph, NeomorphBlur } from "react-native-neomorph-shadows";

//Styles
import styled from "styled-components";

const CardText = styled(Text)`
    font-size : 14px;
    font-family : OpenSans;
    font-weight : 700;
    color : ${Colors.offwhite};
    text-align : center;
`;

const swidth = Dimensions.get('window').width;
const sheight = Dimensions.get('window').height;

export const OCard = (props) => {

    return (

      <View style={styles.card}>

                        <Neomorph
                            style={{
                                shadowRadius: 3,
                                borderRadius: 35,
                                backgroundColor: Colors.luxblack,
                                width: swidth * 0.3,
                                height: sheight * 0.15,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            >
                            <Neomorph
                                inner
                                style={{
                                shadowRadius: 7,
                                borderRadius: 38,
                                backgroundColor: Colors.offblack,
                                width: swidth * 0.29,
                                height: sheight * 0.14,
                                justifyContent: 'center',
                                alignItems: 'center',
                                }}
                            >
                                <Neomorph
                                inner
                                style={{
                                    shadowRadius: 9,
                                    borderRadius: 35,
                                    backgroundColor: Colors.luxblack,
                                    width: swidth * 0.28,
                                    height: sheight * 0.13,
                                    justifyContent : 'center',
                                    alignItems : 'center'
                                }}
                                >

                                    <CardText>{props.name}</CardText>

                                </Neomorph>
                            </Neomorph>
                        </Neomorph>


                    </View>

    );

}

const styles = StyleSheet.create({

    card : {
      marginTop : 5,
      justifyContent : 'space-evenly'
    },

});