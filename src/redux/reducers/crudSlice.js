// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     todoList : []
// }

// const crudSlice = createSlice({
//     name : "crud",
//     initialState,
//     reducers:{
//         addItem:(state,actions)=>{
//             // console.log(actions)
//             let {payload} = actions;
//             state.todoList = [...state.todoList,payload];
//         },
//         updateItem : (state,actions)=>{
//             console.log(actions)
//         }
//     }
// })

// export const {addItem,updateItem} = crudSlice.actions;
// export default crudSlice.reducer;

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value : 0
}

const crudSlice = createSlice({
    name : 'curdApplication',
    initialState,
    reducers : {
        increment : (state,action)=>{
            console.log("Action ", action)
        }
    }
})

export const {increment} = crudSlice.actions;
export default crudSlice.reducer;
