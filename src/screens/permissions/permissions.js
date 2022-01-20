import React, { useState, useEffect } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image, PermissionsAndroid } from 'react-native';

//Styles
import styled from "styled-components";

//Colors
import { Colors } from "../../colors/colors";

//Linear Gradient
import LinearGradient from "react-native-linear-gradient";

//Navigation 
import { useNavigation } from "@react-navigation/native";

//Neo
import { Neomorph, NeomorphBlur } from 'react-native-neomorph-shadows';

const NeedPermissionsText = styled(Text)`
    font-family : Arizonia-Regular;
    font-weight : 700;
    font-size : 25px;
    color : ${Colors.offwhite};
    margin-top : 50px;
    text-align : center;
`;

const PermissionText = styled(Text)`
    font-family : Arizonia-Regular;
    font-weight : 700;
    font-size : 22px;
    color : ${Colors.offwhite};
    flex : 20;
    margin-left : 15px;
`;

const AskPermissionsButton = styled(TouchableOpacity)`
    height : 50px;
    width : 300px;
    border-radius : 15px;
    margin-top : 100px;
    align-self : center;
`;

const AskButtonText = styled(Text)`
    font-family : Arizonia-Regular;
    font-size : 30px;
    color : ${Colors.black};
    text-align :  center;
    align-self : center;
`;

const CardText = styled(Text)`
    font-size : 18px;
    font-family : Arizonia-Regular;
    font-weight : 700;
    color : ${Colors.offwhite};
    text-align : center;
`;

export const Permission = () => {

    const [isStorage, setIsStorage] = useState(false);
    const [isCamera, setIsCamera] = useState(false);
    const [isLocation, setIsLocation] = useState(false);

    const navigation = useNavigation();

    useEffect(() => {

        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE && PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE).then(response => { 
        setIsStorage(response);
        });

        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA).then(response => { 
        setIsCamera(response);
        });

        PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION && PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION).then(response => { 
        setIsLocation(response);
        });

    }, []);

    useEffect(() => {

        if(isStorage && isCamera && isLocation){
            navigation.navigate('Tab');
        }

    }, [isStorage, isCamera, isLocation]);

    return (

        <View style={styles.screen}>

            <LinearGradient
                colors={[Colors.luxblack ,Colors.luxblack,Colors.luxblack]}
                stops={[0.45,0.4,1]} style={styles.screen}
            >
                <ScrollView style={styles.screen}>
                    <View style={styles.maincard}>

                        <NeedPermissionsText>We need the following permissions</NeedPermissionsText>

                        {!isStorage &&
                        <View style={styles.percard}>
                            <Image 
                                source={require('../../../assets/images/permissions/storage.png')} 
                                style={styles.icon}
                                resizeMode='contain'
                            />
                            <PermissionText>We need to access your external storage to write data</PermissionText>
                        </View>
                        }

                        {!isCamera && 
                        <View style={styles.percard}>
                            <Image 
                                source={require('../../../assets/images/permissions/camera.png')} 
                                style={styles.icon}
                                resizeMode='contain'
                            />
                            <PermissionText>We need to access your Camera to capture images of Damaged Appliances</PermissionText>
                        </View>
                        }

                        {!isLocation && 
                        <View style={styles.percard}>
                            <Image 
                                source={require('../../../assets/images/permissions/marker.png')} 
                                style={styles.icon}
                                resizeMode='contain'
                            />
                            <PermissionText>We need to access your Location to locate you</PermissionText>
                        </View>
                        }

                    </View>

                    <TouchableOpacity style={{height : 80, width : '95%', marginTop : 30, alignSelf : 'center', alignItems : 'center'}}>

                        <Neomorph
                            style={{
                                shadowRadius: 3,
                                borderRadius: 35,
                                backgroundColor: Colors.luxblack,
                                width: 200,
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            >
                            <Neomorph
                                inner
                                style={{
                                shadowRadius: 7,
                                borderRadius: 90,
                                backgroundColor: Colors.luxblack,
                                width: 190,
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                }}
                            >
                                <Neomorph
                                style={{
                                    shadowRadius: 7,
                                    borderRadius: 35,
                                    backgroundColor: Colors.luxblack,
                                    width: 180,
                                    height: 50,
                                    justifyContent : 'center'
                                }}
                                >

                                    <CardText>Allow</CardText>

                                </Neomorph>
                            </Neomorph>
                        </Neomorph>

                    </TouchableOpacity>

                </ScrollView>

            </LinearGradient>

        </View>
        
    );
}

const styles = StyleSheet.create({
    screen : {
        height : '100%',
        width : '100%'
    },
    percard : {
        flexDirection : 'row',
        marginTop : 25,
        height : 100,
        justifyContent : 'center',
        alignItems : 'center'
    },
    maincard : {
        alignSelf : 'center'
    },
    icon : {
        height : 35,
        width : 60,
        justifyContent : 'center',
        alignItems : 'center',
        flex : 2,
    },
    button : {
        borderRadius : 15,
        height : 50,
        justifyContent : 'center',
        alignItems : 'center,'
    },
    card : {
        borderRadius : 18,
        height : '100%',
        width : '100%',
        alignItems : 'center',
        marginTop : 50,
    },
})