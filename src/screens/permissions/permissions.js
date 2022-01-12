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

const NeedPermissionsText = styled(Text)`
    font-family : Average-Regular;
    font-size : 25px;
    font-weight : 600;
    color : ${Colors.golden};
    margin-top : 50px;
    text-align : center;
`;

const PermissionText = styled(Text)`
    font-family : Average-Regular;
    font-size : 22px;
    color : ${Colors.golden};
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

    const AskPermissions = () => {
        if(isStorage){
            PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
        }
        if(isCamera){
            PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
        }
        if(isLocation){
            PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION && PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        }
    }

    return (
        <View style={styles.screen}>

            <LinearGradient
                colors={[Colors.offblack,Colors.luxblack,Colors.black]}
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

                    <AskPermissionsButton onPress={() => AskPermissions()}>

                        <LinearGradient style={styles.button} 
                            colors={[Colors.golden, Colors.darkgolden]} 
                            start={{x : 0.4, y : 0}}
                            end={{x : 0.4, y : 1}}
                            locations={[0, 0.9]}
                            style={styles.button}
                        >

                            <AskButtonText>Grant Permissions</AskButtonText>

                        </LinearGradient>

                    </AskPermissionsButton>

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
        alignItems : 'center'
    }
})