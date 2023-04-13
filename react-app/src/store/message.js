import { loadActiveChannelThunk } from "./activeChannel"

const normalizer = (data) => {
  const obj = {}
  data.forEach((item) => {
    obj[item.id] = item
  })
  return obj
}

const LOAD_MESSAGE = "messages/LOAD_MESSAGE";
const CREATE_MESSAGE = "messages/CREATE_MESSAGE";
const UPDATE_MESSAGE = "messages/UPDATE_MESSAGE";
const DELETE_MESSAGE = "messages/DELETE_MESSAGE";

const loadMessages = (allMessageData) => ({
  type: LOAD_MESSAGE,
  payload: allMessageData,
});

const createMessage = (newMessageData) => ({
  type: CREATE_MESSAGE,
  payload: newMessageData,
});

const updateMessage = (updatedMessageData) => ({
  type: UPDATE_MESSAGE,
  payload: updatedMessageData,
});
const deleteMessage = (messageId) => ({
  type: DELETE_MESSAGE,
  payload: messageId,
});

export const getAllChannelMessagesThunk = (channelId) => async (dispatch) => {
  const response = await fetch(`/api/messages/${channelId}`);

  if (response.ok) {
    const allMessageData = await response.json();
    const normalizedMessageData = normalizer(allMessageData);
    dispatch(loadMessages(normalizedMessageData));
  }
};

export const getMessageByIdThunk = (messageId) => async (dispatch) => {
  const response = await fetch(`/api/messages/${messageId}`);

  if (response.ok) {
    const singleMessageData = await response.json();
    const normalizedMessageData = {
      [singleMessageData.id]: singleMessageData
    };
    dispatch(loadMessages(normalizedMessageData));
  }
};

export const createMessageThunk = (newMessageData) => async (dispatch) => {
  try {
    const response = await fetch(`/api/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMessageData),
    });

    const data = await response.json();
    const normalizedMessageData = {
      [data.id]: data
    };
    dispatch(createMessage(normalizedMessageData));
    dispatch(loadActiveChannelThunk(data.channel_id))
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateMessageThunk =
  (newMessageData, messageId) => async (dispatch) => {
    try {
      const response = await fetch(`/api/messages/${messageId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newMessageData),
      });
      const data = await response.json();
      const normalizedMessageData = {
        [data.id]: data
      };
      dispatch(updateMessage(normalizedMessageData));
      dispatch(loadActiveChannelThunk(data.channel_id))
      return data;
    } catch (error) {
      console.log(error);
    }
  };

export const deleteMessageThunk = (messageId) => async (dispatch) => {
  const response = await fetch(`/api/messages/${messageId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(deleteMessage(messageId));
  }
};


const initialState = {};

const messagesReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case LOAD_MESSAGE:
      return { ...state, ...action.payload };
    case CREATE_MESSAGE:
      return { ...state, ...action.payload };
    case UPDATE_MESSAGE:
      return { ...state, ...action.payload };
    case DELETE_MESSAGE:
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};

export default messagesReducer;
