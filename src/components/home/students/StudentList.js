import React from 'react';
import StudentCard from './StudentCard';

const StudentList = () => {
    const students = [
        {
            name: 'Lana Byrd',
            role: '9.8 CGPA',
            imageUrl: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png',

        },
        {
            name: 'Lana Byrd',
            role: '9.8 CGPA',
            imageUrl: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png',

        },
        {
            name: 'Lana Byrd',
            role: '9.8 CGPA',
            imageUrl: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png',

        },
        {
            name: 'Lana Byrd',
            role: '9.8 CGPA',
            imageUrl: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png',

        },
       
        // Add other students here
    ];

    return (
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {students.map((student, index) => (
                <StudentCard key={index} {...student} />
            ))}
        </div>
    );
};

export default StudentList;
