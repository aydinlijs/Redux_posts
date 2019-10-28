import React from 'react';
import './style/placeholder.css';

export const Loading = () => {
    return (
        <div className="placeholder-box">
            <div className="animate-cursor"><h2>Loading...</h2></div>
        </div>
    )
}


export const Error = props => {
    return (
        <div className="placeholder-box">
            <div className="animate-cursor"><h2>{props.message}</h2></div>
        </div>
    )
}