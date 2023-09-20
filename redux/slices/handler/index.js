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
            let reply = await axios.post("https://axeom-demos.onrender.com/api/v1/prediction/0bc7ea74-6394-4a42-90da-c38ba3b90fa2", payload);
            return dispatch(getFlowiseReply(reply.data))
        } catch (error) {
            return console.log('flow', (error))
        }

    }
}

export default handlerSlice.reducer