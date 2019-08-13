const initialState = {
    annualSalary: {
        amount: 0,
        fromAge: 30,
        toAge: 65
    }
};

export const annualIncomeReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    };
}