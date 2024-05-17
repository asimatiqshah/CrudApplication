import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CheckBox from 'react-native-check-box'





const TodLists = () => {
  const colorList = {
    colorDark: "#7A7777",
    colorWhite: "white"
  }
  return (
    <View style={styles.bodyArea}>
      <View style={styles.topheader}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('../src/assets/left-arrow.png')}
            style={{ width: 24, height: 24 }}
          />
        </View>
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, color: 'black', fontWeight: '700' }}>TodoList</Text>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('../src/assets/three-dots-vertical.png')}
            style={{ width: 24, height: 24 }}
          />
        </View>
      </View>
      <View style={{ backgroundColor: '#151515', flex: 1 }}>
        <View style={{ marginTop: 20, marginLeft: 20 }}>
          <Text style={{ color: 'white' }}>Today</Text>
          <Text style={{ fontSize: 14, color: '#7D7878' }}>March 4, 2010</Text>
        </View>

        {/* Todo 1 */}
        <View style={{ backgroundColor: '#201F1F', height: 50, alignItems: 'flex-start', flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingRight: 20, marginTop: 20 }}>
          <CheckBox
            leftText={"CheckBox"}
            isChecked={false}
            checkBoxColor={colorList.colorDark}
          />
          <Text style={{ flex: 2, color: colorList.colorDark, paddingLeft: 10, textDecorationLine: 'line-through', textDecorationStyle: 'solid', fontSize: 20 }}>Do exercise</Text>
          <Text style={{ justifyContent: 'flex-end', color: colorList.colorDark, fontSize: 15 }}>6.00 am</Text>
        </View>

        {/* Todo 2 */}
        <View style={{ backgroundColor: '#201F1F', height: 50, alignItems: 'flex-start', flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingRight: 20, marginTop: 20 }}>
          <CheckBox
            leftText={"CheckBox"}
            isChecked={false}
            checkBoxColor={colorList.colorDark}
          />
          <Text style={{ flex: 2, color: colorList.colorDark, paddingLeft: 10, textDecorationLine: 'line-through', textDecorationStyle: 'solid', fontSize: 20 }}>Buy vegetables</Text>
          <Text style={{ justifyContent: 'flex-end', color: colorList.colorDark, fontSize: 15 }}>8.00 am</Text>
        </View>

        {/* Todo 3 */}
        <View style={{ backgroundColor: '#201F1F', height: 50, alignItems: 'flex-start', flexDirection: 'row', alignItems: 'center', paddingLeft: 20, paddingRight: 20, marginTop: 20 }}>
          <CheckBox
            leftText={"CheckBox"}
            isChecked={true}
            checkBoxColor={colorList.colorWhite}
          />
          <Text style={{ flex: 2, color: colorList.colorWhite, paddingLeft: 10, textDecorationLine: 'none', textDecorationStyle: 'solid', fontSize: 20 }}>Go to shopping</Text>
          <Text style={{ justifyContent: 'flex-end', color: colorList.colorWhite, fontSize: 15 }}>8.00 am</Text>
        </View>

      </View>
      <TouchableOpacity style={styles.circle}>
        <Image
          source={require('../src/assets/plus.png')}
          style={{ width: 25, height: 25 }}
        />
      </TouchableOpacity>
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
  bodyArea: {
    flex: 1,
    backgroundColor: 'black',
    // height:'100%'
  }, circle: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#0AB6AB',
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


