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
    value: 0,
    reduxTodoList: []
}

const crudSlice = createSlice({
    name: 'curdApplication',
    initialState,
    reducers: {
        increment: (state, action) => {
            // console.log("Action1 ", action)
        },
        showData: (state, action) => {
            const { payload } = action;
            state.reduxTodoList = [...payload];
            // console.log(state.todoList)
        },
        addItemToList: (state, action) => {
            const { payload } = action;

            //Generate New ID By Date Function 
            const generateUniqueID = Math.floor(Math.random() * 1000);
            //fetch last 3 digit of currentDate
            let cur_date = Date.now().toString();
            let newID = cur_date.slice(-3) + generateUniqueID.toString();

            //make new object
            let newItem = {
                id: newID,
                task: payload.value,
                date: `${payload.curTime} | ${payload.currentDate}`,
                status: true
            }
            state.reduxTodoList = [
                ...state.reduxTodoList,
                newItem
            ]
            state.reduxTodoList
        }
        ,
        updateStatus: (state, action) => {
            //Updated Object
            let { payload } = action;
            //Index number of object
            const indexVal = state.reduxTodoList.findIndex((item) => item.id == payload.id);
            const cloneList = [...state.reduxTodoList];
            cloneList.splice(indexVal, 1, payload);
            state.reduxTodoList = [...cloneList];
        },
        deleteItem:(state,action)=>{
            let {payload} = action;
            let result = state.reduxTodoList.filter((item)=> item.id !== payload);
            state.reduxTodoList = [...result];
        }
    }
})

export const { increment, showData, updateStatus, addItemToList,deleteItem } = crudSlice.actions;
export default crudSlice.reducer;
