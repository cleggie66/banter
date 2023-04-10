const READ_CHANNELS = "channels/READ_CHANNELS";

const read = (allChannels) => ({
    type: READ_CHANNELS,
    payload: allChannels
});

export const getAllChannels = () => async (dispatch) => {
    const res = await fetch(`/api/channels`);

    if (res.ok) {
        const channels = await res.json();
        const normalizedChannelData = {}
        channels.forEach((e) => {
            normalizedChannelData[e.id] = e
        })
        console.log("THUNK", normalizedChannelData)
        dispatch(read(normalizedChannelData));
    }
}


const initialState = {};

const channelReducer = (state = initialState, action) => {
    // let newState;
    switch(action.type) {
        case READ_CHANNELS:
            return {...state, ...action.payload}
            // newState = {...state};
            // const allChannels = {};
            // action.channels.forEach((channel) => {
            //     allChannels[channel.id] = channel;
            // })
            // newState.allChannels = allChannels
            // console.log(newState)
            // return newState;
        default:
            return state;
    }
}

export default channelReducer;
