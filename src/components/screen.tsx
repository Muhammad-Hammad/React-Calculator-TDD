import React from 'react';

interface props {
    input?: string;
    className?: string;
}

function Screen({input, className}:props) {
    return (
        <input
        type="text"
        defaultValue={input}
        placeholder="Calculate..."
        className={className}
        disabled
      />
    )
}

export default React.memo(Screen);
