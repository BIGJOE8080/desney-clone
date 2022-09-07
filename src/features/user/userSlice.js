import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    name: "",
    emal: "",
    photo: "",
}

const userSlice = createSlice ({
    name: "user",
    initialState,
    reducers: {
        setUserLogin: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },
        setSignOut: (state) =>{
            state.name = null;
            state.email = null;
            state.photo = null;
        }
    }
})

    export const { setUserLogin, setSignOut} = userSlice.actiona;

    export const selectUserName = (state) => state.user.name;
    export const selectUserEmail = (state) => state.user.email;
    export const selectUserPhoto = (state) => state.user.phot;

    export default userSlice.reducer;