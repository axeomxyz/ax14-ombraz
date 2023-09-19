import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const handlerSlice = createSlice({
    name: 'requests',
    initialState: {
        flowiseReply: ''
    },
    reducers: {
        getFlowiseReply: (state, action) => {
            state.flowiseReply = action.payload
        }
    }
})

const { getFlowiseReply } = handlerSlice.actions

export function flowiseReply(payload) {
    return async function (dispatch) {
        try {
            let reply = await axios.post("http://localhost:3000/api/v1/prediction/007217da-7d63-418b-ba61-cfebc15f8a8e", payload);
            return dispatch(getFlowiseReply(reply.data))
        } catch (error) {
            return console.log('flow', (error))
        }

    }
}

export default handlerSlice.reducer