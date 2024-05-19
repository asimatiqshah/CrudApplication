import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import TodLists from "./components/TodLists";

const App=()=>{
  // const fetchReduxData = useSelector((data)=>console.log(data));
  return(
    <TodLists />
  )
}
export default App;