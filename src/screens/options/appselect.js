import React from 'react';

import { View, Text, ScrollView, TouachbleOpacity, Image, StyleSheet, Dimensions, Touchable } from 'react-native';

//Colors
import { Colors } from '../../colors/colors';

//styles
import styled from 'styled-components';

//Neomorph
import { Neomorph, NeomorphBlur } from 'react-native-neomorph-shadows';

//Navigation
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import { OCard } from "../optioncards/ocard"
import { TouchableOpacity } from 'react-native-gesture-handler';

const sheight = Dimensions.get('window').height;

const swidth = Dimensions.get('window').width;

const AppImage = styled(Image)`
    height : ${sheight * 0.25}px;
    width : ${swidth * 0.5}px;
    align-self : center;
    marginTop : 15px;
`;

const AppText = styled(Text)`
    font-size : 22px;
    color : ${Colors.offwhite};
    font-family : Arizonia-Regular;
    font-weight : 700;
    text-align : center;
    marginTop : 15px;
`;

const JobText = styled(Text)`
    font-size : 18px;
    color : ${Colors.offwhite};
    font-family : Arizonia-Regular;
    text-align : center;
    font-weight : 700;
    margin-top : ${sheight * 0.01}px;
`;

export const AppSelect = () => {

    const navigation = useNavigation();
    const route = useRoute();

    if(route.params.screen){
        console.log("Screen");
    }

    const app = route.params.app;

    const move = () => {

        navigation.navigate('ImageUpload');

    }

    return (
        <View style={styles.screen}>
        
            <ScrollView style={styles.screen}>

                <Neomorph
                    style={{
                        shadowRadius: 3,
                        backgroundColor: Colors.offblack,
                        width: swidth,
                        height: sheight * 0.35,
                        borderRadius : 350,
                        alignItems : 'center',
                        marginTop : 35
                    }}
                    >
                    <Neomorph
                        inner
                        style={{
                        shadowRadius: 7,
                        borderRadius: 330,
                        backgroundColor: Colors.offblack,
                        width: swidth * 0.98,
                        height: sheight * 0.33,
                        alignItems : 'center',
                        }}
                    >
                        <Neomorph
                        inner
                        style={{
                            shadowRadius: 9,
                            borderRadius: 300,
                            backgroundColor: Colors.luxblack,
                            width: swidth * 0.9,
                            height: sheight * 0.3,
                        }}
                        >

                            <AppImage source={app.image} resizeMode='contain'/>

                        </Neomorph>

                    </Neomorph>
                
                </Neomorph>

                <AppText>{app.title}</AppText>

                <Neomorph
                    style={{
                        shadowRadius: 3,
                        backgroundColor: Colors.offblack,
                        width: swidth,
                        height: sheight * 0.6,
                        borderRadius : 350,
                        alignItems : 'center',
                        marginTop : sheight * 0.05
                    }}
                    >
                    <Neomorph
                        inner
                        style={{
                        shadowRadius: 7,
                        borderRadius: 330,
                        backgroundColor: Colors.offblack,
                        width: swidth * 0.98,
                        height: sheight * 0.78,
                        alignItems : 'center',
                        }}
                    >
                        <Neomorph
                            inner
                            style={{
                                shadowRadius: 9,
                                borderRadius: 300,
                                backgroundColor: Colors.luxblack,
                                width: swidth * 0.9,
                                height: sheight * 0.75,
                                bottom : -sheight * 0.02,
                                position : 'absolute',
                                alignItems : 'center'
                            }}
                        >

                            <View style={{marginTop : sheight * 0.05, alignItems : 'center', justifyContent : 'center'}}>

                                <View style={styles.row}>

                                    <TouchableOpacity style={styles.space} onPress={move}>
                                        <OCard name="Repair"/>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.space} onPress={move}>
                                        <OCard name="Servicing"/>
                                    </TouchableOpacity>

                                </View>

                                <View style={styles.row}>

                                    <TouchableOpacity style={styles.space} onPress={move}> 
                                        <OCard name="Installation"/>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.space} onPress={move}>
                                        <OCard name="Uninstallation"/>
                                    </TouchableOpacity>

                                </View>

                            </View>
                                                        
                        </Neomorph>

                    </Neomorph>

                </Neomorph>
        
            </ScrollView>
        
        </View>
    );

}

const styles = StyleSheet.create({

    screen : {
        flex : 1,
        backgroundColor : Colors.luxblack
    },

    row : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        marginTop : 35,
    },

    space : {
        marginHorizontal : 5
    }

});