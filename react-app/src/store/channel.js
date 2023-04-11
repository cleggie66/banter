const LOAD_CHANNELS = "channels/LOAD_CHANNELS";
const CREATE_CHANNEL = "spots/CREATE_CHANNEL";
const UPDATE_CHANNEL = "spots/UPDATE_CHANNEL";
const DELETE_CHANNEL = "spots/DELETE_CHANNEL";

const loadChannels = (allChannelData) => ({
  type: LOAD_CHANNELS,
  payload: allChannelData,
});

const createChannel = (newChannelData) => ({
  type: CREATE_CHANNEL,
  payload: newChannelData,
});

const updateChannel = (updatedChannelData) => ({
  type: UPDATE_CHANNEL,
  payload: updatedChannelData,
});
const deleteChannel = (channelId) => ({
  type: DELETE_CHANNEL,
  payload: channelId,
});

export const getAllChannelsThunk = () => async (dispatch) => {
  const response = await fetch(`/api/channels`);

  if (response.ok) {
    const channels = await response.json();
    const normalizedChannelData = {};
    channels.forEach((e) => {
      normalizedChannelData[e.id] = e;
    });
    dispatch(loadChannels(normalizedChannelData));
  }
};

export const getChannelByIdThunk = (channelId) => async (dispatch) => {
  const response = await csrfFetch(`/api/channels/${channelId}`);

  if (response.ok) {
    const singleChannelData = await response.json();
    const normalizedChannelData = {};
    normalizedChannelData[singleChannelData.id] = singleChannelData;
    dispatch(loadChannels(normalizedChannelData));
  }
};

const initialState = {};

const channelReducer = (state = initialState, action) => {
  // let newState;
  switch (action.type) {
    case LOAD_CHANNELS:
      return { ...state, ...action.payload };
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
};

export default channelReducer;
