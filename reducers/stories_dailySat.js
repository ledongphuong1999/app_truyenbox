const dailyInitialState = []
const dailySat = (state = dailyInitialState, action) => {
    switch (action.type) {
        case 'GET_STORIES_DAILY_SAT':
            state = action.stories;
            return [...state];
        default:
            return state
    }
}

export default dailySat;