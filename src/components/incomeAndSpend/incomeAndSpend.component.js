import React from 'react';

import { CurrencyInputs } from './../currencyInputs.component';

export const IncomeAndSpend = (
    {
        salaryLabel,
        salaryAmount,
        salaryFromAge,
        salaryToAge,
        handleSalaryAmount,
        handleSalaryFromAge,
        handleSalaryToAge,
        mortgageLabel,
        mortgageAmount,
        mortgageFromAge,
        mortgageToAge,
        handleMortgageAmount,
        handleMortgageFromAge,
        handleMortgageToAge,
        billsLabel,
        billsAmount,
        billsFromAge,
        billsToAge,
        handleBillsAmount,
        handleBillsFromAge,
        handleBillsToAge,
        generalLabel,
        generalAmount,
        generalFromAge,
        generalToAge,
        handleGeneralAmount,
        handleGeneralFromAge,
        handleGeneralToAge,
    }
) => (
    <article>
        <h1>Your Spend &amp; Income</h1>
        <h2>Annual Income</h2>
        <CurrencyInputs
            name={ salaryLabel }
            amount={ salaryAmount }
            fromAge={ salaryFromAge }
            toAge={ salaryToAge }
            handleAmountChange={ handleSalaryAmount }
            handlFromAgeChange={ handleSalaryFromAge }
            handleToAgeChange={ handleSalaryToAge }
        />
        <h2>Monthly Spending</h2>
        <CurrencyInputs
            name={ mortgageLabel }
            amount={ mortgageAmount }
            fromAge={ mortgageFromAge }
            toAge={ mortgageToAge }
            handleAmountChange={ handleMortgageAmount }
            handlFromAgeChange={ handleMortgageFromAge }
            handleToAgeChange={ handleMortgageToAge }
        />
        <CurrencyInputs
            name={ billsLabel }
            amount={ billsAmount }
            fromAge={ billsFromAge }
            toAge={ billsToAge }
            handleAmountChange={ handleBillsAmount }
            handlFromAgeChange={ handleBillsFromAge }
            handleToAgeChange={ handleBillsToAge }
        />
        <CurrencyInputs
            name={ generalLabel }
            amount={ generalAmount }
            fromAge={ generalFromAge }
            toAge={ generalToAge }
            handleAmountChange={ handleGeneralAmount }
            handlFromAgeChange={ handleGeneralFromAge }
            handleToAgeChange={ handleGeneralToAge }
        />
    </article>
);