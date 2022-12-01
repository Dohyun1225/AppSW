import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import SliderBox from '../Component/SliderBox'

export default function ProgressScreen(props) {
  const studentName = 'David'
  const totalScore = 25
  const averageScore = 30
  const highestScore = 35
    return(
        <View style={styles.container}>           
            <View style={styles.blackBackground}>
                <Text style={styles.name}>{studentName}</Text>
                <View style={styles.scorePosition}>
                    <View style={styles.scoreBox}>
                        <Text style={styles.scoreText}>{totalScore}</Text>
                        <Text style={styles.scoreTextTitle}>total score</Text>
                    </View>
                    <View style={styles.scoreBox}>
                        <Text style={styles.scoreText}>{averageScore}</Text>
                        <Text style={styles.scoreTextTitle}>average score</Text>
                    </View>
                    <View style={styles.scoreBox}>
                        <Text style={styles.scoreText}>{highestScore}</Text>
                        <Text style={styles.scoreTextTitle}>highest score</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.subTitle}>In Progress</Text>
            <ScrollView>
              <TouchableOpacity 
                    style={styles.progressBox}
                    onPress={()=> {props.navigation.navigate("QnA")}}
              ><SliderBox questionNum={1} questionPro={4} max={4}/></TouchableOpacity>
              <TouchableOpacity 
                    style={styles.progressBox}
                    onPress={()=> {props.navigation.navigate("QnA")}}
              ><SliderBox questionNum={2} questionPro={4} max={5}/></TouchableOpacity>  
              <TouchableOpacity 
                    style={styles.progressBox}
                    onPress={()=> {props.navigation.navigate("QnA")}}
              ><SliderBox questionNum={3} questionPro={4} max={7}/></TouchableOpacity> 
              <TouchableOpacity 
                    style={styles.progressBox}
                    onPress={()=> {props.navigation.navigate("QnA")}}
              ><SliderBox questionNum={4} questionPro={4} max={13}/></TouchableOpacity>
              <TouchableOpacity 
                    style={styles.progressBox}
                    onPress={()=> {props.navigation.navigate("QnA")}}
              ><SliderBox questionNum={5} questionPro={0} max={6}/></TouchableOpacity>  
              <TouchableOpacity 
                    style={styles.progressBox}
                    onPress={()=> {props.navigation.navigate("QnA")}}
              ><SliderBox questionNum={6} questionPro={0} max={8}/></TouchableOpacity>
              <TouchableOpacity 
                    style={styles.progressBox}
                    onPress={()=> {props.navigation.navigate("QnA")}}
              ><SliderBox questionNum={7} questionPro={0} max={8}/></TouchableOpacity>
              <TouchableOpacity 
                    style={styles.progressBox}
                    onPress={()=> {props.navigation.navigate("QnA")}}
              ><SliderBox questionNum={8} questionPro={0} max={10}/></TouchableOpacity>   
            </ScrollView>
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
        borderColor:'#999999',
        width:350,
        height:100,
        alignSelf:'center',
        marginBottom: 20,
        backgroundColor: '#ffffff'
      },
    })