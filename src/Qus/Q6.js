import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    TextInput, 
    Modal,
    TouchableOpacity, } from 'react-native';
import React, { useState } from "react";
export default function Q6Screen(props) {
  const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
         <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
           <TouchableOpacity onPress={()=> {props.navigation.navigate("Q6select")}}>
            <Image 
            source={require('../../assets/Great.png')}
            />
            </TouchableOpacity>
        </View>
      </Modal>
          <Image
          style={styles.gaugebar}
          source={require('../../assets/Gauge1.png')}
          />
            <Image 
                style={styles.textbox}
                source={require('../../assets/Q6Text.png')}/>

            <Image style={styles.Qbox}
                source={require('../../assets/What.png')}/>
            <TextInput 
                style={styles.input}
                placeholder={'Write your answer'}
                multiline ={true}
                maxLength={100} />
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
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
    gaugebar:{
      width:'66%',
    },
    textbox: {
      width:'90%',
      padding:30,
      marginTop:20
    },
    Qbox: {
        width:360,
        height:60,
        marginBottom:10,
    },
    input:{
        width:'88%',
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
});