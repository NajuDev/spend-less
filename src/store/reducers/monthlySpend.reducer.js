const initialState = {
    mortgage: {
        amount: 0,
        fromAge: 30,
        toAge: 65
    },
    bills: {
        amount: 0,
        fromAge: 30,
        toAge: 65
    },
    general: {
        amount: 0,
        fromAge: 30,
        toAge: 65
    }
};

export const monthlySpendingReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    };
};