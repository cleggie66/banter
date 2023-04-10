const READ_CHANNELS = "channels/READ_CHANNELS";

const read = (channels) => ({
    type: READ_CHANNELS,
    channels
});

export const getAllChannels = () => async (dispatch) => {
    const res = await fetch(`/api/channels`);

    if (res.ok) {
        const channels = await res.json();
        dispatch(read(channels));
    }
}


const initialState = {};

const channelReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case READ_CHANNELS:
            newState = {...state};
            const allChannels = {};
            action.channels.forEach((channel) => {
                allChannels[channel.id] = channel;
            })

            newState.allChannels = allChannels
            console.log(newState)
            return newState;

        default:
            return state;
    }
}

export default channelReducer;
