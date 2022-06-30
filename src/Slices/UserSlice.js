import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name:"User",
    initialState:{ user:{},userLoggedIn:false},
    reducers:{
        loginUser(state,action){
            // state.user = action.payload
            // state.userLoggedIn = true
            let newstate = {user:action.payload,userLoggedIn:true}
            return newstate
        },
        logoutUser(state){
            state.user = {}
            state.userLoggedIn = false
        },
        getUserFollowing(state,action){
            let newstate = {...state,user:{...state.user,followings:action.payload}}
            return newstate
        }
    },
})

export const userActions = userSlice.actions