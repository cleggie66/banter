const LOAD_ACTIVE_CHANNEL = "activeChannel/LOAD_ACTIVE_CHANNEL"

const loadActiveChannel = (channel) => ({
    type: LOAD_ACTIVE_CHANNEL,
    payload: channel
});

export const loadActiveChannelThunk = (channelId) => async (dispatch) => {
    try {
        // BACKEND FIX INT RESTRICTION
        const response = await fetch(`/api/channels/${channelId}`)
        if (response.ok) {
            const channel = await response.json();
            dispatch(loadActiveChannel(channel))
        }
    } catch (error) {
        console.log(error)
    }
}

const activeChannelReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_ACTIVE_CHANNEL:
            return action.payload
        default:
            return state
    }
}

export default activeChannelReducer