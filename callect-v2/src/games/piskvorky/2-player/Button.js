import React, { useState } from 'react';
import './Field.css';

const Button = ({ value, onClick }) => {
    return (
        <button className='btntn' onClick={onClick}>
            <p className='bbtntn'>{value}</p>
        </button>
    )
};

export default Button;