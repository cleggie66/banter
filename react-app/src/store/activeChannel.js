const LOAD_ACTIVE_CHANNEL = "activeChannel/LOAD_ACTIVE_CHANNEL"
const CLEAR_CHANNEL = 'activeChannel/CLEAR_CHANNEL'

const loadActiveChannel = (channel) => ({
    type: LOAD_ACTIVE_CHANNEL,
    payload: channel
});

const clearChannel = () => ({
    type: CLEAR_CHANNEL,
    payload: {}
})

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

export const clearActiveChannelThunk = () => async (dispatch) => {
    dispatch(clearChannel())
}

const activeChannelReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_ACTIVE_CHANNEL:
            return action.payload
        case CLEAR_CHANNEL:
            return {}
        default:
            return state
    }
}

export default activeChannelReducer
