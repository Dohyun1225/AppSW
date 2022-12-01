import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native'
import StudentInfoBox from '../Component/StudentInfoBox'

export default function InformationScreen(props) {
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Student Information</Text>
            <ScrollView>
                <TouchableOpacity 
                    style={styles.box} 
                    onPress={()=> {props.navigation.navigate("Progress")}}
                ><StudentInfoBox num={1} name="Student1" score={30}/></TouchableOpacity>
                <TouchableOpacity 
                    style={styles.box} 
                    onPress={()=> {props.navigation.navigate("Progress")}}
                ><StudentInfoBox num={2} name="Student2" score={30}/></TouchableOpacity>
                <TouchableOpacity 
                    style={styles.box} 
                    onPress={()=> {props.navigation.navigate("Progress")}}
                ><StudentInfoBox num={3} name="Student3" score={30}/></TouchableOpacity>
                <TouchableOpacity 
                    style={styles.box} 
                    onPress={()=> {props.navigation.navigate("Progress")}}
                ><StudentInfoBox num={4} name="Student4" score={30}/></TouchableOpacity>
                <TouchableOpacity 
                    style={styles.box} 
                    onPress={()=> {props.navigation.navigate("Progress")}}
                ><StudentInfoBox num={5} name="Student5" score={30}/></TouchableOpacity>
                <TouchableOpacity 
                    style={styles.box} 
                    onPress={()=> {props.navigation.navigate("Progress")}}
                ><StudentInfoBox num={6} name="Student6" score={30}/></TouchableOpacity>
                <TouchableOpacity 
                    style={styles.box} 
                    onPress={()=> {props.navigation.navigate("Progress")}}
                ><StudentInfoBox num={7} name="Student7" score={30}/></TouchableOpacity>
            </ScrollView>
        </View>
    )

}
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
    box: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: 350,
        borderWidth:1.5,
        borderRadius:7,
        borderColor:'#C5C5C5',
    },
})