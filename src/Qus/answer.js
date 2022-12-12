import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState} from 'react'
import { db } from "../firebaseConfig";
import { async } from "@firebase/util";
import Logo from '../assets/logo.png'
import User from '../assets/user.png'
import Password from '../assets/password.png'
import { addDoc, collection, getDocs, doc, updateDoc, deleteDoc, where, query, Firestore } from "firebase/firestore";

    const [studentAnswer, setStudentAnswer] = useState();


    const addtoDBAnswer = async()=>{
        await addDoc(collection(db,"studentAnswer"), {
            studentAnswer:studentAnswer,
            createdAt: new Date()
        })
        setModalVisible(!modalVisible)
        setStudentAnswer("")
    } 


const updatedb = async () =>{
    try{
    const an = await query(collection(db, "student"), where('addId', '=='),addId)
    const singleDoc = await getDocs(an);
    let docID = ''
    singleDoc.forEach((doc) => {
        docID = doc.id;
    })
    const docRef = doc(db, "student", docId)
    await updateDoc(docRef, {
        "1-1-1" : answer
    });
  }catch{
    console.log(error.message)
  }
}

export default answer;