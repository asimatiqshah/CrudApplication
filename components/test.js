import { useState } from "react";
import { ActivityIndicator, Button, Modal, Text, TouchableOpacity, View } from "react-native";

const Test=()=>{
    const [contentLoader,setContentLoader] = useState(false);
    return(
        <View style={{backgroundColor:'orange',flex:1}}>
            <Button title="Add Item" onPress={()=>setContentLoader(true)} />
            <Modal visible={contentLoader} transparent>
                <TouchableOpacity onPress={()=>setContentLoader(false)} style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:'center',alignItems:'center'}}>
                    {/* content box Layer */}
                    <View style={{width:100,height:100,backgroundColor:'white',borderRadius:10,justifyContent:'center',alignItems:'center'}}>
                        <ActivityIndicator size="large"/>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}
export default Test;