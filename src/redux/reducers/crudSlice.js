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
    value : 0,
    reduxTodoList : []
}

const crudSlice = createSlice({
    name : 'curdApplication',
    initialState,
    reducers : {
        increment : (state,action)=>{
            // console.log("Action1 ", action)
        },
        showData : (state,action)=>{
            const {payload} = action;
            state.reduxTodoList = [...payload];
            // console.log(state.todoList)
        },
        updateStatus : (state,action)=>{
            //Updated Object
            let {payload} = action;
            //Index number of object
             const indexVal = state.reduxTodoList.findIndex((item)=> item.id == payload.id );
             const cloneList = [...state.reduxTodoList];
             cloneList.splice(indexVal,1,payload);
             state.reduxTodoList = [...cloneList];

        }
    }
})

export const {increment,showData,updateStatus} = crudSlice.actions;
export default crudSlice.reducer;
