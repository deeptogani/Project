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
    height : ${mheight * 0.4}px;
    width : ${mwidth * 0.75}px;
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
    marginTop : 15px;
`;

const BookText = styled(Text)`
    font-size : 18px;
    font-family : Arizonia-Regular;
    font-weight : 700;
    color : ${Colors.offwhite};
    text-align : center;
`;

export const ListDisplay = () => {

    const [app, setApp] = useState(null);
    const [isNull, setIsNull] = useState(true);

    const navigation = useNavigation();

    useEffect(() => {
        app === null ? setIsNull(true) : setIsNull(false);
    }, [app]);

    const renderItem = ({ item }) => (

        <TouchableOpacity onPress={() => setApp(item)}>
    
            <AppImage source={item.image} resizeMode='contain'/>
    
            <AppText>{item.title}</AppText>
        
        </TouchableOpacity>
    );

    return (

        <View style={styles.screen}>

            <Neomorph
                    style={{
                        shadowRadius: 3,
                        backgroundColor: Colors.offblack,
                        width: tabwidth,
                        height: tabheight,
                        borderRadius : 350,
                        bottom : -50,
                        position : 'absolute',
                        alignItems : 'center',
                    }}
                    >
                    <Neomorph
                        inner
                        style={{
                        shadowRadius: 7,
                        borderRadius: 330,
                        backgroundColor: Colors.offblack,
                        width: tabwidth * 0.95,
                        height: tabheight * 0.98,
                        alignItems : 'center',
                        }}
                    >
                        <Neomorph
                        inner
                        style={{
                            shadowRadius: 9,
                            borderRadius: 300,
                            backgroundColor: Colors.luxblack,
                            width: tabwidth * 0.9,
                            height: tabheight * 0.96,
                        }}
                        >

                            <ChooseText>Choose</ChooseText>

                            <CircleList
                                data={data}
                                keyExtractor={item => item.id}
                                renderItem={renderItem}
                            />

                        </Neomorph>

                    </Neomorph>
                </Neomorph>



            {!isNull ?  (
                <View style={{paddingTop : '5%'}}>

                    <ChooseText>Selected Appliance/Services</ChooseText>

                    <View style={{marginTop : '5%', alignSelf : "center", alignItems : 'center', height : mheight * 0.8, width : mwidth * 0.5}}>

                            <SImage source={app.image} resizeMode="contain"/>

                            <SText>{app.title}</SText>

                        <TouchableOpacity onPress={() => navigation.navigate('AppSelect', {app : app})}>

                        <Neomorph
                            lightShadowColor={Colors.sweetred}
                            darkShadowColor={Colors.sweetred}
                          style={{
                              shadowRadius: 35,
                              shadowOffset : {height : 0, width : -3},
                              borderRadius: 70,
                              backgroundColor: Colors.sweetred,
                              width: 150,
                              height: 55,
                              justifyContent: 'center',
                              alignItems: 'center',
                              marginTop : 25

                          }}
                          >
                          <Neomorph
                              inner
                              style={{
                              shadowRadius: 7,
                              borderRadius: 70,
                              backgroundColor: Colors.sweetred,
                              width: 148,
                              height: 53,
                              justifyContent: 'center',
                              alignItems: 'center',
                              }}
                          >
                              <Neomorph
                              inner
                              style={{
                                  shadowRadius: 9,
                                  borderRadius: 70,
                                  backgroundColor: Colors.sweetred,
                                  width: 145,
                                  height: 55,
                                  justifyContent : 'center'
                              }}
                              >

                                  <BookText>Proceed</BookText>

                              </Neomorph>
                          </Neomorph>
                      </Neomorph>

                      </TouchableOpacity>

                    </View>

                    </View>
            ) : null
            }

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
        width : tabwidth,
        position : 'absolute',
        bottom : 0,
        borderTopLeftRadius : 150,
        borderTopRightRadius : 150,
        backgroundColor : Colors.offblack,
        alignSelf : 'center'
    }

});