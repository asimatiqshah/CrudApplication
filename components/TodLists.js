import {StyleSheet, Text, View} from 'react-native';

const TodLists = () => {
  return (
    <View style={styles.bodyArea}> 
      <View style={styles.topheader}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'red'}}>
          <Text>arrow</Text>
        </View>
        <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:20,color:'black',fontWeight:'700'}}>TodoList</Text>
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'red'}}>
          <Text>Right Arrow</Text>
        </View>
      </View>
      <View style={{backgroundColor:'red',flex:1}}>
        <Text>Today</Text>
      </View>
    </View>
  );
};
export default TodLists;

const styles = StyleSheet.create({
  topheader: {
    backgroundColor: '#0AB6AB',
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bodyArea:{
    flex : 1,
    backgroundColor:'black',
    // height:'100%'
  }
});
