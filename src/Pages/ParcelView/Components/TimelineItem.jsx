import React from 'react';

const TimelineItem = ({ date, time, status, details }) => {
    return (
        <div className="timeline-item ">
            <div className="time">
                {date} <span>{time}</span>
            </div>
            <div className="status">{status}</div>
            <div className="details">{details}</div>
        </div>
    );
};

export default TimelineItem;