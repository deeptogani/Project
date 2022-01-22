import React, { useState, useEffect } from 'react';

import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, Dimensions } from "react-native";

//Colors
import { Colors } from '../../colors/colors';

//styles
import styled from 'styled-components';

//Neo Elements
import { Neomorph, NeomorphBlur } from 'react-native-neomorph-shadows';

//Data
import { data } from "../../data/applianceData";

//Circle List
import { CircleList } from "../../circleList/CircleList";

const mwidth = Dimensions.get('window').width;
const mheight = Dimensions.get('window').height;

const AppImage = styled(Image)`
    height : ${mheight * 0.1}px;
    width : ${mheight * 0.2}px;
    align-self : center;
`;

const AppText = styled(Text)`
    font-size : 12px;
    color : ${Colors.offwhite};
    font-family : Arizonia-Regular;
    font-weight : 700;
    text-align : center;
    marginTop : 15px;
`;

const SelectText = styled(Text)`
    font-size : 25px;
    color : ${Colors.offwhite};
    font-family : Arizonia-Regular;
    font-weight : 700;
    text-align : center;
`;

const SImage = styled(Image)`
    height : ${mheight * 0.25}px;
    width : ${mwidth * 0.8}px;
    align-self : center;
`;

const SText =  styled(Text)`
    font-size : 32px;
    font-family : Arizonia-Regular;
    font-weight : 700;
    color : ${Colors.offwhite};
    text-align : center;
    marginTop : 25px;
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

    useEffect(() => {
        app === null ? setIsNull(true) : setIsNull(false);
    }, [app]);
    

    const renderItem = ({ item }) => (

        <TouchableOpacity onPress={() => setApp(item)}>

            <AppImage source={item.image} resizeMode='contain'/>

            <AppText>{item.title}</AppText>
        
        </TouchableOpacity>
    )

    return (

        <View style={styles.screen} color={Colors.offblack}>

            <ScrollView style={styles.screen}>

                <View style={styles.view}>

                    <SelectText>Choose The Appliance</SelectText>

                    <Neomorph
                        style={{
                            shadowRadius: 10,
                            backgroundColor: Colors.luxblack,
                            width: mwidth * 0.99,
                            height: mheight * 0.4,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop : 10,
                            borderTopLeftRadius : 350,
                        }}
                    >
                        <Neomorph
                            inner
                            style={{
                            shadowRadius: 25,
                            backgroundColor: Colors.luxblack,
                            width: mwidth * 0.94,
                            height: mheight * 0.39,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderTopLeftRadius : 350,
                            }}
                        >
                            

                                <CircleList
                                    data={data}
                                    keyExtractor={item => item.id}
                                    renderItem={renderItem}
                                    style={{borderTopLeftRadius : 350}}
                                />


                        </Neomorph>
                    </Neomorph>
{!isNull ?  (
                    <View style={{marginTop : '5%', alignSelf : "center", justifyContent : 'center', alignItems : 'center', height : 500}}>

                        <NeomorphBlur
                                style={{
                                    shadowRadius: 25,
                                    shadowOffset : {height : 0, width : -1},
                                    borderRadius: 45,
                                    backgroundColor: Colors.luxblack,
                                    width: mheight * 0.9,
                                    height: mwidth * 0.35,
                                }}
                            >

                            <SImage
                                source={app.image}
                                resizeMode='contain'
                            />

                            <SText>{app.title}</SText>

                        </NeomorphBlur>

                        <TouchableOpacity onPress={() => console.log("pressed")}>

                        <Neomorph
                            lightShadowColor={Colors.sweetred}
                            darkShadowColor={Colors.sweetred}
                          style={{
                              shadowRadius: 35,
                              shadowOffset : {height : 0, width : -3},
                              borderRadius: 70,
                              backgroundColor: Colors.sweetred,
                              width: 250,
                              height: 60,
                              justifyContent: 'center',
                              alignItems: 'center',
                              marginTop : 200,

                          }}
                          >
                          <Neomorph
                              inner
                              style={{
                              shadowRadius: 7,
                              borderRadius: 70,
                              backgroundColor: Colors.sweetred,
                              width: 248,
                              height: 58,
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
                                  width: 245,
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
            ) : null
}

                </View>                  

            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({

    screen : {
        height : '100%',
        width : '100%',
        backgroundColor : Colors.luxblack,
    },

    view : {
        marginTop : '10%',
        alignSelf : 'center',
        height : '100%', 
        width : '100%'
    }

});