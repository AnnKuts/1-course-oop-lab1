import React from 'react';

const Slider = ({ min, max, value, onChange, step = 1, className = '' }) => {
    return (
        <input
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={onChange}
            step={step}
            className={`slider ${className}`}
        />
    );
}

export default Slider;