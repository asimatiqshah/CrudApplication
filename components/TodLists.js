import {Button, Image, StyleSheet, Text, View} from 'react-native';

const TodLists = () => {
  return (
    <View style={styles.bodyArea}> 
      <View style={styles.topheader}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Image
            source={require('../src/assets/left-arrow.png')}
            style={{width:24,height:24}}
          />
        </View>
        <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
          <Text style={{fontSize:20,color:'black',fontWeight:'700'}}>TodoList</Text>
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Image
            source={require('../src/assets/three-dots-vertical.png')}
            style={{width:24,height:24}}
          />
        </View>
      </View>
      <View style={{backgroundColor:'#151515',flex:1}}>
        <Text style={{color:'white'}}>Today</Text>
        <Text style={{fontSize:14,color:'#7D7878'}}>March 4, 2010</Text>
        <View style={{backgroundColor:'#201F1F',height:50,justifyContent:'center',alignItems:'flex-start'}}>
          <Text style={{color:'white'}}>AsimShah</Text>
        </View>
        <View style={{backgroundColor:'grey',height:50,justifyContent:'center',alignItems:'center'}}>
          <Text>AsimShah</Text>
        </View>
        <View style={{backgroundColor:'grey',height:50,justifyContent:'center',alignItems:'center'}}>
          <Text>AsimShah</Text>
        </View>
      </View>
      <View style={styles.circle}>
      <Image
        source={require('../src/assets/plus.png')}
        style={{width:25,height:25}}
      />
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
  },circle :{
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor:'grey',
    position:'absolute',
    bottom:0,
    right :0,
    justifyContent:'center',
    alignItems:'center'
   }
});
