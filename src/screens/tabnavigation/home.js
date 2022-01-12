import React, { useState, useEffect } from "react";

import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, FlatList } from "react-native";

//Styles
import styled from "styled-components";

//Linear Gradient
import LinearGradient from "react-native-linear-gradient";

//Cards
import { Card } from "react-native-paper";

import { Colors } from "../../colors/colors";

//Navigation 
import { useNavigation } from "@react-navigation/native";

import { Neomorph } from 'react-native-neomorph-shadows';

//Location
import GetLocation from 'react-native-get-location'
import * as Location from 'expo-location';

const MapImage = styled(Image)`
    height : 35px;
    width : 35px;
    margin-left : 5%;
    margin-top : 30px;
`;

const CityText = styled(Text)`
    margin-left : 12px;
    margin-top : 30px;
    font-family : Arizonia-Regular;
    font-size : 35px;
    color : ${Colors.golden};
`;

const HiText = styled(Text)`
    margin-left : 16px;
    margin-top : 15px;
    font-family : Average-Regular;
    font-size : 45px;
    color : ${Colors.golden};
`;

const SubText = styled(Text)`
    margin-left : 16px;
    margin-top : 25px;
    font-family : Average-Regular;
    font-size : 30px;
    color : ${Colors.golden};
`;

const Searchbar = styled(TouchableOpacity)`
    height : 50px;
    width : 100%;
    align-self : center;
    border-radius : 40px;
    elevation : 25;
    marginTop : 50px;
`;

const SearchbarText = styled(Text)`
    color : ${Colors.offblack};
    font-family : Average-Regular;
    font-weight : 700;
    font-size : 18px;
    margin-left : 5%;
    margin-top : 13px;
`;

const SubHeading  = styled(Text)`
    color : ${Colors.golden};
    font-family : Average-Regular;
    margin-top : 50px;
    margin-left : 20px;
    font-size : 28px;
`;

const CardImage = styled(Image)`
    height : 70px;
    width : 70px;
    align-self : center;
    justify-content : center;
`;

const CardImage2 = styled(Image)`
    height : 180px;
    width : 180px;
    align-self : center;
    justify-content : center;
`;

const CardText = styled(Text)`
    font-size : 15px;
    font-family : Average-Regular;
    color : ${Colors.golden};
    margin-top : -10px;
    text-align : center;
`;

const CardText2 = styled(Text)`
    font-size : 20px;
    font-family : Average-Regular;
    color : ${Colors.golden};
    margin-top : -10px;
    text-align : center;
`;

export const Home = () => {

    const [city, setCity] = useState('Bhiwandi');
    const [username, setUsername] = useState('Deep');

    useEffect(() => {

        getLocation();

    }, []);

    const getLocation = async() => {

        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 5000,
        })
        .then(location => {
            
            const { latitude, longitude } = location;

            console.log(latitude + longitude);
        })
        .catch(error => {});

    }
    
    return (

        <View style={styles.screen}>

            <LinearGradient
                colors={[Colors.offblack,Colors.luxblack,Colors.black]}
                stops={[0.45,0.4,1]}
            >

                <ScrollView style={styles.screen}> 

                    <View style={styles.cityview}>

                        <MapImage 
                            source={require('../../../assets/images/home/map.png')}
                            resizeMode="contain"
                        />

                        <CityText>{city}</CityText>

                    </View>

                    <View style={styles.cityview}>

                        <HiText>Hey {username} !</HiText>

                    </View>

                    <SubText>Let's help you</SubText>

                    <Searchbar activeOpacity={0.9}>

                        <LinearGradient
                            colors={[Colors.golden, Colors.darkgolden]}
                            style={styles.searchbar}
                        >

                            <SearchbarText>Search For Appliances & Services</SearchbarText>

                        </LinearGradient>

                    </Searchbar>


                    <SubHeading>Categories</SubHeading>

                    <ScrollView style={styles.row} horizontal>

                        <View style={{flexDirection : 'column'}}>

                            <Neomorph
                                    darkShadowColor={Colors.golden}
                                    lightShadowColor={Colors.golden}
                                    style={{
                                        shadowRadius: 15,
                                        shadowOffset: {width: 10, height: 12},
                                        shadowColor : Colors.golden,
                                        borderRadius: 35,
                                        backgroundColor: Colors.golden,
                                        width: 100,
                                        height: 100,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        margin : 20,
                                        elevation : 12
                                    }}
                            >
                                    <LinearGradient 
                                        colors={[Colors.offblack, Colors.golden, Colors.black, Colors.golden]} 
                                        start={{x : 0.0, y : 0.0}}
                                        end={{x :1, y : 0.9}}
                                        style={styles.card}
                                    >

                                        <LinearGradient
                                            colors={[Colors.offblack, Colors.luxblack, Colors.black, Colors.offblack]}
                                            start={{x : 0.0, y : 0.0}}
                                            end={{x : 1, y : 0.9}}
                                            style={styles.inner}
                                        >

                                            <CardImage 
                                                source={require('../../../assets/images/home/electric.png')}
                                                resizeMode="contain"
                                            />

                                        </LinearGradient>
                                    </LinearGradient>

                            </Neomorph>

                            <CardText>Electric</CardText>

                        </View>

                        <View style={{flexDirection : 'column'}}>

                            <Neomorph
                                    darkShadowColor={Colors.golden} // <- set this
                                    lightShadowColor={Colors.golden} // <- this
                                    style={{
                                        shadowRadius: 15,
                                        shadowOffset: {width: 10, height: 12},
                                        shadowColor : Colors.golden,
                                        borderRadius: 35,
                                        backgroundColor: Colors.golden,
                                        width: 100,
                                        height: 100,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        margin : 20,
                                        elevation : 12
                                    }}
                            >
                                    <LinearGradient 
                                        colors={[Colors.offblack, Colors.golden, Colors.black, Colors.golden]} 
                                        start={{x : 0.0, y : 0.0}}
                                        end={{x :1, y : 0.9}}
                                        style={styles.card}
                                    >

                                        <LinearGradient
                                            colors={[Colors.offblack, Colors.luxblack, Colors.black, Colors.offblack]}
                                            start={{x : 0.0, y : 0.0}}
                                            end={{x : 1, y : 0.9}}
                                            style={styles.inner}
                                        >

                                            <CardImage 
                                                source={require('../../../assets/images/home/tap.png')}
                                                resizeMode="contain"
                                            />

                                        </LinearGradient>
                                    </LinearGradient>

                            </Neomorph>

                            <CardText>Plumbing</CardText>

                        </View>

                        <View style={{flexDirection : 'column'}}>

                            <Neomorph
                                    darkShadowColor={Colors.golden} // <- set this
                                    lightShadowColor={Colors.golden} // <- this
                                    style={{
                                        shadowRadius: 15,
                                        shadowOffset: {width: 10, height: 12},
                                        shadowColor : Colors.golden,
                                        borderRadius: 35,
                                        backgroundColor: Colors.golden,
                                        width: 100,
                                        height: 100,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        margin : 20,
                                        elevation : 12
                                    }}
                            >
                                <LinearGradient 
                                    colors={[Colors.offblack, Colors.golden, Colors.black, Colors.golden]} 
                                    start={{x : 0.0, y : 0.0}}
                                    end={{x :1, y : 0.9}}
                                    style={styles.card}
                                >

                                    <LinearGradient
                                        colors={[Colors.offblack, Colors.luxblack, Colors.black, Colors.offblack]}
                                        start={{x : 0.0, y : 0.0}}
                                        end={{x : 1, y : 0.9}}
                                        style={styles.inner}
                                    >

                                        <CardImage 
                                            source={require('../../../assets/images/home/kitchen.png')}
                                            resizeMode="contain"
                                        />

                                    </LinearGradient>
                                </LinearGradient>

                            </Neomorph>

                            <CardText>Kitchen</CardText>

                        </View>

                        <View style={{flexDirection : 'column'}}>

                            <Neomorph
                                    darkShadowColor={Colors.golden} 
                                    lightShadowColor={Colors.golden}
                                    style={{
                                        shadowRadius: 15,
                                        shadowOffset: {width: 10, height: 12},
                                        shadowColor : Colors.golden,
                                        borderRadius: 35,
                                        backgroundColor: Colors.golden,
                                        width: 100,
                                        height: 100,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        margin : 20,
                                        elevation : 12
                                    }}
                            >
                                <LinearGradient 
                                    colors={[Colors.offblack, Colors.golden, Colors.black, Colors.golden]} 
                                    start={{x : 0.0, y : 0.0}}
                                    end={{x :1, y : 0.9}}
                                    style={styles.card}
                                >

                                    <LinearGradient
                                        colors={[Colors.offblack, Colors.luxblack, Colors.black, Colors.offblack]}
                                        start={{x : 0.0, y : 0.0}}
                                        end={{x : 1, y : 0.9}}
                                        style={styles.inner}
                                    >

                                        <CardImage 
                                            source={require('../../../assets/images/home/pest.png')}
                                            resizeMode="contain"
                                        />

                                    </LinearGradient>
                                </LinearGradient>

                            </Neomorph>

                            <CardText>Pest</CardText>

                        </View>



                    </ScrollView>

                    <SubHeading>Popular</SubHeading>

                    <ScrollView style={styles.row2} horizontal>

                        <View style={{flexDirection : 'column'}}>

                            <Neomorph
                                    darkShadowColor={Colors.golden}
                                    lightShadowColor={Colors.golden}
                                    style={{
                                        shadowRadius: 15,
                                        shadowOffset: {width: 10, height: 12},
                                        shadowColor : Colors.golden,
                                        borderRadius: 35,
                                        backgroundColor: Colors.golden,
                                        width: 200,
                                        height: 240,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        margin : 20,
                                        elevation : 12
                                    }}
                            >
                                    <LinearGradient 
                                        colors={[Colors.offblack, Colors.golden, Colors.black, Colors.golden]} 
                                        start={{x : 0.0, y : 0.0}}
                                        end={{x :1, y : 0.9}}dd
                                        style={styles.card}
                                    >

                                        <LinearGradient
                                            colors={[Colors.offblack, Colors.luxblack, Colors.black, Colors.offblack]}
                                            start={{x : 0.0, y : 0.0}}
                                            end={{x : 1, y : 0.9}}
                                            style={styles.inner}
                                        >

                                            <CardImage2 
                                                source={require('../../../assets/images/appliances/AirConditioner.png')}
                                                resizeMode="contain"
                                            />

                                        </LinearGradient>
                                    </LinearGradient>

                            </Neomorph>

                            <CardText2>Air Conditioner</CardText2>

                        </View>

                        <View style={{flexDirection : 'column'}}>

                        <Neomorph
                                    darkShadowColor={Colors.golden}
                                    lightShadowColor={Colors.golden}
                                    style={{
                                        shadowRadius: 15,
                                        shadowOffset: {width: 10, height: 12},
                                        shadowColor : Colors.golden,
                                        borderRadius: 35,
                                        backgroundColor: Colors.golden,
                                        width: 200,
                                        height: 240,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        margin : 20,
                                        elevation : 12
                                    }}
                            >
                                    <LinearGradient 
                                        colors={[Colors.offblack, Colors.golden, Colors.black, Colors.golden]} 
                                        start={{x : 0.0, y : 0.0}}
                                        end={{x :1, y : 0.9}}dd
                                        style={styles.card}
                                    >

                                        <LinearGradient
                                            colors={[Colors.offblack, Colors.luxblack, Colors.black, Colors.offblack]}
                                            start={{x : 0.0, y : 0.0}}
                                            end={{x : 1, y : 0.9}}
                                            style={styles.inner}
                                        >

                                            <CardImage2 
                                                source={require('../../../assets/images/appliances/WashingMachine.png')}
                                                resizeMode="contain"
                                            />

                                        </LinearGradient>
                                    </LinearGradient>

                            </Neomorph>

                            <CardText2>Washing Machine</CardText2>

                        </View>

                        <View style={{flexDirection : 'column'}}>

                        <Neomorph
                                    darkShadowColor={Colors.golden}
                                    lightShadowColor={Colors.golden}
                                    style={{
                                        shadowRadius: 15,
                                        shadowOffset: {width: 10, height: 12},
                                        shadowColor : Colors.golden,
                                        borderRadius: 35,
                                        backgroundColor: Colors.golden,
                                        width: 200,
                                        height: 240,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        margin : 20,
                                        elevation : 12
                                    }}
                            >
                                    <LinearGradient 
                                        colors={[Colors.offblack, Colors.golden, Colors.black, Colors.golden]} 
                                        start={{x : 0.0, y : 0.0}}
                                        end={{x :1, y : 0.9}}
                                        style={styles.card}
                                    >

                                        <LinearGradient
                                            colors={[Colors.offblack, Colors.luxblack, Colors.black, Colors.offblack]}
                                            start={{x : 0.0, y : 0.0}}
                                            end={{x : 1, y : 0.9}}
                                            style={styles.inner}
                                        >

                                            <CardImage2 
                                                source={require('../../../assets/images/appliances/Fridge.png')}
                                                resizeMode="contain"
                                            />

                                        </LinearGradient>
                                    </LinearGradient>

                            </Neomorph>

                            <CardText2>Fridge</CardText2>

                        </View>

                        <View style={{flexDirection : 'column'}}>

                        <Neomorph
                                    darkShadowColor={Colors.golden}
                                    lightShadowColor={Colors.golden}
                                    style={{
                                        shadowRadius: 15,
                                        shadowOffset: {width: 10, height: 12},
                                        shadowColor : Colors.golden,
                                        borderRadius: 35,
                                        backgroundColor: Colors.golden,
                                        width: 200,
                                        height: 240,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        margin : 20,
                                        elevation : 12
                                    }}
                            >
                                    <LinearGradient 
                                        colors={[Colors.offblack, Colors.golden, Colors.black, Colors.golden]} 
                                        start={{x : 0.0, y : 0.0}}
                                        end={{x :1, y : 0.9}}dd
                                        style={styles.card}
                                    >

                                        <LinearGradient
                                            colors={[Colors.offblack, Colors.luxblack, Colors.black, Colors.offblack]}
                                            start={{x : 0.0, y : 0.0}}
                                            end={{x : 1, y : 0.9}}
                                            style={styles.inner}
                                        >

                                            <CardImage2 
                                                source={require('../../../assets/images/appliances/Television.png')}
                                                resizeMode="contain"
                                            />

                                        </LinearGradient>
                                    </LinearGradient>

                            </Neomorph>

                            <CardText2>TV</CardText2>

                        </View>

                    </ScrollView>

                </ScrollView>

            </LinearGradient>

        </View>
    );

}

const styles = StyleSheet.create({

    screen : {
        height : '100%',
        width : '100%',
    },
    cityview : {
        flexDirection : 'row',
    },

    searchbar : {
        height : '100%',
        width : '100%',
        borderRadius : 15,
    },

    row : {
        height : 180,
        width : '100%',
        marginTop : 25,
    },

    row2 : {
        height : 425,
        width : '100%',
        marginTop : 20,
    },

    card : {
        borderRadius : 35,
        height : '100%',
        width : '100%',
        justifyContent : 'center'  
    },

    inner : {
        height : '98%',
        width : '98%',
        borderRadius : 35,
        alignSelf : 'center',
        alignItems : 'center',
        justifyContent : 'center',
    },

});