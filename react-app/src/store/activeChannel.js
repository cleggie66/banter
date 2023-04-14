const LOAD_ACTIVE_CHANNEL = "activeChannel/LOAD_ACTIVE_CHANNEL"
const CLEAR_CHANNEL = 'activeChannel/CLEAR_CHANNEL'

export const loadActiveChannel = (id) => ({
    type: LOAD_ACTIVE_CHANNEL,
    id
});

export const clearActiveChannel = () => ({
    type: CLEAR_CHANNEL,
})




// Should only pull data from exisiting redux stores
// instead of thunks only have action creaters 
// 

const activeChannelReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_ACTIVE_CHANNEL:
            return {id: action.id}
        case CLEAR_CHANNEL:
            return {}
        default:
            return state
    }
}

export default activeChannelReducer
