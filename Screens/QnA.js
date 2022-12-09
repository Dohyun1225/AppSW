import {View, Image, Text, StyleSheet} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';

export default function QnAScreen () {
    const [question,setQuestion] = useState("")
    return (
        <View style={styles.container}>
            <View style={styles.PickerView}>
                <Picker 
                    style={styles.Picker}
                    selectedValue = {question}
                    onValueChange={(val,idx)=>setQuestion(val)}
                >
                    <Picker.Item label='Question 1' value="Question 1"></Picker.Item>
                    <Picker.Item label='Question 2' value="Question 2"></Picker.Item>
                    <Picker.Item label='Question 3' value="Question 3"></Picker.Item>
                    <Picker.Item label='Question 4' value="Question 4"></Picker.Item>
                    <Picker.Item label='Question 5' value="Question 5"></Picker.Item>
                    <Picker.Item label='Question 6' value="Question 6"></Picker.Item>
                    <Picker.Item label='Question 7' value="Question 7"></Picker.Item>
                    <Picker.Item label='Question 8' value="Question 8"></Picker.Item>
                </Picker>
            </View>
            <View style={styles.center}>
                
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#F5F5F5',
      },
    Picker: {
        height: 50,
        width: 150,
        backgroundColor:'#FFFFFF',
        margin:20
    },
    PickerView: {
        alignItems: 'flex-end',
    },
    center: {
        alignItems: 'center',
    }
})
