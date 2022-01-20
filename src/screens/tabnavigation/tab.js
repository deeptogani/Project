import React from "react";

import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';

//Linear Gradient
import LinearGradient from "react-native-linear-gradient";

import styled from 'styled-components';

//Screens
import { Home } from "./home";

//Colors
import { Colors } from "../../colors/colors";

//Bottom Navigation Bar
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Neomorph
import { Neomorph } from 'react-native-neomorph-shadows';

const Tabs = createBottomTabNavigator();

const CardImage = styled(Image)`
    height : 40px;
    width : 40px;
    align-self : center;
    justify-content : center;
`;

const CardText = styled(Text)`
    font-size : 18px;
    font-family : Arizonia-Regular;
    font-weight : 700;
    color : ${Colors.offwhite};
    text-align : center;
`;

export const Tab = () => {

  const wdevice = Dimensions.get('window').width;

  return (

        <Tabs.Navigator initialRouteName={Home}  
          screenOptions={{
            headerShown : false,
            tabBarBackground : () => {
              return (

                <View style={{height : 60, width : '95%', alignSelf : 'center', borderRadius : 18}}>

                  <Neomorph
                            style={{
                                shadowRadius: 3,
                                borderRadius: 30,
                                backgroundColor: Colors.offblack,
                                width: wdevice * 0.95,
                                height: 60,
                                alignItems: 'center',
                            }}
                            >
                            <Neomorph
                                inner
                                style={{
                                shadowRadius: 7,
                                borderRadius: 38,
                                backgroundColor: Colors.offblack,
                                width: wdevice * 0.925,
                                height: 55,
                                alignItems: 'center',
                                }}
                            >
                                <Neomorph
                                inner
                                style={{
                                    shadowRadius: 9,
                                    borderRadius: 35,
                                    backgroundColor: Colors.luxblack,
                                    width: wdevice * 0.90,
                                    height: 50,
                                    justifyContent : 'center',
                                    top : -1,
                                }}
                                >

                                </Neomorph>
                            </Neomorph>
                        </Neomorph>

                          </View>
              );
            },
            tabBarStyle : {
              height : 60,
              bottom : 25,
              position : 'absolute',
              justifyContent : 'center',
              alignItems : 'center',
              alignSelf : 'center',
              elevation : 25,
              borderRadius : 18,
            }
          }}
        >

            <Tabs.Screen name="Home" component={Home} 

              options={({navigation}) => ({
                tabBarShowLabel : false,
                tabBarButton: () => (
                  <TouchableOpacity>

                    <View style={styles.card}>

                      <Neomorph
                      lightShadowColor={Colors.sweetred}
                      darkShadowColor={Colors.sweetred}
                          style={{
                              shadowRadius: 35,
                              shadowOffset : {height : 0, width : -3},
                              borderRadius: 70,
                              backgroundColor: Colors.sweetred,
                              width: 100,
                              height: 60,
                              justifyContent: 'center',
                              alignItems: 'center',

                          }}
                          >
                          <Neomorph
                              inner
                              style={{
                              shadowRadius: 7,
                              borderRadius: 70,
                              backgroundColor: Colors.sweetred,
                              width: 98,
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
                                  width: 95,
                                  height: 55,
                                  justifyContent : 'center'
                              }}
                              >

                                  <CardText>Book</CardText>

                              </Neomorph>
                          </Neomorph>
                      </Neomorph>

                      </View>

                  </TouchableOpacity>
                )
              })}
          
            />

        </Tabs.Navigator>
  );

}

const styles = StyleSheet.create({
  card : {
    borderRadius : 18,
    height : '100%',
    width : '100%',
    alignItems : 'center',
    top : -35
},

inner : {
    height : '95%',
    width : '100%',
    borderRadius : 18,
    alignSelf : 'center',
    alignItems : 'center',
    justifyContent : 'center',
},
});