import {View, Text, StyleSheet} from 'react-native'
import Ranking from '../Component/Ranking'

export default function StatisticsScreen() {

  return(
    <View style={styles.container}>
        <Text style={styles.title}>Student Information</Text>
        <View style={styles.boxPosition}>
          <View style={styles.BoX1}>
            <Text style={styles.subTitle}>The most wrong question</Text>
            <Text style={styles.result}>Q8</Text>
          </View>
          
          <View style={styles.BoX3}>
            <Text style={styles.subTitle}>Average Score</Text>
            <Text style={styles.result2}>25</Text>
          </View>
        </View>
        <View style={styles.BoX2}>
            <Text style={styles.subTitle1}>Average percentage of Progress</Text>
            <Text style={styles.result3}>75%</Text>
        </View>
        <Ranking name1="student1" name2="student2" name3="student3"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:'#F5F5F5',
      alignItems: 'center',  
      height: null,  
  },
  boxPosition: {
      flexDirection:'row',
      justifyContent:'center'
  },
  title: {
      fontSize:17,
      fontWeight:'bold',
      marginTop:22,
      marginBottom:25,
  },
  BoX1: {
    borderWidth:1,
    width: 170,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    padding: 15,
    marginRight:10
  },
  BoX2: {
    borderWidth:1,
    width: 340,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    padding: 15,
    marginTop: 10,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  BoX3: {
    borderWidth:1,
    width: 160,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    padding: 15,
  },
  subTitle: {
    fontWeight: '600',
    fontSize: 15,
    color: '#363636'
  },
  subTitle1: {
    fontWeight: '600',
    fontSize: 15,
    color: '#363636',
    width:150,
    marginLeft:15
  },
  result: {
    color: '#6C4BC7',
    fontSize: 50,
    fontWeight: '800',
    marginTop:5
  },
  result2: {
    color: '#6C4BC7',
    fontSize: 50,
    fontWeight: '900',
    marginTop:20
  },
  result3: {
    color: '#6C4BC7',
    fontSize: 45,
    fontWeight: '900',
    marginRight:15
  },
})