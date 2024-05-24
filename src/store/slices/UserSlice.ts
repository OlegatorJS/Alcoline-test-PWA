import { createSlice, current } from "@reduxjs/toolkit";

interface UserState {
    online: boolean;
    isWorkStarted: boolean;
}

const initialState: UserState = {
    online: false,
    isWorkStarted: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setStatus: (state, action) => {
            console.log(current(state));
            console.log(action);
            state.online = action.payload;
        },
        setWorkStatus: (state, action) => {
            console.log(current(state));
            console.log(action);
            state.isWorkStarted = action.payload;
        },
    },
});

console.log(initialState);

export const { setStatus , setWorkStatus} = userSlice.actions;

export default userSlice.reducer;
