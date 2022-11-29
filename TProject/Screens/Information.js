import React from 'react'
import {View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity} from 'react-native'

const 
DATA = [
    {id:1, number:1, name: "Student 1"},
    {id:2, number:2, name: "Student 2"}, 
    {id:3, number:3, name: "Student 3"}, 
    {id:4, number:4, name: "Student 4"}, 
    {id:5, number:5, name: "Student 5"}, 
    {id:6, number:6, name: "Student 6"}, 
    {id:7, number:7, name: "Student 7"}, 
    {id:8, number:8, name: "Student 8"},
    {id:9, number:9, name: "Student 9"}
]


const InformationScreen = (props) => {
    const Item = ({name}) => (
        <TouchableOpacity 
        style={styles.item}
        onPress={()=> {props.navigation.navigate("Progress")}}>
            <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
    )
    const renderItem = ({ item }) => (
        <Item name={item.name} />
      );
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Student Information</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
            
        </ScrollView>
    )

}
export default InformationScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#F5F5F5',
        alignItems: 'center',  
        height: null  
    },
    title: {
        fontSize:17,
        fontWeight:'bold',
        marginTop:22,
        marginBottom:25,
    },
    item: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: 350
    },
    name: {
        fontSize: 20,
        fontWeight:'bold',
        paddingLeft:5,
      },
})