import React, { useState, useEffect } from "react";

import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet, Dimensions } from "react-native";

//Styles
import styled from "styled-components";

import { Colors } from "../../colors/colors";

//Linear Gradient
import LinearGradient from "react-native-linear-gradient";

//Navigation 
import { useNavigation } from "@react-navigation/native";

import { Neomorph, NeomorphBlur } from 'react-native-neomorph-shadows';

//Location
import GetLocation from 'react-native-get-location';

//cards
import { CCard } from "../homecards/ccard";
import { PCard } from "../homecards/pcard";

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
    color : ${Colors.offwhite};
`;

const HiText = styled(Text)`
    margin-left : 16px;
    margin-top : 15px;
    font-family : OpenSans;
    font-weight : 700;
    font-size : 45px;
    color : ${Colors.offwhite};
`;

const SubText = styled(Text)`
    margin-left : 16px;
    margin-top : 25px;
    font-family : OpenSans;
    font-weight : 700;
    font-size : 30px;
    color : ${Colors.offwhite};
`;

const SearchbarText = styled(Text)`
    color : ${Colors.offwhite};
    font-family : OpenSans;
    font-weight : 700;
    font-size : 18px;
    margin-left : 5%;
`;

const SubHeading  = styled(Text)`
    color : ${Colors.offwhite};
    font-family : OpenSans;
    font-weight : 700;
    margin-top : 50px;
    margin-left : 20px;
    font-size : 28px;
`;

const mwidth = Dimensions.get('window').width;

export const Home = () => {

    const [city, setCity] = useState('Bhiwandi');
    const [username, setUsername] = useState('Deep');

    const navigation = useNavigation();

    const move = () => {
        navigation.navigate('AppDisplay');
    }

    
    return (

        <View style={styles.screen}>

                <ScrollView style={styles.screen}> 

                    <View style={styles.cityview}>

                        <MapImage 
                            source={require('../../../assets/images/home/map.png')}
                            resizeMode="contain"
                        />

                        <CityText>{city}</CityText>


                        <TouchableOpacity>
                            <NeomorphBlur
                                style={{
                                    shadowRadius: 5,
                                    shadowOffset : {height : 0, width : -1},
                                    borderRadius: 50,
                                    backgroundColor: Colors.luxblack,
                                    width: 50,
                                    height: 50,
                                }}
                            >

                            </NeomorphBlur>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.cityview}>

                        <HiText>Hey {username} !</HiText>

                    </View>

                    <SubText>Let's help you</SubText>

                    <View style={{height : 50, width : '95%', marginTop : 30, alignSelf : 'center', alignItems : 'center'}}>

                        <Neomorph
                            style={{
                                shadowRadius: 3,
                                borderRadius: 35,
                                backgroundColor: Colors.luxblack,
                                width: mwidth * 0.95,
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
                                width: mwidth * 0.94,
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
                                    width: mwidth * 0.92,
                                    height: 50,
                                    justifyContent : 'center'
                                }}
                                >
                                    <SearchbarText>Search For Appliances & Services</SearchbarText>
                                </Neomorph>
                            </Neomorph>
                        </Neomorph>

                    </View>

                    <SubHeading>Categories</SubHeading>

                    <ScrollView style={styles.row} horizontal showsHorizontalScrollIndicator={false} >

                        <TouchableOpacity onPress={() => navigation.navigate('UserDetails')}>
                            <CCard 
                                app={require('../../../assets/images/home/electric.png')} 
                                name="Electric"
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <CCard
                                app={require('../../../assets/images/home/tap.png')} 
                                name="Plumbing"
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <CCard 
                                app={require('../../../assets/images/home/kitchen.png')} 
                                name="Kitchen"
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <CCard
                                app={require('../../../assets/images/home/pest.png')} 
                                name="Pest"
                            />
                        </TouchableOpacity>

                    </ScrollView>

                    <SubHeading>Popular</SubHeading>

                    <ScrollView style={styles.row2} horizontal showsHorizontalScrollIndicator={false}>

                        <TouchableOpacity onPress={() => navigation.navigate("AppDisplay", {screen : 'AirConditioner'})}>
                            <PCard
                                app={require('../../../assets/images/appliances/AirConditioner.png')}
                                name="Air Conditioner"
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("AppDisplay", {screen : 'WashingMachine'})}>
                            <PCard
                                app={require('../../../assets/images/appliances/WashingMachine.png')}
                                name="Washing Machine"
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("AppDisplay", {screen : 'Fridge'})}>
                            <PCard
                                app={require('../../../assets/images/appliances/Fridge.png')}
                                name="Fridge"
                            />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate("AppDisplay", {screen : 'Microwave'})}>
                            <PCard
                                app={require('../../../assets/images/appliances/Microwave.png')}
                                name="Microwave"
                            />
                        </TouchableOpacity>

                    </ScrollView>

                </ScrollView>

        </View>
    );

}

const styles = StyleSheet.create({

    screen : {
        height : '100%',
        width : '100%',
        backgroundColor : Colors.luxblack
    },

    cityview : {
        height : 70,
        width : mwidth,
        flexDirection : 'row',
        flexWrap : 'nowrap'
        
    },
    
    searchbar : {
        height : '100%',
        width : '100%',
        borderRadius : 15,
    },

    row : {
        height : 200,
        width : '100%',
        marginTop : 25,
    },

    row2 : {
        height : 400,
        width : '100%',
        marginTop : 20,
    },

});