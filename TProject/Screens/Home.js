import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Teacher from '../assets/teacher.png'
import Statistics from '../assets/statistics.png'
import Student from '../assets/student.png'
export default function HomeScreen(props) {
    const {params} = props.route
    const userNameText = params? params.userNameText:null;
    return (
      <ScrollView>
        <View style={styles.container}>
            <Image style={styles.teacher} source={Teacher}/>
            <Text style={styles.helloTeacher}>Hello, {JSON.stringify(userNameText)}!</Text>
            <Text style={styles.secondText}>Check your class information</Text>
            <Image style={styles.home1} source={Statistics}/>
            <Image style={styles.home2} source={Student}/>
        </View>
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      teacher: {
        width:100,
        height:100,
        marginTop:40
      },
      helloTeacher: {
        fontWeight:'bold',
        textAlign:'left',
        fontSize:20,
      },
      secondText: {
        textAlign:'left',
        fontSize:15,
      },
      home1: {
        width:325,
        height: 219,
        margin:20
      },
      home2: {
        width:325,
        height: 219,
        marginBottom:40
      },
    });

