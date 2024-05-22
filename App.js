import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import TodLists from "./components/TodLists";
import Test from "./components/test";

const App=()=>{
  // const fetchReduxData = useSelector((data)=>console.log(data));
  return(
    <TodLists />
    // <Test />

  )
}
export default App;