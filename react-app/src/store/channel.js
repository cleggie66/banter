import { clearActiveChannel } from "./activeChannel";

const LOAD_CHANNELS = "channels/LOAD_CHANNELS";
const CREATE_CHANNEL = "channels/CREATE_CHANNEL";
const UPDATE_CHANNEL = "channels/UPDATE_CHANNEL";
const DELETE_CHANNEL = "channels/DELETE_CHANNEL";

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
    const allChannelData = await response.json();
    const normalizedChannelData = {};
    allChannelData.forEach((e) => {
      normalizedChannelData[e.id] = e;
    });
    dispatch(loadChannels(normalizedChannelData));
  }
};

export const getChannelByIdThunk = (channelId) => async (dispatch) => {
  const response = await fetch(`/api/channels/${channelId}`);

  if (response.ok) {
    const singleChannelData = await response.json();
    const normalizedChannelData = {};
    normalizedChannelData[singleChannelData.id] = singleChannelData;
    dispatch(loadChannels(normalizedChannelData));
  }
};

export const createChannelThunk = (newChannelData) => async (dispatch) => {
  try {
    const response = await fetch(`/api/channels`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newChannelData),
    });

    const data = await response.json();
    const normalizedChannelData = {};
    normalizedChannelData[data.id] = data;
    dispatch(createChannel(normalizedChannelData));
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateChannelThunk =
  (newChannelData, channelId) => async (dispatch) => {
    try {
      const response = await fetch(`/api/channels/${channelId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newChannelData),
      });
      const data = await response.json();
      const normalizedChannelData = {};
      normalizedChannelData[data.id] = data;
      dispatch(updateChannel(normalizedChannelData));
      return data;
    } catch (error) {
      console.log(error);
    }
  };

export const deleteChannelThunk = (channelId) => async (dispatch) => {
  const response = await fetch(`/api/channels/${channelId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(deleteChannel(channelId));
    dispatch(clearActiveChannel());
  }
};

export const addUserToChannelThunk =
  (userId, channelId) => async (dispatch) => {
    try {
      const response = await fetch(`/api/channels/${channelId}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId,
        }),
      });
      const data = await response.json();
      const normalizedChannelData = {};
      normalizedChannelData[data.id] = data;
      dispatch(loadChannels(normalizedChannelData));

      return data;
    } catch (error) {
      console.log(error);
    }
  };

const initialState = {};

const channelsReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOAD_CHANNELS:
      return { ...state, ...action.payload };
    case CREATE_CHANNEL:
      return { ...state, ...action.payload };
    case UPDATE_CHANNEL:
      return { ...state, ...action.payload };
    case DELETE_CHANNEL:
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};

export default channelsReducer;
