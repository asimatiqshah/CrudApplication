import { Text, View } from "react-native";
import { useSelector } from "react-redux";

const App=()=>{
  const fetchReduxData = useSelector((data)=>console.log(data));
  return(
    <View>
      <Text>World</Text>
    </View>
  )
}
export default App;