import React from 'react';

export const CurrencyInputs = (
    {
        currency = '£',
        amount,
        fromAge,
        toAge,
        name,
        handleAmountChange,
        handlFromAgeChange,
        handleToAgeChange
    }
) => (
    <article>
        <label>
            { name }
            <input
                defaultValue={ `${ currency }${amount}` }
                type="text"
                pattern="/\n/"
                onChange={ handleAmountChange }
            />
        </label>
        <label>
            From age:
            <input
                defaultValue={ fromAge }
                type="text"
                pattern="/\n/"
                maxLength="2"
                onChange={ handlFromAgeChange }
            />
        </label>
        <label>
            To age:
            <input
                defaultValue={ toAge }
                type="text"
                pattern="/\n/"
                maxLength="2"
                onChange={ handleToAgeChange }
            />
        </label>
    </article>
);
