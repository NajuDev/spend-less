const initialState = {
    feedback: undefined,
};

export const appStateReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUBMIT_FEEDBACK':
            return {
                ...state,
                feedback: action.value
            };
        default:
            return state;
    }
};