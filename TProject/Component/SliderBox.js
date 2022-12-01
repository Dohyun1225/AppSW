import { View, Text, StyleSheet } from 'react-native'
import Slider from '@react-native-community/slider'

export default function SliderBox (props) {
    const questionNumber=props.questionNum
    const questionProgress=props.questionPro
    const maximum=props.max
    return(
      <View>
        <Text style={styles.boxTitle}>Question {questionNumber}</Text>
          <Slider 
            style={{width:300, alignSelf:'center'}}
            value={questionProgress}
            minimumValue={0}
            maximumValue={maximum}
            minimumTrackTintColor='#6C4BC7'
            maximumTrackTintColor='#8977B9'
            thumbTintColor='#6C4BC7'
            disabled={true}
          ></Slider>
          <View style={styles.miniBox}>
            <Text style={styles.sliderText}>{questionProgress}/{maximum}</Text>
          </View>
        </View>
    )
}
const styles = StyleSheet.create({
    
      boxTitle:{
        fontSize:15,
        fontWeight:'700',
        margin:15,
      },
      sliderText: {
        alignSelf:'center',
        fontWeight:'700',
        top:5
      },
      miniBox: {
        backgroundColor:'#E2E2E2',
        width: 50,
        height: 30,
        borderRadius: 10,
        alignSelf:'center',
        top: -57,
        left: 130
      }
})