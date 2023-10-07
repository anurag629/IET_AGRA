import React from 'react';
import News from './News';
import Event from './Event';

const NewsAndEvent = () => {
    const news = {
        title: 'Latest News',
        description: 'This is the latest news'
    };

    const event = {
        title: 'Upcoming Event',
        description: 'This is the upcoming event'
    };

    return (
        <div className="row">
            <div className="col-md-6">
                <News news={news} />
            </div>
            <div className="col-md-6">
                <Event event={event} />
            </div>
        </div>
    );
};

export default NewsAndEvent;
