import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Slider from '@react-native-community/slider'
import React, { useState } from 'react'

const value = 3
export default function ProgressScreen(props) {
    return(
        <View style={styles.container}>           
            <View style={styles.blackBackground}>
                <Text style={styles.name}>David</Text>
                <View style={styles.scorePosition}>
                    <View style={styles.scoreBox}>
                        <Text style={styles.scoreText}>25</Text>
                        <Text style={styles.scoreTextTitle}>total score</Text>
                    </View>
                    <View style={styles.scoreBox}>
                        <Text style={styles.scoreText}>25</Text>
                        <Text style={styles.scoreTextTitle}>average score</Text>
                    </View>
                    <View style={styles.scoreBox}>
                        <Text style={styles.scoreText}>25</Text>
                        <Text style={styles.scoreTextTitle}>highest score</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={styles.subTitle}>In Progress</Text>
                <TouchableOpacity 
                    style={styles.progressBox}
                    onPress={()=> {props.navigation.navigate("QnA")}}
                >
                    <Text style={styles.boxTitle}>Question 1</Text>
                    <Slider 
                    style={{width:300, alignSelf:'center'}}
                    value={value}
                    minimumValue={0}
                    maximumValue={4}
                    minimumTrackTintColor='#6C4BC7'
                    ></Slider>
                    <Text style={styles.sliderText}>{value}/{4}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#F5F5F5',
      },
      blackBackground: {
        backgroundColor:'#2B2B2B',
        width:'100%',
        height:260,
      },
      name: {
        fontSize: 35,
        color:'white',
        fontWeight:'900',
        margin:35
      },
      scoreBox: {
        width:100,
        height:100,
        borderColor:'white',
        borderWidth:1.2,
        borderRadius:6,
        margin:10,
      },
      scorePosition: {
        flexDirection:'row',
        alignSelf:'center'
      },
      scoreText: {
        fontWeight:'900',
        color:'white',
        fontSize:40,
        alignSelf:'center',
        top:10
      },
      scoreTextTitle: {
        color:'white',
        fontSize:12,
        alignSelf:'center',
        top:10
      },
      subTitle: {
        fontSize: 20,
        fontWeight:'700',
        marginTop: 15,
        marginLeft: 25,
        marginBottom:20
      },
      progressBox: {
        borderRadius: 7,
        borderWidth:1.2,
        borderColor:'#707070',
        width:350,
        height:100,
        alignSelf:'center'
      },
      boxTitle:{
        fontSize:15,
        fontWeight:'700',
        margin:15,
      },
      sliderText: {
        alignSelf:'center',
        top:-50,
        left:130,
        fontWeight:'700'
      }
    })