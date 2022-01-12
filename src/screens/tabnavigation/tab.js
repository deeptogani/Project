import React from "react";

import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

//Linear Gradient
import LinearGradient from "react-native-linear-gradient";

//Screens
import { Home } from "./home";

//Colors
import { Colors } from "../../colors/colors";

//Bottom Navigation Bar
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Neomorph
import { Neomorph } from 'react-native-neomorph-shadows';
import { transparent } from "react-native-paper/lib/typescript/styles/colors";

const Tabs = createBottomTabNavigator();

export const Tab = () => {

  const widevice = Dimensions.get('window').width;

  return (

        <Tabs.Navigator initialRouteName={Home}  
          screenOptions={{
            headerShown : false,
            tabBarBackground : () => {
              return (

                <View style={{height : 60, width : '95%', alignSelf : 'center', borderRadius : 18}}>

                  <Neomorph
                                    darkShadowColor={Colors.golden}
                                    lightShadowColor={Colors.golden}
                                    style={{
                                        shadowRadius: 15,
                                        shadowOffset: {width: -10, height: -12},
                                        shadowColor : Colors.golden,
                                        borderRadius: 18,
                                        backgroundColor: Colors.golden,
                                        width: widevice *0.95,
                                        height: 60,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        elevation : 25
                                    }}
                            >
                                    <LinearGradient 
                                        colors={[Colors.darkgolden, Colors.golden, Colors.darkgolden, Colors.golden, Colors.darkgolden]} 
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

                                        </LinearGradient>
                                    </LinearGradient>

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

            <Tabs.Screen name="Home" component={Home} />

        </Tabs.Navigator>
  );

}

const styles = StyleSheet.create({
  card : {
    borderRadius : 18,
    height : '100%',
    width : '99%',
    justifyContent : 'center',
    alignItems : 'center'
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