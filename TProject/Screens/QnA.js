import {View, StyleSheet} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import QnA1 from '../QnA/QnA1';
import QnA2 from '../QnA/QnA2'
import QnA3 from '../QnA/QnA3'
import QnA4 from '../QnA/QnA4'
import QnA5 from '../QnA/QnA5'
import QnA6 from '../QnA/QnA6'
import QnA7 from '../QnA/QnA7'
import QnA8 from '../QnA/QnA8'

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
                    <Picker.Item label='Question1' value="Q1"></Picker.Item>
                    <Picker.Item label='Question2' value="Q2"></Picker.Item>
                    <Picker.Item label='Question3' value="Q3"></Picker.Item>
                    <Picker.Item label='Question4' value="Q4"></Picker.Item>
                    <Picker.Item label='Question5' value="Q5"></Picker.Item>
                    <Picker.Item label='Question6' value="Q6"></Picker.Item>
                    <Picker.Item label='Question7' value="Q7"></Picker.Item>
                    <Picker.Item label='Question8' value="Q8"></Picker.Item>
                </Picker>
            </View>  
            <QnA1/>          
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
