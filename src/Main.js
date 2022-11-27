import { 
    ScrollView, 
    View,
    Text,
    StyleSheet, 
    Image, 
    ImageBackground,
    TouchableOpacity, } from 'react-native';
export default function MainScreen(props) {
    return (
        <ScrollView style={styles.container}>
            <View>
                <ImageBackground
                style={{ width: "100%", height: "100%" }}
                source={require("../assets/background.png")}
                resizeMode="cover"
                >
            <View style={{flex: 1, marginTop:20, alignItems: 'center',}}>
            <Image 
            style={styles.logo}
            source={require('../assets/Logo.png')}/>
            <Image 
            style={styles.score}
            source={require('../assets/Score.png')}/>
           
            <View style={{flex: 1, flexDirection: 'row', marginTop:10,}}>
               <TouchableOpacity onPress={()=> {props.navigation.navigate("Q1")}}>
                <Image 
                source={require('../assets/Q1.png')}
                style={styles.Qbox}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {props.navigation.navigate("Q2")}}>
                <Image 
                source={require('../assets/Q2.png')}
                style={styles.Qbox}/>
            </TouchableOpacity>
            </View>
            <View style={{flex: 1, flexDirection: 'row', marginTop:10}}>
            <TouchableOpacity onPress={()=> {props.navigation.navigate("Q3")}}>
            <Image 
            source={require('../assets/Q3.png')}
            style={styles.Qbox}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {props.navigation.navigate("Q4")}}>
            <Image 
            source={require('../assets/Q4.png')}
            style={styles.Qbox}/>
            </TouchableOpacity>
            </View>
            <View style={{flex: 1, flexDirection: 'row', marginTop:10}}>
            <TouchableOpacity onPress={()=> {props.navigation.navigate("Q5")}}>
            <Image 
            source={require('../assets/Q5.png')}
            style={styles.Qbox}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {props.navigation.navigate("Q6")}}>
            <Image 
            source={require('../assets/Q6.png')}
            style={styles.Qbox}/>
            </TouchableOpacity>
            </View>
            <View style={{flex: 1, flexDirection: 'row', marginTop:10}}>
            <TouchableOpacity onPress={()=> {props.navigation.navigate("Q7")}}>
            <Image 
            source={require('../assets/Q7.png')}
            style={styles.Qbox}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {props.navigation.navigate("Q8")}}>
            <Image 
            source={require('../assets/Q8.png')}
            style={styles.Qbox}/>
            </TouchableOpacity>
            </View>
            </View>
            </ImageBackground>
            </View>
        </ScrollView>
)};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        horizontal : true,
      },
    Qbox: {
        width:160,
        height:160,
    },
    logo:{
        width:160,
        height:160,
        marginTop:60,
        marginBottom:20,
    },
    score:{
        width:180,
        height:35,
        marginBottom:20,
    }
      },                
    );