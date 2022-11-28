import Modal from 'react-native-simple-modal';

export default class Great extends React.Component  {
    state ={open : false};
    render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => setState({open: true})}>
          <Image 
                style={styles.submit}
                source={require('../assets/Submit.png')}/>
          </TouchableOpacity>
          <Modal
            offset={state.offset}
            open={state.open} 
            modalDidOpen={() => console.log('modal did open')}
            modalDidClose={() => setState({open: false})} 
            style={{alignItems: 'center'}}>
              <View>
                <TouchableOpacity style={{margin: 3}} onPress={() => setState({open: false})}>
                <Image 
                style={styles.Great}
                source={require('../assets/Great.png')}/>
                  </TouchableOpacity>
                </View>
          </Modal>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      zIndex:3,
      position:'absolute',
      height:'100%',
      width:'100%',
      justifyContent:"center",
      alignContent:"center",
      alignItems:"center",
      paddingTop: 50
    },
    submit:{
        marginLeft:160
    },
    Great:{
        width:354,
        height:228
    }
  })