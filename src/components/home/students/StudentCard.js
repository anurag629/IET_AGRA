import React from 'react';

const StudentCard = ({ name, cgpa, imageUrl }) => {
    return (
        <div className="text-center text-gray-500 dark:text-gray-400">
            <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={imageUrl} alt={`${name} Avatar`} />
            <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <a href="/">{name}</a>
            </h3>
            <p>{cgpa}</p>
        </div>
    );
};

export default StudentCard;
