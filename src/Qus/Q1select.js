import { 
    View, 
    Text, 
    StyleSheet, 
    Image,
    TouchableOpacity
} from 'react-native';
export default function Q1selectScreen(props) {
    return (
        <View style={styles.container}>
        <View style={styles.block1}>
          <Image
          style={styles.gaugebar}
          source={require('../../assets/Gauge1.png')}
          />
            <Image 
                style={styles.textbox}
                source={require('../../assets/Q1Text.png')}/>

            <Image style={styles.Qbox}
                source={require('../../assets/ChooseQ.png')}/>
                </View>
                <View style={styles.block2}>
        <TouchableOpacity
        style={styles.button} 
        onPress={()=> {props.navigation.navigate("Qlist11")}}>
            <Text style={styles.text}>Write an equation to solve the problem</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button} 
        onPress={()=> {props.navigation.navigate("Qlist12")}}>
            <Text style={styles.text}>Add on the shipping fee until I get to $85,75.</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button} 
        onPress={()=> {props.navigation.navigate("Qlist13")}}>
            <Text style={styles.text}>Subtract away from $85,75 until I get to O.</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {props.navigation.navigate("Main")}}>
            <Image 
                style={styles.solve}
                source={require('../../assets/Next-Problem.png')}/>
            </TouchableOpacity>
        </View>
        </View>
)};
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    block1:{
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
    },
    block2:{
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    gaugebar:{
      marginTop: 120,
      width:'66%',
    },
    textbox: {
      width:'90%',
      padding:30,
      marginTop:20
    },
    Qbox: {
      width:360,
      height:30,
      marginBottom:30,
  },
    button:{
    width:360,
    marginTop:15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 10,
    backgroundColor: 'white',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
      },
    bottom: {
    width:360,
    marginTop:15,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 10,
    backgroundColor: 'white',
    },
    solve:{
        marginTop: 20,
        marginLeft: 100,
    },
});