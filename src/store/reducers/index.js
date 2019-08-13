import { combineReducers } from 'redux';
import { annualIncomeReducer } from './annualIncome.reducer';
import { monthlySpendingReducer } from './monthlySpend.reducer';
import { appStateReducer } from './appState.reducer';

export const rootReducer = combineReducers(
    {
        appState: appStateReducer,
        annualIncome: annualIncomeReducer,
        monthlySpending: monthlySpendingReducer
    }
);