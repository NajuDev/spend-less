import React from 'react';

export const SpendLess = (
    {
        calc,
        feedback,
        handleFeedback
    }
) => (
    <article>
        <h1>Spend Less</h1>
        <p>Try reducing your monthly spending to see how your forecast could improve!</p>
        {/* sliders */}
        <p>
            <strong>This means you're saving <span>£{ calc }</span> per month</strong>
        </p>
        <a
            className="button"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
        >Find ways to save</a>
        <div>
            {
                feedback === undefined
                    ? (
                        <React.Fragment>
                            <p>Was this helpful?</p>
                            <button
                                onClick={ () => handleFeedback(true) }
                            >Yes</button>
                            <button
                                onClick={ () => handleFeedback(false) }
                            >No</button>
                        </React.Fragment>
                    )
                    : null
            }
        </div>
    </article>
);
