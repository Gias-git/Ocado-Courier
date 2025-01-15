import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressPercentage = ({ProgressPercentage,stroke }) => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const timer = setInterval(() => {
            setPercentage((prev) => {
                if (prev >= ProgressPercentage) {
                    clearInterval(timer);
                    return ProgressPercentage;
                }
                return prev + 1;
            });
        }, 30); // Adjust the interval to control animation speed
    }, []);

    return (
        <div style={{ width: 75, height: 75 }}>
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                styles={{
                    path: {
                        stroke: stroke, // Green color for progress
                        strokeLinecap: 'butt', // Flat ends for the stroke
                        transition: 'stroke-dashoffset 0.5s ease 0s', // Smooth animation
                        transform: 'rotate(0.95turn)', // Rotate the progress
                        transformOrigin: 'center center',
                    },
                    trail: {
                        stroke: 'rgb(77, 77, 77)', // Gray background circle
                        strokeLinecap: 'butt',
                        transform: 'rotate(0.25turn)', // Rotate the trail
                        transformOrigin: 'center center',
                    },
                    text: {
                        fill: '#000', // Black text color
                        fontSize: '20px', // Text size
                        fontWeight: 'bold',
                    },
                }}
                strokeWidth={13}
            />
        </div>
    );
};

export default CircularProgressPercentage;
