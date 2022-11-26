import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    TextInput, 
    TouchableOpacity, } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import React, { useState } from 'react';
export default function Q7Screen(props) {
    const [myValue, setMyValue] = useState(0);

    return (
        <View style={styles.container}>
            <Slider
            style={{width: 30, height: 30, borderRadius: 50}}
            value={myValue}
            onValueChange={(value) => setMyValue(value)}
            step={1}
            minimumValue={0}
            maximumValue={4}
            minimumTrackTintColor="#6C4BC7"
            maximumTrackTintColor="#bdc3c7"
            />
            <Image 
                style={styles.textbox}
                source={require('../../assets/Q7Text.png')}/>

            <Image style={styles.Qbox}
                source={require('../../assets/What.png')}/>
            <TextInput 
                style={styles.input}
                placeholder={'Write your answer'}
                multiline ={true}
                maxLength={100} />
            <TouchableOpacity>
            <Image 
                style={styles.submit}
                source={require('../../assets/Submit.png')}/>
            </TouchableOpacity>
        </View>
)};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    slider:{
    },
    textbox: {
      width:'100%',
      height:300,
      padding:30,
      marginTop:20
    },
    Qbox: {
        width:'100%',
        height:68,
        marginBottom:10,
    },
    input:{
        width:'90%',
        height:200,
        borderColor:'#848484',
        borderWidth:1,
        marginBottom:15,
        marginTop:15,
        padding:20,
        textAlignVertical:"top",
        fontSize: 18,
    },
    submit:{
        marginLeft:160
    },
});